/*global define:true requirejs:true*/
/* jshint strict: false */
requirejs.config({
    paths: {
        // 'jquery':['//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js', '../jquery/jquery'],
        'jquery':'../jquery/jquery',
        'gmods': '../gmods',
        // 'bootstrap': ['//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.2/js/bootstrap.min.js', '../bootstrap/dist/js/bootstrap']
        'bootstrap': '../bootstrap/dist/js/bootstrap'
    },
    shim:{
    	'bootstrap':{
    		deps:['jquery']
    	}
    }
});

define(['gmods', 'jquery', 'bootstrap'], function (GMods, $) {
    console.log('Loading');
	var gmods = new GMods({container:'main', selector:'[data-module]'});
	gmods.init();
});