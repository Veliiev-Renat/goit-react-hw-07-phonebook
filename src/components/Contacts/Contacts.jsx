import style from '../Contacts/Contacts.module.css'
import { useSelector,useDispatch } from 'react-redux'
// import { removeContact } from 'redux/counterSlice';
import { useEffect } from 'react'
import { fetchContacts,deleteContact } from 'redux/operations'
import { selectContacts } from 'redux/selectors'



export default function Contact(){
const dispatch = useDispatch()

const contacts = useSelector(selectContacts);

useEffect(()=>{
    dispatch(fetchContacts())
},[dispatch])



const filter = useSelector(state=>state.contact.filter)
const filteredArray=filter?contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase())):contacts

        return(
    <ul className={style.list}>
        {filteredArray.map((contact)=>(
        <li key={contact.id} className={style.item}>
           <p className={style.text}>{contact.name} : {contact.number}</p> 
           <button type="button" onClick={()=>{dispatch(deleteContact(contact.id))}}  className={style.button}>delete </button>
        </li>
        ))}    
    </ul>
   )     
}


