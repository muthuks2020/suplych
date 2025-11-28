/**
 * ShellKode AI - Demand Forecasting Agent
 * js/demand-forecasting-agent.js
 */

class DemandForecastingAgent extends BaseAgent {
    constructor() {
        super({
            name: 'Demand Forecasting Agent',
            steps: [
                'Data Ingestion',
                'Feature Engineering', 
                'Seasonality Analysis',
                'Trend Detection',
                'Model Training',
                'Forecast Generation'
            ],
            logMessages: [
                { step: 0, tag: 'DATA', text: 'Loading CSV data... 165 records found', delay: 300 },
                { step: 0, tag: 'DATA', text: 'Validating data schema: 16 columns detected', delay: 400 },
                { step: 0, tag: 'DATA', text: 'Data quality check: 99.2% completeness', delay: 350 },
                { step: 1, tag: 'MODEL', text: 'Extracting temporal features: day_of_week, month, quarter', delay: 400 },
                { step: 1, tag: 'MODEL', text: 'Computing lag features: 7-day, 14-day, 30-day rolling averages', delay: 450 },
                { step: 1, tag: 'MODEL', text: 'Encoding categorical variables: 5 categories, 50 SKUs', delay: 400 },
                { step: 2, tag: 'ANALYSIS', text: 'Detecting seasonal patterns across warehouses...', delay: 500 },
                { step: 2, tag: 'ANALYSIS', text: 'Festival calendar loaded: Wedding season Feb-Mar identified', delay: 400 },
                { step: 2, tag: 'INSIGHT', text: '📈 Seasonality detected: +67% ethnic wear demand in Q1', delay: 450 },
                { step: 3, tag: 'ANALYSIS', text: 'Analyzing social media trends via API...', delay: 400 },
                { step: 3, tag: 'ANALYSIS', text: 'Instagram hashtag correlation: #WeddingSeason +234%', delay: 450 },
                { step: 3, tag: 'INSIGHT', text: '🔥 Trend alert: Quiet luxury fashion rising +52%', delay: 400 },
                { step: 4, tag: 'MODEL', text: 'Training ensemble model: XGBoost + LSTM hybrid', delay: 500 },
                { step: 4, tag: 'MODEL', text: 'Hyperparameter tuning: learning_rate=0.05, depth=8', delay: 450 },
                { step: 4, tag: 'MODEL', text: '5-fold cross-validation in progress...', delay: 500 },
                { step: 4, tag: 'SUCCESS', text: '✓ Model validation accuracy: 96.8%', delay: 400 },
                { step: 5, tag: 'SUCCESS', text: 'Generating 90-day forecasts for all SKUs...', delay: 450 },
                { step: 5, tag: 'SUCCESS', text: '✓ Forecast complete: 2,450 predictions generated', delay: 400 },
                { step: 5, tag: 'INSIGHT', text: '💰 Revenue protection potential: ₹18.5Cr identified', delay: 350 }
            ]
        });
    }

    animateMetrics() {
        const metrics = [
            { id: 'metricAccuracy', start: 0, end: 96.8, suffix: '%' },
            { id: 'metricHorizon', start: 0, end: 90, suffix: ' Days' },
            { id: 'metricCategories', start: 0, end: 5, suffix: '' },
            { id: 'metricRevenue', start: 0, end: 18.5, suffix: 'Cr', prefix: '₹' }
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
        // Demand Forecast Chart
        const forecastCtx = document.getElementById('forecastChart');
        if (forecastCtx) {
            new Chart(forecastCtx, {
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
                    datasets: [
                        {
                            label: 'Women Ethnic',
                            data: [2500, 3200, 4100, 5200, 6800, 8500],
                            borderColor: '#4daae8',
                            backgroundColor: 'rgba(77,170,232,0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Women Western',
                            data: [1800, 2100, 2400, 2700, 2900, 3100],
                            borderColor: '#146eb4',
                            backgroundColor: 'rgba(20,110,180,0.1)',
                            tension: 0.4,
                            fill: true
                        },
                        {
                            label: 'Accessories',
                            data: [1200, 1400, 1700, 2000, 2400, 2800],
                            borderColor: '#28a745',
                            backgroundColor: 'rgba(40,167,69,0.1)',
                            tension: 0.4,
                            fill: true
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom' }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: { display: true, text: 'Units Forecasted' }
                        }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeOutQuart'
                    }
                }
            });
        }

        // Trending Categories Chart
        const trendCtx = document.getElementById('trendChart');
        if (trendCtx) {
            new Chart(trendCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Ethnic', 'Western', 'Footwear', 'Accessories', 'Men'],
                    datasets: [{
                        data: [35, 25, 18, 12, 10],
                        backgroundColor: ['#4daae8', '#146eb4', '#28a745', '#ff9900', '#6c757d'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom' }
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeOutQuart'
                    }
                }
            });
        }
    }
}

// Initialize agent when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.agent = new DemandForecastingAgent();
});
