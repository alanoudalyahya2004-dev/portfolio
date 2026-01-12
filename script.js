// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Home icon click event
    document.querySelector('.home-icon').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Handle recommendation form submission
    const recommendationForm = document.getElementById('recommendation-form');
    const recommendationsList = document.getElementById('recommendations-list');

    recommendationForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const authorName = document.getElementById('author-name').value.trim();
        const recommendationText = document.getElementById('recommendation-text').value.trim();

        if (!authorName || !recommendationText) {
            alert('Please fill in all fields');
            return;
        }

        // Create new recommendation card
        const newRecommendation = document.createElement('div');
        newRecommendation.className = 'recommendation-card';
        newRecommendation.innerHTML = `
            <p>"${recommendationText}"</p>
            <div class="author">- ${authorName}</div>
        `;

        // Add to the beginning of the list
        recommendationsList.prepend(newRecommendation);

        // Show success message (Popup/Alert)
        alert('Thank you! Your recommendation has been added successfully.');

        // Reset form
        recommendationForm.reset();

        // Scroll to new recommendation
        newRecommendation.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });

    // Add hover effect to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Initialize with some animations
    setTimeout(() => {
        document.querySelectorAll('.skill-item').forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 500);
});