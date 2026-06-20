function randomUser() {
    fetch("https://randomuser.me/api/")
        .then(function(res) {
             return res.json();
        })
        .then(function(data) {
            var user = data.results[0];
            var fullname = user.name.title + " " + user.name.first + " " + user.name.last;
            document.getElementById(" user-img").src=user.picture.large;
    
    //to do: update the name and gender

    //name
    document.getElementById(" user-name").innerText=fullName;
    //gender
    document.getElementById(" user-gender").innerText=user.gender;
        })
        .catch(function(err) {
            console.log("Error: " + err);
        })
    }