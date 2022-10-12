import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import TopicQuiz from './components/TopicQuiz/TopicQuiz';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async()=> {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>,
        },
        {
          path: '/topics',
          loader: async()=> {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Topics></Topics>,
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <TopicQuiz></TopicQuiz>
        },
        {
          path: '/statistics',
          loader: async()=> {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          }, 
          element: <Statistics></Statistics>,
        },
        {
          path: '/blog',
          element: <Blog></Blog>,
        },
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
