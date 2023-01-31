const bestnumgen = require('./index');
const success = 7 === bestnumgen.gen();
process.exit(success ? 0 : 1);
