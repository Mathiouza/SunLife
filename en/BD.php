<!doctype html>
<html>
	<head>
		<meta charset="utf-8">


		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-166878957-1"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'UA-166878957-1');
		</script>


		<title>SunLife</title>
		<link rel="icon" href="../favicon.png">
		<link href="../styles/style.css" rel="stylesheet" type="text/css">
        <link href="../styles/comic-page.css" rel="stylesheet" type="text/css">
		<meta http-equiv="Cache-control" content="no-cache">
		<meta http-equiv="Expires" content="-1">

		<?php include "../assets/meta.php" ?>

		<script type="module" src="../js/comic-page.js"></script>
	</head>
    <body>

		<div id="simple-reader" >
			<?php include "../assets/language.php" ?>

			<?php include "../assets/nav-bar-en.php" ?>

			<div id="bd-container">

				<div id="bd-summary-container">

					<div id="bd-page-selector-container">
						<h1>Select a page:</h1>
						<div id="bd-page-selector">
							<form id="bd-page-selector-form">
								<input id="page-input" type="number" value="1" min="1" max="82" />
								<button id="page-input-ok">OK</button>
							</form>
						</div>
					</div>

					<div id="bd-summary">
						<h1>Chapitres:</h1>
						<div id="chapters-summary">
							<div class="chapter-summary" id="chapter1-summary">Chapter 1</div>
							<div class="chapter-summary" id="chapter2-summary">Chapter 2</div>
							<div class="chapter-summary" id="chapter3-summary">Chapter 3 (Soon)</div>
							<div class="chapter-summary" id="chapter4-summary">Chapter 4 (Soon)</div>
							<div class="chapter-summary" id="chapter5-summary">Chapter 5 (Soon)</div>
							<div class="chapter-summary" id="chapter6-summary">Chapter 6 (Soon)</div>
						</div>
					</div>

				</div>

				<div id="reader-container">

					<div id="reader">
						<img id="reader-page" src="../BD/fr/000.png" />
					</div>

					<div id="reader-control">
						<div class="control" id="control-prev">Previous</div>
						<div class="control" id="control-full">Fullscreen</div>
						<div class="control" id="control-next">Next</div>
					</div>

				</div>

			</div>

		</div>

		<div id="fullscreen-reader">
			<img class="reader-page-fullscreen" id="reader-page-fullscreen1" src="../BD/load.png" />
			<img class="reader-page-fullscreen" id="reader-page-fullscreen2" src="../BD/load.png" />
			<img class="reader-page-fullscreen" id="reader-page-fullscreen3" src="../BD/load.png" />
			<img class="reader-page-fullscreen" id="reader-page-fullscreen4" src="../BD/load.png" />
			<img class="reader-page-fullscreen" id="reader-page-fullscreen5" src="../BD/load.png" />
		</div>

		<?php include "../assets/footer-en.php" ?>

    </body>
</html>