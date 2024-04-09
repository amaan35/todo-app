import React, { useState } from 'react'

type Props = { 
  saveTodo: (e: React.FormEvent, formData: TypeTodo | any) => void 
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
  const [formData, setFormData] = useState<TypeTodo | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <form className='bg-gray-700 p-5 flex flex-col gap-4 rounded-lg border-2 border-gray-500 text-white space-y-5 w-[300px] h-fit' onSubmit={(e) => saveTodo(e, formData)}>
      <div className='space-y-3'>
        <div className='flex gap-3 items-center'>
          <label htmlFor='name'>Title</label>
          <input className='px-3 flex-grow py-2 rounded-md text-black' onChange={handleForm} type='text' id='name' />
        </div>
        <div className='flex flex-col gap-3'>
          <label htmlFor='desc'>Description</label>
          <input className='px-3 h-[50px] flex-grow py-2 rounded-md text-black' onChange={handleForm} type='text' id='desc' />
        </div>
      </div>
      <button className='bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg' disabled={formData === undefined ? true: false} >Add Todo</button>
    </form>
  )
}

export default AddTodo