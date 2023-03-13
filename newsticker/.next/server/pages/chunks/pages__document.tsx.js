(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/pages__document.tsx.js", {

"[project-with-next]/pages/_document.tsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>MyDocument
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__external__next$2f$document__ = __turbopack_external_require__("next/document", true);
(()=>{
    const e = new Error("Cannot find module '@emotion/server/create-instance'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$config$2f$createEmotionCache$2e$tsx__ = __turbopack_import__("[project-with-next]/config/createEmotionCache.tsx (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
class MyDocument extends __TURBOPACK__external__next$2f$document__["default"] {
    render() {
        return __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$document__["Html"], {
            lang: "en",
            children: [
                __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$document__["Head"], {
                    children: [
                        __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("meta", {
                            name: "emotion-insertion-point",
                            content: ""
                        }, void 0, false, {
                            fileName: "<pages/_document.tsx>",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        this.props.emotionStyleTags
                    ]
                }, void 0, true, {
                    fileName: "<pages/_document.tsx>",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("body", {
                    children: [
                        __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$document__["Main"], {}, void 0, false, {
                            fileName: "<pages/_document.tsx>",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$document__["NextScript"], {}, void 0, false, {
                            fileName: "<pages/_document.tsx>",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<pages/_document.tsx>",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<pages/_document.tsx>",
            lineNumber: 9,
            columnNumber: 7
        }, this);
    }
}
MyDocument.getInitialProps = async (ctx)=>{
    const originalRenderPage = ctx.renderPage;
    const cache = __TURBOPACK__imported__module__$5b$project$2d$with$2d$next$5d2f$config$2f$createEmotionCache$2e$tsx__["default"]();
    const { extractCriticalToChunks  } = createEmotionServer(cache);
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>function EnhanceApp(props) {
                    return __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](App, {
                        emotionCache: cache,
                        ...props
                    }, void 0, false, {
                        fileName: "<pages/_document.tsx>",
                        lineNumber: 59,
                        columnNumber: 18
                    }, this);
                }
        });
    const initialProps = await __TURBOPACK__external__next$2f$document__["default"].getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style)=>__TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("style", {
            "data-emotion": `${style.key} ${style.ids.join(' ')}`,
            dangerouslySetInnerHTML: {
                __html: style.css
            }
        }, style.key, false, {
            fileName: "<pages/_document.tsx>",
            lineNumber: 68,
            columnNumber: 5
        }, this));
    return {
        ...initialProps,
        emotionStyleTags
    };
};

})()),
}]);


//# sourceMappingURL=pages__document.tsx.js.map