import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

// Import Pages
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Packages from "./pages/Packages";

import Advice from "./pages/Advice";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";


// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JourneyGuide from './pages/JourneyGuide';
import PackageDetails from './pages/PackageDetails';


function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetails />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/JourneyGuide" element={<JourneyGuide />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/packages/:id" element={<PackageDetails />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App