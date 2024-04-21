import React,  { useState }  from 'react'
//import { useAppSelector} from '../../redux/store';
import { Navigate, useLocation } from 'react-router-dom';



type LayoutProps = {
    children: React.ReactNode;
  }
  
const SupplierRoute = ({children}:LayoutProps) => {

    const [isAuth] = useState(false)
   // const {isAuth} = useAppSelector((state) => state.auth)
    const location = useLocation()

    return (
        <>
        {
            !isAuth ?
            <Navigate to="/"
                replace
                state={{ path: location.pathname }}
            />
            :
            children
            }
        </>
      );
}
 
export default SupplierRoute;