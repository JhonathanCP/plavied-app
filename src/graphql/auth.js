
import gql from 'graphql-tag'

export const AUTH_SIGNUP = gql`
  mutation register($data: signUpInput!) {
    signUp(data: $data) {
      user {
        id
        name
        lastname
        email
      }
      token
    }
  }
`

export const AUTH_SIGNIN = gql`
  mutation login($data: loginInput!) {
    loginAlumno(data: $data) {
      token
      alumno {
        id
        name
        lastname
        email
      }
    }
  }
`