import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import ListedBooks from '../pages/ListedBooks'

import BookDetail from '../pages/BookDetail';
export  const router = createBrowserRouter([

   {
    path:'/',
      element:<MainLayout />,
      children:[
        {
          path:'/',
          element:<Home/>,
          
        },
       
       {
        path:'/listedbooks',
        element:<ListedBooks/>
       },

       {
        path:'/bookdetail/:bookId',
        element:<BookDetail/>,
       
        
      
      },
        
      ]
   }
    
  
  ]);