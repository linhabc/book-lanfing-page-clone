import React from 'react';

import './index.css';

const VideoReview = () => {

    return (
        <section className="video-review section-spacing text-center" id="Video">
            <div className="container">
                <header>
                <h2>Check Out Our Video Review</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adip scing elit mauris</h3>
                </header>
                <div className="row">
                    <div className="col-md-12">
                        <div className="embed-responsive embed-responsive-16by9"> 
                        <iframe title="videoReview" className="embed-responsive-item" src="http://player.vimeo.com/video/81209488?title=0&amp;byline=0&amp;portrait=0&amp;color=3498db"></iframe>
                        {/* <!--For youtube--> 
                        <!-- <iframe className="embed-responsive-item" src="http://www.youtube.com/embed/xxxxxxxxxxx?rel=0"></iframe> -->  */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default VideoReview;