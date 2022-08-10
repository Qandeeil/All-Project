import React , {useState,useEffect} from 'react';
import Databases from './DataBases/Databases';

const HomePage = () => {
    const [projects,setProjects] = useState([])
    useEffect(() => {
        setProjects(Databases)
    },[])
    const project = () => {
        return projects.map(i => {
            return(
                <div className='content-project'>
                    <img src={i.image}/>
                    <a href={i.link} target="_blank">{i.name}</a>
                </div>
            )
        })
    }
    return(
        <div className='header-home-page'>
            <div className='title'>
                <h1>React Projects</h1>
            </div>
            <div className='content'>
                <div className='title-content'>
                    <h1>Basic Projects</h1>
                    <span className='line'></span>
                </div>
                <dev className='projects'>
                    {project()}
                </dev>
            </div>
        </div>
    )
}
export default HomePage;