import {View,Text,StyleSheet, TouchableOpacity} from "react-native"
import { useState } from "react"
import NoteList from "../../components/NoteList";
import AddNoteModel from "../../components/AddNoteModel";
 const NoteScreen = () => { 
    const [notes,setNotes]=useState([
        {id:'1',text:"Note One"},
        {id:'2',text:"Note Two"},
        {id:'3',text:"Note Three"}
    ])
    const [modalVisible,setModalVisible]=useState(false);
    const [newNote,setNewNote]=useState('');
    // add new note
    const addNote = ()=>{
        if(newNote.trim()==='') return;
        setNotes((prevNotes)=> [...prevNotes,{id:Date.now().toString(),text:newNote}])
        setNewNote('')
        setModalVisible(false)
    }



  return (
    <View style={styles.container}>
            {/* Note list component */}
            <NoteList notes={notes}/>
        <TouchableOpacity style={styles.addBtn} onPress={()=>
            setModalVisible(true)
        }>
            <Text style={styles.addBtnTxt}>+ Add Note</Text>
        </TouchableOpacity>
        {/* Modal */}
        <AddNoteModel modalVisible={modalVisible} setModalVisible={setModalVisible} newNote={newNote} setNewNote={setNewNote} addNote={addNote}/>

    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#fff'
    },
    addBtn:{
        position:'absolute',
        bottom:20,
        left:20,
        right:20,
        right:20,
        backgroundColor:"#007bff",
        padding:15,
        borderRadius:8,
        alignItems:'center',
    },
    addBtnTxt:{
        color:'#fff',
        fontSize:18,
        fontWeight:"bold"
    },
   

})
export default NoteScreen