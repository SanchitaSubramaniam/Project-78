var updatedImage = [
  "Cartoon 8 Year Old Daughter.jpg", "Cartoon 12 Year Old Daughter.jpg", "Cartoon Dad.jpg", "Cartoon Mom.jpg"
];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
      var updatedImage = {images};
      var updatedName = {names};
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
