import { Image } from "@nextui-org/react";

export default function HeroSection() {
  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row justify-between items-center px-8 gap-4">
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">¿Neta qué les <br /> cuesta?</h1>
        <h1 className="text-lg md:text-xl lg:text-2xl text-secondary-400">Cambiar la rutina y vivir mejor depende de ti.</h1>
        <p className="text-sm md:text-base lg:text-lg">
          La pagina no solamente va dirigido a un tema ambiental o de reciclaje como proyecto. <br />
          Si no tambien a la prevencion sobre el uso de sustancias psicoactivas tomando encuestas, videos y recomendaciones.
        </p>
      </div>
      <div id="image" className="hidden md:block w-full md:w-3/6">
        <Image
          src="/HeroImage.jpg"
          alt="Picture of the author"
        />
      </div>
    </div>
  )
} 
