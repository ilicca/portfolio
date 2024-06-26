import './index.css'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'

const Contact = () => {
    const strArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']
    const [letterClass, setLetterClass] = useState('text-animate')

    const refForm = useRef()

    const sendEmail = () => {
        alert("Message successfully sent!")
        window.location.reload(false)
    }

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={strArray} idx={15} />
                    </h1>

                    <p>
                        I am interested in freelance opportunities - especially ambibitous on large projects. However,
                        if you have other request or question, don't hestiate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="text" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required>

                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact