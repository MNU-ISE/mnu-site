import React from "react";
import myImg from '../assets/pfp.jpg';

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-white lg:px-20">
      
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center gap-10 lg:gap-16">
        
        {/* Левая часть — фото */}
        <div className="flex-shrink-0">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[30rem] md:h-[30rem]">
            <img
              src={myImg}
              alt="Международная Школа Экономики"
              className="absolute inset-0 w-full h-full object-cover rounded-full border-8 border-stone-900 shadow-2xl p-3"
              loading="eager"
            />
          </div>
        </div>

        {/* Правая часть — текст */}
        <div className="flex-1 text-center md:text-left">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-stone-800"
            style={{ fontFamily: 'satoshi-black' }}
          >
            Кто мы?
          </h2>

          <p 
            className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-6" 
            style={{ fontFamily: 'satoshi-medium' }}
          >
            Мы — <span className="font-bold text-stone-800">Международная Школа Экономики</span>, 
            также известная как Элит, уделяем особое внимание социальной ответственности и благотворительности. 
            Социальные проекты — важная часть ежегодной традиции, которая формирует культуру поддержки и неравнодушия среди студентов.
          </p>

          <p 
            className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-8" 
            style={{ fontFamily: 'satoshi-medium' }}
          >
            Благотворительность для нас — не формальность и не разовая акция. Это возможность показать, что даже небольшие действия способны изменить чью-то жизнь. 
            Каждый год сфера нашей помощи расширяется, и мы стараемся делать её более системной, адресной и значимой.
          </p>

          {/* Карточки снизу */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Поддержка", desc: "Мы направляем помощь тем, кому она реально нужна." },
              { title: "Ответственность", desc: "Мы учимся не только для себя, а чтобы менять мир вокруг." },
              { title: "Развитие", desc: "Каждый проект делает нас сильнее как людей." }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 
                  className="text-xl font-bold text-stone-800 mb-2" 
                  style={{ fontFamily: 'satoshi-bold' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-zinc-600 text-sm sm:text-base" 
                  style={{ fontFamily: 'satoshi-medium' }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
