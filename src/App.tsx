import { useEffect, useRef, useState } from "react";
import BootScreen from './components/BootScreen';
import MainGreeting from './components/MainGreeting';
import DbdSkillCheck from './components/DbdSkillCheck';
import MemoryGrid from './components/MemoryGrid';

// Definimos los estados posibles del flujo de la página
type Section = 'boot' | 'main' | 'challenge' | 'grid';

export default function App() {
const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentSection, setCurrentSection] = useState<Section>('boot');
  useEffect(() => {
    const audio = new Audio("/background-track.mp3");

    audio.loop = true;
    audio.volume = 0.35;

    audioRef.current = audio;

    audio.play().catch(() => {
      console.log("Autoplay blocked");
    });

    return () => {
      audio.pause();
    };
  }, []);


  return (
    <div className="relative min-h-screen bg-[#070708] text-slate-50 font-mono overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-300">

      {/* Ambiente de luces de fondo (Glow Gótico) */}
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-950/10 blur-[150px] pointer-events-none z-0" />

      {/* Manejo de secciones mediante renderizado condicional */}
      <div className="relative z-10">
        {currentSection === 'boot' && (
          <BootScreen onComplete={() => setCurrentSection('main')} />
        )}

        {currentSection === 'main' && (
          <MainGreeting onNext={() => setCurrentSection('challenge')} />
        )}

        {currentSection === 'challenge' && (
          <DbdSkillCheck
            onComplete={() => setCurrentSection('grid')}
          />
        )}

        {currentSection === 'grid' && (
          <MemoryGrid />
        )}
      </div>
    </div>
  );
}