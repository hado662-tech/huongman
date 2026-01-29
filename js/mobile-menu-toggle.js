/**
 * MOBILE MENU TOGGLE - REDESIGNED & SIMPLIFIED
 * File mới hoàn toàn - Không conflict với code cũ
 */

(function() {
    'use strict';
    
    console.log('🚀 Mobile Menu Toggle JS Loaded!');
    
    // Wait for DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
    
    function initMobileMenu() {
        console.log('📱 Initializing mobile menu...');
        
        const dropdowns = document.querySelectorAll('.nav-menu .dropdown');
        
        if (dropdowns.length === 0) {
            console.warn('⚠️ No dropdowns found!');
            return;
        }
        
        console.log(`✅ Found ${dropdowns.length} dropdowns`);
        
        // Handle each dropdown
        dropdowns.forEach((dropdown, index) => {
            // Get the direct child link only
            const triggerLink = dropdown.querySelector(':scope > a');
            
            if (!triggerLink) {
                console.warn(`⚠️ Dropdown ${index} has no trigger link`);
                return;
            }
            
            console.log(`✅ Dropdown ${index} initialized:`, triggerLink.textContent.trim());
            
            // Remove any existing listeners (clean slate)
            const newTriggerLink = triggerLink.cloneNode(true);
            triggerLink.parentNode.replaceChild(newTriggerLink, triggerLink);
            
            // Add new click listener
            newTriggerLink.addEventListener('click', function(e) {
                // Only on mobile
                if (window.innerWidth > 968) {
                    return; // Let normal behavior happen on desktop
                }
                
                e.preventDefault();
                e.stopPropagation();
                
                const currentDropdown = this.closest('.dropdown');
                const wasActive = currentDropdown.classList.contains('active');
                
                console.log(`🖱️ Clicked: ${this.textContent.trim()}`);
                console.log(`   Was active: ${wasActive}`);
                
                // Close ALL dropdowns first
                dropdowns.forEach(d => {
                    d.classList.remove('active');
                });
                
                // If it was closed, open it
                if (!wasActive) {
                    currentDropdown.classList.add('active');
                    console.log('   ✅ Opened!');
                } else {
                    console.log('   ✅ Closed!');
                }
            });
        });
        
        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (window.innerWidth > 968) return;
            
            const clickedInsideMenu = e.target.closest('.nav-menu');
            const clickedToggleBtn = e.target.closest('.mobile-toggle');
            
            if (!clickedInsideMenu && !clickedToggleBtn) {
                console.log('🖱️ Clicked outside - closing all dropdowns');
                dropdowns.forEach(d => {
                    d.classList.remove('active');
                });
            }
        });
        
        // Close dropdowns when clicking submenu links
        const subMenuLinks = document.querySelectorAll('.nav-menu .dropdown-menu a');
        subMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                console.log('🖱️ Clicked submenu link - closing dropdowns');
                dropdowns.forEach(d => {
                    d.classList.remove('active');
                });
            });
        });
        
        // Close dropdowns on window resize to desktop
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 968) {
                    console.log('📐 Resized to desktop - closing dropdowns');
                    dropdowns.forEach(d => {
                        d.classList.remove('active');
                    });
                }
            }, 250);
        });
        
        console.log('✅ Mobile menu fully initialized!');
    }
})();
