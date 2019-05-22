// @flow
import React from 'react';
import injectStyles from 'react-jss';


type ExternalProps = {
  more: boolean,
  onToggle: (more: boolean) => void,
}

type InternalProps = {
  classes: Object,
}

type Props = ExternalProps & InternalProps;

export const MoreLessButtonComp = ({more, onToggle, classes}: Props) => (
  <button className={classes.button} onClick={() => onToggle(!more)}>{more ? 'more' : 'less'}</button>
);

const styles = ({colors}) => ({
  button: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: colors.white,
    borderRadius: '5px',
    borderColor: colors.white,
    borderWidth: '1px',
    fontSize: 'medium',
    margin: '3px',
  }
});

export const MoreLessButton = injectStyles(styles)(MoreLessButtonComp);

