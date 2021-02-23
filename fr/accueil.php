<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>SunLife</title>
		<link rel="icon" href="../favicon.png">
		<link href="../styles/style.css" rel="stylesheet" type="text/css">
        <link href="../styles/main-page.css" rel="stylesheet" type="text/css">
		<meta http-equiv="Cache-control" content="no-cache">
		<meta http-equiv="Expires" content="-1">
		<script type="module" src="../js/main-page.js"></script>
	</head>
	<body>
        <?php include "../assets/language.php" ?>

		<?php include "../assets/nav-bar-fr.php" ?>

		<canvas id="canvas"></canvas>

		<div id="content">
			<div id="summary-container">
				<div id="summary" >
					<div id="text">
						<h1>SunLife</h1>
						<p>
							Le monde est en proie à des bactéries ultra-résistantes. Les antibiotiques ne fonctionnent plus et les infections sont de plus en plus mortelles. 
							Charlie Horcas, PDG de l'entreprise SunLife &mdash; renommée mondialement &mdash;, a décidé de trouver une solution pour ce fléau après avoir sauvé 
							le monde de la pollution. Ont alors émergé les nanomachines SunLife.<br />
							C'était ce dont le monde avait besoin : un sauveur. Les différentes maladies infectieuses ont alors commencé à s'effacer jusqu'au jour où quelqu'un est mort à cause de son remède. SunLife a tué un homme.<br />
							Il n'y a pas vraiment de consensus sur les raisons de son décès, mais les avis tendent à penser qu'une tierce personne aurait trouvé le moyen de pirater ses 
							nanomachines.<br />
							Rapidement, les gouvernements mondiaux ont banni cette technologie et SunLife a dû retravailler dessus. Des années plus tard, pendant la grande pandémie de 2056, 
							une nouvelle version du remède sort et Charlie est remise sur son piedéstal.<br />
							Malheureusement, un autre mal va s'abattre sur le monde. Quelque chose de tellement énorme que même SunLife ne pourra rien faire : une guerre 
							nucléaire mondiale.<br />
							Le monde est dévasté mais Charlie a survécu. Tous ses efforts ont été réduits à néant, mais sa volonté de sauver le monde est toujours là.
						</p>
					</div>
					<div class="border border-light"></div>
				</div>

				<div id="button-read-container" class="resize">
					<div id="button-read">
						Lire la BD
					</div>
					<div class="border border-tertiary"></div>
				</div>
			</div>

			<div id="more-container">
				<h1 id="more-title">En savoir plus</h1>
				<div id="more-buttons">
					<div class="more-button" id="persos">Personnages</div>
					<div class="more-button" id="artworks">Artworks</div>
				</div>
			</div>

			<div id="stats-container">
				<h1 id="stats-title">Quelques nombres</h1>
				<div id="cards">
					<div class="card" id="pages">
						<h2>0</h2>
						<div>pages prévues</div>
					</div>

					<div class="card" id="date">
						<h2>0</h2>
						<div>jours depuis le début</div>
					</div>

					<div class="card" id="done">
						<h2>0</h2>
						<div>pages terminées</div>
					</div>
				</div>
			</div>

			<div id="follow-avancement-container">
				<div id="avancement-container">
					<h1 id="avancement-title">Progression</h1>
					<h2 id="chapter-1">Chapitre 1</h2>
					<h2 id="chapter-2">Chapitre 2</h2>
					<h2 id="chapter-3">Chapitre 3</h2>
					<h2 id="chapter-4">Chapitre 4</h2>
					<h2 id="chapter-5">Chapitre 5</h2>
					<h2 id="chapter-6">Chapitre 6</h2>
				</div>
				<div id="follow-container">
					<h1 id="follow-title">Suivre SunLife</h1>
					<div id="deviant-art">
						<img id="img-deviant-art" src="../res/common/da.png" />
					</div>
					<div id="youtube">
						<img id="img-youtube" src="../res/common/yt.png" />
					</div>
					<div id="instagram">
						<img id="img-instagram" src="../res/common/ig.png" />
					</div>
					<div id="facebook">
						<img id="img-facebook" src="../res/common/fb.png" />
					</div>
				</div>
			</div>

			<div id="github-container">
				<h1 id="github-title">Vous voulez aider ?</h1>
				<div id="github-button">Répertoire Github</div>
			</div>
		</div>

	</body>
</html>