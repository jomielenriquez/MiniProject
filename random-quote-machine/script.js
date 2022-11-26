// Quote API: https://github.com/lukePeavey/quotable
$(document).ready(function(){
    reloadQuote();
  });
  
  function reloadQuote(){
    $("#text").html(`<div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`);
    $("#author").html("");
    
    $.ajax({
      type:"GET",
      url:"https://api.quotable.io/random",
      dataType:"text",
      contentType:"application/json; charset=utf-8",
      success:function(data){
        console.log(data);
        const received = JSON.parse(data);
        $("#text").html(received["content"]);
        $("#author").html("~ "+received["author"]);
      },
      error:function(textStatus, errorThrown){
        console.log("An error occured");
      }
    });
  }
  function btn_newQuote(){
    reloadQuote()
  }
  
  $("#new-quote").click(function(){
    reloadQuote();
  })