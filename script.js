document.addEventListener("DOMContentLoaded", function () {
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");
    const chatbot = document.getElementById("chatbot");
    const chatToggle = document.getElementById("chat-toggle");

    // Improved response system
    const responses = {
        "hello": "Hi there! 👋 How can I assist you?",
        "who are you": "I'm your futuristic AI chatbot! 🚀",
        "what can you do": "I can chat with you! Try asking me something cool. 😃",
        "how are you": "I'm just a bunch of code, but I'm feeling great! 🤖",
        "bye": "Goodbye! Hope to chat again soon. 👋",
        "portfolio": "This is Diya Patel's portfolio! Explore projects, skills, and more. 💻",
        "contact": "You can reach out via email at diyapatel41205@gmail.com 📧",
        "skills": "Diya's skills include HTML, CSS, JavaScript, React, Python, and more! 🚀",
        "projects": "Check out the Stock Market Tracker and other cool projects! 📈",
        "resume": "You can download the resume here: <a href='diyaresume.pdf' download>Click here</a> 📄",
        "what is your name": "I am Diya Patel's AI chatbot. 🤖",
        "thank you": "You're welcome! 😊",
    };

    // Function to return a response based on the user's input
    function getResponse(userInput) {
        userInput = userInput.toLowerCase();

        // Keyword-based responses
        if (userInput.includes("hello") || userInput.includes("hi")) {
            return responses["hello"];
        }
        if (userInput.includes("who are you")) {
            return responses["who are you"];
        }
        if (userInput.includes("what can you do")) {
            return responses["what can you do"];
        }
        if (userInput.includes("how are you")) {
            return responses["how are you"];
        }
        if (userInput.includes("bye")) {
            return responses["bye"];
        }
        if (userInput.includes("portfolio")) {
            return responses["portfolio"];
        }
        if (userInput.includes("contact")) {
            return responses["contact"];
        }
        if (userInput.includes("skills")) {
            return responses["skills"];
        }
        if (userInput.includes("projects")) {
            return responses["projects"];
        }
        if (userInput.includes("resume")) {
            return responses["resume"];
        }
        if (userInput.includes("what is your name")) {
            return responses["what is your name"];
        }
        if (userInput.includes("thank you")) {
            return responses["thank you"];
        }

        return "Hmm... I don't know the answer to that. 🤔 Try asking something else!";
    }

    // Event listener for capturing user input
    chatInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter" && chatInput.value.trim() !== "") {
            let userInput = chatInput.value;
            addMessage(userInput, "user");
            chatInput.value = "";

            // Generate chatbot response
            setTimeout(() => {
                let botReply = getResponse(userInput);
                addMessage(botReply, "ai");
            }, 1000);
        }
    });

    // Function to add messages to the chat window
    function addMessage(text, sender) {
        let message = document.createElement("div");
        message.classList.add("message", sender);
        message.innerHTML = text;
        chatMessages.appendChild(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Toggle Chatbot Visibility (open/close the chatbot)
    chatToggle.addEventListener("click", function () {
        chatbot.style.display = chatbot.style.display === "none" ? "block" : "none";
    });
});
