// app/win/main.js

// For some reason, brunch picks up the path-browserify that is part of
// node-browser-modules rather than the one that is directly installed.
// This alias takes care of that.  It is in this file because require.alias
// is only defined at the top level (as far as I know).
require.alias("node-browser-modules/node_modules/path-browserify/index.js", "path");

let Modules = require('win/deps');

$('body').text("Hello, world!");

// vi: set ts=4 sts=4 sw=4 et ai fo-=ro foldmethod=marker: //