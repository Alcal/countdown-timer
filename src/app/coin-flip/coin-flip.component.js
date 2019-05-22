// @flow
import React, {Component} from 'react';
import injectStyles from 'react-jss';

type Props = {
  classes: Object,
}

type State = {
  seed: number,
  result: ?number,
}

export class CoinFlipComp extends Component<Props, State> {

  state = {
    seed: -1,
    result: null,
  }

  flip = () => {
    return Math.random() >= 0.5;
  }

  rangeSplit = (x: number, y: number) => {
    if(x === y) {
      return x;
    }
    const middle = Math.floor((y+x)/2);
    return this.flip() ? this.rangeSplit(middle, y) : this.rangeSplit(x, middle);
  }

  getRandomNumber = (n: number) => {
    const result = this.rangeSplit(0, n);
    this.setState({result});
  }

  render() {
    const { classes } = this.props;
    const { seed, result } = this.state;
    return (
      <div className={classes.root}>
        <p>This component generates a random number based on a range from 0 to a possible 1,000,000. It is based on the flip of a coin</p>
        <div className={classes.flip}>
          <span>Seed: <input
            className={classes.seed}
            type="number"
            max={1000000}
            min={0}
            onChange={({target: { value }}) =>
              this.setState({seed: parseInt(value, 10)})}
          /></span>
          <button
            className={classes.button}
            disabled={!(seed >= 0 && seed <= 1000000)}
            onClick={() => this.getRandomNumber(seed)}
          >
            Go random!
          </button>
          <span>Result: {result}</span>
        </div>
      </div>
    );
  }
}

const styles = ({colors}) => ({
  root: {
    width: '100%',
    margin: '20px',
  },
  flip: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  seed: {
    borderWidth: '2px',
    fontSize: 'medium',
    borderStyle: 'none none solid none',
    borderColor: colors.primary,
    margin: '3px',
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: colors.primary,
    borderRadius: '5px',
    borderColor: colors.primary,
    borderWidth: '1px',
    fontSize: 'medium',
    margin: '3px',
    '&:disabled': {
      color: colors.secondary,
      borderColor: colors.secondary,
    }
  }
});

export const CoinFlip = injectStyles(styles)(CoinFlipComp);