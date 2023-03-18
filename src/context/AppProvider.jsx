import { useState } from "react"
import { AppContext } from "./AppContext"

const stateTimeValues = {
    images: ['icon-work.svg', 'icon-play.svg', 'icon-study.svg', 'icon-exercise.svg', 'icon-social.svg', 'icon-self-care.svg'], 
    colors: ['hsl(15, 100%, 70%)', 'hsl(195, 74%, 62%)', 'hsl(348, 100%, 68%)', 'hsl(145, 58%, 55%)', 'hsl(235, 45%, 61%)', 'hsl(43, 84%, 65%)'],
    titles: ['Work', 'Play', 'Study', 'Exercise', 'Social', 'Self-care'],
    typeTime: 'daily',  // daily, monthly, weekly
    current: [],
    previous: []
}

export const AppProvider = ( {children} ) => {
    const [stateTime, setStateTime] = useState(stateTimeValues)

    return (
        <AppContext.Provider value= { { stateTime, setStateTime } }>
            { children }
        </AppContext.Provider>
    )
}
