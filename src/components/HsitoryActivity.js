import { connect } from "react-redux"
import { setShowActivity } from "../actions/activityActions"

const HsitoryActivity = ({ activity, setShowActivity }) => {
  return (
    <div className="historyActivity">
        <div>{activity.activity}</div>
        <div className="show" onClick={() => {setShowActivity(activity)}}>Show</div>
    </div>
  )
}

export default connect(() => ({}), { setShowActivity })(HsitoryActivity)