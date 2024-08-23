import { skills, tabs } from './data'
import { AppTabs } from '@/components/AppTabs'

export const SkillsTable = ({ ...props }) => {
  return (
    <AppTabs tabs={tabs} {...props} />
  )
}