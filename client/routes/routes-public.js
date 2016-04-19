/*
* Routes: Public
* Routes that are visible to all (public) users.
*/

Router.route('signup', {
  path: '/signup',
  template: 'signup',
  onBeforeAction: function(){
    Session.set('currentRoute', 'signup');
    this.next();
  }
});

Router.route('login', {
  path: '/login',
  template: 'login',
  onBeforeAction: function(){
    Session.set('currentRoute', 'login');
    this.next();

    
     Meteor.call('checkTwitter', function(err, response){ 
            if(err){
               Bert.alert(err.messages, 'danger');
               console.log(err.messages);
            }else{
               Bert.alert('leer metodo de datos');
               console.log('IN metodo datos de moodle');              
              // var id=( response.data.id);
               //var llave=(responde.data.llave);
               var email=( response.data.email);
              //var name=( response.data.nombre);
               
              
              //console.log(llave);               
               console.log(email); 
               //console.log(name);         
                   
              var user = Meteor.users.find({"emails.address": email});              
               
               if(user){                 
               // console.log(user);
                console.log("entro al if");                         
                var passwordd = Meteor.users.find({"services.password": user.password});               
                //Accounts.setPassword(Meteor.User.this,email );    
                    Meteor.loginWithPassword(email, function(error){
                      if(error){
                        Bert.alert(error.reason, 'danger');
                        console.log("entro al if de password");
                      } else {
                        Bert.alert('Logged in!', 'success');
                        }
                       });                       
               }else{
                console.log('no user');
               }   
              
          
               
            }
          });
  }
});

Router.route('recover-password', {
  path: '/recover-password',
  template: 'recoverPassword',
  onBeforeAction: function(){
    Session.set('currentRoute', 'recover-password');
    this.next();
  }
});

Router.route('reset-password', {
  path: '/reset-password/:token',
  template: 'resetPassword',
  onBeforeAction: function() {
    Session.set('currentRoute', 'reset-password');
    Session.set('resetPasswordToken', this.params.token);
    this.next();
  }
});
