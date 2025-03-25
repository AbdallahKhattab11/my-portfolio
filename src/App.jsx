

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import GoTop from "./components/GoTop/GoTop";

function App() {
  const sections = ["Home", "About", "Projects", "Contact"];
  return (
    <main className="app projectFont overflow-hidden relative">
      <Navbar sections={sections} />
      <Home />
      <GoTop />
    </main>
  );
}

export default App;
