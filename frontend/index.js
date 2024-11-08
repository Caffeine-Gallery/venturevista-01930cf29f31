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
            <div class="col-md-6 col-lg-4">
                <div class="portfolio-item">
                    <div class="portfolio-header">
                        <img src="${company.imageUrl}" alt="${company.name}" class="company-logo">
                        <span class="stage-badge">${company.stage}</span>
                    </div>
                    <div class="portfolio-content">
                        <h3>${company.name}</h3>
                        <p>${company.description}</p>
                        <div class="portfolio-footer">
                            <span class="category-badge">${company.category}</span>
                            <span class="year-founded">Founded ${company.yearFounded}</span>
                        </div>
                    </div>
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

// Handle scroll for navbar
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio();

    // Add click handlers for filter buttons
    document.querySelectorAll('.filters .btn').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.filters .btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            loadPortfolio();
        });
    });

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});
