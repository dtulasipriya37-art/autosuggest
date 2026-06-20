
    //"https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8/")
       var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";

       var searchBar = document.getElementById("search");
       var searchSuggestions = document.getElementById("search-suggestions");

       searchBar.addEventListener("input", function(){
            var query = searchBar.values.trim();
            console.log(query);
            fetchsuggestions(query);
       });

       /*another way to add listener, when function called, get the user typed data, call api,
        put this data as query in api call, make an api call, append all the search suggestions 
        to div in ui*/

        function fetchsuggestions(query) {
            var fullAPI = API_URL + "?q=" + query + "a&weighted=true&algorithm=trie&limit=8/"
            fetch(fullAPI)
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                console.log(data);
                //showSuggestions(data);
            })
            .catch(function(err){
                console.log("Error " + err);
            })
        }

        function showSuggestions(data){
            var values = data.results;
            if(data.count === 0){
                searchSuggestions.innerHTML = "<div>No Matching results found</div>"
            }
            else{
                var htmlString = "";
                for(var i = 0; i < values.length(); i++) {
                    //<div> <span>text</span><span
                    htmlString += "<div><span class = 'suggestion-item'>" + values[i].text + "</span><span class = 'item-weight></div>";
                }
                searchSuggestions.innerHTML = htmlString;

            }
        }
