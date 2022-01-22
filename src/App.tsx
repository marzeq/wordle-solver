import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Input from "@mui/material/Input"
import { getWordForDate } from "./solver"

const dateToHumanReadable = (date: Date): string => {
	if (date.getDate() === new Date().getDate()) {
		return "today"
	}
	else if (date.getDate() === new Date().getDate() + 1) {
		return "tomorrow"
	}
	else if (date.getDate() === new Date().getDate() - 1) {
		return "yesterday"
	}
	return dateToYYYYMMDD(date)
}

const dateToYYYYMMDD = (date: Date): string => `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`

export default function App() {
	const [date, setDate] = React.useState(new Date())
	return (
		<Container maxWidth="md">
			<Box sx={{ my: 4, textAlign: "center" }}>
				<Typography variant="h3" component="h1" gutterBottom>
					Wordle Solver
				</Typography>

				<Typography variant="h6" gutterBottom>
					Please select a date:
				</Typography>
				<Input type="date" onChange={e => {
					if (e.target.value) {
						setDate(new Date(e.target.value))
					} else {
						setDate(new Date())
						e.target.value = dateToYYYYMMDD(new Date())
					}
				}} />

				<Typography variant="body1" gutterBottom sx={{ my: 2 }}>
					The word for {dateToHumanReadable(date)} is: {getWordForDate(date)}
				</Typography>
			</Box>
		</Container>
	)
}
