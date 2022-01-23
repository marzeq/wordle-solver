import words from "./words.json"

export const getWordForDate = (currentDate: Date): string => {
    // Epoch: June 19th 2021
    const msSinceEpoch = currentDate.setHours(0, 0, 0, 0) - new Date(2021, 5, 19, 0, 0, 0, 0).getTime()

    return words[Math.round(msSinceEpoch / 864e5) % words.length]
}

export const dateToHumanReadable = (date: Date): string => {
    const dateTime = date.setHours(0, 0, 0, 0),
        currentDate = new Date().setHours(0, 0, 0, 0)

    if (dateTime === currentDate)
        return "today"
    else if (dateTime === new Date(currentDate).setDate(new Date().getDate() + 1))
        return "tomorrow"
    else if (dateTime === new Date(currentDate).setDate(new Date().getDate() - 1))
        return "yesterday"

    return date.toLocaleDateString()
}