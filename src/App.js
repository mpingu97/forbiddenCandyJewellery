import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Content/Body";

function App() {
  return (
    <div>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Parisienne"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha384-lKuw99fDl3txbU1BRpNF1uMj5P7xjJiIQqFk5K5f5gg1b4WhY5FLlF8tc+7E4EIl"
          crossorigin="anonymous"
        ></link>
      </head>

      <body>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </body>
    </div>
  );
}

export default App;
