const rainbox =
  "linear-gradient( 45deg,#eb4d9c,#d33024,#e48233,#f4e24d,#b4dc48,#54b2ea,#663399 50% )"
export default {
  colors: {
    text: "black",
    background: "hsl(0, 10%, 98%)",
    primary: "purple",
    secondary: "hsl(10, 60%, 50%)",
    highlight: "purple",
    purple: "hsl(250, 60%, 30%)",
    muted: "hsl(10, 20%, 94%)",
    gray: "hsl(10, 20%, 50%)",
  },
  fonts: {
    body: "'open sans',arial,sans-serif",
    heading: "'open sans',arial,sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 28, 36, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      marginBlockStart: "0",
      marginBlockEnd: "0",
    },
    display: {
      variant: "text.heading",
      fontWeight: "display",
      marginBlockStart: "0",
      marginBlockEnd: "0",
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    p: {
      marginBlockStart: "0",
      marginBlockEnd: "0",
    },
    h1: {
      variant: "text.display",
      fontSize: [7, 8],
    },
    h2: {
      variant: "text.heading",
      fontWeight: "heading",
      fontSize: [6, 7],
    },
    h3: {
      variant: "text.heading",
      fontSize: [5, 6],
    },
    h4: {
      variant: "text.heading",
      fontSize: [4, 5],
    },
    h5: {
      variant: "text.heading",
      fontSize: [3, 4],
    },
    h6: {
      variant: "text.heading",
      fontSize: [1, 2, 3],
    },
    a: {
      color: "primary",
      "&:hover": {
        color: "secondary",
      },
    },
    pre: {
      variant: "prism",
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      color: "secondary",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "muted",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "muted",
    },
    img: {
      maxWidth: "100%",
    },
  },
  prism: {
    ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
      color: "gray",
    },
    ".comment": {
      fontStyle: "italic",
    },
    ".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable": {
      color: "purple",
    },
    ".atrule,.attr-value,.keyword": {
      color: "primary",
    },
    ".selector,.attr-name,.string,.char,.builtin,.inserted": {
      color: "secondary",
    },
  },
}
