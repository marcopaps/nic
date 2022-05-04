import { Container } from "react-bootstrap";
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <div>
      <Container>
        <main>{props.children}</main>
      </Container>
    </div>
  );
};

export default MainLayout;
