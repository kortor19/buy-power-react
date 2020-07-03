import React from 'react';
import '../App.css';


export const Testimonials =() => {
    return (
        <div>
  <div>
    <div className="showcase">
      <div className="showcase-bg" />
      <h3>What People are Saying</h3>
      <div className="contain testimonials">
        <div className="testimonial">
          <div className="text">@buypowerng...wow!!! You have saved a lot of us from queuing and time wasting. This is what is called process improvement
          </div>
          <div className="author">Uthman Balarabe</div>
        </div>
        <div className="testimonial">
          <div className="text">@buypowerng Fantastic service. Flawless payment/user experience. Thanks</div>
          <div className="author">Ralph Otowo</div>
        </div>
        <div className="testimonial">
          <div className="text">@buypowerng exceptional customer service. guys, keep it up!</div>
          <div className="author">Ifesinachi Okechukwu</div>
        </div>
      </div>
      <div>
        <div className="phone bg-img lazy" data-src="." data-was-process="true" >
        </div>
        <div className="cta">
          <span>Download Our App</span>
          <a target="_blank" rel="noopener noreferrer" href="/" className="android bg-img lazy" data-src="" data-was-process="true" > </a>
          <a target="_blank" rel="noopener noreferrer" href="/" className="android bg-img lazy" data-src="../img/google-play.PNG" data-was-process="true"> 
          </a>
        </div>
      </div>
    </div>
  </div> 
</div>

    )
}
