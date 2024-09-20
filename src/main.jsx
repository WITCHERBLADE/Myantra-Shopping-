import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Bag from './routes/Bag.jsx'
import Home from './routes/Home.jsx'
import { Provider } from 'react-redux'
import store from './store/Item.js'
import Men from './routes/Men.jsx'
import Women from './routes/Women.jsx'
import Kids from './routes/Kids.jsx'
import Shoes from './routes/Shoes.jsx'
import Beauty from './routes/Beauty.jsx'

const router = createBrowserRouter([{
  Path:"/",
  element:<App />,
  children:[{
    path:"/",element:<Home />,
  },
{
  path:"/bag",element:<Bag />
},
{
  path:"/men",element:<Men />
},
{
  path:"/women",element:<Women />
},
{
  path:"/kids",element:<Kids />
},{path:"/shoes",element:<Shoes />},
,{path:"/beauty",element:<Beauty />},]
}]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
