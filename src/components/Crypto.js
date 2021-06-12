import React from 'react';
import styles from './crypto.module.scss'

const Crypto = (props) => (
    <div className={styles.crypto}>
        <div className={styles['image-section']}>
            <img src={props.icon} alt="Coin icon image"/>
        </div>
        <div className={styles['data-section']}>
            <section>
                <label>Name:</label>
                <input value={props.name}/>
            </section>
            <section>
                <label>Price:</label>
                <input value={props.price}/>
            </section>
            <section>
                <label>Symbol:</label>
                <input value={props.symbol}/>
            </section>
        </div>
    </div>
);

export default Crypto;