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
import { useEffect, useState } from 'react';
import PageIsLoading from './pages/feedback/PageIsLoading.tsx';
import { motion } from 'framer-motion';
import usePageState from './globalStates.ts';

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

  useEffect(() => {
    const onPageLoad = () => {
      setFadeOut(true);
      setTimeout(() => {
        setPageLoaded(true);
        console.log('page loaded');
      }, 500); // duration of fade-out
    };

    const images = Array.from(document.images).filter(img => !img.complete);

    if (images.length === 0) {
      onPageLoad(); // Call if there are no images to wait for
    } else {
      Promise.all(images.map(img => new Promise(resolve => {
        img.onload = img.onerror = resolve;
      }))).then(onPageLoad);
    }
  }, [setPageLoaded]);

  return (
    <>
      {isPageLoaded ? (
        <RouterProvider router={router} />
      ) : (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center bg-white"
        >
          <PageIsLoading />
        </motion.div>
      )}
    </>
  );
}

export default App;
