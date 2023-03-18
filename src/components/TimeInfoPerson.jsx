// Informacion persona
import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const TimeInfoPerson = () => {
    const  {stateTime, setStateTime}  = useContext(AppContext)

    // Dependiendo de lo que se escoja: día, semana, mes 
    const handleClick = (e) => {
        e.preventDefault()
        const typeTime = e.target.text.toLowerCase()
        console.log (  typeTime, stateTime.typeTime)
        if ( typeTime !== stateTime.typeTime ) {
            setStateTime ({
                ...stateTime,
                typeTime: typeTime
            })
        }
    }

    return (
        <div className='info-person'>
            <div className="data-person">
                <img src="images/image-jeremy.png" alt="" />
                <div className="name-person">
                    <p>Report for</p>
                    <p>Jeremy Robson</p>
                </div>
            </div>
            <div className="info-options">
                <a href="" onClick={handleClick}>Daily</a>
                <a href="" onClick={handleClick}>Weekly</a>
                <a href="" onClick={handleClick}>Monthly</a>
            </div>
        </div>
    )
}
