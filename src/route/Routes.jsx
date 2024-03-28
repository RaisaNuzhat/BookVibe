import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import ListedBooks from '../pages/ListedBooks'

import BookDetail from '../pages/BookDetail';
import ReadBooks from '../components/ReadBooks';
import WishLists from '../components/WishLists'
import PagestoRead from '../pages/PagestoRead';
import ErrorPage from '../components/ErrorPage';

export  const router = createBrowserRouter([

   {
    path:'/',
      element:<MainLayout />,
      errorElement: <ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>,
          
        },
        {
          path:'/bookdetail/:bookId',
          element:<BookDetail/>,
         
          
        
        },
       
        {
          path:'/listedbooks',
          element:<ListedBooks/>,
          loader: () => fetch('/Book.json'),   
          
          children:[
            {
                path:'readbooks',
                element:<ReadBooks/>,
              
            },
            {
                path:'wishlistbooks',
                element:<WishLists/>,
                
            }
          ]
        },
        {
          path:'/pagestoread',
          element:<PagestoRead/>
        }

       
        
      ]
   }
    
  
  ]);