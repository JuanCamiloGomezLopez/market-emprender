import { Landingpage } from "./Pages/Landingpage";
import { Myroutes } from "./Routes/ROUTES.JSX";
import { Light } from "./styles/Global-styles";
import { ThemeProvider } from "styled-components";

function App() {
 
  return (
    <ThemeProvider theme={Light}>

    <Myroutes >

      <Landingpage />
     
    </Myroutes>

    </ThemeProvider>
  );
}

export default App;
