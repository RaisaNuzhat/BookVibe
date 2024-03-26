import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import ListedBooks from '../pages/ListedBooks'
import Banner from '../components/Banner';
import Books from '../components/Books';
export  const router = createBrowserRouter([

   {
    path:'/',
      element:<MainLayout />,
      children:[
        {
          path:'/',
          element:<Home/>,
          children:[
            {
                index:true,
                element:<Banner/>,
                

            },
            {
              index:true,
              element:<Books/>,
              
            }
          ]
        },
       
       {
        path:'/listedbooks',
        element:<ListedBooks/>
       },
        
      ]
   }
    
  
  ]);