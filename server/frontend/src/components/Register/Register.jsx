function Register() {
  return (
    <form>
      <h1>Register</h1>

      <input type="text" placeholder="Username" />
      <br /><br />

      <input type="text" placeholder="First Name" />
      <br /><br />

      <input type="text" placeholder="Last Name" />
      <br /><br />

      <input type="email" placeholder="Email" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
