import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';



const App = () => {
  const [name] = useState('Rui Lagos')
  const [age, setAge] = useState(90);
  const [bg] = useState('Green');

  
  const handle49 = () => {
      setAge(49);
  }

  const handle50 = () => {
    setAge(50);
  }
  
  return (
    <div style={{backgroundColor: bg}}>
      <Header name={name} age={age} />
      

      <button onClick={handle49}>Tenho 49 anos</button>
      <button onClick={handle50}>Completarei 50 anos</button>

      <Footer />
    </div>
  )
}

export default App;
