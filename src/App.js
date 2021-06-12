import './App.css';
import CryptoContainer from "./components/CryptoContainer";
import React from "react";

function App() {
    return (
        <div className="App">
            <h1> Welcome to Crpyto Dashboard</h1>
            <main>
                <CryptoContainer/>
            </main>
        </div>
    );
}

export default App;
