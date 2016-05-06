if(Meteor.isServer) {
   Widgets = new Meteor.Collection('widgets', {connection: null});
}

if(Meteor.isClient) {
   Widgets = new Meteor.Collection('widgets');
}
