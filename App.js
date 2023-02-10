import { StyleSheet,Text,View,Image,SafeAreaView,TouchableHighlight, TouchableOpacity } from "react-native";
import Voice from "@react-native-community/voice"
import { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome"
export default function index() {
  const[pitch,setPich]=useState("")
  const[error,setError]=useState("")
  const[end,setEnd]=useState("")
  const[started,setStarted]=useState("")
  const[results,setResults]=useState([])
  const[partialResults,setPartialResults]=useState([])
  const onSpeechStart=(e)=>{
     console.log("onSpeedchStart",e);
     setStarted(e)
     
  }
  const onSpeechEnd = (e) => {
    console.log('onSpeechEnd: ', e);
  };
  
  const onSpeechError = (e) => {
    console.log('onSpeechError: ', e);
  };
  
  const onSpeechResults = (e) => {
    console.log('onSpeechResults: ', e);
  };
  
  const onSpeechPartialResults = (e) => {
    console.log('onSpeechPartialResults: ', e);
  };
  const startRecognizing=async ()=>{
    try{
      await Voice.start("en-US");
      setPich("");
      setError("");
      setStarted(""),
      setResults(""),
      setPartialResults(""),
      setEnd("")
    }catch(e){
       console.log(e);
    }
  }
  useEffect(()=>{
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;

  })
  return (
    <View style={{width:"100%"}}>
    <Text style={{fontSize:20,color:"#8A2BE2",fontWeight:"700",alignSelf:"center",marginTop:30}} >Welcome to React Native Voice!</Text>
    <Text style={{fontSize:18,color:"#7FFF00",fontWeight:"600",alignSelf:"center",marginTop:30}}>
      Press the icon micro on bottom.
    </Text>
    <TouchableOpacity style={{width:"100%",alignSelf:"center",display:"flex",
    justifyContent:"center",alignItems:"center",marginTop:40}} onPress={startRecognizing}>
     <Icon name="microphone" size={40} />
    </TouchableOpacity>
     <Text>TextVoice : {started}</Text>
     {/* <Text >Results</Text> */}
    {/* {this.state.results.map((result, index) => {
      return (
        <Text key={`result-${index}`} style={styles.stat}>
          {result}
        </Text>
      );
    })} */}
    {/* <Text>Partial Results</Text> */}
    {/* {this.state.partialResults.map((result, index) => {
      return (
        <Text key={`partial-result-${index}`} style={styles.stat}>
          {result}
        </Text>
      );
    })} */}
    {/* <Text>{`End: ${this.state.end}`}</Text> */}
    {/* <TouchableHighlight onPress={onSpeechEnd}>
      <Text>End</Text>
      <Image style={styles.button} source={require('./button.png')} />
    </TouchableHighlight> */}
    {/* <TouchableHighlight onPress={this._stopRecognizing}>
      <Text>Stop Recognizing</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={this._cancelRecognizing}>
      <Text>Cancel</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={this._destroyRecognizer}>
      <Text>Destroy</Text>
    </TouchableHighlight> */}
  </View>
  )
}
