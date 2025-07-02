// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'
import styles from './styles.module.css'

const FaqsData = [
  {
    id: 'panel1',
    question: 'Apa itu UPZISNU?',
    answer:
      "UPZISNU (Unit Pengelola Zakat, Infak, dan Sedekah Nahdlatul Ulama) adalah lembaga resmi di bawah naungan NU yang mengelola penghimpunan dan penyaluran dana ZIS secara syar'i, amanah, dan profesional."
  },
  {
    id: 'panel2',
    question: 'Apakah zakat saya bisa disalurkan ke program tertentu?',
    active: true,
    answer:
      'Tentu, Anda dapat memilih program penyaluran sesuai kebutuhan seperti Zakat Produktif, Sedekah Pangan, Infak Pendidikan, atau NU Peduli. Silakan pilih saat berdonasi.'
  },
  {
    id: 'panel3',
    question: 'Bagaimana cara donasi via QRIS?',
    answer:
      'Cukup scan QR Code UPZISNU yang tersedia di website atau media sosial kami, lalu ikuti instruksi pembayaran melalui aplikasi mobile banking atau e-wallet Anda.'
  },
  {
    id: 'panel4',
    question: 'Apa bedanya zakat, infak, dan sedekah?',
    answer:
      'Zakat adalah kewajiban dengan syarat dan nisab tertentu, infak adalah pemberian harta di luar zakat, sedangkan sedekah adalah pemberian sukarela untuk kebaikan. Semua dikelola dan disalurkan sesuai syariat.'
  }
]

const Faqs = () => {
  // Refs
  const skipIntersection = useRef(true)
  const ref = useRef(null)

  // Hooks
  const { updateIntersections } = useIntersection()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (skipIntersection.current) {
          skipIntersection.current = false

          return
        }

        updateIntersections({ [entry.target.id]: entry.isIntersecting })
      },
      { threshold: 0.35 }
    )

    ref.current && observer.observe(ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id='faq' ref={ref} className={classnames('plb-[100px] bg-backgroundDefault', styles.sectionStartRadius)}>
      <div className={classnames('flex flex-col gap-16', frontCommonStyles.layoutSpacing)}>
        <div className='flex flex-col gap-y-4 items-center justify-center'>
          <Chip size='small' variant='tonal' color='primary' label='FAQ UPZISNU' />
          <div className='flex flex-col items-center gap-y-1 justify-center flex-wrap'>
            <div className='flex items-center gap-x-2'>
              <Typography color='text.primary' variant='h4'>
                <span className='relative z-[1] font-extrabold'>
                  Pertanyaan Umum
                  <img
                    src='/images/front-pages/landing-page/bg-shape.png'
                    alt='bg-shape'
                    className='absolute block-end-0 z-[1] bs-[40%] is-[132%] -inline-start-[8%] block-start-[17px]'
                  />
                </span>
              </Typography>
            </div>
            <Typography className='text-center'>
              Temukan jawaban seputar layanan, program, dan donasi di UPZISNU.
            </Typography>
          </div>
        </div>
        <div>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5} className='text-center'>
              <img
                src='/images/front-pages/landing-page/boy-sitting-with-laptop.png'
                alt='boy with laptop'
                className='is-[80%] max-is-[320px]'
              />
            </Grid>
            <Grid item xs={12} lg={7}>
              <div>
                {FaqsData.map((data, index) => {
                  return (
                    <Accordion key={index} defaultExpanded={data.active}>
                      <AccordionSummary
                        aria-controls={data.id + '-content'}
                        id={data.id + '-header'}
                        className='font-medium'
                        color='text.primary'
                      >
                        {data.question}
                      </AccordionSummary>
                      <AccordionDetails className='text-textSecondary'>{data.answer}</AccordionDetails>
                    </Accordion>
                  )
                })}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  )
}

export default Faqs
