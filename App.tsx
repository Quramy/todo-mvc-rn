import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import AddTodo from "./src/app/components/AddTodo";
import TodoList from "./src/app/components/TodoList";

const Tab = createBottomTabNavigator();

const EditIcon = ({ size, color }: { size: number; color: string }) => (
  <Feather name="edit" size={size} color={color} />
);
const ListIcon = ({ size, color }: { size: number; color: string }) => (
  <Feather name="list" size={size} color={color} />
);

const EditorStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="新しいタスク" component={AddTodo} />
    </Stack.Navigator>
  );
};

const ListStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="タスク一覧" component={TodoList} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{ tabBarIcon: EditIcon }}
          name="タスクを追加"
          component={EditorStack}
        />
        <Tab.Screen
          options={{ tabBarIcon: ListIcon }}
          name="タスク一覧"
          component={ListStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
