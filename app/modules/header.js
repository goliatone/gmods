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
			$(this).on('click',function(e){
				e.preventDefault();			
				console.log('SOmething happende!', e, e.currentTarget.pathname);
				$(window).trigger('navigate', [{url:e.currentTarget.pathname.replace('/','')}]);
			});
			
		});
	};
	//This is the module's interface with the loader.
	return {
		id:'header',
		init:function(){
			console.log(this.id);
		},
		factory:function(config){
			//Here we can have logic, do we want to 
			//have more than one instance, or only one
			//per app? Instead of doing a singleton, 
			//we manage this internally.
			return new Header(config);
		}
	};
});