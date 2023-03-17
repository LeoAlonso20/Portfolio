import styles from './HeadInfo.module.css'
import React from 'react'
import HeadImg from './HeadImg/HeadImg'
import HeadName from './HeadName/HeadName'

const HeadInfo = () => {
    return(
        <div className={styles.headContainer}>
            <HeadImg />
            <HeadName />
        </div>
    )
}

export default React.memo(HeadInfo)