let mix = require('laravel-mix');

mix.setPublicPath('dist')
    .setResourceRoot('/dist/');

mix.js([
    'assets/js/app.js',
], 'dist/js/');

mix.sass('assets/sass/app.scss', 'dist/css');

mix.copyDirectory('assets/images', 'dist/images');