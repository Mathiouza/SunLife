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
		<link href="../styles/style.css?v=1" rel="stylesheet" type="text/css">
        <link href="../styles/main-page.css?v=1" rel="stylesheet" type="text/css">

		<?php include "../assets/meta.php" ?>

		<script type="module" src="../js/main-page.js?v=1"></script>
	</head>
	<body>
        <?php include "../assets/language.php" ?>

		<?php include "../assets/nav-bar-en.php" ?>

		<canvas id="canvas"></canvas>

		<div id="content">
			<div id="summary-container">
				<div id="summary" >
					<div id="text">
						<h1>SunLife</h1>
						<p>
                            The world is plagued by ultra resistant bacteria. Antibiotics does not work anymore and infections are becoming deadlier and deadlier.
                            Charlie Horcas, SunLife's CEO — world-reknowned company —, has decided to find a cure for these diseases after saving the world against global warming.
                            Thus, SunLife's nanomachines came to life.<br />That was what the world needed: a savior. Infectious diseases started to disappear until someone died
                            because of this treatment. SunLife killed a man.<br />There is no consensus on the reasons of his death but people tend to think that a third party
                            managed to hack SunLife's nanomachines.<br />Quickly, mondial governements banned this technology and SunLife had to rework on it. Years later, during
                            the great pandemic of 2056, a new version of the cure is released and Charlie is back on her pedestal.<br />Unfortunately, another evil is about to
                            descend upon the world. Something so big that even SunLife will not be able to do anything: a nuclear world war.<br />The world is devastated but Charlie
                            is still alive. All her work is reduced to nothing, but her will to save the world is still here.
						</p>
					</div>
					<div class="border border-light"></div>
				</div>

				<div id="button-read-container" class="resize">
					<div id="button-read">
						Read the comic
					</div>
					<div class="border border-tertiary"></div>
				</div>
			</div>

			<div id="more-container">
				<h1 id="more-title">More</h1>
				<div id="more-buttons">
					<div class="more-button" id="persos">Characters</div>
					<div class="more-button" id="artworks">Artworks</div>
				</div>
			</div>

			<div id="stats-container">
				<h1 id="stats-title">Some figures</h1>
				<div id="cards">
					<div class="card" id="pages">
						<h2>0</h2>
						<div>pages planned</div>
					</div>

					<div class="card" id="date">
						<h2>0</h2>
						<div>days since the beginning</div>
					</div>

					<div class="card" id="done">
						<h2>0</h2>
						<div>pages done</div>
					</div>
				</div>
			</div>

			<div id="follow-avancement-container">
				<div id="avancement-container">
					<h1 id="avancement-title">Progress</h1>
					<h2 id="chapter-1">Chapter 1</h2>
					<h2 id="chapter-2">Chapter 2</h2>
					<h2 id="chapter-3">Chapter 3</h2>
					<h2 id="chapter-4">Chapter 4</h2>
					<h2 id="chapter-5">Chapter 5</h2>
					<h2 id="chapter-6">Chapter 6</h2>
				</div>
				<div id="follow-container">
					<h1 id="follow-title">Follow SunLife</h1>
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
				<h1 id="github-title">Wanna help?</h1>
				<div id="github-button">Github repository</div>
			</div>
		</div>

		<?php include "../assets/footer-en.php" ?>

	</body>
</html>