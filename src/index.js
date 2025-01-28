import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <a href="mailto:contact@verdant.fund" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        Verdant
        <br />
        Proprietary Trading Firm
        <br />
        Contact
      </a>
      <div style={{ color: '#A9A9A9', position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>
        <a style={{ color: '#A9A9A9' }} href="https://pmnd.rs">
          site credit pmnd.rs
        </a>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
  </>
)
