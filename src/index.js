import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
    BrowserRouter,
    Routes
} from "react-router-dom";
import NewsPage from "./news-page/news-page";
import SinglePostsPage from "./single-posts-page/single-posts-page";
import Routing from "./Routing/Routing";

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path={'/'} element={<App/>}>
//             <Route path={'news'} element={<NewsPage/>}/>
//             <Route path={'news/:id'} render={({match}) => {
//                 console.log(match)
//                 return <SinglePostsPage id={match.params.id}/>
//             }}/>
//         </Route>
//
//     )
//     // {
//     //     path: '/',
//     //     element: <App/>
//     // },
//     // {
//     //     path: 'news',
//     //     element: <NewsPage/>
//     // },
//     // {
//     //     path: 'news/:id',
//     //     element: <SinglePostsPage/>
//     // }
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*<RouterProvider router={router}/>*/}
      <BrowserRouter>
          <Routing/>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
