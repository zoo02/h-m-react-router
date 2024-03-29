import React, { useEffect, useState } from "react"
import ProductCard from "../component/ProductCard"
import { Container, Row, Col } from "react-bootstrap"
import { useSearchParams } from "react-router-dom"

const AllProduct = () => {
    const [productList, setProductList] = useState([])
    const [query, setQuery] = useSearchParams()
    const getProducts= async()=>{
        let searchQuery = query.get(`q`) || ""
        let url = `https://my-json-server.typicode.com/zoo02/h-m-react-router/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        setProductList(data)
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
