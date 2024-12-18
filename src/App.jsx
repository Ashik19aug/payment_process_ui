import './App.css'
import './index.css'
import PaymentForm from "./components/PaymentForm.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PaymentSuccess from "./components/PaymentSuccess.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:slug?" element={<PaymentForm />}/>
        <Route path="/transaction" element={<PaymentSuccess />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
