import React from 'react'

const PossoAjudar = () => {
  return (
    <section className='bg-background-secondary px-5 font-ttwellingtons padding-y font-bold'>
      <div className='max-container flex flex-col items-center'>
        <h1 className='title text-text-secondary text-center'>Em que posso te ajudar</h1>
      

        <div className='text-hero-text flex flex-col items-center bg-text-secondary py-5 px-12 rounded-lg mt-6'>
          <h2 className='leading-loose'>Ansiedade</h2>
          <h2 className='leading-loose'>Depressão</h2>
          <h2 className='leading-loose'>Insônia</h2>
          <h2 className='leading-loose'>TDAH</h2>
          <h2 className='leading-loose'>Autismo</h2>
        </div>
      </div>
    </section>
  )
}

export default PossoAjudar