import { Routes, Route } from 'react-router-dom'
import Home from './pages/landing/Home'
import News from './pages/news/News'
import Blog from './pages/blog/Blog'
import BlogDetails from './pages/blog/BlogDetails'
import NotFound from './pages/notFound/NotFound'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home/news' element={<News />} />
      <Route path='/home/blog' element={<Blog />} />
      <Route path='/home/blog/details' element={<BlogDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
