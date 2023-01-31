const bestnumgen = require('./index');
const genSuccess = 8 === bestnumgen.gen();
const deprecatedSuccess = 7 === bestnumgen.deprecated()[0];

process.exit(genSuccess && deprecatedSuccess ? 0 : 1);
