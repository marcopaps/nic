import Image from "next/image";
import { useRouter } from "next/router";
import { Modal } from "react-bootstrap";
import { MainLayout } from "@/layouts";
import { DefailsForm } from "@/components";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const router = useRouter();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/final-step");
  };

  return (
    <MainLayout>
      <Modal.Dialog>
        <div className="modal-close-container">
          <Image src="/close.svg" height={30} width={30} alt="arrow" />
        </div>
        <Modal.Body>
          <div className="m-b-3">
            <div className="font-lg">Get A Credit Boost.</div>
            <div className="font-lg m-t-1">Start Now.</div>
          </div>
          <DefailsForm onSubmit={onSubmitForm} />
        </Modal.Body>
        <div className="rocket-container">
          <div className="rocket"></div>
          <Image src="/rocket.svg" height={200} width={200} alt="rocket" />
        </div>
      </Modal.Dialog>
    </MainLayout>
  );
};

export default Home;
