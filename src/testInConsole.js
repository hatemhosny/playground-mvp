const typstUrl = "https://esm.sh/@myriaddreamin/typst.ts"

const ty = await import(typstUrl);
console.log(ty);

console.log(ty.$typst);




// <script
//   type="module"
//   src="https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-all-in-one.ts@0.6.0/dist/esm/index.js"
//   id="typst"
// ></script>

// <script>
const input = document.getElementById('input');
input.value = 'Hello, Typst!';
document.getElementById('typst').addEventListener('load', function () {
    const compile = function (mainContent) {
        $typst.svg({ mainContent }).then(svg => {
            console.log(`rendered! SvgElement { len: ${svg.length} }`);
            // append svg text
            document.getElementById('content').innerHTML = svg;
        });
    };
    input.oninput = () => compile(input.value);
    compile(input.value);
});
// </script>




// <script
//   type="module"
//   src="https://cdn.jsdelivr.net/npm/@myriaddreamin/typst.ts/dist/esm/contrib/all-in-one-lite.bundle.js"
//   id="typst"
// ></script>
// <script>
const input = document.getElementById('input');
input.value = 'Hello, Typst!';
document.getElementById('typst').addEventListener('load', function () {
    $typst.setCompilerInitOptions({
        getModule: () =>
            'https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-web-compiler/pkg/typst_ts_web_compiler_bg.wasm',
    });
    $typst.setRendererInitOptions({
        getModule: () =>
            'https://cdn.jsdelivr.net/npm/@myriaddreamin/typst-ts-renderer/pkg/typst_ts_renderer_bg.wasm',
    });

    const compile = function (mainContent) {
        $typst.svg({ mainContent }).then(svg => {
            console.log(`rendered! SvgElement { len: ${svg.length} }`);
            // append svg text
            document.getElementById('content').innerHTML = svg;
        });
    };
    input.oninput = () => compile(input.value);
    compile(input.value);
});
// </script>
