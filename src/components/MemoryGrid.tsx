import { useState } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

interface CardData {
    id: number;
    name: string;
    image: string;
    message: string;
}

export default function MemoryGrid() {
    const [showFinalMessage, setShowFinalMessage] = useState(false);
    const cards: CardData[] = [
        {
            id: 1,
            name: "LEON S. KENNEDY",
            image: "/leon.jpg",
            message: "Happy Birthday. Mission status: Keep being amazing."
        },
        {
            id: 2,
            name: "TOJI FUSHIGURO",
            image: "/toji.jpg",
            message: "The system confirms you're still unstoppable."
        },
        {
            id: 3,
            name: "DANTE",
            image: "/dante.png",
            message: "Party time. Jackpot."
        },
        {
            id: 4,
            name: "ALUCARD",
            image: "/alucard.jpg",
            message: "Immortality confirmed. Birthday protocol accepted."
        }
    ];

    const [unlocked, setUnlocked] = useState<number[]>([]);

    const unlockCard = (id: number) => {
        if (unlocked.includes(id)) return;

        const newUnlocked = [...unlocked, id];

        setUnlocked(newUnlocked);

        confetti({
            particleCount: 120,
            spread: 90,
            colors: ["#ffffff", "#b88cff", "#6d28d9"]
        });

        if (newUnlocked.length === 4) {
            setTimeout(() => {

                confetti({
                    particleCount: 300,
                    spread: 180,
                    origin: { y: 0.6 },
                    colors: ["#ffffff", "#b88cff", "#6d28d9"]
                });

                setShowFinalMessage(true);

            }, 800);
        }
    };

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                overflow: "hidden",
                background: "#070708"
            }}
        >
            {/* Fondo */}
            <img
                src="/yorha.png"
                alt=""
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
            />

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,.85)"
                }}
            />

            <div
                style={{
                    position: "absolute",
                    top: "-250px",
                    right: "-250px",
                    width: "700px",
                    height: "700px",
                    borderRadius: "50%",
                    background: "rgba(168,85,247,.15)",
                    filter: "blur(180px)"
                }}
            />

            {/* Layout principal */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    height: "100vh",
                    padding: "30px",
                    display: "grid",
                    gridTemplateColumns: "220px 1fr",
                    gap: "25px",
                    color: "#cdcac2",
                    fontFamily: "'Share Tech Mono', monospace"
                }}
            >
                {/* Panel Izquierdo */}
                <div
                    style={{
                        border: "1px solid rgba(168,85,247,.2)",
                        padding: "20px"
                    }}
                >
                    <h3
                        style={{
                            color: "#b88cff",
                            marginBottom: "20px"
                        }}
                    >
                        MEMORY LOGS
                    </h3>

                    <p>[PORTAL] NMS Coordinates Stable</p>
                    <p>[MESSAGE] TONOTA</p>
                    <p>[BLOOD_POOL] 100%</p>
                    <p>[P_PROTOCOL] ACTIVE</p>
                    <p>[UNIT_ALE] ONLINE</p>

                    <br />

                    <p style={{ opacity: 0.6 }}>
                        "A heart that's full up like a landfill..."
                    </p>
                </div>

                {/* Grid Husbandos */}
                <div>
                    <div
                        style={{
                            marginBottom: "20px",
                            borderBottom: "1px solid rgba(168,85,247,.2)",
                            paddingBottom: "15px"
                        }}
                    >
                        PROTOCOL_ALE: CELEBRATION_MODE
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "20px"
                        }}
                    >
                        {/* Tarjetas */}
                        {cards.map(card => {
                            const open = unlocked.includes(card.id);

                            return (
                                <motion.div
                                    key={card.id}
                                    whileHover={{ scale: 1.03 }}
                                    onClick={() => unlockCard(card.id)}
                                    style={{
                                        cursor: "pointer",
                                        border: "1px solid rgba(168,85,247,.3)",
                                        minHeight: "320px",
                                        overflow: "hidden",
                                        background: "rgba(255,255,255,.03)"
                                    }}
                                >
                                    {!open ? (
                                        <div style={{ padding: "25px" }}>
                                            <div style={{ color: "#b88cff" }}>
                                                [ ENCRYPTED ]
                                            </div>
                                            <h2>{card.name}</h2>
                                            <p>CLICK TO DECRYPT</p>
                                        </div>
                                    ) : (
                                        <>
                                            <img
                                                src={card.image}
                                                alt=""
                                                style={{
                                                    width: "100%",
                                                    height: "240px",
                                                    objectFit: "contain"
                                                }}
                                            />
                                            <div style={{ padding: "15px" }}>
                                                <div style={{ color: "#b88cff" }}>
                                                    HAPPY BIRTHDAY
                                                </div>
                                                <p>{card.message}</p>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Footer */}
                    <div
                        style={{
                            marginTop: "25px",
                            borderTop: "1px solid rgba(168,85,247,.2)",
                            paddingTop: "15px",
                            color: "#b88cff"
                        }}
                    >
                        ALL MEMORIES RECOVERED {unlocked.length}/4
                    </div>
                </div>
            </div>
            {showFinalMessage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 999,
                        background: "rgba(7,7,8,.92)",
                        backdropFilter: "blur(12px)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        color: "#cdcac2",
                        fontFamily: "'Share Tech Mono', monospace"
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}
                    >

                        <div
                            style={{
                                color: "#b88cff",
                                letterSpacing: "4px",
                                marginBottom: "20px",
                                fontSize: "14px"
                            }}
                        >
                            [ SYSTEM ]
                        </div>

                        <h1
                            style={{
                                fontSize: "58px",
                                fontWeight: 300,
                                margin: 0,
                                letterSpacing: "6px"
                            }}
                        >
                            ALL FILES RECOVERED
                        </h1>

                        <div
                            style={{
                                width: "300px",
                                height: "1px",
                                background: "rgba(184,140,255,.3)",
                                margin: "30px auto"
                            }}
                        />

                        <h2
                            style={{
                                color: "#b88cff",
                                fontSize: "28px",
                                fontWeight: 300,
                                letterSpacing: "4px"
                            }}
                        >
                            HAPPY BIRTHDAY
                        </h2>

                        <h1
                            style={{
                                marginTop: "15px",
                                fontSize: "72px",
                                fontWeight: 300,
                                color: "#ffffff"
                            }}
                        >
                            ALEJANDRA
                        </h1>

                        <p
                            style={{
                                marginTop: "30px",
                                maxWidth: "700px",
                                lineHeight: 1.8,
                                opacity: .85
                            }}
                        >
                            Every memory sector has been successfully restored.
                            Thank you for all the adventures, conversations,
                            games, laughter and moments shared across countless worlds.
                        </p>
                        <p
                            style={{
                                marginTop: "20px",
                                color: "#b88cff",
                                fontSize: "18px"
                            }}
                        >
                            Thanks for being part of my story.
                        </p>

                        <div
                            style={{
                                marginTop: "50px",
                                color: "#b88cff",
                                fontSize: "13px",
                                letterSpacing: "3px"
                            }}
                        >
                            YoRHa Celebration Protocol Completed
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </div>

    );
}