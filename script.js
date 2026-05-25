function generateResponse() {
    let mode = document.getElementById("mode").value;
    let input = document.getElementById("userInput").value;
    let output = document.getElementById("output");

    if (input === "") {
        output.innerHTML = "⚠️ Please type something first.";
        return;
    }

    let response = "";

    if (mode === "study") {
        response = "📚 Study Tip: Break '" + input + "' into small parts and revise daily.";
    }

    else if (mode === "career") {
        response = "💼 Career Advice: If you are interested in '" + input + "', focus on building skills and projects around it.";
    }

    else if (mode === "motivation") {
        response = "🔥 Motivation: Keep going! You are capable of achieving greatness in '" + input + "'.";
    }

    output.innerHTML = response;
}