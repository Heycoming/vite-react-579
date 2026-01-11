// src/App.jsx
import { Routes, Route } from 'react-router-dom';
// ... 引入 Header, Footer ...
import Home from './pages/Home';
import About from './pages/About';          // <--- 确保引入
import NorthMichigan from './pages/NorthMichigan';
import Reminder from './pages/Reminder';    // <--- 确保引入

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />          {/* <--- 路由配置 */}
        <Route path="/north-michigan" element={<NorthMichigan />} />
        <Route path="/reminder" element={<Reminder />} />    {/* <--- 路由配置 */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
