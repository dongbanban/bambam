/*
 * @FilePath: /click/Users/i104/vite3/src/routes/error.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import { useRouteError } from "react-router-dom";
import './error.less'

const NotFound = () => {
    return (
        <div id="error-route">
            <h1>Not Found!</h1>
            <p>Sorry, this page is not found.</p>
        </div>
    );
}

const Error = () => {
    return (
        <div id="error-route">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
}

const ErrorRoute = () => {
    const error = useRouteError();

    return (
        <div id="error-route">
            {error.status === 404 ? <NotFound /> : <Error />}
        </div>
    );
}

export default ErrorRoute