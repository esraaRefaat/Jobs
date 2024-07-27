import React from 'react';
import PropTypes from 'prop-types';
import CustomText from './customText'; // Assuming this is a custom text component
//import './CustomButton.css'; // Create a corresponding CSS file for styles

const CustomButton = ({ text, disabled = false, onPress, containerStyle, leftIcon }) => {
    return (
        <button
            onClick={onPress}
            disabled={disabled}
            //className={`custom-button ${disabled ? 'disabled' : ''}`}
            style={containerStyle}
        >
            <div className="button-content">
                {leftIcon}
                <CustomText
                    color={disabled ? "white" : "white"}
                    size={18}
                    text={text}
                    fontFamily='Roboto-Medium'
                />
            </div>
        </button>
    );
};

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    containerStyle: PropTypes.object,
    leftIcon: PropTypes.element,
};

export default CustomButton;
