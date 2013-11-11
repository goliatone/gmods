define('header',['jquery'], function($){

	var Header = function(config){
		this.init(config);
	};
	Header.id = 'header';
	Header.prototype.init = function(config){
		this.config = config;
		console.log(this.constructor.id, ' initialized ', config );
		config.el.find('a').each(function(){
			console.log(this.href)
		});
	};
	//This is the module's interface with the loader.
	return {
		id:'header',
		init:function(){
			console.log(this.id);
		},
		factory:function(config){
			return new Header(config);
		}
	};
});