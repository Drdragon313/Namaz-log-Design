import React, { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Switch,
  ImageBackground,
} from "react-native";

//import CalendarPicker from the package we installed
import CalendarPicker from "react-native-calendar-picker";


import background from "./assets/medina.jpeg";

const Home = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === "END_DATE") {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };
  const SwitchButton = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.titleStyle}>Namaz Log</Text>
          <View style={styles.CalendarStyle}>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={false}
              minDate={new Date(1, 1, 1)}
              maxDate={new Date()}
              weekdays={["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]}
              months={[
                "January",
                "Febraury",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ]}
              previousTitle="Previous"
              nextTitle="Next"
              todayBackgroundColor="#FFFB38"
              selectedDayColor="#5BAFFF"
              scaleFactor={375}
              textStyle={{
                fontFamily: "Cochin",
                color: "#000000",
              }}
              onDateChange={onDateChange}
            />
          </View>

          <View style={styles.textStyle}>
            <Text style={styles.textStyle}>Selected Date :</Text>
            <Text style={styles.textStyle}>
              {selectedStartDate ? selectedStartDate.toString() : ""}
            </Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
    <View style={{
      flexGrow: 1,
    }}>
     <Text style={styles.T1}>
              fajr  
    </Text>
    </View>
    <View style={{
      
      width: 200,
    }}>
      <SwitchButton style={styles.fajr} />      
    </View>
  </View>


  <View style={{flex: 1, flexDirection: 'row'}}>
    <View style={{
      flexGrow: 2,
    }}>
     <Text style={styles.T2}>
              zohar
             
            </Text>
    </View>
    <View style={{
      width: 200,
    }}>
      <SwitchButton style={styles.zohar}/>      
    </View>
  </View>


  <View style={{flex: 1, flexDirection: 'row'}}>
    <View style={{
      flexGrow: 2,
    }}>
     <Text style={styles.T3}>
              Asr
             
            </Text>
    </View>
    <View style={{
      width: 200,
    }}>
      <SwitchButton style={styles.Asr}/>      
    </View>
  </View>


  <View style={{flex: 1, flexDirection: 'row'}}>
    <View style={{
      flexGrow: 2,
    }}>
     <Text style={styles.T4}>
              Maghrib
             
            </Text>
    </View>
    <View style={{
      width: 200,
    }}>
      <SwitchButton style={styles.maghrib}/>      
    </View>
  </View>

  <View style={{flex: 1, flexDirection: 'row'}}>
    <View style={{
      flexGrow: 2,
    }}>
     <Text style={styles.T5}>
              Isha
             
            </Text>
    </View>
    <View style={{
      width: 200,
    }}>
      <SwitchButton style={styles.isha}/>      
    </View>
  </View>






        
        </ImageBackground>
      </View>
        </SafeAreaView>

    
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  textStyle:{
    fontWeight:"bold",
  },
  CalendarStyle: {
    backgroundColor: "white",
    opacity: 0.8,
    borderRadius: 10,
    marginLeft: 10,
    margin: 5,
    marginRight: 10,
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 30,
    margin: 20,
    fontWeight:"bold",
    color:"white"
  },
  fajr: {
    flex: 1,
    marginLeft: 3,
  },

  zohar: {
    flex: 1,
    marginLeft: 3,
  },

  Asr: {
    flex: 1,
    marginLeft: 3,
  },
  Maghrib: {
    flex: 1,
    marginLeft: 3,
  },
  Isha: {
    flex: 1,
    marginLeft: 3,
  },
 
  T1: {
    fontSize: 24,
    marginLeft:6, 
   color:"white",
   fontWeight:"bold",
  },
  T2: {
    fontSize: 24,
    marginLeft: 6,
    color:"white" ,
    fontWeight:"bold",
  },
  T3: {
    fontSize: 24,
    marginLeft: 6,
    color:"white" ,
    fontWeight:"bold",
  },
  T4: {
    fontSize: 24,
    marginLeft: 6, 
    color:"white",
    fontWeight:"bold",
  },
  T5: {
    fontSize: 24,
    marginLeft: 6,
    color:"white" ,
    fontWeight:"bold",
  },
  
  image: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
});
