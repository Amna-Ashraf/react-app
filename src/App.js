import Wrapper from "./components/wrapper";
import Screen from "./components/screen";
import ButtonBox from "./components/buttonBox";
import Button from "./components/button";
import CalcProvider from "./context/calcContext";
import NavBar from "./components/navBar";


const btnValues = [
  ["C","+-","%","/"],
  [7,8,9,"x"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="],
];

function App() {
  return (
    <CalcProvider>
      <NavBar></NavBar>
      <Wrapper>
      <Screen />
        <ButtonBox>
        {btnValues.flat().map((btn,i )=>(
          <Button
          value={btn}
          key={i}
          />
        ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>

  );
}

export default App;
