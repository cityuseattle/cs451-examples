// Listing 3.23 Creating the TabBar component
/*
    This component takes two props: setType and type. Both are passed down from the main App component.
    There are three types of TabBar items: All, Active, and Complete
    There are three titles for TabBar items: All, Active, and Complete
*/
import React from 'react'
import { View, StyleSheet } from 'react-native'
import TabBarItem from './TabBarItem'

const TabBar = ({ setType, type }) => (
  <View style={styles.container}>
    <TabBarItem  type={type} title='All'
      setType={() => setType('All')} />
    <TabBarItem type={type} border title='Active'
      setType={() => setType('Active')} />
    <TabBarItem type={type} border title='Complete'
      setType={() => setType('Complete')} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dddddd'
  }
})

export default TabBar