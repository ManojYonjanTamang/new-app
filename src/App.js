import "./App.css";
import OnlineStatus from "./components/OnlineStatus";
// import Greetings from "./components/Greetings";
// import * as imported from "./components/Calculation";
// import ImportExport, {
//   name,
//   surname,
//   nationality,
//   ExportFunction,
// } from "./components/ImportExport";
// import Cards from "./components/Cards";
// import Cdata from "./components/Cdata";
// import fakedata from "./components/fakedata";

// import WFHmain from "./components/WFHmain";
// import WFHcomparison from "./components/WFHcomparison";

// import HookUseState from "./components/HookUseState";
// import HookUseState1 from "./components/HookUseState1";

// import Counter from "./components/Counter";
// import ChangeColor from "./components/ChangeColor";
// import ClearContent from "./components/ClearContent";

// import Clock from "./components/Clock";

// import LoginForm from "./components/LoginForm ";
// import MyForm from "./components/MyForm";
// import MyForm2 from "./components/MyForm2";

// import RegisterForm from "./components/RegisterForm";
// import FormPractice from "./components/FormPractice";
function App() {
  // const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // const mapNumbers = numbers.map((number, i) => {
  //   return (
  //     <>
  //       <div key={math.random()}>
  //         {number % 2 === 0 ? `${number}=even` : `${number}=odd`}
  //       </div>
  //       <br />
  //     </>
  //   );
  // });

  // const names = ["ram", "shyam", "hari", "sita"];
  // const concat = names.map((name, i) => {
  //   return <div key={Math.random()}>{name.slice(1)}</div>;
  // });

  // const person = "Rajiv" ? "Handsome" : "Single";

  // const needBlue = false;

  return (
    <>
      <OnlineStatus />

      {/* <UseRefDOM />
      <hr />
      <UseRefRender /> */}

      {/* <FormPractice /> */}
      {/* <RegisterForm /> */}

      {/* <MyForm2 /> */}
      {/* <MyForm /> */}
      {/* <LoginForm /> */}
      {/* <Clock />
      <ClearContent />
      <ChangeColor />
      <Counter /> */}

      {/* <HookUseState />
      <HookUseState1 /> */}

      {/* <WFHmain />
      <WFHcomparison number="5" /> */}

      {/* {mapNumbers}
      <div
        style={{
          backgroundColor: needBlue ? "#04293A" : "#D21312",
          padding: "25px",
          color: "white",
        }}
      >
        {person}
      </div>
      <br />
      {concat}
      <div>
        {Cdata.map((val, i) => {
          return (
            <Cards
              key={math.random()}
              imgsrc={val.imgsrc}
              title={val.title}
              description={val.description}
            />
          );
        })}
      </div>

      {names.map((name) => {
        return <>{name}</>;
      })}

      <hr />
      {names.map((name, i) => {
        const capitalizedName = name.toUpperCase() + name.slice(1);
        return <div key={math.random()}>{capitalizedName}</div>;
      })}

      <div>
        {fakedata.map((val, i) => {
          return <li key={math.random()}>{val.title}</li>;
        })}
      </div>

      <Greetings />

      <ol>
        <li>
          <ExportFunction />
        </li>
        <hr />
        <li>{ExportFunction()}</li>
        <li>
          <ImportExport />
        </li>
        <li>{name}</li>
        <li>{surname}</li>
        <li>{nationality}</li>
      </ol>

      {imported.default()}
      {imported.Addition(5, 4)}
      <br />
      {imported.Subtraction(5, 4)}
      <br />
      {imported.Multiplication(5, 4)} */}
    </>
  );
}

export default App;
