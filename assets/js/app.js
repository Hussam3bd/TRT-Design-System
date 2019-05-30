/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// Start Here

var app = new Vue({
    el: '#app',
    data: {
        headline: 'Headline',
        subtitle: 'Subtitle',
        bodyText: 'Body Text',

        phone: '+90 553 032 04 10',
        avatar: 'https://lh3.googleusercontent.com/-iZQ4s0YsF4Q/XCThDYSIp6I/AAAAAAAAACk/kG-_LHdY884yG5_-9XXpOVhqOxIYH1UjwCEwYBhgL/w280-h278-p/IMG_9100.jpg',
        links: {
            facebook: 'https://www.facebook.com/Hussam3bd',
            twitter: 'https://twitter.com/Hussam3bd',
            linkedin: 'https://www.linkedin.com/in/hussam3bd',
            instagram: 'https://www.instagram.com/hussam3bd',
        },
    },
    methods: {
        supertrim(value) {
            this.utmTerm = value.replace(/\s/g, '');
        },
    }
});

