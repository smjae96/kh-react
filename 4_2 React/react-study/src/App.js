import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout2 from './components/Layout2';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import UseContextTest from './components/hook/UseContextTest';
import AdressBook from './components/AdressBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 path(/) 인 경우 연결할 컴포넌트(Layout2) */}
        {/* Route 안에 Route를 작성할 경우 Layout2의 OutLet 위치에 해당 Route가 표시된다.*/}
        <Route path="/" element={<Layout2 />}>
          <Route path="/component/class" element={<ClassComponent />} />
          <Route path="/component/functional" element={<FunctionalComponent/>} />
          <Route path='/hook/context' element={ <UseContextTest/>} />
          <Route path='/adressBook' element = {<AdressBook/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
