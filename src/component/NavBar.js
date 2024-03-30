import React, {useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faUser, faXmark, faBars } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

const NavBar = ({ authenticate, setAuthenticate }) => {
	const menuList = [
		"여성", "Divided", "남성", "신생아/유아",
		"아동", "H&M Home", "Sale", "지속가능성",
	]
	const navigate = useNavigate()
	const goToLogin = () => {
		navigate("/login")
	}
    const [sidebarOpen, setSidebarOpen] = useState(false)
	const goToProducts = () => {
		navigate("/")
	}
	const search = (event) => {
		if (event.key === "Enter") {
			let keyword = event.target.value
			navigate(`/?q=${keyword}`)
		}
	}
	const toggleLoginBtn = () => {
		if (authenticate) {
			setAuthenticate(false)
		} else {
			navigate("/login")
		}
	}

    
	const openSidebar = () => {
		setSidebarOpen(!sidebarOpen)
	}
	const closeSidebar = () => {
		setSidebarOpen(sidebarOpen === false)
	}
	const sideListStyle = {
		width: sidebarOpen ? "250px" : "0",
	}
	return (
		<div>
			<div className="topNav">
				<div className="toggle">
					<FontAwesomeIcon icon={faBars} onClick={openSidebar} />
				</div>
				<div className="login-btn btn" onClick={toggleLoginBtn}>
					<FontAwesomeIcon icon={faUser} />
					<div>{authenticate ? "로그아웃" : "로그인"}</div>
				</div>
			</div>

			<div className="navSection" onClick={goToProducts}>
				<img
					width={100}
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQqws1iDyOfi2mpFC0BIrpkDqzVE7D9apJtGQ1XdOxw&s"
					alt=""
				/>
			</div>
			<div className="menuArea">
				<ul className="menuList">
					{menuList.map(menu => (
						<li>{menu}</li>
					))}
				</ul>
				<div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
					<ul className="sideList" style={sideListStyle}>
						<div className="closeBtn">
							<FontAwesomeIcon icon={faXmark} onClick={closeSidebar} />
						</div>
                        {menuList.map(menu => (
						<li>{menu}</li>
					))}
					</ul>
				</div>
				<div className="searchArea">
					<FontAwesomeIcon icon={faSearch} />
					<input
						type="text"
						placeholder="제품을 검색하세요"
						onKeyPress={event => search(event)}/>
				</div>
			</div>
		</div>
	)
}

export default NavBar
