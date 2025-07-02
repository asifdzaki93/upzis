import { useState } from 'react'

import Link from 'next/link'

import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import { useKeenSlider } from 'keen-slider/react'
import Chip from '@mui/material/Chip'
import classnames from 'classnames'

import styles from './styles.module.css'

import 'keen-slider/keen-slider.min.css'
import AppKeenSlider from '../../../libs/styles/AppKeenSlider'
import frontCommonStyles from '@views/front-pages/styles.module.css'
import CustomIconButton from '@core/components/mui/IconButton'

const newsData = [
  {
    id: 1,
    title: 'UPZISNU Salurkan Bantuan untuk Korban Bencana',
    date: '2024-06-01',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    summary:
      'UPZISNU menyalurkan bantuan kepada korban bencana alam di wilayah Jawa Tengah sebagai bentuk kepedulian sosial.'
  },
  {
    id: 2,
    title: 'Program Beasiswa Santri Resmi Dibuka',
    date: '2024-05-28',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    summary: 'Pendaftaran program beasiswa santri UPZISNU telah resmi dibuka untuk tahun ajaran 2024/2025.'
  },
  {
    id: 3,
    title: 'Laporan Transparansi Dana Mei 2024',
    date: '2024-05-25',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    summary: 'Laporan transparansi dana bulan Mei 2024 telah dipublikasikan sebagai bentuk komitmen akuntabilitas.'
  },
  {
    id: 4,
    title: 'Pelatihan Digital Marketing untuk UMKM',
    date: '2024-05-20',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
    summary: 'UPZISNU mengadakan pelatihan digital marketing gratis untuk pelaku UMKM binaan.'
  },
  {
    id: 5,
    title: 'Santunan Anak Yatim Bulan Ramadhan',
    date: '2024-05-15',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    summary: 'Santunan anak yatim dan dhuafa disalurkan selama bulan Ramadhan di berbagai daerah.'
  },
  {
    id: 6,
    title: 'UPZISNU Raih Penghargaan Lembaga Zakat Terbaik',
    date: '2024-05-10',
    image: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80',
    summary: 'UPZISNU mendapatkan penghargaan sebagai lembaga zakat terbaik tingkat nasional tahun 2024.'
  }
]

const NewsSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 24 },
    breakpoints: {
      '(max-width: 900px)': { perView: 2 },
      '(max-width: 600px)': { perView: 1 }
    }
  })

  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className='plb-[84px] bg-backgroundPaper'>
      <div className={frontCommonStyles.layoutSpacing}>
        <div className='flex flex-col gap-y-4 items-center justify-center'>
          <Chip size='small' variant='tonal' color='primary' label='Berita & Informasi' />
          <div className='flex flex-col items-center gap-y-1 justify-center flex-wrap'>
            <div className='flex items-center gap-x-2'>
              <Typography color='text.primary' variant='h4'>
                <span className='relative z-[1] font-extrabold'>
                  Update Berita Terkini
                  <img
                    src='/images/front-pages/landing-page/bg-shape.png'
                    alt='bg-shape'
                    className='absolute block-end-0 z-[1] bs-[40%] is-[132%] -inline-start-[-19%] block-start-[17px]'
                  />
                </span>{' '}
                <span className='relative z-[1] font-extrabold'>UPZISNU</span>
              </Typography>
            </div>
            <Typography className='text-center mbe-8'>
              Berita dan informasi terbaru seputar program, kegiatan, dan pencapaian UPZISNU.
            </Typography>
          </div>
        </div>
        <div className='relative'>
          <AppKeenSlider>
            <div ref={sliderRef} className='keen-slider'>
              {newsData.map((news, idx) => (
                <div className='keen-slider__slide' key={news.id}>
                  <Card
                    className='h-full flex flex-col border border-solid'
                    style={{ borderColor: 'var(--mui-palette-primary-main)', borderWidth: 2, borderRadius: 16 }}
                  >
                    <CardMedia
                      component='img'
                      height='180'
                      image={news.image}
                      alt={news.title}
                      style={{ objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                    />
                    <CardContent className='flex-1 flex flex-col'>
                      <Typography variant='h6' className='font-semibold mbe-2'>
                        {news.title}
                      </Typography>
                      <Typography variant='caption' color='text.secondary' className='mbe-2'>
                        {news.date}
                      </Typography>
                      <Typography variant='body2' color='text.secondary' className='mbs-2'>
                        {news.summary}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            {/* Floating Arrows */}
            <CustomIconButton
              color='primary'
              variant='filled'
              onClick={() => instanceRef.current?.prev()}
              className='!absolute top-1/2 left-0 -translate-y-1/2 z-10 shadow-lg bg-white/80 hover:bg-primary-main text-primary-main hover:text-white rounded-full'
              style={{ marginLeft: '-24px' }}
            >
              <i className='tabler-chevron-left text-2xl' />
            </CustomIconButton>
            <CustomIconButton
              color='primary'
              variant='filled'
              onClick={() => instanceRef.current?.next()}
              className='!absolute top-1/2 right-0 -translate-y-1/2 z-10 shadow-lg bg-white/80 hover:bg-primary-main text-primary-main hover:text-white rounded-full'
              style={{ marginRight: '-24px' }}
            >
              <i className='tabler-chevron-right text-2xl' />
            </CustomIconButton>
          </AppKeenSlider>
        </div>
        <div className='flex justify-center mbs-8 gap-2'>
          <Button component={Link} href='/front-pages/news' variant='outlined' color='primary'>
            Lihat Semua Berita
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
