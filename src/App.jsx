import Header from "./components/Header";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Features from "./components/Features";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Background />
      <Header />
      <Navbar />
      <div className="container">
        <Search />
        <Features />
      </div>
    </div>
  );
}

export default App;
