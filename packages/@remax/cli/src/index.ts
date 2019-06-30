import program from 'commander';
import dev from './dev';
import build from './build';

program
  .command('dev')
  .description('start development')
  .action(dev);

program
  .command('build')
  .description('build the project')
  .option('-a, --analyze', 'enable the bundle analyzer')
  .action(build);

program.parse(process.argv);