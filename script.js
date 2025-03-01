document.addEventListener("DOMContentLoaded", function () {
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");
    const chatbot = document.getElementById("chatbot");
    const chatToggle = document.getElementById("chat-toggle");

    const responses = {
        "hello": "Hi there! 👋 How can I assist you?",
        "who are you": "I'm your futuristic AI chatbot! 🚀",
        "what can you do": "I can chat with you! Try asking me something cool. 😃",
        "how are you": "I'm just a bunch of code, but I'm feeling great! 🤖",
        "bye": "Goodbye! Hope to chat again soon. 👋"
    };

    chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter" && chatInput.value.trim() !== "") {
            let userInput = chatInput.value.toLowerCase();
            addMessage(userInput, "user");
            chatInput.value = "";

            setTimeout(() => {
                showTypingIndicator();
                setTimeout(() => {
                    let botReply = responses[userInput] || "Hmm... I don't know the answer to that. 🤔";
                    removeTypingIndicator();
                    addMessage(botReply, "ai");
                }, 1000);
            }, 500);
        }
    });

    function addMessage(text, sender) {
        let message = document.createElement("div");
        message.classList.add("message", sender);
        message.innerText = text;
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTypingIndicator() {
        let typingIndicator = document.createElement("div");
        typingIndicator.id = "typing";
        typingIndicator.classList.add("message", "ai", "typing");
        typingIndicator.innerText = "Typing...";
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        let typingIndicator = document.getElementById("typing");
        if (typingIndicator) typingIndicator.remove();
    }

    // Toggle Chatbot Visibility
    chatToggle.addEventListener("click", function () {
        chatbot.style.display = chatbot.style.display === "none" ? "block" : "none";
    });
});
