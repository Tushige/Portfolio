import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { Header, About, Footer } from '../components/Shared'
import ProjectIndex from '../components/ProjectIndex'
import styles from '../Variations.module.css'

export const metadata = { title: 'Index | Tushig Ochirkhuyag' }

export default function Index() {
  return (
    <div id='top' className={`${styles.surface} ${styles.index}`}>
      <div className={styles.wrap}>
        <Header variant='index' />
        <main id='main-content'>
          <section className={styles.indexHero}>
            <h1>
              Good interfaces.
              <br />
              <span>Interesting possibilities.</span>
            </h1>
            <div>
              <p>
                Tushig Ochirkhuyag
                <br />
                <span>Frontend developer · Chicago</span>
              </p>
              <p>7+ years connecting product thinking, thoughtful engineering and creative exploration.</p>
              <a href='#about' className={styles.textAction}>
                A little about me <ArrowDownIcon aria-hidden='true' />
              </a>
            </div>
          </section>
          <section id='work' className={styles.indexWork} aria-labelledby='work-heading'>
            <div className={styles.indexSectionHead}>
              <h2 id='work-heading'>Selected work</h2>
              <p>Choose a project to take a closer look.</p>
            </div>
            <ProjectIndex />
          </section>
          <About />
          <Footer />
        </main>
      </div>
    </div>
  )
}
