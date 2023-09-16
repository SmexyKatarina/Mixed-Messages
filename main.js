/*
General Idea of the code
- Get messages that perform well together / multiple messages to make it sound cool.
- Randomize the messages and return it in an array.
- 3 pieces of messages.
- What to differently?
*/

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

const rand = [Math.floor(Math.random() * puns.length), Math.floor(Math.random() * throwbackAnswers.length)];
rand.push(rand[0]);

console.log(`${puns[rand[0]]}\n${throwbackAnswers[rand[1]]}\n${punchLine[rand[0]]}`);