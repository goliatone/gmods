/*global define:true requirejs:true*/
/* jshint strict: false */
requirejs.config({
    paths: {
        'jquery': '../libs/jquery/jquery',
        'gmods': '../src/gmods'
    }
});

define(['gmods', 'jquery'], function (GMods, $) {
    console.log('Loading');
	var gmods = new GMods();
	gmods.init();
});