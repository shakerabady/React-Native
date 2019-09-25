import React , { Fragment }from 'react';
import { StyleSheet, Text, View,TextInput,Button, FlatList,Picker} from 'react-native';
import{ListItem,List} from 'react-native-elements'
import axios from 'axios';
import Page2 from './Page2'
import Page3 from './Page3'
class Page1 extends  React.Component {
  state ={ res:"" ,table:1,Keys:[],backdata:[]}
//  newtask=()=>{
//   console.log(this.state.table)
//    axios.get(`http://10.60.158.123:9000/newdata/${this.state.table}`)
//    .then (res=>{
//      this.setState({res:res.data})
     
//    })
  
//  }
 task= async()=>{
  console.log("first",this.state.table) 
  let x=[]
  axios.get(`http://10.60.158.123:9000/newdata/${this.state.table}`)
  .then (res=>{
    this.setState({res:res.data})
    let arr=this.state.res
   
    arr.filter(element => {
  element.Time.filter(ele=>{
    console.log("ele",ele) 
    for (const key in ele) {
     if(ele[key]===true)
   x.push(ele) 
  }})

   
 })

   })
   .then( ()=>{
    this.setState({Keys:x})   
    console.log("timee",this.state.Keys)
    // let y=this.state.Keys
    // console.log("Key",Object.keys(y))
   }) 
 }
 book=(e,table)=>{
  let x=[]
  console.log("page3---booking",e,table)
  axios.get(`http://10.60.158.123:9000/book/${e}/${table}`)
  .then(res=>{
    console.log("page333333",res.data)
    this.setState({res:res.data})
    let arr=this.state.res
   
    arr.filter(element => {
  element.Time.filter(ele=>{
    for (const key in ele) {
    ele[key]===true
   x.push(ele) 
  }})

   
 })

   })
   .then( ()=>{
    this.setState({Keys:x})   
    console.log("timee",this.state.Keys)
    // let y=this.state.Keys
    // console.log("Key",Object.keys(y))
   }) 
  
 }
  render(){
   
  return (
    <Fragment>
    <View style={styles.container}>
      <Text>Page1</Text>
     
      <Button onPress={() => this.props.navigation.navigate('Page3')} title="Page3"/>
      
     {/* <Button onPress={this.newtask} title="the Appoiment"/> */}
     <Button onPress={this.task} title="the Appoiment"/>
     <Picker
     style={styles.p}
      selectedValue = {this.state.table}
      onValueChange={(itemValue ,itemIndex)=>this.setState({table:itemValue})}> 
        <Picker.Item label = "1 Person" value = "1" />
        <Picker.Item label = "2 Persons" value = "2" />
        <Picker.Item label = "4 Persons " value = "4" />
   </Picker>
 { this.state.Keys.map((elem,i)=> <Page3 el={Object.keys(elem)} key={i} table={this.state.table} book={this.book}/>)} 
   {/* <FlatList data={this.state.res}Object.keys(obj)
   renderItem={({item})=>console.log("flatlist",item.Time) }
   keyExtactor={item => item._id}
   /> */}
    </View>
  
    </Fragment>
  );
}
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  p:{width:150}
});
export default Page1;    
