// set favicon
let favicon = document.createElement("link");
favicon.setAttribute("rel", "icon");
favicon.setAttribute("type", "image/x-icon");
favicon.setAttribute("href", "/static/favicon.ico");
document.head.appendChild(favicon);

// lazily load needed files (e.g. theme, styling, etc.) with `import()`
let pathname = window.location.pathname;
if (pathname === "/") {
  // Home page specific
  import("./index.css");
} else {
  // Presentation pages specific
  let filename = pathname.split("/").at(-1).split(".html")[0];
  import(`./presentations/${filename}/index.js`);
}
