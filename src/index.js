function run() {
  $("#new-quote").click(getNewQuote);
  $("#tweet-quote").click(tweetQuote);
  getNewQuote();
}

function getNewQuote() {
  const quotes = [
    {
      id: 1,
      text: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
      author: "Earl Nightingale",
    },
    {
      id: 2,
      text: "What I'm trying to do is be righteous. And when I say “righteous,” I don't mean God. You know? God- Righteous. I mean just when I wake up, I know I was honest to myself.",
      author: "Patrice O'neal",
    },
    {
      id: 3,
      text: "The chances you take… the people you meet… the people you love...the faith that you have - that's what's going to define your life.",
      author: "Denzel Washington",
    },
    {
      id: 4,
      text: "You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential.",
      author: "David Goggins",
    },
    {
      id: 5,
      text: "You have power over your mind - not outside events. Realize this, and you will find strength.",
      author: "Marcus Aurelius",
    },
    {
      id: 6,
      text: "If you want to be wrong then follow the masses.",
      author: "Socrates",
    },
    {
      id: 7,
      text: "Reality is created by the mind, we can change our reality by changing our mind.",
      author: "Plato",
    },
    {
      id: 8,
      text: "Set your house in perfect order before you criticize the world.",
      author: "Jordan B. Peterson",
    },
    {
      id: 9,
      text: "Insanity: doing the same thing over and over again and expecting different results.",
      author: "Albert Einstein",
    },
    {
      id: 10,
      text: "Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.",
      author: "Bruce Lee",
    },
    {
      id: 11,
      text: "Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.",
      author: "Malcolm X",
    },
    {
      id: 12,
      text: "A lot of people say they want to be great, but they're not willing to make the sacrifices necessary to achieve greatness. They have other concerns, whether important or not, and they spread themselves out. That's totally fine. After all, greatness is not for everybody.",
      author: "Kobe Bryant",
    },
  ];

  const num = Math.round(Math.random() * quotes.length);
  const randomQuote = quotes[num];
  $("#text").html('"' + randomQuote.text + '"');
  $("#author").html(" - " + randomQuote.author);
  $("#tweet-quote").attr(
    "href",
    tweetQuote('"' + randomQuote.text + '" - ' + randomQuote.author)
  );
}

function tweetQuote(str) {
  let convertedStr = str
    .split(" ")
    .join("%20")
    .split("@")
    .join("%40")
    .split("!")
    .join("%21");

  const result = "https://twitter.com/intent/tweet?text=" + convertedStr;

  return result;
}

run();
