import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack
  screenOptions={{
    headerStyle:{
      backgroundColor:"#ff9c00",

    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontSize:20,
      fontWeight:'bold'
    },
    headerTitleAlign:"center",
    contentStyle:{
      paddingHorizontal:10,
      paddingTop:10,
      backgroundColor:'#fff',
    }


  }}>
    {/* <Stack.Screen name="index" options={{headerShown:false}}/> */}
    <Stack.Screen name="index" options={{title:'Home'}}/>
    <Stack.Screen name="users" options={{title:'Users Page'}}/>
  </Stack>
  
}
export default RootLayout