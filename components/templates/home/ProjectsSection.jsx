import useTranslate from '../../../hooks/useTranslate'

import classNames from 'classnames'
import Clock from '../../atoms/icons/Clock'
import UserTie from '../../atoms/icons/UserTie'

import HTML from '../../atoms/icons/tools/HTML'
import CSS from '../../atoms/icons/tools/CSS'
import TailwindCSS from '../../atoms/icons/tools/TailwindCSS'
import JavaScript from '../../atoms/icons/tools/JavaScript'
import TypeScript from '../../atoms/icons/tools/TypeScript'
import NodeJS from '../../atoms/icons/tools/NodeJS'
import Express from '../../atoms/icons/tools/Express'
import React from '../../atoms/icons/tools/React'
import NextJS from '../../atoms/icons/tools/NextJS'
import PostgreSQL from '../../atoms/icons/tools/PostgreSQL'
import MongoDB from '../../atoms/icons/tools/MongoDB'

import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'
import Separator from '../../atoms/Separator'
import Badge from '../../atoms/Badge'

const ProjectsSection = () => {
  const { t, ready } = useTranslate()

  const expertises = [
    {
      name: 'HTML',
      icon: HTML
    },
    {
      name: 'CSS',
      icon: CSS
    },
    {
      name: 'TailwindCSS',
      icon: TailwindCSS
    },
    {
      name: 'JavaScript',
      icon: JavaScript
    },
    {
      name: 'TypeScript',
      icon: TypeScript
    },
    {
      name: 'NodeJS',
      icon: NodeJS
    },
    {
      name: 'Express',
      icon: Express
    },
    {
      name: 'React',
      icon: React
    },
    {
      name: 'NextJS',
      icon: NextJS
    },
    {
      name: 'PostgreSQL',
      icon: PostgreSQL
    },
    {
      name: 'MongoDB',
      icon: MongoDB
    }
  ]

  return (
    <div className={classNames('projects', 'section')} id='projects'>
      <Heading type='h2' style={{ textAlign: 'center', marginBottom: '2rem' }}>{ready && t('common--projects')}</Heading>
      <div className={classNames('projects__content')}>
        {/* Information Aside */}
        <div>
          {/* Top Information */}
          <div>
            <Text type='button' style={{ margin: 0, color: '#8E92C2', padding: '.5rem 0' }}>{ready && t('projects--expertises-title')}</Text>
            <div style={{ color: '#8E92C2', display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.5rem 0' }}>
              <Clock color='#8E92C2' />
              <Text type='paragraph' style={{ margin: 0 }}>{ready && t('projects--expertises-1')}</Text>
            </div>
            <div style={{ color: '#8E92C2', display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.5rem 0' }}>
              <UserTie color='#8E92C2' />
              <Text type='paragraph' style={{ margin: 0 }}>{ready && t('projects--expertises-2')}</Text>
            </div>
            <Separator color='#8E92C2' />
          </div>
          {/* Expertises */}
          <div>
            <Text type='big_paragraph' style={{ padding: '.75rem', margin: 0 }}>{ready && t('common--expertises')}</Text>

            <div className={classNames('projects__expertises')}>
              {expertises.map(expertise => {
                return (
                  <div key={expertise.name}>
                    <Badge
                      Icon={<div style={{ width: '36px' }}><expertise.icon /></div>}
                      style={{ backgroundColor: 'transparent', color: '#8E92C2' }}
                    >{expertise.name}</Badge>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* Projects */}
        <div>
          Right
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection