import { backend } from "declarations/backend";

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Load portfolio companies
async function loadPortfolio() {
    try {
        const companies = await backend.getPortfolio();
        const portfolioGrid = document.querySelector('.portfolio-grid');
        
        portfolioGrid.innerHTML = companies.map(company => `
            <div class="portfolio-item">
                <div class="portfolio-image">
                    <img src="${company.imageUrl}" alt="${company.name}">
                </div>
                <div class="portfolio-info">
                    <h3>${company.name}</h3>
                    <p>${company.description}</p>
                    <div class="portfolio-meta">
                        <span class="category">${company.category}</span>
                        <span class="stage">${company.stage}</span>
                    </div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading portfolio:', error);
    }
}

// Load team members
async function loadTeam() {
    try {
        const team = await backend.getTeam();
        const teamGrid = document.querySelector('.team-grid');
        
        teamGrid.innerHTML = team.map(member => `
            <div class="team-member">
                <div class="member-image">
                    <img src="${member.imageUrl}" alt="${member.name}">
                </div>
                <div class="member-info">
                    <h3>${member.name}</h3>
                    <h4>${member.title}</h4>
                    <p>${member.bio}</p>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading team:', error);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio();
    loadTeam();
});
