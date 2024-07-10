
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// bootstrap

import "../node_modules/bootstrap/dist/css/bootstrap.css"

import Card from "./components/Card"

function App() {
  

  return (
    <>
    <div className="container">
      <div className="row">
      <Card/>
      </div>
      <div className="row mt-4">
      <Card/>
      </div>
    </div>
    </>
  )
}

export default App
