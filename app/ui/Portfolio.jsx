import Link from 'next/link'
import Image from 'next/image'
import { ArrowDownIcon, ArrowRightIcon, ArrowUpRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { experiences } from '@/data/work-experience'
import ProjectSwitcher from './ProjectSwitcher'
import styles from './Portfolio.module.css'

const linkedin = 'https://linkedin.com/in/tushig-ochirkhuyag-9a798a312'
const skills = [
  { title: 'Interfaces', items: 'React, Next.js, Vue, TypeScript, JavaScript, HTML & CSS' },
  { title: 'Behind the interface', items: 'Node.js, Express, MongoDB, GraphQL, WebSockets' },
  { title: 'Craft & delivery', items: 'Accessibility, GSAP, Three.js, Vitest, Git, Docker' },
]

function ExternalLink({ href, children, className }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' className={className}>
      {children}
      <ArrowUpRightIcon aria-hidden='true' />
      <span className={styles.srOnly}> (opens in a new tab)</span>
    </a>
  )
}

export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <a href='#main-content' className={styles.skipLink}>
        Skip to content
      </a>
      <header className={styles.header}>
        <Link href='/' className={styles.identity} aria-label='Tushig Ochirkhuyag home'>
          tushig<span aria-hidden='true'>.</span>
        </Link>
        <nav aria-label='Main navigation' className={styles.navigation}>
          <a href='#work'>Work</a>
          <a href='#about'>About</a>
          <Link href='/playground' prefetch={false}>
            Playground
          </Link>
          <a href='#contact' className={styles.navContact}>
            Let&apos;s connect <ArrowUpRightIcon aria-hidden='true' />
          </a>
        </nav>
      </header>
      <main id='main-content'>
        <section className={styles.hero} aria-labelledby='intro-title'>
          <div className={styles.intro}>
            <h1 id='intro-title'>
              Interfaces that
              <br />
              work hard.
              <br />
              <span>And play a little.</span>
            </h1>
            <p className={styles.introCopy}>
              I&apos;m Tushig, a frontend developer in Chicago. I bring 7+ years of experience to useful products and
              unexpected digital experiences.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href='#work'>
                Explore my work <ArrowDownIcon aria-hidden='true' />
              </a>
              <ExternalLink href='https://github.com/Tushige' className={styles.textLink}>
                GitHub
              </ExternalLink>
            </div>
          </div>
          <ProjectSwitcher />
        </section>
        <section id='work' className={styles.work} aria-labelledby='work-title'>
          <div className={styles.sectionHeading}>
            <h2 id='work-title'>
              Built with purpose.
              <br />
              <span>Made to be explored.</span>
            </h2>
            <p>Two sides of my work: making complex things approachable, and giving ideas a little room to play.</p>
          </div>
          <article id='strike-desk' className={styles.project}>
            <a
              href='https://strike-desk.onrender.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={`${styles.projectVisual} ${styles.strikeVisual}`}
              aria-label='Open Strike Desk in a new tab'
            >
              <Image
                src='/projects/strike-desk.webp'
                width={1280}
                height={720}
                alt='Actual Strike Desk interface with live prices, a chart and trading ticket controls'
                sizes='(max-width: 800px) 92vw, 62vw'
              />
              <span className={styles.imageAction}>
                Play Strike Desk <ArrowUpRightIcon aria-hidden='true' />
              </span>
            </a>
            <div className={styles.projectCopy}>
              <h3>Strike Desk</h3>
              <p>
                Five market days. Fictional news. One million in pretend money. A trading game that turns risk and
                reward into decisions you can learn from.
              </p>
              <dl>
                <div>
                  <dt>The challenge</dt>
                  <dd>
                    Make a data-heavy trading experience approachable without losing the decisions that make it
                    interesting.
                  </dd>
                </div>
                <div>
                  <dt>The build</dt>
                  <dd>React and TypeScript interfaces, WebSockets, AG Grid and a Node.js backend.</dd>
                </div>
              </dl>
              <ExternalLink href='https://strike-desk.onrender.com/' className={styles.textLink}>
                Play the game
              </ExternalLink>
            </div>
          </article>
          <article id='arcane' className={`${styles.project} ${styles.reverseProject}`}>
            <a
              href='https://arcane-tushige.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className={`${styles.projectVisual} ${styles.arcaneVisual}`}
              aria-label='Open Arcane fan site in a new tab'
            >
              <Image
                src='/projects/arcane.webp'
                width={1280}
                height={720}
                alt='Actual Arcane fan-site hero with cinematic character artwork and bold title'
                sizes='(max-width: 800px) 92vw, 62vw'
              />
              <span className={styles.imageAction}>
                Explore Arcane <ArrowUpRightIcon aria-hidden='true' />
              </span>
            </a>
            <div className={styles.projectCopy}>
              <h3>Arcane</h3>
              <p>
                A world worth getting lost in. An unofficial fan experience that brings the series to the web through
                expressive typography and motion.
              </p>
              <dl>
                <div>
                  <dt>The exploration</dt>
                  <dd>Translate a cinematic world into an interactive website, with movement carrying the story.</dd>
                </div>
                <div>
                  <dt>The build</dt>
                  <dd>React, Tailwind CSS and GSAP, combining visual composition with animated interactions.</dd>
                </div>
              </dl>
              <ExternalLink href='https://arcane-tushige.vercel.app/' className={styles.textLink}>
                Explore the site
              </ExternalLink>
            </div>
          </article>
        </section>
        <section id='about' className={styles.about} aria-labelledby='about-title'>
          <div className={styles.aboutIntro}>
            <h2 id='about-title'>Curiosity is the constant.</h2>
            <p>
              I like the space where engineering meets experience. My work has ranged from sales funnels and accessible
              analytics to stadium experiences and playful experiments.
            </p>
            <p>
              Sometimes the challenge is a complex workflow. Sometimes it&apos;s getting an interaction to feel just
              right. I care about both.
            </p>
            <p className={styles.education}>
              BS Computer Engineering
              <br />
              <span>University of Illinois at Urbana-Champaign</span>
            </p>
          </div>
          <div className={styles.experience}>
            <h3>Experience & selected engagements</h3>
            {experiences
              .filter((item) => item.descriptions.length > 0)
              .map((item) => (
                <details
                  className={styles.experienceItem}
                  key={item.company_name}
                  open={item.company_name === 'Productive Edge'}
                >
                  <summary>
                    <span>
                      <strong>{item.company_name}</strong>
                      <span className={styles.role}>{item.title}</span>
                    </span>
                    <span className={styles.experienceDate}>
                      {item.date}
                      <ChevronDownIcon className={styles.expandMark} aria-hidden='true' />
                    </span>
                  </summary>
                  <div className={styles.experienceBody}>
                    {item.descriptions.map((description) => (
                      <p key={description}>{description}</p>
                    ))}
                  </div>
                </details>
              ))}
          </div>
        </section>
        <section className={styles.toolkit} aria-labelledby='toolkit-title'>
          <h2 id='toolkit-title'>
            A practical toolkit.
            <br />
            <span>An open mind.</span>
          </h2>
          <div className={styles.skillGroups}>
            {skills.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.playground} aria-labelledby='playground-title'>
          <div>
            <h2 id='playground-title'>
              A little space
              <br />
              to experiment.
            </h2>
            <p>Not everything needs a business case. Step into my 3D playground and take the planet for a spin.</p>
            <Link href='/playground' prefetch={false} className={styles.primaryButton}>
              Enter the playground <ArrowRightIcon aria-hidden='true' />
            </Link>
            <div className={styles.otherExperiments}>
              <ExternalLink href='https://codepen.io/Ekut9119' className={styles.textLink}>
                More on CodePen
              </ExternalLink>
            </div>
          </div>
          <Link
            href='/playground'
            prefetch={false}
            className={styles.planetPreview}
            aria-label='Explore the interactive 3D planet'
          >
            <Image
              src='/projects/playground.webp'
              width={1280}
              height={720}
              alt='Low-poly Earth floating in the purple 3D playground'
              sizes='(max-width: 800px) 92vw, 50vw'
            />
          </Link>
        </section>
        <section id='contact' className={styles.contact} aria-labelledby='contact-title'>
          <div>
            <h2 id='contact-title'>
              Have something
              <br />
              interesting in mind?
            </h2>
            <p>A product to build, an idea to explore, or a conversation about frontend. Let&apos;s connect.</p>
          </div>
          <ExternalLink href={linkedin} className={styles.contactButton}>
            Say hello on LinkedIn
          </ExternalLink>
        </section>
      </main>
      <footer className={styles.footer}>
        <div>
          <strong>Tushig Ochirkhuyag</strong>
          <p>Frontend developer. Curious builder.</p>
        </div>
        <nav aria-label='Social profiles'>
          <ExternalLink href='https://github.com/Tushige' className={styles.textLink}>
            GitHub
          </ExternalLink>
          <ExternalLink href={linkedin} className={styles.textLink}>
            LinkedIn
          </ExternalLink>
          <ExternalLink href='https://soundcloud.com/tukekut' className={styles.textLink}>
            SoundCloud
          </ExternalLink>
        </nav>
        <a href='#main-content' className={styles.backTop}>
          Back to top <ArrowUpRightIcon aria-hidden='true' />
        </a>
      </footer>
    </div>
  )
}
