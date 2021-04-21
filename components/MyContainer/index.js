import Container from "@material-ui/core/Container";

export default function MyContainer(props) {
    return (
        <section style={props.sectionStyle}>
            <Container {...props}>{props.children}</Container>
        </section>
    );
}