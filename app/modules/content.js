define('content',['jquery'], function($){

	var articles = {
		'home': '<div class="page-header"><h1>Home</h1></div><p>This is article one, nothing more</p>',
		'about': '<div class="page-header"><h1>About</h1></div><p>This is the content</p>',
		'contact': '<div class="page-header"><h1>Contact</h1></div><p>This is the 3rd article, so... nothing should be shocking by now!</p>'
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
		console.log(this.config.el.html(article));
	};

	/*
	 * Return Module Interface Object.
	 * A Module needs a life cycle.
	 */
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