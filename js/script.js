var quotes = [
  '"The greatest discovery of all time is that a person can change his future by merely changing his attitude." -Oprah Winfrey',
  '"The only thing worse than being blind is having sight but no vision." -Hellen Keller',
  '"Dont count the things you do, do the things that count."-Zig Ziglar',
  '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler',
  '“First, solve the problem. Then, write the code.” – John Johnson',
  '“Experience is the name everyone gives to their mistakes.” – Oscar Wilde',
  '“ In order to be irreplaceable, one must always be different” – Coco Chanel',
  '“Java is to JavaScript what car is to Carpet.” – Chris Heilmann',
  '“Knowledge is power.” – Francis Bacon',
  '“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon',
  '“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” – Antoine de Saint-Exupery',
  '“Ruby is rubbish! PHP is phpantastic!” – Nikita Popov',
  '“Code is like humor. When you have to explain it, it’s bad.” – Cory House',
  '“Fix the cause, not the symptom.” – Steve Maguire',
  '“Optimism is an occupational hazard of programming: feedback is the treatment. “ Kent Beck',
  '“When to use iterative development? You should use iterative development only on projects that you want to succeed.” – Martin Fowler',
  '“Simplicity is the soul of efficiency.” – Austin Freeman',
  '“Before software can be reusable it first has to be usable.” – Ralph Johnson',
  '“Make it work, make it right, make it fast.” – Kent Beck',
  '"The best thing about a boolean is even if you are wrong, you are only off by a bit." - Anonymous',
  '"Without requirements or design, programming is the art of adding bugs to an empty text file." - Louis Srygley',
  '"Before software can be reusable it first has to be usable."  -Ralph Johnson)',
  '"The best method for accelerating a computer is the one that boosts it by 9.8 m/s2." - Anonymous',
  '"I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing." - Oktal',
  '"If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization." - Gerald Weinberg',
  '"There are two ways to write error-free programs; only the third one works."  -Alan J. Perlis)',
  '"Ready, fire, aim: the fast approach to software development. Ready, aim, aim, aim, aim: the slow approach to software development." - Anonymous',
  '"It’s not a bug – it’s an undocumented feature." - Anonymous',
  '"One man’s crappy software is another man’s full-time job." - Jessica Gaston',
  '"A good programmer is someone who always looks both ways before crossing a one-way street."  - Doug Linder',
  '"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."  - Martin Golding',
  '"Programming is like sex. One mistake and you have to support it for the rest of your life."  - Michael Sinz',
  '"Deleted code is debugged code."  - Jeff Sickel',
  '"Walking on water and developing software from a specification are easy if both are frozen."  - Edward V Berard',
  '"If debugging is the process of removing software bugs, then programming must be the process of putting them in."  - Edsger Dijkstra',
  '"Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work."  - Anonymous',
  '"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning."  - Rick Cook',
  '"It’s a curious thing about our industry: not only do we not learn from our mistakes, but we also don’t learn from our successes."  - Keith Braithwaite',
  '"There are only two kinds of programming languages: those people always bitch about and those nobody uses."  - Bjarne Stroustrup',
  '"In order to understand recursion, one must first understand recursion."  - Anonymous',
  '"The cheapest, fastest, and most reliable components are those that aren’t there."  - Gordon Bell',
  '"The best performance improvement is the transition from the nonworking state to the working state."  - J. Osterhout',
  '"The trouble with programmers is that you can never tell what a programmer is doing until it’s too late."  - Seymour Cray',
  '"Don’t worry if it doesn’t work right. If everything did, you’d be out of a job."  - Mosher’s Law of Software Engineering',
  '" Wise men say only fools fall in love, but i cant help falling in love with you"',
  '" Love is a really complex thing, it hurts, heals, dont know what to do with it"',
  '"Programming is Easy if you have the will to learn it" - Abdul Raouf',
  '"Change is the end result of all true learning" - Leo ',
  '"Talk is cheap .Show me the code" -Linus',
  '"Programs must be written for people to read, and only incidentally for machines to execute." - Harold Abelson',
  '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
  '"I am not a great programmer.I am just a good programmer with great habits." - Kent Back',
  '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
  '"Difficult struggle in mountaineering is our rise above himself, is the voice of freedom." - Wojciech Kurtyka',
  '"First, solve the problem. Then, write the code." – John Johnson',
  '"Good design adds value faster than it adds cost." - Joel Spolsky',
  '"All problems in computer science can be solved by another level of indirection." - David Wheeler',
  '“ Get busy living or get busy dying.” — Stephen King',
  '“Turn your wounds into wisdom.” — Oprah Winfrey',
  '"Care about what other people think and you will always be their prisoner" - Anonymous',
  '"The computer was born to solve problems that did not exist before." - Bill Gates',
  '“All men have limits. They learn what they are and learn not to exceed them. I ignore mine.” – Batman',
  '“There is a difference between you and me. We both looked into the abyss, but when it looked back at us… you blinked.” – Batman',
  '“I have one power. I never give up.” – Batman',
  '“If you can’t explain it simply, you don’t understand it well enough.” - Albert Einstein',
  '“The task is not to see what has never been seen before, but to think what has never been thought before about what you see everyday.” -Erwin Schrodinger',
  '“However difficult life may seem, there is always something you can do and succeed at.” -Stephen Hawking',
  '“If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.” -Nikola Tesla ',
  '“You cannot change your future, but you can change your habits, and surely your habits will change your future.” -APJ Abdul Kalam',
  '“Dont be pushed around by the fears in your mind. Be led by the dreams in your heart.” -Roy T. Bennett',
  '“It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.” -Roy T. Bennett',
  '“Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.” -Zig Ziglar',
  '“The man who moves a mountain begins by carrying away small stones.” -Confucius',
  '"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better." -Samuel Beckett',
  ' “If you do what you’ve always done, you’ll get what you’ve always gotten.”. – Tony Robbins',
  ' “If you don’t build your dream, someone else will hire you to help them build theirs.” – Dhirubhai Ambani',
  '“You can’t outwit fate by standing on the sidelines placing little side bets about the outcome of life. Either you wade in and risk everything you have to play the game or you don’t play at all. And if you don’t play you can’t win.” – Judith McNaught',
  '“Saying it is impossible to live without failing at something is impossible. Unless you live so cautiously that you might as well not have lived at all, in which case you have failed by default.” – J.K. Rowling',
  '“Screw it, let’s do it!” – Richard Branson',
  '"Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our Light, not our Darkness, that most frightens us." - Marianne Williamson',
  '"The only journey is the one within."- Rainer Maria Rilke',
  '"It is only with the heart that one can see rightly. What is essential is invisible to the eye.” - Antoine de Saint-Exupéry',
  '"Real eyes, realize, real lies" - Tupac Shakur',
  '"Nobody gives you a chance; you gotta take chances!" - Lil Wayne',
  '"You can\'t heal what you don\'t reveal." - Jay-Z',
  '"The way I see it, if you want the rainbow, you gotta put up with the rain."- Dolly Parton',
  '"Find out who you are and do it on purpose."-Dolly Parton',
  '"“Don’t ever play with someone’s feelings, you could win the game but you could lose that person forever.”- Frank Ocean',
  '"We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty."- Maya Angelou',
  '"“I am no longer accepting the things I cannot change. I am changing the things I cannot accept.”- Angela Davis',
  '"“But life is just a party, and parties weren\'t meant to last.” - Prince',
  '"Life is not a rehearsal; you gotta live it out."- Janelle Monae',
  '“If somebody offers you an amazing opportunity but you are not sure you can do it, say yes – then learn how to do it later!”-Richard Branson',
  '“Life is a helluva lot more fun if you say yes rather than no”-Richard Branson',
  '"Death is unfair, It comes to those who doesn\'t need it. But not to those who asks for it."-Kaneki',
  '"Code is like humor. When you have to explain it, it’s bad." – Cory House',
  '"Learning without thinking is useless, but thinking without learning is very dangerous." – Soekarno'
];

function getQuote() {
  var randNum = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerHTML = quotes[randNum];
}
