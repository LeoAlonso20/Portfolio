import styles from './HeadName.module.css'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({
    weight: ['400', '700'],
    subsets: ['latin']
})

const HeadName = () => {
    return(
        <div className={orbitron.className}>
            <div className={styles.nameContainer}>
                <h3 className={styles.personName}>Leandro Romano Alonso Millicay</h3>
                <p className={styles.profesionName}>FrontEnd Developer</p>
            </div>
        </div>
    )
}

export default HeadName