import './App.css';
import ImageInSrc from './imageInSrc.jpg'


function App () {
  return ( 
    <div className ="App">

    <div style= {{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title-red">Your name here </h1> 

<br />

<img src= {ImageInSrc} alt='poisson'/>

<br/>

<img src="./fish.jpeg" alt='poisson0'/>

    </div>

    <video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" ></source>

</video>
</div>



  );

}

export default App;
