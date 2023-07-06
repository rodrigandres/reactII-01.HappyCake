import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from "./components/Navigator";
import Home from "./views/Home"
import Contact from "./views/Contact"
import NotFound from "./views/NotFound"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} className="text-center" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
