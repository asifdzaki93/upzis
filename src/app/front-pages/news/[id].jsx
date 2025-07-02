'use client'

import { useParams } from 'next/navigation'

import Link from 'next/link'

import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

import frontCommonStyles from '@/views/front-pages/styles.module.css'
import styles from '@/views/front-pages/landing-page/styles.module.css'
import newsData from '@/data/newsData'

export default function NewsDetailPage() {
  const params = useParams()
  const id = Number(params.id)
  const news = newsData.find(n => n.id === id)

  if (!news) return <Typography>Berita tidak ditemukan.</Typography>

  return (
    <section className='plb-[84px] bg-backgroundPaper'>
      <div className={frontCommonStyles.layoutSpacing}>
        <div className='flex flex-col gap-y-4 items-center justify-center mbe-8'>
          <Chip size='small' variant='tonal' color='primary' label={news.category} />
          <Typography color='text.primary' variant='h4' className='font-extrabold text-center'>
            {news.title}
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            {news.date}
          </Typography>
        </div>
        <Card
          className='mbe-8 mx-auto max-w-[600px] border border-solid'
          style={{ borderColor: 'var(--mui-palette-primary-main)', borderWidth: 2, borderRadius: 16 }}
        >
          <CardMedia
            component='img'
            height='320'
            image={news.image}
            alt={news.title}
            style={{ objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
          />
          <CardContent>
            <Typography variant='body1' color='text.primary' style={{ whiteSpace: 'pre-line' }}>
              {news.content}
            </Typography>
          </CardContent>
        </Card>
        <div className='flex justify-center'>
          <Button component={Link} href='/front-pages/news' variant='outlined' color='primary'>
            Kembali ke Daftar Berita
          </Button>
        </div>
      </div>
    </section>
  )
}
