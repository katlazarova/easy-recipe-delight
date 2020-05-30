module.exports = {
  // Files to watch that do not have a npm script to fire the Browsersync reload
  // event for us.
  files: ['./templates/**/*.*', 'pineapple.theme', '../../../modules/**/*.*'],
  ignore: ['*.map'],
  // Force use of port 3005 as we refer to it in our npm scripts.
  port: 3005,
  // Proxy the local development VM.
  proxy: "http://localhost:7777/",

  serveStatic: [
    {
      route: './',
      dir: './',
    },
  ],
  startPath: '/',
  watchEvents: ['add', 'change', 'unlink', 'addDir', 'unlinkDir'],
  reloadDebounce: 500,
};
