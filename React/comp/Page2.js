import React , { Fragment }from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import Im from '../Sc/Im'
class Page2 extends  React.Component {
  state = { }

  word=(e)=>{
    this.setState({Word:e.target.value})
   }
  render(){
   
  return (
    <Fragment>
    <View style={styles.container}>
      <Text>Page2</Text>
      
      <Im title="hala"/>
      <Im title="Mom"/>
      <Button onPress={() => this.props.navigation.navigate('Img')} title="img"/>
      <Button onPress={() => this.props.navigation.navigate('Page1')} title="Page1"/>
    </View>
    
    </Fragment>
  );
}
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Page2;