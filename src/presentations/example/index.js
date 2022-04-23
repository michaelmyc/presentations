import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

// custom css file
require("./custom.css");

let deck = new Reveal({
    plugins: [Markdown, RevealNotes],
});

deck.initialize();