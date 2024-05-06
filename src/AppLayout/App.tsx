import { BrowserRouter as Router } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <Router>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </Router>
  );
}

export default App;
