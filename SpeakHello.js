(function (window) {
  let personGreeter = {};
  let speakWordHello = "Hello";

  personGreeter.speakHello = function (name) {
    console.log(speakWordHello + " " + name);
  }

  window.personGreeter = personGreeter;

})(window);
