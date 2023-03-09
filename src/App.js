import './App.css';
import StartPage from './pages/StartPage';
import GameComponent from './components/GameComponent'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<StartPage/>}></Route>
        <Route path='/game' element={<GameComponent/>}></Route>
      </Routes>
      </>
  );
}

export default App;
