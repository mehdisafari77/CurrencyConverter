import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Alert,
  Keyboard,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
} from "react-native";

const currencyPerDollar = {
  POUND: 0.74,
  EURO: 0.87,
  CANDOLLAR: 0.80,
  KUWAITDINAR: 0.30,
  BITCOIN: 0.000015,
  YEN: 113.85,
  RUPEE: 74.37,
  IRNTOMAN: 30.00,
  DOGECOIN: 0.26
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    };
  }

  buttonPressed = currency => {
    if (this.state.inputValue === "") {
      Alert.alert("Enter some value");
    }
    let result = parseFloat(this.state.inputValue) * currencyPerDollar[currency];

    this.setState({ resultValue: result.toFixed(2) });
  };

  render() {
    let Image_Http_URL ={ uri: 'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'};
    return (
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
      <SafeAreaView style={styles.container}>
        
        <View style={styles.screenView}>
          <View style={styles.mainContainer}>
            <View>
              <Image
                style = {{height: 200, resizeMode : 'stretch' }}
                source= {Image_Http_URL}
              />
            </View>
            <View style={styles.resultContainer}>
              <Text style={styles.resultValue}>
                {this.state.resultValue}
              </Text>
            </View>
            <View style={styles.inputcontainer}>
              <TextInput
              style={styles.input}
              selectionColor= "#fff"
              keyboardType= "numeric"
              placeholder= "Enter Value"
              value={this.state.inputValue}
              onChangeText= { inputValue => 
                this.setState({
                inputValue
              })}
              />
            </View>
            <View style={styles.converterButtonContainer}>

              <TouchableOpacity 
              onPress={ () => this.buttonPressed("POUND") }
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>POUND</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={ () => this.buttonPressed("EURO") }
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>EURO</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={ () => this.buttonPressed("CANDOLLAR") }
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>CANDOLLAR</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={ () => this.buttonPressed("KUWAITDINAR") }
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>KUWAITDINAR</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={ () => this.buttonPressed("BITCOIN") }
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>BITCOIN </Text>
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={ () => this.buttonPressed("YEN") }
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>YEN</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={ () => this.buttonPressed("RUPEE") }
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>RUPEE</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={ () => this.buttonPressed("IRNTOMAN") }
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>IRNTOMAN</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              onPress={ () => this.buttonPressed("DOGECOIN") }
              style={styles.converterButton}>
                <Text style={styles.converterButtonText}>DOGECOIN</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#51E1ED",
    },
    screenView: {
      flex: 1,
      margin: 5
    },
    mainContainer: {
      flex: 1
    },
    resultContainer: {
      flex: 0.5,
      height: 70,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#c1c1c1",
      backgroundColor: "#0A79DE",
      borderWidth: 2
    },
    resultValue: {
      fontSize: 30,
      fontFamily: "Times New Roman",
      fontWeight: "bold",
      color: "#fff"
    },
    inputcontainer: {
      flex: 0.5,
      height: 70,
      marginTop: 10,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#c1c1c1",
      borderWidth: 2,
      backgroundColor: "#0A79DE"
    },
    input: {
      fontFamily: "Times New Roman",
      fontSize: 30,
      color: "#fff",
      fontWeight: "bold",
    },
    converterButtonContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 10,
      borderColor: "#c1c1c1",
      borderWidth: 2
    },
    converterButton: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0A79DE",
      height: 100,
      borderColor: "#c1c1c1",
      borderWidth: 2,
      width: "33.3%",
    },
    converterButtonText: {
      fontFamily: "Times New Roman",
      color: "#fff",
      fontSize: 15,
      fontWeight: "bold"
    }
});
