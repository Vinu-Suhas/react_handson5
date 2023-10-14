
import './App.css';

import {HOC} from './HOC/HOC'
import { HOCBlue } from './HOC/HOCBlue';
import { PureCompos } from './PureCompo/PureCompo';
function App() {
  return (
<>

<HOC/>
<HOCBlue value={HOC}/>
<PureCompos/>
</>
  );
}

export default App;
