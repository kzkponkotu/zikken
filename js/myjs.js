      var button_hover_color = '#D78911';
      var slide1_color = "#002A4A";
      var slide2_color = "#17607D";
      var layzr = new Layzr();
      var smafo = false;
      $(document).foundation();
        var slide_intro_text = [];
        var slide_title_text = [];      
        var slide_info_text = [];
        for(var i=0; i<document.getElementsByClassName("slide_intro").length; i++){
        slide_intro_text[i] = document.getElementsByClassName("slide_intro")[i].innerHTML;
        }
        for(var i=0; i<document.getElementsByClassName("slide_title").length; i++){
        slide_title_text[i] = document.getElementsByClassName("slide_title")[i].children[0].innerHTML;
        }
        for(var i=0; i<document.getElementsByClassName("slide_info").length; i++){
          slide_info_text[i] = document.getElementsByClassName("slide_info")[i].innerHTML;
        }
        $(document).on("click",".button-group", function () {
          if(document.getElementById("matomeru").style.display != 'none'){
            document.getElementById("responsive-menu").style.display = 'none';
          }
        });
        $(window).scroll(function () {
          if(document.getElementById("matomeru").style.display != 'none'){          
            document.getElementById("responsive-menu").style.display = 'none';
          }
        });
        $(document).on("click",".menu-icon", function () {
          smafo = true;
        });
        $(window).on('load',function(){
          document.getElementsByClassName("stacked-for-small")[0].children[0].style.backgroundColor = button_hover_color;
          for(var i=0; i<document.getElementsByClassName("halfslide").length; i++){            
            document.getElementsByClassName("halfslide")[i].style.innerHTML = "in";
          }          
        });
        $(window).on('load resize', function(){          
          var count = 0;
          if(window.innerWidth<1024){
            for(var i=0; i<document.getElementsByClassName("halfslide").length; i++){              
              document.getElementsByClassName("halfslide")[i].style.width = "100%";                                 
              if(document.getElementsByClassName("halfslide")[i].style.display != "none"){
                if(count%2 == 0){
                  document.getElementsByClassName("slide_title")[i].style.backgroundColor = slide1_color;
                  document.getElementsByClassName("slide_body")[i].style.backgroundColor = slide1_color;
                }else{
                  document.getElementsByClassName("slide_title")[i].style.backgroundColor = slide2_color;
                  document.getElementsByClassName("slide_body")[i].style.backgroundColor = slide2_color;
                }
                count++;
              }
            }
          }else{
            for(var i=0; i<document.getElementsByClassName("halfslide").length; i++){
              document.getElementsByClassName("halfslide")[i].style.width = "50%";  
              if(document.getElementsByClassName("halfslide")[i].style.display != "none"){
                if(count%4 == 0 || (count-3)%4 == 0){
                  document.getElementsByClassName("slide_title")[i].style.backgroundColor = slide1_color;
                  document.getElementsByClassName("slide_body")[i].style.backgroundColor = slide1_color;
                }else{
                  document.getElementsByClassName("slide_title")[i].style.backgroundColor = slide2_color;
                  document.getElementsByClassName("slide_body")[i].style.backgroundColor = slide2_color;
                }
                count++;                
              }              
            }            
          }
          document.getElementById("top_title").style.top = ((window.innerHeight - document.getElementById("top_title").clientHeight)*0.7)*0.4 + "px";          
          document.getElementById("top_slide").style.top = document.getElementsByClassName("top-bar")[0].clientHeight + "px";
          document.getElementById("top_slide").style.height = (window.innerHeight - document.getElementsByClassName("top-bar")[0].clientHeight)*0.7 + "px";
          document.getElementById("top_slide_blend").style.height = (window.innerHeight - document.getElementsByClassName("top-bar")[0].clientHeight)*0.7 + "px";        
          for(var i=0; i<document.getElementsByClassName("slide").length; i++){
            document.getElementsByClassName("slide")[i].style.top = document.getElementsByClassName("top-bar")[0].clientHeight + "px";
            document.getElementsByClassName("slide")[i].style.height = (window.innerHeight - document.getElementsByClassName("top-bar")[0].clientHeight) + "px";
          }
          for(var i=0; i<document.getElementsByClassName("halfslide").length; i++){
            document.getElementsByClassName("halfslide")[i].style.top = document.getElementsByClassName("top-bar")[0].offsetHeight + "px";
            document.getElementsByClassName("halfslide")[i].style.height = (window.innerHeight - document.getElementsByClassName("top-bar")[0].offsetHeight)*0.7 + "px";
          }
        });
        var category_name = ['fablication','modeling','remake','game','photo'];

        function category_filter(num){
          for(var i=0; i<document.getElementsByClassName("stacked-for-small")[0].children.length; i++){
            document.getElementsByClassName("stacked-for-small")[0].children[i].style.backgroundColor = 'rgba(0,0,0,0)';
          }
          document.getElementsByClassName("stacked-for-small")[0].children[num+1].style.backgroundColor = button_hover_color;
          for(var i=0; i<category_name.length; i++){
            if(i==num || num==-1){
              for(var j=0; j<document.getElementsByClassName(category_name[i]).length; j++){
                document.getElementsByClassName(category_name[i])[j].style.innerHTML = "in";                
                $(document.getElementsByClassName(category_name[i])[j]).fadeOut(100);
                $(document.getElementsByClassName(category_name[i])[j]).delay(100).fadeIn(100);
              }
            }else{
              for(var j=0; j<document.getElementsByClassName(category_name[i]).length; j++){
                document.getElementsByClassName(category_name[i])[j].style.innerHTML = "out";
                $(document.getElementsByClassName(category_name[i])[j]).fadeOut(100);
              }
            }
          }
          var count = 0;
          if(window.innerWidth<1024){
            for(var i=0; i<document.getElementsByClassName("halfslide").length; i++){
              if(document.getElementsByClassName("halfslide")[i].style.innerHTML == "in"){
                if(count%2 == 0){
                  document.getElementsByClassName("slide_title")[i].style.backgroundColor = slide1_color;
                  document.getElementsByClassName("slide_body")[i].style.backgroundColor = slide1_color;
                }else{
                  document.getElementsByClassName("slide_title")[i].style.backgroundColor = slide2_color;
                  document.getElementsByClassName("slide_body")[i].style.backgroundColor = slide2_color;
                }
                count++;
              }
            }
          }else{
            for(var i=0; i<document.getElementsByClassName("halfslide").length; i++){
              if(document.getElementsByClassName("halfslide")[i].style.innerHTML == "in"){              
                if(count%4 == 0 || (count-3)%4 == 0){
                  document.getElementsByClassName("slide_title")[i].style.backgroundColor = slide1_color;
                  document.getElementsByClassName("slide_body")[i].style.backgroundColor = slide1_color;
                }else{
                  document.getElementsByClassName("slide_title")[i].style.backgroundColor = slide2_color;
                  document.getElementsByClassName("slide_body")[i].style.backgroundColor = slide2_color;
                }
                count++;                
              }              
            }            
          }                    
        }