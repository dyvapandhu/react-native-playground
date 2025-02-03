import { View, Text } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useState } from 'react';
import Slider from '@react-native-community/slider'

export default function HomeScreen() {
  const [value, setValue] = useState<number>(1);

  const renderTiles = () => {
    const size = 15;
    return Array.from({ length: value}).map((_, index) => {
      return <View
      key={index}
      style={{
        width: size,
        height: size,
        borderWidth: 0.5,
        borderColor: 'white',
        backgroundColor: '#3268a8'
      }}
    />
    })
  }

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
      <Text style={{textAlign: 'center'}}>
        <Text style={{fontWeight: 500}}>{value}</Text> Tiles Rendered
      </Text>
      <Slider
        value={1}
        minimumValue={1}
        maximumValue={1000}
        step={1}
        onValueChange={newValue => {
          setValue(newValue);
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          flexWrap: 'wrap',
        }}>
        {renderTiles()}
      </View>
    </ParallaxScrollView>
  );
}
