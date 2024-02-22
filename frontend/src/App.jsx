import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './ContectList'
import ContactForm from './ContactForm'

function App() {

  const [contacts, setContacts] = useState([])
  const [ isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts")
    const data = await response.json()
    setContacts(data.contacts)
    console.log(data.contacts)
  }

  const closeModel = () => {
    
  }

  return (
    <>
      <ContactList contacts={contacts}/>    
      <ContactForm />  
    </>
  )
}

export default App
