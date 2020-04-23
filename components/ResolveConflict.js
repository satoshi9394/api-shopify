import { 
  Modal, 
  TextContainer,
  Stack,
  Thumbnail,
  Card,
  Button,
  Pagination,

} from '@shopify/polaris'

import { MobileAcceptMajorMonotone } from '@shopify/polaris-icons'

import { useState, useEffect} from 'react'

const ResolveConflict = ({
  modal_open,
  can_solve,
  variant_in_modal,
  variants_with_conflict,

  //aciones que vienen de redux
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
    //const i = v.findIndex( element => element.id === id)
    const i = v.findIndex(element=> element.id ===id)
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
          move(-1)
        }}
        hasNext={hasPaginator.hasNext}
        onNext={()=>{
          console.log('Next')
          move(1)
        }}
      />
    )
  }



  const handleSubmit=()=>{

  }

  const handleClose=()=>{
    closeModal()
  }

  const handleSelectPrice=(price_selected)=>{
    setHasPaginator({...hasPaginator, price_selected})
    move(0, price_selected)
  }

  const move = (step, price_selected) => {

    if(price_selected===undefined) price_selected = hasPaginator.price_selected
    const v = variants_with_conflict
    let i = v.findIndex( e => e.id === id) + step
    if(i>=0 && i<v.length){
      //paso valido
      console.log('entre a mover' , price_selected, i)
      stepVariant(price_selected, i)
    }
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

  const currentVariant = variants_with_conflict.findIndex(e=>e.id===id) + 1

  return(
    <Modal
      large
      open={modal_open}
      onClose={handleClose}
      title={`Resolver conflicto ${currentVariant} de ${variants_with_conflict.length}`}
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
                onClick={()=> handleSelectPrice('original')}
                primary={hasPaginator.price_selected==='original'}
                icon={hasPaginator.price_selected==='original' && MobileAcceptMajorMonotone}
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
                onClick={()=> handleSelectPrice('recommended')}
                primary={hasPaginator.price_selected==='recommended'}
                icon={hasPaginator.price_selected==='recommended' && MobileAcceptMajorMonotone}
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