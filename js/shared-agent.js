/**
 * ShellKode AI - Shared Agent Utilities
 * js/shared-agent.js
 */

// Utility Functions
const AgentUtils = {
    // Format file size
    formatFileSize(bytes) {
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },

    // Format currency (INR)
    formatCurrency(value, decimals = 1) {
        if (value >= 10000000) {
            return '₹' + (value / 10000000).toFixed(decimals) + 'Cr';
        } else if (value >= 100000) {
            return '₹' + (value / 100000).toFixed(decimals) + 'L';
        } else if (value >= 1000) {
            return '₹' + (value / 1000).toFixed(decimals) + 'K';
        }
        return '₹' + value.toFixed(decimals);
    },

    // Get current timestamp
    getTimestamp() {
        return new Date().toLocaleTimeString('en-US', { hour12: false });
    },

    // Animate number counting
    animateValue(element, start, end, suffix = '', prefix = '', duration = 2000) {
        const startTime = performance.now();
        const update = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 4); // easeOutQuart
            const current = start + (end - start) * easeProgress;
            element.textContent = prefix + current.toFixed(1) + suffix;
            element.classList.add('counting');
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.classList.remove('counting');
            }
        };
        requestAnimationFrame(update);
    },

    // Delay helper
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    // Random number in range
    random(min, max) {
        return Math.random() * (max - min) + min;
    },

    // Parse CSV file
    parseCSV(text) {
        const lines = text.trim().split('\n');
        const headers = lines[0].split(',').map(h => h.trim());
        const data = [];
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => v.trim());
            const row = {};
            headers.forEach((header, index) => {
                row[header] = values[index];
            });
            data.push(row);
        }
        return { headers, data };
    }
};

// Base Agent Class
class BaseAgent {
    constructor(config) {
        this.name = config.name;
        this.steps = config.steps || [];
        this.logMessages = config.logMessages || [];
        this.currentStep = 0;
        this.isProcessing = false;
        
        // DOM Elements
        this.uploadSection = document.getElementById('uploadSection');
        this.processBtn = document.getElementById('processBtn');
        this.processingSection = document.getElementById('processingSection');
        this.liveLog = document.getElementById('liveLog');
        this.resultsSection = document.getElementById('resultsSection');
        this.fileInput = document.getElementById('csvFile');
        this.fileLabel = document.querySelector('.file-input-label');
        
        this.csvData = null;
        this.init();
    }

    init() {
        // File input handler
        if (this.fileInput) {
            this.fileInput.addEventListener('change', (e) => this.handleFileSelect(e));
        }
        
        // Process button handler
        if (this.processBtn) {
            this.processBtn.addEventListener('click', () => this.startProcessing());
        }
    }

    handleFileSelect(event) {
        const file = event.target.files[0];
        if (file && file.name.endsWith('.csv')) {
            // Update UI
            this.fileLabel.innerHTML = `<i class="fas fa-check-circle"></i> ${file.name}`;
            this.fileLabel.classList.add('loaded');
            this.uploadSection.classList.add('file-loaded');
            this.processBtn.classList.add('show');
            
            // Read file
            const reader = new FileReader();
            reader.onload = (e) => {
                this.csvData = AgentUtils.parseCSV(e.target.result);
                console.log('CSV Loaded:', this.csvData.data.length, 'rows');
            };
            reader.readAsText(file);
        }
    }

    async startProcessing() {
        if (this.isProcessing || !this.csvData) return;
        this.isProcessing = true;
        
        // Disable button
        this.processBtn.disabled = true;
        this.processBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        
        // Show processing section
        this.processingSection.classList.add('show');
        this.processingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Run pipeline
        await this.runPipeline();
        
        // Show results
        await AgentUtils.delay(500);
        this.showResults();
        
        this.isProcessing = false;
    }

    async runPipeline() {
        const stepElements = document.querySelectorAll('.pipeline-step');
        const connectors = document.querySelectorAll('.step-connector');
        
        for (let i = 0; i < this.steps.length; i++) {
            // Activate current step
            const stepIcon = stepElements[i]?.querySelector('.step-icon');
            const stepLabel = stepElements[i]?.querySelector('.step-label');
            
            if (stepIcon) {
                stepIcon.classList.add('active');
                stepLabel?.classList.add('active');
            }
            
            // Log messages for this step
            const stepMessages = this.logMessages.filter(m => m.step === i);
            for (const msg of stepMessages) {
                await AgentUtils.delay(msg.delay || 400);
                this.addLogEntry(msg.tag, msg.text);
            }
            
            // Complete step
            await AgentUtils.delay(800);
            if (stepIcon) {
                stepIcon.classList.remove('active');
                stepIcon.classList.add('completed');
                stepLabel?.classList.remove('active');
                stepLabel?.classList.add('completed');
            }
            
            // Fill connector
            if (connectors[i]) {
                connectors[i].classList.add('completed');
            }
        }
        
        // Update status
        const statusEl = document.querySelector('.processing-status');
        if (statusEl) {
            statusEl.innerHTML = '<i class="fas fa-check-circle" style="color: var(--success-green);"></i> Complete';
            statusEl.style.background = 'rgba(40,167,69,0.1)';
            statusEl.style.color = 'var(--success-green)';
        }
    }

    addLogEntry(tag, text) {
        if (!this.liveLog) return;
        
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.innerHTML = `
            <span class="log-timestamp">[${AgentUtils.getTimestamp()}]</span>
            <span class="log-tag ${tag.toLowerCase()}">${tag}</span>
            ${text}
        `;
        this.liveLog.appendChild(entry);
        this.liveLog.scrollTop = this.liveLog.scrollHeight;
    }

    showResults() {
        if (this.resultsSection) {
            this.resultsSection.classList.add('show');
            this.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // Animate metrics
        this.animateMetrics();
        
        // Show insights with delay
        const insights = document.querySelectorAll('.insight-card');
        insights.forEach((card, index) => {
            setTimeout(() => card.classList.add('show'), index * 300);
        });
        
        // Create charts
        if (typeof this.createCharts === 'function') {
            this.createCharts();
        }
    }

    animateMetrics() {
        // Override in child class
    }

    createCharts() {
        // Override in child class
    }
}

// Export for use in other files
window.AgentUtils = AgentUtils;
window.BaseAgent = BaseAgent;
