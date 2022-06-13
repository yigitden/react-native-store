import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderColor:'#bdbdbd',
        borderWidth:1,
        margin:10,
        backgroundColor:'#eeee',
        flexDirection:'row' 
    },
    image:{
        width:100, 
        minHeight:100,
        resizeMode:'contain',
        backgroundColor:'white'
    },
    body_container:{
        flex:1, 
        padding:5,
        justifyContent:'space-between'
    },
    title:{
        fontWeight:'bold',
        fontSize:17,
        color:'black'
    },
    price:{
        textAlign:'right',
        fontSize:15
    }
})