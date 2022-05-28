//import Home from './Home/Home';
import './App.css';
import Header from '../shared/layout/Header';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
// import Todo from './Todo/Todo';
//import Timer from './Pomodoro/Timer';
// import Crypto from './Crypto';
// import ChartHome from './Chart/ChartHome';
//import Animation from './Animating/Animation';
//import Numbers from './PureComponent/Number';
import Calculator from './Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <Header title="Number" url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      <Content>
        <Calculator />
      </Content>
      <Footer />
    </div>
  );
}

export default App;