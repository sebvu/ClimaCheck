import Display from './components/Display.jsx'//every component made is imported in App.jsx
import Details from './components/Details.jsx'

function App() {

  return (
    <>
      <div className='flex'>
          <Display/>
          <Details/>
      </div>
    </>
  )
}

export default App
