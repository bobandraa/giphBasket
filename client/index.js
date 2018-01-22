document.getElementById('search').addEventListener('keyup', getText);

function buildUrl (userQuery){
	let api = "http://api.giphy.com/v1/gifs/search?";
	let apiKey ="&api_key=Yzt6D7cNWlMRwMfklZWcERZvLk5Tnart";
	let query = "&q=" + userQuery + "&limit=50";
	let url = api + apiKey + query;
	console.log(url);
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
			let gifUrl = gifJson.data[i].images.fixed_height_downsampled.url;
			displayGif(gifUrl);
		}
	})
}; 

function displayGif(gifUrl) {
	let imgTag = document.createElement("img");
	imgTag.src = gifUrl;
	let searchResultsDiv = document.getElementsByClassName("gif-box");

	console.log (searchResultsDiv);
	searchResultsDiv[0].appendChild(imgTag);


}