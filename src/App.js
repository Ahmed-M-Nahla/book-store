import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context.";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import BookList from "./component/BookList/BookList";
import BookDetalis from "./component/BookDetalis/BookDetalis";
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path=" book" element={<BookList />} />
            <Route path="book:id" element={<BookDetalis />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
