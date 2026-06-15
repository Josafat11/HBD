import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface DbdSkillCheckProps {
    onComplete: () => void;
}

export default function DbdSkillCheck({ onComplete }: DbdSkillCheckProps) {
    const [angle, setAngle] = useState(0);
    const [progress, setProgress] = useState(0);
    const [shake, setShake] = useState(false);

    const archives = [
        "LEON_S_K_PROFILE",
        "TOJI_F_PROFILE",
        "DANTE_ARCHIVE",
        "ALUCARD_RECORD"
    ];
    const successStart = 300;
    const successEnd = 340;

    const [message, setMessage] = useState(
        "AWAITING OPERATOR INPUT..."
    );

    const [flash, setFlash] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAngle(prev => (prev + 6) % 360);
        }, 16);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.code !== "Space") return;

            const success =
                angle >= successStart &&
                angle <= successEnd;

            if (success) {

                setFlash(true);
                setShake(true);

                setTimeout(() => {
                    setFlash(false);
                }, 250);

                setTimeout(() => {
                    setShake(false);
                }, 120);

                setProgress(prev => {
                    const newProgress = Math.min(prev + 25, 100);

                    if (newProgress >= 100) {
                        setMessage(
                            "BIRTHDAY PROTOCOL SUCCESSFULLY RESTORED"
                        );
                    } else {
                        setMessage(
                            "ARCHIVE SEGMENT RECOVERED"
                        );
                    }

                    return newProgress;
                });

            } else {

                setMessage(
                    "MEMORY CORRUPTION DETECTED"
                );

                setProgress(prev =>
                    Math.max(prev - 10, 0)
                );
            }
        };

        window.addEventListener("keydown", handleKey);

        return () => {
            window.removeEventListener("keydown", handleKey);
        };
    }, [angle]);

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "#070708",
                overflow: "hidden"
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
                    background: "rgba(0,0,0,.82)"
                }}
            />

            {/* Glow */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    boxShadow:
                        "inset 0 0 180px rgba(147,51,234,.35)"
                }}
            />

            <div
                style={{
                    position: "relative",
                    transform: shake
                        ? "translateX(4px)"
                        : "translateX(0px)",

                    transition: "0.08s",
                    zIndex: 10,
                    height: "100vh",
                    display: "grid",
                    gridTemplateColumns: "250px 1fr 250px",
                    gap: "20px",
                    padding: "30px",
                    color: "#cdcac2",
                    fontFamily: "'Share Tech Mono', monospace"
                }}
            >
                {/* IZQUIERDA */}
                <div
                    style={{
                        border: "1px solid rgba(168,85,247,.2)",
                        padding: "20px",
                        overflow: "hidden"
                    }}
                >
                    <div
                        style={{
                            color: "#b88cff",
                            marginBottom: "15px"
                        }}
                    >
                        SYSTEM LOGS
                    </div>

                    <div
                        style={{
                            fontSize: "12px",
                            lineHeight: "1.8"
                        }}
                    >
                        <p>[SCAN] Silent Hill memories detected</p>
                        <p>[SCAN] No Man's Sky coordinates recovered</p>
                        <p>[SCAN] Once Human anomaly catalogued</p>
                        <p>[SCAN] V Rising archive restored</p>

                        <p>[INTRUSION] LEON_S_K attempting connection</p>
                        <p>[INTRUSION] TOJI_F bypass successful</p>
                        <p>[INTRUSION] DANTE archive responding</p>
                        <p>[INTRUSION] ALUCARD signal detected</p>

                        <p>[WARNING] Excessive Ale references found</p>
                        <p>[WARNING] Excess beautiful woman</p>
                        <p>[WARNING] Feet that smell like cheese</p>
                        <p>[WARNING] Birthday protocol unstable</p>
                    </div>
                </div>

                {/* CENTRO */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <h2
                        style={{
                            color: "#b88cff",
                            marginBottom: "30px",
                            letterSpacing: "3px"
                        }}
                    >
                        EMERGENCY MEMORY RECOVERY
                    </h2>
                    <div
                        style={{
                            color: "#b88cff",
                            fontSize: "12px",
                            opacity: .7,
                            letterSpacing: "3px",
                            marginBottom: "25px"
                        }}
                    >
                        AUTHORIZED ACCESS REQUIRED
                    </div>

                    {/* CIRCULO */}
                    <div
                        style={{
                            position: "relative",
                            width: "300px",
                            height: "300px",
                            borderRadius: "50%",
                            border: "8px solid rgba(255,255,255,.15)"
                        }}
                    >
                        {/* Zona éxito */}
                        <div
                            style={{
                                position: "absolute",
                                inset: "-8px",
                                borderRadius: "50%",
                                background:
                                    "conic-gradient(transparent 0deg, transparent 300deg, #b88cff 300deg, #b88cff 340deg, transparent 340deg)"
                            }}
                        />

                        {/* Aguja */}
                        <div
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                width: "4px",
                                height: "130px",
                                background: flash ? "#ffffff" : "#cdcac2",
                                transformOrigin: "bottom center",
                                transform: `translate(-50%,-100%) rotate(${angle}deg)`
                            }}
                        />

                        {/* Centro */}
                        <div
                            style={{
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%,-50%)",
                                textAlign: "center"
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "11px",
                                    color: "#ffffff",
                                    letterSpacing: "3px",
                                    opacity: .7
                                }}
                            >
                                PRESS
                            </div>

                            <div
                                style={{
                                    fontSize: "24px",
                                    color: "#ffffff",
                                    letterSpacing: "4px"
                                }}
                            >
                                SPACE
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            marginTop: "30px",
                            color: flash ? "#b88cff" : "#cdcac2"
                        }}
                    >
                        {message}
                    </div>

                    {/* Barra */}
                    <div
                        style={{
                            width: "500px",
                            height: "22px",
                            marginTop: "40px",
                            border: "1px solid #b88cff"
                        }}
                    >
                        <motion.div
                            animate={{
                                width: `${progress}%`
                            }}
                            style={{
                                height: "100%",
                                background: "#b88cff"
                            }}
                        />
                    </div>

                    <div
                        style={{
                            marginTop: "10px",
                            color: "#b88cff"
                        }}
                    >
                        ALE_RECONSTRUCTION_PROGRESS : {progress}%
                    </div>

                    {progress >= 100 && (
                        <button
                            onClick={onComplete}
                            style={{
                                marginTop: "40px",
                                padding: "15px 35px",
                                border: "1px solid #b88cff",
                                background: "transparent",
                                color: "#b88cff",
                                cursor: "pointer",
                                letterSpacing: "2px"
                            }}
                        >
                            OPEN PERSONAL ARCHIVE
                        </button>
                    )}
                </div>

                {/* DERECHA */}
                <div
                    style={{
                        border: "1px solid rgba(168,85,247,.2)",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px"
                    }}
                >
                    {archives.map((archive, index) => {

                        const unlocked =
                            progress >= (index + 1) * 25;

                        return (
                            <div
                                key={archive}
                                style={{
                                    border:
                                        unlocked
                                            ? "1px solid rgba(184,140,255,.7)"
                                            : "1px solid rgba(168,85,247,.15)",

                                    background:
                                        unlocked
                                            ? "rgba(184,140,255,.08)"
                                            : "rgba(255,255,255,.03)",

                                    padding: "15px"
                                }}
                            >
                                <div
                                    style={{
                                        color:
                                            unlocked
                                                ? "#b88cff"
                                                : "#666",

                                        fontSize: "12px"
                                    }}
                                >
                                    {unlocked
                                        ? "[ UNLOCKED ]"
                                        : "[ LOCKED ]"}
                                </div>

                                <div
                                    style={{
                                        marginTop: "10px",
                                        fontSize: "13px"
                                    }}
                                >
                                    {archive}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}