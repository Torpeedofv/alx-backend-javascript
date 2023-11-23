const fs = require('fs');
function countStudents(path) {
	try {
		const lines = fs.readFileSync(path, 'utf8').split(/\r?\n/);

