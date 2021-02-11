import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const Login = ({handleChange, handleSubmit, errors }) => {
  

  return (
    <div className="container">
      <h1>Login</h1>
      {errors.error && <div className="alert alert-danger"><h2>ERRORE BRAVO IL FESSO!</h2><span>{errors.error}</span></div>}
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
      </Form>
    </div>
  );
}

export default Login;