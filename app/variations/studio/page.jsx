import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { projects } from '../data'
import { Header, About, Footer, ProjectImage, ProjectLink } from '../components/Shared'
import styles from '../Variations.module.css'

export const metadata = { title: 'Studio | Tushig Ochirkhuyag' }

export default function Studio() {
  return (
    <div id='top' className={`${styles.surface} ${styles.studio}`}>
      <div className={styles.wrap}>
        <Header variant='studio' />
        <main id='main-content'>
          <section className={styles.studioHero}>
            <h1>
              Built with intent.
              <br />
              <span>Room for wonder.</span>
            </h1>
            <div className={styles.heroBaseline}>
              <p>
                I&apos;m Tushig, a Software Engineer in Chicago.
                <br />I build useful products and unexpected experiences.
              </p>
              <a href='#work'>
                Discover the work <ArrowDownIcon aria-hidden='true' />
              </a>
            </div>
          </section>
          <section id='work' className={styles.studioWork} aria-label='Selected work'>
            <article className={styles.cinema}>
              <ProjectLink project={projects[1]} className={styles.cinemaImage}>
                <ProjectImage project={projects[1]} priority />
              </ProjectLink>
              <div className={styles.cinemaCaption}>
                <div>
                  <h2>Arcane</h2>
                  <p>A cinematic experiment in frontend storytelling.</p>
                </div>
                <ProjectLink project={projects[1]} className={styles.textAction}>
                  Step inside
                </ProjectLink>
              </div>
            </article>
            <article className={styles.studioProject}>
              <div className={styles.studioProjectCopy}>
                <h2>
                  Complexity,
                  <br />
                  made playable.
                </h2>
                <h3>Strike Desk</h3>
                <p>{projects[0].description}</p>
                <p className={styles.stack}>{projects[0].stack}</p>
                <ProjectLink project={projects[0]} className={styles.textAction} />
              </div>
              <ProjectLink project={projects[0]} className={styles.studioProjectImage}>
                <ProjectImage project={projects[0]} sizes='(max-width: 760px) 92vw, 55vw' />
              </ProjectLink>
            </article>
            <article className={styles.studioExperiment}>
              <div>
                <h2>Follow your curiosity.</h2>
                <p>Some ideas need a little space to orbit.</p>
                <ProjectLink project={projects[2]} className={styles.textAction} />
              </div>
              <ProjectLink project={projects[2]} className={styles.orbitImage}>
                <ProjectImage project={projects[2]} sizes='(max-width: 760px) 80vw, 35vw' />
              </ProjectLink>
            </article>
          </section>
          <About />
          <Footer />
        </main>
      </div>
    </div>
  )
}
