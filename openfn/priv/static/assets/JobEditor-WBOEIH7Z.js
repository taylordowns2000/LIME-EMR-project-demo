import {
  ChevronDownIcon_default,
  ChevronLeftIcon_default,
  ChevronRightIcon_default,
  ChevronUpIcon_default,
  ClockIcon_default,
  DocumentTextIcon_default,
  KeyIcon_default,
  SparklesIcon_default,
  ViewColumnsIcon_default
} from "./chunk-IWBQXAYF.js";
import {
  Editor,
  __publicField,
  __toESM,
  describePackage,
  require_react
} from "./chunk-RI5X6ZOO.js";

// js/job-editor/JobEditor.tsx
var import_react8 = __toESM(require_react());

// js/adaptor-docs/Docs.tsx
var import_react4 = __toESM(require_react());

// js/adaptor-docs/components/DocsPanel.tsx
var import_react3 = __toESM(require_react());

// js/adaptor-docs/hooks/useDocs.tsx
var import_react = __toESM(require_react());
var cache = {};
var useDocs = (specifier) => {
  const [docs, setDocs] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (cache.hasOwnProperty(specifier)) {
      setDocs(cache[specifier]);
    } else {
      cache[specifier] = null;
      describePackage(specifier, {}).then((result) => {
        cache[specifier] = result;
        setDocs(result);
      }).catch((err) => {
        cache[specifier] = false;
        setDocs(false);
      });
    }
  }, [specifier]);
  return docs;
};
var useDocs_default = useDocs;

// js/adaptor-docs/components/render/Function.tsx
var import_react2 = __toESM(require_react());

// node_modules/marked/lib/marked.esm.js
function getDefaults() {
  return {
    async: false,
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    hooks: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
var defaults = getDefaults();
function changeDefaults(newDefaults) {
  defaults = newDefaults;
}
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, "g");
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
var escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon")
      return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
var nonWordAndColonTest = /[^\w:]/g;
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return href;
}
var baseUrls = {};
var justDomain = /^[^:]+:\/*[^/]*$/;
var protocol = /^([^:]+:)[\s\S]*$/;
var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  if (!baseUrls[" " + base]) {
    if (justDomain.test(base)) {
      baseUrls[" " + base] = base + "/";
    } else {
      baseUrls[" " + base] = rtrim(base, "/", true);
    }
  }
  base = baseUrls[" " + base];
  const relativeBase = base.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, "$1") + href;
  } else {
    return base + href;
  }
}
var noopTest = { exec: function noopTest2() {
} };
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false, curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count)
      cells.push("");
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0, i = 0;
  for (; i < l; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
}
function repeatString(pattern, count) {
  if (count < 1) {
    return "";
  }
  let result = "";
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}
function outputLink(cap, link, raw, lexer2) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer2.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer2.inlineTokens(text)
    };
    lexer2.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
var Tokenizer = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, "");
      const top = this.lexer.state.top;
      this.lexer.state.top = true;
      const tokens = this.lexer.blockTokens(text);
      this.lexer.state.top = top;
      return {
        type: "blockquote",
        raw: cap[0],
        tokens,
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length));
        nextLine = src.split("\n", 1)[0];
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          while (src) {
            rawLine = src.split("\n", 1)[0];
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(src)) {
              break;
            }
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLine.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.search(/[^ ]/) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLine.slice(indent);
          }
        }
        if (!list.loose) {
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      }
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      const l = list.items.length;
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        if (!list.loose) {
          const spacers = list.items[i].tokens.filter((t) => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
          list.loose = hasMultipleLineBreaks;
        }
      }
      if (list.loose) {
        for (i = 0; i < l; i++) {
          list.items[i].loose = true;
        }
      }
      return list;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        const text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.type = "paragraph";
        token.text = text;
        token.tokens = this.lexer.inline(text);
      }
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, "$1") : cap[3];
      return {
        type: "def",
        tag,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: "table",
        header: splitCells(cap[1]).map((c) => {
          return { text: c };
        }),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = "left";
          } else {
            item.align[i] = null;
          }
        }
        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map((c) => {
            return { text: c };
          });
        }
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = this.lexer.inline(item.header[j].text);
        }
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = this.lexer.inline(row[k].text);
          }
        }
        return item;
      }
    }
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
        title: title ? title.replace(this.rules.inline._escapes, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = links[link.toLowerCase()];
      if (!link) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = rDelim.length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const raw = src.slice(0, lLength + match.index + (match[0].length - rDelim.length) + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src, mangle2) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[1]) : cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[0]) : cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src, smartypants2) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
};
var block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
block.normal = { ...block };
block.gfm = {
  ...block.normal,
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  // Cells
};
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = {
  ...block.normal,
  html: edit(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
};
var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong                                      () Consume to delim     (1) #***                (2) a***#, a***                             (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
    // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
inline._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
inline.normal = { ...inline };
inline.pedantic = {
  ...inline.normal,
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
};
inline.gfm = {
  ...inline.normal,
  escape: edit(inline.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
inline.breaks = {
  ...inline.gfm,
  br: edit(inline.br).replace("{2,}", "*").getRegex(),
  text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
function smartypants(text) {
  return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text) {
  let out = "", i, ch;
  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
var Lexer = class {
  constructor(options2) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options2 || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options2) {
    const lexer2 = new Lexer(options2);
    return lexer2.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options2) {
    const lexer2 = new Lexer(options2);
    return lexer2.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  /**
   * Lexing
   */
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index + match[0].length - 2) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
      this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
};
var Renderer = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="' + this.options.langPrefix + escape(lang) + '">' + (escaped ? code : escape(code, true)) + "</code></pre>\n";
  }
  /**
   * @param {string} quote
   */
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html) {
    return html;
  }
  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>
`;
    }
    return `<h${level}>${text}</h${level}>
`;
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  /**
   * @param {string} text
   */
  listitem(text) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  /**
   * @param {string} text
   */
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  /**
   * @param {string} header
   * @param {string} body
   */
  table(header, body) {
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  /**
   * @param {string} content
   */
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag + content + `</${type}>
`;
  }
  /**
   * span level renderer
   * @param {string} text
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  /**
   * @param {string} text
   */
  em(text) {
    return `<em>${text}</em>`;
  }
  /**
   * @param {string} text
   */
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  /**
   * @param {string} text
   */
  del(text) {
    return `<del>${text}</del>`;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  }
  text(text) {
    return text;
  }
};
var TextRenderer = class {
  // no need for block level renderers
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
};
var Slugger = class {
  constructor() {
    this.seen = {};
  }
  /**
   * @param {string} value
   */
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + "-" + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }
  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(value, options2 = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options2.dryrun);
  }
};
var Parser = class {
  constructor(options2) {
    this.options = options2 || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options2) {
    const parser2 = new Parser(options2);
    return parser2.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options2) {
    const parser2 = new Parser(options2);
    return parser2.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = "", i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space": {
          continue;
        }
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          out += this.renderer.heading(
            this.parseInline(token.tokens),
            token.depth,
            unescape(this.parseInline(token.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          out += this.renderer.code(
            token.text,
            token.lang,
            token.escaped
          );
          continue;
        }
        case "table": {
          header = "";
          cell = "";
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(
              this.parseInline(token.header[j].tokens),
              { header: true, align: token.align[j] }
            );
          }
          header += this.renderer.tablerow(cell);
          body = "";
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];
            cell = "";
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(
                this.parseInline(row[k].tokens),
                { header: false, align: token.align[k] }
              );
            }
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;
          body = "";
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;
            itemBody = "";
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }
            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          out += this.renderer.html(token.text);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case "text": {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === "text") {
            token = tokens[++i];
            body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "", i, token, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape": {
          out += renderer.text(token.text);
          break;
        }
        case "html": {
          out += renderer.html(token.text);
          break;
        }
        case "link": {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case "image": {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case "strong": {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case "em": {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case "codespan": {
          out += renderer.codespan(token.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case "text": {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
};
var Hooks = class {
  constructor(options2) {
    this.options = options2 || defaults;
  }
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html) {
    return html;
  }
};
__publicField(Hooks, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess"
]));
function onError(silent, async, callback) {
  return (e) => {
    e.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (silent) {
      const msg = "<p>An error occurred:</p><pre>" + escape(e.message + "", true) + "</pre>";
      if (async) {
        return Promise.resolve(msg);
      }
      if (callback) {
        callback(null, msg);
        return;
      }
      return msg;
    }
    if (async) {
      return Promise.reject(e);
    }
    if (callback) {
      callback(e);
      return;
    }
    throw e;
  };
}
function parseMarkdown(lexer2, parser2) {
  return (src, opt, callback) => {
    if (typeof opt === "function") {
      callback = opt;
      opt = null;
    }
    const origOpt = { ...opt };
    opt = { ...marked.defaults, ...origOpt };
    const throwError = onError(opt.silent, opt.async, callback);
    if (typeof src === "undefined" || src === null) {
      return throwError(new Error("marked(): input parameter is undefined or null"));
    }
    if (typeof src !== "string") {
      return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
    }
    checkSanitizeDeprecation(opt);
    if (opt.hooks) {
      opt.hooks.options = opt;
    }
    if (callback) {
      const highlight = opt.highlight;
      let tokens;
      try {
        if (opt.hooks) {
          src = opt.hooks.preprocess(src);
        }
        tokens = lexer2(src, opt);
      } catch (e) {
        return throwError(e);
      }
      const done = function(err) {
        let out;
        if (!err) {
          try {
            if (opt.walkTokens) {
              marked.walkTokens(tokens, opt.walkTokens);
            }
            out = parser2(tokens, opt);
            if (opt.hooks) {
              out = opt.hooks.postprocess(out);
            }
          } catch (e) {
            err = e;
          }
        }
        opt.highlight = highlight;
        return err ? throwError(err) : callback(null, out);
      };
      if (!highlight || highlight.length < 3) {
        return done();
      }
      delete opt.highlight;
      if (!tokens.length)
        return done();
      let pending = 0;
      marked.walkTokens(tokens, function(token) {
        if (token.type === "code") {
          pending++;
          setTimeout(() => {
            highlight(token.text, token.lang, function(err, code) {
              if (err) {
                return done(err);
              }
              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }
              pending--;
              if (pending === 0) {
                done();
              }
            });
          }, 0);
        }
      });
      if (pending === 0) {
        done();
      }
      return;
    }
    if (opt.async) {
      return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer2(src2, opt)).then((tokens) => opt.walkTokens ? Promise.all(marked.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser2(tokens, opt)).then((html) => opt.hooks ? opt.hooks.postprocess(html) : html).catch(throwError);
    }
    try {
      if (opt.hooks) {
        src = opt.hooks.preprocess(src);
      }
      const tokens = lexer2(src, opt);
      if (opt.walkTokens) {
        marked.walkTokens(tokens, opt.walkTokens);
      }
      let html = parser2(tokens, opt);
      if (opt.hooks) {
        html = opt.hooks.postprocess(html);
      }
      return html;
    } catch (e) {
      return throwError(e);
    }
  };
}
function marked(src, opt, callback) {
  return parseMarkdown(Lexer.lex, Parser.parse)(src, opt, callback);
}
marked.options = marked.setOptions = function(opt) {
  marked.defaults = { ...marked.defaults, ...opt };
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = getDefaults;
marked.defaults = defaults;
marked.use = function(...args) {
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  args.forEach((pack) => {
    const opts = { ...pack };
    opts.async = marked.defaults.async || opts.async || false;
    if (pack.extensions) {
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error("extension name required");
        }
        if (ext.renderer) {
          const prevRenderer = extensions.renderers[ext.name];
          if (prevRenderer) {
            extensions.renderers[ext.name] = function(...args2) {
              let ret = ext.renderer.apply(this, args2);
              if (ret === false) {
                ret = prevRenderer.apply(this, args2);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) {
          if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) {
            if (ext.level === "block") {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === "inline") {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) {
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
      opts.extensions = extensions;
    }
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        renderer[prop] = (...args2) => {
          let ret = pack.renderer[prop].apply(renderer, args2);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args2);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        tokenizer[prop] = (...args2) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args2);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args2);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }
    if (pack.hooks) {
      const hooks = marked.defaults.hooks || new Hooks();
      for (const prop in pack.hooks) {
        const prevHook = hooks[prop];
        if (Hooks.passThroughHooks.has(prop)) {
          hooks[prop] = (arg) => {
            if (marked.defaults.async) {
              return Promise.resolve(pack.hooks[prop].call(hooks, arg)).then((ret2) => {
                return prevHook.call(hooks, ret2);
              });
            }
            const ret = pack.hooks[prop].call(hooks, arg);
            return prevHook.call(hooks, ret);
          };
        } else {
          hooks[prop] = (...args2) => {
            let ret = pack.hooks[prop].apply(hooks, args2);
            if (ret === false) {
              ret = prevHook.apply(hooks, args2);
            }
            return ret;
          };
        }
      }
      opts.hooks = hooks;
    }
    if (pack.walkTokens) {
      const walkTokens2 = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        let values = [];
        values.push(pack.walkTokens.call(this, token));
        if (walkTokens2) {
          values = values.concat(walkTokens2.call(this, token));
        }
        return values;
      };
    }
    marked.setOptions(opts);
  });
};
marked.walkTokens = function(tokens, callback) {
  let values = [];
  for (const token of tokens) {
    values = values.concat(callback.call(marked, token));
    switch (token.type) {
      case "table": {
        for (const cell of token.header) {
          values = values.concat(marked.walkTokens(cell.tokens, callback));
        }
        for (const row of token.rows) {
          for (const cell of row) {
            values = values.concat(marked.walkTokens(cell.tokens, callback));
          }
        }
        break;
      }
      case "list": {
        values = values.concat(marked.walkTokens(token.items, callback));
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            values = values.concat(marked.walkTokens(token[childTokens], callback));
          });
        } else if (token.tokens) {
          values = values.concat(marked.walkTokens(token.tokens, callback));
        }
      }
    }
  }
  return values;
};
marked.parseInline = parseMarkdown(Lexer.lexInline, Parser.parseInline);
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.Hooks = Hooks;
marked.parse = marked;
var options = marked.options;
var setOptions = marked.setOptions;
var use = marked.use;
var walkTokens = marked.walkTokens;
var parseInline = marked.parseInline;
var parser = Parser.parse;
var lexer = Lexer.lex;

// js/adaptor-docs/components/render/Function.tsx
var doCopy = async (text) => {
  const type = "text/plain";
  const data = [new ClipboardItem({ [type]: new Blob([text], { type }) })];
  try {
    await navigator.clipboard.write(data);
  } catch (e) {
    alert("COPY FAILED");
  }
};
var getSignature = (fn) => {
  const paramList = fn.parameters.map(({ name }) => name);
  return /* @__PURE__ */ import_react2.default.createElement("span", null, fn.magic ? /* @__PURE__ */ import_react2.default.createElement("span", { style: { float: "left", marginLeft: "-18px" } }, "\u2728") : "", [
    fn.name,
    "(",
    paramList.join(", "),
    ")"
  ].join(""));
};
var PreButton = ({ label, onClick, tooltip }) => (
  // TODO give some kind of feedback on click
  /* @__PURE__ */ import_react2.default.createElement(
    "button",
    {
      className: "rounded-md bg-slate-300 text-white px-2 py-1 mr-1 text-xs hover:bg-primary-600",
      title: tooltip || "",
      onClick
    },
    label
  )
);
var Example = ({ eg, onInsert }) => {
  let code = "";
  let caption;
  if (typeof eg === "string") {
    code = eg;
  } else {
    code = eg.code;
    caption = eg.caption;
  }
  return /* @__PURE__ */ import_react2.default.createElement("section", null, /* @__PURE__ */ import_react2.default.createElement("label", { className: "block text-sm text-secondary-700 mt-2" }, "Example", caption && `: ${caption}`), /* @__PURE__ */ import_react2.default.createElement("div", { style: { marginTop: "-6px" } }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "w-full px-5 text-right", style: { height: "13px" } }, /* @__PURE__ */ import_react2.default.createElement(PreButton, { label: "COPY", onClick: () => doCopy(code), tooltip: "Copy this example to the clipboard" }), onInsert && /* @__PURE__ */ import_react2.default.createElement(PreButton, { label: "ADD", onClick: () => onInsert(code), tooltip: "Add this snippet to the end of the code" })), /* @__PURE__ */ import_react2.default.createElement(
    "pre",
    {
      className: "rounded-md pl-4 pr-30 py-2 mx-4 my-0 font-mono bg-slate-100 border-2 border-slate-200 text-slate-800 min-h-full text-xs overflow-x-auto"
    },
    code
  )));
};
var RenderFunction = ({ fn, onInsert }) => {
  return /* @__PURE__ */ import_react2.default.createElement("details", { className: "ml-4" }, /* @__PURE__ */ import_react2.default.createElement("summary", { className: "text-sm text-secondary-700 mb-1 cursor-pointer marker:text-slate-600 marker:text-sm whitespace-nowrap hover:bg-sky-50/50" }, getSignature(fn)), /* @__PURE__ */ import_react2.default.createElement("div", { className: "block mb-4 pl-4" }, /* @__PURE__ */ import_react2.default.createElement("p", { className: "block text-sm", dangerouslySetInnerHTML: { __html: marked.parse(fn.description) } }), fn.examples.map(
    (eg, idx) => /* @__PURE__ */ import_react2.default.createElement(Example, { eg, onInsert, key: `${fn.name}-eg-${idx}` })
  )));
};
var Function_default = RenderFunction;

// js/adaptor-docs/components/DocsPanel.tsx
var docsLink = /* @__PURE__ */ import_react3.default.createElement("p", null, "You can check the external docs site at", /* @__PURE__ */ import_react3.default.createElement("a", { className: "text-indigo-400 underline underline-offset-2 hover:text-indigo-500 ml-2", href: "https://docs.openfn.org/adaptors/#where-to-find-them.", target: "none" }, "docs.openfn.org/adaptors"), ".");
var DocsPanel = ({ specifier, onInsert }) => {
  if (!specifier) {
    ;
    return /* @__PURE__ */ import_react3.default.createElement("div", null, "Nothing selected");
  }
  const pkg = useDocs_default(specifier);
  if (pkg === null) {
    return /* @__PURE__ */ import_react3.default.createElement("div", { className: "block m-2" }, "Loading docs...");
  }
  if (pkg === false) {
    return /* @__PURE__ */ import_react3.default.createElement("div", { className: "block m-2" }, /* @__PURE__ */ import_react3.default.createElement("p", null, "Sorry, an error occurred loading the docs for this adaptor."), docsLink);
  }
  const { name, version, functions } = pkg;
  if (functions.length === 0) {
    return /* @__PURE__ */ import_react3.default.createElement("div", { className: "block m-2" }, /* @__PURE__ */ import_react3.default.createElement("h1", { className: "h1 text-lg font-bold text-secondary-700 mb-2" }, name, " (", version, ")"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Sorry, docs are unavailable for this adaptor."), docsLink);
  }
  return /* @__PURE__ */ import_react3.default.createElement("div", { className: "block m-2 w-full overflow-auto" }, /* @__PURE__ */ import_react3.default.createElement("h1", { className: "h1 text-lg font-bold text-secondary-700 mb-2" }, name, " (", version, ")"), /* @__PURE__ */ import_react3.default.createElement("div", { className: "text-sm mb-4" }, "These are the operations available for this adaptor:"), functions.sort((a, b) => {
    if (a.name > b.name)
      return 1;
    else if (a.name < b.name)
      return -1;
    return 0;
  }).map((fn) => /* @__PURE__ */ import_react3.default.createElement(Function_default, { key: fn.name, fn, onInsert })));
};
var DocsPanel_default = DocsPanel;

// js/adaptor-docs/Docs.tsx
var Docs_default = ({ adaptor }) => {
  const handleInsert = (0, import_react4.useCallback)((text) => {
    const e = new Event("insert-snippet");
    e.snippet = text;
    document.dispatchEvent(e);
  }, []);
  return /* @__PURE__ */ import_react4.default.createElement(DocsPanel_default, { specifier: adaptor, onInsert: handleInsert });
};

// js/metadata-explorer/Explorer.tsx
var import_react7 = __toESM(require_react());

// node_modules/@heroicons/react/24/solid/esm/InformationCircleIcon.js
var React4 = __toESM(require_react(), 1);
function InformationCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React4.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React4.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React4.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
var ForwardRef = React4.forwardRef(InformationCircleIcon);
var InformationCircleIcon_default = ForwardRef;

// js/metadata-explorer/Entity.tsx
var import_react5 = __toESM(require_react());

// js/metadata-explorer/map-children.ts
var mapChildren = (model, fn) => {
  if (Array.isArray(model.children)) {
    return model.children.map(fn);
  }
  const obj = model.children;
  return Object.keys(obj).map(
    (key) => fn({
      name: key,
      // type: 'group',
      children: obj[key]
    })
  );
};
var map_children_default = mapChildren;

// js/metadata-explorer/Entity.tsx
var summaryStyle = "text-sm text-secondary-700 mb-1 marker:text-slate-600 marker:text-sm select-none whitespace-nowrap hover:bg-sky-50/50";
var hasChildren = ({ children } = {}) => {
  if (children) {
    if (Array.isArray(children)) {
      return children.length > 0;
    } else {
      return Object.keys(children).length > 0;
    }
  }
  return false;
};
var Label = ({ data }) => /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, data.label && data.name && /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement("span", { className: "inline-block align-bottom" }, data.label), /* @__PURE__ */ import_react5.default.createElement("pre", { className: "inline text-xs align-bottom font-monospace ml-2" }, "(", data.name, ")")), !data.label && data.name && /* @__PURE__ */ import_react5.default.createElement("span", { className: "inline-block align-bottom" }, data.name), data.type && /* @__PURE__ */ import_react5.default.createElement("span", { className: "inline-block ml-4 mr-4 rounded-md border-secondary-300 text-slate-500 bg-sky-100/75 px-1 py-px cursor-default" }, data.type));
var Entity = ({ data, level }) => {
  if (hasChildren(data)) {
    return /* @__PURE__ */ import_react5.default.createElement("details", null, /* @__PURE__ */ import_react5.default.createElement("summary", { className: `${summaryStyle} cursor-pointer` }, /* @__PURE__ */ import_react5.default.createElement(Label, { data })), /* @__PURE__ */ import_react5.default.createElement("ul", { className: "list-disc ml-4" }, map_children_default(data, (e) => /* @__PURE__ */ import_react5.default.createElement(Entity, { data: e, key: e.name, level: level + 1 }))));
  }
  const indent = `ml-${level * 2}`;
  if (typeof data === "string") {
    return /* @__PURE__ */ import_react5.default.createElement("li", { className: `${summaryStyle} cursor-default ${indent}` }, '"', data, '"');
  }
  return /* @__PURE__ */ import_react5.default.createElement("li", { className: `${summaryStyle} cursor-default ${indent}` }, /* @__PURE__ */ import_react5.default.createElement(Label, { data }));
};
var Entity_default = Entity;

// js/metadata-explorer/Empty.tsx
var import_react6 = __toESM(require_react());
var Empty = ({ adaptor }) => /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement("p", { className: "block m-2" }, `No metadata found for ${adaptor}`), /* @__PURE__ */ import_react6.default.createElement("p", { className: "block m-2" }, "This adaptor does not support magic functions yet."));
var Empty_default = Empty;

// js/metadata-explorer/Explorer.tsx
var PERSIST_KEY = "lightning.metadata-explorer.settings";
var iconStyle = "h-4 w-4 text-grey-400 mr-1";
var Explorer_default = ({
  metadata,
  adaptor,
  credentialName
}) => {
  if (!metadata) {
    return /* @__PURE__ */ import_react7.default.createElement(Empty_default, { adaptor });
  }
  if (metadata === true) {
    return /* @__PURE__ */ import_react7.default.createElement("div", { className: "block m-2" }, "Loading metadata...");
  }
  if (metadata.error) {
    const { error } = metadata;
    if (error === "no_metadata_function")
      return /* @__PURE__ */ import_react7.default.createElement(Empty_default, { adaptor });
    let message = `An error occurred while loading metadata: ${error}`;
    if (error === "no_credential")
      message = "Metadata can only be loaded once you've added a valid credential.";
    if (error === "no_metadata_result")
      message = `The ${adaptor} adaptor isn't returning any metadata. This could be because your credential is invalid or not authorized to access the metadata APIs for your system.`;
    return /* @__PURE__ */ import_react7.default.createElement("div", { className: "block m-2" }, message);
  }
  const [initialShowHelp] = (0, import_react7.useState)(() => {
    const settings2 = localStorage.getItem(PERSIST_KEY);
    if (settings2) {
      return JSON.parse(settings2).showHelp;
    }
    return true;
  });
  const handleToggleHelp = (evt) => {
    const settings2 = { showHelp: evt.target.open };
    localStorage.setItem(PERSIST_KEY, JSON.stringify(settings2));
  };
  const dateString = new Date(metadata.created).toLocaleString();
  return /* @__PURE__ */ import_react7.default.createElement("div", { className: "block flex-1 flex flex-col overflow-y-hidden" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "mt-2 flex-1 overflow-y-auto" }, map_children_default(metadata, (data) => /* @__PURE__ */ import_react7.default.createElement(Entity_default, { level: 0, data, key: data.name }))), /* @__PURE__ */ import_react7.default.createElement("div", { className: "pt-4" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "flex flex-row flex-wrap" }, /* @__PURE__ */ import_react7.default.createElement(
    "p",
    {
      className: "flex flex-row cursor-default mr-2 whitespace-nowrap",
      title: `This metadata was generated at ${dateString}`
    },
    /* @__PURE__ */ import_react7.default.createElement(ClockIcon_default, { className: iconStyle }),
    /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-xs mb-1" }, dateString)
  ), credentialName && /* @__PURE__ */ import_react7.default.createElement(
    "p",
    {
      className: "flex flex-row cursor-default mr-2 whitespace-nowrap",
      title: "The credential used to generate metadata"
    },
    /* @__PURE__ */ import_react7.default.createElement(KeyIcon_default, { className: iconStyle }),
    /* @__PURE__ */ import_react7.default.createElement("span", { className: "text-xs mb-1" }, credentialName)
  )), /* @__PURE__ */ import_react7.default.createElement("details", { open: initialShowHelp, onToggle: handleToggleHelp }, /* @__PURE__ */ import_react7.default.createElement("summary", { className: "block cursor-pointer text-sm" }, /* @__PURE__ */ import_react7.default.createElement(InformationCircleIcon_default, { className: iconStyle + " inline" }), /* @__PURE__ */ import_react7.default.createElement("span", { className: "font-bold" }, "Tips")), /* @__PURE__ */ import_react7.default.createElement(
    "div",
    {
      className: "border-slate-200 border-l-2 ml-2 pl-2",
      style: { borderLeftWidth: "2px" }
    },
    /* @__PURE__ */ import_react7.default.createElement("p", { className: "text-sm mb-2" }, "Metadata shows you the structure of your datasource, based on your current credential."),
    /* @__PURE__ */ import_react7.default.createElement("p", { className: "text-sm mb-2" }, "Press ", /* @__PURE__ */ import_react7.default.createElement("code", { className: "inline text-xs" }, "ctrl + space"), " in the code editor for suggestions while writing code.")
  ))));
};

// js/job-editor/JobEditor.tsx
var persistedSettings = localStorage.getItem("lightning.job-editor.settings");
var settings = persistedSettings ? JSON.parse(persistedSettings) : {
  ["lightning.job-editor.orientation" /* ORIENTATION */]: "h",
  ["lightning.job-editor.showPanel" /* SHOW_PANEL */]: true
};
var persistSettings = () => localStorage.setItem(
  "lightning.job-editor.settings",
  JSON.stringify(settings)
);
var iconStyle2 = "inline cursor-pointer h-6 w-6 mr-1 hover:text-primary-600";
var Tabs = ({
  options: options2,
  onSelectionChange,
  verticalCollapse,
  initialSelection
}) => {
  const [selected, setSelected] = (0, import_react8.useState)(initialSelection);
  const handleSelectionChange = (name) => {
    if (name !== selected) {
      setSelected(name);
      onSelectionChange?.(name);
    }
  };
  const commonStyle = "flex";
  const horizStyle = "flex-space-x-2 w-full";
  const vertStyle = "flex-space-y-2";
  const style = verticalCollapse ? {
    writingMode: "vertical-rl",
    textOrientation: "mixed"
  } : {};
  return /* @__PURE__ */ import_react8.default.createElement(
    "nav",
    {
      className: `${commonStyle} ${verticalCollapse ? vertStyle : horizStyle}`,
      "aria-label": "Tabs",
      style
    },
    options2.map(({ label, id, icon }) => {
      const style2 = id === selected ? "bg-primary-50 text-gray-700" : "text-gray-400 hover:text-gray-700";
      return /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          key: id,
          onClick: () => handleSelectionChange(id),
          className: `${style2} select-none rounded-md px-3 py-2 text-sm font-medium cursor-pointer flex-row whitespace-nowrap`
        },
        import_react8.default.createElement(icon, { className: iconStyle2 }),
        /* @__PURE__ */ import_react8.default.createElement("span", { className: "align-bottom" }, label)
      );
    })
  );
};
var JobEditor_default = ({
  adaptor,
  source,
  disabled,
  metadata,
  onSourceChanged
}) => {
  const [vertical, setVertical] = (0, import_react8.useState)(
    () => settings["lightning.job-editor.orientation" /* ORIENTATION */] === "v"
  );
  const [showPanel, setShowPanel] = (0, import_react8.useState)(
    () => settings["lightning.job-editor.showPanel" /* SHOW_PANEL */]
  );
  const [selectedTab, setSelectedTab] = (0, import_react8.useState)("docs");
  const toggleOrientiation = (0, import_react8.useCallback)(() => {
    setVertical(!vertical);
    resize();
    settings["lightning.job-editor.orientation" /* ORIENTATION */] = vertical ? "h" : "v";
    persistSettings();
  }, [vertical]);
  const toggleShowPanel = (0, import_react8.useCallback)(() => {
    setShowPanel(!showPanel);
    resize();
    settings["lightning.job-editor.showPanel" /* SHOW_PANEL */] = !showPanel;
    persistSettings();
  }, [showPanel]);
  const handleSelectionChange = (newSelection) => {
    setSelectedTab(newSelection);
    if (!showPanel) {
      toggleShowPanel();
    }
  };
  const resize = () => {
    setTimeout(() => {
      document.dispatchEvent(new Event("update-layout"));
    }, 2);
  };
  const CollapseIcon = (0, import_react8.useMemo)(() => {
    if (vertical) {
      return showPanel ? ChevronDownIcon_default : ChevronUpIcon_default;
    } else {
      return showPanel ? ChevronRightIcon_default : ChevronLeftIcon_default;
    }
  }, [vertical, showPanel]);
  return /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null, /* @__PURE__ */ import_react8.default.createElement("div", { className: "cursor-pointer" }), /* @__PURE__ */ import_react8.default.createElement("div", { className: `flex h-full flex-${vertical ? "col" : "row"}` }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "flex-1 rounded-md border border-secondary-300 shadow-sm bg-vs-dark" }, /* @__PURE__ */ import_react8.default.createElement(
    Editor,
    {
      source,
      adaptor,
      metadata: metadata === true ? void 0 : metadata,
      disabled,
      onChange: onSourceChanged
    }
  )), /* @__PURE__ */ import_react8.default.createElement(
    "div",
    {
      className: `${showPanel ? "flex flex-1 flex-col z-10 overflow-auto" : ""} bg-white`
    },
    /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        className: [
          "flex",
          !vertical && !showPanel ? "flex-col-reverse items-center" : "flex-row",
          "w-full",
          "justify-items-end",
          "sticky",
          vertical ? "pt-2" : "pl-2"
        ].join(" ")
      },
      /* @__PURE__ */ import_react8.default.createElement(
        Tabs,
        {
          options: [
            { label: "Docs", id: "docs", icon: DocumentTextIcon_default },
            { label: "Metadata", id: "metadata", icon: SparklesIcon_default }
            // TODO if active, colour it
          ],
          initialSelection: selectedTab,
          onSelectionChange: handleSelectionChange,
          verticalCollapse: !vertical && !showPanel
        }
      ),
      /* @__PURE__ */ import_react8.default.createElement(
        "div",
        {
          className: `flex select-none flex-1 text-right py-2 ${!showPanel && !vertical ? "px-2 flex-col-reverse" : "flex-row"}`
        },
        /* @__PURE__ */ import_react8.default.createElement(
          ViewColumnsIcon_default,
          {
            className: `${iconStyle2} ${!vertical ? "rotate-90" : ""}`,
            onClick: toggleOrientiation,
            title: "Toggle panel orientation"
          }
        ),
        /* @__PURE__ */ import_react8.default.createElement(
          CollapseIcon,
          {
            className: iconStyle2,
            onClick: toggleShowPanel,
            title: "Collapse panel"
          }
        )
      )
    ),
    showPanel && /* @__PURE__ */ import_react8.default.createElement(
      "div",
      {
        className: `flex flex-1 ${vertical ? "overflow-auto" : "overflow-hidden"} px-2`
      },
      selectedTab === "docs" && /* @__PURE__ */ import_react8.default.createElement(Docs_default, { adaptor }),
      selectedTab === "metadata" && /* @__PURE__ */ import_react8.default.createElement(Explorer_default, { adaptor, metadata })
    )
  )));
};
export {
  JobEditor_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vYXNzZXRzL2pzL2pvYi1lZGl0b3IvSm9iRWRpdG9yLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvanMvYWRhcHRvci1kb2NzL0RvY3MudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9qcy9hZGFwdG9yLWRvY3MvY29tcG9uZW50cy9Eb2NzUGFuZWwudHN4IiwgIi4uLy4uLy4uL2Fzc2V0cy9qcy9hZGFwdG9yLWRvY3MvaG9va3MvdXNlRG9jcy50c3giLCAiLi4vLi4vLi4vYXNzZXRzL2pzL2FkYXB0b3ItZG9jcy9jb21wb25lbnRzL3JlbmRlci9GdW5jdGlvbi50c3giLCAiLi4vLi4vLi4vYXNzZXRzL25vZGVfbW9kdWxlcy9tYXJrZWQvbGliL21hcmtlZC5lc20uanMiLCAiLi4vLi4vLi4vYXNzZXRzL2pzL21ldGFkYXRhLWV4cGxvcmVyL0V4cGxvcmVyLnRzeCIsICIuLi8uLi8uLi9hc3NldHMvbm9kZV9tb2R1bGVzL0BoZXJvaWNvbnMvcmVhY3QvMjQvc29saWQvZXNtL0luZm9ybWF0aW9uQ2lyY2xlSWNvbi5qcyIsICIuLi8uLi8uLi9hc3NldHMvanMvbWV0YWRhdGEtZXhwbG9yZXIvRW50aXR5LnRzeCIsICIuLi8uLi8uLi9hc3NldHMvanMvbWV0YWRhdGEtZXhwbG9yZXIvbWFwLWNoaWxkcmVuLnRzIiwgIi4uLy4uLy4uL2Fzc2V0cy9qcy9tZXRhZGF0YS1leHBsb3Jlci9FbXB0eS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIFZpZXdDb2x1bW5zSWNvbixcbiAgQ2hldnJvbkxlZnRJY29uLFxuICBDaGV2cm9uUmlnaHRJY29uLFxuICBDaGV2cm9uVXBJY29uLFxuICBDaGV2cm9uRG93bkljb24sXG4gIERvY3VtZW50VGV4dEljb24sXG4gIFNwYXJrbGVzSWNvbixcbn0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJztcblxuaW1wb3J0IERvY3MgZnJvbSAnLi4vYWRhcHRvci1kb2NzL0RvY3MnO1xuaW1wb3J0IEVkaXRvciBmcm9tICcuLi9lZGl0b3IvRWRpdG9yJztcbmltcG9ydCBNZXRhZGF0YSBmcm9tICcuLi9tZXRhZGF0YS1leHBsb3Jlci9FeHBsb3Jlcic7XG5cbmVudW0gU2V0dGluZ3NLZXlzIHtcbiAgT1JJRU5UQVRJT04gPSAnbGlnaHRuaW5nLmpvYi1lZGl0b3Iub3JpZW50YXRpb24nLFxuICBTSE9XX1BBTkVMID0gJ2xpZ2h0bmluZy5qb2ItZWRpdG9yLnNob3dQYW5lbCcsXG4gIEFDVElWRV9UQUIgPSAnbGlnaHRuaW5nLmpvYi1lZGl0b3IuYWN0aXZlVGFiJyxcbn1cblxuLy8gVE9ETyBtYXliZSBhIHVzZVBlcnNpc3QoKSBob29rIHdoaWNoIHRha2VzIGRlZmF1bHRzIGFzIGFuIGFyZ3VtZW50IGFuZCByZXR1cm5zIGEpIHRoZSBwZXJzaXN0ZWQgdmFsdWVzIGFuZCBiKSBhIHNldHRlciAoc2hhbGxvdyBtZXJnZSlcbmNvbnN0IHBlcnNpc3RlZFNldHRpbmdzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpZ2h0bmluZy5qb2ItZWRpdG9yLnNldHRpbmdzJyk7XG5jb25zdCBzZXR0aW5ncyA9IHBlcnNpc3RlZFNldHRpbmdzXG4gID8gSlNPTi5wYXJzZShwZXJzaXN0ZWRTZXR0aW5ncylcbiAgOiB7XG4gICAgICBbU2V0dGluZ3NLZXlzLk9SSUVOVEFUSU9OXTogJ2gnLFxuICAgICAgW1NldHRpbmdzS2V5cy5TSE9XX1BBTkVMXTogdHJ1ZSxcbiAgICB9O1xuXG5jb25zdCBwZXJzaXN0U2V0dGluZ3MgPSAoKSA9PlxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAnbGlnaHRuaW5nLmpvYi1lZGl0b3Iuc2V0dGluZ3MnLFxuICAgIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKVxuICApO1xuXG5jb25zdCBpY29uU3R5bGUgPSAnaW5saW5lIGN1cnNvci1wb2ludGVyIGgtNiB3LTYgbXItMSBob3Zlcjp0ZXh0LXByaW1hcnktNjAwJztcblxudHlwZSBUYWJTcGVjID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICBpY29uOiBSZWFjdC5Db21wb25lbnRDbGFzczxSZWFjdC5TVkdQcm9wczxTVkdTVkdFbGVtZW50Pj47XG59O1xuXG50eXBlIFRhYnNQcm9wcyA9IHtcbiAgb3B0aW9uczogVGFiU3BlY1tdO1xuICBvblNlbGVjdGlvbkNoYW5nZT86IChuZXdOYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHZlcnRpY2FsQ29sbGFwc2U6IGJvb2xlYW47XG4gIGluaXRpYWxTZWxlY3Rpb24/OiBTdHJpbmc7XG59O1xuXG5jb25zdCBUYWJzID0gKHtcbiAgb3B0aW9ucyxcbiAgb25TZWxlY3Rpb25DaGFuZ2UsXG4gIHZlcnRpY2FsQ29sbGFwc2UsXG4gIGluaXRpYWxTZWxlY3Rpb24sXG59OiBUYWJzUHJvcHMpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShpbml0aWFsU2VsZWN0aW9uKTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKG5hbWUgIT09IHNlbGVjdGVkKSB7XG4gICAgICBzZXRTZWxlY3RlZChuYW1lKTtcbiAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPy4obmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbW1vblN0eWxlID0gJ2ZsZXgnO1xuICBjb25zdCBob3JpelN0eWxlID0gJ2ZsZXgtc3BhY2UteC0yIHctZnVsbCc7XG4gIGNvbnN0IHZlcnRTdHlsZSA9ICdmbGV4LXNwYWNlLXktMic7XG5cbiAgY29uc3Qgc3R5bGUgPSB2ZXJ0aWNhbENvbGxhcHNlXG4gICAgPyB7XG4gICAgICAgIHdyaXRpbmdNb2RlOiAndmVydGljYWwtcmwnLFxuICAgICAgICB0ZXh0T3JpZW50YXRpb246ICdtaXhlZCcsXG4gICAgICB9XG4gICAgOiB7fTtcblxuICByZXR1cm4gKFxuICAgIDxuYXZcbiAgICAgIGNsYXNzTmFtZT17YCR7Y29tbW9uU3R5bGV9ICR7dmVydGljYWxDb2xsYXBzZSA/IHZlcnRTdHlsZSA6IGhvcml6U3R5bGV9YH1cbiAgICAgIGFyaWEtbGFiZWw9XCJUYWJzXCJcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICA+XG4gICAgICB7b3B0aW9ucy5tYXAoKHsgbGFiZWwsIGlkLCBpY29uIH0pID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPVxuICAgICAgICAgIGlkID09PSBzZWxlY3RlZFxuICAgICAgICAgICAgPyAnYmctcHJpbWFyeS01MCB0ZXh0LWdyYXktNzAwJ1xuICAgICAgICAgICAgOiAndGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktNzAwJztcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VsZWN0aW9uQ2hhbmdlKGlkKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGV9IHNlbGVjdC1ub25lIHJvdW5kZWQtbWQgcHgtMyBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gY3Vyc29yLXBvaW50ZXIgZmxleC1yb3cgd2hpdGVzcGFjZS1ub3dyYXBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KGljb24sIHsgY2xhc3NOYW1lOiBpY29uU3R5bGUgfSl9XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhbGlnbi1ib3R0b21cIj57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG50eXBlIEpvYkVkaXRvclByb3BzID0ge1xuICBhZGFwdG9yOiBzdHJpbmc7XG4gIHNvdXJjZTogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG1ldGFkYXRhPzogb2JqZWN0IHwgdHJ1ZTtcbiAgb25Tb3VyY2VDaGFuZ2VkPzogKHNyYzogc3RyaW5nKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgYWRhcHRvcixcbiAgc291cmNlLFxuICBkaXNhYmxlZCxcbiAgbWV0YWRhdGEsXG4gIG9uU291cmNlQ2hhbmdlZCxcbn06IEpvYkVkaXRvclByb3BzKSA9PiB7XG4gIGNvbnN0IFt2ZXJ0aWNhbCwgc2V0VmVydGljYWxdID0gdXNlU3RhdGUoXG4gICAgKCkgPT4gc2V0dGluZ3NbU2V0dGluZ3NLZXlzLk9SSUVOVEFUSU9OXSA9PT0gJ3YnXG4gICk7XG4gIGNvbnN0IFtzaG93UGFuZWwsIHNldFNob3dQYW5lbF0gPSB1c2VTdGF0ZShcbiAgICAoKSA9PiBzZXR0aW5nc1tTZXR0aW5nc0tleXMuU0hPV19QQU5FTF1cbiAgKTtcbiAgY29uc3QgW3NlbGVjdGVkVGFiLCBzZXRTZWxlY3RlZFRhYl0gPSB1c2VTdGF0ZSgnZG9jcycpO1xuXG4gIGNvbnN0IHRvZ2dsZU9yaWVudGlhdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRWZXJ0aWNhbCghdmVydGljYWwpO1xuICAgIHJlc2l6ZSgpO1xuICAgIHNldHRpbmdzW1NldHRpbmdzS2V5cy5PUklFTlRBVElPTl0gPSB2ZXJ0aWNhbCA/ICdoJyA6ICd2JztcbiAgICBwZXJzaXN0U2V0dGluZ3MoKTtcbiAgfSwgW3ZlcnRpY2FsXSk7XG5cbiAgY29uc3QgdG9nZ2xlU2hvd1BhbmVsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dQYW5lbCghc2hvd1BhbmVsKTtcbiAgICByZXNpemUoKTtcbiAgICBzZXR0aW5nc1tTZXR0aW5nc0tleXMuU0hPV19QQU5FTF0gPSAhc2hvd1BhbmVsO1xuICAgIHBlcnNpc3RTZXR0aW5ncygpO1xuICB9LCBbc2hvd1BhbmVsXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0aW9uQ2hhbmdlID0gKG5ld1NlbGVjdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRUYWIobmV3U2VsZWN0aW9uKTtcbiAgICBpZiAoIXNob3dQYW5lbCkge1xuICAgICAgdG9nZ2xlU2hvd1BhbmVsKCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEZvcmNlIG1vbmFjbyBlZGl0b3IgdG8gcmUtbGF5b3V0XG4gIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd1cGRhdGUtbGF5b3V0JykpO1xuICAgIH0sIDIpO1xuICB9O1xuXG4gIGNvbnN0IENvbGxhcHNlSWNvbiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgcmV0dXJuIHNob3dQYW5lbCA/IENoZXZyb25Eb3duSWNvbiA6IENoZXZyb25VcEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzaG93UGFuZWwgPyBDaGV2cm9uUmlnaHRJY29uIDogQ2hldnJvbkxlZnRJY29uO1xuICAgIH1cbiAgfSwgW3ZlcnRpY2FsLCBzaG93UGFuZWxdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggaC1mdWxsIGZsZXgtJHt2ZXJ0aWNhbCA/ICdjb2wnIDogJ3Jvdyd9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1zZWNvbmRhcnktMzAwIHNoYWRvdy1zbSBiZy12cy1kYXJrXCI+XG4gICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgc291cmNlPXtzb3VyY2V9XG4gICAgICAgICAgICBhZGFwdG9yPXthZGFwdG9yfVxuICAgICAgICAgICAgbWV0YWRhdGE9e21ldGFkYXRhID09PSB0cnVlID8gdW5kZWZpbmVkIDogbWV0YWRhdGF9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25Tb3VyY2VDaGFuZ2VkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgIHNob3dQYW5lbCA/ICdmbGV4IGZsZXgtMSBmbGV4LWNvbCB6LTEwIG92ZXJmbG93LWF1dG8nIDogJydcbiAgICAgICAgICB9IGJnLXdoaXRlYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgICAgICAnZmxleCcsXG4gICAgICAgICAgICAgICF2ZXJ0aWNhbCAmJiAhc2hvd1BhbmVsXG4gICAgICAgICAgICAgICAgPyAnZmxleC1jb2wtcmV2ZXJzZSBpdGVtcy1jZW50ZXInXG4gICAgICAgICAgICAgICAgOiAnZmxleC1yb3cnLFxuICAgICAgICAgICAgICAndy1mdWxsJyxcbiAgICAgICAgICAgICAgJ2p1c3RpZnktaXRlbXMtZW5kJyxcbiAgICAgICAgICAgICAgJ3N0aWNreScsXG4gICAgICAgICAgICAgIHZlcnRpY2FsID8gJ3B0LTInIDogJ3BsLTInLFxuICAgICAgICAgICAgXS5qb2luKCcgJyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdEb2NzJywgaWQ6ICdkb2NzJywgaWNvbjogRG9jdW1lbnRUZXh0SWNvbiB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdNZXRhZGF0YScsIGlkOiAnbWV0YWRhdGEnLCBpY29uOiBTcGFya2xlc0ljb24gfSwgLy8gVE9ETyBpZiBhY3RpdmUsIGNvbG91ciBpdFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBpbml0aWFsU2VsZWN0aW9uPXtzZWxlY3RlZFRhYn1cbiAgICAgICAgICAgICAgb25TZWxlY3Rpb25DaGFuZ2U9e2hhbmRsZVNlbGVjdGlvbkNoYW5nZX1cbiAgICAgICAgICAgICAgdmVydGljYWxDb2xsYXBzZT17IXZlcnRpY2FsICYmICFzaG93UGFuZWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHNlbGVjdC1ub25lIGZsZXgtMSB0ZXh0LXJpZ2h0IHB5LTIgJHtcbiAgICAgICAgICAgICAgICAhc2hvd1BhbmVsICYmICF2ZXJ0aWNhbCA/ICdweC0yIGZsZXgtY29sLXJldmVyc2UnIDogJ2ZsZXgtcm93J1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFZpZXdDb2x1bW5zSWNvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aWNvblN0eWxlfSAkeyF2ZXJ0aWNhbCA/ICdyb3RhdGUtOTAnIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVPcmllbnRpYXRpb259XG4gICAgICAgICAgICAgICAgdGl0bGU9XCJUb2dnbGUgcGFuZWwgb3JpZW50YXRpb25cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29sbGFwc2VJY29uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpY29uU3R5bGV9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd1BhbmVsfVxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29sbGFwc2UgcGFuZWxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Nob3dQYW5lbCAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC0xICR7XG4gICAgICAgICAgICAgICAgdmVydGljYWwgPyAnb3ZlcmZsb3ctYXV0bycgOiAnb3ZlcmZsb3ctaGlkZGVuJ1xuICAgICAgICAgICAgICB9IHB4LTJgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2VsZWN0ZWRUYWIgPT09ICdkb2NzJyAmJiA8RG9jcyBhZGFwdG9yPXthZGFwdG9yfSAvPn1cbiAgICAgICAgICAgICAge3NlbGVjdGVkVGFiID09PSAnbWV0YWRhdGEnICYmIChcbiAgICAgICAgICAgICAgICA8TWV0YWRhdGEgYWRhcHRvcj17YWRhcHRvcn0gbWV0YWRhdGE9e21ldGFkYXRhfSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERvY3NQYW5lbCBmcm9tICcuL2NvbXBvbmVudHMvRG9jc1BhbmVsJztcblxudHlwZSBEb2NzUHJvcHMgPSB7XG4gIGFkYXB0b3I6IHN0cmluZzsgLy8gbmFtZSBvZiB0aGUgYWRhcHRvciB0byBsb2FkLiBha2Egc3BlY2ZpZXIuXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGFkYXB0b3IgfTogRG9jc1Byb3BzKSA9PiB7XG4gIGNvbnN0IGhhbmRsZUluc2VydCA9IHVzZUNhbGxiYWNrKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBlID0gbmV3IEV2ZW50KCdpbnNlcnQtc25pcHBldCcpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBlLnNuaXBwZXQgPSB0ZXh0O1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIDxEb2NzUGFuZWwgc3BlY2lmaWVyPXthZGFwdG9yfSBvbkluc2VydD17aGFuZGxlSW5zZXJ0fSAvPjtcbn0iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgUGFja2FnZURlc2NyaXB0aW9uIH0gZnJvbSAnQG9wZW5mbi9kZXNjcmliZS1wYWNrYWdlJztcbmltcG9ydCB1c2VEb2NzIGZyb20gJy4uL2hvb2tzL3VzZURvY3MnO1xuaW1wb3J0IEZ1bmN0aW9uIGZyb20gJy4vcmVuZGVyL0Z1bmN0aW9uJztcblxudHlwZSBEb2NzUGFuZWxQcm9wcyA9IHtcbiAgc3BlY2lmaWVyPzogc3RyaW5nO1xuICBvbkluc2VydD86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGRvY3NMaW5rID0gKDxwPllvdSBjYW4gY2hlY2sgdGhlIGV4dGVybmFsIGRvY3Mgc2l0ZSBhdCBcbjxhIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTQwMCB1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC0yIGhvdmVyOnRleHQtaW5kaWdvLTUwMCBtbC0yXCIgaHJlZj1cImh0dHBzOi8vZG9jcy5vcGVuZm4ub3JnL2FkYXB0b3JzLyN3aGVyZS10by1maW5kLXRoZW0uXCIgdGFyZ2V0PVwibm9uZVwiPmRvY3Mub3BlbmZuLm9yZy9hZGFwdG9yczwvYT4uXG48L3A+KVxuXG5jb25zdCBEb2NzUGFuZWwgPSAoeyBzcGVjaWZpZXIsIG9uSW5zZXJ0IH06IERvY3NQYW5lbFByb3BzKSA9PiB7XG4gIGlmICghc3BlY2lmaWVyKSB7O1xuICAgIHJldHVybiA8ZGl2Pk5vdGhpbmcgc2VsZWN0ZWQ8L2Rpdj47XG4gIH1cbiAgXG4gIGNvbnN0IHBrZyA9IHVzZURvY3Moc3BlY2lmaWVyKTtcbiAgXG4gIGlmIChwa2cgPT09IG51bGwpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJibG9jayBtLTJcIj5Mb2FkaW5nIGRvY3MuLi48L2Rpdj5cbiAgfVxuICBpZiAocGtnID09PSBmYWxzZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG0tMlwiPlxuICAgICAgICA8cD5Tb3JyeSwgYW4gZXJyb3Igb2NjdXJyZWQgbG9hZGluZyB0aGUgZG9jcyBmb3IgdGhpcyBhZGFwdG9yLjwvcD5cbiAgICAgICAge2RvY3NMaW5rfSAgICBcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCB7IG5hbWUsIHZlcnNpb24sIGZ1bmN0aW9ucyB9ID0gcGtnIGFzIFBhY2thZ2VEZXNjcmlwdGlvbjtcbiAgaWYgKGZ1bmN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBtLTJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxIHRleHQtbGcgZm9udC1ib2xkIHRleHQtc2Vjb25kYXJ5LTcwMCBtYi0yXCI+e25hbWV9ICh7dmVyc2lvbn0pPC9oMT5cbiAgICAgICAgPHA+U29ycnksIGRvY3MgYXJlIHVuYXZhaWxhYmxlIGZvciB0aGlzIGFkYXB0b3IuPC9wPlxuICAgICAgICB7ZG9jc0xpbmt9ICAgIFxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG0tMiB3LWZ1bGwgb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImgxIHRleHQtbGcgZm9udC1ib2xkIHRleHQtc2Vjb25kYXJ5LTcwMCBtYi0yXCI+e25hbWV9ICh7dmVyc2lvbn0pPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBtYi00XCI+VGhlc2UgYXJlIHRoZSBvcGVyYXRpb25zIGF2YWlsYWJsZSBmb3IgdGhpcyBhZGFwdG9yOjwvZGl2PlxuICAgICAge2Z1bmN0aW9uc1xuICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgIGlmIChhLm5hbWUgPiBiLm5hbWUpIHJldHVybiAxO1xuICAgICAgICAgIGVsc2UgaWYgKGEubmFtZSA8IGIubmFtZSkgcmV0dXJuIC0xO1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KVxuICAgICAgICAubWFwKChmbikgPT4gPEZ1bmN0aW9uIGtleT17Zm4ubmFtZX0gZm49e2ZufSBvbkluc2VydD17b25JbnNlcnR9IC8+KX1cbiAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9jc1BhbmVsOyIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVzY3JpYmVQYWNrYWdlLCBQYWNrYWdlRGVzY3JpcHRpb24gfSBmcm9tICdAb3BlbmZuL2Rlc2NyaWJlLXBhY2thZ2UnO1xuXG4vLyBEZXNjcmliZSBwYWNrYWdlIGlzIHNsb3cgcmlnaHQgbm93IGV2ZW4gaWYgZGF0YSBpcyBhdmFpbGFibGVcbi8vIFRoaXMgaW4tbWFtb3J5IGNhY2hlIHdpbGwgaGVscCB3aGVuIHN3aXRjaGluZyB0YWJzIGV0Y1xuY29uc3QgY2FjaGU6IFJlY29yZDxzdHJpbmcsIFBhY2thZ2VEZXNjcmlwdGlvbiB8IG51bGwgfCBmYWxzZT4gPSB7fVxuXG5jb25zdCB1c2VEb2NzID0gKHNwZWNpZmllcjogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IFtkb2NzLCBzZXREb2NzXSA9IHVzZVN0YXRlPFBhY2thZ2VEZXNjcmlwdGlvbiB8IG51bGwgfCBmYWxzZT4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkoc3BlY2lmaWVyKSkge1xuICAgICAgLy8gVE9ETyBpZiB0aGUgY2FjaGUgaXMgbnVsbCwgaXQncyBsb2FkaW5nIGRvY3NcbiAgICAgIC8vIFRvIGF2b2lkIGxvYWRpbmcgdHdpY2UsIHdlIG5lZWQgdG8gcmVnaXN0ZXIgYSBjYWxsYmFja1xuICAgICAgc2V0RG9jcyhjYWNoZVtzcGVjaWZpZXJdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGVbc3BlY2lmaWVyXSA9IG51bGw7XG4gICAgICBkZXNjcmliZVBhY2thZ2Uoc3BlY2lmaWVyLCB7fSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGNhY2hlW3NwZWNpZmllcl0gPSByZXN1bHQ7XG4gICAgICAgIHNldERvY3MocmVzdWx0KTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY2FjaGVbc3BlY2lmaWVyXSA9IGZhbHNlO1xuICAgICAgICBzZXREb2NzKGZhbHNlKVxuICAgICAgfSk7ICBcbiAgICB9XG4gIH0sIFtzcGVjaWZpZXJdKVxuXG4gIHJldHVybiBkb2NzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRG9jczsiLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgRnVuY3Rpb25EZXNjcmlwdGlvbiB9IGZyb20gJ0BvcGVuZm4vZGVzY3JpYmUtcGFja2FnZSc7XG5pbXBvcnQgeyBtYXJrZWQgfSBmcm9tICdtYXJrZWQnO1xuXG50eXBlIFJlbmRlckZ1bmN0aW9uUHJvcHMgPSB7XG4gIGZuOiBGdW5jdGlvbkRlc2NyaXB0aW9uO1xuICBvbkluc2VydD86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbnR5cGUgUHJlQnV0dG9uRnVuY3Rpb25Qcm9wcyA9IHtcbiAgdG9vbHRpcD86IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGRvQ29weSA9IGFzeW5jICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdHlwZSA9IFwidGV4dC9wbGFpblwiO1xuICBjb25zdCBkYXRhID0gW25ldyBDbGlwYm9hcmRJdGVtKHsgW3R5cGVdOiBuZXcgQmxvYihbdGV4dF0sIHsgdHlwZSB9ICl9KV07XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlKGRhdGEpO1xuICB9IGNhdGNoKGUpIHtcbiAgICBhbGVydCgnQ09QWSBGQUlMRUQnKVxuICB9XG59XG5cbmNvbnN0IGdldFNpZ25hdHVyZSA9IChmbjogRnVuY3Rpb25EZXNjcmlwdGlvbikgPT4ge1xuICBjb25zdCBwYXJhbUxpc3Q6IHN0cmluZ1tdID0gZm4ucGFyYW1ldGVycy5tYXAoKHsgbmFtZSB9KSA9PiBuYW1lKTtcbiAgXG5yZXR1cm4gPHNwYW4+XG4gICAge2ZuLm1hZ2ljID8gPHNwYW4gc3R5bGU9e3sgZmxvYXQ6ICdsZWZ0JywgbWFyZ2luTGVmdDogJy0xOHB4JyB9fT5cdTI3Mjg8L3NwYW4+OiAnJ31cbiAgICB7W1xuICAgICAgZm4ubmFtZSxcbiAgICAgICcoJyxcbiAgICAgIHBhcmFtTGlzdC5qb2luKCcsICcpLFxuICAgICAgJyknXG4gICAgXS5qb2luKCcnKX1cbiAgPC9zcGFuPlxufVxuXG5jb25zdCBQcmVCdXR0b24gPSAoeyBsYWJlbCwgb25DbGljaywgdG9vbHRpcCB9OiBQcmVCdXR0b25GdW5jdGlvblByb3BzKSA9PiBcbiAgLy8gVE9ETyBnaXZlIHNvbWUga2luZCBvZiBmZWVkYmFjayBvbiBjbGlja1xuICA8YnV0dG9uXG4gICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy1zbGF0ZS0zMDAgdGV4dC13aGl0ZSBweC0yIHB5LTEgbXItMSB0ZXh0LXhzIGhvdmVyOmJnLXByaW1hcnktNjAwXCJcbiAgICB0aXRsZT17dG9vbHRpcCB8fCAnJ31cbiAgICBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICB7bGFiZWx9XG4gIDwvYnV0dG9uPlxuXG50eXBlIEV4YW1wbGVQcm9wcyA9IHtcbiAgLy8gVE9ETyB0aGUgc3RyaW5nIGZvcm1hdCBpcyBhbHJlYWR5IGRlcHJlY2F0ZWRcbiAgZWc6IHN0cmluZyB8ICB7IGNvZGU6IHN0cmluZywgY2FwdGlvbj86IHN0cmluZyB9O1xuICBvbkluc2VydD86ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEV4YW1wbGUgPSAoeyBlZywgb25JbnNlcnQgfTogRXhhbXBsZVByb3BzKSA9PiB7XG4gIGxldCBjb2RlID0gJyc7XG4gIGxldCBjYXB0aW9uO1xuICBpZiAodHlwZW9mIGVnID09PSAnc3RyaW5nJykge1xuICAgIGNvZGUgPSBlZztcbiAgfSBlbHNlIHtcbiAgICBjb2RlID0gZWcuY29kZTtcbiAgICBjYXB0aW9uID0gZWcuY2FwdGlvbjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gdGV4dC1zZWNvbmRhcnktNzAwIG10LTJcIj5cbiAgICAgICAgRXhhbXBsZXsgY2FwdGlvbiAmJiBgOiAke2NhcHRpb259YH1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJy02cHgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTUgdGV4dC1yaWdodFwiIHN0eWxlPXt7IGhlaWdodDogJzEzcHgnfX0+XG4gICAgICAgICAgPFByZUJ1dHRvbiBsYWJlbD1cIkNPUFlcIiBvbkNsaWNrPXsoKSA9PiBkb0NvcHkoY29kZSl9IHRvb2x0aXA9XCJDb3B5IHRoaXMgZXhhbXBsZSB0byB0aGUgY2xpcGJvYXJkXCIvPlxuICAgICAgICAgIHtvbkluc2VydCAmJiA8UHJlQnV0dG9uIGxhYmVsPVwiQUREXCIgb25DbGljaz17KCkgPT4gb25JbnNlcnQoY29kZSl9IHRvb2x0aXA9XCJBZGQgdGhpcyBzbmlwcGV0IHRvIHRoZSBlbmQgb2YgdGhlIGNvZGVcIi8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHByZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgcGwtNCBwci0zMCBweS0yIG14LTQgbXktMCBmb250LW1vbm8gYmctc2xhdGUtMTAwIGJvcmRlci0yIGJvcmRlci1zbGF0ZS0yMDAgdGV4dC1zbGF0ZS04MDAgbWluLWgtZnVsbCB0ZXh0LXhzIG92ZXJmbG93LXgtYXV0b1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvZGV9XG4gICAgICAgIDwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuY29uc3QgUmVuZGVyRnVuY3Rpb24gPSAoeyBmbiwgb25JbnNlcnQgfTogUmVuZGVyRnVuY3Rpb25Qcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkZXRhaWxzIGNsYXNzTmFtZT1cIm1sLTRcIj5cbiAgICAgIDxzdW1tYXJ5IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1zZWNvbmRhcnktNzAwIG1iLTEgY3Vyc29yLXBvaW50ZXIgbWFya2VyOnRleHQtc2xhdGUtNjAwIG1hcmtlcjp0ZXh0LXNtIHdoaXRlc3BhY2Utbm93cmFwIGhvdmVyOmJnLXNreS01MC81MFwiPlxuICAgICAgICB7Z2V0U2lnbmF0dXJlKGZuKX1cbiAgICAgIDwvc3VtbWFyeT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbWItNCBwbC00XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc21cIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1hcmtlZC5wYXJzZShmbi5kZXNjcmlwdGlvbil9fT48L3A+XG4gICAgICAgIHtmbi5leGFtcGxlcy5tYXAoKGVnLCBpZHgpID0+XG4gICAgICAgICAgPEV4YW1wbGUgZWc9e2VnfSBvbkluc2VydD17b25JbnNlcnR9IGtleT17YCR7Zm4ubmFtZX0tZWctJHtpZHh9YH0gLz5cbiAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kZXRhaWxzPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlckZ1bmN0aW9uOyIsICIvKipcbiAqIG1hcmtlZCB2NC4zLjAgLSBhIG1hcmtkb3duIHBhcnNlclxuICogQ29weXJpZ2h0IChjKSAyMDExLTIwMjMsIENocmlzdG9waGVyIEplZmZyZXkuIChNSVQgTGljZW5zZWQpXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWFya2VkanMvbWFya2VkXG4gKi9cblxuLyoqXG4gKiBETyBOT1QgRURJVCBUSElTIEZJTEVcbiAqIFRoZSBjb2RlIGluIHRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgZnJvbSBmaWxlcyBpbiAuL3NyYy9cbiAqL1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0cygpIHtcbiAgcmV0dXJuIHtcbiAgICBhc3luYzogZmFsc2UsXG4gICAgYmFzZVVybDogbnVsbCxcbiAgICBicmVha3M6IGZhbHNlLFxuICAgIGV4dGVuc2lvbnM6IG51bGwsXG4gICAgZ2ZtOiB0cnVlLFxuICAgIGhlYWRlcklkczogdHJ1ZSxcbiAgICBoZWFkZXJQcmVmaXg6ICcnLFxuICAgIGhpZ2hsaWdodDogbnVsbCxcbiAgICBob29rczogbnVsbCxcbiAgICBsYW5nUHJlZml4OiAnbGFuZ3VhZ2UtJyxcbiAgICBtYW5nbGU6IHRydWUsXG4gICAgcGVkYW50aWM6IGZhbHNlLFxuICAgIHJlbmRlcmVyOiBudWxsLFxuICAgIHNhbml0aXplOiBmYWxzZSxcbiAgICBzYW5pdGl6ZXI6IG51bGwsXG4gICAgc2lsZW50OiBmYWxzZSxcbiAgICBzbWFydHlwYW50czogZmFsc2UsXG4gICAgdG9rZW5pemVyOiBudWxsLFxuICAgIHdhbGtUb2tlbnM6IG51bGwsXG4gICAgeGh0bWw6IGZhbHNlXG4gIH07XG59XG5cbmxldCBkZWZhdWx0cyA9IGdldERlZmF1bHRzKCk7XG5cbmZ1bmN0aW9uIGNoYW5nZURlZmF1bHRzKG5ld0RlZmF1bHRzKSB7XG4gIGRlZmF1bHRzID0gbmV3RGVmYXVsdHM7XG59XG5cbi8qKlxuICogSGVscGVyc1xuICovXG5jb25zdCBlc2NhcGVUZXN0ID0gL1smPD5cIiddLztcbmNvbnN0IGVzY2FwZVJlcGxhY2UgPSBuZXcgUmVnRXhwKGVzY2FwZVRlc3Quc291cmNlLCAnZycpO1xuY29uc3QgZXNjYXBlVGVzdE5vRW5jb2RlID0gL1s8PlwiJ118Jig/ISgjXFxkezEsN318I1tYeF1bYS1mQS1GMC05XXsxLDZ9fFxcdyspOykvO1xuY29uc3QgZXNjYXBlUmVwbGFjZU5vRW5jb2RlID0gbmV3IFJlZ0V4cChlc2NhcGVUZXN0Tm9FbmNvZGUuc291cmNlLCAnZycpO1xuY29uc3QgZXNjYXBlUmVwbGFjZW1lbnRzID0ge1xuICAnJic6ICcmYW1wOycsXG4gICc8JzogJyZsdDsnLFxuICAnPic6ICcmZ3Q7JyxcbiAgJ1wiJzogJyZxdW90OycsXG4gIFwiJ1wiOiAnJiMzOTsnXG59O1xuY29uc3QgZ2V0RXNjYXBlUmVwbGFjZW1lbnQgPSAoY2gpID0+IGVzY2FwZVJlcGxhY2VtZW50c1tjaF07XG5mdW5jdGlvbiBlc2NhcGUoaHRtbCwgZW5jb2RlKSB7XG4gIGlmIChlbmNvZGUpIHtcbiAgICBpZiAoZXNjYXBlVGVzdC50ZXN0KGh0bWwpKSB7XG4gICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKGVzY2FwZVJlcGxhY2UsIGdldEVzY2FwZVJlcGxhY2VtZW50KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGVzY2FwZVRlc3ROb0VuY29kZS50ZXN0KGh0bWwpKSB7XG4gICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKGVzY2FwZVJlcGxhY2VOb0VuY29kZSwgZ2V0RXNjYXBlUmVwbGFjZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBodG1sO1xufVxuXG5jb25zdCB1bmVzY2FwZVRlc3QgPSAvJigjKD86XFxkKyl8KD86I3hbMC05QS1GYS1mXSspfCg/OlxcdyspKTs/L2lnO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gKi9cbmZ1bmN0aW9uIHVuZXNjYXBlKGh0bWwpIHtcbiAgLy8gZXhwbGljaXRseSBtYXRjaCBkZWNpbWFsLCBoZXgsIGFuZCBuYW1lZCBIVE1MIGVudGl0aWVzXG4gIHJldHVybiBodG1sLnJlcGxhY2UodW5lc2NhcGVUZXN0LCAoXywgbikgPT4ge1xuICAgIG4gPSBuLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG4gPT09ICdjb2xvbicpIHJldHVybiAnOic7XG4gICAgaWYgKG4uY2hhckF0KDApID09PSAnIycpIHtcbiAgICAgIHJldHVybiBuLmNoYXJBdCgxKSA9PT0gJ3gnXG4gICAgICAgID8gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChuLnN1YnN0cmluZygyKSwgMTYpKVxuICAgICAgICA6IFN0cmluZy5mcm9tQ2hhckNvZGUoK24uc3Vic3RyaW5nKDEpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9KTtcbn1cblxuY29uc3QgY2FyZXQgPSAvKF58W15cXFtdKVxcXi9nO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nIHwgUmVnRXhwfSByZWdleFxuICogQHBhcmFtIHtzdHJpbmd9IG9wdFxuICovXG5mdW5jdGlvbiBlZGl0KHJlZ2V4LCBvcHQpIHtcbiAgcmVnZXggPSB0eXBlb2YgcmVnZXggPT09ICdzdHJpbmcnID8gcmVnZXggOiByZWdleC5zb3VyY2U7XG4gIG9wdCA9IG9wdCB8fCAnJztcbiAgY29uc3Qgb2JqID0ge1xuICAgIHJlcGxhY2U6IChuYW1lLCB2YWwpID0+IHtcbiAgICAgIHZhbCA9IHZhbC5zb3VyY2UgfHwgdmFsO1xuICAgICAgdmFsID0gdmFsLnJlcGxhY2UoY2FyZXQsICckMScpO1xuICAgICAgcmVnZXggPSByZWdleC5yZXBsYWNlKG5hbWUsIHZhbCk7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG4gICAgZ2V0UmVnZXg6ICgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4LCBvcHQpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIG9iajtcbn1cblxuY29uc3Qgbm9uV29yZEFuZENvbG9uVGVzdCA9IC9bXlxcdzpdL2c7XG5jb25zdCBvcmlnaW5JbmRlcGVuZGVudFVybCA9IC9eJHxeW2Etel1bYS16MC05Ky4tXSo6fF5bPyNdL2k7XG5cbi8qKlxuICogQHBhcmFtIHtib29sZWFufSBzYW5pdGl6ZVxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBocmVmXG4gKi9cbmZ1bmN0aW9uIGNsZWFuVXJsKHNhbml0aXplLCBiYXNlLCBocmVmKSB7XG4gIGlmIChzYW5pdGl6ZSkge1xuICAgIGxldCBwcm90O1xuICAgIHRyeSB7XG4gICAgICBwcm90ID0gZGVjb2RlVVJJQ29tcG9uZW50KHVuZXNjYXBlKGhyZWYpKVxuICAgICAgICAucmVwbGFjZShub25Xb3JkQW5kQ29sb25UZXN0LCAnJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChwcm90LmluZGV4T2YoJ2phdmFzY3JpcHQ6JykgPT09IDAgfHwgcHJvdC5pbmRleE9mKCd2YnNjcmlwdDonKSA9PT0gMCB8fCBwcm90LmluZGV4T2YoJ2RhdGE6JykgPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBpZiAoYmFzZSAmJiAhb3JpZ2luSW5kZXBlbmRlbnRVcmwudGVzdChocmVmKSkge1xuICAgIGhyZWYgPSByZXNvbHZlVXJsKGJhc2UsIGhyZWYpO1xuICB9XG4gIHRyeSB7XG4gICAgaHJlZiA9IGVuY29kZVVSSShocmVmKS5yZXBsYWNlKC8lMjUvZywgJyUnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBocmVmO1xufVxuXG5jb25zdCBiYXNlVXJscyA9IHt9O1xuY29uc3QganVzdERvbWFpbiA9IC9eW146XSs6XFwvKlteL10qJC87XG5jb25zdCBwcm90b2NvbCA9IC9eKFteOl0rOilbXFxzXFxTXSokLztcbmNvbnN0IGRvbWFpbiA9IC9eKFteOl0rOlxcLypbXi9dKilbXFxzXFxTXSokLztcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVxuICogQHBhcmFtIHtzdHJpbmd9IGhyZWZcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVVybChiYXNlLCBocmVmKSB7XG4gIGlmICghYmFzZVVybHNbJyAnICsgYmFzZV0pIHtcbiAgICAvLyB3ZSBjYW4gaWdub3JlIGV2ZXJ5dGhpbmcgaW4gYmFzZSBhZnRlciB0aGUgbGFzdCBzbGFzaCBvZiBpdHMgcGF0aCBjb21wb25lbnQsXG4gICAgLy8gYnV0IHdlIG1pZ2h0IG5lZWQgdG8gYWRkIF90aGF0X1xuICAgIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tM1xuICAgIGlmIChqdXN0RG9tYWluLnRlc3QoYmFzZSkpIHtcbiAgICAgIGJhc2VVcmxzWycgJyArIGJhc2VdID0gYmFzZSArICcvJztcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZVVybHNbJyAnICsgYmFzZV0gPSBydHJpbShiYXNlLCAnLycsIHRydWUpO1xuICAgIH1cbiAgfVxuICBiYXNlID0gYmFzZVVybHNbJyAnICsgYmFzZV07XG4gIGNvbnN0IHJlbGF0aXZlQmFzZSA9IGJhc2UuaW5kZXhPZignOicpID09PSAtMTtcblxuICBpZiAoaHJlZi5zdWJzdHJpbmcoMCwgMikgPT09ICcvLycpIHtcbiAgICBpZiAocmVsYXRpdmVCYXNlKSB7XG4gICAgICByZXR1cm4gaHJlZjtcbiAgICB9XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZShwcm90b2NvbCwgJyQxJykgKyBocmVmO1xuICB9IGVsc2UgaWYgKGhyZWYuY2hhckF0KDApID09PSAnLycpIHtcbiAgICBpZiAocmVsYXRpdmVCYXNlKSB7XG4gICAgICByZXR1cm4gaHJlZjtcbiAgICB9XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZShkb21haW4sICckMScpICsgaHJlZjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZSArIGhyZWY7XG4gIH1cbn1cblxuY29uc3Qgbm9vcFRlc3QgPSB7IGV4ZWM6IGZ1bmN0aW9uIG5vb3BUZXN0KCkge30gfTtcblxuZnVuY3Rpb24gc3BsaXRDZWxscyh0YWJsZVJvdywgY291bnQpIHtcbiAgLy8gZW5zdXJlIHRoYXQgZXZlcnkgY2VsbC1kZWxpbWl0aW5nIHBpcGUgaGFzIGEgc3BhY2VcbiAgLy8gYmVmb3JlIGl0IHRvIGRpc3Rpbmd1aXNoIGl0IGZyb20gYW4gZXNjYXBlZCBwaXBlXG4gIGNvbnN0IHJvdyA9IHRhYmxlUm93LnJlcGxhY2UoL1xcfC9nLCAobWF0Y2gsIG9mZnNldCwgc3RyKSA9PiB7XG4gICAgICBsZXQgZXNjYXBlZCA9IGZhbHNlLFxuICAgICAgICBjdXJyID0gb2Zmc2V0O1xuICAgICAgd2hpbGUgKC0tY3VyciA+PSAwICYmIHN0cltjdXJyXSA9PT0gJ1xcXFwnKSBlc2NhcGVkID0gIWVzY2FwZWQ7XG4gICAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgICAvLyBvZGQgbnVtYmVyIG9mIHNsYXNoZXMgbWVhbnMgfCBpcyBlc2NhcGVkXG4gICAgICAgIC8vIHNvIHdlIGxlYXZlIGl0IGFsb25lXG4gICAgICAgIHJldHVybiAnfCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhZGQgc3BhY2UgYmVmb3JlIHVuZXNjYXBlZCB8XG4gICAgICAgIHJldHVybiAnIHwnO1xuICAgICAgfVxuICAgIH0pLFxuICAgIGNlbGxzID0gcm93LnNwbGl0KC8gXFx8Lyk7XG4gIGxldCBpID0gMDtcblxuICAvLyBGaXJzdC9sYXN0IGNlbGwgaW4gYSByb3cgY2Fubm90IGJlIGVtcHR5IGlmIGl0IGhhcyBubyBsZWFkaW5nL3RyYWlsaW5nIHBpcGVcbiAgaWYgKCFjZWxsc1swXS50cmltKCkpIHsgY2VsbHMuc2hpZnQoKTsgfVxuICBpZiAoY2VsbHMubGVuZ3RoID4gMCAmJiAhY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV0udHJpbSgpKSB7IGNlbGxzLnBvcCgpOyB9XG5cbiAgaWYgKGNlbGxzLmxlbmd0aCA+IGNvdW50KSB7XG4gICAgY2VsbHMuc3BsaWNlKGNvdW50KTtcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoY2VsbHMubGVuZ3RoIDwgY291bnQpIGNlbGxzLnB1c2goJycpO1xuICB9XG5cbiAgZm9yICg7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgIC8vIGxlYWRpbmcgb3IgdHJhaWxpbmcgd2hpdGVzcGFjZSBpcyBpZ25vcmVkIHBlciB0aGUgZ2ZtIHNwZWNcbiAgICBjZWxsc1tpXSA9IGNlbGxzW2ldLnRyaW0oKS5yZXBsYWNlKC9cXFxcXFx8L2csICd8Jyk7XG4gIH1cbiAgcmV0dXJuIGNlbGxzO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0cmFpbGluZyAnYydzLiBFcXVpdmFsZW50IHRvIHN0ci5yZXBsYWNlKC9jKiQvLCAnJykuXG4gKiAvYyokLyBpcyB2dWxuZXJhYmxlIHRvIFJFRE9TLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGludmVydCBSZW1vdmUgc3VmZml4IG9mIG5vbi1jIGNoYXJzIGluc3RlYWQuIERlZmF1bHQgZmFsc2V5LlxuICovXG5mdW5jdGlvbiBydHJpbShzdHIsIGMsIGludmVydCkge1xuICBjb25zdCBsID0gc3RyLmxlbmd0aDtcbiAgaWYgKGwgPT09IDApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBMZW5ndGggb2Ygc3VmZml4IG1hdGNoaW5nIHRoZSBpbnZlcnQgY29uZGl0aW9uLlxuICBsZXQgc3VmZkxlbiA9IDA7XG5cbiAgLy8gU3RlcCBsZWZ0IHVudGlsIHdlIGZhaWwgdG8gbWF0Y2ggdGhlIGludmVydCBjb25kaXRpb24uXG4gIHdoaWxlIChzdWZmTGVuIDwgbCkge1xuICAgIGNvbnN0IGN1cnJDaGFyID0gc3RyLmNoYXJBdChsIC0gc3VmZkxlbiAtIDEpO1xuICAgIGlmIChjdXJyQ2hhciA9PT0gYyAmJiAhaW52ZXJ0KSB7XG4gICAgICBzdWZmTGVuKys7XG4gICAgfSBlbHNlIGlmIChjdXJyQ2hhciAhPT0gYyAmJiBpbnZlcnQpIHtcbiAgICAgIHN1ZmZMZW4rKztcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0ci5zbGljZSgwLCBsIC0gc3VmZkxlbik7XG59XG5cbmZ1bmN0aW9uIGZpbmRDbG9zaW5nQnJhY2tldChzdHIsIGIpIHtcbiAgaWYgKHN0ci5pbmRleE9mKGJbMV0pID09PSAtMSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBjb25zdCBsID0gc3RyLmxlbmd0aDtcbiAgbGV0IGxldmVsID0gMCxcbiAgICBpID0gMDtcbiAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoc3RyW2ldID09PSAnXFxcXCcpIHtcbiAgICAgIGkrKztcbiAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gYlswXSkge1xuICAgICAgbGV2ZWwrKztcbiAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gYlsxXSkge1xuICAgICAgbGV2ZWwtLTtcbiAgICAgIGlmIChsZXZlbCA8IDApIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gY2hlY2tTYW5pdGl6ZURlcHJlY2F0aW9uKG9wdCkge1xuICBpZiAob3B0ICYmIG9wdC5zYW5pdGl6ZSAmJiAhb3B0LnNpbGVudCkge1xuICAgIGNvbnNvbGUud2FybignbWFya2VkKCk6IHNhbml0aXplIGFuZCBzYW5pdGl6ZXIgcGFyYW1ldGVycyBhcmUgZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDAuNy4wLCBzaG91bGQgbm90IGJlIHVzZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlLiBSZWFkIG1vcmUgaGVyZTogaHR0cHM6Ly9tYXJrZWQuanMub3JnLyMvVVNJTkdfQURWQU5DRUQubWQjb3B0aW9ucycpO1xuICB9XG59XG5cbi8vIGNvcGllZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NDUwMTEzLzgwNjc3N1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVyblxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKi9cbmZ1bmN0aW9uIHJlcGVhdFN0cmluZyhwYXR0ZXJuLCBjb3VudCkge1xuICBpZiAoY291bnQgPCAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGxldCByZXN1bHQgPSAnJztcbiAgd2hpbGUgKGNvdW50ID4gMSkge1xuICAgIGlmIChjb3VudCAmIDEpIHtcbiAgICAgIHJlc3VsdCArPSBwYXR0ZXJuO1xuICAgIH1cbiAgICBjb3VudCA+Pj0gMTtcbiAgICBwYXR0ZXJuICs9IHBhdHRlcm47XG4gIH1cbiAgcmV0dXJuIHJlc3VsdCArIHBhdHRlcm47XG59XG5cbmZ1bmN0aW9uIG91dHB1dExpbmsoY2FwLCBsaW5rLCByYXcsIGxleGVyKSB7XG4gIGNvbnN0IGhyZWYgPSBsaW5rLmhyZWY7XG4gIGNvbnN0IHRpdGxlID0gbGluay50aXRsZSA/IGVzY2FwZShsaW5rLnRpdGxlKSA6IG51bGw7XG4gIGNvbnN0IHRleHQgPSBjYXBbMV0ucmVwbGFjZSgvXFxcXChbXFxbXFxdXSkvZywgJyQxJyk7XG5cbiAgaWYgKGNhcFswXS5jaGFyQXQoMCkgIT09ICchJykge1xuICAgIGxleGVyLnN0YXRlLmluTGluayA9IHRydWU7XG4gICAgY29uc3QgdG9rZW4gPSB7XG4gICAgICB0eXBlOiAnbGluaycsXG4gICAgICByYXcsXG4gICAgICBocmVmLFxuICAgICAgdGl0bGUsXG4gICAgICB0ZXh0LFxuICAgICAgdG9rZW5zOiBsZXhlci5pbmxpbmVUb2tlbnModGV4dClcbiAgICB9O1xuICAgIGxleGVyLnN0YXRlLmluTGluayA9IGZhbHNlO1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuICByZXR1cm4ge1xuICAgIHR5cGU6ICdpbWFnZScsXG4gICAgcmF3LFxuICAgIGhyZWYsXG4gICAgdGl0bGUsXG4gICAgdGV4dDogZXNjYXBlKHRleHQpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGluZGVudENvZGVDb21wZW5zYXRpb24ocmF3LCB0ZXh0KSB7XG4gIGNvbnN0IG1hdGNoSW5kZW50VG9Db2RlID0gcmF3Lm1hdGNoKC9eKFxccyspKD86YGBgKS8pO1xuXG4gIGlmIChtYXRjaEluZGVudFRvQ29kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgY29uc3QgaW5kZW50VG9Db2RlID0gbWF0Y2hJbmRlbnRUb0NvZGVbMV07XG5cbiAgcmV0dXJuIHRleHRcbiAgICAuc3BsaXQoJ1xcbicpXG4gICAgLm1hcChub2RlID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoSW5kZW50SW5Ob2RlID0gbm9kZS5tYXRjaCgvXlxccysvKTtcbiAgICAgIGlmIChtYXRjaEluZGVudEluTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgW2luZGVudEluTm9kZV0gPSBtYXRjaEluZGVudEluTm9kZTtcblxuICAgICAgaWYgKGluZGVudEluTm9kZS5sZW5ndGggPj0gaW5kZW50VG9Db2RlLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbm9kZS5zbGljZShpbmRlbnRUb0NvZGUubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSlcbiAgICAuam9pbignXFxuJyk7XG59XG5cbi8qKlxuICogVG9rZW5pemVyXG4gKi9cbmNsYXNzIFRva2VuaXplciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IGRlZmF1bHRzO1xuICB9XG5cbiAgc3BhY2Uoc3JjKSB7XG4gICAgY29uc3QgY2FwID0gdGhpcy5ydWxlcy5ibG9jay5uZXdsaW5lLmV4ZWMoc3JjKTtcbiAgICBpZiAoY2FwICYmIGNhcFswXS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnc3BhY2UnLFxuICAgICAgICByYXc6IGNhcFswXVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBjb2RlKHNyYykge1xuICAgIGNvbnN0IGNhcCA9IHRoaXMucnVsZXMuYmxvY2suY29kZS5leGVjKHNyYyk7XG4gICAgaWYgKGNhcCkge1xuICAgICAgY29uc3QgdGV4dCA9IGNhcFswXS5yZXBsYWNlKC9eIHsxLDR9L2dtLCAnJyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnY29kZScsXG4gICAgICAgIHJhdzogY2FwWzBdLFxuICAgICAgICBjb2RlQmxvY2tTdHlsZTogJ2luZGVudGVkJyxcbiAgICAgICAgdGV4dDogIXRoaXMub3B0aW9ucy5wZWRhbnRpY1xuICAgICAgICAgID8gcnRyaW0odGV4dCwgJ1xcbicpXG4gICAgICAgICAgOiB0ZXh0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZlbmNlcyhzcmMpIHtcbiAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrLmZlbmNlcy5leGVjKHNyYyk7XG4gICAgaWYgKGNhcCkge1xuICAgICAgY29uc3QgcmF3ID0gY2FwWzBdO1xuICAgICAgY29uc3QgdGV4dCA9IGluZGVudENvZGVDb21wZW5zYXRpb24ocmF3LCBjYXBbM10gfHwgJycpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnY29kZScsXG4gICAgICAgIHJhdyxcbiAgICAgICAgbGFuZzogY2FwWzJdID8gY2FwWzJdLnRyaW0oKS5yZXBsYWNlKHRoaXMucnVsZXMuaW5saW5lLl9lc2NhcGVzLCAnJDEnKSA6IGNhcFsyXSxcbiAgICAgICAgdGV4dFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBoZWFkaW5nKHNyYykge1xuICAgIGNvbnN0IGNhcCA9IHRoaXMucnVsZXMuYmxvY2suaGVhZGluZy5leGVjKHNyYyk7XG4gICAgaWYgKGNhcCkge1xuICAgICAgbGV0IHRleHQgPSBjYXBbMl0udHJpbSgpO1xuXG4gICAgICAvLyByZW1vdmUgdHJhaWxpbmcgI3NcbiAgICAgIGlmICgvIyQvLnRlc3QodGV4dCkpIHtcbiAgICAgICAgY29uc3QgdHJpbW1lZCA9IHJ0cmltKHRleHQsICcjJyk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGVkYW50aWMpIHtcbiAgICAgICAgICB0ZXh0ID0gdHJpbW1lZC50cmltKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRyaW1tZWQgfHwgLyAkLy50ZXN0KHRyaW1tZWQpKSB7XG4gICAgICAgICAgLy8gQ29tbW9uTWFyayByZXF1aXJlcyBzcGFjZSBiZWZvcmUgdHJhaWxpbmcgI3NcbiAgICAgICAgICB0ZXh0ID0gdHJpbW1lZC50cmltKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgICAgICByYXc6IGNhcFswXSxcbiAgICAgICAgZGVwdGg6IGNhcFsxXS5sZW5ndGgsXG4gICAgICAgIHRleHQsXG4gICAgICAgIHRva2VuczogdGhpcy5sZXhlci5pbmxpbmUodGV4dClcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgaHIoc3JjKSB7XG4gICAgY29uc3QgY2FwID0gdGhpcy5ydWxlcy5ibG9jay5oci5leGVjKHNyYyk7XG4gICAgaWYgKGNhcCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2hyJyxcbiAgICAgICAgcmF3OiBjYXBbMF1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgYmxvY2txdW90ZShzcmMpIHtcbiAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrLmJsb2NrcXVvdGUuZXhlYyhzcmMpO1xuICAgIGlmIChjYXApIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjYXBbMF0ucmVwbGFjZSgvXiAqPlsgXFx0XT8vZ20sICcnKTtcbiAgICAgIGNvbnN0IHRvcCA9IHRoaXMubGV4ZXIuc3RhdGUudG9wO1xuICAgICAgdGhpcy5sZXhlci5zdGF0ZS50b3AgPSB0cnVlO1xuICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5sZXhlci5ibG9ja1Rva2Vucyh0ZXh0KTtcbiAgICAgIHRoaXMubGV4ZXIuc3RhdGUudG9wID0gdG9wO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2Jsb2NrcXVvdGUnLFxuICAgICAgICByYXc6IGNhcFswXSxcbiAgICAgICAgdG9rZW5zLFxuICAgICAgICB0ZXh0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGxpc3Qoc3JjKSB7XG4gICAgbGV0IGNhcCA9IHRoaXMucnVsZXMuYmxvY2subGlzdC5leGVjKHNyYyk7XG4gICAgaWYgKGNhcCkge1xuICAgICAgbGV0IHJhdywgaXN0YXNrLCBpc2NoZWNrZWQsIGluZGVudCwgaSwgYmxhbmtMaW5lLCBlbmRzV2l0aEJsYW5rTGluZSxcbiAgICAgICAgbGluZSwgbmV4dExpbmUsIHJhd0xpbmUsIGl0ZW1Db250ZW50cywgZW5kRWFybHk7XG5cbiAgICAgIGxldCBidWxsID0gY2FwWzFdLnRyaW0oKTtcbiAgICAgIGNvbnN0IGlzb3JkZXJlZCA9IGJ1bGwubGVuZ3RoID4gMTtcblxuICAgICAgY29uc3QgbGlzdCA9IHtcbiAgICAgICAgdHlwZTogJ2xpc3QnLFxuICAgICAgICByYXc6ICcnLFxuICAgICAgICBvcmRlcmVkOiBpc29yZGVyZWQsXG4gICAgICAgIHN0YXJ0OiBpc29yZGVyZWQgPyArYnVsbC5zbGljZSgwLCAtMSkgOiAnJyxcbiAgICAgICAgbG9vc2U6IGZhbHNlLFxuICAgICAgICBpdGVtczogW11cbiAgICAgIH07XG5cbiAgICAgIGJ1bGwgPSBpc29yZGVyZWQgPyBgXFxcXGR7MSw5fVxcXFwke2J1bGwuc2xpY2UoLTEpfWAgOiBgXFxcXCR7YnVsbH1gO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnBlZGFudGljKSB7XG4gICAgICAgIGJ1bGwgPSBpc29yZGVyZWQgPyBidWxsIDogJ1sqKy1dJztcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IG5leHQgbGlzdCBpdGVtXG4gICAgICBjb25zdCBpdGVtUmVnZXggPSBuZXcgUmVnRXhwKGBeKCB7MCwzfSR7YnVsbH0pKCg/OltcXHQgXVteXFxcXG5dKik/KD86XFxcXG58JCkpYCk7XG5cbiAgICAgIC8vIENoZWNrIGlmIGN1cnJlbnQgYnVsbGV0IHBvaW50IGNhbiBzdGFydCBhIG5ldyBMaXN0IEl0ZW1cbiAgICAgIHdoaWxlIChzcmMpIHtcbiAgICAgICAgZW5kRWFybHkgPSBmYWxzZTtcbiAgICAgICAgaWYgKCEoY2FwID0gaXRlbVJlZ2V4LmV4ZWMoc3JjKSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnJ1bGVzLmJsb2NrLmhyLnRlc3Qoc3JjKSkgeyAvLyBFbmQgbGlzdCBpZiBidWxsZXQgd2FzIGFjdHVhbGx5IEhSIChwb3NzaWJseSBtb3ZlIGludG8gaXRlbVJlZ2V4PylcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJhdyA9IGNhcFswXTtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhyYXcubGVuZ3RoKTtcblxuICAgICAgICBsaW5lID0gY2FwWzJdLnNwbGl0KCdcXG4nLCAxKVswXS5yZXBsYWNlKC9eXFx0Ky8sICh0KSA9PiAnICcucmVwZWF0KDMgKiB0Lmxlbmd0aCkpO1xuICAgICAgICBuZXh0TGluZSA9IHNyYy5zcGxpdCgnXFxuJywgMSlbMF07XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wZWRhbnRpYykge1xuICAgICAgICAgIGluZGVudCA9IDI7XG4gICAgICAgICAgaXRlbUNvbnRlbnRzID0gbGluZS50cmltTGVmdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGluZGVudCA9IGNhcFsyXS5zZWFyY2goL1teIF0vKTsgLy8gRmluZCBmaXJzdCBub24tc3BhY2UgY2hhclxuICAgICAgICAgIGluZGVudCA9IGluZGVudCA+IDQgPyAxIDogaW5kZW50OyAvLyBUcmVhdCBpbmRlbnRlZCBjb2RlIGJsb2NrcyAoPiA0IHNwYWNlcykgYXMgaGF2aW5nIG9ubHkgMSBpbmRlbnRcbiAgICAgICAgICBpdGVtQ29udGVudHMgPSBsaW5lLnNsaWNlKGluZGVudCk7XG4gICAgICAgICAgaW5kZW50ICs9IGNhcFsxXS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBibGFua0xpbmUgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIWxpbmUgJiYgL14gKiQvLnRlc3QobmV4dExpbmUpKSB7IC8vIEl0ZW1zIGJlZ2luIHdpdGggYXQgbW9zdCBvbmUgYmxhbmsgbGluZVxuICAgICAgICAgIHJhdyArPSBuZXh0TGluZSArICdcXG4nO1xuICAgICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcobmV4dExpbmUubGVuZ3RoICsgMSk7XG4gICAgICAgICAgZW5kRWFybHkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlbmRFYXJseSkge1xuICAgICAgICAgIGNvbnN0IG5leHRCdWxsZXRSZWdleCA9IG5ldyBSZWdFeHAoYF4gezAsJHtNYXRoLm1pbigzLCBpbmRlbnQgLSAxKX19KD86WyorLV18XFxcXGR7MSw5fVsuKV0pKCg/OlsgXFx0XVteXFxcXG5dKik/KD86XFxcXG58JCkpYCk7XG4gICAgICAgICAgY29uc3QgaHJSZWdleCA9IG5ldyBSZWdFeHAoYF4gezAsJHtNYXRoLm1pbigzLCBpbmRlbnQgLSAxKX19KCg/Oi0gKil7Myx9fCg/Ol8gKil7Myx9fCg/OlxcXFwqICopezMsfSkoPzpcXFxcbit8JClgKTtcbiAgICAgICAgICBjb25zdCBmZW5jZXNCZWdpblJlZ2V4ID0gbmV3IFJlZ0V4cChgXiB7MCwke01hdGgubWluKDMsIGluZGVudCAtIDEpfX0oPzpcXGBcXGBcXGB8fn5+KWApO1xuICAgICAgICAgIGNvbnN0IGhlYWRpbmdCZWdpblJlZ2V4ID0gbmV3IFJlZ0V4cChgXiB7MCwke01hdGgubWluKDMsIGluZGVudCAtIDEpfX0jYCk7XG5cbiAgICAgICAgICAvLyBDaGVjayBpZiBmb2xsb3dpbmcgbGluZXMgc2hvdWxkIGJlIGluY2x1ZGVkIGluIExpc3QgSXRlbVxuICAgICAgICAgIHdoaWxlIChzcmMpIHtcbiAgICAgICAgICAgIHJhd0xpbmUgPSBzcmMuc3BsaXQoJ1xcbicsIDEpWzBdO1xuICAgICAgICAgICAgbmV4dExpbmUgPSByYXdMaW5lO1xuXG4gICAgICAgICAgICAvLyBSZS1hbGlnbiB0byBmb2xsb3cgY29tbW9ubWFyayBuZXN0aW5nIHJ1bGVzXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBlZGFudGljKSB7XG4gICAgICAgICAgICAgIG5leHRMaW5lID0gbmV4dExpbmUucmVwbGFjZSgvXiB7MSw0fSg/PSggezR9KSpbXiBdKS9nLCAnICAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRW5kIGxpc3QgaXRlbSBpZiBmb3VuZCBjb2RlIGZlbmNlc1xuICAgICAgICAgICAgaWYgKGZlbmNlc0JlZ2luUmVnZXgudGVzdChuZXh0TGluZSkpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVuZCBsaXN0IGl0ZW0gaWYgZm91bmQgc3RhcnQgb2YgbmV3IGhlYWRpbmdcbiAgICAgICAgICAgIGlmIChoZWFkaW5nQmVnaW5SZWdleC50ZXN0KG5leHRMaW5lKSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRW5kIGxpc3QgaXRlbSBpZiBmb3VuZCBzdGFydCBvZiBuZXcgYnVsbGV0XG4gICAgICAgICAgICBpZiAobmV4dEJ1bGxldFJlZ2V4LnRlc3QobmV4dExpbmUpKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBIb3Jpem9udGFsIHJ1bGUgZm91bmRcbiAgICAgICAgICAgIGlmIChoclJlZ2V4LnRlc3Qoc3JjKSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5leHRMaW5lLnNlYXJjaCgvW14gXS8pID49IGluZGVudCB8fCAhbmV4dExpbmUudHJpbSgpKSB7IC8vIERlZGVudCBpZiBwb3NzaWJsZVxuICAgICAgICAgICAgICBpdGVtQ29udGVudHMgKz0gJ1xcbicgKyBuZXh0TGluZS5zbGljZShpbmRlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gbm90IGVub3VnaCBpbmRlbnRhdGlvblxuICAgICAgICAgICAgICBpZiAoYmxhbmtMaW5lKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBwYXJhZ3JhcGggY29udGludWF0aW9uIHVubGVzcyBsYXN0IGxpbmUgd2FzIGEgZGlmZmVyZW50IGJsb2NrIGxldmVsIGVsZW1lbnRcbiAgICAgICAgICAgICAgaWYgKGxpbmUuc2VhcmNoKC9bXiBdLykgPj0gNCkgeyAvLyBpbmRlbnRlZCBjb2RlIGJsb2NrXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGZlbmNlc0JlZ2luUmVnZXgudGVzdChsaW5lKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChoZWFkaW5nQmVnaW5SZWdleC50ZXN0KGxpbmUpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGhyUmVnZXgudGVzdChsaW5lKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaXRlbUNvbnRlbnRzICs9ICdcXG4nICsgbmV4dExpbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYmxhbmtMaW5lICYmICFuZXh0TGluZS50cmltKCkpIHsgLy8gQ2hlY2sgaWYgY3VycmVudCBsaW5lIGlzIGJsYW5rXG4gICAgICAgICAgICAgIGJsYW5rTGluZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJhdyArPSByYXdMaW5lICsgJ1xcbic7XG4gICAgICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHJhd0xpbmUubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICBsaW5lID0gbmV4dExpbmUuc2xpY2UoaW5kZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWxpc3QubG9vc2UpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgcHJldmlvdXMgaXRlbSBlbmRlZCB3aXRoIGEgYmxhbmsgbGluZSwgdGhlIGxpc3QgaXMgbG9vc2VcbiAgICAgICAgICBpZiAoZW5kc1dpdGhCbGFua0xpbmUpIHtcbiAgICAgICAgICAgIGxpc3QubG9vc2UgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoL1xcbiAqXFxuICokLy50ZXN0KHJhdykpIHtcbiAgICAgICAgICAgIGVuZHNXaXRoQmxhbmtMaW5lID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3IgdGFzayBsaXN0IGl0ZW1zXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZ2ZtKSB7XG4gICAgICAgICAgaXN0YXNrID0gL15cXFtbIHhYXVxcXSAvLmV4ZWMoaXRlbUNvbnRlbnRzKTtcbiAgICAgICAgICBpZiAoaXN0YXNrKSB7XG4gICAgICAgICAgICBpc2NoZWNrZWQgPSBpc3Rhc2tbMF0gIT09ICdbIF0gJztcbiAgICAgICAgICAgIGl0ZW1Db250ZW50cyA9IGl0ZW1Db250ZW50cy5yZXBsYWNlKC9eXFxbWyB4WF1cXF0gKy8sICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0Lml0ZW1zLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdsaXN0X2l0ZW0nLFxuICAgICAgICAgIHJhdyxcbiAgICAgICAgICB0YXNrOiAhIWlzdGFzayxcbiAgICAgICAgICBjaGVja2VkOiBpc2NoZWNrZWQsXG4gICAgICAgICAgbG9vc2U6IGZhbHNlLFxuICAgICAgICAgIHRleHQ6IGl0ZW1Db250ZW50c1xuICAgICAgICB9KTtcblxuICAgICAgICBsaXN0LnJhdyArPSByYXc7XG4gICAgICB9XG5cbiAgICAgIC8vIERvIG5vdCBjb25zdW1lIG5ld2xpbmVzIGF0IGVuZCBvZiBmaW5hbCBpdGVtLiBBbHRlcm5hdGl2ZWx5LCBtYWtlIGl0ZW1SZWdleCAqc3RhcnQqIHdpdGggYW55IG5ld2xpbmVzIHRvIHNpbXBsaWZ5L3NwZWVkIHVwIGVuZHNXaXRoQmxhbmtMaW5lIGxvZ2ljXG4gICAgICBsaXN0Lml0ZW1zW2xpc3QuaXRlbXMubGVuZ3RoIC0gMV0ucmF3ID0gcmF3LnRyaW1SaWdodCgpO1xuICAgICAgbGlzdC5pdGVtc1tsaXN0Lml0ZW1zLmxlbmd0aCAtIDFdLnRleHQgPSBpdGVtQ29udGVudHMudHJpbVJpZ2h0KCk7XG4gICAgICBsaXN0LnJhdyA9IGxpc3QucmF3LnRyaW1SaWdodCgpO1xuXG4gICAgICBjb25zdCBsID0gbGlzdC5pdGVtcy5sZW5ndGg7XG5cbiAgICAgIC8vIEl0ZW0gY2hpbGQgdG9rZW5zIGhhbmRsZWQgaGVyZSBhdCBlbmQgYmVjYXVzZSB3ZSBuZWVkZWQgdG8gaGF2ZSB0aGUgZmluYWwgaXRlbSB0byB0cmltIGl0IGZpcnN0XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHRoaXMubGV4ZXIuc3RhdGUudG9wID0gZmFsc2U7XG4gICAgICAgIGxpc3QuaXRlbXNbaV0udG9rZW5zID0gdGhpcy5sZXhlci5ibG9ja1Rva2VucyhsaXN0Lml0ZW1zW2ldLnRleHQsIFtdKTtcblxuICAgICAgICBpZiAoIWxpc3QubG9vc2UpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiBsaXN0IHNob3VsZCBiZSBsb29zZVxuICAgICAgICAgIGNvbnN0IHNwYWNlcnMgPSBsaXN0Lml0ZW1zW2ldLnRva2Vucy5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdzcGFjZScpO1xuICAgICAgICAgIGNvbnN0IGhhc011bHRpcGxlTGluZUJyZWFrcyA9IHNwYWNlcnMubGVuZ3RoID4gMCAmJiBzcGFjZXJzLnNvbWUodCA9PiAvXFxuLipcXG4vLnRlc3QodC5yYXcpKTtcblxuICAgICAgICAgIGxpc3QubG9vc2UgPSBoYXNNdWx0aXBsZUxpbmVCcmVha3M7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2V0IGFsbCBpdGVtcyB0byBsb29zZSBpZiBsaXN0IGlzIGxvb3NlXG4gICAgICBpZiAobGlzdC5sb29zZSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgbGlzdC5pdGVtc1tpXS5sb29zZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfVxuICB9XG5cbiAgaHRtbChzcmMpIHtcbiAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrLmh0bWwuZXhlYyhzcmMpO1xuICAgIGlmIChjYXApIHtcbiAgICAgIGNvbnN0IHRva2VuID0ge1xuICAgICAgICB0eXBlOiAnaHRtbCcsXG4gICAgICAgIHJhdzogY2FwWzBdLFxuICAgICAgICBwcmU6ICF0aGlzLm9wdGlvbnMuc2FuaXRpemVyXG4gICAgICAgICAgJiYgKGNhcFsxXSA9PT0gJ3ByZScgfHwgY2FwWzFdID09PSAnc2NyaXB0JyB8fCBjYXBbMV0gPT09ICdzdHlsZScpLFxuICAgICAgICB0ZXh0OiBjYXBbMF1cbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNhbml0aXplKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLm9wdGlvbnMuc2FuaXRpemVyID8gdGhpcy5vcHRpb25zLnNhbml0aXplcihjYXBbMF0pIDogZXNjYXBlKGNhcFswXSk7XG4gICAgICAgIHRva2VuLnR5cGUgPSAncGFyYWdyYXBoJztcbiAgICAgICAgdG9rZW4udGV4dCA9IHRleHQ7XG4gICAgICAgIHRva2VuLnRva2VucyA9IHRoaXMubGV4ZXIuaW5saW5lKHRleHQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cbiAgfVxuXG4gIGRlZihzcmMpIHtcbiAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrLmRlZi5leGVjKHNyYyk7XG4gICAgaWYgKGNhcCkge1xuICAgICAgY29uc3QgdGFnID0gY2FwWzFdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuICAgICAgY29uc3QgaHJlZiA9IGNhcFsyXSA/IGNhcFsyXS5yZXBsYWNlKC9ePCguKik+JC8sICckMScpLnJlcGxhY2UodGhpcy5ydWxlcy5pbmxpbmUuX2VzY2FwZXMsICckMScpIDogJyc7XG4gICAgICBjb25zdCB0aXRsZSA9IGNhcFszXSA/IGNhcFszXS5zdWJzdHJpbmcoMSwgY2FwWzNdLmxlbmd0aCAtIDEpLnJlcGxhY2UodGhpcy5ydWxlcy5pbmxpbmUuX2VzY2FwZXMsICckMScpIDogY2FwWzNdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2RlZicsXG4gICAgICAgIHRhZyxcbiAgICAgICAgcmF3OiBjYXBbMF0sXG4gICAgICAgIGhyZWYsXG4gICAgICAgIHRpdGxlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHRhYmxlKHNyYykge1xuICAgIGNvbnN0IGNhcCA9IHRoaXMucnVsZXMuYmxvY2sudGFibGUuZXhlYyhzcmMpO1xuICAgIGlmIChjYXApIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICAgIGhlYWRlcjogc3BsaXRDZWxscyhjYXBbMV0pLm1hcChjID0+IHsgcmV0dXJuIHsgdGV4dDogYyB9OyB9KSxcbiAgICAgICAgYWxpZ246IGNhcFsyXS5yZXBsYWNlKC9eICp8XFx8ICokL2csICcnKS5zcGxpdCgvICpcXHwgKi8pLFxuICAgICAgICByb3dzOiBjYXBbM10gJiYgY2FwWzNdLnRyaW0oKSA/IGNhcFszXS5yZXBsYWNlKC9cXG5bIFxcdF0qJC8sICcnKS5zcGxpdCgnXFxuJykgOiBbXVxuICAgICAgfTtcblxuICAgICAgaWYgKGl0ZW0uaGVhZGVyLmxlbmd0aCA9PT0gaXRlbS5hbGlnbi5sZW5ndGgpIHtcbiAgICAgICAgaXRlbS5yYXcgPSBjYXBbMF07XG5cbiAgICAgICAgbGV0IGwgPSBpdGVtLmFsaWduLmxlbmd0aDtcbiAgICAgICAgbGV0IGksIGosIGssIHJvdztcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmICgvXiAqLSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ3JpZ2h0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKC9eICo6LSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2NlbnRlcic7XG4gICAgICAgICAgfSBlbHNlIGlmICgvXiAqOi0rICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2xlZnQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsID0gaXRlbS5yb3dzLmxlbmd0aDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGl0ZW0ucm93c1tpXSA9IHNwbGl0Q2VsbHMoaXRlbS5yb3dzW2ldLCBpdGVtLmhlYWRlci5sZW5ndGgpLm1hcChjID0+IHsgcmV0dXJuIHsgdGV4dDogYyB9OyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcnNlIGNoaWxkIHRva2VucyBpbnNpZGUgaGVhZGVycyBhbmQgY2VsbHNcblxuICAgICAgICAvLyBoZWFkZXIgY2hpbGQgdG9rZW5zXG4gICAgICAgIGwgPSBpdGVtLmhlYWRlci5sZW5ndGg7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBsOyBqKyspIHtcbiAgICAgICAgICBpdGVtLmhlYWRlcltqXS50b2tlbnMgPSB0aGlzLmxleGVyLmlubGluZShpdGVtLmhlYWRlcltqXS50ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNlbGwgY2hpbGQgdG9rZW5zXG4gICAgICAgIGwgPSBpdGVtLnJvd3MubGVuZ3RoO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgcm93ID0gaXRlbS5yb3dzW2pdO1xuICAgICAgICAgIGZvciAoayA9IDA7IGsgPCByb3cubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIHJvd1trXS50b2tlbnMgPSB0aGlzLmxleGVyLmlubGluZShyb3dba10udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGhlYWRpbmcoc3JjKSB7XG4gICAgY29uc3QgY2FwID0gdGhpcy5ydWxlcy5ibG9jay5saGVhZGluZy5leGVjKHNyYyk7XG4gICAgaWYgKGNhcCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgICAgICByYXc6IGNhcFswXSxcbiAgICAgICAgZGVwdGg6IGNhcFsyXS5jaGFyQXQoMCkgPT09ICc9JyA/IDEgOiAyLFxuICAgICAgICB0ZXh0OiBjYXBbMV0sXG4gICAgICAgIHRva2VuczogdGhpcy5sZXhlci5pbmxpbmUoY2FwWzFdKVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwYXJhZ3JhcGgoc3JjKSB7XG4gICAgY29uc3QgY2FwID0gdGhpcy5ydWxlcy5ibG9jay5wYXJhZ3JhcGguZXhlYyhzcmMpO1xuICAgIGlmIChjYXApIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjYXBbMV0uY2hhckF0KGNhcFsxXS5sZW5ndGggLSAxKSA9PT0gJ1xcbidcbiAgICAgICAgPyBjYXBbMV0uc2xpY2UoMCwgLTEpXG4gICAgICAgIDogY2FwWzFdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgIHJhdzogY2FwWzBdLFxuICAgICAgICB0ZXh0LFxuICAgICAgICB0b2tlbnM6IHRoaXMubGV4ZXIuaW5saW5lKHRleHQpXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHRleHQoc3JjKSB7XG4gICAgY29uc3QgY2FwID0gdGhpcy5ydWxlcy5ibG9jay50ZXh0LmV4ZWMoc3JjKTtcbiAgICBpZiAoY2FwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHJhdzogY2FwWzBdLFxuICAgICAgICB0ZXh0OiBjYXBbMF0sXG4gICAgICAgIHRva2VuczogdGhpcy5sZXhlci5pbmxpbmUoY2FwWzBdKVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBlc2NhcGUoc3JjKSB7XG4gICAgY29uc3QgY2FwID0gdGhpcy5ydWxlcy5pbmxpbmUuZXNjYXBlLmV4ZWMoc3JjKTtcbiAgICBpZiAoY2FwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnZXNjYXBlJyxcbiAgICAgICAgcmF3OiBjYXBbMF0sXG4gICAgICAgIHRleHQ6IGVzY2FwZShjYXBbMV0pXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHRhZyhzcmMpIHtcbiAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmlubGluZS50YWcuZXhlYyhzcmMpO1xuICAgIGlmIChjYXApIHtcbiAgICAgIGlmICghdGhpcy5sZXhlci5zdGF0ZS5pbkxpbmsgJiYgL148YSAvaS50ZXN0KGNhcFswXSkpIHtcbiAgICAgICAgdGhpcy5sZXhlci5zdGF0ZS5pbkxpbmsgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmxleGVyLnN0YXRlLmluTGluayAmJiAvXjxcXC9hPi9pLnRlc3QoY2FwWzBdKSkge1xuICAgICAgICB0aGlzLmxleGVyLnN0YXRlLmluTGluayA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmxleGVyLnN0YXRlLmluUmF3QmxvY2sgJiYgL148KHByZXxjb2RlfGtiZHxzY3JpcHQpKFxcc3w+KS9pLnRlc3QoY2FwWzBdKSkge1xuICAgICAgICB0aGlzLmxleGVyLnN0YXRlLmluUmF3QmxvY2sgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmxleGVyLnN0YXRlLmluUmF3QmxvY2sgJiYgL148XFwvKHByZXxjb2RlfGtiZHxzY3JpcHQpKFxcc3w+KS9pLnRlc3QoY2FwWzBdKSkge1xuICAgICAgICB0aGlzLmxleGVyLnN0YXRlLmluUmF3QmxvY2sgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogdGhpcy5vcHRpb25zLnNhbml0aXplXG4gICAgICAgICAgPyAndGV4dCdcbiAgICAgICAgICA6ICdodG1sJyxcbiAgICAgICAgcmF3OiBjYXBbMF0sXG4gICAgICAgIGluTGluazogdGhpcy5sZXhlci5zdGF0ZS5pbkxpbmssXG4gICAgICAgIGluUmF3QmxvY2s6IHRoaXMubGV4ZXIuc3RhdGUuaW5SYXdCbG9jayxcbiAgICAgICAgdGV4dDogdGhpcy5vcHRpb25zLnNhbml0aXplXG4gICAgICAgICAgPyAodGhpcy5vcHRpb25zLnNhbml0aXplclxuICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMuc2FuaXRpemVyKGNhcFswXSlcbiAgICAgICAgICAgIDogZXNjYXBlKGNhcFswXSkpXG4gICAgICAgICAgOiBjYXBbMF1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgbGluayhzcmMpIHtcbiAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmlubGluZS5saW5rLmV4ZWMoc3JjKTtcbiAgICBpZiAoY2FwKSB7XG4gICAgICBjb25zdCB0cmltbWVkVXJsID0gY2FwWzJdLnRyaW0oKTtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLnBlZGFudGljICYmIC9ePC8udGVzdCh0cmltbWVkVXJsKSkge1xuICAgICAgICAvLyBjb21tb25tYXJrIHJlcXVpcmVzIG1hdGNoaW5nIGFuZ2xlIGJyYWNrZXRzXG4gICAgICAgIGlmICghKC8+JC8udGVzdCh0cmltbWVkVXJsKSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBlbmRpbmcgYW5nbGUgYnJhY2tldCBjYW5ub3QgYmUgZXNjYXBlZFxuICAgICAgICBjb25zdCBydHJpbVNsYXNoID0gcnRyaW0odHJpbW1lZFVybC5zbGljZSgwLCAtMSksICdcXFxcJyk7XG4gICAgICAgIGlmICgodHJpbW1lZFVybC5sZW5ndGggLSBydHJpbVNsYXNoLmxlbmd0aCkgJSAyID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBmaW5kIGNsb3NpbmcgcGFyZW50aGVzaXNcbiAgICAgICAgY29uc3QgbGFzdFBhcmVuSW5kZXggPSBmaW5kQ2xvc2luZ0JyYWNrZXQoY2FwWzJdLCAnKCknKTtcbiAgICAgICAgaWYgKGxhc3RQYXJlbkluZGV4ID4gLTEpIHtcbiAgICAgICAgICBjb25zdCBzdGFydCA9IGNhcFswXS5pbmRleE9mKCchJykgPT09IDAgPyA1IDogNDtcbiAgICAgICAgICBjb25zdCBsaW5rTGVuID0gc3RhcnQgKyBjYXBbMV0ubGVuZ3RoICsgbGFzdFBhcmVuSW5kZXg7XG4gICAgICAgICAgY2FwWzJdID0gY2FwWzJdLnN1YnN0cmluZygwLCBsYXN0UGFyZW5JbmRleCk7XG4gICAgICAgICAgY2FwWzBdID0gY2FwWzBdLnN1YnN0cmluZygwLCBsaW5rTGVuKS50cmltKCk7XG4gICAgICAgICAgY2FwWzNdID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBocmVmID0gY2FwWzJdO1xuICAgICAgbGV0IHRpdGxlID0gJyc7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnBlZGFudGljKSB7XG4gICAgICAgIC8vIHNwbGl0IHBlZGFudGljIGhyZWYgYW5kIHRpdGxlXG4gICAgICAgIGNvbnN0IGxpbmsgPSAvXihbXidcIl0qW15cXHNdKVxccysoWydcIl0pKC4qKVxcMi8uZXhlYyhocmVmKTtcblxuICAgICAgICBpZiAobGluaykge1xuICAgICAgICAgIGhyZWYgPSBsaW5rWzFdO1xuICAgICAgICAgIHRpdGxlID0gbGlua1szXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGUgPSBjYXBbM10gPyBjYXBbM10uc2xpY2UoMSwgLTEpIDogJyc7XG4gICAgICB9XG5cbiAgICAgIGhyZWYgPSBocmVmLnRyaW0oKTtcbiAgICAgIGlmICgvXjwvLnRlc3QoaHJlZikpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wZWRhbnRpYyAmJiAhKC8+JC8udGVzdCh0cmltbWVkVXJsKSkpIHtcbiAgICAgICAgICAvLyBwZWRhbnRpYyBhbGxvd3Mgc3RhcnRpbmcgYW5nbGUgYnJhY2tldCB3aXRob3V0IGVuZGluZyBhbmdsZSBicmFja2V0XG4gICAgICAgICAgaHJlZiA9IGhyZWYuc2xpY2UoMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHJlZiA9IGhyZWYuc2xpY2UoMSwgLTEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0cHV0TGluayhjYXAsIHtcbiAgICAgICAgaHJlZjogaHJlZiA/IGhyZWYucmVwbGFjZSh0aGlzLnJ1bGVzLmlubGluZS5fZXNjYXBlcywgJyQxJykgOiBocmVmLFxuICAgICAgICB0aXRsZTogdGl0bGUgPyB0aXRsZS5yZXBsYWNlKHRoaXMucnVsZXMuaW5saW5lLl9lc2NhcGVzLCAnJDEnKSA6IHRpdGxlXG4gICAgICB9LCBjYXBbMF0sIHRoaXMubGV4ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJlZmxpbmsoc3JjLCBsaW5rcykge1xuICAgIGxldCBjYXA7XG4gICAgaWYgKChjYXAgPSB0aGlzLnJ1bGVzLmlubGluZS5yZWZsaW5rLmV4ZWMoc3JjKSlcbiAgICAgICAgfHwgKGNhcCA9IHRoaXMucnVsZXMuaW5saW5lLm5vbGluay5leGVjKHNyYykpKSB7XG4gICAgICBsZXQgbGluayA9IChjYXBbMl0gfHwgY2FwWzFdKS5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG4gICAgICBsaW5rID0gbGlua3NbbGluay50b0xvd2VyQ2FzZSgpXTtcbiAgICAgIGlmICghbGluaykge1xuICAgICAgICBjb25zdCB0ZXh0ID0gY2FwWzBdLmNoYXJBdCgwKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgcmF3OiB0ZXh0LFxuICAgICAgICAgIHRleHRcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXRMaW5rKGNhcCwgbGluaywgY2FwWzBdLCB0aGlzLmxleGVyKTtcbiAgICB9XG4gIH1cblxuICBlbVN0cm9uZyhzcmMsIG1hc2tlZFNyYywgcHJldkNoYXIgPSAnJykge1xuICAgIGxldCBtYXRjaCA9IHRoaXMucnVsZXMuaW5saW5lLmVtU3Ryb25nLmxEZWxpbS5leGVjKHNyYyk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuO1xuXG4gICAgLy8gXyBjYW4ndCBiZSBiZXR3ZWVuIHR3byBhbHBoYW51bWVyaWNzLiBcXHB7TH1cXHB7Tn0gaW5jbHVkZXMgbm9uLWVuZ2xpc2ggYWxwaGFiZXQvbnVtYmVycyBhcyB3ZWxsXG4gICAgaWYgKG1hdGNoWzNdICYmIHByZXZDaGFyLm1hdGNoKC9bXFxwe0x9XFxwe059XS91KSkgcmV0dXJuO1xuXG4gICAgY29uc3QgbmV4dENoYXIgPSBtYXRjaFsxXSB8fCBtYXRjaFsyXSB8fCAnJztcblxuICAgIGlmICghbmV4dENoYXIgfHwgKG5leHRDaGFyICYmIChwcmV2Q2hhciA9PT0gJycgfHwgdGhpcy5ydWxlcy5pbmxpbmUucHVuY3R1YXRpb24uZXhlYyhwcmV2Q2hhcikpKSkge1xuICAgICAgY29uc3QgbExlbmd0aCA9IG1hdGNoWzBdLmxlbmd0aCAtIDE7XG4gICAgICBsZXQgckRlbGltLCByTGVuZ3RoLCBkZWxpbVRvdGFsID0gbExlbmd0aCwgbWlkRGVsaW1Ub3RhbCA9IDA7XG5cbiAgICAgIGNvbnN0IGVuZFJlZyA9IG1hdGNoWzBdWzBdID09PSAnKicgPyB0aGlzLnJ1bGVzLmlubGluZS5lbVN0cm9uZy5yRGVsaW1Bc3QgOiB0aGlzLnJ1bGVzLmlubGluZS5lbVN0cm9uZy5yRGVsaW1VbmQ7XG4gICAgICBlbmRSZWcubGFzdEluZGV4ID0gMDtcblxuICAgICAgLy8gQ2xpcCBtYXNrZWRTcmMgdG8gc2FtZSBzZWN0aW9uIG9mIHN0cmluZyBhcyBzcmMgKG1vdmUgdG8gbGV4ZXI/KVxuICAgICAgbWFza2VkU3JjID0gbWFza2VkU3JjLnNsaWNlKC0xICogc3JjLmxlbmd0aCArIGxMZW5ndGgpO1xuXG4gICAgICB3aGlsZSAoKG1hdGNoID0gZW5kUmVnLmV4ZWMobWFza2VkU3JjKSkgIT0gbnVsbCkge1xuICAgICAgICByRGVsaW0gPSBtYXRjaFsxXSB8fCBtYXRjaFsyXSB8fCBtYXRjaFszXSB8fCBtYXRjaFs0XSB8fCBtYXRjaFs1XSB8fCBtYXRjaFs2XTtcblxuICAgICAgICBpZiAoIXJEZWxpbSkgY29udGludWU7IC8vIHNraXAgc2luZ2xlICogaW4gX19hYmMqYWJjX19cblxuICAgICAgICByTGVuZ3RoID0gckRlbGltLmxlbmd0aDtcblxuICAgICAgICBpZiAobWF0Y2hbM10gfHwgbWF0Y2hbNF0pIHsgLy8gZm91bmQgYW5vdGhlciBMZWZ0IERlbGltXG4gICAgICAgICAgZGVsaW1Ub3RhbCArPSByTGVuZ3RoO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoWzVdIHx8IG1hdGNoWzZdKSB7IC8vIGVpdGhlciBMZWZ0IG9yIFJpZ2h0IERlbGltXG4gICAgICAgICAgaWYgKGxMZW5ndGggJSAzICYmICEoKGxMZW5ndGggKyByTGVuZ3RoKSAlIDMpKSB7XG4gICAgICAgICAgICBtaWREZWxpbVRvdGFsICs9IHJMZW5ndGg7XG4gICAgICAgICAgICBjb250aW51ZTsgLy8gQ29tbW9uTWFyayBFbXBoYXNpcyBSdWxlcyA5LTEwXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGVsaW1Ub3RhbCAtPSByTGVuZ3RoO1xuXG4gICAgICAgIGlmIChkZWxpbVRvdGFsID4gMCkgY29udGludWU7IC8vIEhhdmVuJ3QgZm91bmQgZW5vdWdoIGNsb3NpbmcgZGVsaW1pdGVyc1xuXG4gICAgICAgIC8vIFJlbW92ZSBleHRyYSBjaGFyYWN0ZXJzLiAqYSoqKiAtPiAqYSpcbiAgICAgICAgckxlbmd0aCA9IE1hdGgubWluKHJMZW5ndGgsIHJMZW5ndGggKyBkZWxpbVRvdGFsICsgbWlkRGVsaW1Ub3RhbCk7XG5cbiAgICAgICAgY29uc3QgcmF3ID0gc3JjLnNsaWNlKDAsIGxMZW5ndGggKyBtYXRjaC5pbmRleCArIChtYXRjaFswXS5sZW5ndGggLSByRGVsaW0ubGVuZ3RoKSArIHJMZW5ndGgpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBgZW1gIGlmIHNtYWxsZXN0IGRlbGltaXRlciBoYXMgb2RkIGNoYXIgY291bnQuICphKioqXG4gICAgICAgIGlmIChNYXRoLm1pbihsTGVuZ3RoLCByTGVuZ3RoKSAlIDIpIHtcbiAgICAgICAgICBjb25zdCB0ZXh0ID0gcmF3LnNsaWNlKDEsIC0xKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ2VtJyxcbiAgICAgICAgICAgIHJhdyxcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICB0b2tlbnM6IHRoaXMubGV4ZXIuaW5saW5lVG9rZW5zKHRleHQpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSAnc3Ryb25nJyBpZiBzbWFsbGVzdCBkZWxpbWl0ZXIgaGFzIGV2ZW4gY2hhciBjb3VudC4gKiphKioqXG4gICAgICAgIGNvbnN0IHRleHQgPSByYXcuc2xpY2UoMiwgLTIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHR5cGU6ICdzdHJvbmcnLFxuICAgICAgICAgIHJhdyxcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIHRva2VuczogdGhpcy5sZXhlci5pbmxpbmVUb2tlbnModGV4dClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb2Rlc3BhbihzcmMpIHtcbiAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmlubGluZS5jb2RlLmV4ZWMoc3JjKTtcbiAgICBpZiAoY2FwKSB7XG4gICAgICBsZXQgdGV4dCA9IGNhcFsyXS5yZXBsYWNlKC9cXG4vZywgJyAnKTtcbiAgICAgIGNvbnN0IGhhc05vblNwYWNlQ2hhcnMgPSAvW14gXS8udGVzdCh0ZXh0KTtcbiAgICAgIGNvbnN0IGhhc1NwYWNlQ2hhcnNPbkJvdGhFbmRzID0gL14gLy50ZXN0KHRleHQpICYmIC8gJC8udGVzdCh0ZXh0KTtcbiAgICAgIGlmIChoYXNOb25TcGFjZUNoYXJzICYmIGhhc1NwYWNlQ2hhcnNPbkJvdGhFbmRzKSB7XG4gICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygxLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgfVxuICAgICAgdGV4dCA9IGVzY2FwZSh0ZXh0LCB0cnVlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdjb2Rlc3BhbicsXG4gICAgICAgIHJhdzogY2FwWzBdLFxuICAgICAgICB0ZXh0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGJyKHNyYykge1xuICAgIGNvbnN0IGNhcCA9IHRoaXMucnVsZXMuaW5saW5lLmJyLmV4ZWMoc3JjKTtcbiAgICBpZiAoY2FwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnYnInLFxuICAgICAgICByYXc6IGNhcFswXVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBkZWwoc3JjKSB7XG4gICAgY29uc3QgY2FwID0gdGhpcy5ydWxlcy5pbmxpbmUuZGVsLmV4ZWMoc3JjKTtcbiAgICBpZiAoY2FwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnZGVsJyxcbiAgICAgICAgcmF3OiBjYXBbMF0sXG4gICAgICAgIHRleHQ6IGNhcFsyXSxcbiAgICAgICAgdG9rZW5zOiB0aGlzLmxleGVyLmlubGluZVRva2VucyhjYXBbMl0pXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGF1dG9saW5rKHNyYywgbWFuZ2xlKSB7XG4gICAgY29uc3QgY2FwID0gdGhpcy5ydWxlcy5pbmxpbmUuYXV0b2xpbmsuZXhlYyhzcmMpO1xuICAgIGlmIChjYXApIHtcbiAgICAgIGxldCB0ZXh0LCBocmVmO1xuICAgICAgaWYgKGNhcFsyXSA9PT0gJ0AnKSB7XG4gICAgICAgIHRleHQgPSBlc2NhcGUodGhpcy5vcHRpb25zLm1hbmdsZSA/IG1hbmdsZShjYXBbMV0pIDogY2FwWzFdKTtcbiAgICAgICAgaHJlZiA9ICdtYWlsdG86JyArIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ID0gZXNjYXBlKGNhcFsxXSk7XG4gICAgICAgIGhyZWYgPSB0ZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnbGluaycsXG4gICAgICAgIHJhdzogY2FwWzBdLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBocmVmLFxuICAgICAgICB0b2tlbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICByYXc6IHRleHQsXG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHVybChzcmMsIG1hbmdsZSkge1xuICAgIGxldCBjYXA7XG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaW5saW5lLnVybC5leGVjKHNyYykpIHtcbiAgICAgIGxldCB0ZXh0LCBocmVmO1xuICAgICAgaWYgKGNhcFsyXSA9PT0gJ0AnKSB7XG4gICAgICAgIHRleHQgPSBlc2NhcGUodGhpcy5vcHRpb25zLm1hbmdsZSA/IG1hbmdsZShjYXBbMF0pIDogY2FwWzBdKTtcbiAgICAgICAgaHJlZiA9ICdtYWlsdG86JyArIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkbyBleHRlbmRlZCBhdXRvbGluayBwYXRoIHZhbGlkYXRpb25cbiAgICAgICAgbGV0IHByZXZDYXBaZXJvO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgcHJldkNhcFplcm8gPSBjYXBbMF07XG4gICAgICAgICAgY2FwWzBdID0gdGhpcy5ydWxlcy5pbmxpbmUuX2JhY2twZWRhbC5leGVjKGNhcFswXSlbMF07XG4gICAgICAgIH0gd2hpbGUgKHByZXZDYXBaZXJvICE9PSBjYXBbMF0pO1xuICAgICAgICB0ZXh0ID0gZXNjYXBlKGNhcFswXSk7XG4gICAgICAgIGlmIChjYXBbMV0gPT09ICd3d3cuJykge1xuICAgICAgICAgIGhyZWYgPSAnaHR0cDovLycgKyBjYXBbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaHJlZiA9IGNhcFswXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2xpbmsnLFxuICAgICAgICByYXc6IGNhcFswXSxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgaHJlZixcbiAgICAgICAgdG9rZW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgcmF3OiB0ZXh0LFxuICAgICAgICAgICAgdGV4dFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBpbmxpbmVUZXh0KHNyYywgc21hcnR5cGFudHMpIHtcbiAgICBjb25zdCBjYXAgPSB0aGlzLnJ1bGVzLmlubGluZS50ZXh0LmV4ZWMoc3JjKTtcbiAgICBpZiAoY2FwKSB7XG4gICAgICBsZXQgdGV4dDtcbiAgICAgIGlmICh0aGlzLmxleGVyLnN0YXRlLmluUmF3QmxvY2spIHtcbiAgICAgICAgdGV4dCA9IHRoaXMub3B0aW9ucy5zYW5pdGl6ZSA/ICh0aGlzLm9wdGlvbnMuc2FuaXRpemVyID8gdGhpcy5vcHRpb25zLnNhbml0aXplcihjYXBbMF0pIDogZXNjYXBlKGNhcFswXSkpIDogY2FwWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCA9IGVzY2FwZSh0aGlzLm9wdGlvbnMuc21hcnR5cGFudHMgPyBzbWFydHlwYW50cyhjYXBbMF0pIDogY2FwWzBdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgcmF3OiBjYXBbMF0sXG4gICAgICAgIHRleHRcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQmxvY2stTGV2ZWwgR3JhbW1hclxuICovXG5jb25zdCBibG9jayA9IHtcbiAgbmV3bGluZTogL14oPzogKig/OlxcbnwkKSkrLyxcbiAgY29kZTogL14oIHs0fVteXFxuXSsoPzpcXG4oPzogKig/OlxcbnwkKSkqKT8pKy8sXG4gIGZlbmNlczogL14gezAsM30oYHszLH0oPz1bXmBcXG5dKig/OlxcbnwkKSl8fnszLH0pKFteXFxuXSopKD86XFxufCQpKD86fChbXFxzXFxTXSo/KSg/OlxcbnwkKSkoPzogezAsM31cXDFbfmBdKiAqKD89XFxufCQpfCQpLyxcbiAgaHI6IC9eIHswLDN9KCg/Oi1bXFx0IF0qKXszLH18KD86X1sgXFx0XSopezMsfXwoPzpcXCpbIFxcdF0qKXszLH0pKD86XFxuK3wkKS8sXG4gIGhlYWRpbmc6IC9eIHswLDN9KCN7MSw2fSkoPz1cXHN8JCkoLiopKD86XFxuK3wkKS8sXG4gIGJsb2NrcXVvdGU6IC9eKCB7MCwzfT4gPyhwYXJhZ3JhcGh8W15cXG5dKikoPzpcXG58JCkpKy8sXG4gIGxpc3Q6IC9eKCB7MCwzfWJ1bGwpKFsgXFx0XVteXFxuXSs/KT8oPzpcXG58JCkvLFxuICBodG1sOiAnXiB7MCwzfSg/OicgLy8gb3B0aW9uYWwgaW5kZW50YXRpb25cbiAgICArICc8KHNjcmlwdHxwcmV8c3R5bGV8dGV4dGFyZWEpW1xcXFxzPl1bXFxcXHNcXFxcU10qPyg/OjwvXFxcXDE+W15cXFxcbl0qXFxcXG4rfCQpJyAvLyAoMSlcbiAgICArICd8Y29tbWVudFteXFxcXG5dKihcXFxcbit8JCknIC8vICgyKVxuICAgICsgJ3w8XFxcXD9bXFxcXHNcXFxcU10qPyg/OlxcXFw/PlxcXFxuKnwkKScgLy8gKDMpXG4gICAgKyAnfDwhW0EtWl1bXFxcXHNcXFxcU10qPyg/Oj5cXFxcbip8JCknIC8vICg0KVxuICAgICsgJ3w8IVxcXFxbQ0RBVEFcXFxcW1tcXFxcc1xcXFxTXSo/KD86XFxcXF1cXFxcXT5cXFxcbip8JCknIC8vICg1KVxuICAgICsgJ3w8Lz8odGFnKSg/OiArfFxcXFxufC8/PilbXFxcXHNcXFxcU10qPyg/Oig/OlxcXFxuICopK1xcXFxufCQpJyAvLyAoNilcbiAgICArICd8PCg/IXNjcmlwdHxwcmV8c3R5bGV8dGV4dGFyZWEpKFthLXpdW1xcXFx3LV0qKSg/OmF0dHJpYnV0ZSkqPyAqLz8+KD89WyBcXFxcdF0qKD86XFxcXG58JCkpW1xcXFxzXFxcXFNdKj8oPzooPzpcXFxcbiAqKStcXFxcbnwkKScgLy8gKDcpIG9wZW4gdGFnXG4gICAgKyAnfDwvKD8hc2NyaXB0fHByZXxzdHlsZXx0ZXh0YXJlYSlbYS16XVtcXFxcdy1dKlxcXFxzKj4oPz1bIFxcXFx0XSooPzpcXFxcbnwkKSlbXFxcXHNcXFxcU10qPyg/Oig/OlxcXFxuICopK1xcXFxufCQpJyAvLyAoNykgY2xvc2luZyB0YWdcbiAgICArICcpJyxcbiAgZGVmOiAvXiB7MCwzfVxcWyhsYWJlbClcXF06ICooPzpcXG4gKik/KFtePFxcc11bXlxcc10qfDwuKj8+KSg/Oig/OiArKD86XFxuICopP3wgKlxcbiAqKSh0aXRsZSkpPyAqKD86XFxuK3wkKS8sXG4gIHRhYmxlOiBub29wVGVzdCxcbiAgbGhlYWRpbmc6IC9eKCg/Oi58XFxuKD8hXFxuKSkrPylcXG4gezAsM30oPSt8LSspICooPzpcXG4rfCQpLyxcbiAgLy8gcmVnZXggdGVtcGxhdGUsIHBsYWNlaG9sZGVycyB3aWxsIGJlIHJlcGxhY2VkIGFjY29yZGluZyB0byBkaWZmZXJlbnQgcGFyYWdyYXBoXG4gIC8vIGludGVycnVwdGlvbiBydWxlcyBvZiBjb21tb25tYXJrIGFuZCB0aGUgb3JpZ2luYWwgbWFya2Rvd24gc3BlYzpcbiAgX3BhcmFncmFwaDogL14oW15cXG5dKyg/Olxcbig/IWhyfGhlYWRpbmd8bGhlYWRpbmd8YmxvY2txdW90ZXxmZW5jZXN8bGlzdHxodG1sfHRhYmxlfCArXFxuKVteXFxuXSspKikvLFxuICB0ZXh0OiAvXlteXFxuXSsvXG59O1xuXG5ibG9jay5fbGFiZWwgPSAvKD8hXFxzKlxcXSkoPzpcXFxcLnxbXlxcW1xcXVxcXFxdKSsvO1xuYmxvY2suX3RpdGxlID0gLyg/OlwiKD86XFxcXFwiP3xbXlwiXFxcXF0pKlwifCdbXidcXG5dKig/OlxcblteJ1xcbl0rKSpcXG4/J3xcXChbXigpXSpcXCkpLztcbmJsb2NrLmRlZiA9IGVkaXQoYmxvY2suZGVmKVxuICAucmVwbGFjZSgnbGFiZWwnLCBibG9jay5fbGFiZWwpXG4gIC5yZXBsYWNlKCd0aXRsZScsIGJsb2NrLl90aXRsZSlcbiAgLmdldFJlZ2V4KCk7XG5cbmJsb2NrLmJ1bGxldCA9IC8oPzpbKistXXxcXGR7MSw5fVsuKV0pLztcbmJsb2NrLmxpc3RJdGVtU3RhcnQgPSBlZGl0KC9eKCAqKShidWxsKSAqLylcbiAgLnJlcGxhY2UoJ2J1bGwnLCBibG9jay5idWxsZXQpXG4gIC5nZXRSZWdleCgpO1xuXG5ibG9jay5saXN0ID0gZWRpdChibG9jay5saXN0KVxuICAucmVwbGFjZSgvYnVsbC9nLCBibG9jay5idWxsZXQpXG4gIC5yZXBsYWNlKCdocicsICdcXFxcbisoPz1cXFxcMT8oPzooPzotICopezMsfXwoPzpfICopezMsfXwoPzpcXFxcKiAqKXszLH0pKD86XFxcXG4rfCQpKScpXG4gIC5yZXBsYWNlKCdkZWYnLCAnXFxcXG4rKD89JyArIGJsb2NrLmRlZi5zb3VyY2UgKyAnKScpXG4gIC5nZXRSZWdleCgpO1xuXG5ibG9jay5fdGFnID0gJ2FkZHJlc3N8YXJ0aWNsZXxhc2lkZXxiYXNlfGJhc2Vmb250fGJsb2NrcXVvdGV8Ym9keXxjYXB0aW9uJ1xuICArICd8Y2VudGVyfGNvbHxjb2xncm91cHxkZHxkZXRhaWxzfGRpYWxvZ3xkaXJ8ZGl2fGRsfGR0fGZpZWxkc2V0fGZpZ2NhcHRpb24nXG4gICsgJ3xmaWd1cmV8Zm9vdGVyfGZvcm18ZnJhbWV8ZnJhbWVzZXR8aFsxLTZdfGhlYWR8aGVhZGVyfGhyfGh0bWx8aWZyYW1lJ1xuICArICd8bGVnZW5kfGxpfGxpbmt8bWFpbnxtZW51fG1lbnVpdGVtfG1ldGF8bmF2fG5vZnJhbWVzfG9sfG9wdGdyb3VwfG9wdGlvbidcbiAgKyAnfHB8cGFyYW18c2VjdGlvbnxzb3VyY2V8c3VtbWFyeXx0YWJsZXx0Ym9keXx0ZHx0Zm9vdHx0aHx0aGVhZHx0aXRsZXx0cidcbiAgKyAnfHRyYWNrfHVsJztcbmJsb2NrLl9jb21tZW50ID0gLzwhLS0oPyEtPz4pW1xcc1xcU10qPyg/Oi0tPnwkKS87XG5ibG9jay5odG1sID0gZWRpdChibG9jay5odG1sLCAnaScpXG4gIC5yZXBsYWNlKCdjb21tZW50JywgYmxvY2suX2NvbW1lbnQpXG4gIC5yZXBsYWNlKCd0YWcnLCBibG9jay5fdGFnKVxuICAucmVwbGFjZSgnYXR0cmlidXRlJywgLyArW2EtekEtWjpfXVtcXHcuOi1dKig/OiAqPSAqXCJbXlwiXFxuXSpcInwgKj0gKidbXidcXG5dKid8ICo9ICpbXlxcc1wiJz08PmBdKyk/LylcbiAgLmdldFJlZ2V4KCk7XG5cbmJsb2NrLnBhcmFncmFwaCA9IGVkaXQoYmxvY2suX3BhcmFncmFwaClcbiAgLnJlcGxhY2UoJ2hyJywgYmxvY2suaHIpXG4gIC5yZXBsYWNlKCdoZWFkaW5nJywgJyB7MCwzfSN7MSw2fSAnKVxuICAucmVwbGFjZSgnfGxoZWFkaW5nJywgJycpIC8vIHNldGV4IGhlYWRpbmdzIGRvbid0IGludGVycnVwdCBjb21tb25tYXJrIHBhcmFncmFwaHNcbiAgLnJlcGxhY2UoJ3x0YWJsZScsICcnKVxuICAucmVwbGFjZSgnYmxvY2txdW90ZScsICcgezAsM30+JylcbiAgLnJlcGxhY2UoJ2ZlbmNlcycsICcgezAsM30oPzpgezMsfSg/PVteYFxcXFxuXSpcXFxcbil8fnszLH0pW15cXFxcbl0qXFxcXG4nKVxuICAucmVwbGFjZSgnbGlzdCcsICcgezAsM30oPzpbKistXXwxWy4pXSkgJykgLy8gb25seSBsaXN0cyBzdGFydGluZyBmcm9tIDEgY2FuIGludGVycnVwdFxuICAucmVwbGFjZSgnaHRtbCcsICc8Lz8oPzp0YWcpKD86ICt8XFxcXG58Lz8+KXw8KD86c2NyaXB0fHByZXxzdHlsZXx0ZXh0YXJlYXwhLS0pJylcbiAgLnJlcGxhY2UoJ3RhZycsIGJsb2NrLl90YWcpIC8vIHBhcnMgY2FuIGJlIGludGVycnVwdGVkIGJ5IHR5cGUgKDYpIGh0bWwgYmxvY2tzXG4gIC5nZXRSZWdleCgpO1xuXG5ibG9jay5ibG9ja3F1b3RlID0gZWRpdChibG9jay5ibG9ja3F1b3RlKVxuICAucmVwbGFjZSgncGFyYWdyYXBoJywgYmxvY2sucGFyYWdyYXBoKVxuICAuZ2V0UmVnZXgoKTtcblxuLyoqXG4gKiBOb3JtYWwgQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLm5vcm1hbCA9IHsgLi4uYmxvY2sgfTtcblxuLyoqXG4gKiBHRk0gQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLmdmbSA9IHtcbiAgLi4uYmxvY2subm9ybWFsLFxuICB0YWJsZTogJ14gKihbXlxcXFxuIF0uKlxcXFx8LiopXFxcXG4nIC8vIEhlYWRlclxuICAgICsgJyB7MCwzfSg/OlxcXFx8ICopPyg6Py0rOj8gKig/OlxcXFx8ICo6Py0rOj8gKikqKSg/OlxcXFx8ICopPycgLy8gQWxpZ25cbiAgICArICcoPzpcXFxcbigoPzooPyEgKlxcXFxufGhyfGhlYWRpbmd8YmxvY2txdW90ZXxjb2RlfGZlbmNlc3xsaXN0fGh0bWwpLiooPzpcXFxcbnwkKSkqKVxcXFxuKnwkKScgLy8gQ2VsbHNcbn07XG5cbmJsb2NrLmdmbS50YWJsZSA9IGVkaXQoYmxvY2suZ2ZtLnRhYmxlKVxuICAucmVwbGFjZSgnaHInLCBibG9jay5ocilcbiAgLnJlcGxhY2UoJ2hlYWRpbmcnLCAnIHswLDN9I3sxLDZ9ICcpXG4gIC5yZXBsYWNlKCdibG9ja3F1b3RlJywgJyB7MCwzfT4nKVxuICAucmVwbGFjZSgnY29kZScsICcgezR9W15cXFxcbl0nKVxuICAucmVwbGFjZSgnZmVuY2VzJywgJyB7MCwzfSg/OmB7Myx9KD89W15gXFxcXG5dKlxcXFxuKXx+ezMsfSlbXlxcXFxuXSpcXFxcbicpXG4gIC5yZXBsYWNlKCdsaXN0JywgJyB7MCwzfSg/OlsqKy1dfDFbLildKSAnKSAvLyBvbmx5IGxpc3RzIHN0YXJ0aW5nIGZyb20gMSBjYW4gaW50ZXJydXB0XG4gIC5yZXBsYWNlKCdodG1sJywgJzwvPyg/OnRhZykoPzogK3xcXFxcbnwvPz4pfDwoPzpzY3JpcHR8cHJlfHN0eWxlfHRleHRhcmVhfCEtLSknKVxuICAucmVwbGFjZSgndGFnJywgYmxvY2suX3RhZykgLy8gdGFibGVzIGNhbiBiZSBpbnRlcnJ1cHRlZCBieSB0eXBlICg2KSBodG1sIGJsb2Nrc1xuICAuZ2V0UmVnZXgoKTtcblxuYmxvY2suZ2ZtLnBhcmFncmFwaCA9IGVkaXQoYmxvY2suX3BhcmFncmFwaClcbiAgLnJlcGxhY2UoJ2hyJywgYmxvY2suaHIpXG4gIC5yZXBsYWNlKCdoZWFkaW5nJywgJyB7MCwzfSN7MSw2fSAnKVxuICAucmVwbGFjZSgnfGxoZWFkaW5nJywgJycpIC8vIHNldGV4IGhlYWRpbmdzIGRvbid0IGludGVycnVwdCBjb21tb25tYXJrIHBhcmFncmFwaHNcbiAgLnJlcGxhY2UoJ3RhYmxlJywgYmxvY2suZ2ZtLnRhYmxlKSAvLyBpbnRlcnJ1cHQgcGFyYWdyYXBocyB3aXRoIHRhYmxlXG4gIC5yZXBsYWNlKCdibG9ja3F1b3RlJywgJyB7MCwzfT4nKVxuICAucmVwbGFjZSgnZmVuY2VzJywgJyB7MCwzfSg/OmB7Myx9KD89W15gXFxcXG5dKlxcXFxuKXx+ezMsfSlbXlxcXFxuXSpcXFxcbicpXG4gIC5yZXBsYWNlKCdsaXN0JywgJyB7MCwzfSg/OlsqKy1dfDFbLildKSAnKSAvLyBvbmx5IGxpc3RzIHN0YXJ0aW5nIGZyb20gMSBjYW4gaW50ZXJydXB0XG4gIC5yZXBsYWNlKCdodG1sJywgJzwvPyg/OnRhZykoPzogK3xcXFxcbnwvPz4pfDwoPzpzY3JpcHR8cHJlfHN0eWxlfHRleHRhcmVhfCEtLSknKVxuICAucmVwbGFjZSgndGFnJywgYmxvY2suX3RhZykgLy8gcGFycyBjYW4gYmUgaW50ZXJydXB0ZWQgYnkgdHlwZSAoNikgaHRtbCBibG9ja3NcbiAgLmdldFJlZ2V4KCk7XG4vKipcbiAqIFBlZGFudGljIGdyYW1tYXIgKG9yaWdpbmFsIEpvaG4gR3J1YmVyJ3MgbG9vc2UgbWFya2Rvd24gc3BlY2lmaWNhdGlvbilcbiAqL1xuXG5ibG9jay5wZWRhbnRpYyA9IHtcbiAgLi4uYmxvY2subm9ybWFsLFxuICBodG1sOiBlZGl0KFxuICAgICdeICooPzpjb21tZW50ICooPzpcXFxcbnxcXFxccyokKSdcbiAgICArICd8PCh0YWcpW1xcXFxzXFxcXFNdKz88L1xcXFwxPiAqKD86XFxcXG57Mix9fFxcXFxzKiQpJyAvLyBjbG9zZWQgdGFnXG4gICAgKyAnfDx0YWcoPzpcIlteXCJdKlwifFxcJ1teXFwnXSpcXCd8XFxcXHNbXlxcJ1wiLz5cXFxcc10qKSo/Lz8+ICooPzpcXFxcbnsyLH18XFxcXHMqJCkpJylcbiAgICAucmVwbGFjZSgnY29tbWVudCcsIGJsb2NrLl9jb21tZW50KVxuICAgIC5yZXBsYWNlKC90YWcvZywgJyg/ISg/OidcbiAgICAgICsgJ2F8ZW18c3Ryb25nfHNtYWxsfHN8Y2l0ZXxxfGRmbnxhYmJyfGRhdGF8dGltZXxjb2RlfHZhcnxzYW1wfGtiZHxzdWInXG4gICAgICArICd8c3VwfGl8Ynx1fG1hcmt8cnVieXxydHxycHxiZGl8YmRvfHNwYW58YnJ8d2JyfGluc3xkZWx8aW1nKSdcbiAgICAgICsgJ1xcXFxiKVxcXFx3Kyg/ITp8W15cXFxcd1xcXFxzQF0qQClcXFxcYicpXG4gICAgLmdldFJlZ2V4KCksXG4gIGRlZjogL14gKlxcWyhbXlxcXV0rKVxcXTogKjw/KFteXFxzPl0rKT4/KD86ICsoW1wiKF1bXlxcbl0rW1wiKV0pKT8gKig/Olxcbit8JCkvLFxuICBoZWFkaW5nOiAvXigjezEsNn0pKC4qKSg/Olxcbit8JCkvLFxuICBmZW5jZXM6IG5vb3BUZXN0LCAvLyBmZW5jZXMgbm90IHN1cHBvcnRlZFxuICBsaGVhZGluZzogL14oLis/KVxcbiB7MCwzfSg9K3wtKykgKig/Olxcbit8JCkvLFxuICBwYXJhZ3JhcGg6IGVkaXQoYmxvY2subm9ybWFsLl9wYXJhZ3JhcGgpXG4gICAgLnJlcGxhY2UoJ2hyJywgYmxvY2suaHIpXG4gICAgLnJlcGxhY2UoJ2hlYWRpbmcnLCAnICojezEsNn0gKlteXFxuXScpXG4gICAgLnJlcGxhY2UoJ2xoZWFkaW5nJywgYmxvY2subGhlYWRpbmcpXG4gICAgLnJlcGxhY2UoJ2Jsb2NrcXVvdGUnLCAnIHswLDN9PicpXG4gICAgLnJlcGxhY2UoJ3xmZW5jZXMnLCAnJylcbiAgICAucmVwbGFjZSgnfGxpc3QnLCAnJylcbiAgICAucmVwbGFjZSgnfGh0bWwnLCAnJylcbiAgICAuZ2V0UmVnZXgoKVxufTtcblxuLyoqXG4gKiBJbmxpbmUtTGV2ZWwgR3JhbW1hclxuICovXG5jb25zdCBpbmxpbmUgPSB7XG4gIGVzY2FwZTogL15cXFxcKFshXCIjJCUmJygpKissXFwtLi86Ozw9Pj9AXFxbXFxdXFxcXF5fYHt8fX5dKS8sXG4gIGF1dG9saW5rOiAvXjwoc2NoZW1lOlteXFxzXFx4MDAtXFx4MWY8Pl0qfGVtYWlsKT4vLFxuICB1cmw6IG5vb3BUZXN0LFxuICB0YWc6ICdeY29tbWVudCdcbiAgICArICd8XjwvW2EtekEtWl1bXFxcXHc6LV0qXFxcXHMqPicgLy8gc2VsZi1jbG9zaW5nIHRhZ1xuICAgICsgJ3xePFthLXpBLVpdW1xcXFx3LV0qKD86YXR0cmlidXRlKSo/XFxcXHMqLz8+JyAvLyBvcGVuIHRhZ1xuICAgICsgJ3xePFxcXFw/W1xcXFxzXFxcXFNdKj9cXFxcPz4nIC8vIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGUuZy4gPD9waHAgPz5cbiAgICArICd8XjwhW2EtekEtWl0rXFxcXHNbXFxcXHNcXFxcU10qPz4nIC8vIGRlY2xhcmF0aW9uLCBlLmcuIDwhRE9DVFlQRSBodG1sPlxuICAgICsgJ3xePCFcXFxcW0NEQVRBXFxcXFtbXFxcXHNcXFxcU10qP1xcXFxdXFxcXF0+JywgLy8gQ0RBVEEgc2VjdGlvblxuICBsaW5rOiAvXiE/XFxbKGxhYmVsKVxcXVxcKFxccyooaHJlZikoPzpcXHMrKHRpdGxlKSk/XFxzKlxcKS8sXG4gIHJlZmxpbms6IC9eIT9cXFsobGFiZWwpXFxdXFxbKHJlZilcXF0vLFxuICBub2xpbms6IC9eIT9cXFsocmVmKVxcXSg/OlxcW1xcXSk/LyxcbiAgcmVmbGlua1NlYXJjaDogJ3JlZmxpbmt8bm9saW5rKD8hXFxcXCgpJyxcbiAgZW1TdHJvbmc6IHtcbiAgICBsRGVsaW06IC9eKD86XFwqKyg/OihbcHVuY3RfXSl8W15cXHMqXSkpfF5fKyg/OihbcHVuY3QqXSl8KFteXFxzX10pKS8sXG4gICAgLy8gICAgICAgICgxKSBhbmQgKDIpIGNhbiBvbmx5IGJlIGEgUmlnaHQgRGVsaW1pdGVyLiAoMykgYW5kICg0KSBjYW4gb25seSBiZSBMZWZ0LiAgKDUpIGFuZCAoNikgY2FuIGJlIGVpdGhlciBMZWZ0IG9yIFJpZ2h0LlxuICAgIC8vICAgICAgICAgICgpIFNraXAgb3JwaGFuIGluc2lkZSBzdHJvbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpIENvbnN1bWUgdG8gZGVsaW0gICAgICgxKSAjKioqICAgICAgICAgICAgICAgICgyKSBhKioqIywgYSoqKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDMpICMqKiphLCAqKiphICAgICAgICAgICAgICAgICAoNCkgKioqIyAgICAgICAgICAgICAgKDUpICMqKiojICAgICAgICAgICAgICAgICAoNikgYSoqKmFcbiAgICByRGVsaW1Bc3Q6IC9eKD86W15fKlxcXFxdfFxcXFwuKSo/XFxfXFxfKD86W15fKlxcXFxdfFxcXFwuKSo/XFwqKD86W15fKlxcXFxdfFxcXFwuKSo/KD89XFxfXFxfKXwoPzpbXipcXFxcXXxcXFxcLikrKD89W14qXSl8W3B1bmN0X10oXFwqKykoPz1bXFxzXXwkKXwoPzpbXnB1bmN0Kl9cXHNcXFxcXXxcXFxcLikoXFwqKykoPz1bcHVuY3RfXFxzXXwkKXxbcHVuY3RfXFxzXShcXCorKSg/PVtecHVuY3QqX1xcc10pfFtcXHNdKFxcKispKD89W3B1bmN0X10pfFtwdW5jdF9dKFxcKispKD89W3B1bmN0X10pfCg/OltecHVuY3QqX1xcc1xcXFxdfFxcXFwuKShcXCorKSg/PVtecHVuY3QqX1xcc10pLyxcbiAgICByRGVsaW1VbmQ6IC9eKD86W15fKlxcXFxdfFxcXFwuKSo/XFwqXFwqKD86W15fKlxcXFxdfFxcXFwuKSo/XFxfKD86W15fKlxcXFxdfFxcXFwuKSo/KD89XFwqXFwqKXwoPzpbXl9cXFxcXXxcXFxcLikrKD89W15fXSl8W3B1bmN0Kl0oXFxfKykoPz1bXFxzXXwkKXwoPzpbXnB1bmN0Kl9cXHNcXFxcXXxcXFxcLikoXFxfKykoPz1bcHVuY3QqXFxzXXwkKXxbcHVuY3QqXFxzXShcXF8rKSg/PVtecHVuY3QqX1xcc10pfFtcXHNdKFxcXyspKD89W3B1bmN0Kl0pfFtwdW5jdCpdKFxcXyspKD89W3B1bmN0Kl0pLyAvLyBeLSBOb3QgYWxsb3dlZCBmb3IgX1xuICB9LFxuICBjb2RlOiAvXihgKykoW15gXXxbXmBdW1xcc1xcU10qP1teYF0pXFwxKD8hYCkvLFxuICBicjogL14oIHsyLH18XFxcXClcXG4oPyFcXHMqJCkvLFxuICBkZWw6IG5vb3BUZXN0LFxuICB0ZXh0OiAvXihgK3xbXmBdKSg/Oig/PSB7Mix9XFxuKXxbXFxzXFxTXSo/KD86KD89W1xcXFw8IVxcW2AqX118XFxiX3wkKXxbXiBdKD89IHsyLH1cXG4pKSkvLFxuICBwdW5jdHVhdGlvbjogL14oW1xcc3B1bmN0dWF0aW9uXSkvXG59O1xuXG4vLyBsaXN0IG9mIHB1bmN0dWF0aW9uIG1hcmtzIGZyb20gQ29tbW9uTWFyayBzcGVjXG4vLyB3aXRob3V0ICogYW5kIF8gdG8gaGFuZGxlIHRoZSBkaWZmZXJlbnQgZW1waGFzaXMgbWFya2VycyAqIGFuZCBfXG5pbmxpbmUuX3B1bmN0dWF0aW9uID0gJyFcIiMkJSZcXCcoKStcXFxcLS4sLzo7PD0+P0BcXFxcW1xcXFxdYF57fH1+JztcbmlubGluZS5wdW5jdHVhdGlvbiA9IGVkaXQoaW5saW5lLnB1bmN0dWF0aW9uKS5yZXBsYWNlKC9wdW5jdHVhdGlvbi9nLCBpbmxpbmUuX3B1bmN0dWF0aW9uKS5nZXRSZWdleCgpO1xuXG4vLyBzZXF1ZW5jZXMgZW0gc2hvdWxkIHNraXAgb3ZlciBbdGl0bGVdKGxpbmspLCBgY29kZWAsIDxodG1sPlxuaW5saW5lLmJsb2NrU2tpcCA9IC9cXFtbXlxcXV0qP1xcXVxcKFteXFwpXSo/XFwpfGBbXmBdKj9gfDxbXj5dKj8+L2c7XG4vLyBsb29rYmVoaW5kIGlzIG5vdCBhdmFpbGFibGUgb24gU2FmYXJpIGFzIG9mIHZlcnNpb24gMTZcbi8vIGlubGluZS5lc2NhcGVkRW1TdCA9IC8oPzw9KD86XnxbXlxcXFwpKD86XFxcXFteXSkqKVxcXFxbKl9dL2c7XG5pbmxpbmUuZXNjYXBlZEVtU3QgPSAvKD86XnxbXlxcXFxdKSg/OlxcXFxcXFxcKSpcXFxcWypfXS9nO1xuXG5pbmxpbmUuX2NvbW1lbnQgPSBlZGl0KGJsb2NrLl9jb21tZW50KS5yZXBsYWNlKCcoPzotLT58JCknLCAnLS0+JykuZ2V0UmVnZXgoKTtcblxuaW5saW5lLmVtU3Ryb25nLmxEZWxpbSA9IGVkaXQoaW5saW5lLmVtU3Ryb25nLmxEZWxpbSlcbiAgLnJlcGxhY2UoL3B1bmN0L2csIGlubGluZS5fcHVuY3R1YXRpb24pXG4gIC5nZXRSZWdleCgpO1xuXG5pbmxpbmUuZW1TdHJvbmcuckRlbGltQXN0ID0gZWRpdChpbmxpbmUuZW1TdHJvbmcuckRlbGltQXN0LCAnZycpXG4gIC5yZXBsYWNlKC9wdW5jdC9nLCBpbmxpbmUuX3B1bmN0dWF0aW9uKVxuICAuZ2V0UmVnZXgoKTtcblxuaW5saW5lLmVtU3Ryb25nLnJEZWxpbVVuZCA9IGVkaXQoaW5saW5lLmVtU3Ryb25nLnJEZWxpbVVuZCwgJ2cnKVxuICAucmVwbGFjZSgvcHVuY3QvZywgaW5saW5lLl9wdW5jdHVhdGlvbilcbiAgLmdldFJlZ2V4KCk7XG5cbmlubGluZS5fZXNjYXBlcyA9IC9cXFxcKFshXCIjJCUmJygpKissXFwtLi86Ozw9Pj9AXFxbXFxdXFxcXF5fYHt8fX5dKS9nO1xuXG5pbmxpbmUuX3NjaGVtZSA9IC9bYS16QS1aXVthLXpBLVowLTkrLi1dezEsMzF9LztcbmlubGluZS5fZW1haWwgPSAvW2EtekEtWjAtOS4hIyQlJicqKy89P15fYHt8fX4tXSsoQClbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKyg/IVstX10pLztcbmlubGluZS5hdXRvbGluayA9IGVkaXQoaW5saW5lLmF1dG9saW5rKVxuICAucmVwbGFjZSgnc2NoZW1lJywgaW5saW5lLl9zY2hlbWUpXG4gIC5yZXBsYWNlKCdlbWFpbCcsIGlubGluZS5fZW1haWwpXG4gIC5nZXRSZWdleCgpO1xuXG5pbmxpbmUuX2F0dHJpYnV0ZSA9IC9cXHMrW2EtekEtWjpfXVtcXHcuOi1dKig/Olxccyo9XFxzKlwiW15cIl0qXCJ8XFxzKj1cXHMqJ1teJ10qJ3xcXHMqPVxccypbXlxcc1wiJz08PmBdKyk/LztcblxuaW5saW5lLnRhZyA9IGVkaXQoaW5saW5lLnRhZylcbiAgLnJlcGxhY2UoJ2NvbW1lbnQnLCBpbmxpbmUuX2NvbW1lbnQpXG4gIC5yZXBsYWNlKCdhdHRyaWJ1dGUnLCBpbmxpbmUuX2F0dHJpYnV0ZSlcbiAgLmdldFJlZ2V4KCk7XG5cbmlubGluZS5fbGFiZWwgPSAvKD86XFxbKD86XFxcXC58W15cXFtcXF1cXFxcXSkqXFxdfFxcXFwufGBbXmBdKmB8W15cXFtcXF1cXFxcYF0pKj8vO1xuaW5saW5lLl9ocmVmID0gLzwoPzpcXFxcLnxbXlxcbjw+XFxcXF0pKz58W15cXHNcXHgwMC1cXHgxZl0qLztcbmlubGluZS5fdGl0bGUgPSAvXCIoPzpcXFxcXCI/fFteXCJcXFxcXSkqXCJ8Jyg/OlxcXFwnP3xbXidcXFxcXSkqJ3xcXCgoPzpcXFxcXFwpP3xbXilcXFxcXSkqXFwpLztcblxuaW5saW5lLmxpbmsgPSBlZGl0KGlubGluZS5saW5rKVxuICAucmVwbGFjZSgnbGFiZWwnLCBpbmxpbmUuX2xhYmVsKVxuICAucmVwbGFjZSgnaHJlZicsIGlubGluZS5faHJlZilcbiAgLnJlcGxhY2UoJ3RpdGxlJywgaW5saW5lLl90aXRsZSlcbiAgLmdldFJlZ2V4KCk7XG5cbmlubGluZS5yZWZsaW5rID0gZWRpdChpbmxpbmUucmVmbGluaylcbiAgLnJlcGxhY2UoJ2xhYmVsJywgaW5saW5lLl9sYWJlbClcbiAgLnJlcGxhY2UoJ3JlZicsIGJsb2NrLl9sYWJlbClcbiAgLmdldFJlZ2V4KCk7XG5cbmlubGluZS5ub2xpbmsgPSBlZGl0KGlubGluZS5ub2xpbmspXG4gIC5yZXBsYWNlKCdyZWYnLCBibG9jay5fbGFiZWwpXG4gIC5nZXRSZWdleCgpO1xuXG5pbmxpbmUucmVmbGlua1NlYXJjaCA9IGVkaXQoaW5saW5lLnJlZmxpbmtTZWFyY2gsICdnJylcbiAgLnJlcGxhY2UoJ3JlZmxpbmsnLCBpbmxpbmUucmVmbGluaylcbiAgLnJlcGxhY2UoJ25vbGluaycsIGlubGluZS5ub2xpbmspXG4gIC5nZXRSZWdleCgpO1xuXG4vKipcbiAqIE5vcm1hbCBJbmxpbmUgR3JhbW1hclxuICovXG5cbmlubGluZS5ub3JtYWwgPSB7IC4uLmlubGluZSB9O1xuXG4vKipcbiAqIFBlZGFudGljIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLnBlZGFudGljID0ge1xuICAuLi5pbmxpbmUubm9ybWFsLFxuICBzdHJvbmc6IHtcbiAgICBzdGFydDogL15fX3xcXCpcXCovLFxuICAgIG1pZGRsZTogL15fXyg/PVxcUykoW1xcc1xcU10qP1xcUylfXyg/IV8pfF5cXCpcXCooPz1cXFMpKFtcXHNcXFNdKj9cXFMpXFwqXFwqKD8hXFwqKS8sXG4gICAgZW5kQXN0OiAvXFwqXFwqKD8hXFwqKS9nLFxuICAgIGVuZFVuZDogL19fKD8hXykvZ1xuICB9LFxuICBlbToge1xuICAgIHN0YXJ0OiAvXl98XFwqLyxcbiAgICBtaWRkbGU6IC9eKClcXCooPz1cXFMpKFtcXHNcXFNdKj9cXFMpXFwqKD8hXFwqKXxeXyg/PVxcUykoW1xcc1xcU10qP1xcUylfKD8hXykvLFxuICAgIGVuZEFzdDogL1xcKig/IVxcKikvZyxcbiAgICBlbmRVbmQ6IC9fKD8hXykvZ1xuICB9LFxuICBsaW5rOiBlZGl0KC9eIT9cXFsobGFiZWwpXFxdXFwoKC4qPylcXCkvKVxuICAgIC5yZXBsYWNlKCdsYWJlbCcsIGlubGluZS5fbGFiZWwpXG4gICAgLmdldFJlZ2V4KCksXG4gIHJlZmxpbms6IGVkaXQoL14hP1xcWyhsYWJlbClcXF1cXHMqXFxbKFteXFxdXSopXFxdLylcbiAgICAucmVwbGFjZSgnbGFiZWwnLCBpbmxpbmUuX2xhYmVsKVxuICAgIC5nZXRSZWdleCgpXG59O1xuXG4vKipcbiAqIEdGTSBJbmxpbmUgR3JhbW1hclxuICovXG5cbmlubGluZS5nZm0gPSB7XG4gIC4uLmlubGluZS5ub3JtYWwsXG4gIGVzY2FwZTogZWRpdChpbmxpbmUuZXNjYXBlKS5yZXBsYWNlKCddKScsICd+fF0pJykuZ2V0UmVnZXgoKSxcbiAgX2V4dGVuZGVkX2VtYWlsOiAvW0EtWmEtejAtOS5fKy1dKyhAKVthLXpBLVowLTktX10rKD86XFwuW2EtekEtWjAtOS1fXSpbYS16QS1aMC05XSkrKD8hWy1fXSkvLFxuICB1cmw6IC9eKCg/OmZ0cHxodHRwcz8pOlxcL1xcL3x3d3dcXC4pKD86W2EtekEtWjAtOVxcLV0rXFwuPykrW15cXHM8XSp8XmVtYWlsLyxcbiAgX2JhY2twZWRhbDogLyg/OltePyEuLDo7Kl8nXCJ+KCkmXSt8XFwoW14pXSpcXCl8Jig/IVthLXpBLVowLTldKzskKXxbPyEuLDo7Kl8nXCJ+KV0rKD8hJCkpKy8sXG4gIGRlbDogL14ofn4/KSg/PVteXFxzfl0pKFtcXHNcXFNdKj9bXlxcc35dKVxcMSg/PVtefl18JCkvLFxuICB0ZXh0OiAvXihbYH5dK3xbXmB+XSkoPzooPz0gezIsfVxcbil8KD89W2EtekEtWjAtOS4hIyQlJicqK1xcLz0/X2B7XFx8fX4tXStAKXxbXFxzXFxTXSo/KD86KD89W1xcXFw8IVxcW2Aqfl9dfFxcYl98aHR0cHM/OlxcL1xcL3xmdHA6XFwvXFwvfHd3d1xcLnwkKXxbXiBdKD89IHsyLH1cXG4pfFteYS16QS1aMC05LiEjJCUmJyorXFwvPT9fYHtcXHx9fi1dKD89W2EtekEtWjAtOS4hIyQlJicqK1xcLz0/X2B7XFx8fX4tXStAKSkpL1xufTtcblxuaW5saW5lLmdmbS51cmwgPSBlZGl0KGlubGluZS5nZm0udXJsLCAnaScpXG4gIC5yZXBsYWNlKCdlbWFpbCcsIGlubGluZS5nZm0uX2V4dGVuZGVkX2VtYWlsKVxuICAuZ2V0UmVnZXgoKTtcbi8qKlxuICogR0ZNICsgTGluZSBCcmVha3MgSW5saW5lIEdyYW1tYXJcbiAqL1xuXG5pbmxpbmUuYnJlYWtzID0ge1xuICAuLi5pbmxpbmUuZ2ZtLFxuICBicjogZWRpdChpbmxpbmUuYnIpLnJlcGxhY2UoJ3syLH0nLCAnKicpLmdldFJlZ2V4KCksXG4gIHRleHQ6IGVkaXQoaW5saW5lLmdmbS50ZXh0KVxuICAgIC5yZXBsYWNlKCdcXFxcYl8nLCAnXFxcXGJffCB7Mix9XFxcXG4nKVxuICAgIC5yZXBsYWNlKC9cXHsyLFxcfS9nLCAnKicpXG4gICAgLmdldFJlZ2V4KClcbn07XG5cbi8qKlxuICogc21hcnR5cGFudHMgdGV4dCByZXBsYWNlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAqL1xuZnVuY3Rpb24gc21hcnR5cGFudHModGV4dCkge1xuICByZXR1cm4gdGV4dFxuICAgIC8vIGVtLWRhc2hlc1xuICAgIC5yZXBsYWNlKC8tLS0vZywgJ1xcdTIwMTQnKVxuICAgIC8vIGVuLWRhc2hlc1xuICAgIC5yZXBsYWNlKC8tLS9nLCAnXFx1MjAxMycpXG4gICAgLy8gb3BlbmluZyBzaW5nbGVzXG4gICAgLnJlcGxhY2UoLyhefFstXFx1MjAxNC8oXFxbe1wiXFxzXSknL2csICckMVxcdTIwMTgnKVxuICAgIC8vIGNsb3Npbmcgc2luZ2xlcyAmIGFwb3N0cm9waGVzXG4gICAgLnJlcGxhY2UoLycvZywgJ1xcdTIwMTknKVxuICAgIC8vIG9wZW5pbmcgZG91Ymxlc1xuICAgIC5yZXBsYWNlKC8oXnxbLVxcdTIwMTQvKFxcW3tcXHUyMDE4XFxzXSlcIi9nLCAnJDFcXHUyMDFjJylcbiAgICAvLyBjbG9zaW5nIGRvdWJsZXNcbiAgICAucmVwbGFjZSgvXCIvZywgJ1xcdTIwMWQnKVxuICAgIC8vIGVsbGlwc2VzXG4gICAgLnJlcGxhY2UoL1xcLnszfS9nLCAnXFx1MjAyNicpO1xufVxuXG4vKipcbiAqIG1hbmdsZSBlbWFpbCBhZGRyZXNzZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gKi9cbmZ1bmN0aW9uIG1hbmdsZSh0ZXh0KSB7XG4gIGxldCBvdXQgPSAnJyxcbiAgICBpLFxuICAgIGNoO1xuXG4gIGNvbnN0IGwgPSB0ZXh0Lmxlbmd0aDtcbiAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgIGNoID0gdGV4dC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICBjaCA9ICd4JyArIGNoLnRvU3RyaW5nKDE2KTtcbiAgICB9XG4gICAgb3V0ICs9ICcmIycgKyBjaCArICc7JztcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQmxvY2sgTGV4ZXJcbiAqL1xuY2xhc3MgTGV4ZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy50b2tlbnMgPSBbXTtcbiAgICB0aGlzLnRva2Vucy5saW5rcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCBkZWZhdWx0cztcbiAgICB0aGlzLm9wdGlvbnMudG9rZW5pemVyID0gdGhpcy5vcHRpb25zLnRva2VuaXplciB8fCBuZXcgVG9rZW5pemVyKCk7XG4gICAgdGhpcy50b2tlbml6ZXIgPSB0aGlzLm9wdGlvbnMudG9rZW5pemVyO1xuICAgIHRoaXMudG9rZW5pemVyLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgdGhpcy50b2tlbml6ZXIubGV4ZXIgPSB0aGlzO1xuICAgIHRoaXMuaW5saW5lUXVldWUgPSBbXTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5MaW5rOiBmYWxzZSxcbiAgICAgIGluUmF3QmxvY2s6IGZhbHNlLFxuICAgICAgdG9wOiB0cnVlXG4gICAgfTtcblxuICAgIGNvbnN0IHJ1bGVzID0ge1xuICAgICAgYmxvY2s6IGJsb2NrLm5vcm1hbCxcbiAgICAgIGlubGluZTogaW5saW5lLm5vcm1hbFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnBlZGFudGljKSB7XG4gICAgICBydWxlcy5ibG9jayA9IGJsb2NrLnBlZGFudGljO1xuICAgICAgcnVsZXMuaW5saW5lID0gaW5saW5lLnBlZGFudGljO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmdmbSkge1xuICAgICAgcnVsZXMuYmxvY2sgPSBibG9jay5nZm07XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJyZWFrcykge1xuICAgICAgICBydWxlcy5pbmxpbmUgPSBpbmxpbmUuYnJlYWtzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcnVsZXMuaW5saW5lID0gaW5saW5lLmdmbTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50b2tlbml6ZXIucnVsZXMgPSBydWxlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvc2UgUnVsZXNcbiAgICovXG4gIHN0YXRpYyBnZXQgcnVsZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJsb2NrLFxuICAgICAgaW5saW5lXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0aWMgTGV4IE1ldGhvZFxuICAgKi9cbiAgc3RhdGljIGxleChzcmMsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBsZXhlciA9IG5ldyBMZXhlcihvcHRpb25zKTtcbiAgICByZXR1cm4gbGV4ZXIubGV4KHNyYyk7XG4gIH1cblxuICAvKipcbiAgICogU3RhdGljIExleCBJbmxpbmUgTWV0aG9kXG4gICAqL1xuICBzdGF0aWMgbGV4SW5saW5lKHNyYywgb3B0aW9ucykge1xuICAgIGNvbnN0IGxleGVyID0gbmV3IExleGVyKG9wdGlvbnMpO1xuICAgIHJldHVybiBsZXhlci5pbmxpbmVUb2tlbnMoc3JjKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwcm9jZXNzaW5nXG4gICAqL1xuICBsZXgoc3JjKSB7XG4gICAgc3JjID0gc3JjXG4gICAgICAucmVwbGFjZSgvXFxyXFxufFxcci9nLCAnXFxuJyk7XG5cbiAgICB0aGlzLmJsb2NrVG9rZW5zKHNyYywgdGhpcy50b2tlbnMpO1xuXG4gICAgbGV0IG5leHQ7XG4gICAgd2hpbGUgKG5leHQgPSB0aGlzLmlubGluZVF1ZXVlLnNoaWZ0KCkpIHtcbiAgICAgIHRoaXMuaW5saW5lVG9rZW5zKG5leHQuc3JjLCBuZXh0LnRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIExleGluZ1xuICAgKi9cbiAgYmxvY2tUb2tlbnMoc3JjLCB0b2tlbnMgPSBbXSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucGVkYW50aWMpIHtcbiAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXHQvZywgJyAgICAnKS5yZXBsYWNlKC9eICskL2dtLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9eKCAqKShcXHQrKS9nbSwgKF8sIGxlYWRpbmcsIHRhYnMpID0+IHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmcgKyAnICAgICcucmVwZWF0KHRhYnMubGVuZ3RoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCB0b2tlbiwgbGFzdFRva2VuLCBjdXRTcmMsIGxhc3RQYXJhZ3JhcGhDbGlwcGVkO1xuXG4gICAgd2hpbGUgKHNyYykge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHRlbnNpb25zXG4gICAgICAgICYmIHRoaXMub3B0aW9ucy5leHRlbnNpb25zLmJsb2NrXG4gICAgICAgICYmIHRoaXMub3B0aW9ucy5leHRlbnNpb25zLmJsb2NrLnNvbWUoKGV4dFRva2VuaXplcikgPT4ge1xuICAgICAgICAgIGlmICh0b2tlbiA9IGV4dFRva2VuaXplci5jYWxsKHsgbGV4ZXI6IHRoaXMgfSwgc3JjLCB0b2tlbnMpKSB7XG4gICAgICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIG5ld2xpbmVcbiAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLnNwYWNlKHNyYykpIHtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgaWYgKHRva2VuLnJhdy5sZW5ndGggPT09IDEgJiYgdG9rZW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBpZiB0aGVyZSdzIGEgc2luZ2xlIFxcbiBhcyBhIHNwYWNlciwgaXQncyB0ZXJtaW5hdGluZyB0aGUgbGFzdCBsaW5lLFxuICAgICAgICAgIC8vIHNvIG1vdmUgaXQgdGhlcmUgc28gdGhhdCB3ZSBkb24ndCBnZXQgdW5lY2Vzc2FyeSBwYXJhZ3JhcGggdGFnc1xuICAgICAgICAgIHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0ucmF3ICs9ICdcXG4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gY29kZVxuICAgICAgaWYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIuY29kZShzcmMpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgIGxhc3RUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIC8vIEFuIGluZGVudGVkIGNvZGUgYmxvY2sgY2Fubm90IGludGVycnVwdCBhIHBhcmFncmFwaC5cbiAgICAgICAgaWYgKGxhc3RUb2tlbiAmJiAobGFzdFRva2VuLnR5cGUgPT09ICdwYXJhZ3JhcGgnIHx8IGxhc3RUb2tlbi50eXBlID09PSAndGV4dCcpKSB7XG4gICAgICAgICAgbGFzdFRva2VuLnJhdyArPSAnXFxuJyArIHRva2VuLnJhdztcbiAgICAgICAgICBsYXN0VG9rZW4udGV4dCArPSAnXFxuJyArIHRva2VuLnRleHQ7XG4gICAgICAgICAgdGhpcy5pbmxpbmVRdWV1ZVt0aGlzLmlubGluZVF1ZXVlLmxlbmd0aCAtIDFdLnNyYyA9IGxhc3RUb2tlbi50ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gZmVuY2VzXG4gICAgICBpZiAodG9rZW4gPSB0aGlzLnRva2VuaXplci5mZW5jZXMoc3JjKSkge1xuICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBoZWFkaW5nXG4gICAgICBpZiAodG9rZW4gPSB0aGlzLnRva2VuaXplci5oZWFkaW5nKHNyYykpIHtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gaHJcbiAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLmhyKHNyYykpIHtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gYmxvY2txdW90ZVxuICAgICAgaWYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIuYmxvY2txdW90ZShzcmMpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGxpc3RcbiAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLmxpc3Qoc3JjKSkge1xuICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBodG1sXG4gICAgICBpZiAodG9rZW4gPSB0aGlzLnRva2VuaXplci5odG1sKHNyYykpIHtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gZGVmXG4gICAgICBpZiAodG9rZW4gPSB0aGlzLnRva2VuaXplci5kZWYoc3JjKSkge1xuICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICBsYXN0VG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAobGFzdFRva2VuICYmIChsYXN0VG9rZW4udHlwZSA9PT0gJ3BhcmFncmFwaCcgfHwgbGFzdFRva2VuLnR5cGUgPT09ICd0ZXh0JykpIHtcbiAgICAgICAgICBsYXN0VG9rZW4ucmF3ICs9ICdcXG4nICsgdG9rZW4ucmF3O1xuICAgICAgICAgIGxhc3RUb2tlbi50ZXh0ICs9ICdcXG4nICsgdG9rZW4ucmF3O1xuICAgICAgICAgIHRoaXMuaW5saW5lUXVldWVbdGhpcy5pbmxpbmVRdWV1ZS5sZW5ndGggLSAxXS5zcmMgPSBsYXN0VG9rZW4udGV4dDtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy50b2tlbnMubGlua3NbdG9rZW4udGFnXSkge1xuICAgICAgICAgIHRoaXMudG9rZW5zLmxpbmtzW3Rva2VuLnRhZ10gPSB7XG4gICAgICAgICAgICBocmVmOiB0b2tlbi5ocmVmLFxuICAgICAgICAgICAgdGl0bGU6IHRva2VuLnRpdGxlXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gdGFibGUgKGdmbSlcbiAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLnRhYmxlKHNyYykpIHtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gbGhlYWRpbmdcbiAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLmxoZWFkaW5nKHNyYykpIHtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gdG9wLWxldmVsIHBhcmFncmFwaFxuICAgICAgLy8gcHJldmVudCBwYXJhZ3JhcGggY29uc3VtaW5nIGV4dGVuc2lvbnMgYnkgY2xpcHBpbmcgJ3NyYycgdG8gZXh0ZW5zaW9uIHN0YXJ0XG4gICAgICBjdXRTcmMgPSBzcmM7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmV4dGVuc2lvbnMgJiYgdGhpcy5vcHRpb25zLmV4dGVuc2lvbnMuc3RhcnRCbG9jaykge1xuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IEluZmluaXR5O1xuICAgICAgICBjb25zdCB0ZW1wU3JjID0gc3JjLnNsaWNlKDEpO1xuICAgICAgICBsZXQgdGVtcFN0YXJ0O1xuICAgICAgICB0aGlzLm9wdGlvbnMuZXh0ZW5zaW9ucy5zdGFydEJsb2NrLmZvckVhY2goZnVuY3Rpb24oZ2V0U3RhcnRJbmRleCkge1xuICAgICAgICAgIHRlbXBTdGFydCA9IGdldFN0YXJ0SW5kZXguY2FsbCh7IGxleGVyOiB0aGlzIH0sIHRlbXBTcmMpO1xuICAgICAgICAgIGlmICh0eXBlb2YgdGVtcFN0YXJ0ID09PSAnbnVtYmVyJyAmJiB0ZW1wU3RhcnQgPj0gMCkgeyBzdGFydEluZGV4ID0gTWF0aC5taW4oc3RhcnRJbmRleCwgdGVtcFN0YXJ0KTsgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPCBJbmZpbml0eSAmJiBzdGFydEluZGV4ID49IDApIHtcbiAgICAgICAgICBjdXRTcmMgPSBzcmMuc3Vic3RyaW5nKDAsIHN0YXJ0SW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUudG9wICYmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLnBhcmFncmFwaChjdXRTcmMpKSkge1xuICAgICAgICBsYXN0VG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAobGFzdFBhcmFncmFwaENsaXBwZWQgJiYgbGFzdFRva2VuLnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgICAgICAgbGFzdFRva2VuLnJhdyArPSAnXFxuJyArIHRva2VuLnJhdztcbiAgICAgICAgICBsYXN0VG9rZW4udGV4dCArPSAnXFxuJyArIHRva2VuLnRleHQ7XG4gICAgICAgICAgdGhpcy5pbmxpbmVRdWV1ZS5wb3AoKTtcbiAgICAgICAgICB0aGlzLmlubGluZVF1ZXVlW3RoaXMuaW5saW5lUXVldWUubGVuZ3RoIC0gMV0uc3JjID0gbGFzdFRva2VuLnRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RQYXJhZ3JhcGhDbGlwcGVkID0gKGN1dFNyYy5sZW5ndGggIT09IHNyYy5sZW5ndGgpO1xuICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gdGV4dFxuICAgICAgaWYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIudGV4dChzcmMpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgIGxhc3RUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChsYXN0VG9rZW4gJiYgbGFzdFRva2VuLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgIGxhc3RUb2tlbi5yYXcgKz0gJ1xcbicgKyB0b2tlbi5yYXc7XG4gICAgICAgICAgbGFzdFRva2VuLnRleHQgKz0gJ1xcbicgKyB0b2tlbi50ZXh0O1xuICAgICAgICAgIHRoaXMuaW5saW5lUXVldWUucG9wKCk7XG4gICAgICAgICAgdGhpcy5pbmxpbmVRdWV1ZVt0aGlzLmlubGluZVF1ZXVlLmxlbmd0aCAtIDFdLnNyYyA9IGxhc3RUb2tlbi50ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNyYykge1xuICAgICAgICBjb25zdCBlcnJNc2cgPSAnSW5maW5pdGUgbG9vcCBvbiBieXRlOiAnICsgc3JjLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJNc2cpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS50b3AgPSB0cnVlO1xuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBpbmxpbmUoc3JjLCB0b2tlbnMgPSBbXSkge1xuICAgIHRoaXMuaW5saW5lUXVldWUucHVzaCh7IHNyYywgdG9rZW5zIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICAvKipcbiAgICogTGV4aW5nL0NvbXBpbGluZ1xuICAgKi9cbiAgaW5saW5lVG9rZW5zKHNyYywgdG9rZW5zID0gW10pIHtcbiAgICBsZXQgdG9rZW4sIGxhc3RUb2tlbiwgY3V0U3JjO1xuXG4gICAgLy8gU3RyaW5nIHdpdGggbGlua3MgbWFza2VkIHRvIGF2b2lkIGludGVyZmVyZW5jZSB3aXRoIGVtIGFuZCBzdHJvbmdcbiAgICBsZXQgbWFza2VkU3JjID0gc3JjO1xuICAgIGxldCBtYXRjaDtcbiAgICBsZXQga2VlcFByZXZDaGFyLCBwcmV2Q2hhcjtcblxuICAgIC8vIE1hc2sgb3V0IHJlZmxpbmtzXG4gICAgaWYgKHRoaXMudG9rZW5zLmxpbmtzKSB7XG4gICAgICBjb25zdCBsaW5rcyA9IE9iamVjdC5rZXlzKHRoaXMudG9rZW5zLmxpbmtzKTtcbiAgICAgIGlmIChsaW5rcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHdoaWxlICgobWF0Y2ggPSB0aGlzLnRva2VuaXplci5ydWxlcy5pbmxpbmUucmVmbGlua1NlYXJjaC5leGVjKG1hc2tlZFNyYykpICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAobGlua3MuaW5jbHVkZXMobWF0Y2hbMF0uc2xpY2UobWF0Y2hbMF0ubGFzdEluZGV4T2YoJ1snKSArIDEsIC0xKSkpIHtcbiAgICAgICAgICAgIG1hc2tlZFNyYyA9IG1hc2tlZFNyYy5zbGljZSgwLCBtYXRjaC5pbmRleCkgKyAnWycgKyByZXBlYXRTdHJpbmcoJ2EnLCBtYXRjaFswXS5sZW5ndGggLSAyKSArICddJyArIG1hc2tlZFNyYy5zbGljZSh0aGlzLnRva2VuaXplci5ydWxlcy5pbmxpbmUucmVmbGlua1NlYXJjaC5sYXN0SW5kZXgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBNYXNrIG91dCBvdGhlciBibG9ja3NcbiAgICB3aGlsZSAoKG1hdGNoID0gdGhpcy50b2tlbml6ZXIucnVsZXMuaW5saW5lLmJsb2NrU2tpcC5leGVjKG1hc2tlZFNyYykpICE9IG51bGwpIHtcbiAgICAgIG1hc2tlZFNyYyA9IG1hc2tlZFNyYy5zbGljZSgwLCBtYXRjaC5pbmRleCkgKyAnWycgKyByZXBlYXRTdHJpbmcoJ2EnLCBtYXRjaFswXS5sZW5ndGggLSAyKSArICddJyArIG1hc2tlZFNyYy5zbGljZSh0aGlzLnRva2VuaXplci5ydWxlcy5pbmxpbmUuYmxvY2tTa2lwLmxhc3RJbmRleCk7XG4gICAgfVxuXG4gICAgLy8gTWFzayBvdXQgZXNjYXBlZCBlbSAmIHN0cm9uZyBkZWxpbWl0ZXJzXG4gICAgd2hpbGUgKChtYXRjaCA9IHRoaXMudG9rZW5pemVyLnJ1bGVzLmlubGluZS5lc2NhcGVkRW1TdC5leGVjKG1hc2tlZFNyYykpICE9IG51bGwpIHtcbiAgICAgIG1hc2tlZFNyYyA9IG1hc2tlZFNyYy5zbGljZSgwLCBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCAtIDIpICsgJysrJyArIG1hc2tlZFNyYy5zbGljZSh0aGlzLnRva2VuaXplci5ydWxlcy5pbmxpbmUuZXNjYXBlZEVtU3QubGFzdEluZGV4KTtcbiAgICAgIHRoaXMudG9rZW5pemVyLnJ1bGVzLmlubGluZS5lc2NhcGVkRW1TdC5sYXN0SW5kZXgtLTtcbiAgICB9XG5cbiAgICB3aGlsZSAoc3JjKSB7XG4gICAgICBpZiAoIWtlZXBQcmV2Q2hhcikge1xuICAgICAgICBwcmV2Q2hhciA9ICcnO1xuICAgICAgfVxuICAgICAga2VlcFByZXZDaGFyID0gZmFsc2U7XG5cbiAgICAgIC8vIGV4dGVuc2lvbnNcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXh0ZW5zaW9uc1xuICAgICAgICAmJiB0aGlzLm9wdGlvbnMuZXh0ZW5zaW9ucy5pbmxpbmVcbiAgICAgICAgJiYgdGhpcy5vcHRpb25zLmV4dGVuc2lvbnMuaW5saW5lLnNvbWUoKGV4dFRva2VuaXplcikgPT4ge1xuICAgICAgICAgIGlmICh0b2tlbiA9IGV4dFRva2VuaXplci5jYWxsKHsgbGV4ZXI6IHRoaXMgfSwgc3JjLCB0b2tlbnMpKSB7XG4gICAgICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGVzY2FwZVxuICAgICAgaWYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIuZXNjYXBlKHNyYykpIHtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gdGFnXG4gICAgICBpZiAodG9rZW4gPSB0aGlzLnRva2VuaXplci50YWcoc3JjKSkge1xuICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICBsYXN0VG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAobGFzdFRva2VuICYmIHRva2VuLnR5cGUgPT09ICd0ZXh0JyAmJiBsYXN0VG9rZW4udHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgbGFzdFRva2VuLnJhdyArPSB0b2tlbi5yYXc7XG4gICAgICAgICAgbGFzdFRva2VuLnRleHQgKz0gdG9rZW4udGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGxpbmtcbiAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLmxpbmsoc3JjKSkge1xuICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyByZWZsaW5rLCBub2xpbmtcbiAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLnJlZmxpbmsoc3JjLCB0aGlzLnRva2Vucy5saW5rcykpIHtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgbGFzdFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGxhc3RUb2tlbiAmJiB0b2tlbi50eXBlID09PSAndGV4dCcgJiYgbGFzdFRva2VuLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgIGxhc3RUb2tlbi5yYXcgKz0gdG9rZW4ucmF3O1xuICAgICAgICAgIGxhc3RUb2tlbi50ZXh0ICs9IHRva2VuLnRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBlbSAmIHN0cm9uZ1xuICAgICAgaWYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIuZW1TdHJvbmcoc3JjLCBtYXNrZWRTcmMsIHByZXZDaGFyKSkge1xuICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBjb2RlXG4gICAgICBpZiAodG9rZW4gPSB0aGlzLnRva2VuaXplci5jb2Rlc3BhbihzcmMpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGJyXG4gICAgICBpZiAodG9rZW4gPSB0aGlzLnRva2VuaXplci5icihzcmMpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcodG9rZW4ucmF3Lmxlbmd0aCk7XG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGRlbCAoZ2ZtKVxuICAgICAgaWYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIuZGVsKHNyYykpIHtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gYXV0b2xpbmtcbiAgICAgIGlmICh0b2tlbiA9IHRoaXMudG9rZW5pemVyLmF1dG9saW5rKHNyYywgbWFuZ2xlKSkge1xuICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyB1cmwgKGdmbSlcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5pbkxpbmsgJiYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIudXJsKHNyYywgbWFuZ2xlKSkpIHtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyh0b2tlbi5yYXcubGVuZ3RoKTtcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gdGV4dFxuICAgICAgLy8gcHJldmVudCBpbmxpbmVUZXh0IGNvbnN1bWluZyBleHRlbnNpb25zIGJ5IGNsaXBwaW5nICdzcmMnIHRvIGV4dGVuc2lvbiBzdGFydFxuICAgICAgY3V0U3JjID0gc3JjO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5leHRlbnNpb25zICYmIHRoaXMub3B0aW9ucy5leHRlbnNpb25zLnN0YXJ0SW5saW5lKSB7XG4gICAgICAgIGxldCBzdGFydEluZGV4ID0gSW5maW5pdHk7XG4gICAgICAgIGNvbnN0IHRlbXBTcmMgPSBzcmMuc2xpY2UoMSk7XG4gICAgICAgIGxldCB0ZW1wU3RhcnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucy5leHRlbnNpb25zLnN0YXJ0SW5saW5lLmZvckVhY2goZnVuY3Rpb24oZ2V0U3RhcnRJbmRleCkge1xuICAgICAgICAgIHRlbXBTdGFydCA9IGdldFN0YXJ0SW5kZXguY2FsbCh7IGxleGVyOiB0aGlzIH0sIHRlbXBTcmMpO1xuICAgICAgICAgIGlmICh0eXBlb2YgdGVtcFN0YXJ0ID09PSAnbnVtYmVyJyAmJiB0ZW1wU3RhcnQgPj0gMCkgeyBzdGFydEluZGV4ID0gTWF0aC5taW4oc3RhcnRJbmRleCwgdGVtcFN0YXJ0KTsgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPCBJbmZpbml0eSAmJiBzdGFydEluZGV4ID49IDApIHtcbiAgICAgICAgICBjdXRTcmMgPSBzcmMuc3Vic3RyaW5nKDAsIHN0YXJ0SW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRva2VuID0gdGhpcy50b2tlbml6ZXIuaW5saW5lVGV4dChjdXRTcmMsIHNtYXJ0eXBhbnRzKSkge1xuICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKHRva2VuLnJhdy5sZW5ndGgpO1xuICAgICAgICBpZiAodG9rZW4ucmF3LnNsaWNlKC0xKSAhPT0gJ18nKSB7IC8vIFRyYWNrIHByZXZDaGFyIGJlZm9yZSBzdHJpbmcgb2YgX19fXyBzdGFydGVkXG4gICAgICAgICAgcHJldkNoYXIgPSB0b2tlbi5yYXcuc2xpY2UoLTEpO1xuICAgICAgICB9XG4gICAgICAgIGtlZXBQcmV2Q2hhciA9IHRydWU7XG4gICAgICAgIGxhc3RUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChsYXN0VG9rZW4gJiYgbGFzdFRva2VuLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgIGxhc3RUb2tlbi5yYXcgKz0gdG9rZW4ucmF3O1xuICAgICAgICAgIGxhc3RUb2tlbi50ZXh0ICs9IHRva2VuLnRleHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3JjKSB7XG4gICAgICAgIGNvbnN0IGVyck1zZyA9ICdJbmZpbml0ZSBsb29wIG9uIGJ5dGU6ICcgKyBzcmMuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG59XG5cbi8qKlxuICogUmVuZGVyZXJcbiAqL1xuY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCBkZWZhdWx0cztcbiAgfVxuXG4gIGNvZGUoY29kZSwgaW5mb3N0cmluZywgZXNjYXBlZCkge1xuICAgIGNvbnN0IGxhbmcgPSAoaW5mb3N0cmluZyB8fCAnJykubWF0Y2goL1xcUyovKVswXTtcbiAgICBpZiAodGhpcy5vcHRpb25zLmhpZ2hsaWdodCkge1xuICAgICAgY29uc3Qgb3V0ID0gdGhpcy5vcHRpb25zLmhpZ2hsaWdodChjb2RlLCBsYW5nKTtcbiAgICAgIGlmIChvdXQgIT0gbnVsbCAmJiBvdXQgIT09IGNvZGUpIHtcbiAgICAgICAgZXNjYXBlZCA9IHRydWU7XG4gICAgICAgIGNvZGUgPSBvdXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29kZSA9IGNvZGUucmVwbGFjZSgvXFxuJC8sICcnKSArICdcXG4nO1xuXG4gICAgaWYgKCFsYW5nKSB7XG4gICAgICByZXR1cm4gJzxwcmU+PGNvZGU+J1xuICAgICAgICArIChlc2NhcGVkID8gY29kZSA6IGVzY2FwZShjb2RlLCB0cnVlKSlcbiAgICAgICAgKyAnPC9jb2RlPjwvcHJlPlxcbic7XG4gICAgfVxuXG4gICAgcmV0dXJuICc8cHJlPjxjb2RlIGNsYXNzPVwiJ1xuICAgICAgKyB0aGlzLm9wdGlvbnMubGFuZ1ByZWZpeFxuICAgICAgKyBlc2NhcGUobGFuZylcbiAgICAgICsgJ1wiPidcbiAgICAgICsgKGVzY2FwZWQgPyBjb2RlIDogZXNjYXBlKGNvZGUsIHRydWUpKVxuICAgICAgKyAnPC9jb2RlPjwvcHJlPlxcbic7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHF1b3RlXG4gICAqL1xuICBibG9ja3F1b3RlKHF1b3RlKSB7XG4gICAgcmV0dXJuIGA8YmxvY2txdW90ZT5cXG4ke3F1b3RlfTwvYmxvY2txdW90ZT5cXG5gO1xuICB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxldmVsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByYXdcbiAgICogQHBhcmFtIHthbnl9IHNsdWdnZXJcbiAgICovXG4gIGhlYWRpbmcodGV4dCwgbGV2ZWwsIHJhdywgc2x1Z2dlcikge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaGVhZGVySWRzKSB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMub3B0aW9ucy5oZWFkZXJQcmVmaXggKyBzbHVnZ2VyLnNsdWcocmF3KTtcbiAgICAgIHJldHVybiBgPGgke2xldmVsfSBpZD1cIiR7aWR9XCI+JHt0ZXh0fTwvaCR7bGV2ZWx9PlxcbmA7XG4gICAgfVxuXG4gICAgLy8gaWdub3JlIElEc1xuICAgIHJldHVybiBgPGgke2xldmVsfT4ke3RleHR9PC9oJHtsZXZlbH0+XFxuYDtcbiAgfVxuXG4gIGhyKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMueGh0bWwgPyAnPGhyLz5cXG4nIDogJzxocj5cXG4nO1xuICB9XG5cbiAgbGlzdChib2R5LCBvcmRlcmVkLCBzdGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBvcmRlcmVkID8gJ29sJyA6ICd1bCcsXG4gICAgICBzdGFydGF0dCA9IChvcmRlcmVkICYmIHN0YXJ0ICE9PSAxKSA/ICgnIHN0YXJ0PVwiJyArIHN0YXJ0ICsgJ1wiJykgOiAnJztcbiAgICByZXR1cm4gJzwnICsgdHlwZSArIHN0YXJ0YXR0ICsgJz5cXG4nICsgYm9keSArICc8LycgKyB0eXBlICsgJz5cXG4nO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gICAqL1xuICBsaXN0aXRlbSh0ZXh0KSB7XG4gICAgcmV0dXJuIGA8bGk+JHt0ZXh0fTwvbGk+XFxuYDtcbiAgfVxuXG4gIGNoZWNrYm94KGNoZWNrZWQpIHtcbiAgICByZXR1cm4gJzxpbnB1dCAnXG4gICAgICArIChjaGVja2VkID8gJ2NoZWNrZWQ9XCJcIiAnIDogJycpXG4gICAgICArICdkaXNhYmxlZD1cIlwiIHR5cGU9XCJjaGVja2JveFwiJ1xuICAgICAgKyAodGhpcy5vcHRpb25zLnhodG1sID8gJyAvJyA6ICcnKVxuICAgICAgKyAnPiAnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gICAqL1xuICBwYXJhZ3JhcGgodGV4dCkge1xuICAgIHJldHVybiBgPHA+JHt0ZXh0fTwvcD5cXG5gO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoZWFkZXJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJvZHlcbiAgICovXG4gIHRhYmxlKGhlYWRlciwgYm9keSkge1xuICAgIGlmIChib2R5KSBib2R5ID0gYDx0Ym9keT4ke2JvZHl9PC90Ym9keT5gO1xuXG4gICAgcmV0dXJuICc8dGFibGU+XFxuJ1xuICAgICAgKyAnPHRoZWFkPlxcbidcbiAgICAgICsgaGVhZGVyXG4gICAgICArICc8L3RoZWFkPlxcbidcbiAgICAgICsgYm9keVxuICAgICAgKyAnPC90YWJsZT5cXG4nO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50XG4gICAqL1xuICB0YWJsZXJvdyhjb250ZW50KSB7XG4gICAgcmV0dXJuIGA8dHI+XFxuJHtjb250ZW50fTwvdHI+XFxuYDtcbiAgfVxuXG4gIHRhYmxlY2VsbChjb250ZW50LCBmbGFncykge1xuICAgIGNvbnN0IHR5cGUgPSBmbGFncy5oZWFkZXIgPyAndGgnIDogJ3RkJztcbiAgICBjb25zdCB0YWcgPSBmbGFncy5hbGlnblxuICAgICAgPyBgPCR7dHlwZX0gYWxpZ249XCIke2ZsYWdzLmFsaWdufVwiPmBcbiAgICAgIDogYDwke3R5cGV9PmA7XG4gICAgcmV0dXJuIHRhZyArIGNvbnRlbnQgKyBgPC8ke3R5cGV9PlxcbmA7XG4gIH1cblxuICAvKipcbiAgICogc3BhbiBsZXZlbCByZW5kZXJlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICAgKi9cbiAgc3Ryb25nKHRleHQpIHtcbiAgICByZXR1cm4gYDxzdHJvbmc+JHt0ZXh0fTwvc3Ryb25nPmA7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAgICovXG4gIGVtKHRleHQpIHtcbiAgICByZXR1cm4gYDxlbT4ke3RleHR9PC9lbT5gO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gICAqL1xuICBjb2Rlc3Bhbih0ZXh0KSB7XG4gICAgcmV0dXJuIGA8Y29kZT4ke3RleHR9PC9jb2RlPmA7XG4gIH1cblxuICBicigpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnhodG1sID8gJzxici8+JyA6ICc8YnI+JztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICAgKi9cbiAgZGVsKHRleHQpIHtcbiAgICByZXR1cm4gYDxkZWw+JHt0ZXh0fTwvZGVsPmA7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGhyZWZcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gICAqL1xuICBsaW5rKGhyZWYsIHRpdGxlLCB0ZXh0KSB7XG4gICAgaHJlZiA9IGNsZWFuVXJsKHRoaXMub3B0aW9ucy5zYW5pdGl6ZSwgdGhpcy5vcHRpb25zLmJhc2VVcmwsIGhyZWYpO1xuICAgIGlmIChocmVmID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgbGV0IG91dCA9ICc8YSBocmVmPVwiJyArIGhyZWYgKyAnXCInO1xuICAgIGlmICh0aXRsZSkge1xuICAgICAgb3V0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICAgIH1cbiAgICBvdXQgKz0gJz4nICsgdGV4dCArICc8L2E+JztcbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBocmVmXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICAgKi9cbiAgaW1hZ2UoaHJlZiwgdGl0bGUsIHRleHQpIHtcbiAgICBocmVmID0gY2xlYW5VcmwodGhpcy5vcHRpb25zLnNhbml0aXplLCB0aGlzLm9wdGlvbnMuYmFzZVVybCwgaHJlZik7XG4gICAgaWYgKGhyZWYgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cblxuICAgIGxldCBvdXQgPSBgPGltZyBzcmM9XCIke2hyZWZ9XCIgYWx0PVwiJHt0ZXh0fVwiYDtcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIG91dCArPSBgIHRpdGxlPVwiJHt0aXRsZX1cImA7XG4gICAgfVxuICAgIG91dCArPSB0aGlzLm9wdGlvbnMueGh0bWwgPyAnLz4nIDogJz4nO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICB0ZXh0KHRleHQpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufVxuXG4vKipcbiAqIFRleHRSZW5kZXJlclxuICogcmV0dXJucyBvbmx5IHRoZSB0ZXh0dWFsIHBhcnQgb2YgdGhlIHRva2VuXG4gKi9cbmNsYXNzIFRleHRSZW5kZXJlciB7XG4gIC8vIG5vIG5lZWQgZm9yIGJsb2NrIGxldmVsIHJlbmRlcmVyc1xuICBzdHJvbmcodGV4dCkge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgZW0odGV4dCkge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgY29kZXNwYW4odGV4dCkge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgZGVsKHRleHQpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGh0bWwodGV4dCkge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgdGV4dCh0ZXh0KSB7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBsaW5rKGhyZWYsIHRpdGxlLCB0ZXh0KSB7XG4gICAgcmV0dXJuICcnICsgdGV4dDtcbiAgfVxuXG4gIGltYWdlKGhyZWYsIHRpdGxlLCB0ZXh0KSB7XG4gICAgcmV0dXJuICcnICsgdGV4dDtcbiAgfVxuXG4gIGJyKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG4vKipcbiAqIFNsdWdnZXIgZ2VuZXJhdGVzIGhlYWRlciBpZFxuICovXG5jbGFzcyBTbHVnZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zZWVuID0ge307XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAqL1xuICBzZXJpYWxpemUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAudHJpbSgpXG4gICAgICAvLyByZW1vdmUgaHRtbCB0YWdzXG4gICAgICAucmVwbGFjZSgvPFshXFwvYS16XS4qPz4vaWcsICcnKVxuICAgICAgLy8gcmVtb3ZlIHVud2FudGVkIGNoYXJzXG4gICAgICAucmVwbGFjZSgvW1xcdTIwMDAtXFx1MjA2RlxcdTJFMDAtXFx1MkU3RlxcXFwnIVwiIyQlJigpKissLi86Ozw9Pj9AW1xcXV5ge3x9fl0vZywgJycpXG4gICAgICAucmVwbGFjZSgvXFxzL2csICctJyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZHMgdGhlIG5leHQgc2FmZSAodW5pcXVlKSBzbHVnIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3JpZ2luYWxTbHVnXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNEcnlSdW5cbiAgICovXG4gIGdldE5leHRTYWZlU2x1ZyhvcmlnaW5hbFNsdWcsIGlzRHJ5UnVuKSB7XG4gICAgbGV0IHNsdWcgPSBvcmlnaW5hbFNsdWc7XG4gICAgbGV0IG9jY3VyZW5jZUFjY3VtdWxhdG9yID0gMDtcbiAgICBpZiAodGhpcy5zZWVuLmhhc093blByb3BlcnR5KHNsdWcpKSB7XG4gICAgICBvY2N1cmVuY2VBY2N1bXVsYXRvciA9IHRoaXMuc2VlbltvcmlnaW5hbFNsdWddO1xuICAgICAgZG8ge1xuICAgICAgICBvY2N1cmVuY2VBY2N1bXVsYXRvcisrO1xuICAgICAgICBzbHVnID0gb3JpZ2luYWxTbHVnICsgJy0nICsgb2NjdXJlbmNlQWNjdW11bGF0b3I7XG4gICAgICB9IHdoaWxlICh0aGlzLnNlZW4uaGFzT3duUHJvcGVydHkoc2x1ZykpO1xuICAgIH1cbiAgICBpZiAoIWlzRHJ5UnVuKSB7XG4gICAgICB0aGlzLnNlZW5bb3JpZ2luYWxTbHVnXSA9IG9jY3VyZW5jZUFjY3VtdWxhdG9yO1xuICAgICAgdGhpcy5zZWVuW3NsdWddID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHNsdWc7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBzdHJpbmcgdG8gdW5pcXVlIGlkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kcnlydW5dIEdlbmVyYXRlcyB0aGUgbmV4dCB1bmlxdWUgc2x1ZyB3aXRob3V0XG4gICAqIHVwZGF0aW5nIHRoZSBpbnRlcm5hbCBhY2N1bXVsYXRvci5cbiAgICovXG4gIHNsdWcodmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHNsdWcgPSB0aGlzLnNlcmlhbGl6ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmV4dFNhZmVTbHVnKHNsdWcsIG9wdGlvbnMuZHJ5cnVuKTtcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNpbmcgJiBDb21waWxpbmdcbiAqL1xuY2xhc3MgUGFyc2VyIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdHM7XG4gICAgdGhpcy5vcHRpb25zLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyIHx8IG5ldyBSZW5kZXJlcigpO1xuICAgIHRoaXMucmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMucmVuZGVyZXI7XG4gICAgdGhpcy5yZW5kZXJlci5vcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIHRoaXMudGV4dFJlbmRlcmVyID0gbmV3IFRleHRSZW5kZXJlcigpO1xuICAgIHRoaXMuc2x1Z2dlciA9IG5ldyBTbHVnZ2VyKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhdGljIFBhcnNlIE1ldGhvZFxuICAgKi9cbiAgc3RhdGljIHBhcnNlKHRva2Vucywgb3B0aW9ucykge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBQYXJzZXIob3B0aW9ucyk7XG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXRpYyBQYXJzZSBJbmxpbmUgTWV0aG9kXG4gICAqL1xuICBzdGF0aWMgcGFyc2VJbmxpbmUodG9rZW5zLCBvcHRpb25zKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcihvcHRpb25zKTtcbiAgICByZXR1cm4gcGFyc2VyLnBhcnNlSW5saW5lKHRva2Vucyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgTG9vcFxuICAgKi9cbiAgcGFyc2UodG9rZW5zLCB0b3AgPSB0cnVlKSB7XG4gICAgbGV0IG91dCA9ICcnLFxuICAgICAgaSxcbiAgICAgIGosXG4gICAgICBrLFxuICAgICAgbDIsXG4gICAgICBsMyxcbiAgICAgIHJvdyxcbiAgICAgIGNlbGwsXG4gICAgICBoZWFkZXIsXG4gICAgICBib2R5LFxuICAgICAgdG9rZW4sXG4gICAgICBvcmRlcmVkLFxuICAgICAgc3RhcnQsXG4gICAgICBsb29zZSxcbiAgICAgIGl0ZW1Cb2R5LFxuICAgICAgaXRlbSxcbiAgICAgIGNoZWNrZWQsXG4gICAgICB0YXNrLFxuICAgICAgY2hlY2tib3gsXG4gICAgICByZXQ7XG5cbiAgICBjb25zdCBsID0gdG9rZW5zLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgLy8gUnVuIGFueSByZW5kZXJlciBleHRlbnNpb25zXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmV4dGVuc2lvbnMgJiYgdGhpcy5vcHRpb25zLmV4dGVuc2lvbnMucmVuZGVyZXJzICYmIHRoaXMub3B0aW9ucy5leHRlbnNpb25zLnJlbmRlcmVyc1t0b2tlbi50eXBlXSkge1xuICAgICAgICByZXQgPSB0aGlzLm9wdGlvbnMuZXh0ZW5zaW9ucy5yZW5kZXJlcnNbdG9rZW4udHlwZV0uY2FsbCh7IHBhcnNlcjogdGhpcyB9LCB0b2tlbik7XG4gICAgICAgIGlmIChyZXQgIT09IGZhbHNlIHx8ICFbJ3NwYWNlJywgJ2hyJywgJ2hlYWRpbmcnLCAnY29kZScsICd0YWJsZScsICdibG9ja3F1b3RlJywgJ2xpc3QnLCAnaHRtbCcsICdwYXJhZ3JhcGgnLCAndGV4dCddLmluY2x1ZGVzKHRva2VuLnR5cGUpKSB7XG4gICAgICAgICAgb3V0ICs9IHJldCB8fCAnJztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc3BhY2UnOiB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnaHInOiB7XG4gICAgICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuaHIoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdoZWFkaW5nJzoge1xuICAgICAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmhlYWRpbmcoXG4gICAgICAgICAgICB0aGlzLnBhcnNlSW5saW5lKHRva2VuLnRva2VucyksXG4gICAgICAgICAgICB0b2tlbi5kZXB0aCxcbiAgICAgICAgICAgIHVuZXNjYXBlKHRoaXMucGFyc2VJbmxpbmUodG9rZW4udG9rZW5zLCB0aGlzLnRleHRSZW5kZXJlcikpLFxuICAgICAgICAgICAgdGhpcy5zbHVnZ2VyKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdjb2RlJzoge1xuICAgICAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmNvZGUodG9rZW4udGV4dCxcbiAgICAgICAgICAgIHRva2VuLmxhbmcsXG4gICAgICAgICAgICB0b2tlbi5lc2NhcGVkKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICd0YWJsZSc6IHtcbiAgICAgICAgICBoZWFkZXIgPSAnJztcblxuICAgICAgICAgIC8vIGhlYWRlclxuICAgICAgICAgIGNlbGwgPSAnJztcbiAgICAgICAgICBsMiA9IHRva2VuLmhlYWRlci5sZW5ndGg7XG4gICAgICAgICAgZm9yIChqID0gMDsgaiA8IGwyOyBqKyspIHtcbiAgICAgICAgICAgIGNlbGwgKz0gdGhpcy5yZW5kZXJlci50YWJsZWNlbGwoXG4gICAgICAgICAgICAgIHRoaXMucGFyc2VJbmxpbmUodG9rZW4uaGVhZGVyW2pdLnRva2VucyksXG4gICAgICAgICAgICAgIHsgaGVhZGVyOiB0cnVlLCBhbGlnbjogdG9rZW4uYWxpZ25bal0gfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaGVhZGVyICs9IHRoaXMucmVuZGVyZXIudGFibGVyb3coY2VsbCk7XG5cbiAgICAgICAgICBib2R5ID0gJyc7XG4gICAgICAgICAgbDIgPSB0b2tlbi5yb3dzLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbDI7IGorKykge1xuICAgICAgICAgICAgcm93ID0gdG9rZW4ucm93c1tqXTtcblxuICAgICAgICAgICAgY2VsbCA9ICcnO1xuICAgICAgICAgICAgbDMgPSByb3cubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IGwzOyBrKyspIHtcbiAgICAgICAgICAgICAgY2VsbCArPSB0aGlzLnJlbmRlcmVyLnRhYmxlY2VsbChcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlSW5saW5lKHJvd1trXS50b2tlbnMpLFxuICAgICAgICAgICAgICAgIHsgaGVhZGVyOiBmYWxzZSwgYWxpZ246IHRva2VuLmFsaWduW2tdIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm9keSArPSB0aGlzLnJlbmRlcmVyLnRhYmxlcm93KGNlbGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci50YWJsZShoZWFkZXIsIGJvZHkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2Jsb2NrcXVvdGUnOiB7XG4gICAgICAgICAgYm9keSA9IHRoaXMucGFyc2UodG9rZW4udG9rZW5zKTtcbiAgICAgICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5ibG9ja3F1b3RlKGJvZHkpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2xpc3QnOiB7XG4gICAgICAgICAgb3JkZXJlZCA9IHRva2VuLm9yZGVyZWQ7XG4gICAgICAgICAgc3RhcnQgPSB0b2tlbi5zdGFydDtcbiAgICAgICAgICBsb29zZSA9IHRva2VuLmxvb3NlO1xuICAgICAgICAgIGwyID0gdG9rZW4uaXRlbXMubGVuZ3RoO1xuXG4gICAgICAgICAgYm9keSA9ICcnO1xuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBsMjsgaisrKSB7XG4gICAgICAgICAgICBpdGVtID0gdG9rZW4uaXRlbXNbal07XG4gICAgICAgICAgICBjaGVja2VkID0gaXRlbS5jaGVja2VkO1xuICAgICAgICAgICAgdGFzayA9IGl0ZW0udGFzaztcblxuICAgICAgICAgICAgaXRlbUJvZHkgPSAnJztcbiAgICAgICAgICAgIGlmIChpdGVtLnRhc2spIHtcbiAgICAgICAgICAgICAgY2hlY2tib3ggPSB0aGlzLnJlbmRlcmVyLmNoZWNrYm94KGNoZWNrZWQpO1xuICAgICAgICAgICAgICBpZiAobG9vc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS50b2tlbnMubGVuZ3RoID4gMCAmJiBpdGVtLnRva2Vuc1swXS50eXBlID09PSAncGFyYWdyYXBoJykge1xuICAgICAgICAgICAgICAgICAgaXRlbS50b2tlbnNbMF0udGV4dCA9IGNoZWNrYm94ICsgJyAnICsgaXRlbS50b2tlbnNbMF0udGV4dDtcbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnRva2Vuc1swXS50b2tlbnMgJiYgaXRlbS50b2tlbnNbMF0udG9rZW5zLmxlbmd0aCA+IDAgJiYgaXRlbS50b2tlbnNbMF0udG9rZW5zWzBdLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnRva2Vuc1swXS50b2tlbnNbMF0udGV4dCA9IGNoZWNrYm94ICsgJyAnICsgaXRlbS50b2tlbnNbMF0udG9rZW5zWzBdLnRleHQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGl0ZW0udG9rZW5zLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGNoZWNrYm94XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbUJvZHkgKz0gY2hlY2tib3g7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbUJvZHkgKz0gdGhpcy5wYXJzZShpdGVtLnRva2VucywgbG9vc2UpO1xuICAgICAgICAgICAgYm9keSArPSB0aGlzLnJlbmRlcmVyLmxpc3RpdGVtKGl0ZW1Cb2R5LCB0YXNrLCBjaGVja2VkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5saXN0KGJvZHksIG9yZGVyZWQsIHN0YXJ0KTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdodG1sJzoge1xuICAgICAgICAgIC8vIFRPRE8gcGFyc2UgaW5saW5lIGNvbnRlbnQgaWYgcGFyYW1ldGVyIG1hcmtkb3duPTFcbiAgICAgICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5odG1sKHRva2VuLnRleHQpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3BhcmFncmFwaCc6IHtcbiAgICAgICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5wYXJhZ3JhcGgodGhpcy5wYXJzZUlubGluZSh0b2tlbi50b2tlbnMpKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICd0ZXh0Jzoge1xuICAgICAgICAgIGJvZHkgPSB0b2tlbi50b2tlbnMgPyB0aGlzLnBhcnNlSW5saW5lKHRva2VuLnRva2VucykgOiB0b2tlbi50ZXh0O1xuICAgICAgICAgIHdoaWxlIChpICsgMSA8IGwgJiYgdG9rZW5zW2kgKyAxXS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgIHRva2VuID0gdG9rZW5zWysraV07XG4gICAgICAgICAgICBib2R5ICs9ICdcXG4nICsgKHRva2VuLnRva2VucyA/IHRoaXMucGFyc2VJbmxpbmUodG9rZW4udG9rZW5zKSA6IHRva2VuLnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvdXQgKz0gdG9wID8gdGhpcy5yZW5kZXJlci5wYXJhZ3JhcGgoYm9keSkgOiBib2R5O1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGNvbnN0IGVyck1zZyA9ICdUb2tlbiB3aXRoIFwiJyArIHRva2VuLnR5cGUgKyAnXCIgdHlwZSB3YXMgbm90IGZvdW5kLic7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyTXNnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBJbmxpbmUgVG9rZW5zXG4gICAqL1xuICBwYXJzZUlubGluZSh0b2tlbnMsIHJlbmRlcmVyKSB7XG4gICAgcmVuZGVyZXIgPSByZW5kZXJlciB8fCB0aGlzLnJlbmRlcmVyO1xuICAgIGxldCBvdXQgPSAnJyxcbiAgICAgIGksXG4gICAgICB0b2tlbixcbiAgICAgIHJldDtcblxuICAgIGNvbnN0IGwgPSB0b2tlbnMubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICAvLyBSdW4gYW55IHJlbmRlcmVyIGV4dGVuc2lvbnNcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXh0ZW5zaW9ucyAmJiB0aGlzLm9wdGlvbnMuZXh0ZW5zaW9ucy5yZW5kZXJlcnMgJiYgdGhpcy5vcHRpb25zLmV4dGVuc2lvbnMucmVuZGVyZXJzW3Rva2VuLnR5cGVdKSB7XG4gICAgICAgIHJldCA9IHRoaXMub3B0aW9ucy5leHRlbnNpb25zLnJlbmRlcmVyc1t0b2tlbi50eXBlXS5jYWxsKHsgcGFyc2VyOiB0aGlzIH0sIHRva2VuKTtcbiAgICAgICAgaWYgKHJldCAhPT0gZmFsc2UgfHwgIVsnZXNjYXBlJywgJ2h0bWwnLCAnbGluaycsICdpbWFnZScsICdzdHJvbmcnLCAnZW0nLCAnY29kZXNwYW4nLCAnYnInLCAnZGVsJywgJ3RleHQnXS5pbmNsdWRlcyh0b2tlbi50eXBlKSkge1xuICAgICAgICAgIG91dCArPSByZXQgfHwgJyc7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2VzY2FwZSc6IHtcbiAgICAgICAgICBvdXQgKz0gcmVuZGVyZXIudGV4dCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdodG1sJzoge1xuICAgICAgICAgIG91dCArPSByZW5kZXJlci5odG1sKHRva2VuLnRleHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2xpbmsnOiB7XG4gICAgICAgICAgb3V0ICs9IHJlbmRlcmVyLmxpbmsodG9rZW4uaHJlZiwgdG9rZW4udGl0bGUsIHRoaXMucGFyc2VJbmxpbmUodG9rZW4udG9rZW5zLCByZW5kZXJlcikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2ltYWdlJzoge1xuICAgICAgICAgIG91dCArPSByZW5kZXJlci5pbWFnZSh0b2tlbi5ocmVmLCB0b2tlbi50aXRsZSwgdG9rZW4udGV4dCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnc3Ryb25nJzoge1xuICAgICAgICAgIG91dCArPSByZW5kZXJlci5zdHJvbmcodGhpcy5wYXJzZUlubGluZSh0b2tlbi50b2tlbnMsIHJlbmRlcmVyKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnZW0nOiB7XG4gICAgICAgICAgb3V0ICs9IHJlbmRlcmVyLmVtKHRoaXMucGFyc2VJbmxpbmUodG9rZW4udG9rZW5zLCByZW5kZXJlcikpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2NvZGVzcGFuJzoge1xuICAgICAgICAgIG91dCArPSByZW5kZXJlci5jb2Rlc3Bhbih0b2tlbi50ZXh0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdicic6IHtcbiAgICAgICAgICBvdXQgKz0gcmVuZGVyZXIuYnIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdkZWwnOiB7XG4gICAgICAgICAgb3V0ICs9IHJlbmRlcmVyLmRlbCh0aGlzLnBhcnNlSW5saW5lKHRva2VuLnRva2VucywgcmVuZGVyZXIpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICd0ZXh0Jzoge1xuICAgICAgICAgIG91dCArPSByZW5kZXJlci50ZXh0KHRva2VuLnRleHQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBjb25zdCBlcnJNc2cgPSAnVG9rZW4gd2l0aCBcIicgKyB0b2tlbi50eXBlICsgJ1wiIHR5cGUgd2FzIG5vdCBmb3VuZC4nO1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJNc2cpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG59XG5cbmNsYXNzIEhvb2tzIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdHM7XG4gIH1cblxuICBzdGF0aWMgcGFzc1Rocm91Z2hIb29rcyA9IG5ldyBTZXQoW1xuICAgICdwcmVwcm9jZXNzJyxcbiAgICAncG9zdHByb2Nlc3MnXG4gIF0pO1xuXG4gIC8qKlxuICAgKiBQcm9jZXNzIG1hcmtkb3duIGJlZm9yZSBtYXJrZWRcbiAgICovXG4gIHByZXByb2Nlc3MobWFya2Rvd24pIHtcbiAgICByZXR1cm4gbWFya2Rvd247XG4gIH1cblxuICAvKipcbiAgICogUHJvY2VzcyBIVE1MIGFmdGVyIG1hcmtlZCBpcyBmaW5pc2hlZFxuICAgKi9cbiAgcG9zdHByb2Nlc3MoaHRtbCkge1xuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uRXJyb3Ioc2lsZW50LCBhc3luYywgY2FsbGJhY2spIHtcbiAgcmV0dXJuIChlKSA9PiB7XG4gICAgZS5tZXNzYWdlICs9ICdcXG5QbGVhc2UgcmVwb3J0IHRoaXMgdG8gaHR0cHM6Ly9naXRodWIuY29tL21hcmtlZGpzL21hcmtlZC4nO1xuXG4gICAgaWYgKHNpbGVudCkge1xuICAgICAgY29uc3QgbXNnID0gJzxwPkFuIGVycm9yIG9jY3VycmVkOjwvcD48cHJlPidcbiAgICAgICAgKyBlc2NhcGUoZS5tZXNzYWdlICsgJycsIHRydWUpXG4gICAgICAgICsgJzwvcHJlPic7XG4gICAgICBpZiAoYXN5bmMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtc2cpO1xuICAgICAgfVxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIG1zZyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtc2c7XG4gICAgfVxuXG4gICAgaWYgKGFzeW5jKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRocm93IGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlTWFya2Rvd24obGV4ZXIsIHBhcnNlcikge1xuICByZXR1cm4gKHNyYywgb3B0LCBjYWxsYmFjaykgPT4ge1xuICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYWxsYmFjayA9IG9wdDtcbiAgICAgIG9wdCA9IG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgb3JpZ09wdCA9IHsgLi4ub3B0IH07XG4gICAgb3B0ID0geyAuLi5tYXJrZWQuZGVmYXVsdHMsIC4uLm9yaWdPcHQgfTtcbiAgICBjb25zdCB0aHJvd0Vycm9yID0gb25FcnJvcihvcHQuc2lsZW50LCBvcHQuYXN5bmMsIGNhbGxiYWNrKTtcblxuICAgIC8vIHRocm93IGVycm9yIGluIGNhc2Ugb2Ygbm9uIHN0cmluZyBpbnB1dFxuICAgIGlmICh0eXBlb2Ygc3JjID09PSAndW5kZWZpbmVkJyB8fCBzcmMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKG5ldyBFcnJvcignbWFya2VkKCk6IGlucHV0IHBhcmFtZXRlciBpcyB1bmRlZmluZWQgb3IgbnVsbCcpKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzcmMgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihuZXcgRXJyb3IoJ21hcmtlZCgpOiBpbnB1dCBwYXJhbWV0ZXIgaXMgb2YgdHlwZSAnXG4gICAgICAgICsgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNyYykgKyAnLCBzdHJpbmcgZXhwZWN0ZWQnKSk7XG4gICAgfVxuXG4gICAgY2hlY2tTYW5pdGl6ZURlcHJlY2F0aW9uKG9wdCk7XG5cbiAgICBpZiAob3B0Lmhvb2tzKSB7XG4gICAgICBvcHQuaG9va3Mub3B0aW9ucyA9IG9wdDtcbiAgICB9XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodCA9IG9wdC5oaWdobGlnaHQ7XG4gICAgICBsZXQgdG9rZW5zO1xuXG4gICAgICB0cnkge1xuICAgICAgICBpZiAob3B0Lmhvb2tzKSB7XG4gICAgICAgICAgc3JjID0gb3B0Lmhvb2tzLnByZXByb2Nlc3Moc3JjKTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMgPSBsZXhlcihzcmMsIG9wdCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkb25lID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGxldCBvdXQ7XG5cbiAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKG9wdC53YWxrVG9rZW5zKSB7XG4gICAgICAgICAgICAgIG1hcmtlZC53YWxrVG9rZW5zKHRva2Vucywgb3B0LndhbGtUb2tlbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0ID0gcGFyc2VyKHRva2Vucywgb3B0KTtcbiAgICAgICAgICAgIGlmIChvcHQuaG9va3MpIHtcbiAgICAgICAgICAgICAgb3V0ID0gb3B0Lmhvb2tzLnBvc3Rwcm9jZXNzKG91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyID0gZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvcHQuaGlnaGxpZ2h0ID0gaGlnaGxpZ2h0O1xuXG4gICAgICAgIHJldHVybiBlcnJcbiAgICAgICAgICA/IHRocm93RXJyb3IoZXJyKVxuICAgICAgICAgIDogY2FsbGJhY2sobnVsbCwgb3V0KTtcbiAgICAgIH07XG5cbiAgICAgIGlmICghaGlnaGxpZ2h0IHx8IGhpZ2hsaWdodC5sZW5ndGggPCAzKSB7XG4gICAgICAgIHJldHVybiBkb25lKCk7XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSBvcHQuaGlnaGxpZ2h0O1xuXG4gICAgICBpZiAoIXRva2Vucy5sZW5ndGgpIHJldHVybiBkb25lKCk7XG5cbiAgICAgIGxldCBwZW5kaW5nID0gMDtcbiAgICAgIG1hcmtlZC53YWxrVG9rZW5zKHRva2VucywgZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICdjb2RlJykge1xuICAgICAgICAgIHBlbmRpbmcrKztcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGhpZ2hsaWdodCh0b2tlbi50ZXh0LCB0b2tlbi5sYW5nLCBmdW5jdGlvbihlcnIsIGNvZGUpIHtcbiAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkb25lKGVycik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGNvZGUgIT0gbnVsbCAmJiBjb2RlICE9PSB0b2tlbi50ZXh0KSB7XG4gICAgICAgICAgICAgICAgdG9rZW4udGV4dCA9IGNvZGU7XG4gICAgICAgICAgICAgICAgdG9rZW4uZXNjYXBlZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBwZW5kaW5nLS07XG4gICAgICAgICAgICAgIGlmIChwZW5kaW5nID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChwZW5kaW5nID09PSAwKSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvcHQuYXN5bmMpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUob3B0Lmhvb2tzID8gb3B0Lmhvb2tzLnByZXByb2Nlc3Moc3JjKSA6IHNyYylcbiAgICAgICAgLnRoZW4oc3JjID0+IGxleGVyKHNyYywgb3B0KSlcbiAgICAgICAgLnRoZW4odG9rZW5zID0+IG9wdC53YWxrVG9rZW5zID8gUHJvbWlzZS5hbGwobWFya2VkLndhbGtUb2tlbnModG9rZW5zLCBvcHQud2Fsa1Rva2VucykpLnRoZW4oKCkgPT4gdG9rZW5zKSA6IHRva2VucylcbiAgICAgICAgLnRoZW4odG9rZW5zID0+IHBhcnNlcih0b2tlbnMsIG9wdCkpXG4gICAgICAgIC50aGVuKGh0bWwgPT4gb3B0Lmhvb2tzID8gb3B0Lmhvb2tzLnBvc3Rwcm9jZXNzKGh0bWwpIDogaHRtbClcbiAgICAgICAgLmNhdGNoKHRocm93RXJyb3IpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpZiAob3B0Lmhvb2tzKSB7XG4gICAgICAgIHNyYyA9IG9wdC5ob29rcy5wcmVwcm9jZXNzKHNyYyk7XG4gICAgICB9XG4gICAgICBjb25zdCB0b2tlbnMgPSBsZXhlcihzcmMsIG9wdCk7XG4gICAgICBpZiAob3B0LndhbGtUb2tlbnMpIHtcbiAgICAgICAgbWFya2VkLndhbGtUb2tlbnModG9rZW5zLCBvcHQud2Fsa1Rva2Vucyk7XG4gICAgICB9XG4gICAgICBsZXQgaHRtbCA9IHBhcnNlcih0b2tlbnMsIG9wdCk7XG4gICAgICBpZiAob3B0Lmhvb2tzKSB7XG4gICAgICAgIGh0bWwgPSBvcHQuaG9va3MucG9zdHByb2Nlc3MoaHRtbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogTWFya2VkXG4gKi9cbmZ1bmN0aW9uIG1hcmtlZChzcmMsIG9wdCwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHBhcnNlTWFya2Rvd24oTGV4ZXIubGV4LCBQYXJzZXIucGFyc2UpKHNyYywgb3B0LCBjYWxsYmFjayk7XG59XG5cbi8qKlxuICogT3B0aW9uc1xuICovXG5cbm1hcmtlZC5vcHRpb25zID1cbm1hcmtlZC5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0KSB7XG4gIG1hcmtlZC5kZWZhdWx0cyA9IHsgLi4ubWFya2VkLmRlZmF1bHRzLCAuLi5vcHQgfTtcbiAgY2hhbmdlRGVmYXVsdHMobWFya2VkLmRlZmF1bHRzKTtcbiAgcmV0dXJuIG1hcmtlZDtcbn07XG5cbm1hcmtlZC5nZXREZWZhdWx0cyA9IGdldERlZmF1bHRzO1xuXG5tYXJrZWQuZGVmYXVsdHMgPSBkZWZhdWx0cztcblxuLyoqXG4gKiBVc2UgRXh0ZW5zaW9uXG4gKi9cblxubWFya2VkLnVzZSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgY29uc3QgZXh0ZW5zaW9ucyA9IG1hcmtlZC5kZWZhdWx0cy5leHRlbnNpb25zIHx8IHsgcmVuZGVyZXJzOiB7fSwgY2hpbGRUb2tlbnM6IHt9IH07XG5cbiAgYXJncy5mb3JFYWNoKChwYWNrKSA9PiB7XG4gICAgLy8gY29weSBvcHRpb25zIHRvIG5ldyBvYmplY3RcbiAgICBjb25zdCBvcHRzID0geyAuLi5wYWNrIH07XG5cbiAgICAvLyBzZXQgYXN5bmMgdG8gdHJ1ZSBpZiBpdCB3YXMgc2V0IHRvIHRydWUgYmVmb3JlXG4gICAgb3B0cy5hc3luYyA9IG1hcmtlZC5kZWZhdWx0cy5hc3luYyB8fCBvcHRzLmFzeW5jIHx8IGZhbHNlO1xuXG4gICAgLy8gPT0tLSBQYXJzZSBcImFkZG9uXCIgZXh0ZW5zaW9ucyAtLT09IC8vXG4gICAgaWYgKHBhY2suZXh0ZW5zaW9ucykge1xuICAgICAgcGFjay5leHRlbnNpb25zLmZvckVhY2goKGV4dCkgPT4ge1xuICAgICAgICBpZiAoIWV4dC5uYW1lKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdleHRlbnNpb24gbmFtZSByZXF1aXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChleHQucmVuZGVyZXIpIHsgLy8gUmVuZGVyZXIgZXh0ZW5zaW9uc1xuICAgICAgICAgIGNvbnN0IHByZXZSZW5kZXJlciA9IGV4dGVuc2lvbnMucmVuZGVyZXJzW2V4dC5uYW1lXTtcbiAgICAgICAgICBpZiAocHJldlJlbmRlcmVyKSB7XG4gICAgICAgICAgICAvLyBSZXBsYWNlIGV4dGVuc2lvbiB3aXRoIGZ1bmMgdG8gcnVuIG5ldyBleHRlbnNpb24gYnV0IGZhbGwgYmFjayBpZiBmYWxzZVxuICAgICAgICAgICAgZXh0ZW5zaW9ucy5yZW5kZXJlcnNbZXh0Lm5hbWVdID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgICAgICAgICBsZXQgcmV0ID0gZXh0LnJlbmRlcmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgICBpZiAocmV0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldCA9IHByZXZSZW5kZXJlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXh0ZW5zaW9ucy5yZW5kZXJlcnNbZXh0Lm5hbWVdID0gZXh0LnJlbmRlcmVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXh0LnRva2VuaXplcikgeyAvLyBUb2tlbml6ZXIgRXh0ZW5zaW9uc1xuICAgICAgICAgIGlmICghZXh0LmxldmVsIHx8IChleHQubGV2ZWwgIT09ICdibG9jaycgJiYgZXh0LmxldmVsICE9PSAnaW5saW5lJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImV4dGVuc2lvbiBsZXZlbCBtdXN0IGJlICdibG9jaycgb3IgJ2lubGluZSdcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChleHRlbnNpb25zW2V4dC5sZXZlbF0pIHtcbiAgICAgICAgICAgIGV4dGVuc2lvbnNbZXh0LmxldmVsXS51bnNoaWZ0KGV4dC50b2tlbml6ZXIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHRlbnNpb25zW2V4dC5sZXZlbF0gPSBbZXh0LnRva2VuaXplcl07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChleHQuc3RhcnQpIHsgLy8gRnVuY3Rpb24gdG8gY2hlY2sgZm9yIHN0YXJ0IG9mIHRva2VuXG4gICAgICAgICAgICBpZiAoZXh0LmxldmVsID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgICAgIGlmIChleHRlbnNpb25zLnN0YXJ0QmxvY2spIHtcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zLnN0YXJ0QmxvY2sucHVzaChleHQuc3RhcnQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnMuc3RhcnRCbG9jayA9IFtleHQuc3RhcnRdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV4dC5sZXZlbCA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICAgICAgaWYgKGV4dGVuc2lvbnMuc3RhcnRJbmxpbmUpIHtcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zLnN0YXJ0SW5saW5lLnB1c2goZXh0LnN0YXJ0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zLnN0YXJ0SW5saW5lID0gW2V4dC5zdGFydF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4dC5jaGlsZFRva2VucykgeyAvLyBDaGlsZCB0b2tlbnMgdG8gYmUgdmlzaXRlZCBieSB3YWxrVG9rZW5zXG4gICAgICAgICAgZXh0ZW5zaW9ucy5jaGlsZFRva2Vuc1tleHQubmFtZV0gPSBleHQuY2hpbGRUb2tlbnM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgb3B0cy5leHRlbnNpb25zID0gZXh0ZW5zaW9ucztcbiAgICB9XG5cbiAgICAvLyA9PS0tIFBhcnNlIFwib3ZlcndyaXRlXCIgZXh0ZW5zaW9ucyAtLT09IC8vXG4gICAgaWYgKHBhY2sucmVuZGVyZXIpIHtcbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gbWFya2VkLmRlZmF1bHRzLnJlbmRlcmVyIHx8IG5ldyBSZW5kZXJlcigpO1xuICAgICAgZm9yIChjb25zdCBwcm9wIGluIHBhY2sucmVuZGVyZXIpIHtcbiAgICAgICAgY29uc3QgcHJldlJlbmRlcmVyID0gcmVuZGVyZXJbcHJvcF07XG4gICAgICAgIC8vIFJlcGxhY2UgcmVuZGVyZXIgd2l0aCBmdW5jIHRvIHJ1biBleHRlbnNpb24sIGJ1dCBmYWxsIGJhY2sgaWYgZmFsc2VcbiAgICAgICAgcmVuZGVyZXJbcHJvcF0gPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIGxldCByZXQgPSBwYWNrLnJlbmRlcmVyW3Byb3BdLmFwcGx5KHJlbmRlcmVyLCBhcmdzKTtcbiAgICAgICAgICBpZiAocmV0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0ID0gcHJldlJlbmRlcmVyLmFwcGx5KHJlbmRlcmVyLCBhcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIG9wdHMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB9XG4gICAgaWYgKHBhY2sudG9rZW5pemVyKSB7XG4gICAgICBjb25zdCB0b2tlbml6ZXIgPSBtYXJrZWQuZGVmYXVsdHMudG9rZW5pemVyIHx8IG5ldyBUb2tlbml6ZXIoKTtcbiAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBwYWNrLnRva2VuaXplcikge1xuICAgICAgICBjb25zdCBwcmV2VG9rZW5pemVyID0gdG9rZW5pemVyW3Byb3BdO1xuICAgICAgICAvLyBSZXBsYWNlIHRva2VuaXplciB3aXRoIGZ1bmMgdG8gcnVuIGV4dGVuc2lvbiwgYnV0IGZhbGwgYmFjayBpZiBmYWxzZVxuICAgICAgICB0b2tlbml6ZXJbcHJvcF0gPSAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIGxldCByZXQgPSBwYWNrLnRva2VuaXplcltwcm9wXS5hcHBseSh0b2tlbml6ZXIsIGFyZ3MpO1xuICAgICAgICAgIGlmIChyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXQgPSBwcmV2VG9rZW5pemVyLmFwcGx5KHRva2VuaXplciwgYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBvcHRzLnRva2VuaXplciA9IHRva2VuaXplcjtcbiAgICB9XG5cbiAgICAvLyA9PS0tIFBhcnNlIEhvb2tzIGV4dGVuc2lvbnMgLS09PSAvL1xuICAgIGlmIChwYWNrLmhvb2tzKSB7XG4gICAgICBjb25zdCBob29rcyA9IG1hcmtlZC5kZWZhdWx0cy5ob29rcyB8fCBuZXcgSG9va3MoKTtcbiAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBwYWNrLmhvb2tzKSB7XG4gICAgICAgIGNvbnN0IHByZXZIb29rID0gaG9va3NbcHJvcF07XG4gICAgICAgIGlmIChIb29rcy5wYXNzVGhyb3VnaEhvb2tzLmhhcyhwcm9wKSkge1xuICAgICAgICAgIGhvb2tzW3Byb3BdID0gKGFyZykgPT4ge1xuICAgICAgICAgICAgaWYgKG1hcmtlZC5kZWZhdWx0cy5hc3luYykge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBhY2suaG9va3NbcHJvcF0uY2FsbChob29rcywgYXJnKSkudGhlbihyZXQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2SG9vay5jYWxsKGhvb2tzLCByZXQpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmV0ID0gcGFjay5ob29rc1twcm9wXS5jYWxsKGhvb2tzLCBhcmcpO1xuICAgICAgICAgICAgcmV0dXJuIHByZXZIb29rLmNhbGwoaG9va3MsIHJldCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBob29rc1twcm9wXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmV0ID0gcGFjay5ob29rc1twcm9wXS5hcHBseShob29rcywgYXJncyk7XG4gICAgICAgICAgICBpZiAocmV0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXQgPSBwcmV2SG9vay5hcHBseShob29rcywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9wdHMuaG9va3MgPSBob29rcztcbiAgICB9XG5cbiAgICAvLyA9PS0tIFBhcnNlIFdhbGtUb2tlbnMgZXh0ZW5zaW9ucyAtLT09IC8vXG4gICAgaWYgKHBhY2sud2Fsa1Rva2Vucykge1xuICAgICAgY29uc3Qgd2Fsa1Rva2VucyA9IG1hcmtlZC5kZWZhdWx0cy53YWxrVG9rZW5zO1xuICAgICAgb3B0cy53YWxrVG9rZW5zID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtdO1xuICAgICAgICB2YWx1ZXMucHVzaChwYWNrLndhbGtUb2tlbnMuY2FsbCh0aGlzLCB0b2tlbikpO1xuICAgICAgICBpZiAod2Fsa1Rva2Vucykge1xuICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQod2Fsa1Rva2Vucy5jYWxsKHRoaXMsIHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbWFya2VkLnNldE9wdGlvbnMob3B0cyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSdW4gY2FsbGJhY2sgZm9yIGV2ZXJ5IHRva2VuXG4gKi9cblxubWFya2VkLndhbGtUb2tlbnMgPSBmdW5jdGlvbih0b2tlbnMsIGNhbGxiYWNrKSB7XG4gIGxldCB2YWx1ZXMgPSBbXTtcbiAgZm9yIChjb25zdCB0b2tlbiBvZiB0b2tlbnMpIHtcbiAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KGNhbGxiYWNrLmNhbGwobWFya2VkLCB0b2tlbikpO1xuICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xuICAgICAgY2FzZSAndGFibGUnOiB7XG4gICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiB0b2tlbi5oZWFkZXIpIHtcbiAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KG1hcmtlZC53YWxrVG9rZW5zKGNlbGwudG9rZW5zLCBjYWxsYmFjaykpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgcm93IG9mIHRva2VuLnJvd3MpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2Ygcm93KSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuY29uY2F0KG1hcmtlZC53YWxrVG9rZW5zKGNlbGwudG9rZW5zLCBjYWxsYmFjaykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2xpc3QnOiB7XG4gICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQobWFya2VkLndhbGtUb2tlbnModG9rZW4uaXRlbXMsIGNhbGxiYWNrKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBpZiAobWFya2VkLmRlZmF1bHRzLmV4dGVuc2lvbnMgJiYgbWFya2VkLmRlZmF1bHRzLmV4dGVuc2lvbnMuY2hpbGRUb2tlbnMgJiYgbWFya2VkLmRlZmF1bHRzLmV4dGVuc2lvbnMuY2hpbGRUb2tlbnNbdG9rZW4udHlwZV0pIHsgLy8gV2FsayBhbnkgZXh0ZW5zaW9uc1xuICAgICAgICAgIG1hcmtlZC5kZWZhdWx0cy5leHRlbnNpb25zLmNoaWxkVG9rZW5zW3Rva2VuLnR5cGVdLmZvckVhY2goZnVuY3Rpb24oY2hpbGRUb2tlbnMpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQobWFya2VkLndhbGtUb2tlbnModG9rZW5bY2hpbGRUb2tlbnNdLCBjYWxsYmFjaykpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRva2VuLnRva2Vucykge1xuICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQobWFya2VkLndhbGtUb2tlbnModG9rZW4udG9rZW5zLCBjYWxsYmFjaykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZXM7XG59O1xuXG4vKipcbiAqIFBhcnNlIElubGluZVxuICogQHBhcmFtIHtzdHJpbmd9IHNyY1xuICovXG5tYXJrZWQucGFyc2VJbmxpbmUgPSBwYXJzZU1hcmtkb3duKExleGVyLmxleElubGluZSwgUGFyc2VyLnBhcnNlSW5saW5lKTtcblxuLyoqXG4gKiBFeHBvc2VcbiAqL1xubWFya2VkLlBhcnNlciA9IFBhcnNlcjtcbm1hcmtlZC5wYXJzZXIgPSBQYXJzZXIucGFyc2U7XG5tYXJrZWQuUmVuZGVyZXIgPSBSZW5kZXJlcjtcbm1hcmtlZC5UZXh0UmVuZGVyZXIgPSBUZXh0UmVuZGVyZXI7XG5tYXJrZWQuTGV4ZXIgPSBMZXhlcjtcbm1hcmtlZC5sZXhlciA9IExleGVyLmxleDtcbm1hcmtlZC5Ub2tlbml6ZXIgPSBUb2tlbml6ZXI7XG5tYXJrZWQuU2x1Z2dlciA9IFNsdWdnZXI7XG5tYXJrZWQuSG9va3MgPSBIb29rcztcbm1hcmtlZC5wYXJzZSA9IG1hcmtlZDtcblxuY29uc3Qgb3B0aW9ucyA9IG1hcmtlZC5vcHRpb25zO1xuY29uc3Qgc2V0T3B0aW9ucyA9IG1hcmtlZC5zZXRPcHRpb25zO1xuY29uc3QgdXNlID0gbWFya2VkLnVzZTtcbmNvbnN0IHdhbGtUb2tlbnMgPSBtYXJrZWQud2Fsa1Rva2VucztcbmNvbnN0IHBhcnNlSW5saW5lID0gbWFya2VkLnBhcnNlSW5saW5lO1xuY29uc3QgcGFyc2UgPSBtYXJrZWQ7XG5jb25zdCBwYXJzZXIgPSBQYXJzZXIucGFyc2U7XG5jb25zdCBsZXhlciA9IExleGVyLmxleDtcblxuZXhwb3J0IHsgSG9va3MsIExleGVyLCBQYXJzZXIsIFJlbmRlcmVyLCBTbHVnZ2VyLCBUZXh0UmVuZGVyZXIsIFRva2VuaXplciwgZGVmYXVsdHMsIGdldERlZmF1bHRzLCBsZXhlciwgbWFya2VkLCBvcHRpb25zLCBwYXJzZSwgcGFyc2VJbmxpbmUsIHBhcnNlciwgc2V0T3B0aW9ucywgdXNlLCB3YWxrVG9rZW5zIH07XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2xvY2tJY29uLCBLZXlJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJztcbmltcG9ydCB7IEluZm9ybWF0aW9uQ2lyY2xlSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvc29saWQnO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XG5pbXBvcnQgRW1wdHkgZnJvbSAnLi9FbXB0eSc7XG5pbXBvcnQgbWFwQ2hpbGRyZW4gZnJvbSAnLi9tYXAtY2hpbGRyZW4nO1xuXG5jb25zdCBQRVJTSVNUX0tFWSA9ICdsaWdodG5pbmcubWV0YWRhdGEtZXhwbG9yZXIuc2V0dGluZ3MnO1xuXG5jb25zdCBpY29uU3R5bGUgPSAnaC00IHctNCB0ZXh0LWdyZXktNDAwIG1yLTEnO1xuXG50eXBlIE1ldGFkYXRhRXhwbG9yZXJQcm9wcyA9IHtcbiAgbWV0YWRhdGE/OiB0cnVlIHwgbnVsbCB8IGFueTtcbiAgYWRhcHRvcjogc3RyaW5nO1xuICBjcmVkZW50aWFsTmFtZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIG1ldGFkYXRhLFxuICBhZGFwdG9yLFxuICBjcmVkZW50aWFsTmFtZSxcbn06IE1ldGFkYXRhRXhwbG9yZXJQcm9wcykgPT4ge1xuICBpZiAoIW1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIDxFbXB0eSBhZGFwdG9yPXthZGFwdG9yfSAvPjtcbiAgfVxuICBpZiAobWV0YWRhdGEgPT09IHRydWUpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJibG9jayBtLTJcIj5Mb2FkaW5nIG1ldGFkYXRhLi4uPC9kaXY+O1xuICB9XG4gIGlmIChtZXRhZGF0YS5lcnJvcikge1xuICAgIGNvbnN0IHsgZXJyb3IgfSA9IG1ldGFkYXRhO1xuICAgIGlmIChlcnJvciA9PT0gJ25vX21ldGFkYXRhX2Z1bmN0aW9uJykgcmV0dXJuIDxFbXB0eSBhZGFwdG9yPXthZGFwdG9yfSAvPjtcblxuICAgIGxldCBtZXNzYWdlID0gYEFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvYWRpbmcgbWV0YWRhdGE6ICR7ZXJyb3J9YDtcblxuICAgIGlmIChlcnJvciA9PT0gJ25vX2NyZWRlbnRpYWwnKVxuICAgICAgbWVzc2FnZSA9XG4gICAgICAgIFwiTWV0YWRhdGEgY2FuIG9ubHkgYmUgbG9hZGVkIG9uY2UgeW91J3ZlIGFkZGVkIGEgdmFsaWQgY3JlZGVudGlhbC5cIjtcblxuICAgIGlmIChlcnJvciA9PT0gJ25vX21ldGFkYXRhX3Jlc3VsdCcpXG4gICAgICBtZXNzYWdlID0gYFRoZSAke2FkYXB0b3J9IGFkYXB0b3IgaXNuJ3QgcmV0dXJuaW5nIGFueSBtZXRhZGF0YS4gVGhpcyBjb3VsZCBiZSBiZWNhdXNlIHlvdXIgY3JlZGVudGlhbCBpcyBpbnZhbGlkIG9yIG5vdCBhdXRob3JpemVkIHRvIGFjY2VzcyB0aGUgbWV0YWRhdGEgQVBJcyBmb3IgeW91ciBzeXN0ZW0uYDtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIG0tMlwiPnttZXNzYWdlfTwvZGl2PjtcbiAgfVxuXG4gIGNvbnN0IFtpbml0aWFsU2hvd0hlbHBdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGNvbnN0IHNldHRpbmdzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oUEVSU0lTVF9LRVkpO1xuICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2V0dGluZ3MpLnNob3dIZWxwO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlSGVscCA9IChldnQ6IGFueSkgPT4ge1xuICAgIGNvbnN0IHNldHRpbmdzID0geyBzaG93SGVscDogZXZ0LnRhcmdldC5vcGVuIH07XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oUEVSU0lTVF9LRVksIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKSk7XG4gIH07XG5cbiAgY29uc3QgZGF0ZVN0cmluZyA9IG5ldyBEYXRlKG1ldGFkYXRhLmNyZWF0ZWQpLnRvTG9jYWxlU3RyaW5nKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGZsZXgtMSBmbGV4IGZsZXgtY29sIG92ZXJmbG93LXktaGlkZGVuXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZmxleC0xIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICB7bWFwQ2hpbGRyZW4obWV0YWRhdGEsIGRhdGEgPT4gKFxuICAgICAgICAgIDxFbnRpdHkgbGV2ZWw9ezB9IGRhdGE9e2RhdGF9IGtleT17ZGF0YS5uYW1lfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcIj5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBjdXJzb3ItZGVmYXVsdCBtci0yIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgICAgIHRpdGxlPXtgVGhpcyBtZXRhZGF0YSB3YXMgZ2VuZXJhdGVkIGF0ICR7ZGF0ZVN0cmluZ31gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDbG9ja0ljb24gY2xhc3NOYW1lPXtpY29uU3R5bGV9IC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIG1iLTFcIj57ZGF0ZVN0cmluZ308L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHtjcmVkZW50aWFsTmFtZSAmJiAoXG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGN1cnNvci1kZWZhdWx0IG1yLTIgd2hpdGVzcGFjZS1ub3dyYXBcIlxuICAgICAgICAgICAgICB0aXRsZT1cIlRoZSBjcmVkZW50aWFsIHVzZWQgdG8gZ2VuZXJhdGUgbWV0YWRhdGFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8S2V5SWNvbiBjbGFzc05hbWU9e2ljb25TdHlsZX0gLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBtYi0xXCI+e2NyZWRlbnRpYWxOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRldGFpbHMgb3Blbj17aW5pdGlhbFNob3dIZWxwfSBvblRvZ2dsZT17aGFuZGxlVG9nZ2xlSGVscH0+XG4gICAgICAgICAgPHN1bW1hcnkgY2xhc3NOYW1lPVwiYmxvY2sgY3Vyc29yLXBvaW50ZXIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgPEluZm9ybWF0aW9uQ2lyY2xlSWNvbiBjbGFzc05hbWU9e2ljb25TdHlsZSArICcgaW5saW5lJ30gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlRpcHM8L3NwYW4+XG4gICAgICAgICAgPC9zdW1tYXJ5PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1zbGF0ZS0yMDAgYm9yZGVyLWwtMiBtbC0yIHBsLTJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyTGVmdFdpZHRoOiAnMnB4JyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWItMlwiPlxuICAgICAgICAgICAgICBNZXRhZGF0YSBzaG93cyB5b3UgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGRhdGFzb3VyY2UsIGJhc2VkIG9uIHlvdXJcbiAgICAgICAgICAgICAgY3VycmVudCBjcmVkZW50aWFsLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBtYi0yXCI+XG4gICAgICAgICAgICAgIFByZXNzIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZSB0ZXh0LXhzXCI+Y3RybCArIHNwYWNlPC9jb2RlPiBpbiB0aGVcbiAgICAgICAgICAgICAgY29kZSBlZGl0b3IgZm9yIHN1Z2dlc3Rpb25zIHdoaWxlIHdyaXRpbmcgY29kZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZnVuY3Rpb24gSW5mb3JtYXRpb25DaXJjbGVJY29uKHtcbiAgdGl0bGUsXG4gIHRpdGxlSWQsXG4gIC4uLnByb3BzXG59LCBzdmdSZWYpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgdmlld0JveDogXCIwIDAgMjQgMjRcIixcbiAgICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgXCJkYXRhLXNsb3RcIjogXCJpY29uXCIsXG4gICAgcmVmOiBzdmdSZWYsXG4gICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogdGl0bGVJZFxuICB9LCBwcm9wcyksIHRpdGxlID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCB7XG4gICAgaWQ6IHRpdGxlSWRcbiAgfSwgdGl0bGUpIDogbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBmaWxsUnVsZTogXCJldmVub2RkXCIsXG4gICAgZDogXCJNMi4yNSAxMmMwLTUuMzg1IDQuMzY1LTkuNzUgOS43NS05Ljc1czkuNzUgNC4zNjUgOS43NSA5Ljc1LTQuMzY1IDkuNzUtOS43NSA5Ljc1UzIuMjUgMTcuMzg1IDIuMjUgMTJabTguNzA2LTEuNDQyYzEuMTQ2LS41NzMgMi40MzcuNDYzIDIuMTI2IDEuNzA2bC0uNzA5IDIuODM2LjA0Mi0uMDJhLjc1Ljc1IDAgMCAxIC42NyAxLjM0bC0uMDQuMDIyYy0xLjE0Ny41NzMtMi40MzgtLjQ2My0yLjEyNy0xLjcwNmwuNzEtMi44MzYtLjA0Mi4wMmEuNzUuNzUgMCAxIDEtLjY3MS0xLjM0bC4wNDEtLjAyMlpNMTIgOWEuNzUuNzUgMCAxIDAgMC0xLjUuNzUuNzUgMCAwIDAgMCAxLjVaXCIsXG4gICAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0pKTtcbn1cbmNvbnN0IEZvcndhcmRSZWYgPSBSZWFjdC5mb3J3YXJkUmVmKEluZm9ybWF0aW9uQ2lyY2xlSWNvbik7XG5leHBvcnQgZGVmYXVsdCBGb3J3YXJkUmVmOyIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1hcENoaWxkcmVuIGZyb20gJy4vbWFwLWNoaWxkcmVuJztcbmltcG9ydCB0eXBlIHsgTW9kZWxOb2RlIH0gZnJvbSAnLi9Nb2RlbCdcblxudHlwZSBFbnRpdHlQcm9wcyA9IHtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgZGF0YTogTW9kZWxOb2RlO1xufVxuXG5jb25zdCBzdW1tYXJ5U3R5bGUgPSBcInRleHQtc20gdGV4dC1zZWNvbmRhcnktNzAwIG1iLTEgbWFya2VyOnRleHQtc2xhdGUtNjAwIG1hcmtlcjp0ZXh0LXNtIHNlbGVjdC1ub25lIHdoaXRlc3BhY2Utbm93cmFwIGhvdmVyOmJnLXNreS01MC81MFwiO1xuXG5jb25zdCBoYXNDaGlsZHJlbiA9ICh7IGNoaWxkcmVuIH06IFBhcnRpYWw8TW9kZWxOb2RlPiA9IHt9KSA9PiB7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuLmxlbmd0aCA+IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjaGlsZHJlbikubGVuZ3RoID4gMDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBMYWJlbCA9ICh7IGRhdGEgfTogeyBkYXRhOiBNb2RlbE5vZGUgfSkgPT4gKDw+XG4gIHtkYXRhLmxhYmVsICYmIGRhdGEubmFtZSAmJiBcbiAgICA8PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGFsaWduLWJvdHRvbVwiPntkYXRhLmxhYmVsfTwvc3Bhbj5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPVwiaW5saW5lIHRleHQteHMgYWxpZ24tYm90dG9tIGZvbnQtbW9ub3NwYWNlIG1sLTJcIj4oe2RhdGEubmFtZX0pPC9wcmU+XG4gICAgPC8+XG4gIH1cbiAgeyFkYXRhLmxhYmVsICYmIGRhdGEubmFtZSAmJiBcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYWxpZ24tYm90dG9tXCI+e2RhdGEubmFtZX08L3NwYW4+XG4gIH1cbiAge2RhdGEudHlwZSAmJiA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbWwtNCBtci00IHJvdW5kZWQtbWQgYm9yZGVyLXNlY29uZGFyeS0zMDAgdGV4dC1zbGF0ZS01MDAgYmctc2t5LTEwMC83NSBweC0xIHB5LXB4IGN1cnNvci1kZWZhdWx0XCI+e2RhdGEudHlwZX08L3NwYW4+fVxuPC8+KVxuXG4vLyBSZW5kZXJzIGEgbW9kZWwgZW50aXR5XG5jb25zdCBFbnRpdHkgPSAoeyBkYXRhLCBsZXZlbCB9OiBFbnRpdHlQcm9wcykgPT4ge1xuICAvLyBUT0RPIGhvdyBkbyB3ZSByZW5kZXIgYSBkZXNjcmlwdGlvbj9cbiAgaWYgKGhhc0NoaWxkcmVuKGRhdGEpKSB7XG4gICAgLy8gQmVzdCBsYXlvdXQgSSBjYW4gZmluZCBmb3Igbm93IC0gSSdkIHJlYWxseSBsaWtlIHRoZSBwaWxscyB0byBiZSBuZWF0bHkgcmlnaHQtYWxpZ25lZCB3aXRob3V0IHNjcm9sbGluZ1xuICAgIHJldHVybiAoXG4gICAgICA8ZGV0YWlscz5cbiAgICAgICAgPHN1bW1hcnkgY2xhc3NOYW1lPXtgJHtzdW1tYXJ5U3R5bGV9IGN1cnNvci1wb2ludGVyYH0+XG4gICAgICAgICAgPExhYmVsIGRhdGE9e2RhdGF9Lz5cbiAgICAgICAgPC9zdW1tYXJ5PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIG1sLTRcIj5cbiAgICAgICAgICB7bWFwQ2hpbGRyZW4oZGF0YSwgKGUpID0+IDxFbnRpdHkgZGF0YT17ZX0ga2V5PXtlLm5hbWV9IGxldmVsPXtsZXZlbCArIDF9ICAvPil9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2RldGFpbHM+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGluZGVudCA9IGBtbC0ke2xldmVsICogMn1gO1xuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuICg8bGkgY2xhc3NOYW1lPXtgJHtzdW1tYXJ5U3R5bGV9IGN1cnNvci1kZWZhdWx0ICR7aW5kZW50fWB9PlxuICAgICAgXCJ7ZGF0YX1cIlxuICA8L2xpPilcbiAgfVxuICAvLyBUT0RPIGhvdyBkbyB3ZSBkcml2ZSBmb3JtYXR0aW5nIHJ1bGVzIGZvciBhZGFwdG9yIHNwZWNpZmljIHR5cGVzP1xuICByZXR1cm4gKDxsaSBjbGFzc05hbWU9e2Ake3N1bW1hcnlTdHlsZX0gY3Vyc29yLWRlZmF1bHQgJHtpbmRlbnR9YH0+XG4gICAgPExhYmVsIGRhdGE9e2RhdGF9Lz5cbiAgPC9saT4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudGl0eTsiLCAiaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IE1vZGVsTm9kZSB9IGZyb20gJy4vTW9kZWwnO1xuXG4vLyB1dGlsaXR5IHRvIG1hcCB0aGUgY2hpbGRyZW4gb2YgYW4gRW50aXR5XG4vLyAod2hpY2ggY291bGQgYmUgYW4gb2JqZWN0IG9yIGFycmF5KVxuLy8gdG8gYSBmdW5jdGlvblxuY29uc3QgbWFwQ2hpbGRyZW4gPSAobW9kZWw6IE1vZGVsTm9kZSwgZm46IChjaGlsZDogTW9kZWxOb2RlKSA9PiBSZWFjdE5vZGUpID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkobW9kZWwuY2hpbGRyZW4pKSB7XG4gICAgcmV0dXJuIG1vZGVsLmNoaWxkcmVuLm1hcChmbik7XG4gIH1cbiAgY29uc3Qgb2JqID0gbW9kZWwuY2hpbGRyZW4gYXMgUmVjb3JkPHN0cmluZywgTW9kZWxOb2RlW10+O1xuICAvLyBpZiBhbiBvYmplY3QgdHlwZSwgdHJlYXQgZWFjaCBrZXkgYXMgYW4gbW9kZWxcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGtleSA9PlxuICAgIGZuKHtcbiAgICAgIG5hbWU6IGtleSxcbiAgICAgIC8vIHR5cGU6ICdncm91cCcsXG4gICAgICBjaGlsZHJlbjogb2JqW2tleV0sXG4gICAgfSBhcyBNb2RlbE5vZGUpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXBDaGlsZHJlbjtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBFbXB0eSA9ICh7IGFkYXB0b3IgfTogeyBhZGFwdG9yOiBzdHJpbmc7IGVycm9yIH0pID0+IChcbiAgPGRpdj5cbiAgICA8cCBjbGFzc05hbWU9XCJibG9jayBtLTJcIj57YE5vIG1ldGFkYXRhIGZvdW5kIGZvciAke2FkYXB0b3J9YH08L3A+XG4gICAgPHAgY2xhc3NOYW1lPVwiYmxvY2sgbS0yXCI+XG4gICAgICBUaGlzIGFkYXB0b3IgZG9lcyBub3Qgc3VwcG9ydCBtYWdpYyBmdW5jdGlvbnMgeWV0LlxuICAgIDwvcD5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFbXB0eTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZ0JBQWlFOzs7QUNBakUsSUFBQUMsZ0JBQW1DOzs7QUNBbkMsSUFBQUMsZ0JBQWtCOzs7QUNBbEIsbUJBQTZDO0FBSzdDLElBQU0sUUFBMkQsQ0FBQztBQUVsRSxJQUFNLFVBQVUsQ0FBQyxjQUFzQjtBQUNyQyxRQUFNLENBQUMsTUFBTSxPQUFPLFFBQUksdUJBQTRDLElBQUk7QUFFeEUsOEJBQVUsTUFBTTtBQUNkLFFBQUksTUFBTSxlQUFlLFNBQVMsR0FBRztBQUduQyxjQUFRLE1BQU0sU0FBUyxDQUFDO0FBQUEsSUFDMUIsT0FBTztBQUNMLFlBQU0sU0FBUyxJQUFJO0FBQ25CLHNCQUFnQixXQUFXLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxXQUFXO0FBQzlDLGNBQU0sU0FBUyxJQUFJO0FBQ25CLGdCQUFRLE1BQU07QUFBQSxNQUNoQixDQUFDLEVBQUUsTUFBTSxDQUFDLFFBQVE7QUFDaEIsY0FBTSxTQUFTLElBQUk7QUFDbkIsZ0JBQVEsS0FBSztBQUFBLE1BQ2YsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGLEdBQUcsQ0FBQyxTQUFTLENBQUM7QUFFZCxTQUFPO0FBQ1Q7QUFFQSxJQUFPLGtCQUFROzs7QUM5QmYsSUFBQUMsZ0JBQWtCOzs7QUNXbEIsU0FBUyxjQUFjO0FBQ3JCLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLEtBQUs7QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLGNBQWM7QUFBQSxJQUNkLFdBQVc7QUFBQSxJQUNYLE9BQU87QUFBQSxJQUNQLFlBQVk7QUFB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LGtCQUFrQjtBQUFBO0FBQUEsTUFHOUIsZ0JBQWdCLFVBQVUsOEJBQUFBLFFBQUEsY0FBQyxnQkFBSyxTQUFrQjtBQUFBLE1BQ2xELGdCQUFnQixjQUNmLDhCQUFBQSxRQUFBLGNBQUMsb0JBQVMsU0FBa0IsVUFBb0I7QUFBQSxJQUVwRDtBQUFBLEVBRUosQ0FDRixDQUNGO0FBRUo7IiwKICAibmFtZXMiOiBbImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJub29wVGVzdCIsICJsZXhlciIsICJvcHRpb25zIiwgInRleHQiLCAibWFuZ2xlIiwgInNtYXJ0eXBhbnRzIiwgInBhcnNlciIsICJzcmMiLCAiYXJncyIsICJyZXQiLCAid2Fsa1Rva2VucyIsICJSZWFjdCIsICJSZWFjdCIsICJSZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiUmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgIlJlYWN0IiwgImltcG9ydF9yZWFjdCIsICJSZWFjdCIsICJSZWFjdCIsICJzZXR0aW5ncyIsICJpY29uU3R5bGUiLCAib3B0aW9ucyIsICJSZWFjdCIsICJzdHlsZSJdCn0K
