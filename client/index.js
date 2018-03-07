
document.getElementById('search').addEventListener('keyup', keyupHandler);
document.getElementsByClassName('input')[0].addEventListener('click', clearSearch); 

// document.getElementsByTagName('img')[0].addEventListener('click', collectGifs);
// document.getElementsByClassName('input')[0].addEventListener('click', clickHandler);

function buildUrl (userQuery){
	let api = "http://api.giphy.com/v1/gifs/search?";
	let apiKey ="&api_key=Yzt6D7cNWlMRwMfklZWcERZvLk5Tnart";
	let query = "&q=" + userQuery + "&limit=50";
	let url = api + apiKey + query;
	// console.log(url);
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
	// searchResultsDiv[0].removeChild(imgTag);
	gifBoxDiv[0].appendChild(imgTag);
	// adding selected class to img tags that users clicked
	gifBoxDiv[0].addEventListener('click', addClassToImg);
}

function clearSearch() {
  event.target.value = "";		
};

function resetGifBox(){
	let gifBoxDiv = document.getElementsByClassName("gif-box")[0];
	gifBoxDiv.innerHTML = "";
};

function addClassToImg(event) {
	let selectedGif = event.target;
	selectedGif.classList.add('selected');
	console.log(selectedGif);
};

// function collectGifs (event){
// 	// let gifArray = document.getElementsByTagName('img');
// 	// console.log(gifArray);
// 	for (i = 0; i < gifArray.length; i++){
// 		gifArray[i].addEventListener('click', function(){
// 			let selectedSrc = selectedImg.currentSrc;
// 			console.log(selectedSrc);
// 	});
// }; 

// };



// function clickHandler() {
// 	clearSearch();
// };
	
 	

// Line 45 and 56 are the same- can we use global variables?