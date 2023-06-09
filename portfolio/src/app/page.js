import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import HeadInfo from './components/HeadInfo/HeadInfo'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main} style={{backgroundColor: '#212129'}}>
      <HeadInfo />
    </main>
  )
}
