import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import RegistrationScreen from "./components/registrationScreen/registrationScreen";


import {QueryClient, QueryClientProvider} from 'react-query'
import LoginScreen from "./components/authScreen/loginScreen";


const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()

root.render(
    <React.StrictMode>
        <QueryClientProvider client = {queryClient}>
            <LoginScreen/>
        </QueryClientProvider>
    </React.StrictMode>
)