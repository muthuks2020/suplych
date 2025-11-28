/**
 * ShellKode AI - Inventory Optimization Agent
 * js/inventory-optimization-agent.js
 */

class InventoryOptimizationAgent extends BaseAgent {
    constructor() {
        super({
            name: 'Inventory Optimization Agent',
            steps: [
                'Data Ingestion',
                'Stock Analysis',
                'Safety Stock Calc',
                'Reorder Points',
                'Transfer Planning',
                'Optimization'
            ],
            logMessages: [
                { step: 0, tag: 'DATA', text: 'Loading inventory data... 165 records ingested', delay: 300 },
                { step: 0, tag: 'DATA', text: 'Mapping SKUs to warehouses: 3 locations identified', delay: 400 },
                { step: 0, tag: 'DATA', text: 'Historical velocity data loaded: 15 days', delay: 350 },
                { step: 1, tag: 'ANALYSIS', text: 'Calculating current stock levels per SKU-warehouse...', delay: 450 },
                { step: 1, tag: 'ANALYSIS', text: 'Inventory turnover analysis: avg 4.2 turns/month', delay: 400 },
                { step: 1, tag: 'INSIGHT', text: '⚠️ 12 SKUs at critical stock levels in Delhi', delay: 450 },
                { step: 2, tag: 'MODEL', text: 'Computing safety stock using demand variability...', delay: 500 },
                { step: 2, tag: 'MODEL', text: 'Service level target: 95% | Lead time: 3 days', delay: 400 },
                { step: 2, tag: 'SUCCESS', text: '✓ Safety stock calculated for 150 SKU-warehouse pairs', delay: 450 },
                { step: 3, tag: 'MODEL', text: 'Determining optimal reorder points...', delay: 400 },
                { step: 3, tag: 'MODEL', text: 'EOQ model applied with holding cost ₹15/unit/day', delay: 450 },
                { step: 3, tag: 'INSIGHT', text: '📦 28 SKUs flagged for immediate reorder', delay: 400 },
                { step: 4, tag: 'ANALYSIS', text: 'Analyzing inter-warehouse transfer opportunities...', delay: 500 },
                { step: 4, tag: 'ANALYSIS', text: 'Mumbai→Delhi transfer: 12 SKUs, 450 units optimal', delay: 450 },
                { step: 4, tag: 'SUCCESS', text: '✓ Transfer plan generated: ₹6.5Cr logistics savings', delay: 400 },
                { step: 5, tag: 'SUCCESS', text: 'Running multi-objective optimization...', delay: 450 },
                { step: 5, tag: 'SUCCESS', text: '✓ Optimization complete: 34% inventory reduction possible', delay: 400 },
                { step: 5, tag: 'INSIGHT', text: '💰 Working capital freed: ₹18.5Cr identified', delay: 350 }
            ]
        });
    }

    animateMetrics() {
        const metrics = [
            { id: 'metricReduction', start: 0, end: 34, suffix: '%' },
            { id: 'metricCapital', start: 0, end: 18.5, suffix: 'Cr', prefix: '₹' },
            { id: 'metricFillRate', start: 0, end: 91, suffix: '%' },
            { id: 'metricAlerts', start: 0, end: 12, suffix: '' }
        ];

        metrics.forEach((metric, index) => {
            setTimeout(() => {
                const el = document.getElementById(metric.id);
                if (el) {
                    AgentUtils.animateValue(el, metric.start, metric.end, metric.suffix, metric.prefix || '', 1500);
                    el.closest('.metric-card')?.classList.add('highlight');
                }
            }, index * 400);
        });
    }

    createCharts() {
        const ctx = document.getElementById('inventoryChart');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad'],
                    datasets: [
                        { label: 'Healthy', data: [78, 65, 82, 71, 76], backgroundColor: '#28a745', borderRadius: 4 },
                        { label: 'Low Stock', data: [15, 25, 12, 18, 16], backgroundColor: '#ff9900', borderRadius: 4 },
                        { label: 'Overstock', data: [7, 10, 6, 11, 8], backgroundColor: '#dc3545', borderRadius: 4 }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom' } },
                    scales: {
                        x: { stacked: true },
                        y: { stacked: true, title: { display: true, text: 'SKU Distribution (%)' } }
                    },
                    animation: { duration: 2000, easing: 'easeOutQuart' }
                }
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.agent = new InventoryOptimizationAgent();
});
