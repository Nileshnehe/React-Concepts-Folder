
import React from 'react'
import Card from './components/Card'
import Button from './button'
const App = () => {
  return (
    <div className='app'>
      <Card user='nil' age={56} />
    <Card user='nilesh' age={56} />
      <Button text='Explore our page' />
      <Button text='Explore world'/>
    </div>
  )
}

export default App