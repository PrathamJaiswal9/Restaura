import video from '../assets/hero.mp4'
import logo from '../assets/logo.png'
import hero from '../assets/hero.jpeg'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video className='h-screen w-full object-cover' 
        src={video} type='video/mp4' 
            autoPlay loop muted playsInline poster={hero}>
        </video>
      </div>

      <div className='absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black'>
      </div>

        <div className='relative z-20 h-screen flex flex-col justify-end pb-20'>
            <motion.img 
            initial={{opacity: 0 , y: 50}}
            animate={{opacity: 1 , y:0}}
            transition={{duration : 3}} 
            className='w-full p-4' 
            src={logo} alt="Restura" />

            <p className='p-4 text-2xl tracking-tighter text-white'>
                Paris
            </p>
        </div>

    </section>
  )
}

export default Hero
