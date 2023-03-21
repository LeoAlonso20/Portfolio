'use client'

import styles from './HeadSocial.module.css'
import 'animate.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight, faEnvelope, faIdBadge} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn, faGithub, faInstagram, faTwitter, faFacebookF} from '@fortawesome/free-brands-svg-icons'

const HeadSocial = () => {
    const [translate, setTranslate] = useState({
        right: false,
        left: false
    })

    const [ icons, setIcons ] = useState([
        [faLinkedinIn, true], 
        [faGithub, true], 
        [faEnvelope, true], 
        [faIdBadge, false], 
        [faTwitter,false], 
        [faFacebookF, false]
        ])

    const handleRightTranslate = () => {
        setTranslate({
            right: true,
            left: false
        })
        console.log('right')
    }

    const handleLeftTranslate = () => {
        setTranslate({
            right: false,
            left: true
        })
        console.log('left')
    }

    const verifyIndex = (index) => {
        try{
            if( icons[index + 1][1] && icons[index - 1][1] ) return true
        } catch {
            return false
        }
    }

    return(
            <div className={styles.socialContainer}>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.chevronIcon} onClick={handleLeftTranslate}/>

                {
                    icons.map((icon, index) => 
                    icon[1] 
                        ? <div key={index} className={`${styles.socialElement} ${ verifyIndex(index) ? styles.primarySocialElement : ''} 
                                            animate__animated animate__fadeIn`}>
                            <FontAwesomeIcon icon={icon[0]} className={`${styles.socialIcon} ${ verifyIndex(index) ? styles.primarySocialIcon : ''}`}/>
                        </div>
                        : '' 
                    )}

                {/* <div className={`${styles.socialElement} ${ translate.right && !translate.left ? styles.primarySocialElement : ''} 
                                    animate__animated animate__fadeIn`}>
                    <FontAwesomeIcon icon={faGithub} className={`${styles.socialIcon}`} />
                </div>
                <div className={`${styles.socialElement} ${styles.primarySocialElement} 
                                    animate__animated animate__fadeIn`}>
                                <FontAwesomeIcon icon={faGithub} className={`${styles.socialIcon}`} />
                </div>
                <div className={`${styles.socialElement} ${ translate.right && !translate.left ? styles.primarySocialElement : ''} 
                                    animate__animated animate__fadeIn`}>
                    <FontAwesomeIcon icon={faGithub} className={`${styles.socialIcon}`} />
                </div> */}
                {/* {
                    !translate.left && translate.right
                            ? <div className={`${styles.socialElement} 
                                               animate__animated animate__fadeIn`}>
                                <FontAwesomeIcon icon={faGithub} className={`${styles.socialIcon}`} />
                              </div>
                            : <></>
                }

                {
                    !translate.left
                            ? <div className={`${styles.socialElement} ${ translate.right && !translate.left ? styles.primarySocialElement : ''} 
                                               animate__animated animate__fadeIn`}>
                                <FontAwesomeIcon icon={faGithub} className={`${styles.socialIcon}`} />
                              </div>
                            : <></>
                }
                
                <div className={`${styles.socialElement} ${ !translate.right && !translate.left ? styles.primarySocialElement : ''} 
                                 ${translate.left ? styles.socialLeftTranslate : ''} ${translate.right ? styles.socialRightTranslate : ''}`}>
                    <FontAwesomeIcon icon={faLinkedinIn} className={`${styles.socialIcon} ${styles.primarySocialIcon}`} />
                </div>

                {
                    !translate.right
                            ? <div className={`${styles.socialElement} ${ !translate.right && translate.left ? styles.primarySocialElement : ''} 
                                               animate__animated animate__fadeIn`}>
                                <FontAwesomeIcon icon={faInstagram} className={`${styles.socialIcon}`} />
                              </div>
                            : <></>
                }

                {
                    !translate.right && translate.left
                            ? <div className={`${styles.socialElement} 
                                               animate__animated animate__fadeIn`}>
                                <FontAwesomeIcon icon={faEnvelope} className={`${styles.socialIcon}`} />
                              </div>
                            : <></>
                } */}

                <FontAwesomeIcon icon={faChevronRight} className={styles.chevronIcon} onClick={handleRightTranslate}/>
            </div>
    )
}

export default HeadSocial