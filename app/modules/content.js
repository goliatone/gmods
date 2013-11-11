define('content',['jquery'], function($){

	var Content = function(config){
		this.init(config);
	};
	Content.id = 'content';
	Content.prototype.init = function(config){
		this.config = config;
		console.log(this.constructor.id, ' initialized ', config );
	};

	return {
		id:'content',
		init:function(){
			console.log(this.id);
		},
		factory:function(config){
			return new Content(config);
		}
	};
});