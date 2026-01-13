// --- Math.random version ---
const quotes = [
  "The best way to predict the future is to create it.",
  "Dream big and dare to fail.",
  "Don’t count the days, make the days count.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Happiness depends upon ourselves."
];

document.getElementById("new-quote-local").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-local").innerText = quotes[randomIndex];
});

// --- API Fetch version ---
document.getElementById("new-quote-api").addEventListener("click", getQuote);

async function getQuote() {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        'X-Api-Key': 'WCLPRfFD20HDzwD8XL5qgA==NGxwo9MpkWnAADpS'
      }
    });
    const data = await response.json();
    document.getElementById("quote-api").innerText = data[0].quote;
  } catch (error) {
    document.getElementById("quote-api").innerText = "Oops! Could not fetch a quote.";
  }
}
