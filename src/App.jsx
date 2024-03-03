
import { Content } from './components/Content'
import { Header } from './components/Header'
import styles from './css/App.module.css'


function App() {

  return (
    <div className={ styles.container }>
      <Header />
      <Content />
    </div>
  )
}

export default App
