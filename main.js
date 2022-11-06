var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [https://www.google.com/url?sa=i&url=https%3A%2F%2Feasydrawingguides.com%2Fhow-to-draw-a-cartoon-dad%2F&psig=AOvVaw3Iu7q73S1b93uXf4g1SIqy&ust=1667789420771000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLjmkujGmPsCFQAAAAAdAAAAABAD, https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F711287334879610503%2F&psig=AOvVaw1zYDiJguvfS5NzKxioBekh&ust=1667789720037000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKjW3IDHmPsCFQAAAAAdAAAAABAE, https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fstock-photo%2Fsisters_sister.html&psig=AOvVaw2Xu7EGpbnyIzJQH32tDeEp&ust=1667789847414000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIDmr73HmPsCFQAAAAAdAAAAABAE, https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fclipart-vector%2Fcartoon_sister.html%3Fcko%3D1%26sti%3Dmxq1kcxhu8p9f0avj8%257C&psig=AOvVaw2Xu7EGpbnyIzJQH32tDeEp&ust=1667789847414000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIDmr73HmPsCFQAAAAAdAAAAABAV];
  
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [Dad,Mom,Sister,Me] ;
  
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
