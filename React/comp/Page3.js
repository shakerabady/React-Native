import React , { Fragment }from 'react';
import { StyleSheet, Text, View,TextInput,Button, FlatList,Picker} from 'react-native';
import axios from 'axios';
class Page3 extends  React.Component {
  state ={backdata:[]}

//  book=(e,table)=>{
//   console.log("page3---booking",e,table)
//   axios.get(`http://10.60.158.123:9000/book/${e}/${table}`)
//   .then(res=>{
//     console.log("page333333",res.data)
//     this.setState({backdata:res.data})
//   })
//  }
  render(){
   
  return (
    <Fragment>
    <View >
      {console.log("page3",this.props.el)}
      <Text>Page3</Text>
      <Text>{this.props.el}</Text>
      <Button onPress={this.props.book.bind(this,this.props.el[0],this.props.table)} title="book"/>
    
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
  }
});
export default Page3;