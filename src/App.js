
import './App.scss';

import { LoginComponant } from './auth/LoginComponant';
import { PageComponant } from './pages/PageComponant';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App mt-5">
      {/* <Paper elevation={3} >
        Fist paper material UI
      </Paper> */}

      <Routes>
        <Route path='/' element={ <Navigate to='/login
        ' replace={true} />}></Route>
        <Route path='/login' element={<LoginComponant></LoginComponant>}></Route>
        <Route path='pages/*' element={<PageComponant></PageComponant>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
