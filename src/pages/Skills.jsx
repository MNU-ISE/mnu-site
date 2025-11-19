import React from "react";
import july0Img from "../assets/july.png";    // мужчина открывает дверь нового дома
import july1Img from "../assets/july1.png";  // аварийное состояние старого дома
import july2Img from "../assets/july2.png";  // все вместе улыбаются

const Story = () => {
  return (
    <>
      {/* Главная секция — История, ставшая основой года */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center text-3xl md:text-4xl text-stone-800 mb-12"
            style={{ fontFamily: "satoshi-black" }}
          >
            История, ставшая основой года
          </h2>

          {/* До / После / Вместе — три фото */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Было */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img src={july2Img} alt="Аварийное состояние дома" className="w-full h-80 object-cover" />
              </div>
              <p className="mt-4 text-rose-600 font-bold text-lg" style={{ fontFamily: "satoshi-bold" }}>
                Было
              </p>
              <p className="text-zinc-600">Плесень, протекающая крыша, подпорки вместо стен</p>
            </div>

            {/* Стало */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden ring-4 ring-rose-300">
                <img src={july1Img} alt="Семья открывает дверь нового дома" className="w-full h-80 object-cover" />
              </div>
              <p className="mt-4 text-emerald-600 font-bold text-lg" style={{ fontFamily: "satoshi-bold" }}>
                Стало
              </p>
              <p className="text-zinc-600">Новый безопасный дом, ключ в руках хозяина</p>
            </div>

            {/* Вместе */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img src={july0Img} alt="Команда и семья вместе" className="w-full h-80 object-cover" />
              </div>
              <p className="mt-4 text-amber-600 font-bold text-lg" style={{ fontFamily: "satoshi-bold" }}>
                Вместе
              </p>
              <p className="text-zinc-600">Радость, улыбки, вера в добро</p>
            </div>
          </div>

          {/* Текстовый блок */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-zinc-700 leading-relaxed"
            style={{ fontFamily: "satoshi-medium" }}
          >
            <p className="mb-6 text-lg">
              В июле мы оказали адресную поддержку семье из города Есиль, которая долгие годы жившей в доме, который рушился на глазах. Жильё затапливало после каждого дождя, стены держались на подпорках, в комнатах стояла сырость и плесень.
            </p>
            <p className="mb-6 text-lg">
              Семья — отец-инвалид (работает на двух работах), мама, двое школьников и бабушка-инвалид 1 группы. Несмотря на все усилия, дохода не хватало даже на еду, не говоря уже о ремонте или переезде.
            </p>
            <p className="mb-6 text-lg">
              Мы выехали на место, увидели ситуацию своими глазами и приняли решение: <strong>семья должна жить в безопасности</strong>. Вместе с анонимным спонсором мы полностью закрыли вопрос — нашли новое жильё, сделали ремонт, купили мебель, технику, мебель, одежду и всё необходимое.
            </p>
            <p className="text-xl text-stone-800 font-bold text-center mt-10">
              Сегодня дети растут в тепле и безопасности. Бабушка получает уход. Родители впервые за многие годы могут спать спокойно и строить планы на будущее.
            </p>
          </div>
        </div>
      </section>

      {/* Заключение и философия */}
      <section className="py-20 px-4 bg-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-center text-3xl md:text-4xl text-stone-800 mb-12"
            style={{ fontFamily: "satoshi-black" }}
          >
            Заключение
          </h2>

          <div
            className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center space-y-8 text-zinc-700 text-lg leading-relaxed"
            style={{ fontFamily: "satoshi-medium" }}
          >
            <p>
              Для нас благотворительность — это не разовая акция. Это осознанный выбор <strong>не проходить мимо</strong>.
            </p>
            <p>
              Одна история из Есиля показала: даже одно доброе дело может полностью изменить жизнь целой семьи — и навсегда изменить нас самих.
            </p>
            <p className="text-xl">
              Поэтому мы сделали добро <strong>системным</strong>: каждый месяц — новая история, новая помощь, новая надежда.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { num: "1", title: "Последовательность", desc: "Помощь не заканчивается с окончанием акции" },
                { num: "2", title: "Адресность", desc: "Изучаем каждую ситуацию и помогаем именно там, где нужно" },
                { num: "3", title: "Человечность", desc: "Видим не проблему, а человека и его историю" },
              ].map((item) => (
                <div key={item.num}>
                  <div className="text-6xl font-black text-rose-500 mb-2" style={{ fontFamily: "satoshi-black" }}>
                    {item.num}
                  </div>
                  <h4 className="text-2xl text-stone-800 mb-3" style={{ fontFamily: "satoshi-bold" }}>
                    {item.title}
                  </h4>
                  <p className="text-zinc-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-2xl text-stone-800 mt-12 font-bold">
              Это не просто проект.<br />
              Это образ жизни.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
