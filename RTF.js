// リアルタイムフィルター

$(function(){
  $('#searchword').keyup(function(){
    search_text = $("#searchword").val();
    $('#list li').each(function(){
      val = $(this).text();
      if (val.indexOf(search_text) >= 0 ) {
        $(this).removeClass("addhidden");
      } else {
        $(this).addClass("addhidden");
      }
    });
  });
});

