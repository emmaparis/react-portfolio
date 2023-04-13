const styles = {
    p: {
        fontSize: "1.5rem",
        color: "blue",
        textAlign: "center",
        padding: "1rem"

    },
};

export default function Footer() {
    return(
        <footer>
            <p style={styles.p}>© 2021 Emma Paris</p>
        </footer>
    )
}