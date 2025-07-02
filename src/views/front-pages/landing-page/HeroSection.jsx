// React Imports
import { useState, useEffect } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Styles Imports
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

const HeroSection = ({ mode }) => {
  // States
  const [transform, setTransform] = useState('')

  // Vars
  const dashboardImageLight =
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  const dashboardImageDark =
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  const elementsImageLight = '/images/front-pages/landing-page/hero-elements-light.png'
  const elementsImageDark = '/images/front-pages/landing-page/hero-elements-dark.png'
  const heroSectionBgLight = '/images/front-pages/landing-page/hero-bg-light.png'
  const heroSectionBgDark = '/images/front-pages/landing-page/hero-bg-dark.png'

  // Hooks
  const { mode: muiMode } = useColorScheme()
  const dashboardImage = useImageVariant(mode, dashboardImageLight, dashboardImageDark)
  const elementsImage = useImageVariant(mode, elementsImageLight, elementsImageDark)
  const heroSectionBg = useImageVariant(mode, heroSectionBgLight, heroSectionBgDark)
  const _mode = (muiMode === 'system' ? mode : muiMode) || mode
  const isAboveLgScreen = useMediaQuery(theme => theme.breakpoints.up('lg'))

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = event => {
        const rotateX = (window.innerHeight - 2 * event.clientY) / 100
        const rotateY = (window.innerWidth - 2 * event.clientX) / 100

        setTransform(
          `perspective(1200px) rotateX(${rotateX < -40 ? -20 : rotateX}deg) rotateY(${rotateY}deg) scale3d(1,1,1)`
        )
      }

      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section id='home' className='overflow-hidden pbs-[75px] -mbs-[75px] relative'>
      <img
        src={heroSectionBg}
        alt='hero-bg'
        className={classnames('bs-[95%] sm:bs-[85%] md:bs-[80%]', styles.heroSectionBg, {
          [styles.bgLight]: _mode === 'light',
          [styles.bgDark]: _mode === 'dark'
        })}
      />
      <div className={classnames('pbs-[88px] overflow-hidden', frontCommonStyles.layoutSpacing)}>
        <div className='md:max-is-[550px] mbs-0 mbe-7 mli-auto text-center relative'>
          <Typography
            className={classnames('font-extrabold sm:text-[42px] text-3xl mbe-4 leading-[48px]', styles.heroText)}
          >
            Menyalurkan Zakat, Infak, dan Sedekah - Amanah & Profesional
          </Typography>
          <Typography className='font-medium' color='text.primary'>
            Lembaga zakat berbasis Nahdlatul Ulama yang amanah, profesional, dan siap menyalurkan kebaikan Anda kepada
            yang membutuhkan.
          </Typography>
          <div className='flex mbs-6 items-center justify-center gap-4 relative'>
            <Button
              component={Link}
              size='large'
              href='/front-pages/landing-page#donasi'
              variant='contained'
              color='primary'
            >
              Donasi Sekarang
            </Button>
            <Button
              component={Link}
              size='large'
              href='/front-pages/landing-page#program'
              variant='outlined'
              color='primary'
            >
              Lihat Program
            </Button>
          </div>
        </div>
      </div>
      <div
        className={classnames('relative text-center', frontCommonStyles.layoutSpacing)}
        style={{ transform: isAboveLgScreen ? transform : 'none' }}
      >
        <Link href='/' target='_blank' className='block relative'>
          <img src={dashboardImage} alt='dashboard-image' className={classnames('mli-auto', styles.heroSecDashboard)} />
          <div className={classnames('absolute', styles.heroSectionElements)}>
            <img src={elementsImage} alt='dashboard-elements' />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
