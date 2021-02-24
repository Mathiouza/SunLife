<?php
    $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
?>

<script type="module" src="../js/language.js"></script>

<link href="../styles/language.css" rel="stylesheet" type="text/css">

<div id="language-window">

    <div id="language-dialog">

        <div id="language-description">
            <?php if($lang == 'en') { ?>

                This website is available in different languages. Note that French is the original language. Please choose a language.

            <?php } else if($lang == 'fr') { ?>

                Ce site est disponible en différentes langues. Notez que la version originale est le Français. Choisissez une langue.

            <?php } ?>
        </div>

        <div id="languages">
            <select id="languages-selection">
                <option value="fr">Français</option>
                <option value="en">English</option>
            </select>
            <button id="button-select-language">OK</button>
        </div>

    </div>

</div>