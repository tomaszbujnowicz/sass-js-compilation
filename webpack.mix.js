const mix = require('laravel-mix');

mix
  .disableSuccessNotifications()
  .js('./src/js/app.js', './dist/js/')
  .sass('./src/css/style.scss', './dist/css/style.css')
  .options({ processCssUrls: false })

if (mix.inProduction()) {
  mix
    .options({
      cssNano: {
        // discardComments: {removeAll: true},
      }
    });
}