import React from "react"
import { Button, Container } from "@mui/material"
import { Typography } from "@mui/material"
import { Box } from "@mui/material"
import { Input } from "@mui/material"
import { getWordForDate, dateToHumanReadable } from "./util"

export default function App() {
	const [date, setDate] = React.useState(new Date(Date.now() - new Date().getTimezoneOffset() * 60_000)),
		[revealed, setRevealed] = React.useState(false)

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
				<Input
					type="date"
					onChange={e => {
						if (e.target.value)
							setDate(new Date(e.target.value))
						else {
							setDate(new Date(Date.now() - new Date().getTimezoneOffset() * 60_000))
							e.target.value = new Date(Date.now() - new Date().getTimezoneOffset() * 60_000).toISOString().substring(0, 10)
						}
						setRevealed(false)
					}}
					defaultValue={date.toISOString().substring(0, 10)}
				/>

				{revealed ?
					<Typography variant="body1" gutterBottom sx={{ my: 2 }}>
						Word for {dateToHumanReadable(date)}: {getWordForDate(date)}
					</Typography>
					:
					<>
						<br />
						<Button onClick={() => setRevealed(true)}>
							Reveal Word
						</Button>
					</>
				}
			</Box>
		</Container>
	)
}
