import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Auth from "./Pages/Auth";
import { FinancialProvider } from "./context/financial-context";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <FinancialProvider>
              <Dashboard />
            </FinancialProvider>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
