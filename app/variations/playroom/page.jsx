import { Header, About, Footer } from '../components/Shared'
import ProjectDeck from '../components/ProjectDeck'
import styles from '../Variations.module.css'

export const metadata = { title: 'Playroom | Tushig Ochirkhuyag' }

export default function Playroom() {
  return (
    <div id='top' className={`${styles.surface} ${styles.playroom}`}>
      <div className={styles.wrap}>
        <Header variant='playroom' />
        <main id='main-content'>
          <section className={styles.playHero}>
            <h1>
              Serious about
              <br />
              <span>a little play.</span>
            </h1>
            <p>
              I&apos;m Tushig. Frontend developer, curious builder.
              <br />
              Making things that work beautifully. And sometimes surprise you.
            </p>
          </section>
          <section id='work' aria-label='Interactive project gallery'>
            <ProjectDeck />
          </section>
          <About playful />
          <Footer playful />
        </main>
      </div>
    </div>
  )
}
