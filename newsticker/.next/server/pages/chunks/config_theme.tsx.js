(self.TURBOPACK = self.TURBOPACK || []).push(["chunks/config_theme.tsx.js", {

"[project-with-next]/config/theme.tsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, c: __turbopack_cache__, l: __turbopack_load__, p: process, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
(()=>{
    const e = new Error("Cannot find module '@mui/material/styles'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@mui/material/colors'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const rawTheme = createTheme({
    palette: {
        primary: {
            light: 'withe',
            main: '#28282a',
            dark: '#303F9F',
            contrastText: '#fff'
        },
        secondary: {
            light: '#fff5f8',
            main: '#ff3366',
            dark: '#e62958'
        },
        warning: {
            main: '#ffc071',
            dark: '#ffb25e'
        },
        error: {
            light: red[50],
            main: red[500],
            dark: red[700]
        },
        success: {
            light: green[50],
            main: green[500],
            dark: green[700]
        }
    },
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 700
    }
});
const fontHeader = {
    color: rawTheme.palette.text.primary,
    fontWeight: rawTheme.typography.fontWeightMedium,
    fontFamily: "'Roboto Condensed', sans-serif",
    textTransform: 'uppercase'
};
const theme = {
    ...rawTheme,
    palette: {
        ...rawTheme.palette,
        background: {
            ...rawTheme.palette.background,
            default: rawTheme.palette.common.white,
            placeholder: grey[200]
        }
    },
    typography: {
        ...rawTheme.typography,
        fontHeader,
        h1: {
            ...rawTheme.typography.h1,
            ...fontHeader,
            letterSpacing: 0,
            fontSize: 60
        },
        h2: {
            ...rawTheme.typography.h2,
            ...fontHeader,
            fontSize: 48
        },
        h3: {
            ...rawTheme.typography.h3,
            ...fontHeader,
            fontSize: 42
        },
        h4: {
            ...rawTheme.typography.h4,
            ...fontHeader,
            fontSize: 36
        },
        h5: {
            ...rawTheme.typography.h5,
            ...fontHeader,
            fontSize: 28
        },
        h6: {
            ...rawTheme.typography.h6,
            fontSize: 18,
            fontWeight: rawTheme.typography.fontWeightLight
        },
        subtitle1: {
            ...rawTheme.typography.subtitle1,
            ...fontHeader,
            fontSize: 22
        },
        subtitle2: {
            ...rawTheme.typography.subtitle2,
            ...fontHeader,
            fontSize: 18
        },
        body1: {
            ...rawTheme.typography.body2,
            fontWeight: rawTheme.typography.fontWeightRegular,
            fontSize: 16
        },
        body2: {
            ...rawTheme.typography.body1,
            fontSize: 14
        }
    }
};
const __TURBOPACK__default__export__ = theme;

})()),
}]);


//# sourceMappingURL=config_theme.tsx.js.map