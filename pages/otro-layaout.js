import { 
  Card, 
  Layout, 
  Page,
  
  Button,
  Form,
  FormLayout,
  Stack,
  TextField
} from '@shopify/polaris'

import { useState } from 'react'
 

const OtroLayout = () =>{

  const [descuento, setDescuento ] = useState('10%')
  const [precio, setPrecio] = useState('20')

  const handleSumit = ()=>{
    const valor1 = Number(descuento.slice(0,2))/100
    const valor2 = Number(precio)
    const total = valor2 * valor1
    console.log(`El precio final es:$${total}`)
  }

  const handleChangeDes = (valor) =>{
    console.log(valor)
    setDescuento(valor)
  }

  const handleChangePrecio = (valor) =>{
    console.log(valor)
    setPrecio(valor)
  }

  return(
    <Page>
      <Layout>
        <Layout.AnnotatedSection
          title="Algun otro titulo"
          description='alguna otra descriptio'
        >
          <Card sectioned>
            <Form onSubmit={handleSumit}>
              <FormLayout>
                <TextField
                  value={descuento}
                  onChange={handleChangeDes}
                  label='Descuento'
                  type='discont'
                />
                <TextField
                  value={precio}
                  onChange={handleChangePrecio}
                  label='Precio'
                  type='discont'
                />  
                  <Stack distribution='trailing'>
                    <Button primary submit>
                      Guardar
                    </Button>
                  </Stack>
              </FormLayout>
            </Form>
          </Card>

        </Layout.AnnotatedSection>
      </Layout>
    </Page>
  )
}


export default OtroLayout