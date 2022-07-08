import NavBar from "./Component/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Component/About";
import Menu from "./Pages/menu";
import Contact from "./Component/Contact";

import Footer from "./Component/Footer";
import PrivateRouter from "./Utility/PrivateRouter";
import Login from "./Component/Login";
import Register from "./Component/Register";
import PublicRouter from "./Utility/PublicRouter";
import Blog from "./Component/Blog";
import AddBlog from "./Pages/AddBlog";
import EditBlog from "./Pages/EditBlog";
import BlogDetail from "./Pages/BlogDetail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route element={<PublicRouter />}>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Route>

        <Route element={<PrivateRouter />}>
          <Route path="/about" exact element={<About />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/blog" exact element={<Blog/>} />
          <Route path="/addblog" exact element={<AddBlog/>}/>
          <Route path="/editblog" exact element={<EditBlog/>}/>
          <Route path="/blogdetail" exact element={<BlogDetail/>}/>
          <Route path="/contact" exact element={<Contact />} />
        </Route>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
