import React, { useEffect, useState } from "react"
import ProductCard from "../component/ProductCard"
import { Container, Row, Col } from "react-bootstrap"
import { useSearchParams } from "react-router-dom"
// import {productAction} from "../redux/actions/productAction"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/reduces/productSlice"

const AllProduct = () => {
    const productList = useSelector((state)=>state.product.productList)
    const [query, setQuery] = useSearchParams()
    const dispatch = useDispatch()
    const getProducts= ()=>{
        let searchQuery = query.get(`q`) || ""
        dispatch(fetchProducts(searchQuery))
    }

	useEffect(() => {
		getProducts()
	}, [query])

	return <div>
        <Container>
            <Row>
            {productList.map((item)=>(
                <Col lg={3}>
                    <ProductCard item={item} />
                </Col>
                ))}
            </Row>
        </Container>
    </div>
}

export default AllProduct
