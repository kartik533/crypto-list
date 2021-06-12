import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Crypto from "./Crypto";

const CryptoContainer = () => {

    const [cryptoData, setCryptoData] = useState([]);
    useEffect(() => {
        axios.get('https://api.coinranking.com/v1/public/coins', {
            params: {
                limit: 10
            }
        }).then(({ data }) => {
            setCryptoData(data.data.coins)
        });
    }, [])

    return (
        <main>
            {cryptoData.map((coin, index) => (
                <Crypto name={coin.name} price={coin.price} symbol={coin.symbol} icon={coin.iconUrl} />
                )
            )}
        </main>
    );

};

export default CryptoContainer;