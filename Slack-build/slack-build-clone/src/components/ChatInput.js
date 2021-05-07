import React, { useState } from 'react';
import styled from "styled-components";
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import MicIcon from '@material-ui/icons/Mic';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

function ChatInput({ sendMessage }) {


    const [input, setInput] = useState("");


    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input)
        setInput("")
    }


    return (
        <Container>
            <InputContainer>
                <form>
                    <input 
                        onChange={(e)=>setInput(e.target.value)}
                        type="text" 
                        value={input}
                        placeholder="Message here..." />
                    <SendButton 
                        type="submit"
                        onClick={send}>
                        <Send />
                    </SendButton>
                </form>
                <Icons>
                    <span>
                        <FormatBoldIcon/>
                        <FormatItalicIcon/>
                        <InsertEmoticonIcon/>
                        <FormatListNumberedIcon/>
                        <FormatListBulletedIcon/>
                    </span>
                    <span>
                        <AlternateEmailIcon/>
                        <AttachFileIcon/>
                        <CameraAltIcon/>
                        <MicIcon/>
                    </span>
                    
                </Icons>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form{
        display: flex;
        height: 42px;
        align-items: center;
        justify-content: space-between;
        padding-left: 10px;
        border-bottom: 1px solid gray;

        input{
            flex: 1;
            border: none;
            font-size: 13px;
        }

        input:focus{
            outline: none;
        }
    }
`

const SendButton = styled.button`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    cursor: pointer;
    border: none;

    .MuiSvgIcon-root{
        width: 18px;
    }

    :hover {
        background: #148567
    }
`

const Send = styled(SendIcon)`
    color: #D9D9D9;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1px;
    padding: 0px 5px;
    cursor: pointer;

`