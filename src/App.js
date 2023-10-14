
import './App.css';

import {HOC} from './HOC/HOC'
import { HOCBlue } from './HOC/HOCBlue';
function App() {
  return (
<>

<HOC/>
<HOCBlue value={HOC}/>
</>
  );
}

export default App;
