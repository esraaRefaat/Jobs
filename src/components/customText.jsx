import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const CustomText = ({ size, color, fontFamily, text, style, textDecorationLine = "none" }) => {
    const {i18n}=useTranslation()
    const customStyle = {
        fontSize: size,
        color: color,
        fontFamily: fontFamily,
        textDecorationLine: textDecorationLine,
        ...(i18n.language==="ar" ? { direction: 'rtl' } : { direction: 'ltr' }),
        ...style
    };

    return (
        <p style={customStyle}>
            {text}
        </p>
    );
}

CustomText.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    fontFamily: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
    textDecorationLine: PropTypes.string,
    numberOfLines: PropTypes.number
};

export default CustomText;
