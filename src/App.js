import './App.css';
import Button from './components/Button';
import Activity from './components/Activity';
import { connect } from 'react-redux';
import { fetchRandomActivity } from './actions/activityActions';
import History from './components/History';
import Filter from './components/Filter';

const App = ({ fetchRandomActivity, activity, filter, error }) => {
  const getRandomActivity = () => {
    fetchRandomActivity(filter);
  }
  return (
    <div className="App">
      <Button title='Ramdomize activity' onclick={getRandomActivity}/>
      {error.error ? <h2 className='error'>{ error.error }</h2> : <></>}
      <Filter />
      <Activity activity={activity} />
      <div className='history'>
        <h2>History</h2>
        <History />
      </div>
    </div>
  );
}

const mapStateToProp = state => ({
  activity: {
    ...state.activity.activity
  },
  filter: state.activity.filter,
  error: state.activity.error,
});

export default connect(mapStateToProp, { fetchRandomActivity })(App);
