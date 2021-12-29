import React from "react";
import { Text, SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import RNDateTimeSelector from "react-native-date-time-scroll-picker";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const borderWidth = 30;
const setTimerWidthHeight = wp(75);
const selectedItemTextSize = 30;
const wrapperHeight = setTimerWidthHeight - (borderWidth * 2);


const addZeroToDigits = (digit) => {
  if (digit) {
    let zeroAdded = `0${digit}`;
    return zeroAdded.substring(zeroAdded.length - 2);
  } else {
    return `00`;
  }

};

const data = [
  {
    number: 11,
    c: "C",
    o: "o",
  }, {
    number: 22,
    c: "C",
    o: "o",
  }, {
    number: 32,
    c: "C",
    o: "o",
  }, {
    number: 42,
    c: "C",
    o: "o",
  }, {
    number: 45,
    c: "C",
    o: "o",
  }, {
    number: 36,
    c: "C",
    o: "o",
  }, {
    number: 57,
    c: "C",
    o: "o",
  },
];


const dataSet = {
  data: {
    firstColumn: [...Array(24).keys()].map((item, idx) => {
      return { value: addZeroToDigits(item), index: idx };
    }),
    secondColumn: [...Array(60).keys()].map((item, idx) => {
      return { value: addZeroToDigits(item), index: idx };
    }),
  },
  initials: [30, 18, 3],
};

const App = () => {

  const seperatorComponentRendererOne = () => {
    return <Text style={{ fontSize: selectedItemTextSize, lineHeight: setTimerWidthHeight * 0.15 }}>:</Text>;
  };
  const seperatorComponentRendererTwo = () => {
    return <Text style={{ fontSize: selectedItemTextSize, lineHeight: setTimerWidthHeight * 0.15 }} />;
  };

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#ffffff" }}>
      <View style={styles.container}>
        {/*<RNDateTimeSelector*/}
        {/*  dataSet={dataSet}*/}
        {/*  onValueChange={(value) => {*/}
        {/*    console.log("data on users end :   ... ", value);*/}
        {/*  }}*/}
        {/*  containerStyle={{*/}
        {/*    alignSelf: "center",*/}
        {/*    borderWidth: 0,*/}
        {/*    borderColor: "transparent",*/}
        {/*    borderRadius: 0,*/}
        {/*    height: wp(50.5),*/}
        {/*    // width: wp(20)*/}
        {/*  }}*/}
        {/*  firstSeperatorComponent={seperatorComponentRendererOne}*/}
        {/*  secondSeperatorComponent={seperatorComponentRendererTwo}*/}
        {/*  llPickerOptions={{*/}
        {/*    itemHeight: 70,*/}
        {/*    wrapperHeight: wrapperHeight,*/}
        {/*    wrapperColor: "rgba(0,0,0,0)",*/}
        {/*    highlightColor: "rgba(0,0,0,0.9)",*/}
        {/*  }}*/}
        {/*  textStyle={{*/}
        {/*    fontSize: selectedItemTextSize,*/}
        {/*    fontFamily: null,*/}
        {/*  }}*/}
        {/*  textColor={{*/}
        {/*    primary: "rgba(0,0,0,1.0)",*/}
        {/*    secondary: "rgba(0,0,0,0.1)",*/}
        {/*    other: "rgba(0,0,0,0.1)",*/}
        {/*  }}*/}
        {/*/>*/}
      </View>
      <View style={{
        ...styles.container,
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 1,
        overflow: 'hidden',
        shadowColor: 'grey',
        shadowRadius: 1,
        shadowOpacity: 1,
        height: 150
      }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          {data.map(item => {
            return (
              <>
                <View style={styles.text}>
                  <View>
                    <Text style={{ fontSize: 50, fontWeight: "bold", color: `#000000`,  }}>{item.number}</Text>
                    <Text style={styles.df}>{item.o}</Text>
                  </View>
                 <View>
                   <Text style={styles.degreee}>{item.c}</Text>
                 </View>
                </View>
              </>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: 300,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: `center`,
    backgroundColor: "#ffffffff",
    marginTop: 10
  },
  co: {

  },
  df: {
    position: "absolute",
    width: 8.49,
    height: 23.49,
    top: -360,
    left: 59.31,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000'
  },
  text: {
    width: 140,
    flexDirection: 'row',
    borderColor: 'white',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
  fle1x: {
    flex: 1,
  },
  degreee: {
    fontSize: 49,
    color: `#696868`,
    marginLeft: 5,
  },
});






