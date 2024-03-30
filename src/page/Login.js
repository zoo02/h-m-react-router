import React from "react"
import { Button, Form, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate()

    const loginUser=(event)=>{
        event.preventDefault()
        setAuthenticate(true)
        navigate("/")
    }


	return (
		<Container>
			<Form onSubmit={(event)=>loginUser(event)}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>ID</Form.Label>
					<Form.Control type="ID" placeholder="Enter ID" />
					<Form.Text className="text-muted">
						We'll never share your ID with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
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
