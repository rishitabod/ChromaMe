const jewelryData = {
  warm: {
    title: "Jewelry For Your Warm Undertone",
    subtitle: "Gold and earthy tones complement you best",
    items: [
      { name: "Gold Chain Necklace", type: "Necklace", metal: "Gold", stone: "Citrine" },
      { name: "Copper Bangle", type: "Bracelet", metal: "Copper", stone: "None" },
      { name: "Amber Drop Earrings", type: "Earrings", metal: "Gold", stone: "Amber" },
      { name: "Tiger Eye Ring", type: "Ring", metal: "Rose Gold", stone: "Tiger Eye" },
    ]
  },
  cool: {
    title: "Jewelry For Your Cool Undertone",
    subtitle: "Silver and jewel tones are your best friends",
    items: [
      { name: "Silver Chain Necklace", type: "Necklace", metal: "Silver", stone: "Sapphire" },
      { name: "White Gold Bangle", type: "Bracelet", metal: "White Gold", stone: "None" },
      { name: "Amethyst Drop Earrings", type: "Earrings", metal: "Silver", stone: "Amethyst" },
      { name: "Emerald Ring", type: "Ring", metal: "Silver", stone: "Emerald" },
    ]
  },
  neutral: {
    title: "Jewelry For Your Neutral Undertone",
    subtitle: "You can pull off both gold and silver beautifully",
    items: [
      { name: "Rose Gold Necklace", type: "Necklace", metal: "Rose Gold", stone: "Pearl" },
      { name: "Mixed Metal Bangle", type: "Bracelet", metal: "Gold + Silver", stone: "None" },
      { name: "Pearl Drop Earrings", type: "Earrings", metal: "Rose Gold", stone: "Pearl" },
      { name: "Moonstone Ring", type: "Ring", metal: "Rose Gold", stone: "Moonstone" },
    ]
  }
}

function JewelrySection({ skinTone }) {
  const jewelry = jewelryData[skinTone]

  return (
    <div style={{
      maxWidth: '700px',
      margin: '40px auto',
      padding: '40px',
      backgroundColor: '#f9f9f9',
      borderRadius: '16px',
      border: '1px solid #f2d4d4',
    }}>
      <h2 style={{ color: '#c0392b', marginBottom: '8px' }}>{jewelry.title}</h2>
      <p style={{ color: '#888', marginBottom: '32px' }}>{jewelry.subtitle}</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
      }}>
        {jewelry.items.map((item, index) => (
          <div key={index} style={{
            backgroundColor: 'white',
            border: '1px solid #f2d4d4',
            borderRadius: '12px',
            padding: '20px',
          }}>
            <p style={{
              fontSize: '11px',
              color: '#c0392b',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '8px'
            }}>
              {item.type}
            </p>
            <h3 style={{ color: '#1a1a1a', marginBottom: '12px', fontSize: '16px' }}>
              {item.name}
            </h3>
            <p style={{ color: '#888', fontSize: '13px' }}>Metal: {item.metal}</p>
            {item.stone !== 'None' && (
              <p style={{ color: '#888', fontSize: '13px' }}>Stone: {item.stone}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default JewelrySection