import React, { useEffect, useState } from "react"
import ProductCard from "../component/ProductCard"

const AllProduct = () => {
    const [productList, setProductList] = useState([])
    const getProducts= async()=>{
        let url = `http://localhost:4000/products`
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
    }
	useEffect(() => {
		getProducts()
	}, [])
	return <div>
        <ProductCard />
    </div>
}

export default AllProduct
