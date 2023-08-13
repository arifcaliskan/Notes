import React from "react"
import Navbar from "./components/Navbar"
import Form from "./components/Form"

function App() {

  return (
    <div>
      <div className="bg-sky-950">
        <Navbar />
      </div>
     
      <div className="container mx-auto flex justify-center flex-col">
        <Form />
      </div>
    </div>
  )
}

export default App
