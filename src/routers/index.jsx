import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Adote from "../pages/Adote";
import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";
import DoePet from "../pages/DoePet";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PagePet from "../pages/PagePet";
import Contribua from "../pages/Contribua";
import EditPet from "../pages/EditPet";

const Routers = () => {
  return (
    <Switch>
      {/* */}
      <Route exact path="/">
        <Home />
      </Route>

      {/*  */}
      <Route exact path="/cadastro">
        <Cadastro />
      </Route>

      <Route exact path="/contribua">
        <Contribua />
      </Route>

      {/*  */}
      <Route exact path="/login">
        <Login />
      </Route>

      {/* página com a lista de animais */}
      <Route exact path="/adote">
        <Adote />
      </Route>

      {/* página do detalhe do pet */}
      <Route exact path="/adote/:id">
        <PagePet />
      </Route>

      {/* página dos pets que o usuário cadastrou na plataforma (somente logado) */}
      <Route exact path="/user/pets">
        <Dashboard />
      </Route>

      {/* página com tela de cadastro de animal (somente logado) */}
      <Route exact path="/user/doe">
        <DoePet />
      </Route>

      <Route exact path="/user/pet/:id">
        <EditPet />
      </Route>
    </Switch>
  );
};

export default Routers;
