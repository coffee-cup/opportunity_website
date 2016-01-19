var liveServer = require("live-server");

var params = {
  port: 8181,
  host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0.
  root: "public/", // Set root directory that's being server. Defaults to cwd.
  open: false, // When false, it won't load your browser by default.
  ignore: 'assets/sass', // comma-separated string for paths to ignore
  file: "404.html", // When set, serve this file for every 404 (useful for single-page applications)
  wait: 0 // Waits for all changes, before reloading. Defaults to 0 sec.
};
liveServer.start(params);
