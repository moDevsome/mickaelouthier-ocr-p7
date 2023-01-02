/**
 * Fichier de base pour la compilation
 */

// Import des dépendances
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Import du point d'entrée de l'application
import App from './App';

// Import du style de l'application
import './App.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);