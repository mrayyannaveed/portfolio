// "use client"
// import { Card, CardContent } from "@/components/ui/card"
// import ProjectsComponent from "./projectsComponent"
// // import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Autoplay from "embla-carousel-autoplay"
// import { delay } from "motion"

// const ProjectsCom = () => {
//     let projectsCom= [
//         {
//             heading: "Pak Wheels",
//             desc: "A website for a car rental company",
//             image: "/projects/pakwheels.JPG",
//             link: "https://my-pakwheels-app.vercel.app/"
//         },
//         {
//             heading: "Panacloud Company Porfolio",
//             desc: "A panacloud Website",
//             image: "/projects/panacloud.png",
//             link: "https://company-portfolio-indol.vercel.app/"
//         },
//         {
//             heading: "Static Resume Builder",
//             desc: "My personal static resume",
//             image: "/projects/resume.png",
//             link: "https://resume-builder-phi-red.vercel.app/"
//         },
//         {
//             heading: "Chairs E-commerce Website",
//             desc: "A e-commerce website for chairs",
//             image: "/projects/chairWeb.png",
//             link: "https://ui-ux-api-integration.vercel.app/"
//         },
//         {
//             heading: "Dynamic Editable Resume",
//             desc: "My Personal Dynamic resume you can also generate your resume with it.",
//             image: "/projects/dynamicEditableResume.png",
//             link: "https://unique-path-and-shareable-link-nu.vercel.app/"
//         },
//         {
//             heading: "Portfolio With Simple Css",
//             desc: "A personal porfolio using nextjs with vanilla css",
//             image: "/projects/cssPortfolio.png",
//             link: "https://portfolio-with-css-8.vercel.app/"
//         },
//         {
//             heading: "UI UX E-commerce Website",
//             desc: "A e-commerce website for clothes.",
//             image: "/projects/ui-ux-web.png",
//             link: "https://ui-ux-ecommerce-web.vercel.app/"
//         }
//     ]
//   return (
//     <div className='text-white'>
//         <section className='flex justify-around items-center flex-col h-[80vh] mb-10'>
//             <h1 className="ml-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white hover:text-lime-600 animate-bounce hover:uppercase text-center mt-20 mb-10">
//                 Projects
//             </h1>
//                 <Carousel
//                 plugins={[Autoplay({delay:2500,}),]}
//                 className="w-full max-w-5xl">
//                     <CarouselContent className="-ml-1">
//                         {/* {Array.from({ length: 5 }).map((_, index) => ( */}
//                         {projectsCom.map((project: any, index) => (
//                         <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
//                             <div className="p-1">
//                             {/* <Card className="flex justify-center items-center"> */}
//                                 {/* <CardContent className="flex aspect-square items-center justify-center p-6"> */}
//                                 {/* <span className="text-2xl font-semibold">{index + 1}</span> */}
//                                 <ProjectsComponent key={project.heading} head={project.heading} desc={project.desc} image={project.image} link={project.link} bg={project.bgcol} ani={project.ani}/>
//                                 {/* </CardContent> */}
//                             {/* </Card> */}
//                             </div>
//                         </CarouselItem>
//                         ))}
//                     </CarouselContent>
//                     <CarouselPrevious className="bg-white text-black rounded-full p-2 cursor-pointer">
//                     </CarouselPrevious>
//                     <CarouselNext className="bg-white text-black rounded-full p-2 cursor-pointer">
//                     </CarouselNext>
//                 </Carousel>
//         </section>
//     </div>
//   )
// }

// export default ProjectsCom

"use client"

import ProjectsComponent from "./projectsComponent"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const ProjectsCom = () => {
  const projectsCom = [
    {
      heading: "Pak Wheels",
      desc: "A website for a car rental company",
      image: "/projects/pakwheels.JPG",
      link: "https://my-pakwheels-app.vercel.app/",
    },
    {
      heading: "Panacloud Company Porfolio",
      desc: "A panacloud Website",
      image: "/projects/panacloud.png",
      link: "https://company-portfolio-indol.vercel.app/",
    },
    {
      heading: "Static Resume Builder",
      desc: "My personal static resume",
      image: "/projects/resume.png",
      link: "https://resume-builder-phi-red.vercel.app/",
    },
    {
      heading: "Chairs E-commerce Website",
      desc: "A e-commerce website for chairs",
      image: "/projects/chairWeb.png",
      link: "https://ui-ux-api-integration.vercel.app/",
    },
    {
      heading: "Dynamic Editable Resume",
      desc: "My Personal Dynamic resume you can also generate your resume with it.",
      image: "/projects/dynamicEditableResume.png",
      link: "https://unique-path-and-shareable-link-nu.vercel.app/",
    },
    {
      heading: "Portfolio With Simple Css",
      desc: "A personal porfolio using nextjs with vanilla css",
      image: "/projects/cssPortfolio.png",
      link: "https://portfolio-with-css-8.vercel.app/",
    },
    {
      heading: "UI UX E-commerce Website",
      desc: "A e-commerce website for clothes.",
      image: "/projects/ui-ux-web.png",
      link: "https://ui-ux-ecommerce-web.vercel.app/",
    },
    {
      heading: "Sports Blog Website",
      desc: "CricBlocks Your ultimate destination for sports news and expert analysis.",
      image: "/projects/sports-blog.png",
      link: "https://blogs-web-site-phi.vercel.app/",
    },
    {
      heading: "Web Developer Agent",
      desc: "This agent can fullfils your frontend and bankend queries.",
      image: "/projects/frontend_agent.png",
      link: "https://generative-and-agentic-ai-projects-production.up.railway.app/",
    },
    {
      heading: "Cooking Agent",
      desc: "This agent can suggest you a dish and provide any recipe you want.",
      image: "/projects/cooking_agent.png",
      link: "https://generative-and-agentic-ai-projects-production-1272.up.railway.app/",
    },
  ]

  return (
    <div className="text-white px-4 sm:px-6 lg:px-8 py-16 lg:w-[90vw] w-[80vw] mx-auto">
      <section className="flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif font-bold text-white hover:text-lime-600 text-center mb-10 transition-all duration-300 hover:uppercase">
          Projects
        </h1>

        <Carousel
          plugins={[Autoplay({ delay: 2500 })]}
          className="w-full max-w-7xl lg:max-w-6xl"
        >
          <CarouselContent>
            {projectsCom.map((project, index) => (
              <CarouselItem
                key={index}
                className="px-2 sm:basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="w-full h-full">
                  <ProjectsComponent
                    key={project.heading}
                    head={project.heading}
                    desc={project.desc}
                    image={project.image}
                    link={project.link}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-white text-black rounded-full p-2 shadow-md hover:scale-105 transition cursor-pointer" />
          <CarouselNext className="bg-white text-black rounded-full p-2 shadow-md hover:scale-105 transition cursor-pointer" />
        </Carousel>
      </section>
    </div>
  )
}

export default ProjectsCom
