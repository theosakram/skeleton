import "./config/scss/App.scss";
import { config } from "dotenv";
import { routes } from "./router";
import { Aside } from "./views/wrappers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

config();

function App() {
    return (
        <div className="App">
            <Router>
                <section className="containers">
                    <Aside routes={routes} />

                    <article className="routes">
                        <Switch>
                            {routes.map((x, index) => (
                                <Route
                                    key={index}
                                    path={x.path}
                                    exact={x.exact}
                                    component={x.component}
                                />
                            ))}
                        </Switch>
                    </article>
                </section>
            </Router>
        </div>
    );
}

export default App;
