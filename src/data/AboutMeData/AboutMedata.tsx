import React from 'react';

import { faEnvelope, faGlobe, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface AboutMeItem {
  title: string;
  icon: JSX.Element;
}

const AboutMeData: AboutMeItem[] = [
    {
        title: "Colombia - Medellin",
        icon: (
            <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
        )
    },
    {
        title: "Español",
        icon: (
            <FontAwesomeIcon icon={faLanguage} className="w-5 h-5" />
        )
    },
    {
        title: "santyalzateo05@gmail.com",
        icon: (
            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
        )
    }
];

export default AboutMeData;