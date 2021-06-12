import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Crypto from "./Crypto";
import styles from './cryptoContainer.module.scss'

const CryptoContainer = () => {

    const [cryptoData, setCryptoData] = useState([]);
    const [pageSize, setPageSize] = useState(2);
    const [offset, setOffset] = useState(0)
    const pageSizes = [1,2,3,4];

    useEffect(() => {
        axios.get('https://api.coinranking.com/v1/public/coins', {
            params: {
                limit: pageSize,
                offset: offset
            }
        }).then(({ data }) => {
            setCryptoData(data.data.coins)
        });
    }, [pageSize, offset])

    const pageSizeHandler = (e) => {
        const temp = pageSize;
        setPageSize(parseInt(e.target.value))
        if (offset === 0) return;
        // setOffset(offset + parseInt(e.target.value) - temp)
    }

    const nextHandler = () => setOffset(offset + parseInt(pageSize))
    const prevHandler = () => {
        if (offset === 0 || offset - parseInt(pageSize) < 0) setOffset(0);
        setOffset(offset - parseInt(pageSize))
    }

    return (
        <div className={styles['crypto-container']}>
            <section>
                <button onClick={prevHandler} disabled={offset === 0}>prev</button>
                <select value={pageSize} onChange={(e) => pageSizeHandler(e)}>
                    {
                        pageSizes.map((size, index) => (
                            <option value={size} key={index}>{size}</option>
                        ))
                    }
                </select>
                <button onClick={nextHandler}>next</button>
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