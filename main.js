// Get references to DOM elements
const moodBtns = document.querySelectorAll('.moodButton');
const fortuneDisplay = document.getElementById('fortune');

// Define an array of Bible verses
const verses = [
    'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16',
    'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. - Proverbs 3:5-6',
    'The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold. - Psalm 18:2',
    'Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours. - Mark 11:24',
    'The Lord is my shepherd, I lack nothing. - Psalm 23:1',
    'For all have sinned and fall short of the glory of God. - Romans 3:23',
    'Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through me. - John 14:6',
    'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. - Philippians 4:6',
    'And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28',
    'I can do all this through him who gives me strength. - Philippians 4:13',
    'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! - 2 Corinthians 5:17',
    'But seek first his kingdom and his righteousness, and all these things will be given to you as well. - Matthew 6:33',
    'And now these three remain: faith, hope and love. But the greatest of these is love. - 1 Corinthians 13:13',
    'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord. - Romans 8:38-39',
    'He heals the brokenhearted and binds up their wounds. - Psalm 147:3',
    'And we urge you, brothers and sisters, warn those who are idle and disruptive, encourage the disheartened, help the weak, be patient with everyone. - 1 Thessalonians 5:14',
    'The Lord is my light and my salvation— whom shall I fear? The Lord is the stronghold of my life— of whom shall I be afraid? - Psalm 27:1',
    'But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me. - 2 Corinthians 12:9',
    'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us. - Romans 5:8',
    'The name of the Lord is a fortified tower; the righteous run to it and are safe. - Proverbs 18:10',      
    'In the beginning God created the heavens and the earth. - Genesis 1:1',
    'The grass withers and the flowers fall, but the word of our God endures forever. - Isaiah 40:8',
    'The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace. - Numbers 6:24-26',
    'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me. - 2 Corinthians 12:9',
    'And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28',
    'I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me. - Galatians 2:20',
    'Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus. - 1 Thessalonians 5:16-18',
    'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God. - Ephesians 2:8',
    'Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me. - John 14:6',
    'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. - Isaiah 41:10',
    'But seek first his kingdom and his righteousness, and all these things will be given to you as well. - Matthew 6:33',
    'The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction. - Proverbs 1:7',
    'Jesus looked at them and said, "With man this is impossible, but with God all things are possible." - Matthew 19:26'
    ];

const quotes = [
    'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16',
    'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. - Proverbs 3:5-6',
    'The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold. - Psalm 18:2',
    'Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours. - Mark 11:24',
    'The Lord is my shepherd, I lack nothing. - Psalm 23:1',
    'For all have sinned and fall short of the glory of God. - Romans 3:23',
    'Jesus answered, “I am the way and the truth and the life. No one comes to the Father except through me. - John 14:6',
    'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. - Philippians 4:6',
    'And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28',
    'I can do all this through him who gives me strength. - Philippians 4:13',
    'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! - 2 Corinthians 5:17',
    'But seek first his kingdom and his righteousness, and all these things will be given to you as well. - Matthew 6:33',
    'And now these three remain: faith, hope and love. But the greatest of these is love. - 1 Corinthians 13:13',
    'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord. - Romans 8:38-39',
    'He heals the brokenhearted and binds up their wounds. - Psalm 147:3',
    'And we urge you, brothers and sisters, warn those who are idle and disruptive, encourage the disheartened, help the weak, be patient with everyone. - 1 Thessalonians 5:14',
    'The Lord is my light and my salvation— whom shall I fear? The Lord is the stronghold of my life— of whom shall I be afraid? - Psalm 27:1',
    'But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me. - 2 Corinthians 12:9',
    'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us. - Romans 5:8',
    'The name of the Lord is a fortified tower; the righteous run to it and are safe. - Proverbs 18:10',      
    'In the beginning God created the heavens and the earth. - Genesis 1:1',
    'The grass withers and the flowers fall, but the word of our God endures forever. - Isaiah 40:8',
    'The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace. - Numbers 6:24-26',
    'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me. - 2 Corinthians 12:9',
    'And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28',
    'I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me. - Galatians 2:20',
    'Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus. - 1 Thessalonians 5:16-18',
    'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God. - Ephesians 2:8',
    'Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me. - John 14:6',
    'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. - Isaiah 41:10',
    'But seek first his kingdom and his righteousness, and all these things will be given to you as well. - Matthew 6:33',
    'The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction. - Proverbs 1:7',
    'Jesus looked at them and said, "With man this is impossible, but with God all things are possible." - Matthew 19:26'
    ];

function getFortune() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    fortuneDisplay.innerHTML = quote;
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
        const newWindow = window.open("", "outputWindow", "width=400,height=300");
        newWindow.document.write(`<p>${message}</p>`);
    });
});
