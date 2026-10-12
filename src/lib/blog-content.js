import sanitizeHtml from "sanitize-html";

const options = {
  allowedTags: [
    "a", "blockquote", "br", "code", "del", "div", "em", "h2", "h3", "h4", "hr",
    "img", "li", "ol", "p", "pre", "s", "span", "strong", "sub", "sup", "table",
    "tbody", "td", "th", "thead", "tr", "u", "ul",
  ],
  allowedAttributes: {
    a: ["href", "name", "target", "rel"],
    img: ["src", "alt", "title", "width", "height"],
    "*": ["style"],
  },
  allowedStyles: {
    "*": {
      "background-color": [/^(#[0-9a-f]{3,8}|[a-z]{3,20})$/i],
      color: [/^(#[0-9a-f]{3,8}|[a-z]{3,20})$/i, /^rgba?\([\d.,%\s]+\)$/i],
      "font-family": [/^[a-z0-9 ,"'_-]{1,100}$/i],
      "font-size": [/^\d{1,3}(px|pt|em|rem|%)$/i],
      "text-align": [/^(left|right|center|justify)$/i],
    },
  },
  allowedSchemes: ["http", "https", "mailto"],
  allowedSchemesByTag: { img: ["http", "https"] },
  transformTags: {
    a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }, true),
  },
};

export function sanitizeBlogHtml(html) {
  if (typeof html !== "string") {
    throw new TypeError("Article content must be text.");
  }
  if (html.length > 500_000) {
    throw new RangeError("Article content must be 500 KB or smaller.");
  }
  return sanitizeHtml(html, options);
}
