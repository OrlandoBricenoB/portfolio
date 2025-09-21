import useTranslate from '../../../hooks/useTranslate'

import classNames from 'classnames'
import GoToFile from '../../atoms/icons/GoToFile'

import HTML from '../../atoms/icons/tools/HTML'
import CSS from '../../atoms/icons/tools/CSS'
import JavaScript from '../../atoms/icons/tools/JavaScript'
import TypeScript from '../../atoms/icons/tools/TypeScript'
import NodeJS from '../../atoms/icons/tools/NodeJS'
import React from '../../atoms/icons/tools/React'
import PostgreSQL from '../../atoms/icons/tools/PostgreSQL'
import ByondLogo from '../../../assets/images/brands/byondLogo.webp'

import Heading from '../../atoms/texts/Heading'
import Text from '../../atoms/texts/Text'
import Button from '../../atoms/Button'
import Badge from '../../atoms/Badge'
import Container from '../../atoms/Container'

import GadminLegacy from '../../../assets/images/projects/gadmin-legacy.webp'
import GadminWebs from '../../../assets/images/projects/gadmin-webs.webp'
import FileExt from '../../../assets/images/projects/file-ext.png'
import AdventBanner from '../../../assets/images/projects/adventjs.png'
import NarubyondProject from '../../../assets/images/projects/narubyond.webp'
import NgnProject from '../../../assets/images/projects/ngn.webp'
import CorreFution from '../../../assets/images/projects/correfution.webp'
import PaypalCalculator from '../../../assets/images/projects/paypal-calculator.webp'
import BokadosPreview from '../../../assets/images/projects/bokados-preview.webp'
import Image from 'next/image'

const ProjectsSection = () => {
  const { t } = useTranslate()

  return (
    <div className={classNames('projects')} id='projects'>
      <div className={classNames('wrapper')}>
        <Text type='big_paragraph'>{
          '| ' + t('common--projects') + ' |'
        }</Text>
        <Heading
          type='h1'
          color='var(--dark)'
          style={{
            maxWidth: '30%',
          }}
          className="projects__heading"
        >
          {t('common--projects-title')}
        </Heading>
        <style jsx>{`
          .projects__heading {
            max-width: 100%;
            width: 100%;
          }
          @media (min-width: 768px) {
            .projects__heading {
              max-width: 50%;
              width: 50%;
            }
          }
        `}</style>
        <div className={classNames('projects__content')}>
          {/* Projects */}
          <div className={classNames('projects__list')}>
            <Container className={classNames('projects__item', 'projects__item--big')}>
              <figure style={{
                margin: 0,
                display: 'flex',
                alignItems: 'flex-start'
              }}>
                <Image
                  src={GadminWebs.src}
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
                  <Heading type='h3' color='var(--dark)' style={{ margin: 0 }}>
                    Gadmin
                  </Heading>
                  <Text type='big_paragraph' style={{ color: 'var(--dark-lighter)', margin: 0 }}>
                    {t('projects--gadmin-content')}
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
                  href='https://app.gadmin.app'
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
                  src={GadminLegacy.src}
                  width={554}
                  height={333}
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
                    Gadmin Legacy
                  </Heading>
                  <Text type='big_paragraph' style={{ color: '#e3e3e3', margin: 0 }}>
                    {t('projects--gadmin-legacy-content-1')}<br /><br />
                    {t('projects--gadmin-legacy-content-2')}
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
                  href='https://app.gadmin.app'
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
                  File Ext (2022)
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
                  src={BokadosPreview}
                  width={300}
                  height={300}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '4px'
                  }}
                  alt='Bokados Menu Prices'
                />
              </figure>
              <div className={classNames('projects__item_content')}>
                {/* Project Information */}
                <Text type='big_paragraph' style={{ margin: 0 }}>
                  {t('projects--bokados-title')} (2021)
                </Text>
                <Text type='paragraph' style={{ color: '#e3e3e3', margin: 0 }}>
                  {t('projects--bokados-1')}
                  <br /><br />
                  {t('projects--bokados-2')}
                </Text>
                {/* Badge Tools */}
                <div style={{ display: 'flex', flexWrap:' wrap', gap: '.5rem' }}> 
                  <Badge
                    Icon={<HTML size='24' />}
                    style={{ backgroundColor: '#070a2b' }}
                  >HTML</Badge>
                  <Badge
                    Icon={<CSS size='24' />}
                    style={{ backgroundColor: '#070a2b' }}
                  >CSS</Badge>
                  <Badge
                    Icon={<JavaScript size='24' />}
                    style={{ backgroundColor: '#070a2b' }}
                  >JavaScript</Badge>
                </div>
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
                  {t('projects--calculadora-title')} (2020)
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
                  Corre Fution (2019)
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
                  Naruto Guerra Ninja (2013)
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
                  NaruByond (2013)
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
    </div>
  )
}

export default ProjectsSection