import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Navbar from "./Navbar";
import Anasayfa from "./Home";
import Create from "./Create";

import BlogDetails from "./BlogDetails";

import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Switch>
            <Route exact={true} path="/">
              <Anasayfa/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>


      </div>
    </Router>
  );
}
export default App;
