//Your face logic
$(document).ready(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    const num1 = parseInt($("#num1").val());
    const num2 = parseInt($("#num2").val());

    //assuming num1=20 and num2=5
    //elements =num1/num2 
    let array=[];
    for(let i=0; i<elements; i++) {
       array.push(i * num2);
    }
    console.log(array);
  });
});

//Businasty logic