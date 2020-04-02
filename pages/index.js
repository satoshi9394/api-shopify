import { 
  TextStyle,
  Page,
  Layout,
  EmptyState,
  Card
} from '@shopify/polaris'

import {TitleBar, ResourcePicker } from '@shopify/app-bridge-react'

import {useState} from 'react'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'

const Index = () => {

  const [ open, setOpen ] = useState(false)

  const handleSelection = (resourse) => {
    setOpen(false)
    console.log(resourse)
  }
  
  return(
  <Page>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
        </p>
        </Card>
      </Layout.Section>
      <Layout.Section secondary>
          <EmptyState
            action={{
            content: 'Registratre',
            onAction: ()=> console.log('entre a registro')
            }}
          >
          </EmptyState>
          <EmptyState
            action={{
            content: 'Enviar productos a revision',
            onAction: ()=> setOpen(true)
            }}
          >
          </EmptyState>
          <Card sectioned>
            <p>La revision de los productos<br></br>
            puede tomar de 24 a 48 horas</p>
          </Card>
      </Layout.Section>
    </Layout>
  </Page>
  )
}

export default Index