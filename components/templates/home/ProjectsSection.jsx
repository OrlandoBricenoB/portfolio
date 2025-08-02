import useTranslate from '../../../hooks/useTranslate'

import classNames from 'classnames'
import Clock from '../../atoms/icons/Clock'
import UserTie from '../../atoms/icons/UserTie'
import GoToFile from '../../atoms/icons/GoToFile'

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
import ByondLogo from '../../../assets/images/brands/byondLogo.webp'

import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'
import Button from '../../atoms/Button'
import Separator from '../../atoms/Separator'
import Badge from '../../atoms/Badge'
import Container from '../../atoms/Container'

import Gadmin from '../../../assets/images/projects/gadmin.png'
import FileExt from '../../../assets/images/projects/file-ext.png'
import AdventBanner from '../../../assets/images/projects/adventjs.png'
import NarubyondProject from '../../../assets/images/projects/narubyond.webp'
import NgnProject from '../../../assets/images/projects/ngn.webp'
import CorreFution from '../../../assets/images/projects/correfution.webp'
import PaypalCalculator from '../../../assets/images/projects/paypal-calculator.webp'
import Image from 'next/image'

const ProjectsSection = () => {
  const { t } = useTranslate()

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
      <Heading type='h2' style={{ textAlign: 'center', marginBottom: '2rem' }}>{t('common--projects')}</Heading>
      <div className={classNames('projects__content')}>
        {/* Information Aside */}
        <div>
          {/* Top Information */}
          <div>
            <Text type='button' style={{ margin: 0, color: '#8E92C2', padding: '.5rem 0' }}>{t('projects--expertises-title')}</Text>
            <div style={{ color: '#8E92C2', display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.5rem 0' }}>
              <Clock color='#8E92C2' />
              <Text type='paragraph' style={{ margin: 0 }}>{t('projects--expertises-1')}</Text>
            </div>
            <div style={{ color: '#8E92C2', display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.5rem 0' }}>
              <UserTie color='#8E92C2' />
              <Text type='paragraph' style={{ margin: 0 }}>{t('projects--expertises-2')}</Text>
            </div>
            <Separator color='#8E92C2' />
          </div>
          {/* Expertises */}
          <div>
            <Text type='big_paragraph' style={{ padding: '.75rem', margin: 0 }}>{t('common--expertises')}</Text>

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
        <div className={classNames('projects__list')}>
          <Container className={classNames('projects__item', 'projects__item--big')}>
            <figure style={{
              margin: 0,
              display: 'flex',
              alignItems: 'flex-start'
            }}>
              <Image
                src={Gadmin.src}
                width={820}
                height={312}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '4px'
                }}
                alt='Portada de Gadmin'
              />
            </figure>
            <div className={classNames('projects__item_content')}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                {/* Project Information */}
                <Heading type='h3' style={{ margin: 0 }}>
                  Gadmin
                </Heading>
                <Text type='big_paragraph' style={{ color: '#e3e3e3', margin: 0 }}>
                  {t('projects--gadmin-content-1')}<br /><br />
                  {t('projects--gadmin-content-2')}
                  <br /><br />
                </Text>
                {/* Badge Tools */}
                <div style={{ display: 'flex', flexWrap:' wrap', gap: '.5rem' }}>
                  <Badge
                    Icon={<JavaScript size='24' />}
                  >JavaScript</Badge>
                  <Badge
                    Icon={<TypeScript size='24' />}
                  >TypeScript</Badge>
                  <Badge
                    Icon={<React size='24' />}
                  >React</Badge>
                  <Badge
                    Icon={<NodeJS size='24' />}
                  >NodeJS</Badge>
                  <Badge
                    Icon={<PostgreSQL size='24' />}
                  >PostgreSQL</Badge>
                </div>
              </div>
              {/* Take a look - CTA */}
              <Button
                type='outlined'
                Icon={<GoToFile color='#21c2e1' />}
                style={{ width: 'fit-content' }}
                componentElement='a'
                href='https://gadmin.app'
                target='_blank'
              >
                {t('projects--item-cta')}
              </Button>
            </div>
          </Container>
          <Container className={classNames('projects__item')}>
            <figure style={{
              margin: 0,
              display: 'flex',
              padding: '0 .5rem',
              alignItems: 'center',
              borderRadius: '4px',
              backgroundColor:'#0d1117'
            }}>
              <Image
                src={FileExt.src}
                width={554}
                height={333}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '4px'
                }}
                alt='Documentación de @jo-sword/FileExt'
              />
            </figure>
            <div className={classNames('projects__item_content')}>
              {/* Project Information */}
              <Text type='big_paragraph' style={{ margin: 0 }}>
                File Ext
              </Text>
              <Text type='paragraph' style={{ color: '#e3e3e3', margin: 0 }}>
                {t('projects--file-content-1')}
                <br /><br />
                {t('projects--file-content-2')}
              </Text>
              {/* Badge Tools */}
              <div style={{ display: 'flex', flexWrap:' wrap', gap: '.5rem' }}> 
                <Badge
                  Icon={<JavaScript size='24' />}
                  style={{ backgroundColor: '#070a2b' }}
                >JavaScript</Badge>
              </div>
              {/* Take a look - CTA */}
              <Button
                type='outlined'
                Icon={<GoToFile color='#21c2e1' />}
                style={{ width: 'fit-content' }}
                componentElement='a'
                href='https://www.npmjs.com/package/@jo-sword/file-ext'
                target='_blank'
              >
                {t('projects--item-cta')}
              </Button>
            </div>
          </Container>
          <Container className={classNames('projects__item')}>
            <figure style={{
              margin: 0,
              display: 'flex',
              padding: '0 .5rem',
              alignItems: 'center',
              borderRadius: '4px',
              backgroundColor:'#141211'
            }}>
              <Image
                src={AdventBanner}
                width={300}
                height={300}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '4px'
                }}
                alt='Soluciones del AdventJS'
              />
            </figure>
            <div className={classNames('projects__item_content')}>
              {/* Project Information */}
              <Text type='big_paragraph' style={{ margin: 0 }}>
                AdventJS 2022
              </Text>
              <Text type='paragraph' style={{ color: '#e3e3e3', margin: 0 }}>
                {t('projects--adventjs-1')}
                <br /><br />
                {t('projects--adventjs-2')}
              </Text>
              {/* Badge Tools */}
              <div style={{ display: 'flex', flexWrap:' wrap', gap: '.5rem' }}> 
                <Badge
                  Icon={<JavaScript size='24' />}
                  style={{ backgroundColor: '#070a2b' }}
                >JavaScript</Badge>
              </div>
              {/* Take a look - CTA */}
              <Button
                type='outlined'
                Icon={<GoToFile color='#21c2e1' />}
                style={{ width: 'fit-content' }}
                componentElement='a'
                href='https://github.com/OrlandoBricenoB/adventjs-2022'
                target='_blank'
              >
                {t('projects--item-cta')}
              </Button>
            </div>
          </Container>
          <Container className={classNames('projects__item')}>
            <figure style={{
              margin: 0,
              display: 'flex',
              padding: '0 .5rem',
              alignItems: 'center',
              borderRadius: '4px',
              backgroundColor:'#141211'
            }}>
              <Image
                src={PaypalCalculator}
                width={300}
                height={300}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '4px'
                }}
                alt='Calculadora PayPal'
              />
            </figure>
            <div className={classNames('projects__item_content')}>
              {/* Project Information */}
              <Text type='big_paragraph' style={{ margin: 0 }}>
                {t('projects--calculadora-title')}
              </Text>
              <Text type='paragraph' style={{ color: '#e3e3e3', margin: 0 }}>
                {t('projects--calculadora-1')}
                <br /><br />
                {t('projects--calculadora-2')}
              </Text>
              {/* Badge Tools */}
              <div style={{ display: 'flex', flexWrap:' wrap', gap: '.5rem' }}> 
                <Badge
                  Icon={<JavaScript size='24' />}
                  style={{ backgroundColor: '#070a2b' }}
                >JavaScript</Badge>
              </div>
              {/* Take a look - CTA */}
              <Button
                type='outlined'
                Icon={<GoToFile color='#21c2e1' />}
                style={{ width: 'fit-content' }}
                componentElement='a'
                href='https://github.com/OrlandoBricenoB/calculadora-paypal'
                target='_blank'
              >
                {t('projects--item-cta')}
              </Button>
            </div>
          </Container>
          <Container className={classNames('projects__item')}>
            <figure style={{
              margin: 0,
              display: 'flex',
              padding: '0 .5rem',
              alignItems: 'center',
              borderRadius: '4px',
              backgroundColor:'#141211'
            }}>
              <Image
                src={CorreFution}
                width={300}
                height={300}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '4px'
                }}
                alt='Corre Fution'
              />
            </figure>
            <div className={classNames('projects__item_content')}>
              {/* Project Information */}
              <Text type='big_paragraph' style={{ margin: 0 }}>
                Corre Fution
              </Text>
              <Text type='paragraph' style={{ color: '#e3e3e3', margin: 0 }}>
                {t('projects--correfution-1')}
                <br /><br />
                {t('projects--correfution-2')}
              </Text>
              {/* Badge Tools */}
              <div style={{ display: 'flex', flexWrap:' wrap', gap: '.5rem' }}> 
                <Badge
                  Icon={<JavaScript size='24' />}
                  style={{ backgroundColor: '#070a2b' }}
                >JavaScript (Phaser JS)</Badge>
              </div>
              {/* Take a look - CTA */}
              <Button
                type='outlined'
                Icon={<GoToFile color='#21c2e1' />}
                style={{ width: 'fit-content' }}
                componentElement='a'
                href='https://jo-sword.itch.io/corre-fution'
                target='_blank'
              >
                {t('projects--item-cta')}
              </Button>
            </div>
          </Container>
          <Container className={classNames('projects__item')}>
            <figure style={{
              margin: 0,
              display: 'flex',
              padding: '0 .5rem',
              alignItems: 'center',
              borderRadius: '4px',
              backgroundColor:'#141211'
            }}>
              <Image
                src={NgnProject}
                width={300}
                height={300}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '4px'
                }}
                alt='Naruto Guerra Ninja'
              />
            </figure>
            <div className={classNames('projects__item_content')}>
              {/* Project Information */}
              <Text type='big_paragraph' style={{ margin: 0 }}>
                Naruto Guerra Ninja (Online RPG)
              </Text>
              <Text type='paragraph' style={{ color: '#e3e3e3', margin: 0 }}>
                {t('projects--ngn-1')}
                <br /><br />
                {t('projects--ngn-2')}
              </Text>
              {/* Badge Tools */}
              <div style={{ display: 'flex', flexWrap:' wrap', gap: '.5rem' }}> 
                <Badge
                  Icon={
                    <Image
                      src={ByondLogo}
                      width={24}
                      height={24}
                      alt="Byond Logo"
                      style={{ borderRadius: '4px' }}
                    />
                  }
                  style={{ backgroundColor: '#070a2b' }}
                >Dream Maker (C Based)</Badge>
              </div>
              {/* Take a look - CTA */}
              <Button
                type='outlined'
                Icon={<GoToFile color='#21c2e1' />}
                style={{ width: 'fit-content' }}
                componentElement='a'
                href='https://www.byond.com/games/RedFill/NarutoGuerraNinja'
                target='_blank'
              >
                {t('projects--item-cta')}
              </Button>
            </div>
          </Container>
          <Container className={classNames('projects__item')}>
            <figure style={{
              margin: 0,
              display: 'flex',
              padding: '0 .5rem',
              alignItems: 'center',
              borderRadius: '4px',
              backgroundColor:'#141211'
            }}>
              <Image
                src={NarubyondProject}
                width={300}
                height={300}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '4px'
                }}
                alt='Narubyond 1.8'
              />
            </figure>
            <div className={classNames('projects__item_content')}>
              {/* Project Information */}
              <Text type='big_paragraph' style={{ margin: 0 }}>
                NaruByond (Online RPG)
              </Text>
              <Text type='paragraph' style={{ color: '#e3e3e3', margin: 0 }}>
                {t('projects--narubyond-1')}
                <br /><br />
                {t('projects--narubyond-2')}
              </Text>
              {/* Badge Tools */}
              <div style={{ display: 'flex', flexWrap:' wrap', gap: '.5rem' }}> 
                <Badge
                  Icon={
                    <Image
                      src={ByondLogo}
                      width={24}
                      height={24}
                      alt="Byond Logo"
                      style={{ borderRadius: '4px' }}
                    />
                  }
                  style={{ backgroundColor: '#070a2b' }}
                >Dream Maker (C Based)</Badge>
              </div>
              {/* Take a look - CTA */}
              <Button
                type='outlined'
                Icon={<GoToFile color='#21c2e1' />}
                style={{ width: 'fit-content' }}
                componentElement='a'
                href='https://www.byond.com/games/RedFill/NaruByond'
                target='_blank'
              >
                {t('projects--item-cta')}
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection