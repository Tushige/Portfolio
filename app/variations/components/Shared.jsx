import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRightIcon, ChevronDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'
import { experiences } from '@/data/work-experience'
import { socials } from '../data'
import styles from '../Variations.module.css'

export function ProjectLink({ project, children, className }) {
  const external = project.href.startsWith('https:')
  return (
    <Link
      href={project.href}
      prefetch={false}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={className}
    >
      {children || project.action}
      <ArrowUpRightIcon aria-hidden='true' />
      {external && <span className='sr-only'> (opens in a new tab)</span>}
    </Link>
  )
}

export function ProjectImage({ project, priority = false, sizes = '(max-width: 760px) 92vw, 80vw' }) {
  return <Image src={project.image} alt={project.alt} width={1280} height={720} priority={priority} sizes={sizes} />
}

export function Header({ variant }) {
  return (
    <>
      <a href='#main-content' className={styles.skip}>
        Skip to content
      </a>
      <header className={styles.header}>
        <Link
          href={variant === 'index' ? '/' : `/variations/${variant}`}
          className={styles.wordmark}
          aria-label='Tushig Ochirkhuyag home'
        >
          tushig<span>.</span>
        </Link>
        <nav aria-label='Main navigation'>
          <a href='#work'>Work</a>
          <a href='#about'>About</a>
          <Link href='/playground' prefetch={false}>
            Playground
          </Link>
          <a href='#contact' className={styles.headerContact}>
            Let&apos;s talk <ArrowUpRightIcon aria-hidden='true' />
          </a>
        </nav>
      </header>
    </>
  )
}

export function About({ playful = false }) {
  return (
    <section id='about' className={styles.about} aria-labelledby='about-title'>
      <div className={styles.aboutIntro}>
        <h2 id='about-title'>
          {playful ? (
            <>
              A curious mind.
              <br />A practical streak.
            </>
          ) : (
            <>
              Thoughtful in the details.
              <br />
              Curious by default.
            </>
          )}
        </h2>
        <p>
          I&apos;m Tushig Ochirkhuyag, a frontend developer based in Chicago. Over 7+ years, I&apos;ve worked on
          products that help people navigate complex tasks, and experiments that invite them to explore.
        </p>
        <p>I enjoy the space where engineering, design and a little unexpected interaction meet.</p>
        <div className={styles.toolbox}>
          <h3>Things I build with</h3>
          <p>React, Next.js, Vue, TypeScript, Node.js, GraphQL, Three.js and GSAP.</p>
        </div>
        <p className={styles.education}>
          BS Computer Engineering
          <br />
          <span>University of Illinois at Urbana-Champaign</span>
        </p>
      </div>
      <div className={styles.experience}>
        <h3>Experience &amp; selected engagements</h3>
        {experiences
          .filter((item) => item.descriptions.length)
          .map((item, index) => (
            <details key={item.company_name} open={index === 0}>
              <summary>
                <span>
                  <strong>{item.company_name}</strong>
                  <small>{item.title}</small>
                </span>
                <span className={styles.dates}>
                  {item.date}
                  <ChevronDownIcon aria-hidden='true' />
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
  )
}

export function Footer({ playful = false }) {
  return (
    <>
      <section id='contact' className={styles.contact}>
        <h2>
          {playful ? (
            <>
              Have a good
              <br />
              what if?
            </>
          ) : (
            <>
              Let’s make
              <br />
              something matter.
            </>
          )}
        </h2>
        <div>
          <p>For thoughtful products, creative collaborations, or a conversation about what comes next.</p>
          <a href={socials.linkedin} target='_blank' rel='noopener noreferrer' className={styles.action}>
            Connect on LinkedIn <ArrowUpRightIcon aria-hidden='true' />
            <span className='sr-only'> (opens in a new tab)</span>
          </a>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>
          Tushig Ochirkhuyag<span>Frontend development &amp; creative exploration</span>
        </p>
        <nav aria-label='Social links'>
          {Object.entries(socials).map(([name, href]) => (
            <a href={href} key={name} target='_blank' rel='noopener noreferrer'>
              {{ github: 'GitHub', linkedin: 'LinkedIn', codepen: 'CodePen', soundcloud: 'SoundCloud' }[name]}
              <span className='sr-only'> (opens in a new tab)</span>
            </a>
          ))}
        </nav>
        <a href='#top' className={styles.top}>
          Back to top <ArrowUpIcon aria-hidden='true' />
        </a>
      </footer>
    </>
  )
}
