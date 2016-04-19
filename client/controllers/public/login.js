/*
* Controller: Login
* Template: /client/views/public/login.html
*/

/*
* Created
*/
var id=0;
var name=null;
Template.login.onCreated(function(){
  // Code to run when template is created goes here.
});

/*
* Rendered
*/

Template.login.onRendered(function(){
  $('#application-login').validate({
    rules: {
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    messages: {
      emailAddress: {
        required: "Please enter your email address to login.",
        email: "Please enter a valid email address."
      },
      password: {
        required: "Please enter your password to login."
      }
    },
    submitHandler: function(){
      // Grab the user's details.
      user = {
        email: $('[name="emailAddress"]').val(),
        password: $('[name="password"]').val()
      }

      // Log the user in.
      Meteor.loginWithPassword(user.email, user.password, function(error){
        if(error){
          Bert.alert(error.reason, 'danger');
        } else {
          Bert.alert('Logged in!', 'success'); /*
          Meteor.call('checkTwitter', '2', function(err, response){
            if(err){
               Bert.alert(err.messages, 'danger');
               console.log(err.messages);
            }else{
               Bert.alert('leer metodo de datos');
               console.log('leyo metodo q recive datos de moodle');
               //console.log("nombre = "+response.data.nombre);
              // console.log("apellido = "+response.data.apellido);              
              /// console.log("nombre = "+response.data.nombre);
              //console.log( response.data.id);
              //console.log( response.data.nombre);
              id=( response.data.id);
              name=( response.data.nombre);
              var email = name + '@admin.com';              
              console.log(id);
               console.log(name);
               var user = Meteor.user.findOne({'email':email});
               
               /*
               if(user){

               }else{

               }
               
            }


          });*/
        }
      }); 
    }
  });
});

/*
* Helpers
*/

Template.login.helpers({
  example: function(){
    // Code to run for helper function.
  }
});

/*
* Events
*/

Template.login.events({
  'submit form': function(e){
    // Prevent form from submitting.
    e.preventDefault();
  }
});
