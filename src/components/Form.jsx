import React, { useState } from "react"
import Cards from './Cards'
import { AiFillDelete , AiOutlineCloseSquare} from "react-icons/ai";

const Form = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [cards, setCards] = useState(Cards)

  const handleForm=(e) => {
    e.preventDefault()
    if(!title) return alert('Enter Title')
    const id = Date.now()
    console.log(id);
    console.log(title);
    console.log(desc);
    
    const updatedCards= [...cards, {id,title,desc}]
    setCards(updatedCards)
    setTitle('')
    setDesc('')
  }
  const handleDiscard = (id) => {
    const updatedCards = cards.filter((card)=>card.id!== id)
    setCards(updatedCards)
  }
  const handleClean= () =>{
    setCards([])
  }
  return (
    <div className="w-full  flex justify-center flex-col grid grid-cols-2">
    <form onSubmit={handleForm} className="container  p-4 m-4  rounded-3xl w-full float-right">
      <h2 className="text-3xl flex justify-center text-slate-700">Enter your note</h2>
      <div className="flex flex-col mx-4">
        <label className="text-slate-600 text-2xl ml-3" htmlFor="title">Title</label>
        <input className="border rounded-lg border-zinc-700 p-3 pl-5" type="text"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        placeholder="Title..."
        id="title"/>
      </div>
      <div className="flex flex-col mb-9 mx-4">
        <label className="text-slate-600 text-2xl ml-3" htmlFor="desc"> Description</label>
        <input className="border rounded-lg border-zinc-700 p-3 pl-5" type="text" placeholder="Description..."
        id="desc"
        value={desc}
        onChange={(e)=> setDesc(e.target.value)}/>
      </div>
      <button type="submit" className="py-1  bg-indigo-800 text-white text-xl font-mono rounded-xl mb-3 flex mx-auto lg:w-96 justify-center w-[40%]">Submit</button>
    </form>

        {cards.length? <div>
          {cards.map((card)=> {
      return (
      <div className="ml-4 border-2 border-red-200 rounded-lg p-4 m-3" key={card.id}>
        <h2 className="text-xl text-sky-900 font-mono border-b border-slate-400 mb-2 " >{card.title}</h2>
        <p className="text-md text-black font-mono ml">{card.desc}</p>
        <button onClick={()=>handleDiscard(card.id)} className="flex justify-center items-center mx-auto bg-red-200 w-full rounded-lg m-3 py-1 text-black">
          <AiFillDelete className="mx-2"/>
          <span>Discard</span>
          </button>
      </div>
      )
      })}
      <button onClick={()=>handleClean()} className="flex justify-center items-center mx-auto bg-red-300 rounded-lg m-3 py-1 text-white w-[40%]">
        <AiOutlineCloseSquare className="mx-2 text-xl text-red-900"/>
        <span>Clean All</span>
        </button>
        </div>:<h2 className="flex justify-center text-3xl italic font-extralight">Oops! No Cards Here...</h2> }
        
    </div>
  )
}

export default Form