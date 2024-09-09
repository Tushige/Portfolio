import { BentoGrid, BentoGridItem } from "@/components/bento-grid"
import Image from "next/image"
import {
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Fincent',
    description: (
      <div className="mb-2">
        Designed and implemented a personal banking solution that integrates with your bank accounts, enabling seamless transactions for sending and receiving funds.
      </div>
    ),
    skills: [
      'Next.js',
      'TailwindCSS',
      'Shadcn UI',
      'Plaid'
    ],
    header: (
      <Image
        src="/Fincent-home.png"
        width={506}
        height={426}
        alt="project fincent screenshot"
        className="h-[250px] w-full"
      />
    ),
    footer: (
      <ul className="mt-2">
        <li className="">
          <a href="https://fincent.vercel.app/" className="inline-flex cursor-pointer flex-row items-center gap-2 rounded-lg border border-fuchsia-200 px-2 text-[10px]">
            <GlobeAltIcon className="w-6" />
            <span>Website</span>
          </a>
        </li>
      </ul>
    )
  }
]
export const ProjectSection = () => {
  return (
    <BentoGrid className="">
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