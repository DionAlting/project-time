import AuthorPage from "./pages/AuthorPage";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ArticlePage from "./pages/ArticlePage";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar className="App"></Navbar>
      <Switch>
        <Route path="/article/:article_id" component={ArticlePage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/author/:author_id" component={AuthorPage} />
      </Switch>
    </div>
  );
}

export default App;
