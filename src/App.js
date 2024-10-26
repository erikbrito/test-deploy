import React from 'react'
import SideMenu from './Components/SideMenu/SideMenu'
import Card from './Components/Card/Card'
import TopBar from './Components/TopBar/TopBar'

import "./App.css"

// const cards = () => {
//   for (let i = 0; i < 5; i++){
//     return <Card />
//   }
// }

function App() {
  return (
    <div className="App">
      <SideMenu />
      <div className='Body'>
        <TopBar />
        <Card />
      </div>
    </div>
  )
}

export default App;
