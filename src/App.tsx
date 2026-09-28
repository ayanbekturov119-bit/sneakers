import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-[#E7F6FF] min-h-screen py-10">
      <div className="bg-white w-[1080px] mx-auto rounded-xl overflow-hidden">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;