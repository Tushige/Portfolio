'use client'

import Image from 'next/image'
import { AnimatedLayout } from '@/components/dom/AnimatedLayout'
import { experiences } from '@/data'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Programmer} from '@/ui/programmer'
import { SkillsTable} from '@/ui/SkillsTable'
import AppFooter from '@/ui/AppFooter'

export default function Page() {
  return (
    <AnimatedLayout>
      <section className="bg-[#F8F4FF] pt-32">
        <div className="max-w-screen-xl md:max-w-7xl p-4 sm:p-16 mx-auto">
          <h1 className="font-bold text-2xl sm:text-5xl sm:leading-snug text-neutral-950">
            Hi, I'm{' '}
              <span className="drop-shadow font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Tushig<span className="text-black"> 🤝</span>
            </span>
          </h1>

          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              Experienced Frontend Developer | 5+ Years in JavaScript Ecosystem | Creating Dynamic Web Experiences in Chicago
            </p>
          </div>
          <div className="my-12">
            <h2 className="font-semibold text-xl sm:text-3xl relative text-neutral-950">
              Skills.
            </h2>
          </div>
          <div className="lg:flex lg:columns-2 mt-12">
            <div className="basis-1/4">
              <Programmer />
            </div>
            <div className="basis-full w-full">
              <SkillsTable />
            </div>
          </div>

          <div className="my-12">
            <h2 className="font-semibold text-xl sm:text-3xl relative text-neutral-950">
              Work experience.
            </h2>
          </div>
      
          <div className="mt-12 mb-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, i) => (
                <VerticalTimelineElement
                  key={i}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center">
                      <Image
                        src={experience.icon}
                        width={64}
                        height={64}
                        alt={`${experience.company_name} company logo`}
                        className="object-contain"
                      />
                    </div>
                  }
                  iconStyle={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                  }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none'
                  }}
                >
                  <ul className="my-5 ml-5 space-y-5 list-disc ml-5 space-y-2">
                    <h3 className="
                      text-black font-semibold text-xl
                    ">
                      {experience.company_name}
                    </h3>
                    <span className="text-medium">{experience.title}</span>
                    {experience.descriptions.map((description, j) => (
                      <li key={j} className="text-sm font-normal text-slate-500">
                        {description}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        {/* <hr /> */}
        </div>
        <AppFooter />
      </section>
    </AnimatedLayout>
  )
}
