
import React from 'react';
import './NotFound.css';
function NotFound() {
    return (
        <div className="notfondcontent">

        
        <div class="error-wrapper">
        <div class="error-container">
            <div class="error">
                <div class="error-title">
                    Error
                </div>
                <div class="error-number">
                    404
                </div>
                <div class="error-description">
                    Sorry, The page you were looking for doesn't exist
                </div>
                <ul class="error-actions">
                    <li>
                        <a href="">
                            <i class="pe-7s-left-arrow" data-toggle="tooltip" title="" data-original-title="BACK"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="pe-7s-home" data-toggle="tooltip" title="" data-original-title="HOME"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="pe-7s-mail" data-toggle="tooltip" title="" data-original-title="CONTACT US"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
    )
}

export default NotFound;

