
import Home from '../Pages/Home'
import Following from '../Pages/Following'; 

const publicRoutes  = [
    {path:'/', component: Home},
    {path:'/Following', component: Following},
]



const privateRoutes  = {
    
}

export {publicRoutes, privateRoutes}