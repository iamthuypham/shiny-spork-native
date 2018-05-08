import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Menu } from 'react-native';
// import PropTypes from 'prop-types';
// import injectSheet from 'react-jss';

// // Components
// import Note from './Note';

const styles = {
  root: {
    display:'flex',
    alignItems: 'stretch',
    flex: 1,
    marginTop: (Platform.OS === 'android') ? StatusBar.currentHeight : 24,
    backgroundColor: '#f2f2f2'
  },
}

class NoteContainer extends Component {
  render() {
    // const { notes, handleSelect, handleDelete, classes } = this.props;
    return (
      <View style={styles.root}>
        <Text>Hello</Text>
      </View>
      // <div className={classes.root}>
      // {notes.map(note => (
      //   <Note
      //     key={note._id}
      //     id={ note._id }
      //     title={note.note_title}
      //     handleSelect={handleSelect.bind(this, note._id)}
      //     // handleDelete={handleDelete.bind(this, note._id)}
      //     handleDelete={ handleDelete }
      //   />
      // ))}
      // </div>
    )
  }
}

// NoteContainer.propTypes = {
//   notes: PropTypes.array.isRequired
// }

export default NoteContainer;
