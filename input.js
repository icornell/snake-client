let connection;

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if(key === "j") {
    connection.write("Say: I'm a Snek!");
  }
  if(key === "k") {
    connection.write("Say: Bond, Snek Bond!");
  }
  if(key === "l") {
    connection.write("Say: Sssssssssss!");
  }
  if(key === "i") {
    connection.write("Say: My Name is Sir Hiss!");
  }
};

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
