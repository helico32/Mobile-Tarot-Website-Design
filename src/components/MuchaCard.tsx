interface MuchaCardProps {
  cardId: number;
  cardName: string;
}

export function MuchaCard({ cardId, cardName }: MuchaCardProps) {
  // Color palette inspired by Mucha
  const getCardColors = (id: number) => {
    const palettes = [
      { bg: '#c9b89a', accent: '#8b7355', floral: '#e8d4b8' }, // Le Mat - beige/brown
      { bg: '#d4b896', accent: '#a67c52', floral: '#f4e4c8' }, // Le Bateleur - golden
      { bg: '#9fb8b3', accent: '#5a7f7a', floral: '#d4e8e5' }, // La Papesse - sage green
      { bg: '#e8b5a8', accent: '#c97b6d', floral: '#f4d1c8' }, // L'Impératrice - rose/peach
      { bg: '#b39a7f', accent: '#8b6f47', floral: '#d4c4a8' }, // L'Empereur - brown/tan
      { bg: '#a8b5c9', accent: '#6d7f9c', floral: '#d4dce8' }, // Le Pape - blue/gray
      { bg: '#d4a8b5', accent: '#9c6d7f', floral: '#e8d4dc' }, // L'Amoureux - mauve/rose
      { bg: '#b8a89c', accent: '#8b7f73', floral: '#dcd4c9' }, // Le Chariot - taupe
      { bg: '#9cb8a8', accent: '#6d8b7f', floral: '#cde8dc' }, // La Justice - mint
      { bg: '#c9b8a8', accent: '#9c8b7f', floral: '#e8dcd4' }, // L'Hermite - warm gray
      { bg: '#d4c896', accent: '#a69c6d', floral: '#e8e4c8' }, // La Roue - yellow/tan
      { bg: '#b5a8c9', accent: '#7f6d9c', floral: '#dcd4e8' }, // La Force - lavender
      { bg: '#a8c9b5', accent: '#6d9c8b', floral: '#d4e8dc' }, // Le Pendu - aqua/green
      { bg: '#8b7f73', accent: '#5a4f43', floral: '#b8a89c' }, // La Mort - dark brown
      { bg: '#c9d4a8', accent: '#9ca67f', floral: '#e8f4d4' }, // Tempérance - light green
      { bg: '#7f6d5a', accent: '#4f4333', floral: '#a68b73' }, // Le Diable - dark earth
      { bg: '#c97f6d', accent: '#9c4f3d', floral: '#e8b5a8' }, // La Maison Dieu - terracotta
      { bg: '#a8d4c9', accent: '#7fa69c', floral: '#d4f4e8' }, // L'Étoile - turquoise
      { bg: '#8b9cb8', accent: '#5a6d8b', floral: '#b8c9dc' }, // La Lune - night blue
      { bg: '#e8c896', accent: '#c9a670', floral: '#f4e4c8' }, // Le Soleil - golden yellow
      { bg: '#b8c9d4', accent: '#8b9ca6', floral: '#dce8f4' }, // Le Jugement - sky blue
      { bg: '#9cb8a8', accent: '#738b7f', floral: '#c9dcd4' }, // Le Monde - earth green
    ];
    return palettes[id] || palettes[0];
  };

  const colors = getCardColors(cardId);

  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        width: '200px',
        height: '340px',
        border: '4px solid #d4b896',
        boxShadow: '0 8px 24px rgba(212, 184, 150, 0.4), inset 0 0 20px rgba(212, 184, 150, 0.2)',
        background: '#f4ede4',
      }}
    >
      <svg
        width="200"
        height="340"
        viewBox="0 0 200 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id={`bg-${cardId}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.bg} stopOpacity="0.9" />
            <stop offset="100%" stopColor={colors.accent} stopOpacity="0.7" />
          </linearGradient>
          
          <linearGradient id={`gold-${cardId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8c896" />
            <stop offset="50%" stopColor="#d4b896" />
            <stop offset="100%" stopColor="#c9a870" />
          </linearGradient>

          <radialGradient id={`halo-${cardId}`}>
            <stop offset="0%" stopColor={colors.floral} stopOpacity="0.8" />
            <stop offset="100%" stopColor={colors.accent} stopOpacity="0.3" />
          </radialGradient>

          {/* Art Nouveau pattern */}
          <pattern id={`pattern-${cardId}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill={colors.accent} opacity="0.2" />
          </pattern>
        </defs>

        {/* Background */}
        <rect width="200" height="340" fill={`url(#bg-${cardId})`} />
        <rect width="200" height="340" fill={`url(#pattern-${cardId})`} />

        {/* Ornate Art Nouveau frame */}
        <g opacity="0.6">
          {/* Top arch */}
          <path
            d="M20 15 Q20 10 25 10 L175 10 Q180 10 180 15 L180 30 Q180 35 175 35 L25 35 Q20 35 20 30 Z"
            fill={`url(#gold-${cardId})`}
            opacity="0.4"
          />
          <path
            d="M30 15 Q100 5 170 15"
            stroke={`url(#gold-${cardId})`}
            strokeWidth="2"
            fill="none"
          />
          
          {/* Side decorations */}
          <path
            d="M15 40 Q12 45 15 50 L15 290 Q12 295 15 300"
            stroke={`url(#gold-${cardId})`}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M185 40 Q188 45 185 50 L185 290 Q188 295 185 300"
            stroke={`url(#gold-${cardId})`}
            strokeWidth="2"
            fill="none"
          />

          {/* Decorative corners */}
          <circle cx="25" cy="25" r="5" fill={`url(#gold-${cardId})`} opacity="0.5" />
          <circle cx="175" cy="25" r="5" fill={`url(#gold-${cardId})`} opacity="0.5" />
          <circle cx="25" cy="315" r="5" fill={`url(#gold-${cardId})`} opacity="0.5" />
          <circle cx="175" cy="315" r="5" fill={`url(#gold-${cardId})`} opacity="0.5" />
        </g>

        {/* Circular halo background */}
        <circle cx="100" cy="120" r="70" fill={`url(#halo-${cardId})`} opacity="0.6" />
        <circle cx="100" cy="120" r="70" stroke={`url(#gold-${cardId})`} strokeWidth="2" fill="none" opacity="0.5" />
        
        {/* Inner decorative circle */}
        <circle cx="100" cy="120" r="65" stroke={colors.accent} strokeWidth="1" fill="none" opacity="0.3" />

        {/* Card-specific illustration */}
        <g transform="translate(100, 120)">
          {getMuchaIllustration(cardId, colors)}
        </g>

        {/* Floral bottom decoration */}
        <g transform="translate(100, 260)">
          {getFloralDecoration(cardId, colors)}
        </g>

        {/* Card number at top */}
        <text
          x="100"
          y="58"
          textAnchor="middle"
          fill={colors.accent}
          fontSize="18"
          fontFamily="Cinzel, serif"
          fontWeight="600"
          opacity="0.9"
        >
          {cardId}
        </text>

        {/* Card name at bottom */}
        <text
          x="100"
          y="325"
          textAnchor="middle"
          fill={colors.accent}
          fontSize="14"
          fontFamily="Cinzel, serif"
          fontWeight="500"
          opacity="0.9"
        >
          {cardName.split(' ').map((word, i) => (
            <tspan key={i} x="100" dy={i === 0 ? 0 : 16}>
              {word.toUpperCase()}
            </tspan>
          ))}
        </text>
      </svg>
    </div>
  );
}

function getMuchaIllustration(cardId: number, colors: { bg: string; accent: string; floral: string }): JSX.Element {
  const skinTone = '#f4d1c8';
  const hairColor = '#8b6f47';
  const fabricLight = colors.floral;
  const fabricDark = colors.accent;

  switch (cardId) {
    case 0: // Le Mat - Young traveler with bundle
      return (
        <g>
          <ellipse cx="0" cy="10" rx="30" ry="45" fill={fabricLight} opacity="0.8" />
          <circle cx="0" cy="-25" r="18" fill={skinTone} opacity="0.9" />
          <path d="M-12 -30 Q-8 -38 0 -40 Q8 -38 12 -30" fill={hairColor} opacity="0.8" />
          <circle cx="18" cy="-10" r="10" fill={fabricDark} opacity="0.7" />
          <path d="M20 -5 L25 -8 L22 0" fill={colors.bg} opacity="0.6" />
        </g>
      );

    case 1: // Le Bateleur - Figure with objects
      return (
        <g>
          <ellipse cx="0" cy="15" rx="32" ry="40" fill={fabricLight} opacity="0.8" />
          <circle cx="0" cy="-25" r="18" fill={skinTone} opacity="0.9" />
          <path d="M-15 -28 Q-10 -35 0 -38 Q10 -35 15 -28" fill={hairColor} opacity="0.8" />
          <rect x="-25" y="10" width="50" height="8" fill={fabricDark} opacity="0.7" rx="2" />
          <circle cx="-15" cy="14" r="3" fill={colors.accent} />
          <circle cx="0" cy="14" r="3" fill={colors.accent} />
          <circle cx="15" cy="14" r="3" fill={colors.accent} />
        </g>
      );

    case 2: // La Papesse - Veiled wisdom keeper
      return (
        <g>
          <ellipse cx="0" cy="20" rx="35" ry="50" fill={fabricDark} opacity="0.7" />
          <circle cx="0" cy="-25" r="18" fill={skinTone} opacity="0.9" />
          <path d="M-18 -30 Q0 -45 18 -30" fill={fabricLight} opacity="0.8" />
          <rect x="-8" y="15" width="16" height="25" fill={colors.accent} opacity="0.6" rx="2" />
          <circle cx="0" cy="-40" r="5" fill={colors.bg} opacity="0.7" />
        </g>
      );

    case 3: // L'Impératrice - Crowned feminine figure with flowers
      return (
        <g>
          <ellipse cx="0" cy="20" rx="38" ry="50" fill={fabricLight} opacity="0.8" />
          <circle cx="0" cy="-25" r="18" fill={skinTone} opacity="0.9" />
          <path d="M-15 -32 Q-10 -40 -5 -38 L0 -42 L5 -38 Q10 -40 15 -32" fill={colors.accent} opacity="0.8" />
          <path d="M-12 -28 Q0 -25 12 -28" fill={hairColor} opacity="0.8" />
          <circle cx="-20" cy="25" r="8" fill={colors.floral} opacity="0.8" />
          <circle cx="20" cy="30" r="7" fill={colors.floral} opacity="0.8" />
          <circle cx="-22" cy="28" r="4" fill={colors.accent} opacity="0.6" />
        </g>
      );

    case 4: // L'Empereur - Bearded authority figure
      return (
        <g>
          <rect x="-35" y="-10" width="70" height="60" fill={fabricDark} opacity="0.7" rx="4" />
          <circle cx="0" cy="-25" r="18" fill={skinTone} opacity="0.9" />
          <path d="M-12 -15 Q-8 -10 0 -8 Q8 -10 12 -15" fill={hairColor} opacity="0.7" />
          <path d="M-15 -30 Q0 -35 15 -30" fill={hairColor} opacity="0.8" />
          <rect x="-20" y="5" width="40" height="6" fill={colors.accent} opacity="0.8" />
        </g>
      );

    case 5: // Le Pape - Spiritual teacher with blessing gesture
      return (
        <g>
          <ellipse cx="0" cy="15" rx="35" ry="50" fill={fabricLight} opacity="0.8" />
          <circle cx="0" cy="-25" r="18" fill={skinTone} opacity="0.9" />
          <path d="M-12 -35 L0 -45 L12 -35 Q0 -32 -12 -35" fill={colors.accent} opacity="0.7" />
          <path d="M-15 -28 Q0 -30 15 -28" fill={hairColor} opacity="0.7" />
          <path d="M-10 -15 L-10 -5 M-8 -10 L-12 -10" stroke={skinTone} strokeWidth="2" />
        </g>
      );

    case 6: // L'Amoureux - Two figures facing
      return (
        <g>
          <circle cx="-18" cy="-20" r="14" fill={skinTone} opacity="0.9" />
          <circle cx="18" cy="-20" r="14" fill={skinTone} opacity="0.9" />
          <ellipse cx="-18" cy="15" rx="16" ry="30" fill={fabricLight} opacity="0.8" />
          <ellipse cx="18" cy="15" rx="16" ry="30" fill={fabricDark} opacity="0.8" />
          <path d="M-10 -28 Q-8 -32 -6 -28" fill={hairColor} opacity="0.8" />
          <path d="M26 -28 Q24 -32 22 -28" fill={hairColor} opacity="0.8" />
          <path d="M-5 -45 L0 -50 L5 -45 Q0 -42 -5 -45" fill={colors.floral} opacity="0.7" />
        </g>
      );

    case 7: // Le Chariot - Figure with vehicle/architecture
      return (
        <g>
          <rect x="-38" y="5" width="76" height="35" fill={fabricDark} opacity="0.7" rx="3" />
          <circle cx="0" cy="-25" r="16" fill={skinTone} opacity="0.9" />
          <path d="M-18 -32 Q0 -38 18 -32" fill={colors.accent} opacity="0.8" />
          <circle cx="-25" cy="42" r="8" fill={colors.accent} opacity="0.7" />
          <circle cx="25" cy="42" r="8" fill={colors.accent} opacity="0.7" />
        </g>
      );

    case 8: // La Justice - Figure with scales
      return (
        <g>
          <ellipse cx="0" cy="15" rx="32" ry="48" fill={fabricLight} opacity="0.8" />
          <circle cx="0" cy="-25" r="18" fill={skinTone} opacity="0.9" />
          <path d="M-15 -35 L0 -42 L15 -35" fill={colors.accent} opacity="0.7" />
          <path d="M-14 -28 Q0 -30 14 -28" fill={hairColor} opacity="0.8" />
          <line x1="-25" y1="-8" x2="25" y2="-8" stroke={colors.accent} strokeWidth="3" />
          <rect x="-2" y="-15" width="4" height="10" fill={colors.accent} opacity="0.8" />
        </g>
      );

    case 9: // L'Hermite - Cloaked figure with lamp
      return (
        <g>
          <ellipse cx="0" cy="20" rx="30" ry="55" fill={fabricDark} opacity="0.8" />
          <circle cx="0" cy="-28" r="16" fill={skinTone} opacity="0.9" />
          <path d="M-12 -35 Q0 -32 12 -35" fill={hairColor} opacity="0.7" />
          <circle cx="22" cy="-25" r="7" fill={colors.floral} opacity="0.9" />
          <path d="M18 -28 L22 -32 L26 -28" stroke={colors.accent} strokeWidth="1.5" fill="none" />
          <line x1="22" y1="-18" x2="22" y2="10" stroke={fabricDark} strokeWidth="2.5" />
        </g>
      );

    case 10: // La Roue de Fortune - Wheel with symbols
      return (
        <g>
          <circle cx="0" cy="0" r="45" stroke={colors.accent} strokeWidth="3" fill="none" opacity="0.7" />
          <circle cx="0" cy="0" r="35" stroke={fabricDark} strokeWidth="2" fill="none" opacity="0.6" />
          <circle cx="0" cy="0" r="10" fill={colors.accent} opacity="0.8" />
          {[0, 90, 180, 270].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * 40;
            const y = Math.sin(rad) * 40;
            return <circle key={i} cx={x} cy={y} r="5" fill={colors.floral} opacity="0.8" />;
          })}
          <path d="M0 -35 L-5 -25 L5 -25 Z" fill={colors.accent} opacity="0.7" />
        </g>
      );

    case 11: // La Force - Figure taming lion/beast
      return (
        <g>
          <ellipse cx="0" cy="15" rx="32" ry="48" fill={fabricLight} opacity="0.8" />
          <circle cx="0" cy="-28" r="17" fill={skinTone} opacity="0.9" />
          <path d="M-14 -32 Q0 -35 14 -32" fill={hairColor} opacity="0.8" />
          <path d="M-10 -42 Q-5 -48 0 -46 Q5 -48 10 -42" stroke={colors.accent} strokeWidth="2" fill="none" />
          <ellipse cx="30" cy="20" rx="18" ry="22" fill={colors.accent} opacity="0.6" />
          <circle cx="32" cy="12" r="7" fill={skinTone} opacity="0.7" />
        </g>
      );

    case 12: // Le Pendu - Suspended figure
      return (
        <g>
          <line x1="-40" y1="-45" x2="40" y2="-45" stroke={fabricDark} strokeWidth="4" />
          <line x1="20" y1="-45" x2="20" y2="-25" stroke={fabricDark} strokeWidth="2.5" />
          <circle cx="20" cy="-15" r="14" fill={skinTone} opacity="0.9" />
          <path d="M12 -18 Q16 -22 20 -24 Q24 -22 28 -18" fill={hairColor} opacity="0.8" />
          <ellipse cx="20" cy="20" rx="20" ry="35" fill={fabricLight} opacity="0.8" />
          <circle cx="-5" cy="-42" r="5" fill={colors.floral} opacity="0.7" />
        </g>
      );

    case 13: // La Mort - Transformative skeletal figure
      return (
        <g>
          <ellipse cx="0" cy="15" rx="35" ry="55" fill={fabricDark} opacity="0.9" />
          <circle cx="0" cy="-25" r="18" fill={skinTone} opacity="0.5" />
          <rect x="-3" y="0" width="6" height="40" fill={fabricDark} opacity="0.8" />
          <circle cx="-22" cy="35" r="9" fill={colors.accent} opacity="0.6" />
          <circle cx="22" cy="35" r="9" fill={colors.accent} opacity="0.6" />
          <path d="M-15 -30 Q0 -28 15 -30" fill={fabricDark} opacity="0.7" />
        </g>
      );

    case 14: // Tempérance - Angel pouring between vessels
      return (
        <g>
          <ellipse cx="0" cy="15" rx="34" ry="50" fill={fabricLight} opacity="0.8" />
          <circle cx="0" cy="-28" r="17" fill={skinTone} opacity="0.9" />
          <path d="M-14 -32 Q0 -36 14 -32" fill={hairColor} opacity="0.8" />
          <path d="M-25 -35 Q-30 -30 -28 -25" stroke={colors.accent} strokeWidth="2" fill="none" />
          <path d="M25 -35 Q30 -30 28 -25" stroke={colors.accent} strokeWidth="2" fill="none" />
          <circle cx="-18" cy="-5" r="6" fill={colors.accent} opacity="0.7" />
          <circle cx="18" cy="20" r="6" fill={colors.accent} opacity="0.7" />
          <path d="M-14 0 Q0 10 14 20" stroke={colors.floral} strokeWidth="2.5" fill="none" opacity="0.8" />
        </g>
      );

    case 15: // Le Diable - Horned figure with captives
      return (
        <g>
          <ellipse cx="0" cy="10" rx="38" ry="55" fill={fabricDark} opacity="0.9" />
          <circle cx="0" cy="-25" r="19" fill={skinTone} opacity="0.8" />
          <path d="M-18 -35 L-12 -45 L-8 -35" stroke={colors.accent} strokeWidth="2.5" fill="none" />
          <path d="M18 -35 L12 -45 L8 -35" stroke={colors.accent} strokeWidth="2.5" fill="none" />
          <circle cx="-22" cy="35" r="11" fill={fabricLight} opacity="0.6" />
          <circle cx="22" cy="35" r="11" fill={fabricLight} opacity="0.6" />
          <path d="M-15 -22 Q0 -20 15 -22" fill={hairColor} opacity="0.7" />
        </g>
      );

    case 16: // La Maison Dieu - Tower struck by lightning
      return (
        <g>
          <rect x="-28" y="-5" width="56" height="60" fill={fabricDark} opacity="0.8" rx="3" />
          <path d="M-32 -5 L0 -48 L32 -5" fill={colors.accent} opacity="0.7" />
          <path d="M-15 -50 L-20 -58 M0 -55 L0 -65 M15 -50 L20 -58" stroke={colors.floral} strokeWidth="2.5" />
          <circle cx="-18" cy="-25" r="5" fill={colors.floral} opacity="0.8" />
          <circle cx="18" cy="-25" r="5" fill={colors.floral} opacity="0.8" />
          <rect x="-10" y="10" width="20" height="25" fill={fabricLight} opacity="0.6" rx="2" />
        </g>
      );

    case 17: // L'Étoile - Figure pouring water under stars
      return (
        <g>
          <ellipse cx="0" cy="20" rx="32" ry="45" fill={fabricLight} opacity="0.8" />
          <circle cx="0" cy="-22" r="16" fill={skinTone} opacity="0.9" />
          <path d="M-12 -26 Q0 -28 12 -26" fill={hairColor} opacity="0.8" />
          <path d="M0 -48 L-4 -54 L0 -51 L4 -54 Z" fill={colors.floral} opacity="0.9" />
          {[-28, -20, 28, 20].map((x, i) => (
            <circle key={i} cx={x} cy={-40 + (i % 2) * 8} r="2.5" fill={colors.floral} opacity="0.8" />
          ))}
          <path d="M-18 30 Q-12 38 -6 45" stroke={colors.accent} strokeWidth="2" fill="none" opacity="0.7" />
          <path d="M18 30 Q12 38 6 45" stroke={colors.accent} strokeWidth="2" fill="none" opacity="0.7" />
        </g>
      );

    case 18: // La Lune - Moon with animals below
      return (
        <g>
          <circle cx="0" cy="-30" r="22" fill={colors.floral} opacity="0.8" />
          <path d="M8 -30 Q14 -30 18 -26 Q14 -34 8 -34 Q2 -34 -2 -30 Q2 -26 8 -30" fill={colors.accent} opacity="0.7" />
          <circle cx="-28" cy="25" r="14" fill={fabricDark} opacity="0.7" />
          <circle cx="28" cy="25" r="14" fill={fabricDark} opacity="0.7" />
          <path d="M-20 35 Q0 28 20 35" stroke={colors.accent} strokeWidth="2" fill="none" opacity="0.6" />
          <circle cx="-30" cy="22" r="5" fill={skinTone} opacity="0.6" />
          <circle cx="30" cy="22" r="5" fill={skinTone} opacity="0.6" />
        </g>
      );

    case 19: // Le Soleil - Radiant sun with figure
      return (
        <g>
          <circle cx="0" cy="-28" r="25" fill={colors.floral} opacity="0.9" />
          <circle cx="0" cy="-28" r="18" fill={colors.bg} opacity="0.8" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = Math.cos(angle) * 20;
            const y1 = Math.sin(angle) * 20 - 28;
            const x2 = Math.cos(angle) * 32;
            const y2 = Math.sin(angle) * 32 - 28;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={colors.floral} strokeWidth="2.5" />;
          })}
          <circle cx="0" cy="25" r="16" fill={skinTone} opacity="0.9" />
          <path d="M-10 20 Q0 18 10 20" fill={hairColor} opacity="0.8" />
          <ellipse cx="0" cy="42" rx="12" ry="8" fill={fabricLight} opacity="0.7" />
        </g>
      );

    case 20: // Le Jugement - Angel above rising figures
      return (
        <g>
          <circle cx="0" cy="-38" r="15" fill={skinTone} opacity="0.9" />
          <path d="M-18 -42 L0 -52 L18 -42" stroke={colors.accent} strokeWidth="2.5" fill={fabricLight} opacity="0.7" />
          <line x1="0" y1="-52" x2="0" y2="-58" stroke={colors.accent} strokeWidth="2" />
          <ellipse cx="-18" cy="25" rx="13" ry="28" fill={fabricLight} opacity="0.8" />
          <ellipse cx="18" cy="25" rx="13" ry="28" fill={fabricLight} opacity="0.8" />
          <circle cx="-18" cy="8" r="9" fill={skinTone} opacity="0.9" />
          <circle cx="18" cy="8" r="9" fill={skinTone} opacity="0.9" />
          <path d="M-22 4 Q-18 2 -14 4" fill={hairColor} opacity="0.7" />
          <path d="M14 4 Q18 2 22 4" fill={hairColor} opacity="0.7" />
        </g>
      );

    case 21: // Le Monde - Dancing figure in wreath
      return (
        <g>
          <ellipse cx="0" cy="5" rx="42" ry="58" stroke={colors.accent} strokeWidth="3" fill="none" opacity="0.7" />
          <ellipse cx="0" cy="5" rx="25" ry="45" fill={fabricLight} opacity="0.7" />
          <circle cx="0" cy="-18" r="15" fill={skinTone} opacity="0.9" />
          <path d="M-12 -22 Q0 -24 12 -22" fill={hairColor} opacity="0.8" />
          <ellipse cx="0" cy="15" rx="18" ry="30" fill={fabricLight} opacity="0.8" />
          {[[-38, -40], [38, -40], [-38, 45], [38, 45]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="7" fill={colors.floral} opacity="0.8" />
          ))}
          <path d="M-30 8 Q-35 5 -32 0" stroke={fabricDark} strokeWidth="2" fill="none" />
          <path d="M30 8 Q35 5 32 0" stroke={fabricDark} strokeWidth="2" fill="none" />
        </g>
      );

    default:
      return <circle cx="0" cy="0" r="35" fill={skinTone} opacity="0.7" />;
  }
}

function getFloralDecoration(cardId: number, colors: { bg: string; accent: string; floral: string }): JSX.Element {
  // Create unique floral patterns for each card
  const flowers = [
    // Iris-style
    <g key="iris">
      <path d="M-15 0 Q-18 -10 -15 -15 Q-12 -10 -10 0" fill={colors.floral} opacity="0.7" />
      <path d="M0 0 Q-3 -12 0 -18 Q3 -12 0 0" fill={colors.accent} opacity="0.6" />
      <path d="M15 0 Q12 -10 15 -15 Q18 -10 20 0" fill={colors.floral} opacity="0.7" />
      <line x1="-15" y1="0" x2="-15" y2="15" stroke={colors.accent} strokeWidth="2" />
      <line x1="0" y1="0" x2="0" y2="18" stroke={colors.accent} strokeWidth="2" />
      <line x1="15" y1="0" x2="15" y2="15" stroke={colors.accent} strokeWidth="2" />
    </g>,
    // Rose-style
    <g key="rose">
      <circle cx="-12" cy="-5" r="8" fill={colors.floral} opacity="0.7" />
      <circle cx="12" cy="-5" r="8" fill={colors.floral} opacity="0.7" />
      <circle cx="0" cy="-8" r="9" fill={colors.accent} opacity="0.6" />
      <path d="M-8 2 Q-10 8 -8 12" stroke={colors.accent} strokeWidth="1.5" fill="none" />
      <path d="M8 2 Q10 8 8 12" stroke={colors.accent} strokeWidth="1.5" fill="none" />
    </g>,
    // Lily-style
    <g key="lily">
      <path d="M-10 -5 Q-8 -15 0 -18 Q8 -15 10 -5 Q5 0 0 2 Q-5 0 -10 -5" fill={colors.floral} opacity="0.7" />
      <circle cx="0" cy="-12" r="3" fill={colors.accent} opacity="0.8" />
      <line x1="0" y1="2" x2="0" y2="18" stroke={colors.accent} strokeWidth="2" />
    </g>,
  ];

  return flowers[cardId % 3];
}
