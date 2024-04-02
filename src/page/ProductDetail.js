import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import Button from "react-bootstrap/Button"
import { useDispatch, useSelector } from "react-redux"
import { productAction } from "../redux/actions/productAction"

const ProductDetail = () => {
	const product = useSelector((state) => state.product.selectedItem);
	const dispatch = useDispatch()
	const getProductDetail = async () => {
	  dispatch(productAction.getProductDetail(id));
	}

	let { id } = useParams()

	
	useEffect(() => {
		getProductDetail()
	}, [])

	return (
		<Container>
			<Row>
				<Col lg={6} sm={12}>
					<img className="productImg" src={product?.img} alt="" />
				</Col>
				<Col lg={6} sm={12}>
					<div className="detailCap">
						<div className="detailTitle">{product?.title}</div>
						<div className="detailPrice">₩ {product?.price}</div>
					<div className="productTag">
						<div className={`tag ${product?.choice? "":"hidden"}`}>{product?.choice === true?"Conscious choice":""}</div>
						<div className={`tag ${product?.new? "":"hidden"}`}>{product?.new === true?"new":""}</div>
					</div>
					<Dropdown className="dropdown">
						<Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
							사이즈 선택
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">S</Dropdown.Item>
							<Dropdown.Item href="#/action-2">M</Dropdown.Item>
							<Dropdown.Item href="#/action-3">L</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					<Button className="addBtn" variant="dark">
						추가
					</Button>
					</div>
				</Col>
			</Row>
		</Container>
	)
}


export default ProductDetail
