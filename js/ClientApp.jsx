const ce = React.createElement

const MyTitle = function(props) {
  return (
    ce('div', null,
      ce('h1', { style: { color: props.color } }, props.title)
    )
  )
}

const MyFirstComponent = function() {
  return ce('div', null,
    ce(MyTitle, {title: 'Game of Thrones', color: 'YellowGreen'}),
    ce(MyTitle, {title: 'Seinfeld', color: 'GreenYellow'}),
    ce(MyTitle, {title: 'Stranger Things', color: 'LimeGreen'}),
    ce(MyTitle, {title: 'Rick & Morty', color: 'peru'})
  )
}

ReactDOM.render(
  ce(MyFirstComponent),
  document.getElementById('app')
)
