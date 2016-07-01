var tours = [
  {
    id: 1,
    start: 'Thursday June 2',
    end: 'Sunday June 5',
    year: '2016',
    name: 'The memorial tournament presented by nationwide',
    region: 'TPC Southwind',
    city: 'Memphis, TN',
    purse: '8,500,000',
    winningShare: '1,530,000',
    fedezPoints: '500'
  },
  {
    id: 2,
    start: 'Monday July 27',
    end: 'Thursday July 30',
    year: '2016',
    name: 'The some other tournament presented by good people',
    region: 'TPC Southwind',
    city: 'New York, NY',
    purse: '7,300,000',
    winningShare: '2,120,000',
    fedezPoints: '600'
  }
];

var rounds = [
  {
    id: 1,
    value: '1 & 2'
  },
  {
    id: 2,
    value: '2 & 3'
  },
  {
    id: 3,
    value: '3 & 4'
  }
];

var App = React.createClass({

  getInitialState: function () {
    return {
      activeTourId: 1,
      activeRoundId: 2
    };
  },

  handleTourClick: function (tour) {
    this.setState({
      activeTourId: tour.id
    });
  },

  handleRoundClick: function (round) {
    this.setState({
      activeRoundId: round.id
    });
  },

  render: function () {

    return (
      <div className="app">
        <div className="container">

          <div className="app__top">
            <div className="app__left">
              <h3 className="title">
                golf <span> hole in one</span>
              </h3>
            </div>

            <div className="app__center">
              <Steps />
            </div>

            <div className="app__right">
              <Btn>Exit</Btn>
              <Btn color="is-grey">Next</Btn>
            </div>
          </div>

          <div className="app__bottom">
            <div className="app__left">
              <h3 className="tournaments__title">tournaments</h3>
              <Tournaments
                tours={this.props.tours}
                activeTourId={this.state.activeTourId}
                onTourClick={this.handleTourClick}/>
            </div>
            <div className="app__right">
              <Rounds
                rounds={this.props.rounds}
                activeRoundId={this.state.activeRoundId}
                onRoundClick={this.handleRoundClick}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <App tours={tours} rounds={rounds}/>,
  document.getElementById('content')
);

