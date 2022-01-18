let time = 100;
let positions = ["|", "/", "-", "\\", "|"];

for (const position of positions) {
  setTimeout(() => {
    process.stdout.write(`\r${position}   `);
  }, time);
  time += 200
};



