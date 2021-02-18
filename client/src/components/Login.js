import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Login = ({handleChange, handleSubmit, errors }) => {
  

  return (
    <div className="container">
      <h1>Login</h1>
      <Form className="col-md-8 col-12 login p-4" onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="username"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button className="mt-3 btn-dechit" size="lg" type="submit">
          Login
        </Button>
        {errors.error && <div className="alert alert-danger mt-2 mb-2 p-2"><p className="m-1">{errors.error}</p></div>}
      </Form>
    </div>
  );
}

export default Login;