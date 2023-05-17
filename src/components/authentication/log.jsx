import styled from "styled-components";
import { signInWithEmailAndPassword1 } from "../../utils/firebase.utils";
import { useState } from "react";
import { Button100 } from "../Elements_IU/Buttons100";
import { useNavigate } from "react-router-dom"

export function Login() {
  const navigate = useNavigate()
  const defaultformfields = {
    email: "",
    password: "",
  };

  const [formFields, setFormFields] = useState(defaultformfields);
  const { email, password } = formFields;

  /*    const { setCurrentUser } = useContext(Usercontext);   este codigo utiliza el usecontext para registrar el usuario creado, sin embargo lo vamos a aplicar con onAuthStateChangedListener, un 
      metodo de firebase para escuchar cada que haya un cambio en el usuario logeado. esto simplifica el codigo*/

  const resetFormFields = () => {
    setFormFields(defaultformfields);
  };

  const onchangeinput = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword1(email, password);      
      resetFormFields();
      navigate("/pasarela_pagos")
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("La contraseña es incorrecta par este email");
          break;
        case "auth/user-not-found":
          alert("No existe un usuario asociado a este email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <Login_container onSubmit={handleSubmit}>
      <input
        className="inputs"
        onChange={onchangeinput}
        placeholder="Ingrese Email"
        value={email}
        name="email"
      ></input>
      <input
        className="inputs"
        onChange={onchangeinput}
        placeholder="Ingrese Password"
        value={password}
        name="password"
      ></input>

     
        <Button100 buttonType="default" type="submit">
          Iniciar sesion
        </Button100>
      
     
    </Login_container>
  );
}

const Login_container = styled.form`
  width: 100%;
  display: block;

  .inputs {
    border: 1px solid rgb(202, 202, 202);
    padding: 8px;
    border-radius: 5px;
    width: 100%;
    font-size: 0.7em;
    margin-bottom: 10px;
    background-color: white;
    color: #4e4e4e;

    &:focus{
      border: none;
      outline: 1px solid rgb(179, 186, 255);
    }
  }

  p {
    font-size: 12px;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
  }
`;
