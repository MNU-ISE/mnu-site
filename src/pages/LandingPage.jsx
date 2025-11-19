import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../assets/pfp.jpg'
import { TypeAnimation } from 'react-type-animation'
import { FaLaptopCode } from 'react-icons/fa'
import { MdStyle } from 'react-icons/md'
import { TbComponents } from 'react-icons/tb'
import { motion } from 'framer-motion'

const LandingPage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between -mt-10 bg-orange-50 px-6 sm:px-10 md:px-16 py-12 gap-10 md:gap-0">
        
        {/* LEFT: Text Section */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left md:ml-0 lg:ml-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-stone-800 mb-4" style={{fontFamily: 'satoshi-black'}}>
            ELITE
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-stone-800 mb-6" style={{fontFamily: 'satoshi-medium'}}>
            International
            <span className="ml-2 block sm:inline">
              <TypeAnimation
                sequence={[
                  'School of Economics',
                  2000,
                  '',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl sm:text-2xl md:text-3xl text-rose-600 font-bold"
              />
            </span>
          </p>
          
          <p 
            className="mt-4 text-lg sm:text-xl text-stone-700 italic" 
            style={{ fontFamily: 'satoshi-medium' }}
          >
            Добро - тонкая нить большой надежды.
          </p>

          <Link 
            to="/projects"
            className="mt-6 inline-block text-rose-500 tracking-wide hover:underline underline-offset-4 decoration-2 transition-all text-sm sm:text-base"
            style={{ fontFamily: 'satoshi-bold' }}
          >
            Наши проекты →
          </Link>

        </motion.div>

        {/* RIGHT: Image Section */}
        <motion.div 
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profileImg}
            alt="International School of Economics"
            className="w-64 sm:w-72 md:w-80 h-auto object-cover md:ml-8"
          />
        </motion.div>
      </section>

      {/* ABOUT + HIGHLIGHTS */}
      <section className="bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 mt-10 mb-10">
        {/* Подробнее */}
        <motion.div 
          className="max-w-3xl sm:max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-stone-800 mb-6 text-center" style={{fontFamily: 'satoshi-bold'}}>
            Подробнее
          </h2>

          <p className="text-zinc-600 text-sm sm:text-base md:text-lg mb-4 leading-relaxed md:leading-loose" style={{fontFamily: 'satoshi-medium'}}>
            Для нас благотворительность — это не разовая акция и не реакция на отдельные просьбы. 
            Это осознанный и постоянный выбор не проходить мимо. Наш проект родился из реальной жизненной истории, которая показала: даже одно доброе действие способно изменить судьбу семьи — а значит, и наш собственный взгляд на мир.
          </p>

          <p className="text-zinc-600 text-sm sm:text-base md:text-lg mb-4 leading-relaxed md:leading-loose" style={{fontFamily: 'satoshi-medium'}}>
            Мы поняли, что помощь должна быть не случайной, а системной. Поэтому мы создали концепцию, где добро совершается регулярно — каждый месяц, в разных направлениях и для разных людей. 
          </p>

          <p className="text-zinc-600 text-sm sm:text-base md:text-lg mb-4 leading-relaxed md:leading-loose" style={{fontFamily: 'satoshi-medium'}}>
            Наш подход основан на трёх ценностях:
          </p>

          <ul className="list-disc list-inside text-zinc-600 mb-4 space-y-2 text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose" style={{fontFamily: 'satoshi-medium'}}>
            <li><strong>Последовательность</strong> — помощь не прекращается с окончанием акции.</li>
            <li><strong>Адресность</strong> — мы изучаем каждую ситуацию и оказываем поддержку там, где она действительно необходима.</li>
            <li><strong>Человечность</strong> — мы видим не проблему, а человека и его историю.</li>
          </ul>

          <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose" style={{fontFamily: 'satoshi-medium'}}>
            Именно эта философия позволила нам создать проект, который длится не один день, а становится частью жизни — нашей и тех, кому мы помогаем.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[ 
            { icon: <FaLaptopCode size={70} />, title: 'Ответственность', desc: 'Мы берем на себя обязательства и доводим проекты до результата.' },
            { icon: <MdStyle size={70} />, title: 'Участие', desc: 'Мы лично вовлечены — мы не перепоручаем добро кому-то другому.' },
            { icon: <TbComponents size={70} />, title: 'Влияние', desc: 'Наши действия создают реальные изменения — заметные и измеримые.' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-orange-50 border-2 border-stone-900 p-6 rounded-xl shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-black mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-base sm:text-lg" style={{fontFamily: 'satoshi-bold'}}>{item.title}</h3>
              <p className="text-zinc-600 mt-2 text-xs sm:text-sm md:text-base" style={{fontFamily: 'satoshi-medium'}}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default LandingPage
