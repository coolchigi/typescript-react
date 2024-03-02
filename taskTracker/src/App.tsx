import './App.css'

let name: string;
let age: number;
let isStud: boolean;
let hobbies: string[];

type Person={
  name: string;
  age: number | string;
}

let person: Person ={
  name: "Chigo",
  age: 21
};

let person2: Person ={
  name: "Chigo",
  age: "Twenty-two"
};

let lotsOfPeople: Person[];

function printName(name: string){
  console.log(name)
}

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
       
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
