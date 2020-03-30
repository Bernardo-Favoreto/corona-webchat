import React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";

class App extends React.Component {

  state = {};

  constructor(props) {
    super(props);
    FlexWebChat.MainHeader.defaultProps.showImage = false;
    FlexWebChat.MainContainer.defaultProps.height = "500px"
    FlexWebChat.MainContainer.defaultProps.width = "350px"
    FlexWebChat.MainHeader.defaultProps.titleText = "Fale com o CoronaChat!"
    FlexWebChat.EntryPoint.defaultProps.tagline = "Fale com o CoronaChat!"
    FlexWebChat.MessagingCanvas.defaultProps.memberDisplayOptions = {
      yourDefaultName:"Usuário",
      theirDefaultName:"CoronaChat",
      yourFriendlyNameOverride: false,
      theirFriendlyNameOverride: false
    }


    const { configuration } = props;
    FlexWebChat.Manager.create(configuration)
      .then(manager => {
        manager.strings.WelcomeMessage = "Bem-vindo ao CoronaChat :)";
        manager.strings.PredefinedChatMessageAuthorName = "CoronaChat";
        manager.strings.PredefinedChatMessageBody = "Pode digitar qualquer coisa pra gente começar a conversar!";
        manager.strings.Today = "HOJE";
        manager.strings.Yesterday = "ONTEM";    
        manager.strings.InputPlaceHolder = "Digite sua mensagem"    
        

        this.setState({ manager })})
      .catch(error => this.setState({ error }));
  };


  render() {
    const { manager, error } = this.state;
    if (manager) {
      return (
        <div>
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

