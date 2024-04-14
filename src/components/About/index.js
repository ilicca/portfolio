import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faCss3, faGit, faHtml5, faJava, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 't', ' ', 'm', 'e']}
                        idx={15} />
                </h1>
                <p>Aleksandar is a dedicated and innovative Android developer with a passion for creating user-centric, high-performance applications. He has honed his skills in crafting robust and elegant solutions in the Android ecosystem.
                </p>
                <p>Proficient in Java and Kotlin, he has a keen eye for detail, ensuring that his code is not only efficient but also maintainable and scalable. His expertise spans across various domains, from UI/UX design to implementing complex functionalities, leveraging the latest tools and frameworks. </p>
                <p>His collaborative nature and strong problem-solving abilities make him a valuable asset in team environments, where he enjoys brainstorming innovative solutions and contributing to a collective vision. His commitment to staying updated with the latest trends and best practices in Android development enables him to deliver cutting-edge solutions aligned with industry standards. </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAndroid} color="#EFD81D" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faJava} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faHtml5} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faCss3} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faReact} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGit} color="#EC4B28" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About