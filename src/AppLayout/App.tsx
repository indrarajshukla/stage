import { BrowserRouter as Router } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { AppRoutes } from "./AppRoutes";
import { DataProvider } from "../pages/DataContext";

function App() {
  return (
    <Router>
      <AppLayout>
        <DataProvider>
          <AppRoutes />
        </DataProvider>
      </AppLayout>
    </Router>
  );
}

export default App;
