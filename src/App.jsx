import './App.css'
import Calculator from "./components/Calculator";

const data = require('./items.json')

const App = () => {

  return (
    <>
      <Calculator items={data} />
    </>
  );
}

export default App;
