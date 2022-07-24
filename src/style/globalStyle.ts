import { extendTheme } from "@chakra-ui/react"

const style = {
    styles: {
        global: {
            'html, body': {
                bg: '#121619',
                lineHeight: 'tall',
                color:"#f3f5f7",
            },
            '*': {
                // border:"1px solid white !important"
            },
            ".border-circle":{
                borderRadius: "50%"
            },
            ':root':{
                "--lr-color-bg": "#121619",
                "--lr-color-accent-100": "#21262A",
                "--lr-color-accent-200": "#32373B",
                "--lr-color-accent-green": "#2DE370",
                "--lr-color-accent-blue": "#4589FF",

                "--lr-font-size-48" : "3rem",
                "--lr-font-size-40" : "2.5rem",
                "--lr-font-size-20" : "1.25rem",
                "--lr-font-size-18" : "1.125rem",
                "--lr-font-size-16" : "1rem",
                "--lr-font-size-14" : "0.875rem",
                "--lr-font-size-12" : "0.75rem",
                "--lr-font-size-11" : "0.6875rem",
                "--lr-font-size-10" : "0.625rem",

                "--lr-font-color-100" : "#878D96",
                "--lr-font-color-200" : "#C7CCD1",
                "--lr-font-color-main" : "#F3F3F7",

                "--lr-border-color-alpha-100": "#FFFFFF27"
            },
            "h1":{
                fontSize: "4rem"
            },
            ".elipsis": {
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                display: "inline-block",
            },
            ".green-text-animation":{
                animation: "color-animation 2s infinite",
                "@keyframes color-animation": {
                    "0%" : {"color" : "var(--lr-color-accent-green)"},
                    "50%" : {"color" : "var(--lr-font-color-main)"},
                    "100%" : {"color" : "var(--lr-color-accent-green)"}
                }
            }
        }
    },
    components: {
        Button: {
            variants:{
                "lr-green" : {
                    bg:"var(--lr-color-accent-green)",
                    color: "#121619",
                    borderRadius:"0rem",
                    fontWeight:"600",
                    _hover:{
                        bg: "#2DE370aa"
                    }
                },
                "lr-green-outline" : {
                    bg:"var(--lr-color-bg)",
                    border:"2px solid var(--lr-color-accent-green)",
                    color: "var(--lr-color-accent-green)",
                    borderRadius:"0rem",
                    fontWeight:"600",
                    _hover:{
                        bg: "#21262A"
                    }
                }
            }
        }
    }
}

export const theme = extendTheme(style)