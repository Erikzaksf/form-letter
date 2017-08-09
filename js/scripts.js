$(document).ready(function(){
  $("#formOne").submit(function(event){

    var spouseNameInput = $("input#spouseName").val();
    var firstActivityInput = $("input#firstActivity").val();
    var foodInput = $("input#food").val();



    $(".spouseName").text(spouseNameInput);
    $(".firstActivity").text(firstActivityInput);
    $(".food").text(foodInput);

    $("#letter").show();

    event.preventDefault();
  });
});
