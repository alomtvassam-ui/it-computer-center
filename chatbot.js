// Alomdigitech Store AI Chatbot
class AlomdigitechChatbot {
    constructor() {
        this.storeInfo = {
            name: "Alomdigitech Store",
            products: ["Clothes", "Electronics", "Grocery", "Digital Products"],
            languages: "Assamese + English (Mixed)",
            contact: {
                phone: "081339 85107",
                email: "alomtvassam@gmail.com",
                website: "alomdigitech.com"
            },
            hours: {
                weekdays: "Monday–Saturday: 9:00 AM – 8:00 PM",
                sunday: "Closed / Limited support"
            },
            returns: "7-day easy returns, Full refund if product damaged or wrong item delivered",
            shipping: "Delivery across Assam / India, Free shipping on orders above ₹999, Tracking available for all orders"
        };

        this.faqs = {
            "do you deliver outside assam": "Yes, we deliver across India. Shipping charges apply for orders below ₹999.",
            "can i return an item": "Yes, you can return items within 7 days of delivery. Full refund if product is damaged or wrong.",
            "what payment methods do you accept": "We accept UPI, Cards, Net Banking, and Cash on Delivery.",
            "how can i contact support": "You can WhatsApp us at 081339 85107 or email at alomtvassam@gmail.com.",
            "how long does delivery take": "3–7 business days for Assam, 5–10 days for other states."
        };

        this.greeting = "Hi there! 👋 Welcome to **Alomdigitech Store** – Your one-stop shop for clothes, electronics, groceries & more! Ask me anything about products, orders, or offers.";
        this.promotional = "🔥 Don't miss today's deals! Get exclusive discounts on trending products. Click 'Shop Now' to grab yours!";

        this.init();
    }

    init() {
        this.createChatWidget();
        this.bindEvents();
    }

    createChatWidget() {
        const widgetHTML = `
            <div id="alomdigitech-chat-widget">
                <div id="chat-button">💬</div>
                <div id="chat-window" style="display: none;">
                    <div id="chat-header">
                        <span>Alomdigitech Store AI</span>
                        <button id="close-chat">×</button>
                    </div>
                    <div id="chat-messages"></div>
                    <div id="chat-input-container">
                        <input type="text" id="chat-input" placeholder="Ask me anything...">
                        <button id="send-button">Send</button>
                    </div>
                </div>
            </div>
        `;

        const style = `
            <style>
                #alomdigitech-chat-widget {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 1000;
                    font-family: Arial, sans-serif;
                }
                #chat-button {
                    width: 60px;
                    height: 60px;
                    background: #0d47a1;
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    font-size: 24px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                }
                #chat-window {
                    position: absolute;
                    bottom: 80px;
                    right: 0;
                    width: 350px;
                    height: 500px;
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                }
                #chat-header {
                    background: #0d47a1;
                    color: white;
                    padding: 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                #close-chat {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 20px;
                    cursor: pointer;
                }
                #chat-messages {
                    flex: 1;
                    padding: 15px;
                    overflow-y: auto;
                    background: #f9f9f9;
                }
                .message {
                    margin-bottom: 10px;
                    padding: 8px 12px;
                    border-radius: 8px;
                    max-width: 80%;
                }
                .message.user {
                    background: #0d47a1;
                    color: white;
                    align-self: flex-end;
                    margin-left: auto;
                }
                .message.bot {
                    background: #e3f2fd;
                    color: #333;
                }
                #chat-input-container {
                    display: flex;
                    padding: 15px;
                    background: white;
                    border-top: 1px solid #eee;
                }
                #chat-input {
                    flex: 1;
                    padding: 8px 12px;
                    border: 1px solid #ddd;
                    border-radius: 20px;
                    outline: none;
                }
                #send-button {
                    background: #0d47a1;
                    color: white;
                    border: none;
                    padding: 8px 15px;
                    border-radius: 20px;
                    margin-left: 10px;
                    cursor: pointer;
                }
                @media (max-width: 480px) {
                    #chat-window {
                        width: 90vw;
                        height: 70vh;
                        bottom: 80px;
                        right: -10px;
                    }
                }
            </style>
        `;

        document.head.insertAdjacentHTML('beforeend', style);
        document.body.insertAdjacentHTML('beforeend', widgetHTML);

        this.chatMessages = document.getElementById('chat-messages');
        this.chatInput = document.getElementById('chat-input');
        this.sendButton = document.getElementById('send-button');
        this.chatWindow = document.getElementById('chat-window');
        this.chatButton = document.getElementById('chat-button');
        this.closeButton = document.getElementById('close-chat');
    }

    bindEvents() {
        this.chatButton.addEventListener('click', () => this.toggleChat());
        this.closeButton.addEventListener('click', () => this.toggleChat());
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggleChat() {
        const isVisible = this.chatWindow.style.display !== 'none';
        this.chatWindow.style.display = isVisible ? 'none' : 'flex';
        if (!isVisible) {
            this.addMessage(this.greeting, 'bot');
        }
    }

    sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        this.chatInput.value = '';

        const response = this.getResponse(message.toLowerCase());
        setTimeout(() => this.addMessage(response, 'bot'), 500);
    }

    getResponse(message) {
        // Check for exact FAQ matches
        for (const [question, answer] of Object.entries(this.faqs)) {
            if (message.includes(question)) {
                return answer;
            }
        }

        // Check for keywords
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return this.greeting;
        }

        if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
            return `You can reach us at:\n📞 Phone/WhatsApp: ${this.storeInfo.contact.phone}\n📧 Email: ${this.storeInfo.contact.email}`;
        }

        if (message.includes('hours') || message.includes('time') || message.includes('open')) {
            return `Our working hours:\n${this.storeInfo.hours.weekdays}\n${this.storeInfo.hours.sunday}`;
        }

        if (message.includes('return') || message.includes('refund')) {
            return this.storeInfo.returns;
        }

        if (message.includes('shipping') || message.includes('delivery')) {
            return this.storeInfo.shipping;
        }

        if (message.includes('products') || message.includes('categories')) {
            return `We offer: ${this.storeInfo.products.join(', ')}`;
        }

        if (message.includes('payment')) {
            return this.faqs['what payment methods do you accept'];
        }

        // Default response
        return `I'm here to help with questions about ${this.storeInfo.name}. You can ask about our products, shipping, returns, or contact information. ${this.promotional}`;
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.textContent = text;
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new AlomdigitechChatbot();
});