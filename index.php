<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<title>SunLife</title>
		<link rel="icon" href="./favicon.png">
		<link href="./styles/styles.css" rel="stylesheet" type="text/css">
		<meta http-equiv="Cache-control" content="no-cache">
		<meta http-equiv="Expires" content="-1">
		<script type="module" src="./js/app.js"></script>
	</head>
	<body>
		<nav>
			<div id="logo" >
				<img src="./res/common/logo sunlife.png" />
			</div>

			<div id="navigation">
				<div id="buttons" >
					<div>Accueil</div>
					<div>BD</div>
					<div>Persos</div>
					<div>Artworks</div>
					<div>À propos</div>
					<div>Plus</div>
				</div>

				<div class="border border-dark" ></div>
			</div>
		</nav>

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
		</div>

	</body>
</html>