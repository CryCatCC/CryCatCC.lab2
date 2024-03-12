(function (window) {
  let personGoodBye = {};
  let speakWordGoodbye = "Good Bye";

  personGoodBye.speakGoodbye = function (name) {
    console.log(speakWordGoodbye + " " + name);
  }

  window.personGoodBye = personGoodBye;
})(window);
