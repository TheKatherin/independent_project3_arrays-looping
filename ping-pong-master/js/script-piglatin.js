$(document).ready(function() {
  $("form#piglatin_main_form").submit(function(event) {
    var input_string = $("#input_text").val();
    var output_string = "";

    console.log(input_string);

    var words = input_string.split(" ");
    console.log(words);

    var vowels = "aeiou";
    var consonants = "bcdfghjklmnpqrstvwxyz";

    console.log("pig latin string has " + words.length + " words");

    for (var i = 0; i < words.length; i++) {
      var current_word = words[i];
      var length = current_word.length;
      console.log(length);

      if(vowels.includes(current_word.substr(0,1).toLowerCase())) {
        output_string += current_word + "way" + " ";
        console.log("pig latin string has " + words.length + " words");
      } else {
          var x = 0;
          var y = 1;
          while (consonants.includes(current_word.substr(x,y).toLowerCase()) || current_word.substr(x,2).toLowerCase().includes("qu")) {
            x++;
          }
          if(current_word.substr(0,1).toLowerCase() === "y") {
             output_string += current_word.substr(x, length) + current_word.substr(0, x) + "ay" + " ";
          }
          else if(current_word.substr(0, x).toLowerCase().includes("qu")) {
            output_string += current_word.substr(x, length) + current_word.substr(0, x) + "ay" + " ";
          }
          else if(consonants.includes(current_word.substr(0,1).toLowerCase())) {
            output_string += current_word.substr(x, length) + current_word.substr(0, x) + "ay" + " ";
          }
          else {
            alert("Not a word!");
          }
        }
      }
      console.log(output_string);
      $("#output_text").text(output_string);
      event.preventDefault();
    });
  });
