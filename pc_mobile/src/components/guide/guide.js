import './guide.css'
import iphone from '../images/iphone.png'
import laptop from '../images/laptop.png'
import computer from '../images/computer.png'

function Guide () {
  return (
    <div className="container">
        <div className="guide">
            <h1>Mon niveau de connaissance en informatique</h1>
            <div className="niveau">
                <img src={iphone} alt=""/>
                <h2>Débutant</h2>
            </div>
            <div className="niveau">
                <img src={laptop} alt=""/>
                <h2>Intermédiaire</h2>
            </div>
            <div className="niveau">
                <img src={computer} alt=""/>
                <h2>Expert</h2>
            </div>
        </div>
    </div>
    );
}

export default Guide;