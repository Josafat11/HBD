import { useState, useEffect, useRef } from "react";

interface BootScreenProps {
    onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
    const [logs, setLogs] = useState<string[]>([]);
    const [isReady, setIsReady] = useState(false);
    const [currentText, setCurrentText] = useState("");
    const logsContainerRef = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);
    const startSequence = () => {
   setStarted(true);

   const audio = new Audio("/background-track.mp3");

   audio.loop = true;
   audio.volume = 0.25;

   audio.play().catch(() => {});
};

    const bootLines = [
        "[SYSTEM_INIT] : Accessing encrypted memory sectors...",
        "[STATUS] : Connection established from distant coordinates.",

        "",

        "[LOADING] : Loading protocol: UNKNOWN _RECONSTRUCTION...",
        "[STATUS] : Archive integrity check complete.",

        "",

        "[MEMORY_SCAN] : Searching personal records...",
        "[MEMORY_SCAN] : Silent Hill fog signature detected.",
        "[MEMORY_SCAN] : Resident Evil archive recovered.",
        "[MEMORY_SCAN] : No Man's Sky coordinates locked.",
        "[MEMORY_SCAN] : Once Human anomaly catalogued.",
        "[MEMORY_SCAN] : V Rising blood archive restored.",

        "",

        "[DATA] : Emotional attachment patterns detected.",
        "[DATA] : Subject affinity -> Alucard.",
        "[DATA] : Subject affinity -> Dante.",
        "[DATA] : Subject affinity -> Toji Fushiguro.",
        "[DATA] : Subject affinity -> Leon S. Kennedy.",
        "[DATA] : Subject affinity -> ---------------.",

        "",

        "[AUDIO] : Radiohead frequency fragments located.",
        "[AUDIO] : Electronic resonance pattern confirmed.",

        "",

        "[WARNING] : Excessive admiration levels detected.",
        "[WARNING] : Unit Unknown appears repeatedly in archive.",

        "",

        "[ANALYSIS] : Subject profile reconstruction complete.",
        "[ANALYSIS] : Personality matrix verified.",

        "",

        "[DISCOVERY] : Hidden event detected.",
        "[DISCOVERY] : Birthday protocol identified.",

        "",

        "[SUCCESS] : Access granted.",
        "[SUCCESS] : Personal archive unlocked.",

        "",

        "> Awaiting operator confirmation..."
    ];

useEffect(() => {
    if (!started) return;
    let lineIndex = 0;
    let charIndex = 0;
let charInterval: ReturnType<typeof setInterval>;

    const typeLine = () => {
        if (lineIndex >= bootLines.length) {
            setIsReady(true);
            return;
        }

        const line = bootLines[lineIndex];
        charIndex = 0;

        charInterval = setInterval(() => {
            if (charIndex <= line.length) {
                setCurrentText(line.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(charInterval);
                
                // Pasamos la línea completa a logs
                setLogs(prev => [...prev, line]);
                // Reseteamos inmediatamente el texto animado
                setCurrentText(""); 
                
                lineIndex++;
                setTimeout(typeLine, 150);
            }
        }, 15);
    };

    typeLine();

    return () => {
        clearInterval(charInterval);
    };
}, [started]);
    useEffect(() => {
        if (logsContainerRef.current) {
            logsContainerRef.current.scrollTop =
                logsContainerRef.current.scrollHeight;
        }
    }, [logs, currentText]);

    const handleStart = () => {


        onComplete();
    };
if (!started) {
   return (
      <div
         style={{
            position: "fixed",
            inset: 0,
            background: "#070708",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#cdcac2",
            fontFamily: "'Share Tech Mono', monospace",
            cursor: "pointer"
         }}
         onClick={startSequence}
      >
         <div
            style={{
               fontSize: "14px",
               letterSpacing: "4px",
               opacity: .5,
               marginBottom: "30px"
            }}
         >
            YoRHa_OS_v0.30
         </div>

         <h1
            style={{
               fontWeight: 300,
               letterSpacing: "6px",
               fontSize: "28px"
            }}
         >
            UNKNOWN RECONSTRUCTION PROTOCOL
         </h1>

         <div
            style={{
               marginTop: "30px",
               color: "#b88cff",
               letterSpacing: "3px",
               animation: "pulse 2s infinite"
            }}
         >
            CLICK TO INITIALIZE SYSTEM
         </div>
      </div>
   );
}
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                overflow: "hidden",
                backgroundColor: "#070708"
            }}
        >
            {/* Fondo principal */}
            <img
                src="/yorha.png"
                alt="YoRHa Background"
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
            />

            {/* Oscurecedor */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,.72)"
                }}
            />

            {/* Glow superior derecho */}
            <div
                style={{
                    position: "absolute",
                    top: "-200px",
                    right: "-200px",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "rgba(145,90,255,.12)",
                    filter: "blur(150px)",
                    pointerEvents: "none"
                }}
            />

            {/* Glow inferior izquierdo */}
            <div
                style={{
                    position: "absolute",
                    bottom: "-200px",
                    left: "-200px",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "rgba(95,55,255,.10)",
                    filter: "blur(150px)",
                    pointerEvents: "none"
                }}
            />

            {/* Scanlines */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,.02) 50%, transparent 50%)",
                    backgroundSize: "100% 4px",
                    pointerEvents: "none",
                    opacity: 0.4
                }}
            />

            {/* Contenido */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    padding: "40px",
                    color: "#cdcac2",
                    fontFamily: "'Share Tech Mono', monospace"
                }}
            >
                {/* Encabezado */}
                <div
                    style={{
                        fontSize: "11px",
                        opacity: 0.6,
                        letterSpacing: "3px",
                        marginBottom: "12px"
                    }}
                >
                    CLASSIFIED MEMORY DATABASE
                </div>

                <div
                    style={{
                        borderBottom: "1px solid rgba(205,202,194,.25)",
                        paddingBottom: "18px",
                        marginBottom: "25px"
                    }}
                >
                    <h1
                        style={{
                            margin: 0,
                            fontSize: "32px",
                            fontWeight: 300,
                            letterSpacing: "3px"
                        }}
                    >
                        YoRHa Personal Archive Recovery
                    </h1>

                    <div
                        style={{
                            marginTop: "8px",
                            fontSize: "15px",
                            opacity: 0.75
                        }}
                    >
                        Unit Unknown Reconstruction Protocol
                    </div>

                    <div
                        style={{
                            marginTop: "10px",
                            fontSize: "12px",
                            opacity: 0.45
                        }}
                    >
                        YoRHa_OS_v0.30 | CLASSIFICATION: PRIVATE
                    </div>
                </div>

{/* Logs */}
<div
    ref={logsContainerRef}
    style={{
        flex: 1,
        overflowY: "auto"
    }}
>
    <div
        style={{
            maxWidth: "900px",
            lineHeight: "1.8",
            fontSize: "17px"
        }}
    >
        {/* Líneas ya completadas */}
        {logs.map((log, index) => (
            <p
                key={index}
                style={{
                    margin: "0 0 8px 0",
                    opacity: 0.95,
                    textShadow: "0 0 8px rgba(205,202,194,.15)"
                }}
            >
                {log}
            </p>
        ))}
        
        {/* Línea que se está escribiendo actualmente */}
        {currentText !== "" && (
            <p
                style={{
                    margin: "0 0 8px 0",
                    opacity: 0.95,
                    textShadow: "0 0 8px rgba(205,202,194,.15)"
                }}
            >
                {currentText}
                <span style={{ animation: "blink 1s infinite" }}>█</span>
            </p>
        )}

        {/* Cursor final de espera */}
        {!isReady && currentText === "" && (
            <span
                style={{
                    display: "inline-block",
                    width: "10px",
                    height: "18px",
                    backgroundColor: "#cdcac2",
                    marginTop: "5px"
                }}
            />
        )}
    </div>
</div>

                {/* Footer */}
                <div
                    style={{
                        minHeight: "110px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    {isReady && (
                        <button
                            onClick={handleStart}
                            style={{
                                padding: "14px 36px",
                                background: "#cdcac2",
                                color: "#070708",
                                border: "1px solid #cdcac2",
                                cursor: "pointer",
                                fontSize: "14px",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                fontFamily: "'Share Tech Mono', monospace",
                                transition: "all .3s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "#cdcac2";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#cdcac2";
                                e.currentTarget.style.color = "#070708";
                            }}
                        >
                            ACCESS PERSONAL ARCHIVE
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}