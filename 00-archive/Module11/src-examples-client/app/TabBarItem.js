// Listing 3.24 Creating the TabBarItem component
import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

/*
  TabBarItem component is a TouchableHighlight component.
  In the TouchableHighlight component, you check a few props and set styles based on the prop

  When onPress is pressed, set the type of todos among All, Active, and Complete to show.
  
  Set up a correct style for each type:
    If selected is true, you give it the style styles.selected. 
    If border is true, you give it the style styles.border. 
    If type is equal to the title, you give it styles.selected.
  
  In the Text component, you also check to see whether type is equal to title. 
  If so, add a bold style to it.
*/
const TabBarItem = ({ border, title, selected, setType, type }) => (
  <TouchableHighlight
    underlayColor='#efefef'
    onPress={setType}
    style={[
      styles.item, selected ? styles.selected : null,
      border ? styles.border : null,
      type === title ? styles.selected : null ]}>
    <Text style={[ styles.itemText, type === title ? styles.bold : null ]}>
      {title}
    </Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  border: {
    borderLeftWidth: 1,
    borderLeftColor: '#dddddd'
  },
  itemText: {
    color: '#777777',
    fontSize: 16
  },
  selected: {
    backgroundColor: '#ffffff'
  },
  bold: {
    fontWeight: 'bold'
  }
})

export default TabBarItem