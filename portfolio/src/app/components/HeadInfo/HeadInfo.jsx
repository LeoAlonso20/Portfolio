import styles from './HeadInfo.module.css'
import React from 'react'
import HeadImg from './HeadImg/HeadImg'

const HeadInfo = () => {
    return(
        <div className={styles.headContainer}>
            <HeadImg />
        </div>
    )
}

export default React.memo(HeadInfo)