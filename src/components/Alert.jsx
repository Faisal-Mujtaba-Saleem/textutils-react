export default function Alert(props) {
    const capitalize = (word) => {
        word = word.toLowerCase()
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        <div style={{ height: '50px' }}>
            {props.alert !== null &&
                <div>
                    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                        <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
                    </div>
                </div>}
        </div>
    )
}
