 
import './App.css';
import { Donnees } from './files/Donneespersonnelles';
import { Formation } from './files/FormationetDiplôme';
import { Autre } from './files/Autre';

function App() {
  return (
    <div >
    <div className="box1">
      <img src="images/WAMRA ABDELLAH.jpeg" alt="myimage" />
      <hr />
      <Donnees></Donnees>
      <Formation></Formation>
    </div>
    <div className="box2">
    <Autre></Autre>
    </div>
    </div>
    
  );
}

export default App;
