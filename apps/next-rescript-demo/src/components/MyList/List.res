module MyList = {
  @react.component
  let make = (~children: React.element) => {
    <ul>
      children
    </ul>
  }
}

@react.component
let make = () => {
  <MyList>
    <li> {React.string("Hello")} </li>
  </MyList>
}
