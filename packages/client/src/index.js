import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/authScreen/App';
import {QueryClient, QueryClientProvider} from 'react-query'


const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()

root.render(
    <React.StrictMode>
        <QueryClientProvider client = {queryClient}>
            <App/>
        </QueryClientProvider>
    </React.StrictMode>
)
