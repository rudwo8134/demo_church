import './App.css';


// Components
import Navbar from './Components/Navbar'
import Body from './Components/Mainbody'
import Event from './Components/events'
import Slide from './Components/slidefull'
import Video from './Components/video'
import Last from './Components/info'
import Footer from './Components/Footer'






function App() {
 

  return (
   <div>
     <Navbar/>
     <Body/>
     <Event/>
     <Slide/>
     <Video/>
     <Last/>
    <Footer/>
   </div>
      
  );
}

export default App;
