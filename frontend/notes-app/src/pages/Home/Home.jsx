import { useState } from "react"
import Modal from 'react-modal'
import { MdAdd } from "react-icons/md"
import NoteCard from "../../components/Cards/NoteCard"
import Navbar from '../../components/Navbar/Navbar'
import AddEditNotes from "./AddEditNotes"

const Home = () => {

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "Add",
    data: null,
  })


  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Meetin ong December 7th"
            date="4rd March 2026"
            content="High Pay light project discuss!"
            tags="#meeting"
            inPinned={true}
            onEdit={() => { }}
            onDelete={() => { }}
            onPinNote={() => {}}
          />
          <NoteCard
            title="Meetin ong December 7th"
            date="4rd March 2026"
            content="High Pay light project discuss!"
            tags="#meeting"
            inPinned={true}
            onEdit={() => { }}
            onDelete={() => { }}
            onPinNote={() => {}}
          />          
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500 hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "Add", data: null })
        }}
      >
        <MdAdd className="text-[32px] text-whtie" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => { }}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes />
      </Modal>
    </>
  )
}

export default Home
