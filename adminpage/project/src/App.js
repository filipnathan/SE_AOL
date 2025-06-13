import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter> {/* << extra safe */}
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
