import project1 from '/Users/ivanapina/React-Portfolio/src/assets/doblepagina-margiela.png';
import project2 from '/Users/ivanapina/React-Portfolio/src/assets/popcornheads.png';
import project3 from '/Users/ivanapina/React-Portfolio/src/assets/weatherdashboard.png';

export default function Portfolio() {
    return (
      <div>

        <h1>Portfolio</h1>
        
        <p>
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
                
                <div className="card">
                  <img className="cardImgTop" src={project1} alt="..." width="400px" />
                  <p className="cardText">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                  </div>
<div className="card">
                <img className="imageFluid" src={project2} alt="..." width="400px" /> 
                </div>
                <div className="card">
                <img className="imageFluid" src={project3} alt="..." width="400px"/>

</div>
                    
                    </div>
   
    );
  }
  