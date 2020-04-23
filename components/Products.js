import { Page, 
  FooterHelp, 
  Link, 
  ResourceList, 
  ResourceItem, 
  Avatar, 
  Card,
  Stack,
  Badge,
  TextStyle,
  Button,
} from '@shopify/polaris'
import { useEffect } from 'react'

//
import ResolveConflict from '../containers/ResolveConflict'

const Products = ({
  getShopifyData,

  variant_is_loading,
  variants,

  solveVariant
})=>{


  //Se ejecuta 1 sola vez al montarse el componente
  useEffect(()=>{
    getShopifyData()
  },[])

  const resourceName = {
    singular: 'variant',
    plural: 'variants'
  }

  const renderItem = (item) => {

    const {

      _id: id,
      product_title: title,
      variant_title,
      product_image: image_url,
      final_price = 0,
      status,
      tax_calculated:final_duty,

    } = item

    //variables para el estatus
    let statusColor=null
    let columnA = null
    let columnB = null

    switch(status){
      case 'Calculando': 
        statusColor='attention';
        break
      case 'Sin conflicto':	
      case 'Completo':
        statusColor='success';
        columnA = `$${final_price} Subtotal`
        columnB = `$${final_duty} Impuesto`
        break
      case 'Conflicto':
        statusColor='warning'
        columnA=<Button onClick={()=>solveVariant(id)} size='slim'>Resolver</Button>
        break;			
    }


  const media = <Avatar customer size="medium" source={image_url} />


        return (
            <ResourceItem id={id} media={media}>
              <Stack>
          <Stack.Item fill>
            <h3>
              <TextStyle variation="strong">
                {title} - {variant_title}
              </TextStyle>
            </h3>
          </Stack.Item>
          <Stack.Item>
            {columnA}
          </Stack.Item>
          <Stack.Item>
            {columnB}
          </Stack.Item>
          <Stack.Item>
            <Badge status={statusColor}>{status}</Badge>
          </Stack.Item>
              </Stack>
            </ResourceItem>
        )

    }


    return (
      <Page fullWidth>


        <Card>
          <ResourceList
            resourceName={resourceName}
            items={variants}
            showHeader={false}
            loading={variant_is_loading}
            renderItem={renderItem}
          />
        </Card>
            
        <ResolveConflict/>

        <FooterHelp>
          Soy Angel{' '}
          <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
            Santillan
          </Link>
        </FooterHelp>

      </Page>
    )

}

export default Products