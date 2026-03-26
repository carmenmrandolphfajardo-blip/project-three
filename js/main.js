// JS scripts placed here
$('.stack').click(function() {
  
  $(".carta").each(function(e) {

    setTimeout(function() {
      $(".carta").eq(e).attr("class", "carta");
    }, e * 150)
    
  });
  
});

$('.spread').click(function() {
  
  $(".carta").each(function(e) {

    setTimeout(function() {
      $(".carta").eq(e).attr("class", "carta ani" + e);
    }, e * 150)
    
  });
  
});
