import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

// custom styling
require("./custom.scss");

Reveal.initialize({
  width: "70%",
  height: "100%",
  plugins: [RevealMarkdown, RevealNotes],
  navigationMode: "default",
//   slideNumber: "c/t",
//   showNotes: "separate-page",
});
