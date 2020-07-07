import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import {
  MessageContainer,
  MessageText,
  ChatHead,
  Logo,
  UserChatHead,
} from './Message.styles';

const Message = ({
  show,
  userMessage,
  children,
  userInitial,
  scrollOnEnter,
}) => {
  const ref = useRef(null);

  return (
    <Transition
      mountOnEnter
      in={show}
      onEntered={() => {
        if (scrollOnEnter && ref.current) {
          ref.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
      }}
      timeout={150}
    >
      {state => (
        <MessageContainer ref={ref} userMessage={userMessage} state={state}>
          <MessageText>
            {!userMessage ? (
              <ChatHead>
                <Logo />
              </ChatHead>
            ) : (
              <UserChatHead>{userInitial}</UserChatHead>
            )}
            {children}
          </MessageText>
        </MessageContainer>
      )}
    </Transition>
  );
};

Message.propTypes = {
  children: PropTypes.node.isRequired,
  userMessage: PropTypes.bool,
  show: PropTypes.bool,
  scrollOnEnter: PropTypes.bool,
  userInitial: PropTypes.string,
};

Message.defaultProps = {
  userMessage: false,
  show: false,
  scrollOnEnter: false,
  userInitial: '',
};

export default Message;
