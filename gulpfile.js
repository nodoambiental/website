const { parallel } = require("gulp");
const { spawn } = require("child_process");
const chalk = require("chalk");

chalk.level = 3;

async function WatchSASS() {
  const controller = new Promise(() => {
    const command = spawn("sass", ["--source-map","--watch","sass:assets/css"]);

    command.stdout.on('data', function (data) {
      const output = chalk.rgb(178, 218, 101)(`${data.toString()}`);
      const titling = chalk.rgb(170, 152, 169)("stdout | SASS: ");
      console.log(`${titling}${output}`);
    });
    
    command.stderr.on('data', function (data) {
      const output = chalk.rgb(204, 78, 92)(`${data.toString()}`);
      const titling = chalk.rgb(170, 152, 169)("stderr | SASS: ");
      console.log(`${titling}${output}`);
    });
    
    command.on('exit', function (code) {
      const titling = chalk.rgb(170, 152, 169)("exit | SASS: ");
      const output = chalk.rgb(240, 240, 240)("Child process exited with code ")
      let coloredCode = `${chalk.rgb(144, 238, 144)(code.toString())} ${chalk.rgb(170, 152, 169)(":D")}`
      if (code !== 0) {
        coloredCode = chalk.rgb(204, 78, 92)(code.toString())
      }
      console.log(`${titling}${output}${coloredCode}`);
    });

  })

  return controller
}

async function WatchJekyll() { 
  const controller = new Promise(() => {
    const command = spawn("bundle", ["exec", "jekyll", "serve", "--host", "0.0.0.0"]);

    command.stdout.on('data', function (data) {
      const output = chalk.rgb(178, 218, 101)(`${data.toString()}`);
      const titling = chalk.rgb(170, 152, 169)("stdout | Jekyll: ");
      console.log(`${titling}${output}`);
    });
    
    command.stderr.on('data', function (data) {
      const output = chalk.rgb(204, 78, 92)(`${data.toString()}`);
      const titling = chalk.rgb(170, 152, 169)("stderr | Jekyll: ");
      console.log(`${titling}${output}`);
    });
    
    command.on('exit', function (code) {
      const titling = chalk.rgb(170, 152, 169)("exit | Jekyll: ");
      const output = chalk.rgb(240, 240, 240)("Child process exited with code ")
      let coloredCode = `${chalk.rgb(144, 238, 144)(code.toString())} ${chalk.rgb(170, 152, 169)(":D")}`
      if (code !== 0) {
        coloredCode = chalk.rgb(204, 78, 92)(code.toString())
      }
      console.log(`${titling}${output}${coloredCode}`);
    });

  })

  return controller
}

exports.watch = parallel(WatchSASS, WatchJekyll);
