import './App.css';
import backgroud from './Image/background.jpeg';
import buddha from './Image/budhha.png';
import { useState } from 'react';

function App() {
const[show ,setShow] =useState(true)
  return (
    <div className="App">
      <div  className='closeicon'>

        <button onClick={()=> setShow(!show)}><i class="fa fa-angle-double-left"></i></button>
            
          </div>
      <div className='container'>
        {
          show? 
          <div className='sidebar'>    
          <h3 style={{paddingTop:"20px"}}>MATREYA BUDDHA IN GESTURE OF FEARLESSNESS ( ABHAYA MUDRA )</h3>
          <div className='icons'>
            <p><i class="fa fa-heart"></i><br /><span>0</span></p>
            <p><i class="fa fa-share-alt"></i><br /><span>120</span></p>
            <p><i class="fa fa-eye"></i>
              <br /><span>26</span>
            </p>
          </div>
          <div>
            <span>Dyanamic : Architecture</span><br />
            <span>Period : 200hrs</span><br />
            <span>Material : Sandsitance</span><br />
            <span>Location  : Mumbai Maharastra</span><br />
          </div>
          <div>
            <p > <span style={{ fontSize: '20px' }}>Descriptions :</span>  <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quam enim dignissimos earum. Similique minus maiores quam fuga tempore, amet, quisquam, ad quod debitis distinctio esse animi magnam tempora atque? </p>

          </div>
          <div>
            <div>
              <i class="fa fa-arrow-right"></i> &nbsp;&nbsp;  <a style={{ color: 'red' }} href="">Read More</a>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            <button style={{ background: 'orange', color: 'white' }}>Add To Collections</button>
            <button style={{ background: 'transparent' }}>Collections</button>
          </div>

        </div>:null
        }
        <div className='image-container' style={{ backgroundImage: `url(${backgroud})`}}>
            <img style={{width:"50%"}} src={buddha} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;