import React, { useState } from 'react'
import axios from 'axios'
import {v4 as uuid} from 'uuid'

import { Container } from './components/Container'
import { Form } from './components/Form'

interface LeadProps {}

const Lead: StorefrontFunctionComponent<LeadProps> = ({}) => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: ""
  })
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      ...values,
      id: uuid()
    }
    axios.post('https://h3sr042qxg.execute-api.us-east-1.amazonaws.com/leads', data)
      .then((_) => {
        setMessage("Cheque seu e-mail para ativar o desconto!")
        setError(false)
      })
      .catch((_) => {
        setMessage("Ocorreu um erro, por favor tente novamente mais tarde.")
        setError(true)
      })
      .finally(() => {
        setValues({
          name: "",
          phone: "",
          email: ""
        })
      })
  }
  
  const handleChange = (e: { target: React.InputHTMLAttributes<HTMLInputElement> }): void => {
    setValues({ ...values, [e.target.name as string]: e.target.value })
  }

  return (
    <Container>
      {message !== "" ? (
        <h3 className={`${error ? 'error' : 'success'}`}>{message}</h3>
      ) : (
        <>
          <h2>Cadastre-se para receber 45% de desconto!</h2>
          <Form onSubmit={handleSubmit}>
            <input 
              type="text"
              required
              placeholder="Nome"
              name="name"
              value={values.name}
              onChange={handleChange}
              />
            <input 
              type="text"
              required
              placeholder="Telefone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              />
            <input 
              type="email"
              required
              placeholder="E-mail"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <button>Cadastrar</button>
          </Form>
        </>
      )}
      
    </Container>
  )
}

Lead.schema = {
  title: 'editor.lead.title',
  description: 'editor.lead.description',
  type: 'object',
  properties: {},
}

export default Lead
