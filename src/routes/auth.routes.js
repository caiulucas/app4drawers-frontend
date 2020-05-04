import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Feed from '../pages/Feed';
import Post from '../pages/Post';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
    <AuthStack.Screen name="Feed" component={Feed} />
    <AuthStack.Screen name="Post" component={Post} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
