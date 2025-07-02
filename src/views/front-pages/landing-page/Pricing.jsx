// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Switch from '@mui/material/Switch'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'
import styles from './styles.module.css'

const pricingPlans = [
  {
    title: 'Donasi Rutin',
    img: '/images/front-pages/landing-page/pricing-basic.png',
    monthlyPay: 50,
    annualPay: 40,
    perYearPay: 480,
    features: [
      'Otomatisasi donasi bulanan',
      'Laporan penyaluran rutin',
      'Pilih program sesuai keinginan',
      'Notifikasi penyaluran',
      'Akses konsultasi ZIS',
      'Sertifikat donatur loyal'
    ],
    current: false
  },
  {
    title: 'Donasi Program',
    img: '/images/front-pages/landing-page/pricing-team.png',
    monthlyPay: 100,
    annualPay: 80,
    perYearPay: 960,
    features: [
      'Donasi ke program unggulan',
      'Laporan real-time & tahunan',
      'Akses event & webinar UPZISNU',
      'Pilih penyaluran zakat, infak, sedekah',
      'Konsultasi syariah gratis',
      'Sertifikat donasi program'
    ],
    current: true
  },
  {
    title: 'Donasi Korporasi',
    img: '/images/front-pages/landing-page/pricing-enterprise.png',
    monthlyPay: 500,
    annualPay: 400,
    perYearPay: 4800,
    features: [
      'Kerjasama CSR & payroll zakat',
      'Laporan audit & transparansi',
      'Pendampingan program sosial',
      'Publikasi donasi perusahaan',
      'Kunjungan & monitoring program',
      'Sertifikat & penghargaan CSR'
    ],
    current: false
  }
]

const PricingPlan = () => {
  // States
  const [pricingPlan, setPricingPlan] = useState('annually')

  const handleChange = e => {
    if (e.target.checked) {
      setPricingPlan('annually')
    } else {
      setPricingPlan('monthly')
    }
  }

  return (
    <section
      id='pricing-plans'
      className={classnames(
        'flex flex-col gap-8 lg:gap-12 plb-[100px] bg-backgroundDefault rounded-[60px]',
        styles.sectionStartRadius
      )}
    >
      <div className={classnames('is-full', frontCommonStyles.layoutSpacing)}>
        <div className='flex flex-col gap-y-4 items-center justify-center'>
          <Chip size='small' variant='tonal' color='primary' label='Paket Donasi' />
          <div className='flex flex-col items-center gap-y-1 justify-center flex-wrap'>
            <div className='flex items-center gap-x-2'>
              <Typography color='text.primary' variant='h4' className='text-center'>
                <span className='relative z-[1] font-extrabold'>
                  Pilihan Donasi Sesuai Kebutuhan
                  <img
                    src='/images/front-pages/landing-page/bg-shape.png'
                    alt='bg-shape'
                    className='absolute block-end-0 z-[1] bs-[40%] is-[125%] sm:is-[132%] -inline-start-[10%] sm:inline-start-[-19%] block-start-[17px]'
                  />
                </span>
              </Typography>
            </div>
            <Typography className='text-center'>
              Pilih paket donasi terbaik untuk mendukung program zakat, infak, dan sedekah UPZISNU. Semua paket
              transparan, amanah, dan memberdayakan.
            </Typography>
          </div>
        </div>
        <div className='flex justify-center items-center max-sm:mlb-3 mbe-6'>
          <InputLabel htmlFor='pricing-switch' className='cursor-pointer'>
            Bulanan
          </InputLabel>
          <Switch id='pricing-switch' onChange={handleChange} checked={pricingPlan === 'annually'} />
          <InputLabel htmlFor='pricing-switch' className='cursor-pointer'>
            Tahunan
          </InputLabel>
          <div className='flex gap-x-1 items-start max-sm:hidden mis-2 mbe-5'>
            <img src='/images/front-pages/landing-page/pricing-arrow.png' width='50' />
            <Typography className='font-medium'>Hemat hingga 20%</Typography>
          </div>
        </div>
        <Grid container spacing={6}>
          {pricingPlans.map((plan, index) => (
            <Grid item key={index} xs={12} lg={4}>
              <Card className={`${plan.current && 'border-2 border-[var(--mui-palette-primary-main)] shadow-xl'}`}>
                <CardContent className='flex flex-col gap-8 p-8'>
                  <div className='is-full flex flex-col items-center gap-3'>
                    <img src={plan.img} alt={plan.img} height='88' width='86' className='text-center' />
                  </div>
                  <div className='flex flex-col items-center gap-y-[2px] relative'>
                    <Typography className='text-center' variant='h4'>
                      {plan.title}
                    </Typography>
                    <div className='flex items-baseline gap-x-1'>
                      <Typography variant='h2' color='primary' className='font-extrabold'>
                        ${pricingPlan === 'monthly' ? plan.monthlyPay : plan.annualPay}
                      </Typography>
                      <Typography color='text.disabled' className='font-medium'>
                        /mo
                      </Typography>
                    </div>
                    {pricingPlan === 'annually' && (
                      <Typography color='text.disabled' className='absolute block-start-[100%]'>
                        ${plan.perYearPay} / year
                      </Typography>
                    )}
                  </div>
                  <div>
                    <div className='flex flex-col gap-3 mbs-3'>
                      {plan.features.map((feature, index) => (
                        <div key={index} className='flex items-center gap-[12px]'>
                          <CustomAvatar color='primary' skin={plan.current ? 'filled' : 'light'} size={20}>
                            <i className='tabler-check text-sm' />
                          </CustomAvatar>
                          <Typography variant='h6'>{feature}</Typography>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button component={Link} href='/front-pages/payment' variant={plan.current ? 'contained' : 'tonal'}>
                    Donasi Sekarang
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  )
}

export default PricingPlan
