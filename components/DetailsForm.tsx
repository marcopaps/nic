import Image from "next/image";
import { Col, Row, Form, FloatingLabel } from "react-bootstrap";
import { Button } from "@/components";
import { useLocalStorage } from "@/hooks";

interface DefailsFormProps {
  showAddress?: boolean;
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const DefailsForm = (props: DefailsFormProps) => {
  const [firstName, setFirstName] = useLocalStorage("firstName");
  const [lastName, setLastName] = useLocalStorage("lastName");
  const [email, setEmail] = useLocalStorage("email");
  const [zipCode, setZipCode] = useLocalStorage("zipCode");
  const [phone, setPhone] = useLocalStorage("phone");
  const [addressLine1, setAddressLine1] = useLocalStorage("addressLine1");
  const [city, setCity] = useLocalStorage("city");
  const [state, setState] = useLocalStorage("state");

  return (
    <div className={props.className}>
      <div>
        <Form onSubmit={props.onSubmit}>
          <Row>
            <Col sm={6}>
              <FloatingLabel
                controlId="first-name"
                label="First Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col sm={6}>
              <FloatingLabel
                controlId="last-name"
                label="Last Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row>
            <Col>
              <FloatingLabel controlId="email" label="Email" className="mb-3">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>

          {props.showAddress && (
            <>
              <Row>
                <Col sm={6}>
                  <FloatingLabel
                    controlId="zip-code"
                    label="Zip Code"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="Zip Code"
                      required
                    />
                  </FloatingLabel>
                </Col>
                <Col sm={6}>
                  <FloatingLabel
                    controlId="phone"
                    label="Phone"
                    className="mb-3"
                  >
                    <Form.Control
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone"
                      required
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col>
                  <FloatingLabel
                    controlId="address"
                    label="Address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      value={addressLine1}
                      onChange={(e) => setAddressLine1(e.target.value)}
                      placeholder="Address"
                      required
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col sm={6}>
                  <FloatingLabel controlId="city" label="City" className="mb-3">
                    <Form.Control
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City"
                      required
                    />
                  </FloatingLabel>
                </Col>
                <Col sm={6}>
                  <FloatingLabel
                    controlId="state"
                    label="State"
                    className="mb-3"
                  >
                    <Form.Control
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="State"
                      required
                    ></Form.Control>
                  </FloatingLabel>
                </Col>
              </Row>
            </>
          )}

          <Button
            displayText="Continue"
            isSubmit
            icon={
              <Image
                src="/right-arrow.svg"
                height={30}
                width={30}
                alt="arrow"
                className="right-arrow"
              />
            }
          />
        </Form>
      </div>
    </div>
  );
};

export default DefailsForm;
