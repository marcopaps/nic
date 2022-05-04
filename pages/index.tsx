import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MainLayout } from "@/layouts";
import { DefailsForm } from "@/components";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/final-step");
  };

  return (
    <MainLayout>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <div className="flex--center flex--justify-end pointer p-1">
          <Image
            src="/close.svg"
            height={30}
            width={30}
            alt="arrow"
            onClick={() => setShowModal(false)}
          />
        </div>
        <Modal.Body>
          <div className="m-b-3">
            <p className="font-lg">Get A Credit Boost.</p>
            <p className="font-lg m-t-2">Start Now.</p>
          </div>
          <DefailsForm onSubmit={onSubmitForm} />

          <div className="rocket">
            <Image
              src="/rocket.svg"
              height={200}
              width={200}
              alt="arrow"
              onClick={() => setShowModal(false)}
            />
          </div>
        </Modal.Body>
      </Modal>
    </MainLayout>
  );
};

export default Home;
