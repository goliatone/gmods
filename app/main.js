/*global define:true requirejs:true*/
/* jshint strict: false */
requirejs.config({
    paths: {
        'jquery': '../jquery/jquery',
        'gmods': '../gmods'
    }
});

define(['gmods', 'jquery'], function (GMods, $) {
    console.log('Loading');
	var gmods = new GMods({container:'main', selector:'[data-module]'});
	gmods.init();
});