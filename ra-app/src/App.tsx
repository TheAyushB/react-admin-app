import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PosterList } from "./components/PosterList";
import { PosterEdit } from "./components/PosterEdit";
import { PosterCreate } from "./components/PosterCreate";

const dataProvider = jsonServerProvider("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="categories" list={ListGuesser} edit={EditGuesser}
    // create={PosterCreate} 
    />
    <Resource name="posters" list={PosterList} edit={PosterEdit} create={PosterCreate} />
  </Admin>
);

export default App;