// Quotes
const quotes = [
    {
        quote: "A dream is not that which you see while sleeping, it is something that does not let you sleep.",
        author: "― APJ Abdul Kalam"
    },

    {
        quote: "You should not give up and we should not allow the problem to defeat us.",
        author: "― APJ Abdul Kalam"
    },

    {
        quote: "Be yourself; everyone else is already taken.",
        author: "― Oscar Wilde"
    },

    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "― Albert Einstein"
    },

    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "― Bernard M. Baruch"
    },

    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "― Dr. Seuss"
    },

    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "― Mae West"
    },

    {
        quote: "Be the change that you wish to see in the world.",
        author: "― Mahatma Gandhi"
    },

    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "― Robert Frost"
    },

    {
        quote: "No one can make you feel inferior without your consent.",
        author: "― Eleanor Roosevelt"
    },

    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "― Mark Twain"
    },

    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "― Elbert Hubbard"
    },

    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "― Oscar Wilde"
    },

    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "― Winston Churchill"
    },

    {
        quote: "Never bend your head. Always hold it high. Look the world straight in the eye.",
        author: "― Helen Keller"
    },

    {
        quote: "Believe you can and you're halfway there.",
        author: "― Theodore Roosevelt"
    },

    {
        quote: "No matter what you're going through, there's a light at the end of the tunnel.",
        author: "― Demi Lovato"
    },

    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "― Albert Einstein"
    },
]

// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})