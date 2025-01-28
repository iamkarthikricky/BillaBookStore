
import './App.css';



import Home from './components/Home/home.jsx';
import Cart from './components/Cart/cart.jsx';

//import Demo from './components/Demo/demo.js';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  },
]);

const App =()=>{
    return (
          <div>
            <RouterProvider router={router}/>
        </div>
    )
  }

export default App;
