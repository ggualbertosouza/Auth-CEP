import { ThemeProvider } from "styled-components"
import Cep from "./components/Cep/Cep"
import { theme } from "./style/Theme"
import { GlobalStyle } from "./style/Global"


function App() {

  return (
    <ThemeProvider theme={theme}>


      <Cep />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
