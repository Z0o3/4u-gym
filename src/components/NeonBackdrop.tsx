type FigureKind =
    | "ring"
    | "triangle"
    | "cross"
    | "bolt"
    | "diamond"
    | "wave"
    | "chevron";

type NeonFigure = {
    kind: FigureKind;
    top: string;
    left: string;
    size: number;
    color: string;
    motion: "a" | "b" | "c";
    delay: string;
    rotation: number;
};

const figures: NeonFigure[] = [
    { kind: "cross", top: "1.5%", left: "4%", size: 82, color: "#c84dff", motion: "a", delay: "-2s", rotation: -8 },
    { kind: "bolt", top: "5%", left: "88%", size: 112, color: "#b8ff18", motion: "b", delay: "-7s", rotation: 12 },
    { kind: "triangle", top: "9%", left: "73%", size: 92, color: "#16ff6a", motion: "c", delay: "-4s", rotation: 18 },
    { kind: "ring", top: "13%", left: "7%", size: 106, color: "#16ff6a", motion: "b", delay: "-10s", rotation: 0 },
    { kind: "wave", top: "18%", left: "83%", size: 142, color: "#cf54ff", motion: "a", delay: "-5s", rotation: -16 },
    { kind: "diamond", top: "22%", left: "2%", size: 78, color: "#b8ff18", motion: "c", delay: "-9s", rotation: 10 },
    { kind: "chevron", top: "26%", left: "64%", size: 108, color: "#16ff6a", motion: "a", delay: "-12s", rotation: -4 },
    { kind: "cross", top: "31%", left: "91%", size: 72, color: "#16ff6a", motion: "b", delay: "-3s", rotation: 15 },
    { kind: "triangle", top: "35%", left: "8%", size: 118, color: "#ce55ff", motion: "c", delay: "-11s", rotation: -12 },
    { kind: "ring", top: "39%", left: "76%", size: 90, color: "#b8ff18", motion: "a", delay: "-6s", rotation: 0 },
    { kind: "bolt", top: "44%", left: "1%", size: 124, color: "#16ff6a", motion: "b", delay: "-14s", rotation: -10 },
    { kind: "wave", top: "48%", left: "68%", size: 154, color: "#16ff6a", motion: "c", delay: "-7s", rotation: 12 },
    { kind: "diamond", top: "52%", left: "89%", size: 88, color: "#d05aff", motion: "a", delay: "-13s", rotation: -7 },
    { kind: "cross", top: "57%", left: "11%", size: 94, color: "#b8ff18", motion: "b", delay: "-8s", rotation: 8 },
    { kind: "chevron", top: "61%", left: "79%", size: 116, color: "#16ff6a", motion: "c", delay: "-15s", rotation: 14 },
    { kind: "ring", top: "66%", left: "3%", size: 102, color: "#16ff6a", motion: "a", delay: "-4s", rotation: 0 },
    { kind: "triangle", top: "70%", left: "58%", size: 96, color: "#ca50ff", motion: "b", delay: "-12s", rotation: -18 },
    { kind: "bolt", top: "74%", left: "91%", size: 110, color: "#b8ff18", motion: "c", delay: "-6s", rotation: 6 },
    { kind: "wave", top: "79%", left: "7%", size: 148, color: "#16ff6a", motion: "a", delay: "-16s", rotation: -9 },
    { kind: "diamond", top: "83%", left: "72%", size: 84, color: "#16ff6a", motion: "b", delay: "-5s", rotation: 16 },
    { kind: "cross", top: "88%", left: "88%", size: 76, color: "#cf54ff", motion: "c", delay: "-10s", rotation: -12 },
    { kind: "chevron", top: "92%", left: "14%", size: 108, color: "#b8ff18", motion: "a", delay: "-7s", rotation: 5 },
    { kind: "ring", top: "96%", left: "77%", size: 116, color: "#16ff6a", motion: "b", delay: "-14s", rotation: 0 },
];

function FigureGraphic({ kind }: { kind: FigureKind }) {
    switch (kind) {
        case "ring":
            return <circle cx="50" cy="50" r="34" />;
        case "triangle":
            return <polygon points="50,13 88,82 12,82" />;
        case "cross":
            return <path d="M25 25 75 75M75 25 25 75" />;
        case "bolt":
            return <polyline points="57,7 24,53 47,53 37,93 78,42 54,42 57,7" />;
        case "diamond":
            return <polygon points="50,10 90,50 50,90 10,50" />;
        case "wave":
            return <path d="M7 58c14-34 27-34 40 0s27 34 46 0" />;
        case "chevron":
            return <polyline points="12,30 50,67 88,30" />;
    }
}

export function NeonBackdrop() {
    return (
        <div className="neon-art" aria-hidden="true">
            <div className="neon-aura neon-aura-one" />
            <div className="neon-aura neon-aura-two" />
            <div className="neon-aura neon-aura-three" />
            <div className="neon-aura neon-aura-four" />
            <div className="neon-aura neon-aura-five" />

            {figures.map((figure, index) => (
                <span
                    className={`neon-figure neon-motion-${figure.motion}`}
                    key={`${figure.kind}-${index}`}
                    style={{
                        top: figure.top,
                        left: figure.left,
                        width: figure.size,
                        height: figure.size,
                        color: figure.color,
                        animationDelay: figure.delay,
                    }}
                >
          <svg
              viewBox="0 0 100 100"
              focusable="false"
              style={{ transform: `rotate(${figure.rotation}deg)` }}
          >
            <FigureGraphic kind={figure.kind} />
          </svg>
        </span>
            ))}
        </div>
    );
}

export function HeroNeonFigures() {
    const heroFigures: Array<Pick<NeonFigure, "kind" | "color" | "rotation"> & { className: string }> = [
        { kind: "cross", color: "#cf54ff", rotation: -8, className: "hero-neon-cross" },
        { kind: "bolt", color: "#b8ff18", rotation: 12, className: "hero-neon-bolt" },
        { kind: "ring", color: "#16ff6a", rotation: 0, className: "hero-neon-ring" },
        { kind: "triangle", color: "#cf54ff", rotation: -14, className: "hero-neon-triangle" },
        { kind: "wave", color: "#16ff6a", rotation: 7, className: "hero-neon-wave" },
    ];

    return (
        <div className="hero-neon-art" aria-hidden="true">
            {heroFigures.map((figure) => (
                <span
                    className={`hero-neon-figure ${figure.className}`}
                    key={figure.className}
                    style={{ color: figure.color }}
                >
          <svg
              viewBox="0 0 100 100"
              focusable="false"
              style={{ transform: `rotate(${figure.rotation}deg)` }}
          >
            <FigureGraphic kind={figure.kind} />
          </svg>
        </span>
            ))}
        </div>
    );
}