import { Route, Routes } from 'react-router-dom';
// Styles
import './styles/App.css'
// Components
import Layout from './components/layout/Layout';
// Pages
import Post from './pages/Post/Post';
import About from './pages/About/About';
import Notfoundpage from './pages/NotFoundPage/Notfoundpage';
import PostIdPage from './pages/PostIdPage/PostIdPage';


function App() {


  return (
    <div>

      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Post/>} />
          <Route path="post/:id" element={<PostIdPage/>} />
          <Route path="about" element={<About/>} />
          <Route path="*" element={<Notfoundpage/>} />
        </Route>
      </Routes>

    </div>
  )
}

export default App;