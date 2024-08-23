'use client'

import Image from 'next/image'
import { AnimatedLayout } from '@/components/dom/AnimatedLayout'
import { experiences } from '@/data'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Programmer } from '@/ui/programmer'
import { SkillsTable } from '@/ui/SkillsTable'
import AppFooter from '@/ui/AppFooter'

export default function Page() {
  return (
    <AnimatedLayout>
      <section className="bg---color-magnolia pt-32">
        <div className="mx-auto max-w-screen-xl p-4 sm:p-16 md:max-w-7xl">
          <h1 className="text-2xl font-bold text-neutral-950 sm:text-5xl sm:leading-snug">
            Hi, I&apos;tm
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text font-semibold text-transparent drop-shadow">
              Tushig<span className="text-black"> 🤝</span>
            </span>
          </h1>

          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              Experienced Frontend Developer | 5+ Years in JavaScript Ecosystem | Creating Dynamic Web Experiences in Chicago
            </p>
          </div>
          <div className="my-12">
            <h2 className="relative text-xl font-semibold text-neutral-950 sm:text-3xl">
              Skills.
            </h2>
          </div>
          <div className="mt-12 lg:flex lg:columns-2">
            <div className="basis-1/4">
              <Programmer />
            </div>
            <div className="w-full basis-full">
              <SkillsTable />
            </div>
          </div>

          <div className="my-12">
            <h2 className="relative text-xl font-semibold text-neutral-950 sm:text-3xl">
              Work experience.
            </h2>
          </div>

          <div className="my-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, i) => (
                <VerticalTimelineElement
                  key={i}
                  date={experience.date}
                  icon={
                    <div className="flex items-center justify-center">
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
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden"
                  }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none"
                  }}
                >
                  <ul className="my-5 ml-5 list-disc space-y-2">
                    <h3 className="text-xl font-semibold text-black">
                      {experience.company_name}
                    </h3>
                    <span className="text-neutral-400">{experience.title}</span>
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
        </div>
        <AppFooter />
      </section>
    </AnimatedLayout>
  )
}
