import { Route, Routes } from "react-router-dom";
import CreateNotes from "./components/CreateNotes"
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import UpdateNotes from "./components/UpdateNotes";
import Notes from "./components/Notes";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<CreateNotes />} />
        <Route path="/update" element={<UpdateNotes/>} />
        <Route path="/update/:id" element={<UpdateNotes/>} />
        <Route path="/notes" element={<Notes/>} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
