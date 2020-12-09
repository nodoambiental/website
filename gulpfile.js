const { parallel, watch } = require("gulp");
const { spawn } = require("child_process");
const chalk = require("chalk");
const { stderr, stdout } = require("process");

chalk.level = 3;

const writeOutput = (kind, name, data) => {
  switch (kind) {
    case "output": {
      const output = chalk.rgb(178, 218, 101)(`${data.toString()}`);
      const titling = chalk.rgb(170, 152, 169)(`${name}: `);
      stdout.write(`${titling}${output}`);
      return
    }
    case "error": {
      const output = chalk.rgb(204, 78, 92)(`${data.toString()}`);
      const titling = chalk.rgb(170, 152, 169)(`${name}[error]: `);
      stderr.write(`${titling}${output}`);
      return
    }
    case "exit": {
      const titling = chalk.rgb(170, 152, 169)(`${name}[exited]: `);
      const output = chalk.rgb(240, 240, 240)("Child process exited with code ")
      let coloredCode = `${chalk.rgb(144, 238, 144)(data.toString())} ${chalk.rgb(170, 152, 169)(":D")}`
      if (data !== 0) {
        coloredCode = chalk.rgb(204, 78, 92)(data.toString())
      }
      stdout.write(`${titling}${output}${coloredCode}\n`);
      return
    }
  }
}

const generateOutput = (command, commandName) => {
  command.stdout.on('data', function (data) {
    writeOutput("output", commandName, data);
  });
  
  command.stderr.on('data', function (data) {
    writeOutput("error", commandName, data);
  });
  
  command.on('exit', function (code) {
    writeOutput("exit", commandName, code);
  });
}

async function WatchSASS() {
  const controller = new Promise(function () {
    const command = spawn("sass",
      [
        "--source-map",
        "--watch",
        "sass:assets/css"
      ]
    );
    generateOutput(command, "SASS");
  })
  return controller;
}

async function WatchJekyll() { 
  const controller = new Promise(function () {
    const command = spawn("bundle",
      [
        "exec",
        "jekyll",
        "serve",
        "--host",
        "0.0.0.0"
      ]
    );
    generateOutput(command, "Jekyll");
  })
  return controller;
}

async function ExecStyleLint() { 
  const controller = new Promise(function () {
    const command = spawn("npx",
      [
        "stylelint",
        "--config",
        ".stylelintrc.json",
        "--fix",
        "--syntax",
        "scss",
        "sass/*.scss",
        "sass/partials/**/*.scss"
      ]
    );
    generateOutput(command, "StyleLint");
  });
  return controller;
}

async function WatchStyleLint() {
  watch(
    [
      "/sass/**/*.*",
    ],
    {
      events: [
        "change",
        "add",
        "unlink"
      ],
      ignoreInitial: false,
    },
    // Named this weird way (one being ExecStyleLint and the other StyleLint) so it shows something understandable in stdout
    function StyleLint(done) {
      ExecStyleLint().then(
        // Required to avoid it dying after first execution
        // https://github.com/gulpjs/gulp/issues/1784#issuecomment-360860442
        done()
      );
    }
  )
};

exports["watch"] = parallel(
  WatchSASS,
  WatchJekyll
);

exports["watch+lint"] = parallel(
  WatchSASS,
  WatchJekyll,
  WatchStyleLint
);