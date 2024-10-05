const github = require('@actions/github');
const core = require('@actions/core');

try {
	const nameToGreet = core.getInput('who-to-greet');
	console.log(`Hello ${nameToGreet}`);
	const time = new Date().toTimeString();
	core.setOutput('time', time);

	const payload = JSON.stringify(github.context.payload, undefined, 2);
	console.log(`Event payload is ${payload}`);
} catch (error) {
	core.setFailed(error.message);
}
