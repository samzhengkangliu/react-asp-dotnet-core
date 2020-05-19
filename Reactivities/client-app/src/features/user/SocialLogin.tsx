import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { Button, Icon } from "semantic-ui-react";
import { observer } from "mobx-react-lite";

interface IProps {
  loading: boolean;
  fbCallback: (response: any) => void;
}

const SocialLogin: React.FC<IProps> = ({ loading, fbCallback }) => {
  return (
    <div>
      <FacebookLogin
        appId="892269624578602"
        fields="name, email, picture"
        callback={fbCallback}
        render={(renderProps: any) => (
          <Button
            loading={loading}
            onClick={renderProps.onClick}
            type="button"
            fluid
            color="facebook"
          >
            <Icon name="facebook" />
            Login with Facebook
          </Button>
        )}
      />
    </div>
  );
};

export default observer(SocialLogin);
