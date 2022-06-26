import { BrowserRouter, Route, Switch } from "react-router-dom"
import AddBook from "../components/AddBook";
import BooksList from "../components/BooksList";
import Header from '../components/Header';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route component={BooksList} path="/" exact={true}></Route>
                        <Route component={AddBook} path="/add"></Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;