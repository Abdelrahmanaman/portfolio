import "./App.css";
import { AboutMe, Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";



function App() {
  return (
    <main className="">
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
    </main>
  );
}

export default App;
