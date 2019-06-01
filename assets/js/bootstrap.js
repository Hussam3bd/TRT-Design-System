window._ = require('lodash');
window.Popper = require('popper.js').default;

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
    window.Vue = require('vue');
    // require('owl.carousel');
    // window.swal = require('sweetalert2');
} catch (e) {
}

Vue.component(
    'card-component',
    require('./components/CardComponent')
);