import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './OwlDemo.css';  
export class OwlDemo extends Component {  
        render()  
        {      
          return (  
              <div>  
            <div class='container-fluid' >      
            <div className="row title" style={{marginBottom: "20px"}} >      
                 
            </div>  
        </div>  
        <div class='container-fluid' >   
        <OwlCarousel items={5} margin={8} autoplay ={true} >  
        <div ><img  className="img shadow" alt = "pic1" src= {'https://technext.github.io/eshopper/img/vendor-5.jpg'}/></div>  
           <div><img  className="img shadow" alt = "pic2" src= {'https://technext.github.io/eshopper/img/vendor-3.jpg'}/></div>  
           <div><img  className="img shadow" alt = "pic3" src= {'https://technext.github.io/eshopper/img/vendor-2.jpg'}/></div>  
           <div><img  className="img shadow" alt = "pic4" src= {'https://technext.github.io/eshopper/img/vendor-1.jpg'}/></div>  
           <div><img className="img shadow" alt = "pic5" src= {'https://technext.github.io/eshopper/img/vendor-6.jpg'}/></div>  
           <div><img className="img shadow" alt = "pic6" src= {'https://technext.github.io/eshopper/img/vendor-7.jpg'}/></div>  
           <div><img className="img shadow" alt = "pic7" src= {'https://technext.github.io/eshopper/img/vendor-8.jpg'}/></div> 
           <div><img  className="img shadow" alt = "pic8" src= {'https://technext.github.io/eshopper/img/vendor-3.jpg'}/></div>  
           <div><img  className="img shadow" alt = "pic9" src= {'https://technext.github.io/eshopper/img/vendor-2.jpg'}/></div>  
           <div><img  className="img shadow" alt = "pic10" src= {'https://technext.github.io/eshopper/img/vendor-1.jpg'}/></div> 
      </OwlCarousel>  
      </div>  
      </div>  
          )  
        }  
      }  
        
  
export default OwlDemo;