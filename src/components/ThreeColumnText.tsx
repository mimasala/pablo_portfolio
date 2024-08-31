type props = {
  one: JSX.Element | string
  two: JSX.Element | string
  three: JSX.Element | string
}

const ThreeColumnText = ({ one, two, three }: props) => {
  return (
    <>
      <div className='hidden flex-grow space-x-5 lg:flex'>
        <p className='w-1/3'>
          <h1 className='text-xl'>Textstyling auf Bild</h1>
          {one}
        </p>
        <p className='w-1/3'>
          <h1 className='text-xl'>Textstyling auf Grafikhintergrund</h1>
          {two}
        </p>
        <p className='w-1/3'>
          <h1 className='text-xl'>Splitscreen mit Hintergrundfläche</h1>
          {three}
        </p>
      </div>
      <div className='lg:hidden'>
        <hr className='my-5' />
        <p className=''>
          <h1 className='text-xl'>Textstyling auf Bild</h1>
          {one}
        </p>
        <hr className='my-5' />
        <p className=''>
          <h1 className='text-xl'>Textstyling auf Grafikhintergrund</h1>
          {two}
        </p>
        <hr className='my-5' />
        <p className=''>
          <h1 className='text-xl'>Splitscreen mit Hintergrundfläche</h1>
          {three}
        </p>
      </div>
    </>
  )
}

export default ThreeColumnText
