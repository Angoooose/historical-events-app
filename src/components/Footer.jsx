import '../styles/Footer.css';

export default function Footer(props) {
    const { headerTheme } = props;

    return (
        <div className="footer" style={ {backgroundColor: headerTheme} }>
            <div className="footer-text">
                All events are gathered using the <a href="https://history.muffinlabs.com/">Today in History</a> API.
            </div>
        </div>
    )
}