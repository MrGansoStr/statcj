import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { AxiosInterceptor } from './AxiosInterceptor/Interceptor';

AxiosInterceptor();

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
