import './assets/sass/App.scss';
import { Header } from './components/layout/Header';
import Container from "@mui/material/Container";
import { Routers } from "./routes";

function App() {
    return (
        <>
            <Header />

            <Container maxWidth='xl'>
                <Routers />
            </Container>

        </>
    );
}

export default App;
