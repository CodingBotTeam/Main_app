// Coding Bot 2025 - Ultra-Modern Animated Website JavaScript with Enhanced Text Visibility

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality with delays to ensure DOM is ready
    setTimeout(() => {
        initAnimatedBackground();
        initThemeToggle();
        initMobileNavigation();
        initSmoothScrolling();
        initScrollAnimations();
        initAnimatedCounters();
        initPortfolioFilters();
        initTestimonialsCarousel();
        initContactForm();
        initProgressBar();
        initParallaxEffects();
        initServiceCardAnimations();
        initTypewriterEffect();
        initTeamCardAnimations();
        initAdvancedAnimations();
        initPerformanceOptimizations();
        initAccessibilityFeatures();
    }, 100);
    
    console.log('🤖 Coding Bot 2025 - Ultra-Animated Website with Enhanced Text Visibility Loaded Successfully!');
});


document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_7i0hqw6", "template_222qepj", this)
        .then(function () {
            alert("Message sent successfully!");
        }, function (error) {
            alert("Failed to send message. Please try again later.");
            console.error(error);
        });
});

// Enhanced Animated Background System with Improved Text Visibility
function initAnimatedBackground() {
    console.log('Initializing animated background with text protection...');
    
    const shapes = document.querySelectorAll('.shape');
    const particles = document.querySelectorAll('.particle');
    const gradientOverlay = document.querySelector('.gradient-overlay');
    const meshGradient = document.querySelector('.mesh-gradient');
    const textProtectionOverlay = document.querySelector('.text-protection-overlay');
    
    console.log(`Found ${shapes.length} shapes and ${particles.length} particles`);
    
    // Enhanced shapes animation with reduced opacity for better text visibility
    shapes.forEach((shape, index) => {
        const isDarkMode = document.documentElement.getAttribute('data-color-scheme') === 'dark';
        shape.style.opacity = isDarkMode ? '0.08' : '0.03'; // Very low opacity for text readability
        shape.style.pointerEvents = 'none';
        
        const animationDuration = (20 + (index * 3)) + 's';
        const animationDelay = -(index * 2) + 's';
        
        shape.style.animationDuration = animationDuration;
        shape.style.animationDelay = animationDelay;
        shape.style.animation = `float ${animationDuration} infinite linear`;
        shape.style.willChange = 'transform';
        
        // Enhanced mouse interaction that doesn't interfere with text
        shape.addEventListener('mouseenter', () => {
            shape.style.animationPlayState = 'paused';
            shape.style.transform = 'scale(1.1)';
            shape.style.opacity = isDarkMode ? '0.15' : '0.06';
        });
        
        shape.addEventListener('mouseleave', () => {
            shape.style.animationPlayState = 'running';
            shape.style.transform = 'scale(1)';
            shape.style.opacity = isDarkMode ? '0.08' : '0.03';
        });
    });
    
    // Enhanced particles animation with reduced opacity
    particles.forEach((particle, index) => {
        const isDarkMode = document.documentElement.getAttribute('data-color-scheme') === 'dark';
        particle.style.opacity = isDarkMode ? '0.25' : '0.15'; // Reduced for text visibility
        const animationDuration = (15 + (index * 2)) + 's';
        const animationDelay = -(index * 1.5) + 's';
        
        particle.style.animationDuration = animationDuration;
        particle.style.animationDelay = animationDelay;
        particle.style.animation = `particleFloat ${animationDuration} infinite linear`;
        particle.style.willChange = 'transform';
    });
    
    // Interactive gradient overlay with text protection
    if (gradientOverlay) {
        gradientOverlay.style.opacity = '1';
        gradientOverlay.style.animation = 'gradientShift 20s ease-in-out infinite';
        
        // Subtle mouse interaction that doesn't affect text readability
        document.addEventListener('mousemove', throttle((e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            
            gradientOverlay.style.background = `
                linear-gradient(
                    ${135 + (x * 0.2)}deg,
                    rgba(var(--color-teal-500-rgb), ${0.01 + (y * 0.001)}) 0%,
                    rgba(var(--color-primary), ${0.02 + (x * 0.001)}) 25%,
                    rgba(var(--color-teal-300-rgb), ${0.015 + (y * 0.001)}) 50%,
                    rgba(var(--color-teal-600-rgb), ${0.01 + (x * 0.001)}) 75%,
                    rgba(var(--color-primary), ${0.015 + (y * 0.001)}) 100%
                )
            `;
        }, 100));
    }
    
    if (meshGradient) {
        meshGradient.style.opacity = '1';
        meshGradient.style.animation = 'meshFloat 25s ease-in-out infinite';
    }
    
    // Initialize text protection overlay
    if (textProtectionOverlay) {
        textProtectionOverlay.style.opacity = '1';
    }
    
    console.log('Animated background with text protection initialized successfully');
}

// Enhanced Theme Toggle with Text Visibility Updates
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    
    // Set initial theme with enhanced contrast
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    updateBackgroundOpacities(currentTheme);
    
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const currentTheme = document.documentElement.getAttribute('data-color-scheme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add transition class for smooth theme switching
        document.documentElement.classList.add('theme-transitioning');
        
        // Animate theme toggle button
        this.style.transform = 'scale(1.3) rotate(180deg)';
        
        setTimeout(() => {
            document.documentElement.setAttribute('data-color-scheme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateBackgroundOpacities(newTheme);
            
            // Reset button animation
            this.style.transform = 'scale(1) rotate(0deg)';
            
            // Remove transition class
            setTimeout(() => {
                document.documentElement.classList.remove('theme-transitioning');
            }, 300);
        }, 150);
        
        // Add ripple effect
        createRippleEffect(this, e);
        
        console.log(`Theme switched to: ${newTheme}`);
    });
}

// Update background element opacities based on theme for better text visibility
function updateBackgroundOpacities(theme) {
    const shapes = document.querySelectorAll('.shape');
    const particles = document.querySelectorAll('.particle');
    
    const isDark = theme === 'dark';
    
    shapes.forEach(shape => {
        shape.style.opacity = isDark ? '0.08' : '0.03';
    });
    
    particles.forEach(particle => {
        particle.style.opacity = isDark ? '0.25' : '0.15';
    });
    
    console.log(`Background opacities updated for ${theme} theme`);
}

// Enhanced Mobile Navigation with Better Contrast
function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');
    const navMenuBg = document.querySelector('.nav-menu-bg');

    // Show mobile menu with enhanced visibility
    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navMenu.classList.add('show-menu');
            document.body.style.overflow = 'hidden';
            
            // Show navigation background for better contrast
            if (navMenuBg) {
                navMenuBg.style.opacity = '1';
            }
            
            // Animate nav links with stagger effect and enhanced visibility
            navLinks.forEach((link, index) => {
                link.style.transform = 'translateX(100px)';
                link.style.opacity = '0';
                setTimeout(() => {
                    link.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    link.style.transform = 'translateX(0)';
                    link.style.opacity = '1';
                    link.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.3)';
                }, index * 100);
            });
            
            console.log('Mobile menu opened with enhanced visibility');
        });
    }

    // Hide mobile menu
    if (navClose) {
        navClose.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Animate out nav links
            navLinks.forEach((link, index) => {
                setTimeout(() => {
                    link.style.transform = 'translateX(-100px)';
                    link.style.opacity = '0';
                }, index * 50);
            });
            
            setTimeout(() => {
                navMenu.classList.remove('show-menu');
                document.body.style.overflow = '';
                
                if (navMenuBg) {
                    navMenuBg.style.opacity = '0';
                }
                
                // Reset nav links
                navLinks.forEach(link => {
                    link.style.transform = '';
                    link.style.opacity = '';
                    link.style.transition = '';
                    link.style.textShadow = '';
                });
            }, navLinks.length * 50 + 200);
            
            console.log('Mobile menu closed');
        });
    }

    // Hide menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                navMenu.classList.remove('show-menu');
                document.body.style.overflow = '';
                if (navMenuBg) {
                    navMenuBg.style.opacity = '0';
                }
            }, 300);
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show-menu');
            document.body.style.overflow = '';
            if (navMenuBg) {
                navMenuBg.style.opacity = '0';
            }
        }
    });
}

// Enhanced Smooth Scrolling with Better Performance
function initSmoothScrolling() {
    console.log('Initializing smooth scrolling...');
    
    const navLinks = document.querySelectorAll('.nav__link[href^="#"], .btn[href^="#"], .footer__link[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    const header = document.getElementById('header');

    console.log(`Found ${navLinks.length} navigation links and ${sections.length} sections`);

    // Enhanced smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('href');
            console.log('Clicked link with target:', targetId);
            
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            console.log('Target section found:', !!targetSection);
            
            if (targetSection) {
                const headerHeight = header ? header.offsetHeight : 80;
                const offsetTop = targetSection.offsetTop - headerHeight;
                
                console.log('Scrolling to position:', offsetTop);
                
                // Use native smooth scrolling with enhanced performance
                window.scrollTo({
                    top: Math.max(0, offsetTop),
                    behavior: 'smooth'
                });
                
                // Add visual feedback with enhanced visibility
                this.style.transform = 'scale(0.95)';
                this.style.textShadow = '0 2px 4px rgba(var(--color-primary), 0.5)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                    this.style.textShadow = '';
                }, 150);
            }
        });
    });

    // Enhanced active navigation tracking
    function updateActiveNav() {
        const scrollY = window.pageYOffset;
        const headerHeight = header ? header.offsetHeight : 80;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
            
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                document.querySelectorAll('.nav__link').forEach(link => {
                    link.classList.remove('active-link');
                    link.style.transform = 'scale(1)';
                    link.style.textShadow = '0 1px 2px rgba(0, 0, 0, 0.1)';
                });
                
                if (navLink) {
                    navLink.classList.add('active-link');
                    navLink.style.transform = 'scale(1.05)';
                    navLink.style.textShadow = '0 2px 4px rgba(var(--color-primary), 0.4)';
                }
            }
        });
    }

    // Enhanced header scroll effect with better contrast
    function handleHeaderScroll() {
        if (header) {
            const headerContrastBg = document.querySelector('.header-contrast-bg');
            
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
                header.style.transform = 'translateY(0)';
                if (headerContrastBg) {
                    headerContrastBg.style.opacity = '1';
                }
            } else {
                header.classList.remove('scrolled');
                if (headerContrastBg) {
                    headerContrastBg.style.opacity = '0.95';
                }
            }
            
            // Hide/show header on scroll direction with enhanced contrast
            if (window.scrollY > 200) {
                const scrollDelta = window.scrollY - (window.lastScrollTop || 0);
                if (scrollDelta > 5) {
                    header.style.transform = 'translateY(-100%)';
                } else if (scrollDelta < -5) {
                    header.style.transform = 'translateY(0)';
                    if (headerContrastBg) {
                        headerContrastBg.style.opacity = '1';
                    }
                }
                window.lastScrollTop = window.scrollY;
            }
        }
    }

    // Optimized scroll handler
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = requestAnimationFrame(() => {
            updateActiveNav();
            handleHeaderScroll();
        });
    });
    
    console.log('Enhanced smooth scrolling initialized successfully');
}

// Advanced Portfolio Filters with Enhanced Visibility
function initPortfolioFilters() {
    console.log('Initializing portfolio filters...');
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    console.log(`Found ${filterButtons.length} filter buttons and ${portfolioCards.length} portfolio cards`);

    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');
            
            console.log('Filter clicked:', filter);
            
            // Update active button with enhanced visibility
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.transform = 'scale(1)';
                btn.style.textShadow = '0 1px 2px rgba(0, 0, 0, 0.1)';
                btn.style.boxShadow = '';
            });
            this.classList.add('active');
            this.style.transform = 'scale(1.05)';
            this.style.textShadow = 'none';
            this.style.boxShadow = '0 8px 25px rgba(var(--color-primary), 0.3)';
            
            // Create ripple effect
            createRippleEffect(this, e);
            
            // Filter portfolio items with enhanced animations
            portfolioCards.forEach((card, index) => {
                const category = card.getAttribute('data-category');
                const shouldShow = filter === 'all' || category === filter;
                
                console.log(`Card ${index}: category=${category}, shouldShow=${shouldShow}`);
                
                if (shouldShow) {
                    // Show card with enhanced visibility
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8) rotateY(-90deg)';
                    
                    setTimeout(() => {
                        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1) rotateY(0deg)';
                        
                        // Ensure card background is visible
                        const cardBg = card.querySelector('.portfolio-card-bg');
                        if (cardBg) {
                            cardBg.style.opacity = '1';
                        }
                    }, index * 50);
                } else {
                    // Hide card
                    card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    card.style.transform = 'scale(0.8) rotateY(90deg)';
                    card.style.opacity = '0';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 400);
                }
            });
        });
    });
    
    console.log('Portfolio filters with enhanced visibility initialized successfully');
}

// Enhanced Team Card Animations with Better Contrast
function initTeamCardAnimations() {
    console.log('Initializing team card animations...');
    
    const teamCards = document.querySelectorAll('.team-card');
    
    console.log(`Found ${teamCards.length} team cards`);
    
    teamCards.forEach((card, index) => {
        const inner = card.querySelector('.team-card__inner');
        const cardBg = card.querySelector('.team-card-bg');
        const infoOverlay = card.querySelector('.team-info-overlay');
        
        // Enhanced hover effects with better contrast
        card.addEventListener('mouseenter', () => {
            console.log(`Team card ${index} hover enter`);
            card.style.transform = 'translateY(-15px)';
            card.style.boxShadow = '0 25px 50px rgba(var(--color-primary), 0.25)';
            card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            
            if (cardBg) {
                cardBg.style.opacity = '1';
            }
            if (infoOverlay) {
                infoOverlay.style.background = 'rgba(var(--color-surface), 0.98)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            console.log(`Team card ${index} hover leave`);
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '';
            
            if (infoOverlay) {
                infoOverlay.style.background = 'rgba(var(--color-surface), 0.95)';
            }
        });
        
        // Enhanced click to flip with improved visibility
        card.addEventListener('click', () => {
            console.log(`Team card ${index} clicked`);
            const isFlipped = inner.style.transform.includes('rotateY(180deg)');
            inner.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
            
            // Add enhanced visual feedback
            card.style.animation = 'pulse 0.6s ease-out';
            setTimeout(() => {
                card.style.animation = '';
            }, 600);
        });
        
        // Enhanced social media button animations
        const socialBtns = card.querySelectorAll('.social-btn');
        socialBtns.forEach((btn, btnIndex) => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-4px) scale(1.2) rotate(10deg)';
                btn.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.4)';
                btn.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                btn.style.background = 'rgba(255, 255, 255, 0.4)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                btn.style.boxShadow = '';
                btn.style.background = 'rgba(255, 255, 255, 0.25)';
            });
        });
    });
    
    console.log('Team card animations with enhanced contrast initialized successfully');
}

// Enhanced Contact Form with Better Visibility and Validation
function initContactForm() {
    console.log('Initializing contact form...');
    
    const form = document.getElementById('contact-form');
    const submitBtn = form?.querySelector('.submit-btn');
    const formBg = document.querySelector('.contact-form-bg');
    
    if (!form) {
        console.log('Contact form not found');
        return;
    }

    console.log('Contact form found, setting up enhanced validation...');

    // Ensure form background is visible
    if (formBg) {
        formBg.style.opacity = '1';
    }

    // Enhanced form validation with better error visibility
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        console.log(`Validating field: ${field.name}, value: "${value}"`);
        
        // Remove existing error state
        field.classList.remove('error');
        const existingError = field.parentNode.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Enhanced validation rules
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        } else if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        } else if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        } else if (field.name === 'message' && value && value.length < 10) {
            isValid = false;
            errorMessage = 'Please provide more details (minimum 10 characters)';
        }
        
        console.log(`Field ${field.name} validation result: ${isValid}, error: "${errorMessage}"`);
        
        // Show error with enhanced visibility
        if (!isValid) {
            field.classList.add('error');
            const errorElement = document.createElement('div');
            errorElement.className = 'form-error';
            errorElement.textContent = errorMessage;
            errorElement.style.opacity = '0';
            errorElement.style.transform = 'translateY(-10px)';
            errorElement.style.color = 'var(--color-error)';
            errorElement.style.fontWeight = '600';
            errorElement.style.textShadow = '0 1px 2px rgba(var(--color-error), 0.3)';
            field.parentNode.appendChild(errorElement);
            
            // Animate error message with enhanced visibility
            requestAnimationFrame(() => {
                errorElement.style.transition = 'all 0.3s ease';
                errorElement.style.opacity = '1';
                errorElement.style.transform = 'translateY(0)';
            });
        }
        
        return isValid;
    }

    // Enhanced real-time validation with better contrast
    const formInputs = form.querySelectorAll('.form-control');
    console.log(`Found ${formInputs.length} form inputs`);
    
    formInputs.forEach(input => {
        // Enhanced focus effects with better visibility
        input.addEventListener('focus', () => {
            input.style.transform = 'translateY(-2px)';
            input.style.boxShadow = '0 8px 25px rgba(var(--color-primary), 0.2)';
            input.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            input.style.background = 'rgba(var(--color-background), 0.95)';
            input.style.color = 'var(--color-text)';
            input.style.fontWeight = '500';
        });
        
        input.addEventListener('blur', () => {
            input.style.transform = 'translateY(0)';
            input.style.boxShadow = '';
            input.style.background = 'rgba(var(--color-background), 0.8)';
            validateField(input);
        });
        
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });

    // Enhanced form submission with better user feedback
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        console.log('Form submitted, validating...');
        
        // Validate all fields
        let isFormValid = true;
        const invalidFields = [];
        
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
                invalidFields.push(input.name);
            }
        });
        
        console.log('Form validation result:', isFormValid, 'Invalid fields:', invalidFields);
        
        if (!isFormValid) {
            // Scroll to first error with enhanced visibility
            const firstError = form.querySelector('.form-control.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
                
                // Enhanced shake effect for invalid form
                form.style.animation = 'shake 0.5s ease';
                form.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    form.style.animation = '';
                    form.style.transform = 'scale(1)';
                }, 500);
            }
            return;
        }
        
        console.log('Form is valid, submitting...');
        
        // Enhanced loading state with better visibility
        const btnText = submitBtn.querySelector('.btn-text');
        const btnArrow = submitBtn.querySelector('.btn-arrow');
        const originalText = btnText.textContent;
        
        // Create enhanced loading animation
        btnText.textContent = 'Sending Message...';
        btnText.style.fontWeight = '600';
        if (btnArrow) btnArrow.style.display = 'none';
        submitBtn.disabled = true;
        submitBtn.style.position = 'relative';
        submitBtn.style.background = 'var(--color-primary-hover)';
        
        // Add enhanced loading spinner
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        spinner.innerHTML = '⟳';
        spinner.style.cssText = `
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            animation: spin 1s linear infinite;
            font-size: 1.2rem;
            color: var(--color-btn-primary-text);
            font-weight: bold;
        `;
        submitBtn.appendChild(spinner);
        
        // Simulate form submission with realistic delay
        await new Promise(resolve => setTimeout(resolve, 2500));
        
        // Remove loading state
        spinner.remove();
        btnText.textContent = originalText;
        btnText.style.fontWeight = '600';
        if (btnArrow) {
            btnArrow.style.display = 'inline';
        }
        submitBtn.disabled = false;
        submitBtn.style.background = 'var(--color-primary)';
        
        // Show enhanced success message with better visibility
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px;">
                <span style="font-size: 2rem; filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));">🎉</span>
                <div>
                    <strong style="font-size: 1.1rem; text-shadow: none;">Message sent successfully!</strong><br>
                    <span style="opacity: 0.95; text-shadow: none;">Thank you for reaching out. We'll get back to you within 24 hours.</span>
                </div>
            </div>
        `;
        successMessage.style.background = 'rgba(var(--color-success), 0.95)';
        successMessage.style.color = 'var(--color-btn-primary-text)';
        successMessage.style.backdropFilter = 'blur(15px)';
        successMessage.style.boxShadow = '0 8px 25px rgba(var(--color-success), 0.3)';
        
        // Remove existing messages
        const existingMessages = form.querySelectorAll('.form-success, .form-error');
        existingMessages.forEach(msg => msg.remove());
        
        form.appendChild(successMessage);
        
        // Animate success message with enhanced visibility
        successMessage.style.transform = 'translateY(20px) scale(0.95)';
        successMessage.style.opacity = '0';
        requestAnimationFrame(() => {
            successMessage.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            successMessage.style.transform = 'translateY(0) scale(1)';
            successMessage.style.opacity = '1';
        });
        
        // Enhanced form reset with animation
        setTimeout(() => {
            formInputs.forEach((input, index) => {
                setTimeout(() => {
                    input.style.transition = 'all 0.3s ease';
                    input.style.transform = 'scale(0.95)';
                    input.style.opacity = '0.7';
                    setTimeout(() => {
                        input.value = '';
                        input.style.transform = 'scale(1)';
                        input.style.opacity = '1';
                    }, 150);
                }, index * 50);
            });
        }, 1500);
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Remove success message after 12 seconds
        setTimeout(() => {
            if (successMessage.parentNode) {
                successMessage.style.opacity = '0';
                successMessage.style.transform = 'translateY(-20px) scale(0.95)';
                setTimeout(() => {
                    successMessage.remove();
                }, 300);
            }
        }, 12000);
    });
    
    console.log('Contact form with enhanced visibility initialized successfully');
}

// Advanced Scroll Animations with Enhanced Visibility
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(`
        .service-card, .portfolio-card, .stat-card, .testimonial-card, 
        .hero__content, .hero__visual, .section__header, .about__text,
        .team-card, .highlight-item, .contact__form-wrapper, .contact__info,
        .content-overlay, .header-content-overlay
    `);
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll', 'visible');
                
                // Enhanced background visibility for animated elements
                const bgElement = entry.target.querySelector('[class*="-bg"]');
                if (bgElement) {
                    bgElement.style.opacity = '1';
                    bgElement.style.transition = 'opacity 0.6s ease';
                }
                
                // Add staggered animation for grid items with enhanced visibility
                const parent = entry.target.parentElement;
                if (parent && (
                    parent.classList.contains('services__grid') ||
                    parent.classList.contains('portfolio__grid') ||
                    parent.classList.contains('team__grid') ||
                    parent.classList.contains('stats-container')
                )) {
                    const siblings = Array.from(parent.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                    entry.target.style.transitionDelay = `${index * 0.1}s`;
                }
                
                // Special animations for specific elements with enhanced contrast
                if (entry.target.classList.contains('stat-card')) {
                    setTimeout(() => {
                        animateStatCard(entry.target);
                    }, 200);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        element.classList.add('animate-on-scroll');
        observer.observe(element);
    });
    
    console.log('Scroll animations with enhanced visibility initialized');
}

// Enhanced Animated Counters with Better Visual Appeal
function initAnimatedCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2500;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                const displayValue = Math.ceil(current);
                const suffix = target > 10 ? '+' : '';
                counter.textContent = displayValue + suffix;
                
                // Enhanced pulsing effect with better visibility
                const scale = 1 + (Math.sin(current / target * Math.PI) * 0.05);
                counter.style.transform = `scale(${scale})`;
                counter.style.textShadow = `0 2px 4px rgba(var(--color-primary), ${0.3 + (current / target) * 0.2})`;
                
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (target > 10 ? '+' : '');
                counter.style.transform = 'scale(1)';
                
                // Enhanced final celebration effect
                counter.style.animation = 'pulse 0.8s ease-out';
                counter.style.textShadow = '0 4px 8px rgba(var(--color-primary), 0.4)';
                setTimeout(() => {
                    counter.style.animation = '';
                    counter.style.textShadow = '0 2px 4px rgba(var(--color-primary), 0.3)';
                }, 800);
            }
        };
        
        updateCounter();
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    animateCounter(entry.target);
                }, 300);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.7 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
    
    console.log('Animated counters with enhanced visibility initialized');
}

// Enhanced Testimonials Carousel with Better Contrast
function initTestimonialsCarousel() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let autoSlideInterval;
    let isTransitioning = false;

    if (testimonialCards.length === 0) return;

    // Ensure testimonial card backgrounds are visible
    testimonialCards.forEach(card => {
        const cardBg = card.querySelector('.testimonial-card-bg');
        if (cardBg) {
            cardBg.style.opacity = '1';
        }
    });

    function showSlide(index, direction = 'next') {
        if (isTransitioning) return;
        isTransitioning = true;
        
        const currentCard = testimonialCards[currentSlide];
        const nextCard = testimonialCards[index];
        
        // Animate out current card with enhanced visibility
        if (currentCard) {
            currentCard.style.transform = direction === 'next' 
                ? 'translateX(-100px) scale(0.95)' 
                : 'translateX(100px) scale(0.95)';
            currentCard.style.opacity = '0';
            
            setTimeout(() => {
                currentCard.classList.remove('active');
                currentCard.style.display = 'none';
                currentCard.style.transform = '';
                currentCard.style.opacity = '';
            }, 300);
        }
        
        // Animate in new card with enhanced visibility
        setTimeout(() => {
            if (nextCard) {
                const nextCardBg = nextCard.querySelector('.testimonial-card-bg');
                if (nextCardBg) {
                    nextCardBg.style.opacity = '1';
                }
                
                nextCard.style.display = 'block';
                nextCard.style.transform = direction === 'next' 
                    ? 'translateX(100px) scale(0.95)' 
                    : 'translateX(-100px) scale(0.95)';
                nextCard.style.opacity = '0';
                nextCard.classList.add('active');
                
                requestAnimationFrame(() => {
                    nextCard.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    nextCard.style.transform = 'translateX(0) scale(1)';
                    nextCard.style.opacity = '1';
                });
            }
        }, 150);
        
        // Update dots with enhanced visibility
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            dot.style.transform = 'scale(1)';
            dot.style.boxShadow = '';
            if (i === index) {
                dot.classList.add('active');
                dot.style.transform = 'scale(1.3)';
                dot.style.boxShadow = '0 4px 12px rgba(var(--color-primary), 0.3)';
            }
        });
        
        currentSlide = index;
        
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % testimonialCards.length;
        showSlide(nextIndex, 'next');
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
        showSlide(prevIndex, 'prev');
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 6000);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }

    // Enhanced button interactions with better visibility
    nextBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        createRippleEffect(nextBtn, e);
        nextBtn.style.transform = 'scale(1.2) translateY(-3px)';
        setTimeout(() => {
            nextBtn.style.transform = 'scale(1.15) translateY(-2px)';
        }, 150);
        nextSlide();
        stopAutoSlide();
        setTimeout(startAutoSlide, 3000);
    });

    prevBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        createRippleEffect(prevBtn, e);
        prevBtn.style.transform = 'scale(1.2) translateY(-3px)';
        setTimeout(() => {
            prevBtn.style.transform = 'scale(1.15) translateY(-2px)';
        }, 150);
        prevSlide();
        stopAutoSlide();
        setTimeout(startAutoSlide, 3000);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            createRippleEffect(dot, e);
            showSlide(index);
            stopAutoSlide();
            setTimeout(startAutoSlide, 3000);
        });
    });

    // Enhanced pause on hover
    const carousel = document.querySelector('.testimonials__carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
    }

    // Initialize with enhanced entrance animation
    setTimeout(() => {
        showSlide(0);
        startAutoSlide();
    }, 500);
    
    console.log('Enhanced testimonials carousel initialized');
}

// Enhanced Progress Bar with Better Visibility
function initProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    if (!progressBar) return;
    
    function updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        
        progressBar.style.width = Math.min(Math.max(scrollPercent, 0), 100) + '%';
        
        // Enhanced glow effect based on progress
        const glowIntensity = scrollPercent / 100;
        progressBar.style.boxShadow = `
            0 0 ${15 + (glowIntensity * 25)}px rgba(var(--color-primary), ${0.4 + (glowIntensity * 0.4)}),
            0 2px ${8 + (glowIntensity * 12)}px rgba(var(--color-primary), ${0.3 + (glowIntensity * 0.3)}),
            0 0 ${5 + (glowIntensity * 10)}px rgba(var(--color-teal-300), ${0.2 + (glowIntensity * 0.2)})
        `;
    }
    
    let progressTimeout;
    window.addEventListener('scroll', () => {
        if (progressTimeout) {
            cancelAnimationFrame(progressTimeout);
        }
        progressTimeout = requestAnimationFrame(updateProgress);
    });
    
    updateProgress();
    console.log('Enhanced progress bar initialized');
}

// Enhanced Parallax Effects with Text Protection
function initParallaxEffects() {
    const shapes = document.querySelectorAll('.shape');
    const particles = document.querySelectorAll('.particle');
    const sections = document.querySelectorAll('section');
    
    function updateParallax() {
        const scrollY = window.pageYOffset;
        const viewportHeight = window.innerHeight;
        
        // Enhanced shapes parallax with text visibility protection
        shapes.forEach((shape, index) => {
            const speed = 0.15 + (index * 0.03); // Reduced speed for less distraction
            const yPos = -(scrollY * speed);
            const rotation = scrollY * 0.015 * (index + 1); // Reduced rotation
            const scale = 1 + (Math.sin(scrollY * 0.0008 + index) * 0.05); // Reduced scale change
            
            shape.style.transform = `
                translateY(${yPos}px) 
                rotate(${rotation}deg) 
                scale(${scale})
            `;
        });
        
        // Enhanced particles parallax with reduced interference
        particles.forEach((particle, index) => {
            const speed = 0.08 + (index * 0.015); // Reduced speed
            const yPos = -(scrollY * speed);
            const xPos = Math.sin(scrollY * 0.0008 + index) * 15; // Reduced movement
            
            particle.style.transform = `
                translateY(${yPos}px) 
                translateX(${xPos}px)
            `;
        });
        
        // Enhanced section-based effects with better text visibility
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < viewportHeight && rect.bottom > 0;
            
            if (isVisible) {
                const progress = Math.max(0, Math.min(1, 
                    (viewportHeight - rect.top) / (viewportHeight + rect.height)
                ));
                
                // Apply subtle transform based on scroll progress
                section.style.transform = `translateY(${(1 - progress) * 15}px)`; // Reduced movement
                section.style.opacity = Math.max(0.5, progress); // Better minimum opacity
            }
        });
    }
    
    let parallaxFrame;
    window.addEventListener('scroll', () => {
        if (parallaxFrame) {
            cancelAnimationFrame(parallaxFrame);
        }
        parallaxFrame = requestAnimationFrame(updateParallax);
    });
    
    updateParallax();
    console.log('Enhanced parallax effects with text protection initialized');
}

// Enhanced Service Card Animations with Better Contrast
function initServiceCardAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const cardBg = card.querySelector('.service-card-bg');
        const cardContent = card.querySelector('.service-card__content');
        
        // Enhanced hover effects with better visibility
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
            this.style.boxShadow = '0 30px 60px rgba(var(--color-primary), 0.25)';
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            
            if (cardBg) {
                cardBg.style.opacity = '1';
                cardBg.style.background = 'rgba(var(--color-surface), 0.98)';
            }
            
            // Animate icon with enhanced visibility
            const icon = this.querySelector('.service-card__icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotateY(360deg)';
                icon.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                icon.style.filter = 'drop-shadow(0 8px 16px rgba(var(--color-primary), 0.4))';
            }
            
            // Animate features list with enhanced contrast
            const features = this.querySelectorAll('.service-card__features li');
            features.forEach((feature, index) => {
                setTimeout(() => {
                    feature.style.transform = 'translateX(10px)';
                    feature.style.color = 'var(--color-text)';
                    feature.style.fontWeight = '600';
                    feature.style.textShadow = '0 1px 2px rgba(0, 0, 0, 0.2)';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
            
            if (cardBg) {
                cardBg.style.background = 'rgba(var(--color-surface), 0.98)';
            }
            
            // Reset icon
            const icon = this.querySelector('.service-card__icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotateY(0deg)';
                icon.style.filter = 'drop-shadow(0 4px 8px rgba(var(--color-primary), 0.2))';
            }
            
            // Reset features list
            const features = this.querySelectorAll('.service-card__features li');
            features.forEach(feature => {
                feature.style.transform = 'translateX(0)';
                feature.style.color = 'var(--color-text)';
                feature.style.fontWeight = '500';
                feature.style.textShadow = '0 1px 2px rgba(0, 0, 0, 0.1)';
            });
        });
        
        // Enhanced click effect with better feedback
        card.addEventListener('click', function(e) {
            createRippleEffect(this, e);
            
            // Enhanced pulse effect
            this.style.animation = 'pulse 0.6s ease-out';
            this.style.transform = 'translateY(-15px) scale(1.05)';
            setTimeout(() => {
                this.style.animation = '';
                this.style.transform = 'translateY(-15px) scale(1.03)';
            }, 600);
        });
    });
    
    console.log('Enhanced service card animations initialized');
}

// Enhanced Typewriter Effect with Better Visibility
function initTypewriterEffect() {
    const typewriterText = document.querySelector('.typewriter-text');
    if (!typewriterText) return;
    
    const text = typewriterText.textContent;
    typewriterText.textContent = '';
    typewriterText.style.width = '0';
    typewriterText.style.opacity = '1';
    typewriterText.style.textShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    typewriterText.style.fontWeight = '900';
    
    let index = 0;
    const typeSpeed = 100;
    
    function typeWriter() {
        if (index < text.length) {
            typewriterText.textContent += text.charAt(index);
            typewriterText.style.width = 'auto';
            
            // Enhanced visual feedback during typing
            typewriterText.style.textShadow = `0 4px 8px rgba(0, 0, 0, ${0.3 + (index / text.length) * 0.2})`;
            
            index++;
            setTimeout(typeWriter, typeSpeed);
        } else {
            // Enhanced completion effect
            setTimeout(() => {
                typewriterText.style.borderRight = 'none';
                typewriterText.style.textShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
            }, 2000);
        }
    }
    
    // Start typing after a delay with enhanced visibility
    setTimeout(typeWriter, 1500);
    console.log('Enhanced typewriter effect initialized');
}

// Advanced Animations System with Better Performance
function initAdvancedAnimations() {
    // Enhanced floating buttons animation
    const floatingBtns = document.querySelectorAll('.floating-btn');
    floatingBtns.forEach((btn, index) => {
        btn.style.animationDelay = `${index * 0.2}s`;
        
        btn.addEventListener('mouseenter', () => {
            btn.style.animationPlayState = 'paused';
            btn.style.transform = 'translateY(-10px) scale(1.05)';
            btn.style.textShadow = 'none';
            btn.style.boxShadow = '0 15px 35px rgba(var(--color-primary), 0.4)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.animationPlayState = 'running';
            btn.style.transform = '';
            btn.style.boxShadow = '';
        });
    });
    
    // Enhanced CTA button effects with better visibility
    document.querySelectorAll('.btn--primary').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(var(--color-primary), 0.4)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            this.style.textShadow = 'none';
            this.style.fontWeight = '600';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(var(--color-primary), 0.3)';
        });
        
        btn.addEventListener('click', function(e) {
            if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
                return;
            }
            createRippleEffect(this, e);
        });
    });
    
    // Enhanced section badges with better contrast
    const badges = document.querySelectorAll('.section__badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'scale(1.05)';
            badge.style.boxShadow = '0 8px 25px rgba(var(--color-primary), 0.4)';
            badge.style.textShadow = 'none';
        });
        
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'scale(1)';
            badge.style.boxShadow = '0 4px 15px rgba(var(--color-primary), 0.3)';
        });
    });
    
    console.log('Advanced animations with enhanced visibility initialized');
}

// Enhanced Accessibility Features
function initAccessibilityFeatures() {
    // Enhanced keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('using-keyboard');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('using-keyboard');
    });
    
    // Enhanced focus indicators with better visibility
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '3px solid var(--color-primary)';
            element.style.outlineOffset = '2px';
            element.style.boxShadow = '0 0 0 6px rgba(var(--color-primary), 0.2)';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = '';
            element.style.outlineOffset = '';
            if (!element.matches(':hover')) {
                element.style.boxShadow = '';
            }
        });
    });
    
    // Enhanced high contrast mode detection
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    function handleHighContrast(e) {
        if (e.matches) {
            document.documentElement.classList.add('high-contrast');
            // Further enhance text shadows and contrast
            document.documentElement.style.setProperty('--enhanced-text-shadow', '0 2px 4px rgba(0, 0, 0, 0.8)');
        } else {
            document.documentElement.classList.remove('high-contrast');
            document.documentElement.style.removeProperty('--enhanced-text-shadow');
        }
    }
    
    highContrastQuery.addListener(handleHighContrast);
    handleHighContrast(highContrastQuery);
    
    console.log('Enhanced accessibility features initialized');
}

// Performance Optimizations with Better Resource Management
function initPerformanceOptimizations() {
    // Enhanced image preloading with better error handling
    function preloadImages() {
        const criticalImages = [
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
            'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
        ];
        
        criticalImages.forEach(src => {
            const img = new Image();
            img.onload = () => console.log(`Preloaded: ${src}`);
            img.onerror = () => console.warn(`Failed to preload: ${src}`);
            img.src = src;
        });
    }
    
    // Enhanced intersection observer cleanup
    const observerCleanup = [];
    
    // Enhanced resize handler with better debouncing
    let resizeTimeout;
    const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            initAnimatedBackground();
            initParallaxEffects();
            console.log('Resize optimizations applied');
        }, 250);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Enhanced memory cleanup on page unload
    window.addEventListener('beforeunload', () => {
        observerCleanup.forEach(cleanup => cleanup());
        clearTimeout(resizeTimeout);
        console.log('Performance cleanup completed');
    });
    
    // Initialize optimizations
    preloadImages();
    console.log('Enhanced performance optimizations initialized');
}

// Utility Functions with Enhanced Features
function createRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple-effect 0.6s ease-out;
        pointer-events: none;
        z-index: 1000;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 600);
}

function animateStatCard(card) {
    const cardBg = card.querySelector('.stat-card-bg');
    if (cardBg) {
        cardBg.style.opacity = '1';
    }
    
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 20px 40px rgba(var(--color-primary), 0.25)';
    
    setTimeout(() => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '';
    }, 300);
}

// Enhanced throttle function for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add enhanced CSS animations and styles
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
    @keyframes ripple-effect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes spin {
        from { transform: translateY(-50%) rotate(0deg); }
        to { transform: translateY(-50%) rotate(360deg); }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .theme-transitioning * {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
    }
    
    .animate-lazy {
        animation: fadeInUp 0.8s ease-out;
    }
    
    .loading-spinner {
        animation: spin 1s linear infinite;
    }
    
    /* Enhanced high contrast mode */
    .high-contrast {
        --enhanced-text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    }
    
    .high-contrast h1, .high-contrast h2, .high-contrast h3, 
    .high-contrast h4, .high-contrast h5, .high-contrast h6,
    .high-contrast p, .high-contrast span, .high-contrast div {
        text-shadow: var(--enhanced-text-shadow, 0 1px 2px rgba(0, 0, 0, 0.3)) !important;
    }
    
    /* Enhanced keyboard navigation */
    .using-keyboard *:focus {
        outline: 3px solid var(--color-primary) !important;
        outline-offset: 2px !important;
        box-shadow: 0 0 0 6px rgba(var(--color-primary), 0.2) !important;
    }
    
    /* Enhanced text visibility for all elements */
    * {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    /* Ensure minimum text contrast ratios */
    h1, h2, h3, h4, h5, h6, .hero__title, .section__title {
        color: var(--color-text) !important;
        font-weight: 700 !important;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) !important;
    }
    
    [data-color-scheme="dark"] h1,
    [data-color-scheme="dark"] h2,
    [data-color-scheme="dark"] h3,
    [data-color-scheme="dark"] h4,
    [data-color-scheme="dark"] h5,
    [data-color-scheme="dark"] h6,
    [data-color-scheme="dark"] .hero__title,
    [data-color-scheme="dark"] .section__title {
        color: var(--color-gray-200) !important;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8) !important;
    }
    
    p, span, div, li, a {
        color: var(--color-text) !important;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) !important;
    }
    
    [data-color-scheme="dark"] p,
    [data-color-scheme="dark"] span,
    [data-color-scheme="dark"] div,
    [data-color-scheme="dark"] li,
    [data-color-scheme="dark"] a {
        color: var(--color-gray-200) !important;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6) !important;
    }
`;
document.head.appendChild(enhancedStyles);

// Initialize critical functions immediately for better user experience
window.addEventListener('load', () => {
    console.log('Window loaded, initializing critical enhanced functions...');
    document.body.classList.add('loaded');
    
    // Ensure enhanced background visibility
    setTimeout(() => {
        initAnimatedBackground();
        updateBackgroundOpacities(document.documentElement.getAttribute('data-color-scheme') || 'light');
    }, 200);
});

// Enhanced window resize handler
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        initAnimatedBackground();
        initParallaxEffects();
        updateBackgroundOpacities(document.documentElement.getAttribute('data-color-scheme') || 'light');
    }, 250);
});

// Enhanced error handling
window.addEventListener('error', (e) => {
    console.error('Enhanced application error:', e.error);
});

// Enhanced console styling for debugging
console.log('%c🤖 Coding Bot 2025 - Ultra-Animated Website with ENHANCED TEXT VISIBILITY', 
    'color: #21B5BD; font-size: 18px; font-weight: bold; text-shadow: 0 1px 2px rgba(0,0,0,0.3);');
console.log('%cAll enhanced animations and HIGH CONTRAST interactions loaded successfully!', 
    'color: #32CD32; font-size: 16px; font-weight: bold;');
console.log('%cText visibility and contrast significantly improved for better readability!', 
    'color: #FF6B35; font-size: 14px; font-weight: bold;');