import { useState } from 'react'
import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <p className="lead">Just simple plain paragraph</p>
      <p>Just simple plain paragraph</p>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </>
  )
}

export default App
