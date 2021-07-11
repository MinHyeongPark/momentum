const quotes = [
    {
        quote: "Nothing great was ever achieved without enthusiasm.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Whenever there is enthusiasm, there is a creative empowerment that goes far beyond what a mere person is capable of.",
        author: "Eckhart Tolle"
    },
    {
        quote: "You need to let the little things that would ordinarily bore you suddenly thrill you.",
        author: "Andy Warhol"
    },
    {
        quote: "Nothing is so contagious as enthusiasm.",
        author: "Samuel Taylor Coleridge"
    },
    {
        quote: "Enthusiasm is the sparkle in your eyes, the swing in your gait. The grip of your hand, the irresistible surge of will and energy to execute your ideas.",
        author: "Henry Ford"
    },
    {
        quote: "Enthusiasm is a supernatural serenity.",
        author: "Henry David Thoreau"
    },
    {
        quote: "We act though comfort and luxury were the chief requirements of life, when all that we need to make us happy is something to be enthusiastic about.",
        author: "Charles Kingsley"
    },
    {
        quote: "Find something you’re passionate about and keep tremendously interested in it.",
        author: "Julia Child"
    },
    {
        quote: "Catch on fire with enthusiasm and people will come for miles to watch you burn.",
        author: "John Wesley"
    },
    {
        quote: "In the realm of ideas everything depends on enthusiasm… in the real world all rests on perseverance.",
        author: "Johann Wolfgang von Goethe"
    },
    {
        quote: "You will do foolish things, but do them with enthusiasm.",
        author: "Colette"
    },
];



const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;