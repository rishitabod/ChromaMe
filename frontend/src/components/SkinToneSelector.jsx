import useIsMobile from '../hooks/useIsMobile'
function SkinToneSelector({ onSelect }) {
  const isMobile = useIsMobile()
  const tones = [
    {
      value: 'warm',
      label: 'Warm',
      description: 'Golden, peachy, or yellow undertones',
      color: '#c19a6b'
    },
    {
      value: 'neutral',
      label: 'Neutral',
      description: 'Mix of warm and cool undertones',
      color: '#dcae96'
    },
    {
      value: 'cool',
      label: 'Cool',
      description: 'Pink, red, or bluish undertones',
      color: '#967bb6'
    },
  ]

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 20px 40px' }}>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: '20px' }}>
        — or select your tone directly —
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
        {tones.map((tone) => (
          <div
            key={tone.value}
            onClick={() => onSelect(tone.value)}
            style={{
              flexDirection: isMobile ? 'column' : 'row',
              padding: '24px 16px',
              backgroundColor: '#f9f9f9',
              border: '1px solid #f2d4d4',
              borderRadius: '16px',
              textAlign: 'center',
              cursor: 'pointer',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#c0392b'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#f2d4d4'}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: tone.color,
              margin: '0 auto 12px',
            }} />
            <h3 style={{ color: '#1a1a1a', marginBottom: '8px' }}>{tone.label}</h3>
            <p style={{ color: '#888', fontSize: '13px' }}>{tone.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkinToneSelector