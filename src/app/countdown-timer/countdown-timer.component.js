// @flow
import React from 'react';
import injectStyles from 'react-jss';
import { Counter } from 'components/counter.component';

type Props = {
  classes: Object,
};

type State = {
  ticker: ?IntervalID,
  endDate: number,
  seconds: ?number,
  minutes: ?number,
  hours: ?number,
  days: ?number,
}

class CountdownTimerComp extends React.Component<Props, State> {

  constructor(props) {
    super(props);
    const endDate = Date.parse('07 Jun 2019 17:00:00 GMT-5')
    const { days, hours, minutes, seconds } = this.getTimeDeltas(endDate);
    this.state = {
      ticker: null,
      endDate,
      seconds,
      minutes,
      hours,
      days
    };
  }

  getTimeDeltas: Object = (endDate) => {
    const delta = new Date(endDate - new Date());
    const dayConstant = 86400000;
    const minuteConstant = 3600000;
    const days = Math.floor(delta/ dayConstant);
    const hours = Math.floor((delta% dayConstant) / minuteConstant);
    const minutes = Math.floor((delta% minuteConstant) / 60000);
    const seconds = Math.floor((delta% 60000) / 1000);
    return { days, hours, minutes, seconds };
  }

  computeCount = () => {
    const { endDate } = this.state;
    const { days, hours, minutes, seconds } = this.getTimeDeltas(endDate);
    this.setState({seconds, minutes, hours, days});
  };

  componentDidMount() {
    const ticker = setInterval(this.computeCount, 1000);
    this.setState({ticker});
  }

  componentWillUnmount() {
    if(this.state.ticker)
      clearInterval(this.state.ticker);
  }

  render(){
    const { classes } = this.props;
    const { seconds, minutes, hours, days, endDate } = this.state;
    return (
      <div className={classes.root}>
        <p>This component displays the time remaining until {`${new Date(endDate).toDateString()} at ${new Date(endDate).toTimeString()}`}</p>
        <div className={classes.counters}>
          <Counter count={days} label="Days"/>
          <Counter count={hours} label="Hours"/>
          <Counter count={minutes} label="Minutes"/>
          <Counter count={seconds} label="Seconds"/>
        </div>
      </div>

    );}
}

const styles = () => ({
  root: {
    width: '100%',
    margin: '20px',
  },
  counters: {display: 'flex',
    direction: 'row',
    width: '100%',
    justifyContent: 'center',
  },
});

export const CountdownTimer = injectStyles(styles)(CountdownTimerComp);
