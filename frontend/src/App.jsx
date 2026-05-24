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