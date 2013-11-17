/*
 * gmods
 * https://github.com/goliatone/gmods
 *
 * Copyright (c) 2013 goliatone
 * Licensed under the MIT license.
 */
/* jshint strict: false, plusplus: true */
/*global define: false, require: false, module: false, exports: false */
(function (root, name, deps, factory) {
    "use strict";
    // Node
     if(typeof deps === 'function') { 
        factory = deps;
        deps = [];
    }
        
    if (typeof exports === 'object') {        
        module.exports = factory.apply(root, deps.map(require));
    } else if (typeof define === 'function' && 'amd' in define) {
        //require js, here we assume the file is named as the lower
        //case module name.
        define(name.toLowerCase(), deps, factory);
    } else {
        // Browser
        var d, i = 0, global = root, old = global[name], mod;
        while((d = deps[i]) !== undefined) deps[i++] = root[d];
        global[name] = mod = factory.apply(global, deps);
        //Export no 'conflict module', aliases the module.
        mod.noConflict = function(){
            global[name] = old;
            return mod;
        };
    }

}(this, 'GMods', ['jquery'], function($) {



	var _slice = slice = Array.prototype.slice;

///////////////////////////////////////////////////
// CONSTRUCTOR
///////////////////////////////////////////////////
	
	var options = {
		use:{
			dom:$,
        	loader:require
		},
        selector:'[data-module]',
        loader:{
        	baseUrl:'modules'
        }
    };

    /**
     * GMods constructor
     * 
     * @param  {object} config Configuration object.
     */
    var GMods = function(config){
    	this.config = {};    	
        $.extend(this.config, options, config || {});

        this._modules = {};
        this.initialized = false;
        // this.init();
    };

///////////////////////////////////////////////////
// PUBLIC METHODS
///////////////////////////////////////////////////
	
    GMods.prototype.init = function(){
    	if(this.initialized) return;

    	//Extend prototype with behaviors
    	$.extend(GMods.prototype, this.config.use);

    	this.initialized = true;

    	//We depende on $/zepto. We could/should? write wrapper
    	//to use any engine.
        console.log('GMods: Init!');
        this.collectModules();
        return 'This is just a stub!';
    };

    GMods.prototype.collectModules = function(){
    	var declarations = this.dom(this.config.selector);

    	//Collect each module from the page.
    	var $el, el, moduleId, bean;
    	declarations.each((function(i, item){
    		el = item;
    		$el = this.dom(item);
    		moduleId = $el.data('module');
    		bean = {id:moduleId, dom:item, el:$el};
    		this._modules[bean.id] = bean;		
    		console.log('We have module "%s" with el: %s and $ as %s', moduleId, el, $el);
    	}).bind(this));

    	//load
    	this.loader.config(this.config.loader);
    	this.loader(Object.keys(this._modules), this.onModulesLoaded.bind(this));
    };

    GMods.prototype.onModulesLoaded = function(){
    	//We have loaded all moudles, initialize them.
		var beans = [].slice.call(arguments);
		beans.forEach((this.add).bind(this));
    };

    GMods.prototype.add = function(bean){
    	var id = bean.id;
		var config = this._modules[id];
		var module = bean.factory(config);
		window[id]=bean;
    };

    return GMods;
}));