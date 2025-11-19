import React from "react";
import decemberImg from "../assets/december.png";
import januaryImg from "../assets/january.jpg";
import februaryImg from "../assets/february.png";
import marchImg from "../assets/march.png";
import aprilImg from "../assets/april.png";
import mayImg from "../assets/May.png";
import juneImg from "../assets/june.png";
import augustImg from "../assets/august.png";
import septemberImg from "../assets/september.png";
import octoberImg from "../assets/october.png";
import novemberImg from "../assets/november.png";
import julyImg from "../assets/july.png";
import balalarImg from "../assets/balalar.png";



const Projects = () => {
  const projects = [
    {
      title: "Декабрь — Новогодняя сказка для детей SOS-деревни",
      description:
        "В декабре мы провели праздничный утренник для детей из SOS-деревни: устроили конкурсы, игры, танцы, пригласили Деда Мороза и сказочных персонажей, дарили подарки и создали атмосферу настоящего новогоднего чуда.",
      image: decemberImg,
      link: "https://rchll-16.github.io/Flower-Shop/",
      tech: ["Дети"],
    },
    {
      title: "Январь — Забота о тех, кто делает город чище",
      description:
        "Угощали горячим чаем и домашней выпечкой уличных работников, которые каждое утро очищают город от снега. Маленький жест — большая благодарность.",
      image: januaryImg,
      link: "https://github.com/rchll-16/e-commerce",
      tech: ["Рабочие"],
    },
    {
      title: "Февраль — Помощь собачьему приюту",
      description:
        "Передали мясо, корм и необходимые продукты волонтёрам, которые ежедневно спасают бездомных животных от голода и холода.",
      image: februaryImg,
      link: "https://rchll-16.github.io/clothingwebsite/main.html",
      tech: ["Животные"],
    },
    {
      title: "Март — Добрые дела в месяц Рамадан",
      description:
        "Раздавали воду и финики людям, которые не успевали на ифтар. Поддержали тех, кто постился и торопился домой после работы.",
      image: marchImg,
      link: "https://rchll-16.github.io/school-aaa/",
      tech: ["Постящиеся"],
    },
    {
      title: "Апрель — Новый старт для мамы из «Дома мам»",
      description:
        "Организовали мастер-класс и обучили профессии бровиста женщину в сложной жизненной ситуации. Помогли ей сделать первый шаг к самостоятельности.",
      image: aprilImg,
      link: "https://rchll-16.github.io/school-uep/",
      tech: ["Мамы"],
    },
    {
      title: "Май — Забота о ветеранах",
      description:
        "В честь 80-летия Победы вручали продуктовые наборы 3 ветеранам ВОВ, выражая им уважение и благодарность.",
      image: mayImg,
      link: "https://rchll-16.github.io/intramuros-website/",
      tech: ["Ветераны"],
    },
    {
      title: "Июнь — Помощь онкобольнице UMC",
      description:
        "Передали в онкоотделение подгузники и расходники для малышей.",
      image: balalarImg,
      link: "https://rchll-16.github.io/science-lesson/main.html",
      tech: ["Малыши"],
    },
    {
      title: "Июль - Новый дом для семьи из районного центра",
      description:
        "Мы переселили семью с детьми и людьми с инвалидностью из аварийного жилья в безопасный дом и обеспечили их всем необходимым для жизни в тепле, заботе и уверенности.",
      image: julyImg,
      link: "https://rchll-16.github.io/bini-redesign/main.html",
      tech: ["Семья"],
    },
    {
      title: "Август — Дорога в школу",
      description:
        "Собрали рюкзаки и канцелярию для 5 детей из малообеспеченной многодетной семьи в посёлке, где мама является единственным кормильцем, чтобы новый учебный год начался для них с уверенности и радости.",
      image: augustImg,
      link: "https://rchll-16.github.io/bini-redesign/main.html",
      tech: ["Школьники"],
    },
    {
      title: "Сентябрь — Медицинская помощь нуждающимся семьям",
      description:
        "Закупили необходимые медикаменты для 6 семей, где мамы-одиночки не имеют возможности оплатить лечение.",
      image: septemberImg,
      link: "https://rchll-16.github.io/september-project/",
      tech: ["Лечение"],
    },
    {
      title: "Октябрь — Посадка деревьев",
      description:
        "Высадили 100 саженцев как символ заботы об экологии, жизни и благодарности. Маленькое действие — большой вклад в зелёное будущее и сохранение природы.",
      image: octoberImg,
      link: "https://rchll-16.github.io/october-project/",
      tech: ["Экология"],
    },
    {
      title: "Ноябрь — Тёплая семья",
      description:
        "Передали тёплые вещи семьям, которым особенно нужна поддержка в холодный сезон: куртки, обувь, шапки, кофты, спортивные костюмы и другие необходимые зимние вещи.",
      image: novemberImg,
      link: "https://rchll-16.github.io/november-project/",
      tech: ["Зима"],
    },
  ];

  return (
    <section className="py-16 px-4 bg-orange-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl text-stone-800 mb-6"
          style={{ fontFamily: "satoshi-black" }}
        >
          Наши Проекты
        </h2>

        <p
          className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base"
          style={{ fontFamily: "satoshi-medium" }}
        >
          Предлагаем вам ознакомиться с проектами, реализованными в этом году, и увидеть, как добрые инициативы могут приносить реальные результаты.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3
                  className="text-xl font-semibold text-stone-800 mb-2"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-zinc-600 text-sm mb-4"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-rose-200 text-rose-800 px-2 py-1 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Кнопка "View Project" удалена */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
