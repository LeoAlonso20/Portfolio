'use client'

import styles from './HeadSocial.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'

const HeadSocial = () => {
    const [rightTranslate, setRightTranslate] = useState(false)
    const [leftTranslate, setLeftTranslate] = useState(false)

    const handleRightTranslate = () => {
        setRightTranslate(!rightTranslate)
        console.log('right')
    }

    const handleLeftTranslate = () => {
        setLeftTranslate(!leftTranslate)
        console.log('left')
    }

    return(
            <div className={styles.socialContainer}>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.chevronIcon} onClick={handleLeftTranslate}/>

                <div className={styles.socialElement}>
                    <FontAwesomeIcon icon={faGithub} className={`${styles.socialIcon}`} />
                </div>

                <div className={`${styles.socialElement} ${styles.primarySocialElement} ${leftTranslate ? styles.socialTranslate : ''}`}>
                    <FontAwesomeIcon icon={faLinkedinIn} className={`${styles.socialIcon} ${styles.primarySocialIcon}`} />
                </div>

                <div className={styles.socialElement}>
                    <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
                </div>

                <FontAwesomeIcon icon={faChevronRight} className={styles.chevronIcon} onClick={handleRightTranslate}/>
            </div>
    )
}

export default HeadSocial