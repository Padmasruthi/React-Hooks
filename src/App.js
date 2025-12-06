import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import UseStatePage from './hooks-pages/usestate/UseStatePage'
import UseEffectPage from './hooks-pages/useeffect/UseEffectPage'
import UseRefPage from './hooks-pages/useref/UseRefPage'
import UseMemoPage from './hooks-pages/usememo/UseMemoPage'
import UseCallbackPage from './hooks-pages/usecallback/UseCallback'
import UseContextPage from './hooks-pages/usecontext/UseContextPage'
import UseReducerPage from './hooks-pages/usereducer/UseReducerPage'

import TodoApp from './todoapp/TodoApp'
// import TestApp from './testingApp/TestApp'

const App = () => {

  return (
    // <>
    //   <Todo />
    //   <TestApp />
    //   {/* <Counter/> */}
    // </>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<UseStatePage />} />
        <Route path='/useeffect' element={<UseEffectPage />} />
        <Route path='/useref' element={<UseRefPage />} />
        <Route path='/usememo' element={<UseMemoPage />} />
        <Route path='/usecallback' element={<UseCallbackPage />} />
        <Route path='/usecontext' element={<UseContextPage />} />
        <Route path='/usereducer' element={<UseReducerPage />} />
        <Route path='/todos' element={<TodoApp />} />



      </Routes>

    </BrowserRouter>


  );
};

export default App;
