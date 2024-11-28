import React from 'react'
import Image from 'next/image'

const OndeAtendo = () => {
  return (
    <section className="px-5 font-garet relative lg:bg-atendo bg-contain bg-no-repeat bg-right padding-y bg-slate-50">
      <div className="max-container">
        
        <div className='flex justify-between flex-col lg:flex-row gap-10 items-center lg:items-start'>


          <div className="text-center lg:text-left xl:w-7/12 mt-12 lg:max-w-xl text-text-primary">
            
              <h1 className="title font-bold leading-none text-text-quaternary tracking-wide">
              Onde eu atendo</h1> 

              <div className='flex flex-col gap-10 mt-10'>
                <div>
                  <p className='paragraph font-extrabold'>INSTITUTO AMPARO</p> 

                  <p className='paragraph'>Av. Ataíde Teive, 1217,</p>
                  <p className='paragraph'>Sala 3, 1° andar</p>
                  <p className='paragraph'>Macapá - AP</p>
                </div>

                <div>
                  <p className='paragraph font-extrabold'>E-MAIL</p> 
                  <p className='paragraph'>gestao@institutoamparo.com</p>
                </div>

                <div>
                  <p className='paragraph font-extrabold'>TELEFONE</p> 
                  <p className='paragraph'>(91) 99135-4590</p>
                </div>

                <div>
                  <p className='paragraph font-extrabold'>REDES SOCIAIS</p> 
                  <p className='paragraph'>@camilaneiva.dra</p>
                </div>
              </div>
            
          </div>

          <div className="relative d-block lg:hidden w-full h-[450px] md:w-[450px] md:h-[650px]">
            <Image
              src="/assets/onde_atendo.webp"
              alt="acomp_psiquico"
              layout="fill"
              className="object-cover object-center"
            />
          </div>
        </div>

      </div>
        
    </section>
  )
}

export default OndeAtendo