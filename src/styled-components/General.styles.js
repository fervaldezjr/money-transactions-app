import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
  margin: 1em 0;
  background-color: #282c34;
  border-radius: 15px;
`;

export const FormTitle = styled.h3`
  color: white;
  font-size: 1.5em;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  text-align: left;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.9em;
  color: white;
`;
export const Input = styled(Field)`
  font-weight: 600;
  font-size: 0.9em;
  padding: 0.7em;
  margin: 1em 0;
  border-radius: 20px;
  border: 1px solid gray;
  width: 30em;
`;

export const ErrorMessages = styled(ErrorMessage)`
  color: tomato;
`;

export const Button = styled.button`
  color: white;
  margin: 0.5em;
  padding: 0.7em;
  font-weight: 500;
  font-size: 1em;
  background-color: rgb(32, 129, 226);
  border-radius: 20px;
  border: none;
  width: 100%;
`;

export const AvatarImg = styled.img`
  border-radius: 45%;
`;
