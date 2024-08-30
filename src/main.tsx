import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About.tsx';
import NavBar from './components/NavBar.tsx';
import InstagramStory from './pages/work/InstagramStory.tsx';
import Swimlane from './pages/work/Swimlane.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/work/instagram-story",
    element: <InstagramStory />
  },
  {
    path: "/work/swimlane",
    element: <Swimlane />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
