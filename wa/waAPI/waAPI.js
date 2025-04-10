const newBtn = document.querySelector('#js-new-quote');
const answerBtn = document.querySelector('#js-tweet');

const endpoint = "https://boardgamegeek.com/xmlapi2/hot?type=boardgame";

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

        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "application/xml");

        const items = xml.querySelectorAll("item");
        const randomIndex = Math.floor(Math.random() * items.length);
        const item = items[randomIndex];

        const name = item.querySelector("name").getAttribute("value");
        const year = item.querySelector("yearpublished")?.getAttribute("value") || "an unknown year";

        current.question = `Have you heard of the game "${name}"?`;
        current.answer = `It was published in ${year}.`;

        displayQuote(current.question);
        clearAnswer();

    } catch (err) {
        console.error(err);
        alert('Failed to fetch board game info. Please try again.');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.classList.remove('fade-in'); // Reset animation
    void quoteText.offsetWidth;            // Trigger reflow
    quoteText.textContent = quote;
    quoteText.classList.add('fade-in');    // Trigger fade-in
}

function displayAnswer() {
    const answerText = document.querySelector('#js-answer-text');
    answerText.classList.remove('fade-in'); // Reset animation
    void answerText.offsetWidth;            // Trigger reflow
    answerText.textContent = current.answer;
    answerText.classList.add('fade-in');    // Trigger fade-in
}

function clearAnswer() {
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = "";
    answerText.classList.remove('fade-in');
}

newBtn.addEventListener('click', getQuote);
answerBtn.addEventListener('click', displayAnswer);

