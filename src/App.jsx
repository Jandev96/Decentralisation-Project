
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once - while scrolling down
    });
  }, []);
  

  return (
    <>
    
    <RouterProvider router={router} />
      
    </>
  )
}

export default App
