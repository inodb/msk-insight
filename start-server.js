const args = [ 'restart' ];
const opts = { stdio: 'inherit', cwd: 'server', shell: true };
require('child_process').spawn('yarn', args, opts);
