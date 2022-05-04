import Image from "next/image";
import { Modal } from "react-bootstrap";
import { MainLayout } from "@/layouts";
import { DefailsForm } from "@/components";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Modal.Dialog size="lg">
        <div>
          <div className="m-b-3">
            <p className="font-lg">Almost Done.</p>
            <p className="font-lg m-t-2">Just One More Step.</p>
          </div>
          <DefailsForm showAddress />
        </div>
      </Modal.Dialog>
    </MainLayout>
  );
};

export default Home;
