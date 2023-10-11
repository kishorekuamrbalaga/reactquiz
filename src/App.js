import logo from "./logo.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { DataFetchAPI } from "../src/API/DataFetch";
import Quiz from "./components/Quiz";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Quiz />
      </QueryClientProvider>
    </div>
  );
}

export default App;
