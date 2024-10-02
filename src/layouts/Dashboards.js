import React from 'react'
import Header from './Header'

const Dashboards = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
       
    </div>
  )
}

export default Dashboards