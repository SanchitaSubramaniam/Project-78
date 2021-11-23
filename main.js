var updatedImages = [
  "Cartoon 8 Year Old Daughter.jpg", "Cartoon 12 Year Old Daughter.jpg", "Cartoon Dad.jpg", "Cartoon Mom.jpg"
];

var updatedNames = [
  "Tanusha Subramaniam", "Sanchita Subramaniam", "Prasad Subramaniam", "Vidya Sekhar"
]
var i = 0;

function update()
{
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
    {
        i = 0;
    }
    
    var updatedImage = updatedImages[i];
    var updatedName = updatedNames[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    i++;
}
