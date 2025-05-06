import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/home"
import BasicLayout from "./layouts/BasicLayout"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(useGSAP, SplitText);

const router = createBrowserRouter([
  {
    path: "/",
    Component: BasicLayout,
    children: [
      {
        path: "/",
        Component: Home,
      }
    ],
  }
])


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
