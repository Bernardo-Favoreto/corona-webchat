import React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";

class App extends React.Component {

  state = {};

  constructor(props) {
    super(props);

    const { configuration } = props;
    FlexWebChat.Manager.create(configuration)
      .then(manager => this.setState({ manager }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { manager, error } = this.state;

    FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage = false;

    if (manager) {
      return (
        <div>
          <div> Olá, meu site </div>
          <FlexWebChat.ContextProvider manager={manager}>
            <FlexWebChat.RootContainer />
          </FlexWebChat.ContextProvider>
        </div>
      );
    }

    if (error) {
      console.error("Failed to initialize Flex Web Chat", error);
    }

    return null;
  }
}

export default App;
