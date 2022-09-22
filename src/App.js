import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import { Timeline } from "./pages/Timeline/Timeline";
import { useState } from "react";
import { ligthTheme, darkTheme } from "./styles/themes";
import Global from "./styles/global";
import { ModalPage } from "./components/DeletePost/Modal";
import { TimelineUser } from "./pages/TimelineUsers/TimelineUsers";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [postId, setPostId] = useState(null);

  return (
    <ThemeProvider theme={theme === "light" ? ligthTheme : darkTheme}>
    <ModalPage modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} postId={postId}/>
    <Global/>
      <Router>
      <Header setTheme={setTheme} theme={theme}/>
        <Routes>
          <Route path="/" element={<Timeline  setIsOpen={setIsOpen} setPostId={setPostId}/>} />
          <Route path="/users/:userId" element={<TimelineUser  setIsOpen={setIsOpen} setPostId={setPostId}/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
