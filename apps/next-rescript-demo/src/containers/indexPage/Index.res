module P = {
  @react.component
  let make = (~children) => <p className="mb-2">children</p>
}

let default = () => {
  // let numbers = [1, 2, 3, 4, 5];

  // let items = Belt.Array.map(numbers, (number) => {
  //   <div key={Belt.Int.toString(number)}> {React.int(number)} </div>
  // })

  <div>
    <h1 className="text-3xl font-semibold">{"What is this about?"->React.string}</h1>
    <p>
      {React.string(`This is a simple template for a Next project using Rescript`)}
    </p>
    <h2 className="text-2xl font-semibold mt-5">{React.string("Quick Start")}</h2>
    // {React.array(items)}
  </div>
}
