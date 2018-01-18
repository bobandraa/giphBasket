document.getElementById('search').addEventListener('keyup', getText);

function buildUrl (userQuery){
	let api = "http://api.giphy.com/v1/gifs/search?";
	let apiKey ="&api_key=Yzt6D7cNWlMRwMfklZWcERZvLk5Tnart";
	let query = "&q=" + userQuery;
	let url = api + apiKey + query;
	console.log(url);
	return url;
};

function getText (event){
  let word = event.target.value;
  if (event.keyCode === 13)
  {
	console.log(word);
  let url = buildUrl(word);
  searchData(url);
  }
  // return word;
};

function searchData(url) { 
	fetch(url)
	.then(function(response){
		return response.json();
	})
	.then(function(json) {
		console.log(json.data);
	})
};