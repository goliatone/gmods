define('content',['jquery'], function($){

	var articles = {
		"home": "<p>This is article one, nothing more</p>",
		"about": "<p>This is the content</p>",
		"contact": "<p>This is the 3rd article, so... nothing should be shocking by now!</p>"
	};

	var Content = function(config){
		this.init(config);
	};
	Content.id = 'content';
	Content.prototype.init = function(config){
		this.config = config;
		$(window).on('navigate', (this.update).bind(this));
		console.log(this.constructor.id, ' initialized ', config );
	};

	Content.prototype.update = function(e, data){
		console.log('update ', data.url)
		var content = articles[data.url];
		var article = $('<article></article>').html(content).data('url', data.url);
		console.log(this.config.el.append(article));
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