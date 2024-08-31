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
  const { isPageLoaded, setPageLoaded } = usePageState()
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
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
    {
      path: "/work/befragungstool",
      element: <Befragungstool />
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

    Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
      console.log(Array.from(document.images));
      if (!(document.images.length >= 0))
        onPageLoad()
    });
    // if (document.readyState === 'complete') {
    //   onPageLoad();
    // } else {
    //   window.addEventListener('load', onPageLoad, false);
    //   return () => window.removeEventListener('load', onPageLoad);
    // }
  }, []);

  return (
    <>
      {isPageLoaded ? (
        <RouterProvider router={router} />
      ) : (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          transition={{ duration: 0.5 }} // same duration as setTimeout above
          className="absolute inset-0 flex items-center justify-center bg-white"
        >
          <PageIsLoading />
        </motion.div>
      )}
    </>
  );
}

export default App;
