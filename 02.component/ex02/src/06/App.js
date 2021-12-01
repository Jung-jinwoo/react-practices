import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCeckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export default function() {
    return (
        <div className={styles.App}>
            
            {/* solid */}
            <FontAwesomeIcon icon={faBell} />
        </div>
    )
}