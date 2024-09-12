import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import Splash from './screens/Splash';
import Options from './screens/Options';
import BuyTickets from './screens/BuyTickets';
import Scan from './screens/Scan';
import PaymentFailed from './screens/PaymentFailed';
import PaymentSuccess from './screens/PaymentSuccess';
import PrintInvoice from './screens/PrintInvoice';

const Stack = createNativeStackNavigator();

function App() {
  const linking = {
    prefixes: ["kiosk://"],
    config: {
      initialRouteName: "Home" as const,
      screens: {
        Home: "home",
        Options: "options",
        BuyTickets:"buy_tickets",
        Scan:'scan',
        PaymentFailed:'payment_failed',
        PaymentSuccess:'payment_success',
        PrintInvoice:'print'
      },
    },
  };
  return (
    <Provider store={store}>
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Splash} />
        <Stack.Screen name="Options" component={Options} />
        <Stack.Screen name="BuyTickets" component={BuyTickets} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="PaymentFailed" component={PaymentFailed} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
        <Stack.Screen name="PrintInvoice" component={PrintInvoice} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
