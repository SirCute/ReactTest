import { connect } from "react-redux"
import HsitoryActivity from "./HsitoryActivity"

const History = ({ history }) => {
    if (history) {
        return (history.map((activity, index) => {
            return <HsitoryActivity activity={activity} key={index}/>
        }))
    }
    return <></>
}

const mapStateToProp = state => ({
    history: state.activity.history
})

export default connect(mapStateToProp, {})(History);