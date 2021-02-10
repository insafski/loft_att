import Container from "@material-ui/core/Container";

export default function MyContainer(props) {
    return (
        <section>
            <Container {...props}>{props.children}</Container>
        </section>
    );
}