import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddTodo from "./src/app/components/AddTodo";
import TodoList from "./src/app/components/TodoList";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const EditIcon = ({ size, color }: { size: number; color: string }) => (
  <Feather name="edit" size={size} color={color} />
);
const ListIcon = ({ size, color }: { size: number; color: string }) => (
  <Feather name="list" size={size} color={color} />
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{ tabBarIcon: EditIcon }}
          name="タスクを追加"
          component={AddTodo}
        />
        <Tab.Screen
          options={{ tabBarIcon: ListIcon }}
          name="タスク一覧"
          component={TodoList}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
