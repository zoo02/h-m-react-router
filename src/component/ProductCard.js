import React from "react"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ item }) => {
	const navigate = useNavigate()
	const showDetail = () => {
		navigate(`/products/${item.id}`)
	}
	return (
		<div className="card" onClick={showDetail}>
			<img className="productImg" src={item?.img} alt="" />
			<div className="detailCap">
				<div className="productTag">
					<div className={`tag ${item.choice ? "" : "hidden"}`}>
						{item?.choice === true ? "Conscious choice" : ""}
					</div>
					<div className={`tag ${item.new ? "" : "hidden"}`}>
						{item?.new === true ? "new" : ""}
					</div>
				</div>
				<div>{item?.choice === true ? "Conscious choice" : ""}</div>
				<div>{item?.title}</div>
				<div>₩ {item?.price}</div>
			</div>
		</div>
	)
}

export default ProductCard
