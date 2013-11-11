define('sidebar',['jquery'], function($){
	console.log('sidebar ', arguments)
	var Sidebar = function(config){
		this.init(config);
	};
	Sidebar.id = 'sidebar';
	Sidebar.prototype.init = function(config){
		this.config = config;
		console.log(this.constructor.id, ' initialized ', config );
	};

	return {
		id:'sidebar',
		init:function(){
			console.log(this.id);
		},
		factory:function(config){
			return new Sidebar(config);
		}
	};
});