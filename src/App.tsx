import "./App.css";
import Home from "./Home/Home";
import { SearchProvider } from "./SearchContext";

function App() {
  return (
    <SearchProvider>
      <Home />
    </SearchProvider>
  );
}

export default App;
