import Ladings from './pages/Ladings'
import styled from 'styled-components'

const Button  = styled.button`
  background: red;
  color: white;
  font-size: 1rem;
`
function App() {
  return (
    <div>
      <Button>Click</Button>
      <h1>JOB</h1>
      <Ladings/>
    </div>
  );
}

export default App;
