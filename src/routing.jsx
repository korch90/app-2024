import { createBrowserRouter } from "react-router-dom";
import App from "./App.js"
import Page1 from "./components/Page1.jsx"
import Layout from "./Layout.jsx"
 
export const router = createBrowserRouter([
{
    path:"/",
    element:<Layout/>,
    children: [
     {   element:<App/>,
        index:true,
    },
    {
        path:"/page1",
        element :<Page1/>,
    }
    ]
},



])