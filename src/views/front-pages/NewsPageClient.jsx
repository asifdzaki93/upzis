'use client'

import { useState } from 'react'

import Link from 'next/link'

import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import frontCommonStyles from './styles.module.css'
import styles from './landing-page/styles.module.css'

import newsData from '@/data/newsData'

const categories = ['Semua', ...Array.from(new Set(newsData.map(n => n.category)))]
const PAGE_SIZE = 6

export default function NewsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [page, setPage] = useState(1)

  const filteredNews = selectedCategory === 'Semua' ? newsData : newsData.filter(n => n.category === selectedCategory)
  const totalPages = Math.ceil(filteredNews.length / PAGE_SIZE)
  const pagedNews = filteredNews.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleCategory = cat => {
    setSelectedCategory(cat)
    setPage(1)
  }

  return (
    <section className='plb-[84px] bg-backgroundPaper'>
      <div className={frontCommonStyles.layoutSpacing}>
        <div className='flex flex-col gap-y-4 items-center justify-center mbe-8'>
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
            <Typography className='text-center'>
              Berita dan informasi terbaru seputar program, kegiatan, dan pencapaian UPZISNU.
            </Typography>
          </div>
        </div>
        {/* Filter kategori */}
        <div className='flex flex-wrap gap-2 justify-center mbe-8'>
          {categories.map(cat => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'contained' : 'outlined'}
              color='primary'
              onClick={() => handleCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
        {/* Grid berita */}
        <Grid container spacing={6} justifyContent='center'>
          {pagedNews.map(news => (
            <Grid item key={news.id} xs={12} sm={6} md={4}>
              <Link href={`/front-pages/news/${news.id}`} style={{ textDecoration: 'none' }}>
                <Card
                  className='h-full flex flex-col border border-solid cursor-pointer hover:shadow-lg transition-shadow duration-200'
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
              </Link>
            </Grid>
          ))}
        </Grid>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className='flex justify-center gap-2 mbs-8'>
            <Button variant='outlined' color='primary' disabled={page === 1} onClick={() => setPage(page - 1)}>
              Sebelumnya
            </Button>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={page === i + 1 ? 'contained' : 'outlined'}
                color='primary'
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
            <Button variant='outlined' color='primary' disabled={page === totalPages} onClick={() => setPage(page + 1)}>
              Selanjutnya
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
