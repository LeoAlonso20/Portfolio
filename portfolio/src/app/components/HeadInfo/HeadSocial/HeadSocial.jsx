'use client'

import styles from './HeadSocial.module.css'
import 'animate.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight, faEnvelope, faIdBadge} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn, faGithub, faInstagram, faTwitter, faFacebookF} from '@fortawesome/free-brands-svg-icons'

const HeadSocial = () => {
    const [ icons, setIcons ] = useState([
        [faLinkedinIn, false], 
        [faGithub, false], 
        [faEnvelope, true], 
        [faIdBadge, true], 
        [faTwitter,true], 
        [faFacebookF, false]
        ])

    const [ translate, setTranslate ] = useState({
        right: false,
        left: false
    })

    const handleRightTranslate = () => {
        for(let i = 0; i < icons.length; i++){
            if (verifyIndex(i)) {
                let oldIcons = icons
                setIcons(prevArray => oldIcons.fill([oldIcons[i + 1][0], false], i + 1, i + 2))
                //Controlar cuando el indice es 0, que es cuando queda fuera de rango
                setIcons(prevArray => oldIcons.fill([oldIcons[i - 2][0], true], i - 2, i - 1))
                console.log(icons)
                setTranslate({...translate, right: true})
                setTimeout(() => {
                    setTranslate({...translate, right: false})
                }, 50)
                break
            }
        }
    }

    const handleLeftTranslate = () => {
        for(let i = 0; i < icons.length; i++) {
            if (verifyIndex(i)) {
                let oldIcons = icons
                setIcons(prevArray => oldIcons.fill([oldIcons[i - 1][0], false], i - 1, i))
                setIcons(prevArray => oldIcons.fill([oldIcons[i + 2][0], true], i + 2, i + 3))
                
                setTranslate({...translate, left: true})
                setTimeout(() => {
                    setTranslate({...translate, left: false})
                }, 50)
                break
            }
        }
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
                                                        ${ verifyIndex(index) && translate.left ? styles.leftTranslate : ''} 
                                                        ${ verifyIndex(index) && translate.right ? styles.rightTranslate : ''}
                                                        animate__animated animate__fadeIn`}>
                            <FontAwesomeIcon icon={icon[0]} className={`${styles.socialIcon} ${ verifyIndex(index) ? styles.primarySocialIcon : ''}`}/>
                        </div>
                        : '' 
                    )
                }
                {/* {
                    icons[0][1]
                            ?   <div className={`${styles.socialElement} ${ verifyIndex(0) ? styles.primarySocialElement : ''} 
                                                animate__animated animate__fadeIn`}>
                                    <FontAwesomeIcon icon={icons[0][0]} className={`${styles.socialIcon} ${ verifyIndex(0) ? styles.primarySocialIcon : ''}`}/>
                                </div>
                            :   ''
                }
                {
                    icons[1][1]
                            ?   <div className={`${styles.socialElement} ${ verifyIndex(1) ? styles.primarySocialElement : ''} 
                                                animate__animated animate__fadeIn`}>
                                    <FontAwesomeIcon icon={icons[1][0]} className={`${styles.socialIcon} ${ verifyIndex(1) ? styles.primarySocialIcon : ''}`}/>
                                </div>
                            :   ''
                }
                {
                    icons[2][1]
                            ?   <div className={`${styles.socialElement} ${ verifyIndex(2) ? styles.primarySocialElement : ''} 
                                                animate__animated animate__fadeIn`}>
                                    <FontAwesomeIcon icon={icons[2][0]} className={`${styles.socialIcon} ${ verifyIndex(2) ? styles.primarySocialIcon : ''}`}/>
                                </div>
                            :   ''
                }
                {
                    icons[3][1]
                            ?   <div className={`${styles.socialElement} ${ verifyIndex(3) ? styles.primarySocialElement : ''} 
                                                animate__animated animate__fadeIn`}>
                                    <FontAwesomeIcon icon={icons[3][0]} className={`${styles.socialIcon} ${ verifyIndex(3) ? styles.primarySocialIcon : ''}`}/>
                                </div>
                            :   ''
                }
                {
                    icons[4][1]
                            ?   <div className={`${styles.socialElement} ${ verifyIndex(4) ? styles.primarySocialElement : ''} 
                                                animate__animated animate__fadeIn`}>
                                    <FontAwesomeIcon icon={icons[4][0]} className={`${styles.socialIcon} ${ verifyIndex(4) ? styles.primarySocialIcon : ''}`}/>
                                </div>
                            :   ''
                }
                {
                    icons[5][1]
                            ?   <div className={`${styles.socialElement} ${ verifyIndex(5) ? styles.primarySocialElement : ''} 
                                                animate__animated animate__fadeIn`}>
                                    <FontAwesomeIcon icon={icons[5][0]} className={`${styles.socialIcon} ${ verifyIndex(5) ? styles.primarySocialIcon : ''}`}/>
                                </div>
                            :   ''
                } */}

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