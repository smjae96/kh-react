import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ErrorPage from './pages/ErrorPage';

import Layout from './components/Layout';
import Layout2 from './components/Layout2';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import UseStateTest from './components/hook/UseStateTest';
import UseEffectTest from './components/hook/UseEffectTest';
import WordsCount from './components/practice/WordsCount';
import UseMemoTest from './components/hook/UseMemoTest';
import UseCallbackTest from './components/hook/UseCallbackTest';
import UseRefTest from './components/hook/UseRefTest';
import UseContextTest from './components/hook/UseContextTest';

// 연결할 path(주소)와 컴포넌트를 연결하기 위한 설정
const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout2 />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "/component/class",
    //     element: <ClassComponent />
    //   }
    // ]
  },
  {
    path: "/hello",
    element: <h2>Hello, React!</h2>
  },
  {
    path: "/component/class",
    element: <ClassComponent value={1} name={"심재윤"} />
  },
  {
    path: "/component/functional",
    element: <FunctionalComponent />
  },
  {
    path: "/hook/state",
    element: <UseStateTest />
  },
  {
    path: "/hook/effect",
    element: <UseEffectTest/>
  },
  {
    path: "/practice/wordcount",
    element: <WordsCount/>
  },
  {
    path: "/hook/memo",
    element: <UseMemoTest/>
  },
  {
    path: "/hook/callback",
    element: <UseCallbackTest/>
  },

  { 
    path: "/hook/dom",
    element: <UseRefTest/>
  },

  {
    path: "/hook/context",
    element: <UseContextTest/>
  }



]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App></App>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
