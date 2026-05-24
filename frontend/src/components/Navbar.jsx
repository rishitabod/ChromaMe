function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #f2d4d4',
    }}>
      <div>
        <h1 style={{ color: '#c0392b', margin: 0 }}>ChromaMe</h1>
        <p style={{ color: '#888', margin: 0, fontSize: '12px' }}>
          Discover Your Perfect Palette
        </p>
      </div>
    </nav>
  )
}

export default Navbar