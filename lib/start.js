Widgets = new Mongo.Collection('widgets');

if(Meteor.isServer) {
   Meteor.publish("widgets", function(){
	   return Widgets.find();
   });
}

if(Meteor.isClient) {
   Meteor.subscribe("widgets");
}
