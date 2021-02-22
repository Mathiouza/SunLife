<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>SunLife</title>
		<link rel="icon" href="../favicon.png">
		<link href="../styles/style.css" rel="stylesheet" type="text/css">
        <link href="../styles/comic-page.css" rel="stylesheet" type="text/css">
		<meta http-equiv="Cache-control" content="no-cache">
		<meta http-equiv="Expires" content="-1">
		<script type="module" src="../js/comic-page.js"></script>
	</head>
    <body>

		<div id="simple-reader" >
			<?php include "../assets/language.php" ?>

			<?php include "../assets/nav-bar-fr.php" ?>

			<div id="bd-container">

				<div id="bd-summary-container">

					<div id="bd-page-selector-container">
						<h1>Selectionnez une page :</h1>
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
							<div class="chapter-summary" id="chapter1-summary">Chapitre 1</div>
							<div class="chapter-summary" id="chapter2-summary">Chapitre 2</div>
							<div class="chapter-summary" id="chapter3-summary">Chapitre 3 (À venir)</div>
							<div class="chapter-summary" id="chapter4-summary">Chapitre 4 (À venir)</div>
							<div class="chapter-summary" id="chapter5-summary">Chapitre 5 (À venir)</div>
							<div class="chapter-summary" id="chapter6-summary">Chapitre 6 (À venir)</div>
						</div>
					</div>

				</div>

				<div id="reader-container">

					<div id="reader">
						<img id="reader-page" src="../BD/load.png" />
					</div>

					<div id="reader-control">
						<div class="control" id="control-prev">Précédent</div>
						<div class="control" id="control-full">Plein écran</div>
						<div class="control" id="control-next">Suivant</div>
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

    </body>
</html>