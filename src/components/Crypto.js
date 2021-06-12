import React from 'react';
import styles from './crypto.module.scss'

const Crypto = (props) => (
    <div className={styles.crypto}>
        <img src={props.icon} alt="Coin icon image"/>
        <div className={styles['data-section']}>
            <p><strong>Name:</strong>{props.name}</p>
            <p><strong>Price:</strong>{props.price}</p>
            <p><strong>Symbol:</strong>{props.symbol}</p>
            <p><strong>Change:</strong>{props.change}</p>
        </div>
    </div>
);

export default Crypto;