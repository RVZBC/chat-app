import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

export default function App () {
    return (
        <ChatEngine
            height="100vh"
            projectID="c5bda561-68dd-448f-86fd-fb6d60f62f60"
            userName="user1"
            userSecret="user1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}