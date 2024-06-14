import { useState,useEffect} from 'react';
import './IpadProPage.scss'
import Carousel from './carousel/Carousel.jsx';

export default function IpadProPage(){
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const [isVisible3, setIsVisible3] = useState(false);

    useEffect(()=>{
        function handleScroll(){
            const scrollThreshold=1000;

            if(window.scrollY>scrollThreshold){
                setIsVisible(true)
            }
            else{
                setIsVisible(false)
            }

            if(window.scrollY>1050){
                setIsVisible1(true)
            }
            else{
                setIsVisible1(false)
            }
            if(window.scrollY>1100){
                setIsVisible2(true)
            }
            else{
                setIsVisible2(false)
            }
            if(window.scrollY>2300){
                setIsVisible3(true)
            }
            else{
                setIsVisible3(false)
            }


        }
        window.addEventListener(`scroll`,handleScroll)
        return ()=>{
            window.removeEventListener(`scroll`,handleScroll)
        }
    },[])
    const images = [
        "https://w0.peakpx.com/wallpaper/338/503/HD-wallpaper-iphone-circles-iphone-12-pro-original-iphone.jpg" ,
        "https://9to5mac.com/wp-content/uploads/sites/6/2022/09/iPhone-14-wallpapers.jpg?quality=82&strip=all&w=1600",
       "https://w0.peakpx.com/wallpaper/338/503/HD-wallpaper-iphone-circles-iphone-12-pro-original-iphone.jpg" ,
      ];


    return (<div className='homepage-container'>
       <div className='ipadpro-container'>
       <img className='ipadpro-img' src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b06fe14-9358-476e-bbae-a1d341c10bda_1384x614.png" alt="" />
        <p>From $999 or $83.25/mo. for 12 no</p>
        <button>Buy</button>
       </div>
       <div className='getthehighlights-container'>
       <div className='hiddenelements-container' id="hiddenelements-container">
       <h1 className={isVisible?`gethighlights`:`hidegethighlights`} >Get the highlights</h1>
        <a className={isVisible1?'watchthevideo-container':`hiddenvideo`} href="#">Watch the video</a>
        <a className={isVisible2?'watchtheevent-container':`hiddenevent`} href="#">Watch the event</a>

       </div>
       </div>
       <Carousel images={images}/>
       <div className='takecloserlook-container'>
       <h1 className={isVisible3?`takecloserlook`:`hidetakecloserlook`} >take a closer look</h1>
       </div>

       

    </div>)
}