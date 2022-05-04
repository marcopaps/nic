import Image from "next/image";
import { Container } from "react-bootstrap";

interface MainLayoutProps {
  children: React.ReactNode;
  showBackground?: boolean;
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <main>
      <div className="page-layout">
        <Container>
          <div className="main-layout">{props.children}</div>
        </Container>
        {props.showBackground && (
          <div className="bg-rocket-container">
            <div className="bg-rocket"></div>
            <Image src="/rocket.svg" height={300} width={300} alt="rocket" />
          </div>
        )}
      </div>
    </main>
  );
};

export default MainLayout;
