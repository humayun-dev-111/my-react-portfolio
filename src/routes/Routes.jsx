import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Root from './../layout/Root';
import About from '../pages/About/About';
import Skills from '../pages/Skills/Skills';
import Education from '../pages/Education/Education';
import Portfolio from '../pages/Portfolio/Portfolio';
import Contact from '../pages/Contact/Contact';

const Routes = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        errorElement : <ErrorPage/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : '/about',
                element : <About/>
            },
            {
                path : '/skills',
                element : <Skills/>
            },
            {
                path : '/education',
                element : <Education/>
            },
            {
                path : '/portfolio',
                element : <Portfolio/>
            },
            {
                path : '/contact',
                element : <Contact/>
            },
           
        ]
    }
])

export default Routes;