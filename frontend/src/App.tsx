import "./App.css";
import Educational from "./pages/Educational";
import { Login } from "./pages/Login";
import { Home } from "./pages/home";
import { AllRoutes } from "./routes/Allroutes";

function App() {
  return (
    <div>

      {/* <Home /> */}
      <AllRoutes/>
     <Educational/>
    </div>
  );
}

export default App;
