import React, {Component} from 'react';
import "./Home.css";

class Home extends Component {
    render() {
        const buttonStyle = {
            backgroundColor: 'gray',
            border: '1px solid red',
        }

        return (
            
            <div className="Home">
                <hi>
                    Adivina el numero
                </hi>
                <p/>

                <div>

                    {/* Styles object uwu */}
                    <button style= {buttonStyle}>
                        Click
                    </button>
                </div>
            </div>
        );
    }
}

export default Home;