import React from 'react';

const Footer= () => {
    const root = {
         marginTop: '20px',
    }

    return (
        <footer style={root}>
            &copy; Uniat inicio mi arco de villano
            {/* &copy; Angel Peña {new Date().getFullYear()} */}
        </footer>
    );

}

export default Footer;