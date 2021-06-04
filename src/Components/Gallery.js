import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye} from '@fortawesome/free-solid-svg-icons'

function Gallery(props) {
    const [images, setImages] = useState([]);
    const [visible, setVisible] = useState(3);

    useEffect(()=>{
        document.title = 'Assesment by Asim'
        axios.get('https://api.unsplash.com/photos',{
            params:{
                client_id: 'yKB-y6-XmYFsrWnOtpCuPaKj8iZe-Lj_HvFZh5hQe8I',
                query: 'london'
            }
        })
        .then(res=>{
            console.log(res.data);
            setImages(res.data)
        })
    }, [])

    function loadMore(){
        setVisible(prev => prev+3)
    }
    return (
        <>
        <div className="gallery">
            {images.slice(0,visible).map(image =>{
                return (
                    <div className="container">
                    <div className="overlay">
                    <a href="#" className="icon" title="Gallery image"> 
                    <FontAwesomeIcon  icon={faEye} style={{color:'#fff'}}/>
                    </a>
                        </div>
                        <img className="gal-image"style={{width:'45vh', height:'30vh',cursor:'pointer'}}  key={image.id} src={image.urls.raw}/>
                </div>
                )
            })}

        </div>
        <button className="load-more" onClick={loadMore}>Load more</button>
        </>
    );
}

export default Gallery;