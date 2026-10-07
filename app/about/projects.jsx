import { BentoGrid, BentoGridItem } from "@/components/bento-grid"
import Image from "next/image"
import {
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const projects = [
  {
    title: "Strike Desk",
    description: (
      <div className="mb-2">
        Strike Desk is a playful trading game where you turn fictional news into options trades, learning risk and reward across five market days with $1 million in fun money.
      </div>
    ),
    skills: [
      "React",
      "Typescript",
      "Node",
      "Tailwind CSS",
      "WebSockets",
      "AG Grid",
      "Data Heavy UI Performance",
      "Vitest"
    ],
    header: (
      <div className="h-[250px] w-full overflow-hidden">
        <Image
          src="/trading-desk.jpg"
          width={506}
          height={426}
          alt="project Strike Desk Logo"
          className="scale-105 transition-transform duration-200 hover:scale-100"
        />
      </div>
    ),
    footer: (
      <ul className="mt-2">
        <li className="">
          <a href="https://pupside.app" className="inline-flex cursor-pointer flex-row items-center gap-2 rounded-lg border border-fuchsia-200 bg-fuchsia-50 px-2 text-[10px] hover:bg-fuchsia-700 hover:text-white">
            <GlobeAltIcon className="w-6" />  
            <span className="text-slate-950">Website</span>
          </a>
        </li>
      </ul>
    )
  },
    {
    title: 'NFL Polymarket',
    description: (
      <div className="mb-2">
        a live NFL betting-odds table built with React and TypeScript. It streams prices straight from Polymarket&apos;s public WebSocket with no backend
      </div>
    ),
    skills: [
      'React',
      'WebSocket',
      'Polymarket API',
    ],
    header: (
      <div className="w-full overflow-hidden">
        <Image
          src="/projects/nfl-polymarket.png"
          width={506}
          height={426}
          alt="project polymarket screenshot"
          className="size-full scale-105 object-cover object-left transition-transform duration-200 hover:scale-100"
        />
      </div>
    ),
    footer: (
      <ul className="mt-2">
        <li className="">
          <a href="https://polymarket-gamma-alpha.vercel.app/" className="inline-flex cursor-pointer flex-row items-center gap-2 rounded-lg border border-fuchsia-200 bg-fuchsia-50 px-2 text-[10px] hover:bg-fuchsia-700 hover:text-white">
            <GlobeAltIcon className="w-6" />
            <span className="text-slate-950">Website</span>
          </a>
        </li>
      </ul>
    )
  },
  // {
  //   title: 'Fincent',
  //   description: (
  //     <div className="mb-2">
  //       Designed and implemented a personal banking solution that integrates with your bank accounts, enabling seamless transactions for sending and receiving funds.
  //     </div>
  //   ),
  //   skills: [
  //     'Next.js',
  //     'TailwindCSS',
  //     'Shadcn UI',
  //     'Plaid'
  //   ],
  //   header: (
  //     <div className="h-[250px] w-full overflow-hidden">
  //       <Image
  //         src="/Fincent-home.png"
  //         width={506}
  //         height={426}
  //         alt="project fincent screenshot"
  //         className="scale-105 transition-transform duration-200 hover:scale-100"
  //       />
  //     </div>
  //   ),
  //   footer: (
  //     <ul className="mt-2">
  //       <li className="">
  //         <a href="https://fincent.vercel.app/" className="inline-flex cursor-pointer flex-row items-center gap-2 rounded-lg border border-fuchsia-200 bg-fuchsia-50 px-2 text-[10px] hover:bg-fuchsia-700 hover:text-white">
  //           <GlobeAltIcon className="w-6" />
  //           <span className="text-slate-950">Website</span>
  //         </a>
  //       </li>
  //     </ul>
  //   )
  // },
  // {
  //   title: 'CHAT-AI',
  //   description: (
  //     <div className="mb-2">
  //       Developed a SaaS web application for small businesses to streamline customer engagement through AI-driven chatbots and real-time messaging. Enabled businesses to configure custom chatbots with tailored conversational flows, manage customer appointments, and create targeted email campaigns.
  //     </div>
  //   ),
  //   skills: [
  //     'Next.js',
  //     'TailwindCSS',
  //     'Shadcn UI',
  //     'OpenAI'
  //   ],
  //   header: (
  //     <div className="w-full overflow-hidden">
  //       <Image
  //         src="/chatbot.svg"
  //         width={506}
  //         height={426}
  //         alt="project chatai screenshot"
  //         className="scale-105 transition-transform duration-200 hover:scale-100"
  //       />
  //     </div>
  //   ),
  //   footer: (
  //     <ul className="mt-2">
  //       <li className="">
  //         <a href="https://chatai-gen.vercel.app/" className="inline-flex cursor-pointer flex-row items-center gap-2 rounded-lg border border-fuchsia-200 bg-fuchsia-50 px-2 text-[10px] hover:bg-fuchsia-700 hover:text-white">
  //           <GlobeAltIcon className="w-6" />
  //           <span className="text-slate-950">Website</span>
  //         </a>
  //       </li>
  //     </ul>
  //   )
  // },
  {
    title: 'ARCANE',
    description: (
      <div className="mb-2">
        Designed and Developed a visually captivating promo website for Arcane. The Site was crafted with a modern, interactive design inspired by the aesthetic of award-winning websites on Awwwards, focusing on dynamic visuals to engage fans of the series.
      </div>
    ),
    skills: [
      'React',
      'TailwindCSS',
      'GSAP',
    ],
    header: (
      <div className="w-full overflow-hidden">
        <Image
          src="/arcane-2.png"
          width={506}
          height={426}
          alt="project chatai screenshot"
          className="size-full scale-105 object-cover object-left transition-transform duration-200 hover:scale-100"
        />
      </div>
    ),
    footer: (
      <ul className="mt-2">
        <li className="">
          <a href="https://arcane-tushige.vercel.app/" className="inline-flex cursor-pointer flex-row items-center gap-2 rounded-lg border border-fuchsia-200 bg-fuchsia-50 px-2 text-[10px] hover:bg-fuchsia-700 hover:text-white">
            <GlobeAltIcon className="w-6" />
            <span className="text-slate-950">Website</span>
          </a>
        </li>
      </ul>
    )
  },
]
export const ProjectSection = () => {
  return (
    <BentoGrid className="flex flex-col items-center gap-8 lg:flex-row lg:items-stretch">
      {
        projects.map(project => (
          <BentoGridItem
            key={project.title}
            title={project.title}
            description={project.description}
            header={project.header}
            list={project.skills}
            footer={project.footer}
            className=""
          />
        ))
      }
    </BentoGrid>
  )
}