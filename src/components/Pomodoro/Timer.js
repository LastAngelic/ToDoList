import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Countdown from "react-countdown-now";
import './Timer.css';

let paused;

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            alert: {
                type: '',
                message: '',
            },

            time: 0,

            isToggleOn: true
        };

        this.times = {
            defaultTime: 1500,
            shortBreak: 300,
            longBreak: 900,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setDefaultTime()
    }

    setDefaultTime() {
        this.setState({
            time: this.times.defaultTime
        })
    }

    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'WORKING!'
            }
        })

        this.setTime(this.times.defaultTime);
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a Short Break!'
            }
        })

        this.setTime(this.times.shortBreak);
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Takin a Long Break!'
            }
        })

        this.setTime(this.times.longBreak);
    }

    setTime = (newTime) => {
        this.restartInterval();
        this.setState({
            time: newTime,
        })
    }

    restartInterval = () => {
        clearInterval(this.interval);

        if(!paused) {paused = setInterval(this.countDown, 1000);}

    }
    

    countDown = () => {
        if(this.state.time  === 0){
            this.setState({
                alert: {
                    type: 'Beep',
                    message: 'Beep Madafaka do u hear me',
                }
            })
        } else {
            this.setState({
                time: this.state.time -1,
            })
        }
    }

    displayTimer(seconds) {
        var min = Math.floor(seconds / 60);
        var sec = (seconds - (min * 60));

        console.log(seconds);

        if(min < 10){
            if(sec < 10){
                return "0" + min + ":0" + sec;
            }

            else{
                return "0" + min + ":" + sec;
            } 
        }

        if(sec < 10){
            return min + ":0" + sec;
        }

        else{
            return min + ":" + sec;
        }
    }

    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));

        if(!paused) {paused = setInterval(this.countDown, 1000);}
      }

    stopTimer = (newTime) => {
        window.location.reload(false);
    }

    handlePauseClick = () => {
        this.countdownApi && this.countdownApi.pause();
    };

    // handleUpdate = () => {
    //     this.forceUpdate();
    // };

    handlePause = () => {

          clearInterval(paused);

          paused = null;

          this.handleClick();
    };

    render() {

        const {alert: {message, type}, time} = this.state;

        return (

            <div className = "Pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>

                <div className = "timer">
                    {this.displayTimer(time)}
                </div>

                <div className = "types">
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
                </div>

                <div>
                    <button onClick={this.handlePause}>
                        {this.state.isToggleOn ? <i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i> }
                    </button>

                    <button 
                    className = "Stop"
                    class="fa-solid fa-stop"
                    onClick = {this.stopTimer}
                    />
                </div>

            </div>
        )
    }
    
}

export default Timer;