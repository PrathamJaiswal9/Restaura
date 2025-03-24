import missionImg from '../assets/mission.jpeg'
import video from '../assets/mission.mp4'
import { MISSION } from '../constants'
import {motion} from 'framer-motion'

const Mission = () => {
  return (
    <section id="mission">
        <div className="container mx-auto">
            <h2 className="mb-9 text-3xl lg:text-5xl text-center">
                Our Mission.
            </h2>
            <div className="relative flex items-center justify-center ">
                <motion.video
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{oncre:true}}
                transition={{duration:1}}
                 className="w-full rounded-3xl" autoPlay loop muted
                playsInline poster={missionImg}>
                    <source src={video} type='video/mp4'/>
                </motion.video>

                <motion.div
                  initial={{opacity:0}}
                  whileInView={{opacity:1}}
                  viewport={{oncre:true}}
                  transition={{duration:0.5, delay:0.5}}
                 className='absolute h-full w-full rounded-3xl bg-black/40 '>
                </motion.div>
                    <motion.p
                      initial={{opacity:0, y:20}}
                      whileInView={{opacity:1, y:0}}
                      viewport={{oncre:true}}
                      transition={{duration:1, delay:0.5}} 
                    className='absolute max-w-lg tracking-tighter lg:text-3xl
                    text-center text-neutral-400'>
                        {MISSION}
                    </motion.p>

            </div>
        </div>
    </section>
  )
}

export default Mission
