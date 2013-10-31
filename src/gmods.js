/*
 * gmods
 * https://github.com/goliatone/gmods
 *
 * Copyright (c) 2013 goliatone
 * Licensed under the MIT license.
 */
/*global define:true*/
/* jshint strict: false */
define('gmods', ['jquery'], function($) {

    var GMods = function(config){
        console.log('GMods: Constructor!');
    };

    GMods.prototype.init = function(){
        console.log('GMods: Init!');
        return 'This is just a stub!';
    };

    return GMods;
});