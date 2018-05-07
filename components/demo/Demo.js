import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { Button, Icon } from 'react-native-elements';
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
  root: {
    flex: 1,
    width: '100%',
    marginTop: (Platform.OS === 'android') ? StatusBar.currentHeight : 24,
  }, 
  noteContent: {
    flex: 10,
  },
  toolBar: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // padding: '1rem 0',
    // boxShadow: '1px 0 2px #e2e2e2',
  },
  iconPrimary: {
    backgroundColor: '#2ebd60',
    // color: 'white',
    // borderRadius: '50%',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: '0.5rem'
  },
  iconSecondary: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: '0.5rem'
  }
})

class Demo extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     notes: [],
  //     _id: null,
  //     note_title: Plain.deserialize('Note title'),
  //     note_content: Plain.deserialize('Note Content')
  //   }
  //   this.createNote = this.createNote.bind(this)
  // }

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
    // let { notes, _id, note_title, note_content } = this.state;
    // const { classes } = this.props;
    return (
      <SideMenu menu={<NoteContainer 
        // notes={notes} handleSelect={this.handleSelect} handleDelete={this.handleDelete}
      />}>
        <View style={styles.root}>
          {/* <View style={styles.noteContent}/> */}
          {/* <NoteContent title={note_title} content={note_content} handleChange={this.handleChange} handleSave={this.handleSave.bind(this, _id)}/> */} */}
          <Button                
              leftIcon={{
                name:'arrow-back',
                size: 50,
                color: 'red'
              }}
            />
          {/* <View style={styles.toolBar}>
            <View style={styles.iconPrimary}>
            
            </View>
          </View> */}
        </View>
      </SideMenu>
    );
  }
}

export default Demo;
