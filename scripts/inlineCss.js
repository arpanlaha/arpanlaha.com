const fs = require("fs");

const htmlContents = fs.readFileSync("dist/index.html").toString();
const cssContents = fs.readFileSync("dist/index.css").toString();

const headEndIndex = htmlContents.indexOf("</head>");
const inlinedContents = `${htmlContents.slice(
  0,
  headEndIndex
)}<style>${cssContents}</style>${htmlContents.slice(headEndIndex)}`;

fs.writeFileSync("dist/index.html", inlinedContents);
fs.unlinkSync("dist/index.css");
