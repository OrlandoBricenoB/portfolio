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
  const knowledges = [
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
      <Heading type='h2' style={{ textAlign: 'center', marginBottom: '2rem' }}>Proyectos</Heading>
      <div className={classNames('projects__content')}>
        {/* Information Aside */}
        <div>
          {/* Top Information */}
          <div>
            <Text type='button' style={{ margin: 0, color: '#8E92C2', padding: '.5rem 0' }}>Desarrollando proyectos</Text>
            <div style={{ color: '#8E92C2', display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.5rem 0' }}>
              <Clock color='#8E92C2' />
              <Text type='paragraph' style={{ margin: 0 }}>Desde 2011</Text>
            </div>
            <div style={{ color: '#8E92C2', display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.5rem 0' }}>
              <UserTie color='#8E92C2' />
              <Text type='paragraph' style={{ margin: 0 }}>+10 años de experiencia</Text>
            </div>
            <Separator color='#8E92C2' />
          </div>
          {/* Knowledges */}
          <div>
            <Text type='big_paragraph' style={{ padding: '.75rem', margin: 0 }}>Conocimientos</Text>

            {knowledges.map(knowledge => {
              return (
                <div key={knowledge.name}>
                  <Badge
                    Icon={<div style={{ width: '36px' }}><knowledge.icon /></div>}
                    style={{ backgroundColor: 'transparent' }}
                  >{knowledge.name}</Badge>
                </div>
              )
            })}
          </div>
        </div>
        {/* Projects */}
        <div>Right</div>
      </div>
    </div>
  )
}

export default ProjectsSection