import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Hero from "../component/Hero";
import About from "../component/About";

export const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Hero />,
            },
            {
                path: "/about",
                element: <About />,
            },
          
        ]}])