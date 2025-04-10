const newBtn = document.querySelector('#js-new-quote');
const answerBtn = document.querySelector('#js-tweet');

const endpoint = "https://stoic.tekloon.net/stoic-quote";

let current = {
    question: "",
    answer: ""
};

async function getQuote() {
    try {
        newBtn.disabled = true;  // Disable the button while fetching quote

        // Fetch the quote from the API
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        // Log the full API response for debugging
        console.log("API response:", json);

        // Ensure the data is in the expected structure
        if (json.data && json.data.quote && json.data.author) {
            current.question = json.data.quote;
            current.answer = `– ${json.data.author}`;

            displayQuote(current.question);
            clearAnswer();
        } else {
            throw new Error("Received unexpected data structure from API.");
        }

    } catch (err) {
        console.error(err);
        alert('Failed to fetch quote. Please try again.');
    } finally {
        newBtn.disabled = false;  // Enable button after fetching
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function displayAnswer() {
    const answerText = document.querySelector('#js-answer-text');
    answerText.classList.remove('show');
    void answerText.offsetWidth; // Trigger reflow to restart animation
    answerText.textContent = current.answer;
    answerText.classList.add('show');
}

function clearAnswer() {
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = "";
    answerText.classList.remove('show');
}

// Add event listeners
newBtn.addEventListener('click', getQuote);
answerBtn.addEventListener('click', displayAnswer);

// Auto-load a quote when the page loads
window.addEventListener('load', getQuote);
