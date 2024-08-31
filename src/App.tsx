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
import { useState } from 'react';
import PageIsLoading from './pages/feedback/PageIsLoading.tsx';
import { motion } from 'framer-motion';
import usePageState from './globalStates.ts';
import { cn } from './utils.ts';

function App() {
  const { isPageLoaded, setPageLoaded } = usePageState();
  const [fadeOut, setFadeOut] = useState(false);

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

  const onPageLoad = () => {
    setFadeOut(true);
    setTimeout(() => {
      setPageLoaded(true);
      console.log('page loaded');
    }, 500); // duration of fade-out
  };
  if (!isPageLoaded) {
    Promise.all(Array.from(document.images).map(img => {
      if (img.complete)
        return Promise.resolve(img.naturalHeight !== 0);
      return new Promise(resolve => {
        img.addEventListener('load', () => resolve(true));
        img.addEventListener('error', () => resolve(false));
      });
    })).then(results => {
      console.log(results);
      onPageLoad()
    });
  }

  return (
    <>
      {!(isPageLoaded) ??
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center bg-white"
        >
          <PageIsLoading />
        </motion.div>
      }
      <div className={cn(isPageLoaded ? "" : "hidden")}>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
