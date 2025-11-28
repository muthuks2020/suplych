/**
 * ShellKode AI - Multi-Warehouse Optimizer Agent
 * js/multi-warehouse-agent.js
 */

class MultiWarehouseAgent extends BaseAgent {
    constructor() {
        super({
            name: 'Multi-Warehouse Optimizer Agent',
            steps: [
                'Data Ingestion',
                'Network Mapping',
                'Demand Allocation',
                'Transfer Optimization',
                'Route Planning',
                'Recommendations'
            ],
            logMessages: [
                { step: 0, tag: 'DATA', text: 'Loading warehouse inventory data... 165 records', delay: 300 },
                { step: 0, tag: 'DATA', text: 'Warehouse network mapped: 44 locations, 15 cities', delay: 400 },
                { step: 0, tag: 'DATA', text: 'Regional demand patterns loaded', delay: 350 },
                { step: 1, tag: 'ANALYSIS', text: 'Analyzing warehouse capacity utilization...', delay: 450 },
                { step: 1, tag: 'ANALYSIS', text: 'Mumbai: 94% | Delhi: 87% | Bangalore: 92%', delay: 400 },
                { step: 1, tag: 'INSIGHT', text: '🏭 Delhi showing capacity strain - 13% overstock', delay: 450 },
                { step: 2, tag: 'MODEL', text: 'Calculating optimal stock distribution...', delay: 500 },
                { step: 2, tag: 'MODEL', text: 'Regional demand weights applied per category', delay: 400 },
                { step: 2, tag: 'INSIGHT', text: '📍 North: +34% ethnic demand vs South: +28% western', delay: 450 },
                { step: 3, tag: 'MODEL', text: 'Running transfer optimization algorithm...', delay: 400 },
                { step: 3, tag: 'MODEL', text: 'Cost matrix: Transport + Handling + Opportunity', delay: 450 },
                { step: 3, tag: 'SUCCESS', text: '✓ 3 optimal transfers identified: ₹24.5L value', delay: 400 },
                { step: 4, tag: 'ANALYSIS', text: 'Optimizing delivery routes and timing...', delay: 500 },
                { step: 4, tag: 'ANALYSIS', text: 'Avg delivery: 2.1 days (down from 3.4 days)', delay: 450 },
                { step: 4, tag: 'INSIGHT', text: '🚚 Same-day delivery possible for 45% of orders', delay: 400 },
                { step: 5, tag: 'SUCCESS', text: 'Generating warehouse recommendations...', delay: 450 },
                { step: 5, tag: 'SUCCESS', text: '✓ Network optimization: 91% fill rate achievable', delay: 400 },
                { step: 5, tag: 'INSIGHT', text: '💰 Transfer cost savings: ₹6.5Cr quarterly', delay: 350 }
            ]
        });
    }

    animateMetrics() {
        const metrics = [
            { id: 'metricWarehouses', start: 0, end: 44, suffix: '' },
            { id: 'metricFillRate', start: 0, end: 91, suffix: '%' },
            { id: 'metricDelivery', start: 3.4, end: 2.1, suffix: ' Days' },
            { id: 'metricSavings', start: 0, end: 6.5, suffix: 'Cr', prefix: '₹' }
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
        const ctx = document.getElementById('warehouseChart');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad'],
                    datasets: [
                        { label: 'Fill Rate (%)', data: [94, 87, 92, 88, 89, 85, 90, 86], backgroundColor: '#4daae8', borderRadius: 4 },
                        { label: 'On-Time Delivery (%)', data: [96, 91, 94, 89, 92, 87, 93, 88], backgroundColor: '#146eb4', borderRadius: 4 }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom' } },
                    scales: { y: { beginAtZero: true, max: 100 } },
                    animation: { duration: 2000, easing: 'easeOutQuart' }
                }
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.agent = new MultiWarehouseAgent();
});
