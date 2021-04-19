import React, { lazy, Suspense} from "react";
import {Skeleton} from 'antd'
import {helper} from '../helper/common'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const Upcoming = lazy(()=> import('../page/upcoming/index'));
const SearchPage = lazy(()=> import('../page/search/index'));
const PopularPage= lazy(()=> import('../page/popular/index'));
const Login = lazy(()=> import('../page/login/index'));
const DetailPage = lazy(()=> import('../page/detail/index'));
const PrivateRouter = ({children, ...rest}) =>{
  const auth = helper.isAuthenticated();
  return (
    <Route
      {...rest}
      render = {({location})=> auth ? (children) : 
      (<Redirect to={{pathname : "/login", state: {from: location}} 
    }/>)
    }

    />
  )
}
const Logined = ({children, ...rest}) =>{
  const auth = helper.isAuthenticated();
  return (
    <Route
      {...rest}
      render = {({location})=> auth ? 
      (<Redirect to={{pathname : "/", state: {from: location}} 
    }/>) :
    (children) 
    }

    />
  )
}




const RouterMovie = () => {
    return(
        <Router>
          <Suspense fallback={<Skeleton active/>}>
             <Switch>
          <PrivateRouter path="/search">
            <SearchPage />
          </PrivateRouter>
          <PrivateRouter path="/popular">
            <PopularPage />
          </PrivateRouter>
          <Logined path="/login">
            <Login/>
          </Logined>
          <PrivateRouter path="/logout">
            <SearchPage />
          </PrivateRouter>
          <PrivateRouter path="/upcoming">
            <Upcoming />
          </PrivateRouter>
          <PrivateRouter path="/movie-detail/:slug~:id">
            <DetailPage />
          </PrivateRouter>
          <PrivateRouter path="/">
            <SearchPage />
          </PrivateRouter>
          
        </Switch>
        </Suspense>
        </Router>
    )
}
export default React.memo(RouterMovie)