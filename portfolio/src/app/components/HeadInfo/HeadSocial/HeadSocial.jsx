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

                if(i == 1) {
                    setIcons(prevArray => oldIcons.fill([oldIcons[oldIcons.length - 1][0], true], oldIcons.length - 1, oldIcons.length))
                    const [firstIcon, secondIcon] = icons.slice(0, 2)

                    setIcons(prevArray => oldIcons.filter((icon, index) => index != 0 && index != 1))
                    setIcons(prevArray => [...prevArray, firstIcon, secondIcon])
                }
                else setIcons(prevArray => oldIcons.fill([oldIcons[i - 2][0], true], i - 2, i - 1))

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
                if(i == icons.length - 2) {
                    setIcons(prevArray => oldIcons.fill([oldIcons[0][0], true], 0, 1))
                    const [firstIcon, secondIcon] = icons.slice(icons.length - 2, icons.length)

                    setIcons(prevArray => oldIcons.filter((icon, index) => index != icons.length - 2 && index != icons.length - 1))
                    setIcons(prevArray => [firstIcon, secondIcon, ...prevArray])
                }
                else setIcons(prevArray => oldIcons.fill([oldIcons[i + 2][0], true], i + 2, i + 3))
                
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
            if( (icons[index + 1][1] && icons[index - 1][1])) {
                return true
            }
        } catch {
            if((index === 0 && icons[index + 1][1] && icons[icons.length - 1][1])) return true
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

                <FontAwesomeIcon icon={faChevronRight} className={styles.chevronIcon} onClick={handleRightTranslate}/>
            </div>
    )
}

export default HeadSocial