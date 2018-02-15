// Document Ready Function
$(document).ready(function(){
  // Search btn click event handler
  $("#search_btn").click(function(){
      // Processing text value and crearting url 
      var text = $("#search_bar").val(); 
      var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + text + "&format=json&callback=?"; 
    
      //Ajax Request to wikipedia url 
      $.ajax({
        type: "GET", 
        url:wikiUrl, 
        async:false, 
        dataType: "json", 
        success: function(val){
          headings = val[1];
          description = val[2]; 
          urls = val[3]; 
          $("#wiki_list").empty(); 
          for(var i = 0; i < headings.length; i++){
            
            tag =  "<a href='" + urls[i] + "' target='_blank' >" +  "<li>" + "<h4>" + headings[i] + "</h4>"  
              + "<p>"  + description[i] + "</p>"
              + "</li>" + "</a>"; 
            $("#wiki_list").append(tag); 
          }

          if(urls.length == 0){
          	tag = "<p>No articles found</p>"; 
          	$("#wiki_list").append(tag); 
          }
        }, 
        
        error: function(er){
          alert(er); 
        },
      }); 

  }); 
  

  
}); 