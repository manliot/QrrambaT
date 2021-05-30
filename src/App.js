import Routes from './routes/index.js'
import './App.css';
import {ContextProvider} from './context/StaticContext'
function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Routes />
      </div>
    </ContextProvider>
  )

}

export default App;
