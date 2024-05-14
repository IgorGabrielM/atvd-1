import './App.css';
import { Route, Routes } from 'react-router';
import { AboutYou } from './pages/About-you';
import { Training } from './pages/Training';
import { Experience } from './pages/Experience';
import { Hobby } from './pages/Hobby';

function App() {
  return (
    <>
      <AboutYou />
      {/*       <Training /> */}
      {/* <Experience /> */}
      {/* <Hobby></Hobby> */}


      {/*       <div>
        <nav>
          <ul>
            <li><span >Sobre Você</span></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<AboutYou />} />
          <Route path="/training" element={<Training />} />

        </Routes>
      </div > */}
    </>
  );
}

export default App;
