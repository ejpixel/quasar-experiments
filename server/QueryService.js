Meteor.methods({

	'makeCall' (query) {

		let url = "http://localhost:9090/query/fs/meteor/?q="+query;
		HTTP.get(url, {timeout:30000}, function(error, response) {
			if(response){
				Widgets.remove({});
				Widgets.insert({
					param1: response.content
				});
			}
		});
	},

});
