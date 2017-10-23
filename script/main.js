

    // function to create container with the grid inside

    function createGrid(x) {
        for (var rows = 0; rows < x; rows++) {
            for (var columns = 0; columns < x; columns++) {
                $("#container").append("<div class='grid'></div>");
            };
        };
        $(".grid").width(480/x);
        $(".grid").height(480/x);
    };

    // function to clear out the grid

    function clearGrid(){
        $(".grid").remove();
    };

    // function prompts for new size and create new grid

    function resizeGrid(){
        var z = prompt("Enter length you would like: ");
        clearGrid();
        createGrid(z);
    };


    function changeColor(theColor){
         $(".grid").mouseover(function() {
             $(this).css("background-color", theColor);
         });
    };


    $(document).ready(function() {
          createGrid(16);
          var gradient=false;

          var theColor ="black";
               changeColor(theColor);

          $(".resize").click(function() {
              resizeGrid();
              var theColor ="black";
                   changeColor(theColor);
          });

          $(".clear").click(function(){
                  clearGrid();
                  createGrid(16);
                  var theColor ="black";
                       changeColor(theColor);
          });

          $(".rainbow").click(function(){
                 $(".grid").mouseover(function() {
                        var randomColor= Math.floor(Math.random()* 16777215).toString(16);
                        $(this).css("background-color", '#' + randomColor);
                  });
          });

          $("#gradient").click(function(){

            var x = document.getElementById("gradient").checked;
            var myOpacity = Number($(this).css('opacity'));

                  if (x === true){
                      $(".grid").mouseover(function() {
                            if ( myOpacity >= 1) {
                                myOpacity = 0.1;
  				                  } else {
  					                   myOpacity = myOpacity + 0.1;
                            }
                            $(this).css("opacity" , myOpacity);

                       });

                     } else {
                       $(".grid").mouseover(function() {
                             var myOpacity = 1;
                             $(this).css("opacity" , myOpacity);

                            });
                          };
                        });

          $(".random").click(function(){
                  var randomColor= Math.floor(Math.random()* 16777215).toString(16);
                  $(".grid").mouseover(function() {
                        $(this).css("background-color", '#' + randomColor);
                  });
          });

          $(".black").click(function(){
            var theColor ="black";
                 changeColor(theColor);
          });

          $(".brown").click(function(){
            var theColor ="#56350A";
                 changeColor(theColor);
          });

          $(".yellow").click(function(){
            var theColor ="#FAE247";
                 changeColor(theColor);
          });

          $(".red").click(function(){
            var theColor ="#B81316";
                 changeColor(theColor);
          });

          $(".orange").click(function(){
            var theColor ="#E36A07";
                 changeColor(theColor);
          });

          $(".green").click(function(){
            var theColor ="#1D7C1C";
                 changeColor(theColor);
          });

          $(".purple").click(function(){
            var theColor ="#5D0C9B";
                 changeColor(theColor);
          });

          $(".blue").click(function(){
            var theColor ="#0C549B";
                 changeColor(theColor);
          });

          $(".erase").click(function(){
            var theColor ="white";
                 changeColor(theColor);
          });
    });
