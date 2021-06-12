import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Crypto from "./Crypto";
import styles from './cryptoContainer.module.scss'

const CryptoContainer = () => {

    const [cryptoData, setCryptoData] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const pageSizes = [10,25,50,100];

    console.log(pageSize)

    useEffect(() => {
        axios.get('https://api.coinranking.com/v1/public/coins', {
            params: {
                limit: 10
            }
        }).then(({ data }) => {
            setCryptoData(data.data.coins)
        });
    }, [])

    const pageSizeHandler = (e) => setPageSize(e.target.value)

    return (
        <div className={styles['crypto-container']}>
            <section>
                <button>prev</button>
                <select value={pageSize} onChange={(e) => pageSizeHandler(e)}>
                    {
                        pageSizes.map((size, index) => (
                            <option value={size} key={index}>{size}</option>
                        ))
                    }
                </select>
                <button>next</button>
            </section>
            <div className={styles.coins}>
                {cryptoData.map((coin, index) => (
                        <Crypto name={coin.name} price={coin.price.slice(0,4)} symbol={coin.symbol} icon={coin.iconUrl} change={coin.change} />
                    )
                )}
            </div>
        </div>

    );
};

export default CryptoContainer;