import styles from './HeadInfo.module.css'
import React from 'react'
import HeadImg from './HeadImg/HeadImg'
import HeadName from './HeadName/HeadName'
import HeadSocial from './HeadSocial/HeadSocial'

const HeadInfo = () => {
    return(
        <div className={styles.headContainer}>
            <HeadImg />
            <HeadName />
            <HeadSocial />
        </div>
    )
}

export default React.memo(HeadInfo)