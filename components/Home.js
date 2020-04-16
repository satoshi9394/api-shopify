import { 
  Page,
  Layout,
  Card,
  Button,
  Stack,
  FooterHelp,
  Link,
  Spinner
} from '@shopify/polaris'

import {TitleBar, ResourcePicker } from '@shopify/app-bridge-react'

import {useState, useEffect} from 'react'

import { useRouter} from 'next/router'

//import axios from 'axios'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'

const Index = ({
    shop_is_loading,
    shop_exists,
    shop_status,
    getShopifyData
  }) => {
+
  

  //llamada a api interna para encontrar id
  useEffect(() => {

    getShopifyData()

  },[])

  const [ open, setOpen ] = useState(false)

  const router = useRouter()

  const handleSelection = (resourse) => {
    setOpen(false)
    console.log(resourse)
  }
  let msg = "Por favor registrate en la pagina"
  if(shop_exists){
    msg="Por favor seleciona tus productos para revision"
  }

  let accionBotones = <Spinner accessibilityLabel="Spinner example" size="large" color="teal" />

  if(shop_is_loading===false){
    accionBotones = (
      <Card title={msg}>
        <Card.Section>
          <Button fullWidth primary
          disabled={shop_exists}
            onClick={()=> router.push('/registro')}
          >
            Registro
          </Button>
        </Card.Section>
        <Card.Section>
          <Button fullWidth primary
            disabled={!shop_exists}
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
    )
  }
  console.log('hola',shop_is_loading)
  
  
  return(
  <Page fullWidth>
    <TitleBar
      primaryAction={{
        content: 'Hola cambie * 2'
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
          {accionBotones}
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