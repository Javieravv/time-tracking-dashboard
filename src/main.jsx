import React from 'react'
import ReactDOM from 'react-dom/client'
import { TimeTrackingApp } from './components/TimeTrackingApp'
import { AppProvider } from './context/AppProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppProvider>
            <div className='mainContainer'>
                <TimeTrackingApp />
            </div>
        </AppProvider>
    </React.StrictMode>,
)
