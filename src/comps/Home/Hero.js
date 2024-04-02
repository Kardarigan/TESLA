import { Splide } from '@splidejs/react-splide'
import Hero_Slide from './Hero_Slide'
import { heroSlides } from '../../constants'

const Hero = () => {
  return (
    <section id='hero' className='h-screen'>

      <div className="w-full">
        <Splide aria-label="Tesla Hero Slider" options={
          {
            type: 'fade',
            rewind: true,
            autoplay: true,
            arrows: false
          }
        }>
          {heroSlides.map((slide) => {
            return (
              <Hero_Slide
                title={slide.title}
                subtitle={slide.subtitle}
                image={slide.image}
                alt={slide.alt}
                link1={slide.link1}
                link1_label={slide.link1_label}
                link2={slide.link2}
                link2_label={slide.link2_label}
              />
            )
          })}
          <div className="md:block hidden splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </Splide>
      </div>

    </section>
  )
}

export default Hero