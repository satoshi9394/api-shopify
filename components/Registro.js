import { Page, Form, FormLayout, TextField, Layout, Stack, Button, Spinner, Toast, Frame } from '@shopify/polaris'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Registro = ({
    shop_is_loading,
    shop_exists,
    shop,
    shop_error,

    createShop,
    clearError
}) => {


    const router = useRouter()


    const [nombre,setNombre] = useState(shop.name)
    const [representante,setRepresentante] = useState(shop.shop_owner)
    const [telefono,setTelefono] = useState(shop.phone)
    const [email,setEmail] = useState(shop.customer_email)
    const [tarjeta,setTarjeta] = useState('')
    
    

    const handleSubmit = ()=>{
        console.log('Datos guardados',nombre, representante, telefono, email, tarjeta)


        const payload = {
            name: nombre,
            email,
            shop_owner: representante,
            telephone: telefono,
            shopify_shop_id: shop.id,
            myshopify_domain: shop.myshopify_domain
        }
        createShop(payload)
    }

    const handleToastDismiss = ()=>{
        clearError()
    }

    let toast = null
    if(shop_error!==null){
        toast = <Toast content={shop_error} onDismiss={handleToastDismiss} />
    }


    let button = <Button primary submit>Guardar</Button>

    if(shop_is_loading){
        button = <Spinner accessibilityLabel="Spinner example" size="large" color="teal" />
    }

    if(shop_exists){
        router.push('/')
    }

    return (
        <Frame>
        <Page fullWidth title={"Registro"}>
            <Form onSubmit={handleSubmit}>
                <FormLayout>

                <Layout>
                    <Layout.Section oneHalf>
                        
                        <TextField
                        value={nombre}
                        onChange={(valor)=>setNombre(valor)}
                        label="Nombre de la tienda"
                        type="text"   
                        fullWidth                 
                        />

                        <TextField
                        value={representante}
                        onChange={(valor)=>setRepresentante(valor)}
                        label="Nombre del representante legal"
                        type="text"  
                        fullWidth                  
                        />


                        <TextField
                        value={telefono}
                        onChange={(valor)=>setTelefono(valor)}
                        label="Teléfono"
                        type="text"     
                        fullWidth               
                        />
                        
                    </Layout.Section>

                    <Layout.Section oneHalf>
                        
                        <TextField
                            value={email}
                            onChange={(valor)=>setEmail(valor)}
                            label="Email"
                            type="text"      
                            fullWidth              
                            />

                        <TextField
                        value={tarjeta}
                        onChange={(valor)=>setTarjeta(valor)}
                        label="Tarjeta de credito"
                        type="text"   
                        fullWidth                 
                        />

                        <Stack distribution="trailing">
                            {button}
                        </Stack>
                        
                    </Layout.Section>
                </Layout>

                
                
                </FormLayout>
            </Form>            
            
        </Page>

        {toast}

        </Frame>
    )

}

export default Registro