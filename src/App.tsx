import React from "react"
import { Button, Container } from "@mui/material"
import { Typography } from "@mui/material"
import { Box } from "@mui/material"
import { Input } from "@mui/material"
import { getWordForDate, dateToHumanReadable, dateToYYYYMMDD } from "./util"

export default function App() {
	const [date, setDate] = React.useState(new Date()),
		[revealed, setRevealed] = React.useState(false),
		wordForDate = getWordForDate(date),
		formattedDate = dateToHumanReadable(date)

	return (
		<Container maxWidth="md">
			<Box sx={{ my: 4, textAlign: "center" }}>
				<Typography variant="h3" component="h1" gutterBottom>
					Wordle Solver
				</Typography>

				<Typography variant="body2" component="h2" gutterBottom>
					marzeq © {new Date().getFullYear()}
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
					setRevealed(false)
				}} />

				{revealed ?
					<Typography variant="body1" gutterBottom sx={{ my: 2 }}>
						Word for {formattedDate}: {wordForDate}
					</Typography>
					:
					<Button onClick={() => setRevealed(true)}>
						Reveal Word
					</Button>
				}
			</Box>
		</Container>
	)
}
