module Document = {
  type t
  @val external document: t = "document"
  @set external setTitle: (t, string) => unit = "title"
}

module Page = {
  @react.component
  let make = () => {
    let (count, setCount) = React.useState(_ => 0)
    let (text, setText) = React.useState(_ => "")

    React.useEffect(() => {
      open Document
      document -> setTitle(`You clicked ${Belt.Int.toString(count)} times`)
      None
    })

    React.useEffect1(() => {
      if text === "" {
        setText(_ => "test")
      }
      None
    }, [text])

    let onClick = (_evt) => {
      setCount(prev => prev + 1)
    }

    let onClickText = (_evt) => {
      setText(_ => "Hanseung")
    }

    let msg = "You clicked" ++ Belt.Int.toString(count) ++ "times"

    <div>
      <p>{React.string(msg)}</p>
      <button onClick> {React.string("Click me")} </button>
      <div>
        {React.string("Hello" ++ text)}
      </div>
      <button onClick={onClickText}> {React.string("Click change name!!")} </button>
    </div>
  }
}

let default = () => {
  <Page />
}
