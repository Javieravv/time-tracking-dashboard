// Componente principal
import { CardTimeTracking } from './CardTimeTracking';
import { TimeInfoPerson } from './TimeInfoPerson';
import { data } from '../data/data'
import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

export const TimeTracking = () => {
    const  {stateTime, setStateTime}  = useContext(AppContext)
    // console.log ( data )
    // mostramos lo que hay, conforme a lo que se escoja

    useEffect(() => {
        const currentValues = data.map ( (d) => {
            return d.timeframes[stateTime.typeTime].current
        })
    
        const previousValues = data.map ( (d) => {
            return d.timeframes[stateTime.typeTime].previous
        })
        setStateTime ({
            ...stateTime,
            current: currentValues,
            previous: previousValues
        })
        console.log ( 'EL NUEVO ESTADO ES: ', stateTime )

    }, [stateTime.typeTime ])
    
    console.log (stateTime)

    return (
      <div className='container-timetracking'>
          <TimeInfoPerson />
          <section className="info-time">
              {
                  stateTime.titles.map((title, index) => {
                    console.log ( title, index );
                    return <CardTimeTracking 
                        key={index}
                        backColor={stateTime.colors[index]}
                        imagenFondo={`/images/${stateTime.images[index]}`}
                        title={stateTime.titles[index]}
                        currentHours={stateTime.current[index]}
                        previousHours={stateTime.previous[index]}
                        typeTime={stateTime.typeTime}
                    />
                  })

              }
          </section>
      </div>
    )
}
