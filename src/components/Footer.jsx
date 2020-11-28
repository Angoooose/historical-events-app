import '../styles/Footer.css';

export default function Footer(props) {
    const { headerTheme, isPortrait, isVerySmallScreen } = props;

    let fontSize = 'normal-font';
    
    if (isPortrait && !isVerySmallScreen) {
        fontSize = 'small-font';
    } else if (isVerySmallScreen) {
        fontSize = 'very-small-font';
    }

    return (
        <div className="footer" style={ {backgroundColor: headerTheme} }>
            <div className={`footer-text ${fontSize}`}>
                All events are gathered using the <a href="https://history.muffinlabs.com/">Today in History</a> API.
            </div>
        </div>
    )
}