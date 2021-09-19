import "./App.css"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home"
import Almet from "./pages/Almet";
import Kazan from "./pages/Almet";

function App() {
    return (
        <div className='App'>
            <BrowserRouter >
                <Switch>
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>
                    <Route exact path={'/kazan'} component={Kazan}/>
                    <Route exact path={'/almet'} component={Almet} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
