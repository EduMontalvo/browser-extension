import LogoDevLens from '../assets/images/logo-devlens.svg'

const FormItem = () => {
  return (
    <div className='flex flex-col w-[70%] m-auto border border-solid p-5 bg-neutral-500 rounded-2xl'>
      <div className='flex  mb-4'>
        <img src={LogoDevLens} alt=""/>
        <div className='flex flex-col'>
          <h2 className='text-lg font-bold text-neutral-50'>DevLens</h2>
          <p className='text-neutral-50'>Quickly inspect page layouts and visualize element boundaries.</p>
        </div>
      </div>
      <div className='flex items-center justify-between '>
        <button className='text-neutral-50 px-4 py-1 bg-blue-900 rounded-full'>Remove</button>
        <button>Boton switch</button>
      </div>
    </div>
  )
}

export default FormItem