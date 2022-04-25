import Recat, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
    constructor() {
        super();

        this.state = {
            alert: {
                type: '',
                message: '',
            },

            time: 0
        };

        this.times = {
            defaultTime: 1500,
            shortBreak: 300,
            longBreak: 900,
        }
    }

    componentDidMount() {
        this.setDefaultTime()
    }

    setDefaultTime() {
        this.setState({
            time: this.timedefaultTime
        })
    }

    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'WORKING!'
            }
        })
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a Short Break!'
            }
        })
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Takin a Long Break!'
            }
        })
    }

    render() {

        const {alert: {message, type}, time} = this.state;

        return (

            <div className = "Pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>

                <div className = "imer">
                    Mostrar timepo en minutos
                </div>

                <dvi classNAme = "types">
                <button
                    className = "start"
                    onClick = {this.setTimeForWork}>
                       
                       Start Working
                    </button>

                    <button
                    className = "short"
                    onClick = {this.setTimeForShortBreak}>
                       
                       Short Break
                    </button>

                    <button
                    className = "long"
                    onClick = {this.setTimeForLongBreak}>
                        
                       Long Break
                    </button>
                </dvi>

            </div>
        )
    }
}


export default Timer;