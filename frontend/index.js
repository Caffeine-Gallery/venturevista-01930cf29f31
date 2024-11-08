import { backend } from "declarations/backend";

let currentCategory = "all";

async function loadPortfolio() {
    try {
        const portfolioGrid = document.getElementById('portfolio-grid');
        portfolioGrid.innerHTML = `
            <div class="col-12 text-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        `;

        let companies;
        if (currentCategory === "all") {
            companies = await backend.getPortfolio();
        } else {
            companies = await backend.getCompaniesByCategory(currentCategory);
        }

        portfolioGrid.innerHTML = companies.map(company => `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="portfolio-item">
                    <img src="${company.imageUrl}" alt="${company.name}" class="company-logo">
                    <h3>${company.name}</h3>
                    <p>${company.description}</p>
                    <span class="category-badge">${company.category}</span>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error("Error loading portfolio:", error);
        document.getElementById('portfolio-grid').innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger">Error loading portfolio. Please try again later.</div>
            </div>
        `;
    }
}

// Initialize portfolio
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio();

    // Add click handlers for filter buttons
    document.querySelectorAll('.filters .btn').forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            document.querySelectorAll('.filters .btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            e.target.classList.add('active');
            
            // Update current category and reload portfolio
            currentCategory = e.target.dataset.category;
            loadPortfolio();
        });
    });
});
