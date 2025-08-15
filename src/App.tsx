import { Button, Button2 } from "./components/index"
import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1)
  }

  const handleRestart = () => {
    setCount(0)
  }

  return (
    <>
      <div className="card">
        <p>Contador: {count}</p>
        <Button label="Hola" parentMethod={() => alert("Hola")}></Button>
        
        {/* Siempre es mejor pasar la referencia de la funcion de una  */}
        <Button label={`Count is ${count}`} parentMethod={handleCount}></Button>
        
        {/* Aqui por ejemplo estamos creando una funcion que ejecuta a otra funcion... Para que? */}
        <Button label="Sumar 5" parentMethod={() => setCount(count + 5)}></Button>
        <Button label="Reiniciar" parentMethod={handleRestart}></Button>
        <Button2 label="Soy el Boton 2" parentMethod={() => alert("Boton 2")}></Button2>
      </div>
    </>
  );
}

export default App;
