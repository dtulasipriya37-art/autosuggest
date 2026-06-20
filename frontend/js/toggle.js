var users = [
    {
        "name" : "John Mark",
        "gender" : "Male",
        "image" : "/image/john.png"
    },
    {
        "name" : "Jane River",
        "gender" : "Female",
        "image" : "/image/jane.png"
    }
]

var curID = 0;
function toggle(){
    //toggle curID from 0 -> 1 & 1 -> 0
    curID = (curID + 1) % 2

    //toggle the rendered user details
    
    //image

    var user = users[curID];
    document.getElementById(" user-img").src = user.image;
    
    //to do: update the name and gender

    //name
    document.getElementById(" user-name").innerText = user.name;
    //gender
    document.getElementById(" user-gender").innerText = user.gender;


}