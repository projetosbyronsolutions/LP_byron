import { Hero, Carousel } from "@/app/components";

export default function Home() {
  const services = [[
    {
      image: {
        path: "/img/servicos/computer.png",
        alt: "serviço sla",
      },
      mainText: "Web Design",
      subText: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Maecenas aliquet. Lorem ipsum.",
    },
    {
      image: {
        path: "/img/servicos/computer.png",
        alt: "serviço sla",
      },
      mainText: "Web Design",
      subText: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Maecenas aliquet. Lorem ipsum.",
    },
    {
      image: {
        path: "/img/servicos/computer.png",
        alt: "serviço sla",
      },
      mainText: "Web Design",
      subText: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Maecenas aliquet. Lorem ipsum.",
    }
  ],
  [
    {
      image: {
        path: "/img/servicos/computer.png",
        alt: "serviço sla",
      },
      mainText: "Web Design",
      subText: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Maecenas aliquet. Lorem ipsum.",
    },
    {
      image: {
        path: "/img/servicos/computer.png",
        alt: "serviço sla",
      },
      mainText: "Web Design",
      subText: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Maecenas aliquet. Lorem ipsum.",
    }
  ],

  ]

  return (
    <main>

      <div className="bg-blue-400 w-screen">
        <div className="pt-24 pb-40 px-10">
          <h2 className="text-blue-700 font-medium">SERVIÇOS</h2>
          <h1 className="text-blue-900 font-bold">O que podemos fazer po você.</h1>
          <Carousel
            services={services}
          />
        </div>

      </div>

    </main>
  );
}
