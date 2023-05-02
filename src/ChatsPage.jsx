import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId="f687bdcb-a1b7-4d42-baa4-a33f7a559993"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}
export default ChatsPage