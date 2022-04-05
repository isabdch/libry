import Link from "next/link";
import { Container } from "../../styles/inexistentPageStyles";

export default function InexistentPage() {
  return (
    <Container>
      <h1>This page doesn&apos;t exist</h1>
      <p>
        Go back to <Link href="/">Home</Link>
      </p>
    </Container>
  );
}
