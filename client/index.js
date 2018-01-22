document.getElementById('search').addEventListener('keyup', getText);

function buildUrl (userQuery){
	let api = "http://api.giphy.com/v1/gifs/search?";
	let apiKey ="&api_key=Yzt6D7cNWlMRwMfklZWcERZvLk5Tnart";
	let query = "&q=" + userQuery;
	let url = api + apiKey + query;
	return url;
};

function getText (event){
  if (event.keyCode === 13)
  {
  let word = event.target.value;
	// console.log(word);
  let url = buildUrl(word);
  searchData(url);
  }
};

function searchData(url) { 
	fetch(url)
	.then(function(response){
		return response.json();
	})
	.then(function(gifJson) {
		for (i = 0; i < gifJson.data.length; i++){
			let gifUrl = gifJson.data[i].images.original.url;
			displayGif(gifUrl);
		}
	})
}; 

function displayGif(gifUrl) {
	

}