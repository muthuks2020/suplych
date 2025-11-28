/**
 * ShellKode AI - Promotion Planning Agent
 * js/promotion-planning-agent.js
 */

class PromotionPlanningAgent extends BaseAgent {
    constructor() {
        super({
            name: 'Promotion Planning Agent',
            steps: [
                'Data Ingestion',
                'Campaign Analysis',
                'ROI Modeling',
                'Timing Optimization',
                'Discount Strategy',
                'Recommendations'
            ],
            logMessages: [
                { step: 0, tag: 'DATA', text: 'Loading historical campaign data... 165 records', delay: 300 },
                { step: 0, tag: 'DATA', text: 'Promotional calendar mapped: 12 major events/year', delay: 400 },
                { step: 0, tag: 'DATA', text: 'Customer response data loaded: 15M+ transactions', delay: 350 },
                { step: 1, tag: 'ANALYSIS', text: 'Analyzing past campaign performance...', delay: 450 },
                { step: 1, tag: 'ANALYSIS', text: 'Diwali Sale: ₹12.5Cr revenue, 5.2x ROI', delay: 400 },
                { step: 1, tag: 'INSIGHT', text: '🏆 Best performer: Festival sales (avg 4.8x ROI)', delay: 450 },
                { step: 2, tag: 'MODEL', text: 'Building promotional elasticity model...', delay: 500 },
                { step: 2, tag: 'MODEL', text: 'Discount sensitivity by segment calculated', delay: 400 },
                { step: 2, tag: 'INSIGHT', text: '📊 Premium segment: Low discount sensitivity (20% optimal)', delay: 450 },
                { step: 3, tag: 'MODEL', text: 'Optimizing campaign timing windows...', delay: 400 },
                { step: 3, tag: 'MODEL', text: 'Peak traffic days: Friday-Sunday (+45% conversion)', delay: 450 },
                { step: 3, tag: 'INSIGHT', text: '📅 Wedding Season Sale: Feb 5-14 recommended', delay: 400 },
                { step: 4, tag: 'ANALYSIS', text: 'Calculating optimal discount tiers by category...', delay: 500 },
                { step: 4, tag: 'ANALYSIS', text: 'Ethnic: 20-30% | Western: 30-40% | Clearance: 50-60%', delay: 450 },
                { step: 4, tag: 'SUCCESS', text: '✓ Discount matrix optimized for margin protection', delay: 400 },
                { step: 5, tag: 'SUCCESS', text: 'Generating campaign recommendations...', delay: 450 },
                { step: 5, tag: 'SUCCESS', text: '✓ 2 campaigns planned with ₹12.7Cr projected revenue', delay: 400 },
                { step: 5, tag: 'INSIGHT', text: '💰 Expected ROI: 4.2x on promotional spend', delay: 350 }
            ]
        });
    }

    animateMetrics() {
        const metrics = [
            { id: 'metricUplift', start: 0, end: 28, suffix: '%' },
            { id: 'metricROI', start: 0, end: 4.2, suffix: 'x' },
            { id: 'metricSuccess', start: 0, end: 89, suffix: '%' },
            { id: 'metricRevenue', start: 0, end: 24, suffix: 'Cr', prefix: '₹' }
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
        const ctx = document.getElementById('promoChart');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Diwali Sale', 'Black Friday', 'New Year', 'Republic Day', 'Valentine'],
                    datasets: [
                        { label: 'Revenue (₹Cr)', data: [12.5, 8.2, 6.8, 4.5, 5.2], backgroundColor: '#4daae8', borderRadius: 8 },
                        { label: 'ROI (x)', data: [5.2, 4.8, 3.9, 3.2, 4.1], backgroundColor: '#ff9900', borderRadius: 8 }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom' } },
                    scales: { y: { beginAtZero: true } },
                    animation: { duration: 2000, easing: 'easeOutQuart' }
                }
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.agent = new PromotionPlanningAgent();
});
