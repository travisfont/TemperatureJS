
// Find the next higest zindex

function getHighestZIndex()
{
     var highest_index = 0;
     var dom_div = [];
         dom_div = document.getElementsByTagName("DIV");
         
     for (var i = 0; i < dom_div.length; i++)
     {
          var z_index = dom_div[i].style.zIndex;
          
          if (z_index > highest_index)
          {
               highestZ = z_index;
          }
     }
     
     return highest_index;
}

alert(getHighestZIndex());