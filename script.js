// ===========================================
// 1. Navigation Bar Toggle (Hamburger Menu)
// ===========================================
// Get the button and the navigation menu elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Add an event listener to the button
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation menu
    // We will use CSS to define what 'active' looks like (e.g., display: block)
    nav.classList.toggle('active');
});


// ===========================================
// 2. Subscribe Feature (Form Validation & Message)
// ===========================================
const subscribeForm = document.getElementById('subscribe-form');
const subscribeMessage = document.getElementById('subscribe-message');

subscribeForm.addEventListener('submit', (event) => {
    // 1. Stop the page from reloading when the form is submitted
    event.preventDefault(); 
    
    // 2. Hide the form and show the success message
    subscribeForm.style.display = 'none'; // Hide the form
    subscribeMessage.style.display = 'block'; // Show the message
    
    // Optional: Log the email to the console (for debugging/demonstration)
    const emailInput = document.getElementById('email-input').value;
    console.log(`Subscribed with email: ${emailInput}`);
});


// ===========================================
// 3. Add to Cart and View Cart Features (Simple Counter)
// This applies to the Gallery Page
// ===========================================
// Initialize the cart counter
let cartCount = 0;

// Get the View Cart button (for displaying the count)
const viewCartBtn = document.getElementById('view-cart-btn');

// Get all 'Add to Cart' buttons (you need to add these buttons to your gallery items!)
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++; // Increment the counter
        viewCartBtn.textContent = `View Cart (${cartCount})`; // Update the button text
        
        // Optional: Provide feedback to the user
        console.log(`Item added to cart. Total items: ${cartCount}`);
        alert(`Item added! Your cart now has ${cartCount} items.`);
    });
});

// ===========================================
// 4. Customer Feedback Feature (Form Submission)
// This applies to the About Us Page
// ===========================================
// Get the feedback form and the message elements
const feedbackForm = document.getElementById('feedback-form');
const feedbackMessage = document.getElementById('feedback-message');

if (feedbackForm) { // Check if the element exists (only on about.html)
    feedbackForm.addEventListener('submit', (event) => {
        // 1. Stop the page from reloading when the form is submitted
        event.preventDefault(); 
        
        // 2. Hide the form and show the success message
        feedbackForm.style.display = 'none'; // Hide the form
        feedbackMessage.style.display = 'block'; // Show the message
        
        console.log("Customer feedback submitted successfully!");
    });
}