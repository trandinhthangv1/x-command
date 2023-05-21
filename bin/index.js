#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');

const program = new Command();

program.name('x-command').description('X-COMMAND').version('1.0.0');
program
  .command('mkdir')
  .description('The mkdir utility creates the directories')
  .argument('<directories...>', 'The name directories')
  .option('-p, --parent', 'Create intermediate directories as required')
  .action(function createDirectories(directories, options) {
    const currentWorkingDir = process.cwd();
    for (const directory of directories) {
      const fullPath = `${currentWorkingDir}/${directory}`;
      fs.mkdirSync(fullPath, { recursive: options.parent ? true : false });
    }
  });

program.parse();
