import React, { useEffect, useContext } from "react";
import { Grid } from "semantic-ui-react";

// Components
import ActivityList from "./ActivityList";
import LoadingComponent from "../../../app/layout/LoadingComponent";

// Mobx
import { observer } from "mobx-react-lite";
import ActivityStore from "../../../app/stores/ActivityStore";

const ActivityDashboard: React.FC = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading activities" />;
  
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
