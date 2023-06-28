import { RouterProvider } from 'react-router-dom';
import 'aos/dist/aos.css';
import './scss/main.scss';

import { router } from './Routes';

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
