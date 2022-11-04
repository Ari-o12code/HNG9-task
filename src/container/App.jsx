
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Contact from "../components/Contact"
import Main from "../components/Main"
import Footer from "../components/Footer"



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
