import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Restaurent from "./components/food/Restaurent";
import UseState from "./components/hooks/UseState";
import UseEffect from "./components/hooks/UseEffect";
import UseReducer from "./components/hooks/UseReducer";
import UserData from "./components/user-info/userData";
import Card from "./components/name-card/card";
import TodoList from "./components/todo/todoList";
import MultipleInput from "./components/forms/multipleInput";
import Main from "./components/UseContext/main";
import PokemonApi from "./components/pokemon/PokemonApi";
import RoutingEx from "./components/routing/RoutingEx";
import Accordian from "./components/accordian/Accordian";
import Tabs from "./components/Tabs/Tabs";
import Split from "./components/splitting/split";
import ExpenseItem from "./components/project-expence/ExpenseItem";
import ProjectLogin from "./components/project-login/ProjectLogin";
import ProjectFood from "./components/project-food/ProjectFood";
import Movies from "./components/fetch-api/Movies";
import CustomHook from "./components/custom-hooks/CustomHook";
import Task from "./components/custom-hooks/using-http/Task";
import Forms from "./components/form-validations/Forms";
import ReactRedux from "./components/react-redux/ReactRedux";
import ReduxToolkit from "./components/react-redux-toolkit/ReduxToolkit";
import ProductShop from "./components/project-redux-toolkit/ProductShop";

const App = () => {
  return <ProjectFood />;
};

export default App;
