/*
General Idea of the code
- Get messages that perform well together / multiple messages to make it sound cool.
- Randomize the messages and return it in an array.
- 3 pieces of messages.
- What to differently?
*/

const prompt = require('prompt-sync')({sigint: true});

const responses = [
    'Great!',
    'Coolio!',
    'Alrighty!',
    'Awesome!'
];

const puns = [
    'What did one blade of grass say to another about the lack of rain?', 
    'What lies at the bottom of the ocean and twitches?', 
    "Why shouldn't you visit an expensive wig shop?",
    "How much money does a pirate pay for corn?",
    "Why was King Arthur's army too tired to fight?"
];
const throwbackAnswers = [
    'I dont know, what?', 
    'I dont know', 
    'What?', 
    'Haha funny, what is it?', 
    'What is it?', 
    'Hmm?', 
    'Why?'
];
const punchLine = [
    "I guess we'll just have to make dew.", 
    'A nervous wreck.', 
    "It's too high a price 'toupee.'", 
    'A buccaneer.',
    'It had too many sleepless knights.'
];

const disappointments = [
    'Aww...',
    'Why not?',
    "It'll be funny come on",
    'Ok I guess...'
];

const rand = [Math.floor(Math.random() * puns.length), Math.floor(Math.random() * throwbackAnswers.length)];
rand.push(rand[0]);

const generateNumber = (max) => Math.floor(Math.random * max);

const getRandomElement = (array) => array[generateNumber(array.length)];

const start = () => 
{
    let repeat = 0;
    while (repeat < 10) 
    {
        const hearJoke = prompt('Do you want to hear a joke?');
        switch (hearJoke) 
        {
            case 'yes':
            case 'y':
                console.log(`${getRandomElement(responses)}\n${getRandomElement(puns)}\n${getRandomElement(throwbackAnswers)}\n${getRandomElement(punchLine)}`);
                break;
            case 'no':
            case 'n':
                console.log(getRandomElement(disappointments));
                break;
            default:
                console.log(`${hearJoke} isn't a possible input. Acceptable inputs are: yes/y and no/n.`);
                break;
        }
    }
}