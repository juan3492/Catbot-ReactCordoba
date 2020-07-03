import React from 'react'
import './Chat.css'
import CatItem from './CatItem/CatItem'
import UserItem from './UserItem/UserItem'
import InputChat from './InputChat/InputChat'
import Select from './Select/Select'
import { useState, useEffect } from 'react'
import {doing, aboutMe} from '../../data/Actions'
import Fade from 'react-reveal/Fade'

const Chat = () => {

    let idCounter = 0;

    const [ msg, setMsg ] = useState({});

    const [openSelect, setOpenSelect] = useState(false);

    const [ chat, setChat ] = useState([
        {
            id: 0,
            emitter: 'Cat',
            msg: [ '¡Hola!', '¿Cómo te llamas?' ]
        }
    ]);

    useEffect( ()=>{
        if(chat.length === 2){
            setTimeout(() => firstResponse(msg.msg), 500)
            setMsg({...msg, msg: ''})
            setTimeout(() => setOpenSelect(true), 600)
        }
    }, [chat]);

    function getMessage(value){
        idCounter = idCounter + 1;
        setMsg({
            id: idCounter,
            emitter: 'User',
            msg: value
        })
    };

    function sendMessage (e) { 
        e.preventDefault();
        setChat([ ... chat, msg ])
     };

    function firstResponse (name) { 
        let newChat = {
            id: idCounter + 2,
            emitter: 'Cat',
            msg: [
                '¡Mucho Gusto, ' + name + '!',
                'Mi nombre es Batin, soy un catbot aun en desarollo',
                'Eso quiere decir que aún no estoy preparado para tus preguntas especificas 😸',
                '¡Lo que no significa que no podamos interactuar!',
                'Haceme una pregunta de la lista'
            ]
        }
        if(newChat){
            setChat([...chat, newChat])
        }
     };

    let options = [
        {
            id:'What are you doing?',
            text:'¿Qué haces?'
        },
       /*  {
            id:'Send me a meme',
            text:'Mandame un meme'
        }, */
        {
            id:'Tell me about you',
            text:'Contame sobre vos'
        },
    ]

    const [interaction, setInteractions] = useState([]);

    function handleSelectedOptions(value) {
        let result;
        switch (value) {
            case 'What are you doing?':
                result = doing[Math.floor(Math.random() * doing.length)]
                if(result){
                    setInteractions([...interaction, result.msg ])
                }
                break;
            case 'Tell me about you':
                result = aboutMe[Math.floor(Math.random() * aboutMe.length)]
                if(result){
                    setInteractions([...interaction, result.msg ])
                }
                break;
            default:
                console.log('No hay valores')
                break;
        }
    }

    return (
        <div className="chatbot-chat-container">
            <div className='chatbot-chat-content'>
                <div className='chatbot-chat'>
                    <div className='chatbot-chat-containter-body'>
                        {chat.map( (message, index) => 
                            message.emitter === 'Cat' ? 
                                <CatItem 
                                key={index}
                                text={message.msg} 
                                />
                            :
                                <UserItem 
                                key={index}
                                text={message.msg}
                                />
                        )}
                        { openSelect &&
                            <Select 
                            handleSelectedOptions={handleSelectedOptions}
                            options={options} />
                        }
                        {
                            interaction.length > 0 && interaction.map((interaction, index) => 
                                <>
                                    <Fade left>
                                        <CatItem key={index} text={interaction} />
                                    </Fade>
                                    <Fade rigth>
                                        <Select 
                                        key={index}
                                        handleSelectedOptions={handleSelectedOptions}
                                        options={options}
                                        />
                                    </Fade>
                                </>
                            )
                        }
                    </div>
                    <div className='chatbot-chat-container-input'>
                        <InputChat
                        chat={chat}
                        msg={msg}
                        getMessage={getMessage}
                        sendMessage={sendMessage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Chat