const Activity = ({ activity }) => {
  if (activity && Object.keys(activity).length > 0) {
  return  <div className="activity">
    <h2><a href={activity.link}>{ activity.activity }</a></h2>
    <p>Price: { activity.price }</p>
    <p>Type: { activity.type }</p>
    <p>Participants: { activity.participants }</p>
  </div>;
  }
  return <></>;
};

export default Activity;
