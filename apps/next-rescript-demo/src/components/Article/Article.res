@react.component
let make = (~title: string, ~visitorCount: int, ~children: React.element) => {
  let visitorCountMsg = "You ar visitor number:" ++ Belt.Int.toString(visitorCount)

  <div>
    <div> {React.string(title)} </div>
    <div> {React.string(visitorCountMsg)} </div>
    children
  </div>
}