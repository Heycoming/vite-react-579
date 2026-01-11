// src/App.jsx
import { Routes, Route, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import NorthMichigan from "./pages/NorthMichigan";
import Reminder from "./pages/Reminder";

// 全站通用布局：固定头尾 + 中间内容区
function Layout() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* 需要 Header/Footer 的页面都放到这个 Layout 下面 */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/NorthMichigan" element={<NorthMichigan />} />
        <Route path="/reminder" element={<Reminder />} />
      </Route>

      {/* 以后如果有“不需要头尾”的页面，就放在 Layout 外面 */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}