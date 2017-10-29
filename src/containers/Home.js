import Home from '../components/Home/Home';
import { connect } from 'react-redux';
import { homeActions } from '../actions';

const mapStateToProps = ({home}) => home;
const mapDispatchToProps =  dispatch => ({
  fetchData: searchInput => homeActions.fetchData(dispatch, searchInput),
  onInputChange: e => homeActions.onInputChange(dispatch, e.target.value),
  onKeyPress: (e, searchInput) => {
    if (e.charCode === 13) {
      e.preventDefault();
      homeActions.fetchData(dispatch, searchInput);
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
