import { Col, Row, Container } from "react-bootstrap";
import { MainLayout } from "@/layouts";
import { DefailsForm } from "@/components";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <MainLayout showBackground>
      <Row className="final-step-form">
        <Col lg={6}>
          <div>
            <div className="m-b-3">
              <div className="font-lg">Almost Done.</div>
              <div className="font-lg m-t-1">Just One More Step.</div>
            </div>
            <DefailsForm showAddress />
          </div>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Home;
