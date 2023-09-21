import React from "react";
import { View, Text, StyleSheet, Button, Animated, Easing, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const INPUT_RANGE_START = 0;
export const INPUT_RANGE_END = 1;
export const OUTPUT_RANGE_START = -281;
export const OUTPUT_RANGE_END = 0;
export const ANIMATION_TO_VALUE = 1;
export const ANIMATION_DURATION = 25000;

export default function BackgroundAnimation() {
    const initialValue = 0;
    const translateValue = useRef(new Animated.Value(initialValue)).current;
  
    useEffect(() => {
      const translate = () => {
        translateValue.setValue(initialValue);
        Animated.timing(translateValue, {
          toValue: ANIMATION_TO_VALUE,
          duration: ANIMATION_DURATION,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start(() => translate());
      };
  
      translate();
    }, [translateValue]);
  
    const translateAnimation = translateValue.interpolate({
      inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
      outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
    });}

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text>Tela Home</Text>

            <Button 
            onPress={ () => navigation.navigate('Sobre')}
            color='green'
            title="Ir para Sobre"
            rodrigoEmpresario
            />
             <Button 
            onPress={ () => navigation.navigate('Vendas')}
            color='purple'
            title="Ir para Vendas"
            />
            
            <AnimetedImage 
            resizeMode="repeat" 
            style={[styles.background,{
                transform: [
                    {
                      translateX: translateAnimation,
                    },
                    {
                      translateY: translateAnimation,
                    },
                  ],
            }]}
            source={backgroundImage} />

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly'

    },
    rodrigoEmpresario:{
        marginBottom: 10
    },
    backgroundFunny: {
        position: 'absolute',
        width: 1200,
        height: 1200,
        top: 0,
        opacity: 0.2,
        transform: [
          {
            translateX: 0,
          },
          {
            translateY: 0,
          },
        ],      
      }, 
  });