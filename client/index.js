
document.getElementById('search').addEventListener('keyup', keyupHandler);
// document.getElementsByClassName('input')[0].addEventListener('click', clearSearch); 
var gifBasket = [];
// document.getElementsByTagName('img')[0].addEventListener('click', addGifToBasket);
document.getElementsByClassName('input')[0].addEventListener('click', clickHandler);

function buildUrl (userQuery){
	let api = "https://api.giphy.com/v1/gifs/search?";
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
  showBtn();
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
	let imgTag = document.createElement('img');
	imgTag.src = gifUrl;
	let gifBoxDiv = document.getElementsByClassName('gif-box');
	// searchResultsDiv[0].removeChild(imgTag);
	gifBoxDiv[0].appendChild(imgTag);

	// adding selected class to img tags that users clicked
	gifBoxDiv[0].addEventListener('click', addClassToImg);
}

function clearSearch() {
  event.target.value = "";		
};

function showBtn(){
	let saveButton = document.getElementsByTagName('button')[0];
	console.log(saveButton);
	saveButton.classList.add('show');
};

function resetGifBox(){
	let gifBoxDiv = document.getElementsByClassName('gif-box')[0];
	gifBoxDiv.innerHTML = "";
};

function addClassToImg(event) {
	let selectedGif = event.target;
	selectedGif.classList.add('selected');
	addGifToBasket(selectedGif);
};

function addGifToBasket (gif) {
	if (gif.classList.contains('selected') ){
		gifBasket.push(gif.currentSrc);
		// console.log(gifBasket);
	};

};

function saveSelection (){
	let gifSelection = document.getElementById('save-gifs').addEventListener('click', function(){
		console.log(gifBasket);
	});
};



function clickHandler() {
	clearSearch();
	saveSelection();
};
	
 
