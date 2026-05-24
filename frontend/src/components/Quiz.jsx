import { useState } from 'react'

const questions = [
  {
    id: 1,
    question: "What color are your veins on your wrist?",
    options: [
      { text: "Blue or Purple", value: "cool" },
      { text: "Green", value: "warm" },
      { text: "Both / Can't tell", value: "neutral" },
    ]
  },
  {
    id: 2,
    question: "How does your skin react to sun?",
    options: [
      { text: "Burns easily, rarely tans", value: "cool" },
      { text: "Tans easily, rarely burns", value: "warm" },
      { text: "Sometimes burns then tans", value: "neutral" },
    ]
  },
  {
    id: 3,
    question: "Which metal jewelry looks better on you?",
    options: [
      { text: "Silver or White Gold", value: "cool" },
      { text: "Gold or Copper", value: "warm" },
      { text: "Both look equally good", value: "neutral" },
    ]
  },
  {
    id: 4,
    question: "Which colors make you look most fresh?",
    options: [
      { text: "Blues, purples, emerald green", value: "cool" },
      { text: "Oranges, yellows, warm reds", value: "warm" },
      { text: "Both work well on me", value: "neutral" },
    ]
  },
]

function Quiz({ onResult }) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])

  function handleAnswer(value) {
    const newAnswers = [...answers, value]

    if (current + 1 < questions.length) {
      setAnswers(newAnswers)
      setCurrent(current + 1)
    } else {
      const counts = { warm: 0, cool: 0, neutral: 0 }
      newAnswers.forEach(a => counts[a]++)
      const result = Object.keys(counts).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
      )
      onResult(result)
    }
  }

  return (
    <div style={{
      maxWidth: '600px',
      margin: '60px auto',
      padding: '40px',
      backgroundColor: '#f9f9f9',
      borderRadius: '16px',
      border: '1px solid #f2d4d4',
    }}>
      <p style={{ color: '#888', marginBottom: '8px' }}>
        Question {current + 1} of {questions.length}
      </p>

      <h2 style={{ color: '#1a1a1a', marginBottom: '32px' }}>
        {questions[current].question}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {questions[current].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.value)}
            style={{
              padding: '16px 20px',
              backgroundColor: 'white',
              border: '1px solid #f2d4d4',
              borderRadius: '10px',
              fontSize: '16px',
              cursor: 'pointer',
              textAlign: 'left',
              color: '#1a1a1a',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = '#c0392b'
              e.target.style.color = 'white'
              e.target.style.borderColor = '#c0392b'
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = 'white'
              e.target.style.color = '#1a1a1a'
              e.target.style.borderColor = '#f2d4d4'
            }}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Quiz