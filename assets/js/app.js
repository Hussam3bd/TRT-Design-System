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
            type: 'news',
            style: 'boxed',
            headline: 'Headline',
            subtitle: 'Subtitle',
            bodyText: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            thumbnail: 'https://cdni0.trtworld.com/w480/h270/q75/56377_AUSSebastianKurz_1558969435854.JPG',
            episodes: '23 Bölüm',
            duration: '45 dk',
            CTAText: '',
            CTAURL: '',
        }
    },
    methods: {
        supertrim(value) {
            this.utmTerm = value.replace(/\s/g, '');
        },
    }
});

