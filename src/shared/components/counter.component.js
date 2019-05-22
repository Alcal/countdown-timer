// @flow
import React from 'react';
import injectStyles from 'react-jss';

type ExternalProps = {
  count: number,
  label: string
};

type InternalProps = {
  classes: Object,
}

type Props = InternalProps & ExternalProps;

const CounterComp = ({ count, label, classes }: Props) => (
  <div className={classes.root}>
    <span className={classes.count}>{count}</span>
    <span className={classes.label}>{label}</span>
  </div>
);

const styles = () => ({
  root: {
    borderColor: 'lightGray',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '5px',
    width: '80px',
    height: '80px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    margin: '3px',
  },
  count: {
    fontSize: 'xx-large',
    alignSelf: 'center',
  },
  label: {
    color: 'gray',
    fontSize: 'small',
    alignSelf: 'center',
  }
});

export const Counter = injectStyles(styles)(CounterComp);
