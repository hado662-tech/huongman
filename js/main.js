// ===== PRODUCTS DATA =====
const productsData = [
    {
        id: 1,
        name: "Serum Vitamin C Cao Cấp",
        category: "serum",
        price: 850000,
        description: "Serum vitamin C giúp làm sáng da, mờ thâm nám và chống lão hóa",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop", // URL ảnh online
        icon: "💧"
    },
    {
        id: 2,
        name: "Kem Chống Nắng SPF 50+",
        category: "sunscreen",
        price: 550000,
        description: "Bảo vệ da khỏi tia UV, không gây nhờn rít",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop",
        icon: "☀️"
    },
    {
        id: 3,
        name: "Sữa Rửa Mặt Dịu Nhẹ",
        category: "cleanser",
        price: 350000,
        description: "Làm sạch sâu, giữ ẩm cho da nhạy cảm",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop",
        icon: "🧴"
    },
    {
        id: 4,
        name: "Kem Dưỡng Ẩm Ban Đêm",
        category: "cream",
        price: 950000,
        description: "Phục hồi và nuôi dưỡng da trong khi bạn ngủ",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop",
        icon: "🌙"
    },
    {
        id: 5,
        name: "Mặt Nạ Collagen Sinh Học",
        category: "mask",
        price: 450000,
        description: "Cấp ẩm sâu, tăng độ đàn hồi cho da",
        image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&h=500&fit=crop",
        icon: "✨"
    },
    {
        id: 6,
        name: "Serum Hyaluronic Acid",
        category: "serum",
        price: 750000,
        description: "Cấp nước tức thì, làm mềm mịn da",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
        icon: "💎"
    },
    {
        id: 7,
        name: "Kem Dưỡng Trắng Da",
        category: "cream",
        price: 1200000,
        description: "Làm sáng da, đều màu da hiệu quả",
        icon: "⭐"
    },
    {
        id: 8,
        name: "Toner Cân Bằng pH",
        category: "serum",
        price: 450000,
        description: "Cân bằng độ pH, se khít lỗ chân lông",
        icon: "🌸"
    },
    {
        id: 9,
        name: "Mặt Nạ Ngủ Dưỡng Ẩm",
        category: "mask",
        price: 680000,
        description: "Dưỡng ẩm suốt đêm, da mềm mịn vào buổi sáng",
        icon: "🌟"
    },
    {
        id: 10,
        name: "Serum Retinol Chống Lão Hóa",
        category: "serum",
        price: 1500000,
        description: "Giảm nếp nhăn, tăng sinh collagen",
        icon: "💫"
    },
    {
        id: 11,
        name: "Kem Mắt Chống Quầng Thâm",
        category: "cream",
        price: 850000,
        description: "Giảm bọng mắt và quầng thâm hiệu quả",
        icon: "👁️"
    },
    {
        id: 12,
        name: "Sữa Rửa Mặt Trị Mụn",
        category: "cleanser",
        price: 420000,
        description: "Kiểm soát dầu, giảm mụn viêm",
        icon: "🧼"
    }
];

// ===== SHOPPING CART =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Load featured products on homepage
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const featured = productsData.slice(0, 6);
    container.innerHTML = featured.map(product => `
        <div class="product-card">
            <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">` : ''}
                <span class="product-icon">${product.icon}</span>
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Thêm Vào Giỏ
                </button>
            </div>
        </div>
    `).join('');
}

// Load all products on products page
function loadAllProducts(filter = 'all') {
    const container = document.getElementById('productsGrid');
    if (!container) return;

    const filtered = filter === 'all' 
        ? productsData 
        : productsData.filter(p => p.category === filter);

    container.innerHTML = filtered.map(product => `
        <div class="product-card">
            <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">` : ''}
                <span class="product-icon">${product.icon}</span>
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="btn-add-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Thêm Vào Giỏ
                </button>
            </div>
        </div>
    `).join('');
}

// Filter products
function filterProducts(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadAllProducts(category);
}

// Get category name in Vietnamese
function getCategoryName(category) {
    const categories = {
        serum: 'Serum',
        cream: 'Kem Dưỡng',
        mask: 'Mặt Nạ',
        cleanser: 'Sữa Rửa Mặt',
        sunscreen: 'Chống Nắng'
    };
    return categories[category] || category;
}

// Format price to Vietnamese currency
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { 
        style: 'currency', 
        currency: 'VND' 
    }).format(price);
}

// Add to cart
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification('Đã thêm sản phẩm vào giỏ hàng!');
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = cartCount;
    });

    // Update cart items
    const cartItemsContainer = document.getElementById('cartItems');
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; padding: 40px; color: #666;">Giỏ hàng trống</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.icon}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="cart-item-quantity">
                        <button onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button onclick="removeFromCart(${item.id})" style="margin-left: auto; color: #e74c3c;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartTotalElement = document.getElementById('cartTotal');
    if (cartTotalElement) {
        cartTotalElement.textContent = formatPrice(total);
    }
}

// Open cart
function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
}

// Close cart
function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống!', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const message = `Xin chào! Tôi muốn đặt hàng:\n\n${cart.map(item => 
        `- ${item.name} x ${item.quantity}: ${formatPrice(item.price * item.quantity)}`
    ).join('\n')}\n\nTổng cộng: ${formatPrice(total)}`;

    // In production, this would open a checkout page or payment gateway
    alert('Chức năng thanh toán đang được phát triển.\n\n' + message);
    
    // For now, we can redirect to WhatsApp or contact form
    // window.open(`https://wa.me/84901234567?text=${encodeURIComponent(message)}`);
}

// ===== BOOKING MODAL =====
function openBooking() {
    document.getElementById('bookingModal').classList.add('active');
}

function closeBooking() {
    document.getElementById('bookingModal').classList.remove('active');
}

// Handle booking form submission
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Đặt lịch thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.');
            closeBooking();
            bookingForm.reset();
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
            contactForm.reset();
        });
    }
});

// ===== AI CHATBOT =====
const chatResponses = {
    'chào|hello|hi|xin chào|alo|alô': [
        'Chào bạn! Mình là tư vấn viên Hương Mận đây 😊\n\nBạn đang quan tâm về làm đẹp phải không? Có thắc mắc gì cứ hỏi mình nhé!',
        'Xin chào! Mình ở đây để tư vấn cho bạn á 🌸\n\nBạn muốn hỏi về dịch vụ hay sản phẩm nhỉ?'
    ],
    'giá|chi phí|bao nhiêu tiền|giá cả': [
        'Giá dịch vụ của chúng tôi dao động từ 500.000đ đến 25.000.000đ tùy theo liệu trình. Hiện tại chúng tôi đang có nhiều chương trình ưu đãi hấp dẫn. Bạn quan tâm dịch vụ nào để tôi tư vấn cụ thể?'
    ],
    'ultherapy|nâng cơ|làm căng da': [
        'Ultherapy Prime là công nghệ nâng cơ không phẫu thuật hiện đại nhất hiện nay. Giá từ 15.000.000đ. Hiện đang giảm còn 9.900.000đ kèm 3 lần Skin Booster. Bạn muốn đặt lịch tư vấn không?'
    ],
    'filler|botox|tiêm': [
        'Chúng tôi có các dịch vụ tiêm Filler và Botox cao cấp:\n- Filler Juvederm: 8.000.000đ/ml\n- Botox 50 units: 5.000.000đ\n- Combo VIP giảm 25%. Bạn muốn biết thêm chi tiết gì?'
    ],
    'nám|tàn nhang|thâm': [
        'Gói trị nám chuyên sâu của chúng tôi bao gồm:\n- Laser Toning 5 lần\n- Peel da y tế 3 lần\n- Kem dưỡng trắng\nGiá: 7.200.000đ (giảm 40%). Hiệu quả rõ rệt sau 1 tháng!'
    ],
    'sản phẩm|mua|kem|serum': [
        'Chúng tôi có đầy đủ các sản phẩm chăm sóc da chính hãng:\n- Serum Vitamin C: 850.000đ\n- Kem chống nắng SPF 50+: 550.000đ\n- Kem dưỡng trắng: 1.200.000đ\nBạn muốn xem thêm sản phẩm nào?'
    ],
    'đặt lịch|hẹn|booking': [
        'Tôi sẽ giúp bạn đặt lịch ngay! Vui lòng click vào nút "Đặt Lịch Ngay" để điền thông tin. Hoặc bạn có thể gọi hotline: 028 1234 5678 để được hỗ trợ nhanh hơn.'
    ],
    'địa chỉ|ở đâu|chi nhánh': [
        'Thẩm Mỹ Viện Hương Mận:\n📍 123 Đường Nguyễn Huệ, Quận 1, TP.HCM\n📞 028 1234 5678\n⏰ Thứ 2-6: 9h-20h | Thứ 7-CN: 9h-18h'
    ],
    'giờ|mở cửa|làm việc': [
        'Giờ làm việc của chúng tôi:\n- Thứ 2 - Thứ 6: 09:00 - 20:00\n- Thứ 7 - Chủ nhật: 09:00 - 18:00\nChúng tôi làm việc cả ngày lễ!'
    ],
    'khuyến mãi|ưu đãi|giảm giá': [
        'Chương trình ưu đãi tháng này:\n🔥 Gói Trẻ Hóa Da: Giảm 34% - Chỉ 9.900.000đ\n🔥 Gói VIP: Giảm 24% - Chỉ 18.900.000đ\n🔥 Trị Nám: Giảm 40% - Chỉ 7.200.000đ\nNhanh tay đặt lịch để nhận ưu đãi!'
    ],
    'cảm ơn|thanks|thank you': [
        'Rất vui được hỗ trợ bạn! Nếu có bất kỳ thắc mắc nào, đừng ngần ngại nhắn tin cho tôi nhé! 😊'
    ]
};

// Toggle chat window
function toggleChat() {
    const chatBody = document.getElementById('chatBody');
    const chatToggle = document.getElementById('chatToggle');
    
    if (chatBody.classList.contains('active')) {
        chatBody.classList.remove('active');
        chatToggle.style.transform = 'rotate(0deg)';
    } else {
        chatBody.classList.add('active');
        chatToggle.style.transform = 'rotate(180deg)';
    }
}

// Open chat widget from bubble
function openChatWidget() {
    const chatWidget = document.getElementById('chatWidget');
    const chatBubble = document.getElementById('chatBubble');
    const chatBody = document.getElementById('chatBody');
    
    if (chatWidget && chatBubble) {
        chatWidget.classList.add('active');
        chatBubble.classList.add('hidden');
        
        // Auto open chat body
        if (chatBody) {
            chatBody.classList.add('active');
        }
    }
}

// Close chat widget
function closeChatWidget() {
    const chatWidget = document.getElementById('chatWidget');
    const chatBubble = document.getElementById('chatBubble');
    const chatBody = document.getElementById('chatBody');
    
    if (chatWidget && chatBubble) {
        chatWidget.classList.remove('active');
        chatBubble.classList.remove('hidden');
        
        // Close chat body
        if (chatBody) {
            chatBody.classList.remove('active');
        }
    }
}

// Send message
async function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    input.value = '';
    
    // Hiển thị typing indicator
    const typingIndicator = addTypingIndicator();
    
    try {
        // Get bot response (async nếu dùng AI)
        const response = await getBotResponse(message);
        
        // Remove typing indicator
        removeTypingIndicator(typingIndicator);
        
        // Add bot response
        addChatMessage(response, 'bot');
    } catch (error) {
        console.error('Send message error:', error);
        removeTypingIndicator(typingIndicator);
        addChatMessage('Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại! 🙏', 'bot');
    }
}

// Thêm typing indicator
function addTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <p>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
        </p>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingDiv;
}

// Xóa typing indicator
function removeTypingIndicator(indicator) {
    if (indicator && indicator.parentNode) {
        indicator.parentNode.removeChild(indicator);
    }
}

// Add chat message to UI
function addChatMessage(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ===== GROK AI INTEGRATION =====

// Conversation history để AI nhớ ngữ cảnh
let conversationHistory = [];

// Get bot response - Ưu tiên dùng Grok AI
async function getBotResponse(message) {
    // Kiểm tra xem đã config Grok API chưa
    if (window.isApiConfigured && window.isApiConfigured()) {
        try {
            // Gọi Grok AI
            const response = await getGrokAIResponse(message);
            return response;
        } catch (error) {
            console.error('Grok AI Error:', error);
            // Fallback sang keyword-based nếu lỗi
            if (window.AI_CONFIG && window.AI_CONFIG.useFallback) {
                return getKeywordResponse(message);
            }
            return 'Xin lỗi, tôi đang gặp sự cố kỹ thuật. Vui lòng thử lại sau hoặc gọi hotline: 028 1234 5678 để được hỗ trợ ngay! 🙏';
        }
    } else {
        // Chưa config API key, dùng keyword-based
        return getKeywordResponse(message);
    }
}

// Gọi Grok AI API
async function getGrokAIResponse(userMessage) {
    // Thêm message vào history
    conversationHistory.push({
        role: 'user',
        content: userMessage
    });
    
    // Giới hạn history (chỉ giữ 10 tin nhắn gần nhất)
    if (conversationHistory.length > 20) {
        conversationHistory = conversationHistory.slice(-20);
    }
    
    // Prepare messages
    const messages = [
        {
            role: 'system',
            content: window.AI_CONFIG.systemPrompt
        },
        ...conversationHistory
    ];
    
    // Call Grok API
    const response = await fetch(window.AI_CONFIG.apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.AI_CONFIG.apiKey}`
        },
        body: JSON.stringify({
            model: window.AI_CONFIG.model,
            messages: messages,
            temperature: window.AI_CONFIG.temperature,
            max_tokens: window.AI_CONFIG.maxTokens,
            stream: false
        })
    });
    
    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    const aiMessage = data.choices[0].message.content;
    
    // Lưu response vào history
    conversationHistory.push({
        role: 'assistant',
        content: aiMessage
    });
    
    return aiMessage;
}

// Keyword-based response (fallback)
function getKeywordResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const [keywords, responses] of Object.entries(chatResponses)) {
        const keywordList = keywords.split('|');
        if (keywordList.some(keyword => lowerMessage.includes(keyword))) {
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    // Default response
    return 'Cảm ơn bạn đã liên hệ! Tôi chưa hiểu rõ câu hỏi của bạn. Bạn có thể hỏi về:\n- Dịch vụ và giá cả\n- Sản phẩm làm đẹp\n- Đặt lịch hẹn\n- Địa chỉ và giờ làm việc\n- Khuyến mãi hiện tại';
}

// Handle Enter key in chat
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

// ===== SERVICE DETAILS =====
function showServiceDetails(serviceType) {
    const serviceInfo = {
        lifting: {
            title: 'Công Nghệ Nâng Cơ',
            content: 'Ultherapy Prime, Thermage FLX, HIFU Lifting - Công nghệ nâng cơ không phẫu thuật, hiệu quả lâu dài.'
        },
        injection: {
            title: 'Tiêm Filler & Botox',
            content: 'Filler cao cấp từ Mỹ, Botox chính hãng. Giúp xóa nhăn, nâng mũi, làm đầy môi tự nhiên.'
        },
        skincare: {
            title: 'Chăm Sóc Da',
            content: 'Skin Booster, Laser trị nám, Peel da y tế. Giải pháp cho mọi vấn đề về da.'
        },
        body: {
            title: 'Giảm Béo & Cơ Thể',
            content: 'Giảm mỡ bụng, tan mỡ bắp tay, body contouring. Công nghệ tiên tiến, an toàn.'
        }
    };
    
    const info = serviceInfo[serviceType];
    alert(`${info.title}\n\n${info.content}\n\nVui lòng liên hệ để được tư vấn chi tiết!`);
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const body = document.body;
    
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}

// Handle dropdown clicks on mobile
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector(':scope > a'); // Only direct child
        
        if (!link) return;
        
        link.addEventListener('click', function(e) {
            // Only prevent default and toggle on mobile
            if (window.innerWidth <= 968) {
                e.preventDefault();
                e.stopPropagation();
                
                // Check if currently active
                const isActive = dropdown.classList.contains('active');
                
                // Close ALL dropdowns first
                dropdowns.forEach(other => {
                    other.classList.remove('active');
                });
                
                // If was closed, open it; if was open, keep it closed
                if (!isActive) {
                    dropdown.classList.add('active');
                }
            }
        });
    });
    
    // Close dropdown when clicking links inside mega menu
    const megaMenuLinks = document.querySelectorAll('.mega-menu .dropdown-menu a');
    megaMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close all dropdowns on both mobile and desktop
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const mobileToggle = document.querySelector('.mobile-toggle');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (mobileToggle) mobileToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const nav = document.querySelector('.navbar');
        const navMenu = document.querySelector('.nav-menu');
        const mobileToggle = document.querySelector('.mobile-toggle');
        
        if (!nav.contains(e.target) && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (mobileToggle) mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when window is resized to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 968) {
            const navMenu = document.querySelector('.nav-menu');
            const mobileToggle = document.querySelector('.mobile-toggle');
            
            if (navMenu) navMenu.classList.remove('active');
            if (mobileToggle) mobileToggle.classList.remove('active');
            document.body.style.overflow = '';
            
            // Close all dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// ===== NOTIFICATION =====
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    // Load products
    loadFeaturedProducts();
    loadAllProducts();
    
    // Update cart UI
    updateCartUI();
    
    // Setup chat widget events
    const chatBubble = document.getElementById('chatBubble');
    const chatClose = document.getElementById('chatClose');
    const chatHeader = document.getElementById('chatHeader');
    const chatSend = document.getElementById('chatSend');
    
    if (chatBubble) {
        chatBubble.addEventListener('click', openChatWidget);
    }
    
    if (chatClose) {
        chatClose.addEventListener('click', closeChatWidget);
    }
    
    if (chatHeader) {
        chatHeader.addEventListener('click', toggleChat);
    }
    
    if (chatSend) {
        chatSend.addEventListener('click', sendMessage);
    }
    
    // Close modals when clicking outside
    window.onclick = function(event) {
        const bookingModal = document.getElementById('bookingModal');
        if (event.target === bookingModal) {
            closeBooking();
        }
    };
    
    console.log('🌸 Thẩm Mỹ Viện Hương Mận - Website initialized successfully!');
});
