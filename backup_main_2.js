// Get references to DOM elements
const moodBtns = document.querySelectorAll('.moodButton');
const fortuneDisplay = document.getElementById('fortune');

// Define an array of Bible verses
const verses = [
    'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16',
    'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. - Proverbs 3:5-6',
    'The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold. - Psalm 18:2',
    'The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction. - Proverbs 1:7',
    'Jesus looked at them and said, "With man this is impossible, but with God all things are possible." - Matthew 19:26'
];

const quotes = [
    'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16',
    'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. - Proverbs 3:5-6',
    'The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold. - Psalm 18:2',
    'Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours. - Mark 11:24',
    'The Lord is my shepherd, I lack nothing. - Psalm 23:1',
    'The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction. - Proverbs 1:7',
    'Jesus looked at them and said, "With man this is impossible, but with God all things are possible." - Matthew 19:26'
];

function getFortune() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("fortune").innerHTML = quote;
}

document.getElementById("fortuneButton").addEventListener("click", getFortune);

// Define a function to pick a random verse from the array
function pickVerse() {
    const index = Math.floor(Math.random() * verses.length);
    return verses[index];
}

// Set up event listeners
moodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const mood = btn.dataset.mood;
        const verse = pickVerse();
        const message = `I'm feeling ${mood} and this verse speaks to me: ${verse}`;
        const blob = new Blob([message], { type: 'text/html' });
        const anchor = document.createElement('a');
        anchor.download = 'output.html';
        anchor.href = URL.createObjectURL(blob);
        anchor.click();
    });
});
