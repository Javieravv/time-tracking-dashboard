// Tarjeta para ver los tiempos

export const CardTimeTracking = ({ 
      backColor = "white", 
      imagenFondo = '',
      title='',
      currentHours = 0,
      previousHours = 0,
      typeTime=""
    }) => {

    const styleCard = {
      backgroundColor: backColor,
    }

    let tempoTime = ""
    switch (typeTime) {
      case 'daily':
        tempoTime = 'Day'
        break;
      case 'weekly':
        tempoTime="Week"
        break;
      case 'monthly':
        tempoTime="Month"
        break;
      default:
        break;
    }

    return (
      <div className='card'>
          <div 
            className="card-color"
            style={styleCard}
          >
            <img src={imagenFondo} alt="Imagen de fondo" />
          </div>
          <div className="card-time">
              <div>
                  <p>{title}</p>
                  <img src="images/icon-ellipsis.svg" alt="" />
              </div>
              <div>
                  <p>{currentHours}hrs</p>
                  <p>Last { tempoTime } - {previousHours}hrs</p>
              </div>
          </div>
      </div>
    )
}
