import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image}
        source={require('./assets/img/imgPrin.jpg')}
      />
      <View style={styles.form}>
        <Text style={styles.titleForm}>Ingresar</Text>
        <View style={styles.formInputImg}>
          <Image
            source={require('./assets/img/email.png')}
          />
          <TextInput
            style={styles.textInput}
            placeholder=' Correo Electronico '
          />
        </View>
        <View style={styles.formInputImg}>
          <Image
            source={require('./assets/img/security.png')}
          />
          <TextInput
            style={styles.textInput}
            placeholder=' Contraseña '
          />
        </View>

        <Button
          title='Ingresar'
          onPress={() => ToastAndroid.show('Acceso permite', ToastAndroid.SHORT)}
        />

        <View style={styles.formEtiRegister}>
          <Text style={styles.text}>¿No tienes cuenta?</Text>
          <Text
            tyle={styles.textLink}
            onPress={() => ToastAndroid.show('Registratet', ToastAndroid.SHORT)}
          >Registrate</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'

  },
  image: {
    width: '100%',
    height: '60%'
  },
  form: {
    width: '100%',
    height: '40%',
    backgroundColor: "while",
    position: 'absolute',
    bottom:0,
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    padding:30
  },
  titleForm: {
    fontSize:30,
    fontWeight:'bold'
  },
  textInput: {
    fontSize:16,
    flex:1,
    borderBottomWidth:1,
    borderBottomColor:'#FA8072',
    marginBottom:20
  },
  textInput: {
    fontSize:16,
    flex:1,
    borderBottomWidth:1,
    borderBottomColor:'#FA8072',
    marginBottom:20
  },
  formInputImg:{
    flexDirection:'row',
    marginTop:50
  },
  formEtiRegister:{
    flexDirection:'row',
    justifyContent: 'center',
    marginTop:20
  },
  text:{
    fontSize:20
  },
  textLink:{
    fontSize:20,
    marginLeft:30,
    fontStyle:'italic',
    color:'orange',
    borderBottomWidth:0.5,
    borderBottomColor:'orange',
    fontWeight:'bold'
  }
  
  

  
});
