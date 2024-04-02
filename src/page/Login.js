import React, { useState } from "react"
import { Button, Form, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { UseDispatch, useDispatch } from "react-redux"
import { authenticateAction } from "../redux/actions/authenticateAction"

const Login = ({setAuthenticate}) => {
	const [id, setId] = useState("")
	const [password, setPassword] = useState("")
    const navigate = useNavigate()
	const dispatch = useDispatch()

    const loginUser=(event)=>{
        event.preventDefault()
        dispatch(authenticateAction.login(id,password))
        navigate("/")
    }


	return (
		<Container>
			<Form onSubmit={(event)=>loginUser(event)}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>ID</Form.Label>
					<Form.Control type="ID" placeholder="Enter ID" onChange={(event)=>setId(event.target.value)}/>
					<Form.Text className="text-muted">
						We'll never share your ID with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)} />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Login
				</Button>
			</Form>
		</Container>
	)
}

export default Login
