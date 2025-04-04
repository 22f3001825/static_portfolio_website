// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize mobile navigation
    initMobileNav();
    
    // Add shadow to navbar on scroll
    handleNavbarScroll();
  });
  
  // Handle scroll animations
  function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Initial check for elements in view on page load
    checkFadeElements();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkFadeElements);
    
    function checkFadeElements() {
      const triggerBottom = window.innerHeight * 0.8;
      
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
          element.classList.add('visible');
        }
      });
    }
  }
  
  // Handle mobile navigation
  function initMobileNav() {
    // Create mobile toggle button if it doesn't exist
    if (!document.querySelector('.mobile-toggle')) {
      const navContainer = document.querySelector('.nav-container');
      const mobileToggle = document.createElement('button');
      mobileToggle.className = 'mobile-toggle';
      mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      navContainer.appendChild(mobileToggle);
      
      const navLinks = document.querySelector('.nav-links');
      
      mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.innerHTML = navLinks.classList.contains('active') 
          ? '<i class="fas fa-times"></i>' 
          : '<i class="fas fa-bars"></i>';
      });
      
      // Close mobile menu when clicking a link
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
      });
    }
  }
  
  // Add shadow to navbar on scroll
  function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 50;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollThreshold) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
      } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      }
    });
  }
  
  // Form submission handler
  document.querySelector('.contact-form form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form fields
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelector('input[placeholder="Subject"]').value;
    const message = this.querySelector('textarea').value;
    
    // Form validation
    if (!name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Here you would typically send the form data to your backend
    // For demonstration purposes, we'll just show a success message
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
  
  // Optional: Dark mode toggle functionality
  function createDarkModeToggle() {
    const footer = document.querySelector('footer .container');
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      font-size: 1.2rem;
      cursor: pointer;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      z-index: 100;
      transition: all 0.3s ease;
    `;
    
    document.body.appendChild(darkModeToggle);
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('darkMode', 'enabled');
      } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  }
  
  // Call the function to create the dark mode toggle
   createDarkModeToggle();