$(function(){
    $.ajax({
    	type : 'GET',
        url : "http://127.0.0.1:9010/getAd",
   		beforeSend: function(){
   		},
   		complete: function(){
   		},
   		error: function(){
   		},
   		success: function(data){
   			// 広告表示
   			$("#adArea").append(data);		
   		}
 	});
});