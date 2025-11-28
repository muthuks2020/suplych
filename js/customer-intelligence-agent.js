/**
 * ShellKode AI - Customer Intelligence Agent
 * js/customer-intelligence-agent.js
 */

class CustomerIntelligenceAgent extends BaseAgent {
    constructor() {
        super({
            name: 'Customer Intelligence Agent',
            steps: [
                'Data Ingestion',
                'Segmentation',
                'Behavior Analysis',
                'LTV Modeling',
                'Churn Prediction',
                'Recommendations'
            ],
            logMessages: [
                { step: 0, tag: 'DATA', text: 'Loading customer transaction data... 165 records', delay: 300 },
                { step: 0, tag: 'DATA', text: 'Customer profiles enriched: demographics, preferences', delay: 400 },
                { step: 0, tag: 'DATA', text: 'Purchase history mapped: 15M+ customers', delay: 350 },
                { step: 1, tag: 'MODEL', text: 'Running K-means clustering algorithm...', delay: 450 },
                { step: 1, tag: 'MODEL', text: 'Optimal clusters identified: 4 distinct segments', delay: 400 },
                { step: 1, tag: 'INSIGHT', text: '👑 Premium Loyalists: 18% of base, 45% of revenue', delay: 450 },
                { step: 2, tag: 'ANALYSIS', text: 'Analyzing purchase patterns and preferences...', delay: 500 },
                { step: 2, tag: 'ANALYSIS', text: 'Style preferences mapped: Ethnic 35%, Western 28%', delay: 400 },
                { step: 2, tag: 'INSIGHT', text: '🛍️ Avg basket size: Premium ₹4,500 vs Regular ₹1,800', delay: 450 },
                { step: 3, tag: 'MODEL', text: 'Calculating Customer Lifetime Value...', delay: 400 },
                { step: 3, tag: 'MODEL', text: 'LTV model: RFM + Predictive purchase probability', delay: 450 },
                { step: 3, tag: 'SUCCESS', text: '✓ Avg LTV: ₹4,850 | Premium: ₹12,500', delay: 400 },
                { step: 4, tag: 'MODEL', text: 'Training churn prediction model...', delay: 500 },
                { step: 4, tag: 'MODEL', text: 'Risk factors: Inactivity, declining frequency, complaints', delay: 450 },
                { step: 4, tag: 'INSIGHT', text: '⚠️ 2.1L customers showing pre-churn signals', delay: 400 },
                { step: 5, tag: 'SUCCESS', text: 'Generating personalization recommendations...', delay: 450 },
                { step: 5, tag: 'SUCCESS', text: '✓ Retention campaigns: ₹8.5Cr LTV at risk', delay: 400 },
                { step: 5, tag: 'INSIGHT', text: '💰 Upgrade potential: 45K customers ready for Premium', delay: 350 }
            ]
        });
    }

    animateMetrics() {
        const metrics = [
            { id: 'metricCustomers', start: 0, end: 15, suffix: 'M+' },
            { id: 'metricRetention', start: 0, end: 82, suffix: '%' },
            { id: 'metricLTV', start: 0, end: 4850, suffix: '', prefix: '₹' },
            { id: 'metricSegments', start: 0, end: 4, suffix: '' }
        ];

        metrics.forEach((metric, index) => {
            setTimeout(() => {
                const el = document.getElementById(metric.id);
                if (el) {
                    if (metric.id === 'metricLTV') {
                        AgentUtils.animateValue(el, metric.start, metric.end, '', metric.prefix, 1500);
                    } else {
                        AgentUtils.animateValue(el, metric.start, metric.end, metric.suffix, metric.prefix || '', 1500);
                    }
                    el.closest('.metric-card')?.classList.add('highlight');
                }
            }, index * 400);
        });
    }

    createCharts() {
        const ctx = document.getElementById('segmentChart');
        if (ctx) {
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Premium Loyalists', 'Regular Shoppers', 'New Explorers', 'At-Risk Dormant'],
                    datasets: [{
                        data: [18, 42, 25, 15],
                        backgroundColor: ['#ffd700', '#4daae8', '#28a745', '#6c757d'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom' } },
                    animation: { duration: 2000, easing: 'easeOutQuart' }
                }
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.agent = new CustomerIntelligenceAgent();
});
