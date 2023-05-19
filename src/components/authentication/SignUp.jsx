import styled from "styled-components";
import { useState } from "react";
import {
  createUserWithEmailAndPassword1,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";
import { selectIsSiginOpen } from "../../store/user/user.selector";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../Elements_IU/Buttons";

export function SignUp() {
  const navigate = useNavigate();
  const defaultformfields = {
    displayName: "",
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultformfields);

  const isopenmodalsign = useSelector(selectIsSiginOpen);

  const { displayName, email, password } = formFields;

  const dispatch = useDispatch();

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
      const { user } = await createUserWithEmailAndPassword1(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      dispatch(selectIsSiginOpen(!isopenmodalsign));
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("no puede crear una cuenta con un email ya registrado");
      } else {
        console.log("se encontro el error", error);
      }
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
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
        type="password"
      ></input>
      <input
        className="inputs"
        onChange={onchangeinput}
        placeholder="Ingrese name"
        value={displayName}
        name="displayName"
        type="text"
      ></input>

      <Button buttonType="completamarillo" type="submit">
        Crear cuenta
      </Button>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  position: relative;

  .inputs {
    border: 1px solid rgb(202, 202, 202);
    padding: 8px;
    border-radius: 5px;
    width: 100%;
    font-size: 0.7em;
    margin-bottom: 10px;
    background-color: white;
    color: #4e4e4e;

    &:focus {
      border: none;
      outline: 1px solid rgb(179, 186, 255);
    }
  }

  p {
    font-size: 12px;
  }
`;
