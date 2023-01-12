import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage'
import Background from './components/Background'
import Skills from './components/Skills'
import Projects from './components/Projects'


function App() {
  return (
    <div className="App">
        <Homepage />
        <Background />
        <Projects />        
        <Skills />        

    </div>
  );
}

export default App;
