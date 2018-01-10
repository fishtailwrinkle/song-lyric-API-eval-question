/* This app doesn't follow a11y best practices, and the JS file is incomplete. Complete the getDataFromApi, displaySearchData, and watchSubmit functions. When you're done, this app should allow a user to search for an artist and song title (both should be required), and display the song lyrics. You should make requests to this API: https://lyricsovh.docs.apiary.io/# . Also make any necessary adjustments to make this app accessible. */

const Lyrics_URL = 'https://api.lyrics.ovh/v1/';

function getDataFromApi(artist, title, callback) {
	const query = {
		artist: `${artist}`,
		title: `${title}`
	};

	const query_URL = Lyrics_URL + `${artist}/${title}`;

	$.getJSON(query_URL, callback);
}

function displaySearchData(data) {
	const lyrics = `<p>${data.lyrics}</p>`;
	$('.js-search-results').html(lyrics);
}

function watchSubmit() {
	$('.js-search-form').submit(event => {
		const artist = $(this).find('.js-query-artist').val();
		const title = $(this).find('.js-query-title').val();
		getDataFromApi(artist, title, displaySearchData);
	});
}

$(watchSubmit);