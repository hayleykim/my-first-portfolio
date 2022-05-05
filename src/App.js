import './App.css';
import Navigation from './screens/navigationBar/NavigationBar';
//import Particles from 'react-tsparticles';
import Particles from './Particles';
//import ParticleAnimation from 'react-particle-animation';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Particles />
      <AboutMe />
      <Technologies />
      <Portfolio />

    </div>
  );
}

export default App;
