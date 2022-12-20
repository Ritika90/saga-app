import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Posts from "components/Posts";
import SinglePost from "components/SinglePost";

import { store, sagaMiddleware } from "providers/store";
import rootSaga from "middleware/sagas";

import "./App.css";

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Posts />} />
            <Route exact path="/posts/:id" element={<SinglePost />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
