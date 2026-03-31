// JS scripts placed here
const spreadBtn = document.querySelector('.spread');
const stackBtn = document.querySelector('.stack');


$('.stack').click(function() {
  console.log("Stack button clicke", $(this));
  spreadBtn.classList.add("active");
  stackBtn.classList.remove("active");
  $(".carta").each(function(e) {

    setTimeout(function() {
      $(".carta").eq(e).attr("class", "carta");
    }, e * 150)
    
  });
  
});

$('.spread').click(function() {
  stackBtn.classList.add("active");
  spreadBtn.classList.remove("active");
  $(".carta").each(function(e) {

    setTimeout(function() {
      $(".carta").eq(e).attr("class", "carta ani" + e);
    }, e * 150)
    
  });
  
});


