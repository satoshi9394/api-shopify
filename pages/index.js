import { TextStyle, Page, Layout, EmptyState } from '@shopify/polaris'

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
        content: 'Hola soy un primary action'
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
      <EmptyState heading="Soy un titulo"
        action={{
          content: 'da click',
          onAction: ()=> setOpen(true)
        }}
        image={img}
      >
        <p>Seleciona productos</p>
      </EmptyState>
    </Layout>
  </Page>
  )
}

export default Index