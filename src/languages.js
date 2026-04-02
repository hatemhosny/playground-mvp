const markedUrl = "https://esm.sh/marked";
const sassUrl = "https://esm.sh/sass";
const typescriptUrl = "https://esm.sh/typescript";
const loadTypst = () => new Promise((resolve, reject) => {
if (window.$typst) return resolve();
const script = document.createElement('script');
script.type = 'module';
script.src = 'https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-all-in-one.ts@0.6.0/dist/esm/index.js';
script.id = 'typst';
script.addEventListener('load', resolve);
script.addEventListener('error', reject);
document.head.appendChild(script);
});

/**
 * @type {import("./types").Language[]}
 */
export const languages = [
  {
    name: "html",
    title: "HTML",
    longTitle: "HTML",
    editorId: "markup",
    compiler: async () => (code) => code,
  },
  {
    name: "markdown",
    title: "MD",
    longTitle: "Markdown",
    editorId: "markup",
    compiler: async () => {
      const marked = await import(markedUrl);
      return (code) => marked.parse(code);
    },
  },
  {
    name: "css",
    title: "CSS",
    longTitle: "CSS",
    editorId: "style",
    compiler: async () => (code) => code,
  },
  {
    name: "scss",
    title: "SCSS",
    longTitle: "SCSS",
    editorId: "style",
    compiler: async () => {
      const sass = await import(sassUrl);
      return (code) => sass.compileString(code).css;
    },
  },
  {
    name: "javascript",
    title: "JS",
    longTitle: "JavaScript",
    editorId: "script",
    compiler: async () => (code) => code,
  },
  {
    name: "typescript",
    title: "TS",
    longTitle: "TypeScript",
    editorId: "script",
    compiler: async () => {
      const ts = await import(typescriptUrl);
      return (code) => ts.transpile(code);
    },
  },
  {
    name: "typst",
    title: "ty",
    longTitle: "typst",
    editorId: "markup",
    compiler: async () => {
      await loadTypst();
      return async (code) => {
      const svg = await $typst.svg({mainContent: code});
      return svg;
      };
    },
  },
];
