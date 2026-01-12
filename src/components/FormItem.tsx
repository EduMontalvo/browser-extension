import { useState } from 'react'
import { DataArray } from '../data/data'
import type { DataItem } from '../Schemas/DataArraySchema'
import ButtonFilter from './ButtonFilter'



const FormItem = () => {

  const [allData, setAllData] = useState<DataItem[]>(DataArray)
  const [filteredData, setFilteredData] = useState<DataItem[]>(DataArray)
  

  const handleToggle = (id: DataItem['id']) => {
    const searching = allData.map(data => data.id === id ? { ...data, state: !data.state } : data)
    setAllData(searching)
    const updateFilteredData = filteredData.map(data => data.id === id ? { ...data, state: !data.state } : data)
    setFilteredData(updateFilteredData)
  }

  const showResults = () => {
    
  }
  const handleDisable = () => {

    const disactive = allData.filter(data => data.state === false)
    setFilteredData(disactive)
    console.log(disactive)
  }
  const handleEnable = () => {
    
    const active = allData.filter(data => data.state === true)
    setFilteredData(active)
    console.log(active)
  }


  return (
    <>
      <h2 className='text-white font-semibold text-4xl text-center'>Extensions List</h2>
      <div className='flex justify-center gap-4 my-8'>
        {/* <ButtonFilter name={'All'} /> */}
        <ButtonFilter name={'Active'} action={handleEnable} />
        <ButtonFilter name={'Inactive'} action={handleDisable}/>
      </div>
      {filteredData.map((data) => (
        <div className='flex flex-col w-full m-auto border border-solid p-5 border-dark-600 bg-dark-800 rounded-4xl gap-4 mb-4' key={data.id}>
          <div className='flex  mb-4 items-start'>
            <img src={data.url} alt="" className='w-18 h-18' />
            <div className='flex flex-col pl-4 pr-8 gap-1.5'>
              <h2 className='text-xl font-bold text-neutral-50'>{data.name}</h2>
              <p className='text-light-300 text-md'>{data.details}</p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <button className='text-neutral-50 px-4 py-2 rounded-full border border-solid border-dark-600 text-lg'>Remove</button>
            <button className={`relative w-10.5 h-6 rounded-full inline-flex items-center transition-colors  duration-300 ease-in-out ${data.state ? 'bg-acent-400' : 'bg-dark-600'}`} onClick={() => handleToggle(data.id)}>
              <span className={`bg-light-100 rounded-full w-5 h-5 transition-transform duration-300 ease-in-out ${data.state ? 'translate-x-5' : 'translate-x-0.5'}`}></span>
            </button>
          </div>
        </div>
      )
      )}
    </>
  )
}

export default FormItem