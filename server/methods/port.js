Meteor.methods({checkTwitter: function () {
  this.unblock();
  try {
    var result = HTTP.call("GET", "http://localhost/moodle/mod/lti/portMoodle.php");
   //enviar recibir
   //  var result = HTTP.call("GET", "http://localhost/moodle/mod/lti/3.php",{params: {dato: "gonzaloCalificacionMETEOR"}});
    return result;

  } catch (e) {
    // Got a network error, time-out or HTTP error in the 400 or 500 range.
    return 'fallaste METEOR';
  }
}
});

