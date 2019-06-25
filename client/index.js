
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
	gifBoxDiv[0].appendChild(imgTag);

	// adding selected class to img tags that users clicked
	gifBoxDiv[0].addEventListener('click', addClassToImg);
}

function clearSearch() {
  event.target.value = "";
};

function showBtn(){
	let saveButton = document.getElementsByTagName('button')[0];
	saveButton.classList.add('show');
};

function resetGifBox(){
	let gifBoxDiv = document.getElementsByClassName('gif-box')[0];
	gifBoxDiv.innerHTML = "";
};

function addClassToImg(event) {
	let selectedGif = event.target;
	selectedGif.classList.toggle('selected');
};

function addSelectedGifToBasket () {
	let selectedGif = Array.from(document.querySelectorAll('.gif-box .selected'));
	let selectedArray = selectedGif.map(gif => gif.src);
	console.log(selectedArray);

	// let selectedArray = selectedGif.map(function(gif, i) {
	// 	return gif.src;
	// });
	// console.log(selectedArray);


};

function saveSelection (){
	let gifSelection = document.getElementById('save-gifs').addEventListener('click', addSelectedGifToBasket);
};

function clickHandler() {
	clearSearch();
	saveSelection();
};


