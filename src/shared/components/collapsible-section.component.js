// @flow
import React, {Component, Fragment} from 'react';
import injectStyles from 'react-jss';
import { MoreLessButton } from './more-less-button.component';

type ExternalProps = {
  children: any,
  isDefaultCollapsed: boolean,
  title: string,
}

type InternalProps = {
  classes: Object,
}

type Props = ExternalProps & InternalProps;

type State = {
  isCollapsed: boolean,
}

export class CollapsibleSectionComp extends Component<Props, State>{

  state = {
    isCollapsed: this.props.isDefaultCollapsed,
  }

  setCollapse = (isCollapsed: boolean) => {
    this.setState({isCollapsed});
  }

  render() {
    const {children, title, classes } = this.props;
    const { isCollapsed } = this.state;
    return (
      <Fragment>
        <div className={classes.header}><span className={classes.title}>{title}</span> <MoreLessButton more={isCollapsed} onToggle={(collapsed) => this.setCollapse(collapsed)} /></div>
        {!isCollapsed && children}
      </Fragment>
    );}
}

const styles = ({colors}) => ({
  header: {
    width: '100%',
    backgroundColor: colors.secondary,
    padding: '3px',
    margin: '1px',
  },
  title: {
    fontSize: 'x-large',
    color: colors.white,
  }
});

export const CollapsibleSection = injectStyles(styles)(CollapsibleSectionComp);
