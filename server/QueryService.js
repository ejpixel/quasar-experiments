Meteor.methods({

	'makeCall' (query) {

		let databaseName = 'lightchat';
		let url = "http://52.38.152.235:9090/query/fs/"+databaseName+"/?q="+query;
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
