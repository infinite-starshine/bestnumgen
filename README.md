Best Number Generator
=====================

It generates the best numbers, and the best numbers only.
If you can't handle the truth, begone!

Usage
-----

Add the dependency like so:

    "dependencies": {
      "@infinite-starshine/bestnumgen": "github:infinite-starshine/bestnumgen#semver:>=1.1.0"
    },

If you are a complete poser, and don't believe in updates, you can use old versions like this:

    "dependencies": {
      "@infinite-starshine/bestnumgen": "github:infinite-starshine/bestnumgen#semver:1.0.0"
    },

Then write your code:

    const bestnumgen = require('@infinite-starshine/bestnumgen');
    const theBestNumber = bestnumgen.gen();

Adding new versions
-------------------

Follow semantic versioning: https://semver.org/

Let's assume we'll make a version `1.2.0`.

1. Make your changes.
2. Change the version number in `package.json` from to `1.2.0`.
3. Create a tag: `git tag 1.2.0`
4. Push the tag: `git push origin 1.2.0`
5. Tell everyone the good news!

1.1.0
-----

 * Turns out the best number wasn't seven.
 * Introduce `deprecated` function to get numbers that wasn't the best, after all.

1.0.0
-----

 * Introduce `gen` function to generate the best number.
