import API from "./data";
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Caro from "./Caro";
import {
  useParams,
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'better-react-carousel';

// const images=API.map((item)=>{
//   return (item.imageUrl)
// })
// console.log(images)



function App() {
  // console.log(API)
  return (
    <>
    <h1>For desktop</h1>
    <Caro  show={4}>
   <div>
        {API.map((item)=>{
           return  (<div className="cars"> 
            
           <h5>{item.bodyType}</h5><br/><h3>{item.modelType}</h3><br/><h2>{item.modelName}</h2><br/>
           <img src={item.imageUrl} alt="car"/><br/>
           <Router>
            
           <div className="route">
           
            <div className="link">
            <Link to={`/Learn/${item.id}`}>Learn</Link>
            </div>
           <div className="link" >
           <Link to="/store">Store</Link>
           </div>
           </div>
           {/* <Routes>
           <Route path="/Learn" element={<Learn/>} />

           </Routes> */}
           {/* <Route exact path="/Learn" element={<Learn/>}/> */}
          </Router>
       </div>)
     })}
    </div>
   </Caro>
    <h1>For Phone</h1>
    <Carousel  showThumbs={true}
        showStatus={false}
        infiniteLoop
        // emulateTouch
        // autoPlay axis="horizontal"
        useKeyboardArrows
        transitionTime={1000}
        // axis="vertical"
        // selectedItem={1}
        width="500px">

    {API.map((item)=>{
           return  (<div className="cars"> 
           <div className="gadi"> 
           <h5>{item.bodyType}</h5><br/><h3>{item.modelType}</h3><br/><h2>{item.modelName}</h2><br/>
          <img src={item.imageUrl}/>



           <Router>
           <div className="route">
            <div className="link">
            <Link to={`/Learn/${item.id}`}>Learn</Link>
            </div>
           <div className="link" >
           <Link to="/store">Store</Link>
           </div>
          
           </div>
           </Router>

           </div>
        </div>)


       })}
       
   
     
    </Carousel>
    
    </>
  );
}

export default App;
