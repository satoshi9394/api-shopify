import { 
  Modal, 
  TextContainer,
  Stack,
  Thumbnail,
  Card,
  Button,
  Pagination,

} from '@shopify/polaris'

import { useState, useEffect} from 'react'

const ResolveConflict = ({
  modal_open,
  can_solve,
  variant_in_modal,
  variants_with_conflict,

  //aciones que viene de redux
  closeModal,
  stepVariant
}) => {

  const [hasPaginator, setHasPaginator] = useState({
    hasNext: false, 
    hasPrevious: false, 
    price_selected: null
  })

  const {
    id,
    product_image: image_url,
    product_title: title,
    variant_price: price,
    variant_recommended_price: recommended_price,
    tax_calculated: calculated_duty=0,
    calculated_duty_original=0,
    price_selected=null

  } = variant_in_modal

  useEffect(() => {
    const v = variants_with_conflict
    let p = {
      hasNext: false, 
      hasPrevious: false, 
      price_selected
    }
    if(v.length<=1) return setHasPaginator(p)
    const i = v.findIndex( element => element.id === id)
    if(i>0) p.hasPrevious = true;
    if(i<v.length-1) p.hasNext = true;
    setHasPaginator(p)
  }, [variant_in_modal])//cada que variant_in_modal cambie se ejecuta esto


  

  let pagination = null

  if(variants_with_conflict.length>0){
    pagination = (
      <Pagination
        hasPrevious={hasPaginator.hasPrevious}
        onPrevious={()=>{
          console.log('Previos')
        }}
        hasNext={hasPaginator.hasNext}
        onNext={()=>{
          console.log('Next')
        }}
      />
    )
  }



  const handleSubmit=()=>{

  }

  const handleClose=()=>{
    closeModal()
  }

  const handleSelectPrice=()=>{

  }

  const footer = (
    <Stack>
      <Stack.Item fill>
        {pagination}
      </Stack.Item>
      <Stack.Item>
        <Button primary onClick={handleSubmit()} disabled={!can_solve}>
          Guardar mi seleccion
        </Button>
      </Stack.Item>
    </Stack>
  )

  return(
    <Modal
      large
      open={modal_open}
      onClose={handleClose}
      title={'Resolver conflicto'}
      footer={footer}
    >
    <Modal.Section>
      <TextContainer>
        <div>Nuestros expertos suguieren 
        diferentes impuestos de los que 
        usted ha indicado. selecione cual 
        es el corresto
        </div>
        <Stack distribution="fillEvenly">
          <Stack.Item>
            <Stack>
              <Thumbnail 
              source={image_url}
              />
              <div>
                {title}
              </div>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <div>
              Precio Regular: {price}
            </div>
            <div>
              impuestos: {}
            </div>
          </Stack.Item>
        </Stack>
        <Stack distribution="fillEvenly">
          <Card sectioned>
            <div className='title-wrapper'>
              <div className='subtitle'>
                Tu ingresaste
              </div>
            </div>
            <div className='title-price'>
              ${price}
            </div>
            <p className='text-center'>Impuestos ${calculated_duty_original}</p>
            <div className='text-center mt-10'>
              <Button
                onClick={()=> handleSelectPrice()}
                primary={false}
              >
                Selecionar
              </Button>
            </div>
          </Card>
          <Card sectioned>
            <div className='title-wrapper'>
              <div className='subtitle'>
                Nosotros recomendamos
              </div>
            </div>
            <div className='title-price'>
              ${recommended_price}
            </div>
            <p className='text-center'>Impuestos ${calculated_duty}</p>
            <div className='text-center mt-10'>
              <Button
                onClick={()=> handleSelectPrice()}
                primary={false}
              >
                Selecionar
              </Button>
            </div>
          </Card>
        </Stack>
      </TextContainer>
      </Modal.Section>
    </Modal>
  )
}

export default ResolveConflict;