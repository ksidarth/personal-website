import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Blog from './components/blog';


function App() {
  return (
    <Router>
      <div classname = "App">
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<HomePage />} />

          {/* Route for the blog page */}
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
