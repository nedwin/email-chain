Posts = new Mongo.Collection("posts");
Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  content: {
    type: String,
    label: "Content"
  },
  url:{
	  type: String,
	  label:"URL",
	  regEx:SimpleSchema.RegEx.Url,
	  autoform:{type:"url"}
  }
  
}));

Router.route('/signup');
Router.route('/posts');
Router.route('/update');
Router.route('thanks');
Router.route('/login');
Router.route('/', {
	//options for the route
	name: 'home',
	template: 'home'
});

Router.configure({
    // options go here
	layoutTemplate: 'main'
});

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  
  
  Template.posts.helper({
	  'post': function(){
		  return Posts.find();
	  }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
