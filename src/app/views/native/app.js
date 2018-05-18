import React from "react";
import { AppRegistry } from 'react-native';
import { MemoryRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Root } from "native-base";
import { Font, AppLoading } from "expo";

import App from "./layouts/app";
import configureStore from "../../state/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class RootHtml extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
    }

    render() {

		 if (this.state.loading) {
		  return (
		    <Root>
		      <AppLoading />
		    </Root>
		  );
		}
       return <ReduxProvider store={ reduxStore }>
        <Router>
            <App />
        </Router>
    	</ReduxProvider>
    }
}

export default RootHtml;


