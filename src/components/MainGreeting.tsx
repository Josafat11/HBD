import { motion } from "framer-motion";

interface MainGreetingProps {
    onNext: () => void;
}

export default function MainGreeting({ onNext }: MainGreetingProps) {

    const lockedFiles = [
        "ASHES_OF_SILENT_HILL.dat",
        "HUSBANDO_ARCHIVE.sys",
        "SKY_COORDINATES_NMS.log",
        "KRAT_P_PROTOCOL.bin"
    ];

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                overflow: "hidden",
                backgroundColor: "#070708"
            }}
        >
            {/* Fondo */}
            <img
                src="/yorha.png"
                alt="YoRHa"
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
                    background: "rgba(0,0,0,.82)"
                }}
            />

            {/* Glow derecho */}
            <div
                style={{
                    position: "absolute",
                    top: "-200px",
                    right: "-200px",
                    width: "600px",
                    height: "600px",
                    borderRadius: "20%",
                    background: "rgba(145,90,255,.12)",
                    filter: "blur(150px)"
                }}
            />

            {/* Glow izquierdo */}
            <div
                style={{
                    position: "absolute",
                    bottom: "-200px",
                    left: "-200px",
                    width: "600px",
                    height: "600px",
                    borderRadius: "20%",
                    background: "rgba(95,55,255,.10)",
                    filter: "blur(150px)"
                }}
            />

            {/* Scanlines */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,.015) 50%, transparent 50%)",
                    backgroundSize: "100% 4px",
                    opacity: .35,
                    pointerEvents: "none"
                }}
            />

            {/* CONTENIDO */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,

                    height: "100%",

                    boxSizing: "border-box",

                    padding: "40px",

                    display: "flex",
                    flexDirection: "column",

                    color: "#cdcac2",
                    fontFamily: "'Share Tech Mono', monospace"
                }}
            >
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .8 }}
                    style={{
                        borderBottom: "1px solid rgba(145,90,255,.25)",
                        paddingBottom: "20px",
                        marginBottom: "30px"
                    }}
                >
                    <div
                        style={{
                            fontSize: "11px",
                            letterSpacing: "3px",
                            color: "#b88cff",
                            opacity: .8
                        }}
                    >
                        RECOVERY_ARCHIVE // ACCESS_GRANTED
                    </div>

                    <h1
                        style={{
                            marginTop: "12px",
                            fontWeight: 300,
                            fontSize: "34px",
                            letterSpacing: "3px"
                        }}
                    >
                        PERSONAL ARCHIVE RECOVERED
                    </h1>

                    <div
                        style={{
                            marginTop: "10px",
                            opacity: .45,
                            fontSize: "12px"
                        }}
                    >
                        YoRHa Memory Reconstruction System
                    </div>
                </motion.div>

                {/* DOS COLUMNAS */}
                <div
                    style={{
                        flex: 1,
                        display: "grid",
                        gridTemplateColumns: "1.6fr .8fr",
                        gap: "25px",
                        minHeight: 0
                    }}
                >

                    {/* CARTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .8 }}
                        style={{
                            background: "rgba(12,12,14,.55)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(145,90,255,.15)",
                            padding: "30px",
                            overflowY: "scroll",
                            height: "100%",
                            boxSizing: "border-box"
                        }}
                    >
                        <div
                            style={{
                                color: "#b88cff",
                                fontSize: "12px",
                                marginBottom: "20px",
                                letterSpacing: "2px"
                            }}
                        >
                            [ LETTER SUCCESSFULLY RECOVERED ]
                        </div>

                        <div
                            style={{
                                lineHeight: 1.9,
                                fontSize: "15px"
                            }}
                        >
                            <p>Hola Ale.</p>

                            <p>
                                Después de analizar todos los registros
                                disponibles, el sistema llegó a una conclusión
                                bastante sencilla: eres una de las personas más
                                importantes que han aparecido en mis archivos
                                durante los últimos ciclos.
                            </p>

                            <p>
                                Entre partidas, conversaciones hasta el amanecer, exploraciones
                                en el espacio, exploraciones en el los mundos plagados de zombies,
                                entre neblina que me dio demasiado miedo, sobrevivientes perseguidos por asesinos con ventajas
                                exageradas u.u
                                y demasiados husbandos registrados
                                en la base de datos de mi coco, terminaste ocupando más
                                espacio en la memoria de mi sistema del que
                                probablemente deberías.
                            </p>

                            <p>
                                Así que hoy no quería limitarme a escribir un
                                simple feliz cumpleaños o cantarte una canción.
                            </p>

                            <p>
                                Quería construir algo para ti algo que pudieras apreciar
                                un regalo hecho a mano por mi para ti.
                            </p>

                            <p>
                                Algo que pudieras recorrer, desbloquear y
                                reir, porque de alguna forma eso representa
                                muchas de las cosas que compartimos:
                                videojuegos, historias, mundos extraños y
                                recuerdos acumulados, a lo mejor no es lo que esperabas
                                ni lo que yo hubiera deseado darte porque mereces más, pero te hago esta carta
                                hecha a mi manera para desearte que tengas un feliz cumpleaños y espero poder estar
                                en cada uno de tus cumpleaños para ver como la pequeña que conozco puede volver a sentir.
                            </p>

                            <p>
                                Espero que este nuevo ciclo venga acompañado de
                                muchas cosas buenas para ti.
                            </p>

                            <p>
                                Más aventuras.<br />
                                Más música.<br />
                                Más Silent Hill.<br />
                                Más NieR.<br />
                                Más videojuegos.<br />
                                Más viajes imposibles por el espacio.
                            </p>

                            <p>
                                Que cada dia de tu vida sea mejor al anterior y que sigas siendo
                                la mujer tan fuerte que conocida hasta ahora, que no dejes de luchar por encontrar lo que quieres y que nunca pierdas esa chispa de curiosidad y amor por las cosas que te apasionan.
                                que sepas que siempre estare para ti cuando me necesites y cuando tampoco lo hagas
                            </p>

                            <p>
                                Gracias por todas las conversaciones,
                                las partidas y los momentos compartidos,
                                te quiero.
                            </p>
                            <p>
                                PD: te deje un jueguito de 1 minuto
                            </p>

                            <p
                                style={{
                                    color: "#c89cff"
                                }}
                            >
                                Feliz cumpleaños.
                            </p>

                            <div
                                style={{
                                    marginTop: "30px",
                                    paddingTop: "20px",
                                    borderTop:
                                        "1px solid rgba(145,90,255,.12)"
                                }}
                            >
                                — ARCHIVE GENERATED BY: JOSE
                            </div>
                        </div>
                    </motion.div>

                    {/* PANEL DERECHO */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        style={{
                            background: "rgba(12,12,14,.45)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(145,90,255,.15)",
                            padding: "25px",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            overflowY: "auto"
                        }}
                    >
                        <div
                            style={{
                                color: "#b88cff",
                                fontSize: "12px",
                                letterSpacing: "2px",
                                marginBottom: "20px"
                            }}
                        >
                            ENCRYPTED SECTORS
                        </div>

                        {lockedFiles.map((file) => (
                            <div
                                key={file}
                                style={{
                                    border:
                                        "1px solid rgba(145,90,255,.15)",
                                    background:
                                        "rgba(0,0,0,.25)",
                                    padding: "15px",
                                    marginBottom: "12px",
                                    transition: ".3s"
                                }}
                            >
                                <div
                                    style={{
                                        color: "#b88cff",
                                        fontSize: "11px"
                                    }}
                                >
                                    [ LOCKED ]
                                </div>

                                <div
                                    style={{
                                        marginTop: "8px",
                                        fontSize: "13px",
                                        color: "#cdcac2"
                                    }}
                                >
                                    {file}
                                </div>
                            </div>
                        ))}

                        <div
                            style={{
                                marginTop: "auto",
                                paddingTop: "20px",
                                borderTop:
                                    "1px solid rgba(145,90,255,.15)",
                                fontSize: "12px",
                                opacity: .7
                            }}
                        >
                            ACCESS DENIED
                            <br />
                            Skill verification required.
                        </div>
                    </motion.div>
                </div>

                {/* BOTON */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "25px"
                    }}
                >
                    <button
                        onClick={onNext}
                        style={{
                            padding: "14px 36px",
                            background: "transparent",
                            color: "#b88cff",
                            border: "1px solid #b88cff",
                            cursor: "pointer",
                            fontSize: "14px",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            fontFamily:
                                "'Share Tech Mono', monospace",
                            transition: ".3s"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                                "#b88cff";
                            e.currentTarget.style.color =
                                "#070708";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                                "transparent";
                            e.currentTarget.style.color =
                                "#b88cff";
                        }}
                    >
                        OVERRIDE_SYSTEM_LOCKS
                    </button>
                </div>
            </div>
        </div>
    );
}