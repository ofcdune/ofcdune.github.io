<html lang="en">
<head>
	<meta charset="utf-8">

	<title>My own site</title>
	<meta name="description" content="My own site">
	<meta name="author" content="SitePoint">

	<link rel="stylesheet" href="style.css">

</head>

<body>
	<div id="background_image"></div>
	
	<div class="foreground-title">
		<h1>SpotiSpy</h1>
		<b>A mulitpurpose bot that shows you all about to your playing information on discord</b>
	</div>
	
	<div class="foreground-buttons">
		<a href="https://top.gg/bot/724574422526328843/invite">
			<button>Invite</button>
		</a>
		<a href="https://discord.gg/PDKbFbW">
			<button>Support server</button>
		</a>
	</div>
	
	<div id="description">
		<h1>How to use this bot</h1>
		<b class="description">This bot uses the Spotify API of discord to grab informations (especially the cover art) of a user listening to spotify. Therefore, you or the targeted member has to listen to Spotify in order for it to work. For example, if you need the spotify album art, just throw on Spotify and run the command: sp-listen. You can also grab the lyrics of the currently playing song with <code>sp-lyrics</code></b>
		<br><br>
		<b class="description" style="color:red">This bot does <u>not</u> play music from Spotify or anywhere else!!!!!!</b>
		<br>
		<h1>Command list</h1>
		<b class="description"><code>sp-listen [member=None]</code>: Creates an embed that displays:</b>
		<ul>
			<li>the title of the song currently playing</li>
			<li>a link to the song</li>
			<li>the artist or artists (in a collab)</li>
			<li>the album name</li>
			<li>the album cover</li>
			<li>a link to the album cover (640x640)</li>
			<li>the track ID of the song</li>
		</ul>
		<b class="description">Leave member blank to select yourself.</b>
		<br><br>
		<b class="description"><code>sp-lyrics [member=None]</code>: Creates an embed that displays:</b><br>
		<ul>
			<li>the song title and the artist</li>
			<li>a link to the genius lyrics</li>
			<li>the album cover</li>
		</ul>
		<b class="description" style="color:red">Warning: Song lyrics can be explicit, neither the bot owner nor the API owner can be held responsible</b>
		<br>
		<b class="description">Leave member blank to select yourself.</b>
		<br><br>
		<b class="description"><code>sp-findlyrics [title] [artist]</code>: Searches for the lyrics but independant of your listening activity. Remember to include double quotes (") for keywords with spaces.</b>
		<br><br>
		<b class="description"><code>sp-scan [keyword]</code>: Scans through the server and posts an embed for every match</b>
	</div>
	
	<div id="description-invisible">
		<br>
	</div>
	
	<script src="script.js"></script>
</body>
</html>
