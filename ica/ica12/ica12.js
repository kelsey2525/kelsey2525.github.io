const newBtn = document.querySelector('#js-new-quote');
const answerBtn = document.querySelector('#js-tweet');

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

let current = {
    question: "",
    answer: ""
};

async function getQuote() {
    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const json = await response.json();

        // Store the current question and answer
        current.question = json.question;
        current.answer = json.answer;

        // Display the question
        displayQuote(current.question);

        // Clear any previously shown answer
        clearAnswer();
    } catch (err) {
        console.error(err);
        alert('Failed to fetch trivia. Please try again.');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function displayAnswer() {
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = current.answer;
}

function clearAnswer() {
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = "";
}

// Add event listeners
newBtn.addEventListener('click', getQuote);
answerBtn.addEventListener('click', displayAnswer);
