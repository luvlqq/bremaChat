import { BrowserRouter, Route } from 'react-router-dom';
import LoginScreen from "./authScreen/loginScreen";
import RegistrationScreen from "./registrationScreen/registrationScreen";


// import Chatscreen from "./chat-screen/Chatscreen";

function App() {
    return (

        <BrowserRouter>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegistrationScreen} />
            {/*<Route exact path="/bremaChat" component={Chatscreen} />*/}

        </BrowserRouter>

    );
}

export default App;
