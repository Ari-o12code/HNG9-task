
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Contact from "../components/Contact"
import Main from "../components/Main"
import Footer from "../components/Footer"



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/HNG9-stage-1-task" element={<Main />} />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
