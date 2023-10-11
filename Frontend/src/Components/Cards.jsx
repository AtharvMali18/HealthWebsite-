import '../CSS/Cards.css';
import { Link } from 'react-router-dom';


const Cards = () => {
    return (
        <section className="card-section">

            <h2 className="explore-heading">Explore Features</h2>
            <div className="card-container">
                <div className="card">
                    <div className="icon">
                    </div>
                    <p className="title">Register </p> <br />
                    <br />
                    <Link to="/Signup"><button className='btn'>Register</button></Link>
                </div>

                <div className="card">
                    <div className="icon">
                    </div>
                    <p className="title">Certificates</p>
                    <br />
                    <br />
                    <Link to="/"><button className='btn'>Check</button></Link>
                </div>
            </div>
        </section>
    );
};

export default Cards;
