<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" href="style.css">
		<title>Countdown</title>
	</head>
	<body>
		<div id="headline">
			Countdown
		</div>
		
		<div id="selector">
			<button onclick="getData()">Refresh</button>
		</div>
		
		<div id="element-view">
			<div class="countdown" id="days">
				0
			</div>
			<div class="countdown">
				:
			</div>
			<div class="countdown" id="hours">
				0
			</div>
			<div class="countdown">
				:
			</div>
			<div class="countdown" id="minutes">
				0
			</div>
			<div class="countdown">
				:
			</div>
			<div class="countdown" id="seconds">
				0
			</div>
		</div>
		
		<div id="unix">
			0
		</div>
		
	</body>
	<script src="script.js"></script>
</html>
