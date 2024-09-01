import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About.tsx';
import InstagramStory from './pages/work/InstagramStory.tsx';
import Swimlane from './pages/work/Swimlane.tsx';
import Befragungstool from './pages/work/Befragungstool.tsx';
import Index from './pages/Index';
import { useTitle } from 'react-use';

function App() {
  useTitle("Pablo Thuerig")

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/work/instagram-story",
      element: <InstagramStory />,
    },
    {
      path: "/work/swimlane",
      element: <Swimlane />,
    },
    {
      path: "/work/befragungstool",
      element: <Befragungstool />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
