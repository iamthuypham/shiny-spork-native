import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons'; 

// import { Link } from 'react-router-dom';
// import injectSheet from 'react-jss';
// import { Value } from 'slate';
// import Plain from 'slate-plain-serializer';

// // components
import NoteContainer from '../notecontainer/NoteContainer';
// import NoteContent from '../notecontent/NoteContent.js';

// // icons
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faPlus from '@fortawesome/fontawesome-free-solid/faPlus';
// import faTrash from '@fortawesome/fontawesome-free-solid/faTrashAlt';
// import faHome from '@fortawesome/fontawesome-free-solid/faHome';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    marginTop: (Platform.OS === 'android') ? StatusBar.currentHeight : 24,
    backgroundColor: 'white'
  }, 
  noteContent: {
    flex: 10,
  },
  toolBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
})

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideMenuOpen: false,
      // notes: [],
  //     _id: null,
  //     note_title: Plain.deserialize('Note title'),
  //     note_content: Plain.deserialize('Note Content')
    }
  //   this.createNote = this.createNote.bind(this)
  }
  openSideMenu = () =>{
    this.setState({
      isSideMenuOpen: true
    })
  }

  // componentDidMount() {
  //   this.getNotes()
  // }
  
  // handleSelect = (_id) => {
  //   let selectedNote = this.state.notes.find(note => note._id === _id)
  //   this.setState({
  //     _id,
  //     note_title: Value.fromJSON(selectedNote.note_title),
  //     note_content: Value.fromJSON(selectedNote.note_content)
  //   })
  // }

  // handleChange = ({value}, inputType) => {
  //   this.setState({
  //     [inputType]: value
  //   })
  // }

  // handleSave = (_id) => {
  //   this.updateNote(_id, 'save')
  // }

  // // handleDelete
  // handleDelete = (_id) => {
  //   const { notes } = this.state;
  //   // loop through `this.state.notes`
  //   for (let note of notes) {
  //     if (_id === note._id) {
  //       // delete note where the HTML `id` matches `note._id`
  //       this.updateNote(note._id, 'delete');
  //     }
  //   }
  // }

  // getNotes = () => {
  //   fetch('/api/all')
  //   .then((res) => res.json())
  //   .then((notes) => this.setState({ notes }))
  // }

  // createNote = () => {
  //   let newNote = {
  //     note_title: Plain.deserialize('[New note title]'),
  //     note_content: Plain.deserialize(''),
  //   }

  //   fetch('/api/new', { 
  //     method: 'POST', 
  //     body: JSON.stringify(newNote),
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //   .then(res => {
  //     if (!res.ok) {
  //       return res.json()
  //       .then(error => console.log(error.message))//to-do: alert user with error message
  //     }

  //     return res.json()
  //     .then(data => {
  //       // Refresh notes after creating a new note successfully
  //       this.getNotes()
  //       // Select the new note, ready for edit
  //       this.setState({
  //         _id: data._id,
  //         note_title: Value.fromJSON(data.note_title),
  //         note_content: Value.fromJSON(data.note_content)
  //       })
  //     })
      
  //   })
  // }
  // updateNote = (_id, action) => {
  //   let req = {
  //     action: action,
  //     data: {
  //       _id,
  //       note_title: this.state.note_title,
  //       note_content: this.state.note_content
  //     } 
  //   }
  //   fetch(`/api/note`, { 
  //     method: 'POST', 
  //     body: JSON.stringify(req),
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //   .then(res => {
  //     if (!res.ok) {
  //       return res.json()
  //       .then(error => console.log(error.message))//to-do: alert user with error message
  //     }
  //     // Refresh notes after saving/deleting a note successfully
  //     this.getNotes()
  //   })
  // }
  render() {
    let { 
      isSideMenuOpen,
      // notes, _id, note_title, note_content 
    } = this.state;
    // const { classes } = this.props;
    return (
      <SideMenu menu={<NoteContainer 
        // notes={notes} handleSelect={this.handleSelect} handleDelete={this.handleDelete}
      />} isOpen={isSideMenuOpen}>
        <View style={styles.main}>
          <View style={styles.noteContent}/>
          {/* <NoteContent title={note_title} content={note_content} handleChange={this.handleChange} handleSave={this.handleSave.bind(this, _id)}/> */} */}
          
          <View style={styles.toolBar}>
            <Icon
                name='list-alt'
                type='font-awesome'
                color='#c9c9c9'
                size={23}
                onPress={() => this.openSideMenu()}
            />
            <Icon
                name='plus'
                type='font-awesome'
                color='#2ebd60'
                reverse
                size={30}
            />
            <Icon
                name='trash-o'
                type='font-awesome'
                color='#c9c9c9'
                size={25}
            />
          </View>
        </View>
      </SideMenu>
    );
  }
}

export default Demo;
