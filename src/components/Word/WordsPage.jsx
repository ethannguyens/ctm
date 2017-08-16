import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as wordActions from '../../actions/wordActions';
import WordTable from './WordTable';
import {browserHistory} from 'react-router';

class WordsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {words} = this.props;

    return (
      <WordTable
        words={words}
      />
    )
  }
}

WordsPage.propTypes = {
  words: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    words: state.words
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(wordActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WordsPage);

