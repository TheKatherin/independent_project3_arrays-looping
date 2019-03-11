$(document).ready(function() {
  $("form#piglatin_main_form").submit(function(event) {
    var input_string = $("#input_text").val();
    console.log(input_string);

    var output_string = [];
    console.log(output_string);

    var words = input_string.split(" ");
    console.log(words);

    var vowels = "aeiou";
    var consonants = "bcdfghjklmnpqrstvwxyz";
    var consonant_substr;
    // if(words != "") {
      console.log("pig latin string not null");

      console.log("pig latin string has " + words.length + " words");

      for (var i = 0; i < words.length; i++) {
        if(vowels.includes(words[i].substring(0,1).toLowerCase())) {
          output_string.push(words[i] + "way");
          console.log("pig latin string has " + words.length + " words");
        }
      } else if(consonants.includes(words[i].substring(0,1).toLowerCase())) {
          while (true) {

          }
          if(words[i].substring(0,1).toLowerCase() === "y") {

          }
          else if(words[i].substring(0,2).toLowerCase() === "qu") {

          }
          else {

          }
        //   alert("Please enter text.");
      }
      $("#output_text").text(output_string.join(" ").toString());

//
//
// #0 foreach words in the sentence do ->
//
// #1  if input[0] == vowel then output = input + "way"
//
// #2  else if input[0] == consonants then output = input[consecutive consonants - end] + input[0 - consecutive consonants] + "ay"
//
// #3  else if input[0-1] == (qu) or input[0 - consonants].contains(qu) then output = input[consecutive consonants - end] + input[0 - qu] + "ay"
//
// #4 else if input[0] == y then output = input[consecutive consonants - end] + input[0 - consecutive consonants] + "ay"

    console.log(output_string.toString());

    $("input#output_text").text(output_string.toString());
    event.preventDefault();
  });
});

function getConsonatSubstr(string) {

  returt string;
}
