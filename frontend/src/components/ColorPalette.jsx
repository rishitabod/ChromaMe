import useIsMobile from '../hooks/useIsMobile'

const paletteData = {
  warm: {
    title: "Warm Undertone",
    subtitle: "You glow in earthy, golden tones ",
    colors: [
      { name: "Terracotta", hex: "#c1440e" },
      { name: "Warm Camel", hex: "#c19a6b" },
      { name: "Mustard Yellow", hex: "#e3a857" },
      { name: "Olive Green", hex: "#708238" },
      { name: "Burnt Orange", hex: "#cc5500" },
      { name: "Warm Peach", hex: "#ffcba4" },
    ]
  },
  cool: {
    title: "Cool Undertone",
    subtitle: "You shine in jewel tones and icy shades ",
    colors: [
      { name: "Royal Blue", hex: "#4169e1" },
      { name: "Emerald", hex: "#50c878" },
      { name: "Lavender", hex: "#967bb6" },
      { name: "Rose Pink", hex: "#ff66b2" },
      { name: "Icy Blue", hex: "#99c5c4" },
      { name: "Deep Plum", hex: "#673147" },
    ]
  },
  neutral: {
    title: "Neutral Undertone",
    subtitle: "Lucky you — most colors work beautifully! ",
    colors: [
      { name: "Dusty Rose", hex: "#dcae96" },
      { name: "Sage Green", hex: "#87ae73" },
      { name: "Soft Teal", hex: "#4e9f9f" },
      { name: "Warm Mauve", hex: "#b07080" },
      { name: "Soft White", hex: "#f5f0eb" },
      { name: "Slate Blue", hex: "#6a7f9a" },
    ]
  }
}

function ColorPalette({ skinTone }) {
  const isMobile = useIsMobile()
  const palette = paletteData[skinTone]

  return (
    <div style={{
      maxWidth: '700px',
      margin: '40px auto',
      padding: '40px',
      backgroundColor: '#f9f9f9',
      borderRadius: '16px',
      border: '1px solid #f2d4d4',
    }}>
      <h2 style={{ color: '#c0392b', marginBottom: '8px' }}>{palette.title}</h2>
      <p style={{ color: '#888', marginBottom: '32px' }}>{palette.subtitle}</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
        gap: '16px',
      }}>
        {palette.colors.map((color, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <div style={{
              width: '100%',
              height: '80px',
              backgroundColor: color.hex,
              borderRadius: '12px',
              marginBottom: '8px',
              border: '1px solid #f2d4d4',
            }} />
            <p style={{ fontSize: '14px', color: '#1a1a1a', fontWeight: '500' }}>
              {color.name}
            </p>
            <p style={{ fontSize: '12px', color: '#888' }}>{color.hex}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorPalette