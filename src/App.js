import "./App.css";
import Header from "./components/Header";
import TodoPage from "./pages/TodoPage";

const App = () => {
 
  return (
    <div className="app_container">
      <div className="app_list">
        <div>
          <Header />
        </div>
        <TodoPage />
      </div>
    </div>
  );
};

export default App;
