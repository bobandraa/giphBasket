
document.getElementById('search').addEventListener('keyup', keyupHandler);
document.getElementsByClassName('input')[0].addEventListener('click', clearSearch); 
// document.getElementsByClassName('input')[0].addEventListener('click', clickHandler);

function buildUrl (userQuery){
	let api = "http://api.giphy.com/v1/gifs/search?";
	let apiKey ="&api_key=Yzt6D7cNWlMRwMfklZWcERZvLk5Tnart";
	let query = "&q=" + userQuery + "&limit=50";
	let url = api + apiKey + query;
	console.log(url);
	return url;
};

function keyupHandler (event){
  if (event.keyCode === 13)
  {
  let word = event.target.value;
	// console.log(word);
  let url = buildUrl(word);
  searchData(url);
  }

};

function searchData(url) { 
	resetGifBox();
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
	let gifBoxDiv = document.getElementsByClassName("gif-box");
	// console.log(searchResultsDiv[0]);
	// searchResultsDiv[0].removeChild(imgTag);
	gifBoxDiv[0].appendChild(imgTag);
	// console.log (searchResultsDiv);
}

function clearSearch() {
  event.target.value = " ";		
	};

function resetGifBox(){
	let gifBoxDiv = document.getElementsByClassName("gif-box")[0];
	gifBoxDiv.innerHTML = "";
	console.log(gifBoxDiv);
 	// searchResultsDiv.parentNode.removeChild(searchResultsDiv);

};


// function clickHandler() {
// 	clearSearch();
// }
	
 	

