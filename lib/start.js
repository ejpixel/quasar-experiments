if(Meteor.isServer) {
   Widgets = new Meteor.Collection('widgets', {connection: null});

   Meteor.publish("widgets", function(){
	   return Widgets.find();
   });
}

if(Meteor.isClient) {
   Widgets = new Meteor.Collection('widgets');

   Meteor.subscribe("widgets");
}
