   function a(){

    //  var setingimages = [
    //  "http://www.fashionwaltz.com/wp-content/uploads/2016/07/1.gif",
    //  "http://www.fashionwaltz.com/wp-content/uploads/2016/07/2.gif",
    //  "http://www.fashionwaltz.com/wp-content/uploads/2016/07/3.gif",
    //  "http://www.fashionwaltz.com/wp-content/uploads/2016/07/4.gif",
    //  "http://www.fashionwaltz.com/wp-content/uploads/2016/07/5.gif",
    //  "http://www.fashionwaltz.com/wp-content/uploads/2016/07/6.gif",
    //  "http://www.fashionwaltz.com/wp-content/uploads/2016/07/7.gif",
    //  "http://www.fashionwaltz.com/wp-content/uploads/2016/07/8.gif",
    //  "http://www.fashionwaltz.com/wp-content/uploads/2016/07/9.gif",
    //  "http://www.fashionwaltz.com/wp-content/uploads/2016/07/10.gif",
    //  "http://www.fashionwaltz.com/wp-content/uploads/2016/07/12.gif",
    //  "http://www.fashionwaltz.com/wp-content/uploads/2016/07/12.gif"
    //  ];//放遊戲圖片位置的陣列

    var protocol = window.location.protocol;
    var host = window.location.host;
    var path = window.location.pathname;
    var fullport =protocol.toString()+"//"+host.toString(); 
     var setingimages = [
     fullport+"/DEMO/data/1.gif",
     fullport+"/DEMO/data/2.gif",
     fullport+"/DEMO/data/3.gif",
     fullport+"/DEMO/data/4.gif",
     fullport+"/DEMO/data/5.gif",
     fullport+"/DEMO/data/6.gif",
     fullport+"/DEMO/data/7.gif",
     fullport+"/DEMO/data/8.gif",
     fullport+"/DEMO/data/9.gif",
     fullport+"/DEMO/data/10.gif",
     fullport+"/DEMO/data/11.gif",
     fullport+"/DEMO/data/12.gif",

    //  fullport+"/data/img0.png",
    //  fullport+"/data/img0.gif",
     ];//放遊戲圖片位置的陣列
     var midgif = protocol.toString()+"//"+host.toString()+"/DEMO/data/mid.gif";


    $("#imageContainer").one("click",
      function(){
        var randimg=0;
        randimg=Math.floor(Math.random()*setingimages.length);
        $("#imageContainer > img")
        .first().fadeOut(
          function(){$(this).remove();}
        );
        
        $("#imageContainer").append(
          $("<img>").attr('src', midgif)
          .fadeIn()
        ).delay(3000)/*中間gif的時間*/.queue(function(next){
          $("#imageContainer > img")
        .first().fadeOut(
          function(){$(this).remove();}
        );
        $("#imageContainer").append(
          $("<img>").attr('src', setingimages[randimg])
          .fadeIn())
        });


      }

    
    );
      
};