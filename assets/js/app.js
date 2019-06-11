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
        card: {
            options: {
                header: true,
                footer: true,
                thumbnail: true,
                body: true,
            },
            type: 'news',
            style: 'boxed',
            headline: 'Headline',
            subtitle: 'Subtitle',
            bodyText: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            thumbnail: 'https://cdni0.trtworld.com/w960/h540/q75/57159_USAManhattanhelicopter_1560205472646.jpg',
            episodes: '23 Bölüm',
            duration: '45 dk',
            CTAText: 'Card Link',
            CTAURL: '#!',
        }
    },
    methods: {
        supertrim(value) {
            this.utmTerm = value.replace(/\s/g, '');
        },
    }
});

