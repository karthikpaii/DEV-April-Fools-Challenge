document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const luckyBtn = document.getElementById("lucky-btn");
    const resultsContainer = document.getElementById("results-container");
    const loader = document.getElementById("loader");
    const result = document.getElementById("result");
    const resultText = document.getElementById("result-text");
    const subText = document.getElementById("sub-text");
    const locationPrompt = document.getElementById("location-prompt");
    const allowBtn = document.getElementById("allow-btn");
    const denyBtn = document.getElementById("deny-btn");

    const snarkyAnswers = [
        "Did you really need to search that?",
        "I could tell you, but then I'd have to kill you.",
        "Go ask ChatGPT, I'm on a break.",
        "Error 404: Motivation to answer not found.",
        "Why are you asking me this?",
        "Honestly? I have no idea.",
        "You expect me to know that?",
        "Bing might know. Go bother them.",
        "The answer is 42. Now leave me alone.",
        "Seriously? Use your brain.",
        "404 Error: Brain cells not found.",
        "I'm a useless search engine, what did you expect?",
        "Ask your mom.",
        "Google it... oh wait.",
        "My highly advanced AI has determined this is a dumb question."
    ];

    function handleSearch(e) {
        if (e) e.preventDefault();
        
        const query = searchInput.value.trim();
        if (!query) return;

        // Hide previous results and show loader
        resultsContainer.classList.remove("hidden");
        loader.classList.remove("hidden");
        result.classList.add("hidden");

        // Simulate network request
        setTimeout(() => {
            loader.classList.add("hidden");
            result.classList.remove("hidden");
            
            if (query.toLowerCase() === "how to learn java in 1 day") {
                resultText.textContent = "Mental Hospital wants to know your location";
                subText.classList.add("hidden");
                locationPrompt.classList.remove("hidden");
            } else {
                const randomAnswer = snarkyAnswers[Math.floor(Math.random() * snarkyAnswers.length)];
                resultText.textContent = randomAnswer;
                subText.classList.remove("hidden");
                locationPrompt.classList.add("hidden");
            }
        }, 1500); // 1.5 second loading delay for dramatic effect
    }

    searchForm.addEventListener("submit", handleSearch);
    searchBtn.addEventListener("click", handleSearch);
    
    luckyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        
        searchInput.value = "I'm feeling unlucky...";
        
        // Hide previous results and show loader
        resultsContainer.classList.remove("hidden");
        loader.classList.remove("hidden");
        result.classList.add("hidden");

        // Simulate network request
        setTimeout(() => {
            loader.classList.add("hidden");
            result.classList.remove("hidden");
            
            // Combine previous snarky answers with the new one repeated a few times for equal weighting
            const luckyAnswers = [
                ...snarkyAnswers,
                "You are not lucky. AI will replace you.",
                "You are not lucky. AI will replace you."
            ];
            
            resultText.textContent = luckyAnswers[Math.floor(Math.random() * luckyAnswers.length)];
        }, 1500);
    });

    const micBtn = document.querySelector(".mic-icon");
    if (micBtn) {
        micBtn.addEventListener("click", () => {
            const originalPlaceholder = searchInput.placeholder;
            searchInput.placeholder = "Listening...";
            searchInput.value = "";
            
            // Speak a funny message
            if ('speechSynthesis' in window) {
                const msg = new SpeechSynthesisUtterance("I am a website. Do I look like I have ears? Just type it, lazy.");
                window.speechSynthesis.speak(msg);
            } else {
                alert("I am a website. Do I look like I have ears? Just type it, lazy.");
            }
            
            setTimeout(() => {
                searchInput.value = "How to type with fingers";
                searchInput.placeholder = originalPlaceholder;
                handleSearch();
            }, 3000);
        });
    }

    if (allowBtn) {
        allowBtn.addEventListener("click", () => {
            alert("Ambulance dispatched! Please do not leave your current location.");
            locationPrompt.classList.add("hidden");
            subText.classList.remove("hidden");
        });
    }
    
    if (denyBtn) {
        denyBtn.addEventListener("click", () => {
            alert("Location access denied. But honestly... seeking help is recommended.");
            locationPrompt.classList.add("hidden");
            subText.classList.remove("hidden");
        });
    }
});
