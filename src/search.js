// JavaScript Document

// Search Arguments
String.prototype.replaceChars = function(character, replacement){
    var str = this;
    var a;
    var b;
    for(var i=0; i < str.length; i++){
        if(str.charAt(i) == character){
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            str = a + b;
        }
    }
    return str;
}

function search(query){
    switch(query.substr(0, 2)){
        case "~i":
            query = query.substr(3);
            window.location = "https://www.google.com/search?tbm=isch&q=" +
                query.replaceChars(" ", "%20");
            break;

        case "~y":
            query = query.substr(3);
            window.location =
                "https://www.youtube.com/results?search_query=" +
                query.replaceChars(" ", "%20");
            break;

		case "~w":
			query = query.substr(3);
			window.location =
				"https://en.wikipedia.org/w/index.php?search=" +
				query.replaceChars(" ", "%20");
			break;

		case "~u":
			query=query.substr(3);
			window.location =
				"http://" +
				query.replaceChars(" ", "%20");
            break;

		// 4chan Search
		// Typing "~4" followed by a thread, eg; (wg, g, pol) and "#" enters the catalog for that thread.
		// Typing "~4" followed by a thread and a query, eg; (wg/comfy) enters the catalog for that thread with the searched query. Note: (queries can only be one word)
		case "~4":
			query=query.substr(3);
			window.location =
				"https://boards.4chan.org/" +
				query.replaceChars("#", "/catalog").replace(" ", "/");
			//	query.replaceChars(" ", "%20").replace("#", "/catalog");
			break;

		// Reddit Search
		case "~r":
			query=query.substr(3);
			window.location =
				"https://www.reddit.com/r/" +
				query.replaceChars(" ", "/search?q=").replace("07", "2007scape").replace("up", "unixporn");
			break;

      // DuckDuckGo
  		case "~d":
  			query=query.substr(3);
  			window.location =
  				"https://duckduckgo.com/?q=" +
  				query.replaceChars(" ", "+");
  			break;

        default:
            window.location="https://www.google.com.au/search?q=" +
                query.replaceChars(" ", "+");
    }
}

	window.onload = function(){
    searchinput = document.getElementById("search");
    if(!!searchinput){
        searchinput.addEventListener("keypress", function(a){
            var key = a.keyCode;
            if(key == 13){
                var query = this.value;
                search(query);
            }
        });
    }

    var search_sqr = document.getElementById("search_sqr");

        }
