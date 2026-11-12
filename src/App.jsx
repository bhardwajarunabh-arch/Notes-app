import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({title,details})
    
    setTask(copyTask)    
    
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=>{
    const copyTask = [...task];
    // console.log(idx);
    
    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>

        <h1 className='text-4xl font-bold'>Your Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input
         type="text"
         placeholder='Enter Notes Heading'
         className='px-5 w-full font-medium py-2 border-2 outline-none rounded' 
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value);
         }}
        />

        {/* DETAILED VALA INPUT */}
        <textarea 
        type="text" 
        className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded' 
        placeholder='Write Details here'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)          
        }}
        />

        <button 
          className='bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded'
        >
          Add Notes
        </button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap item-start justify-start gap-5 mt-6 h-full overflow-auto'>
          {task.map(function(elem,idx){

            return <div key={idx} className="flex justify-between flex-col item-start relative h-52 w-40 bg-cover rounded-xl text-black py-9 px-4 bg-[url('https://img.magnific.com/free-vector/low-poly-background-with-connecting-lines-dots_1048-20298.jpg?semt=ais_hybrid&w=740&q=80')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App