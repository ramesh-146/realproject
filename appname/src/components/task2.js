import React from "react";
import user from '../image/user1.png';
import facebook from '../image/facebook.jpg'
import instagram from '../image/instagram.webp'
import twitter from '../image/twitter.png'
import ramesh from '../image/1000094184.jpg'
import flower from '../image/flower.jpg'
import './task2.css';

export function Task(){
    return(
       <div className="continer1">
         <div>
            <img id="img9" src={flower}></img>
            <h4 className="ram">Ramesh</h4>
            <img id="img1" src={user}></img>
            <h4 className="did">Digital Madia Expert</h4>
            <h4 className="hom">Home</h4>
            <img id="img2" src={facebook}></img>
            <img id="img3" src={instagram}></img>
            <img id="img4" src={twitter}></img>
            <h4 className="fre">Free Digital Marketing <br></br>Webinar.</h4>
            <h4 className="unl">Unlock Marketing Secreats that Wort</h4>
            <h4 className="reser">Reserve My Spot</h4>
         </div> 
       </div>
    )
}

export function Task1(){
    return(
       <div className="continer2">
         <div>
            <img id="img5" src={ramesh}></img>
            <h4 className="hi">Hi, <br></br>I'M Ramesh</h4>
            <h4 className="med">Digital Media Expert With <br></br>12+ years of professional experiece.</h4>
            <h6 className="exp">Digital Media Expert With Unlock Marketing Secreats <br></br> that Wort free Digital Marketing webinar.digital <br></br> madia expert reserve my spot.</h6>
            <h4 className="you">You Will Learn How To </h4>
            <h4 className="one">01</h4>
            <h4 className="two">02</h4>
            <h4 className="thre">03</h4>
            <h6 className="wit1">Digital media expert with <br></br> unlock marketing secreats  <br></br> wort free digital marketing</h6>
            <h6 className="wit2">Digital media expert with <br></br> unlock marketing secreats <br></br> wort free digital marketing</h6>
            <h6 className="wit3">Digital media expert with <br></br> unlock marketing secreats <br></br> wort free digital marketing</h6>
            <h4 className="spot">Reserve My Spot</h4>
         </div>
       </div>
    )
}

export function Task2(){
    return(
        <div className="continer3">
          <div>
            <h4 className="sign1">Sign up for all the latest tips,</h4>
            <h4 className="sign2">Tricks,and trends</h4>
            <h4 className="ent">Enter your email here</h4>
            <h4 className="sent">Send</h4>
            <h5 className="terry1">500 Terry A Franch Bred.</h5>
            <h5 className="terry2">Ser franches CA 123456 USA</h5>
            <h5 className="ramesh"> 6374445881 / ramesh@gmail.com</h5>
            <img id="img6" src={facebook}></img>
            <img id="img7" src={instagram}></img>
            <img id="img8" src={user}></img>
          </div>
        </div>
    )
}

export function Task3(){
    return(
      <div className="continer4">
        <div>
            <h4 className="yes1">Yes, I Want to join the Webinar,</h4>
            <h4 className="yes2">Sign Me up!</h4>
            <h4 className="my">Reserve My Spot</h4>
            <img id="img10" src={flower}></img>
        </div>
      </div>
    )
}