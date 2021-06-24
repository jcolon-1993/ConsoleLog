// Indicates script is running
console.log("Script is running");
var $form, width, height, area;
$form = $("#calculator");

// When input loses focus.
$("form input[type='text']").on("blur", function()
{
  // Write value to console
  console.log("You entered ", this.value);
});

// When the user clicks submit
$("#calculator").on("submit", function(e)
{
  // Prevent the form from submitting
  e.preventDefault();
  // Indicates button was clicked.
  console.log("You submitted the form");

  // Write Width to console
  width = $("#width").val();
  console.log("Width " + width);

  // Write height to console
  height = $("#height").val();
  console.log("Height " + height);

  // Write area to console
  area = width * height;
  console.log(area);

  $form.append("<p>" + area + "</p>");

});
