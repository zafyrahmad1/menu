import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Desserts from "./Desserts";
import Drinks from "./Drinks";
import Sandwiches from "./Sandwiches";
import Album from "./Album";
import Layout from "./Layout";

export default function Direct() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Album />} />
          <Route path="/Desserts" element={<Desserts />} />
          <Route path="/Drinks" element={<Drinks />} />
          <Route path="/Sandwiches" element={<Sandwiches />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Direct />);