import { 
  Page,
  Layout,
  Card,
  Button,
  Stack,
  FooterHelp,
  Link
} from '@shopify/polaris'

import {TitleBar, ResourcePicker } from '@shopify/app-bridge-react'

import {useState, useEffect} from 'react'

import axios from 'axios'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'

const Index = () => {

  const [ open, setOpen ] = useState(false)

  const [ input, setInput ] = useState([])

  const handleSelection = (resourse) => {
    setOpen(false)
    console.log(resourse)
  }

  useEffect(() => {
    axios.get('/api/shopify')
      .then((resp)=>console.log(resp)
      )
      .catch((err)=> alert(`${err} recurso no encontrado`))
  },)
  
  return(
  <Page fullWidth>
    <TitleBar
      primaryAction={{
        content: 'Hola cambie'
      }}
    />

    <ResourcePicker
      resourceType='Product'
      showVariants={false}
      open={open}
      onSelection={handleSelection}
      onCancel={() => setOpen(false)}
    />
    <Layout>
      <Layout.Section>
        <Card title="Bienvenido al Home" sectioned>
          <Stack>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
            </p>
          </Stack>
        </Card>
      </Layout.Section>
      <Layout.Section secondary>
          <Card title="Por favor registrate en la pagina">
            <Card.Section>
              <Button fullWidth primary
                url='/registro'
              >
                Registro
              </Button>
            </Card.Section>
            <Card.Section>
              <Button fullWidth primary
                onClick={()=> setOpen(true) }
              >
                Enviar productos a revision
              </Button>
            </Card.Section>
            <Card.Section>
              <p>La revision de los productos<br></br>
              puede tomar de 24 a 48 horas</p>
            </Card.Section>
          </Card>
      </Layout.Section>
    </Layout>
    <FooterHelp>
      Soy Angel{' '}
      <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
        fulfilling orders
      </Link>
    </FooterHelp>
  </Page>
  )
}

export default Index