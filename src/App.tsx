import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <>
        <div className="flex flex-col lg:flex-row">
          {/* <!-- Sidebar --> */}
          <Sidebar />

          <div className="w-full lg:w-3/4">
            {/* <!-- Navbar --> */}
            <Navbar />


            {/* <!-- Content --> */}
            {/* <!-- Your content here --> */}
            <div className="p-4 lg:p-8">

              < AppRoutes />

            </div>


          </div>
        </div>


      </>
    </Router>
  )
}

export default App
