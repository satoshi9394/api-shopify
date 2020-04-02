import { 
  Page,
  
  Button,
  Form,
  FormLayout,
  TextField
} from '@shopify/polaris'

import { useState } from 'react'
 

const Registro = () =>{

  const [nombreTienda, setNombreTienda ] = useState('')
  const [email, setEmail] = useState('')
  const [nombreRepresentante, setNombreRepresentante] = useState('')
  const [tarjeta, setTarjeta] = useState('')
  const [telefono, setTelefono] = useState('')

  const handleChange= (valor, params) => {
    switch (params) {
      case 'nombreTienda':
        setNombreTienda(valor)
        break
      case 'email':
        setEmail(valor)
        break
      case 'nombreRepresentante':
        setNombreRepresentante(valor)
        break
      case 'tarjeta':
        setTarjeta(valor)
        break
      case 'telefono':
        setTelefono(valor)      
        break
    }
  }

  const setSave = () => {
    console.log(`se guardo el estado 
    nommbre de la tienda: ${nombreTienda} 
    email ${email}
    nombre del representante ${nombreRepresentante}
    tarjeta ${tarjeta}
    telefono ${telefono}
    `)
  }  


  return(
    <Page fullWidth>
      <Form onSubmit={setSave}>
        <FormLayout.Group condensed >
          <TextField 
          label="Nombre de la tinda" 
          value={nombreTienda} 
          onChange={(valor)=>handleChange(valor,'nombreTienda')}
          />
          <TextField 
          type="email" 
          label="Email" 
          value={email} 
          onChange={(valor)=>handleChange(valor,'email')} 
          />
        </FormLayout.Group>
        <FormLayout.Group condensed >
          <TextField 
          label="Representante legal" 
          value={nombreRepresentante} 
          onChange={(valor)=>handleChange(valor,'nombreRepresentante')} 
          />
          <TextField 
          type="password" 
          label="Tarjeta de cretido" 
          value={tarjeta} 
          onChange={(valor)=>handleChange(valor,'tarjeta')} />
        </FormLayout.Group>
        <FormLayout.Group condensed >
          <TextField 
          label="Telefono" 
          type="phone" 
          value={telefono} 
          onChange={(valor)=>handleChange(valor,'telefono')} />
          <Button fullWidth primary submit>Guardar</Button>
        </FormLayout.Group>
      </Form>  
    </Page>
  )
}


export default Registro