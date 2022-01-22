import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"
import Cookies from "js-cookie"

let darkMode: boolean

if (Cookies.get("dark-mode") === "true") {
	darkMode = true
} else if (Cookies.get("dark-mode") === "false") {
	darkMode = false
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
	darkMode = true
} else {
	darkMode = false
}

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			main: "#556cd6",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
		mode: darkMode ? "dark" : "light",
	},

})

export default theme
