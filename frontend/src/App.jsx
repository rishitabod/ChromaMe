import { useState } from 'react'
import Navbar from './components/Navbar'
import Quiz from './components/Quiz'
import ColorPalette from './components/ColorPalette'
import JewelrySection from './components/JewelrySection'
import SkinToneSelector from './components/SkinToneSelector'
import Footer from './components/Footer'

function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [skinTone, setSkinTone] = useState(null)

  function handleQuizResult(result) {
    setSkinTone(result)
    setShowQuiz(false)
  }

  return (
    <div>
      <Navbar />

      {!showQuiz && !skinTone && (
        <>
          <div style={{ textAlign: 'center', padding: '80px 20px 40px' }}>
            <h1 style={{ fontSize: '48px', color: '#1a1a1a', marginBottom: '8px' }}>
              Find Your
            </h1>
            <h1 style={{ fontSize: '48px', color: '#c0392b', marginBottom: '16px' }}>
              Perfect Colors.
            </h1>
            <p style={{ fontSize: '18px', color: '#888', marginBottom: '40px' }}>
              Discover the palette that makes you glow
            </p>
            <button
              onClick={() => setShowQuiz(true)}
              style={{
                padding: '14px 36px',
                backgroundColor: '#c0392b',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                fontSize: '16px',
                cursor: 'pointer',
                marginBottom: '60px'
              }}>
              Take the Quiz
            </button>
          </div>
          {/* What ChromaMe Does */}
<div style={{
  maxWidth: '900px',
  margin: '0 auto',
  padding: '60px 20px',
  textAlign: 'center',
}}>
  <h2 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '12px' }}>
    What ChromaMe Does
  </h2>
  <p style={{ color: '#888', marginBottom: '48px', fontSize: '16px' }}>
    Most people wear colors that fight their natural tone. ChromaMe fixes that.
  </p>

  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
    {[
      {
        title: "Analyzes Your Undertone",
        desc: "Through a science backed quiz we determine whether your skin has warm, cool or neutral undertones"
      },
      {
        title: "Builds Your Color Palette",
        desc: "Get a personalized set of colors that complement your natural tone and make you look your best"
      },
      {
        title: "Recommends Jewelry",
        desc: "Discover which metals and gemstones enhance your features based on your unique undertone"
      },
    ].map((card, i) => (
      <div key={i} style={{
        padding: '32px 24px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #f2d4d4',
        borderRadius: '16px',
        textAlign: 'left',
      }}>
        <h3 style={{ color: '#c0392b', marginBottom: '12px', fontSize: '18px' }}>
          {card.title}
        </h3>
        <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6' }}>
          {card.desc}
        </p>
      </div>
    ))}
  </div>
</div>

{/* How It Works */}
<div style={{
  backgroundColor: '#f9f9f9',
  borderTop: '1px solid #f2d4d4',
  borderBottom: '1px solid #f2d4d4',
  padding: '60px 20px',
  textAlign: 'center',
}}>
  <h2 style={{ fontSize: '32px', color: '#1a1a1a', marginBottom: '12px' }}>
    How It Works
  </h2>
  <p style={{ color: '#888', marginBottom: '48px', fontSize: '16px' }}>
    Three simple steps to your perfect palette
  </p>

  <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    maxWidth: '800px',
    margin: '0 auto',
  }}>
    {[
      { step: "01", title: "Take the Quiz", desc: "Answer 4 simple questions about your natural features" },
      { step: "02", title: "Get Your Results", desc: "We analyze your answers and determine your undertone" },
      { step: "03", title: "Discover Your Colors", desc: "Receive a full color palette and jewelry recommendations" },
    ].map((item, i) => (
      <div key={i} style={{ flex: 1, textAlign: 'center' }}>
        <p style={{
          fontSize: '40px',
          fontWeight: '700',
          color: '#c0392b',
          marginBottom: '12px',
          lineHeight: '1',
        }}>
          {item.step}
        </p>
        <h3 style={{ color: '#1a1a1a', marginBottom: '8px', fontSize: '16px' }}>
          {item.title}
        </h3>
        <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6' }}>
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</div>
          <SkinToneSelector onSelect={setSkinTone} />
        </>
      )}

      {showQuiz && <Quiz onResult={handleQuizResult} />}

      {skinTone && (
        <>
          <div style={{ textAlign: 'center', padding: '40px 20px 0px' }}>
            <p style={{ color: '#888', marginBottom: '8px' }}>Your skin tone is —</p>
            <h2 style={{ color: '#c0392b', textTransform: 'capitalize', marginBottom: '24px' }}>
              {skinTone}
            </h2>
            <button
              onClick={() => { setSkinTone(null); setShowQuiz(false) }}
              style={{
                padding: '10px 28px',
                backgroundColor: 'white',
                color: '#c0392b',
                border: '1px solid #c0392b',
                borderRadius: '30px',
                fontSize: '14px',
                cursor: 'pointer',
                marginBottom: '20px'
              }}>
              Retake Quiz
            </button>
          </div>
          <ColorPalette skinTone={skinTone} />
          <JewelrySection skinTone={skinTone} />
        </>
      )}
      <Footer />

    </div>
  )
}

export default App