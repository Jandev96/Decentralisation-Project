import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Hero from "../component/Hero";
import About from "../component/About";
import ResearchDesign from "../component/ResearchDesign";
import Decentralisation from "../component/Decentralisation";
import GramapanchayathBackground from "../component/GramapanchayathBackground";
import DataAnalysis from "../component/DataAnalysis";
import Conclusion from "../component/Conclusion";

export const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Hero />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/ResearchDesign",
                element: <ResearchDesign />,
            },
            {
                path: "/Decentralisation",
                element: <Decentralisation />,
            },
            {
                path: "/gramapanchayathBackground",
                element: <GramapanchayathBackground />,
            },
            {
                path: "/DataAnalysis",
                element: <DataAnalysis />,
            },
            {
                path: "/conclusion",
                element: <Conclusion />,
            },
          
        ]}])