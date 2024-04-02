import './App.css';
import { Route, Routes } from 'react-router-dom';
import AllProduct from './page/AllProduct';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import NavBar from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';


// 1. 전체 상품 페이지, 로그인, 상세 상품 페이지, Nav바 만들기
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 눌렀으나 로그인이 되어있지 않으면 로그인 페이지가 먼저 나온다.
// 5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃 상태가 되면 상품 디테일 페이지를 볼 수 없으며 로그인 페이지가 보여진다.
// 8. 로그인을 하면 로그아웃 버튼이 보이고, 로그아웃을 하면 로그인 버튼이 보인다.
// 9. 상품을 검색할 수 있다.

function App() {
    const [authenticate, setAuthenticate] = useState(false) //false 로그인ㅇ,true 로그인x
    useEffect(()=>{
    },[authenticate])
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/' element={<AllProduct />} />
                <Route path='/login' element={<Login />} />
                <Route path='/products/:id' element={<PrivateRoute />} />
            </Routes>
        </div>
  );
}

export default App;
