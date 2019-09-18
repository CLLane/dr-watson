import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/Header';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import ChatBox from '../ChatBox/ChatBox';
import { removeUser, hasErrored, addMessage, clearMessage } from '../../actions';
import { endConversation } from '../../apiCalls';
import './App.css';

export class App extends Component {

  addMessage = (message, isUser) => {
    const { messages } = this.props;
    this.props.addMessage({ messages: [...messages, { message, isUser }]});
  }

  clearMessages = () => {
    this.props.clearMessage({ messages: [] });
  }

  signOut = async () => {
    try {
      await endConversation();
      this.props.removeUser();
      this.clearMessages();
    } catch({ message }) {
      this.props.hasErrored(message);
    }
  }

  render() {
    const { user } = this.props;
    const { messages } = this.props;
    return (
      <div className="App">
        <Header signOut={this.signOut} />
        {!user && <WelcomeModal addMessage={this.addMessage} />}
        {user && <ChatBox addMessage={this.addMessage} messages={messages.messages} />}
      </div>
    );
  }
}

export const mapStateToProps = ({ user, messages, message }) => ({
  user,
  messages,
  message
});

export const mapDispatchToProps = dispatch =>  bindActionCreators({ removeUser, hasErrored, addMessage, clearMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
