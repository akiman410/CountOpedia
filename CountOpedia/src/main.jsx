import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Counter from "./Counter";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="d-flex flex-column min-vh-100">
      <Header></Header>
      <main className="flex-fill">
        <div>
          <Counter></Counter>
        </div>
      </main>
      <Footer></Footer>
    </div>
  </StrictMode>,
);
