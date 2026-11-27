import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const AUTOSLIDE_MS = 5000

// Certifications carousel: advances on its own, pauses while hovered.
const AboutCarousel = ({ certifications }) => {
  const timer = useRef()

  const schedule = swiper => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      if (swiper.isEnd) swiper.slideTo(0)
      else swiper.slideNext()
    }, AUTOSLIDE_MS)
  }

  return (
    <div
      onMouseEnter={() => clearTimeout(timer.current)}
      onMouseLeave={e => {
        const swiper = e.currentTarget.querySelector('.swiper')?.swiper
        if (swiper) schedule(swiper)
      }}
    >
      <Swiper
        modules={[Pagination, Navigation, Scrollbar]}
        spaceBetween={16}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
        scrollbar={{ draggable: true, hide: true }}
        simulateTouch={true}
        onSwiper={schedule}
        onSlideChange={schedule}
      >
        {certifications.map(certification => (
          <SwiperSlide key={certification.id}>
            <div className='h-full w-full'>
              <div className='flex h-full flex-col gap-[.6rem] rounded-card border-2 border-transparent bg-blue-50 px-[1.2rem] pt-5 pb-[1.4rem] transition duration-200 hover:-translate-y-[3px] hover:border-blue-700'>
                <p title={certification.name} className='m-0 text-[1.2rem] leading-[1.4] font-bold'>
                  {certification.name}
                </p>
                <span className='sticker sticker--soft w-fit px-[11px] py-1.5 text-[13px]' style={{ '--r': '-2deg' }}>
                  Platzi · {certification.date}
                </span>
                <p className='m-0 text-[.95rem] leading-[1.6] opacity-80'>
                  {certification.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default AboutCarousel
