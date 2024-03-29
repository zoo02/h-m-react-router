import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"]
    const navigate = useNavigate()
    const goToLogin =()=> {
        navigate("/login")
    }
    const search = (event) => {
        if (event.key==="Enter"){
            let keyword = event.target.value
            navigate(`/?q=${keyword}`)
        }
    }

  return (
    <div>
        <div>
            <div className='loginButton' onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>

        <div className='navSection'>
            <img width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQqws1iDyOfi2mpFC0BIrpkDqzVE7D9apJtGQ1XdOxw&s" alt="" />
        </div>

        <div className='menuArea'>
            <ul className='menuList'>
                {menuList.map((menu)=>(<li>{menu}</li>))}
            </ul>
            <div className='searchArea'>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder='제품을 검색하세요'
                onKeyPress={(event)=>search(event)}/>
            </div>
        </div>

    </div>
  )
}

export default NavBar