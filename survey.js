const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (nickName) => {
  rl.resume();
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.resume();
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.resume;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (meal) => {
        rl.resume;
        rl.question("What's your favourite thing to eat for that meal? " , (food) => {
          rl.resume;
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.resume;
            rl.question('What is your super power? In a few words, tell us what you are amazin at! ', (superPower) => {
              console.log(`${nickName} loves listening to ${music} while ${[activity]}, devouring ${[food]} for ${[meal]}, prefers ${[sport]} over any other sport, and is amazing at ${[superPower]}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

