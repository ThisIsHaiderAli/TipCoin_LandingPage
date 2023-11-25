import './App.css';
import First_sec from './Components/First_Sec/First_sec';
import Footer from './Components/Footer/Footer';
import Get_Start from './Components/Get_Start/Get_Start';
import Header from './Components/Header/Header';
import Point_work from './Components/Point_Work/Point_work';
import Process from './Components/Process/Process';

function App() {
  return (
    <div className="App">
      <Header/>
      <First_sec/>
      <Point_work/>
      <Process/>
      <Get_Start/>
      <Footer/>
    </div>
  );
}

export default App;
