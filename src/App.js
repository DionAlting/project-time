import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthorPage from "./pages/AuthorPage/AuthorPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import Navbar from "./components/Navbar/NavBar";

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
