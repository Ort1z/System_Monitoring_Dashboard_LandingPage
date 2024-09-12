document.addEventListener('DOMContentLoaded', function() {
    // Feature card data
    const features = [
        {
            icon: 'bar-chart-2',
            title: 'Real-Time Metrics',
            description: 'View and analyze system performance data in real time with dynamic visualizations and up-to-the-minute updates.'
        },
        {
            icon: 'alert-triangle',
            title: 'Custom Alerts',
            description: 'Set up personalized alerts to monitor system health and get notified of critical issues immediately.'
        },
        {
            icon: 'arrow-right',
            title: 'Interactive Visualizations',
            description: 'Leverage advanced visualization tools to create custom dashboards and gain insights from your data effortlessly.'
        }
    ];

    // Function to create feature cards
    function createFeatureCard(feature) {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center';
        card.innerHTML = `
            <div class="text-blue-600 mb-4">
                <i data-lucide="${feature.icon}" size="48"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2">${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        return card;
    }

    // Insert feature cards
    const featureCardsContainer = document.getElementById('feature-cards');
    features.forEach(feature => {
        featureCardsContainer.appendChild(createFeatureCard(feature));
    });

    // Initialize Lucide icons
    lucide.createIcons();
});
