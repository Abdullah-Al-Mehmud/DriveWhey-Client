import { Accordion } from "flowbite-react";
import faqImg from "../../../assets/images/faq.json";
import Lottie from "lottie-react";

const Faq = () => {
  return (
    <div className="flex items-center max-w-6xl mx-auto">
      <div className="w-full">
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title>
              {" "}
              <p className="font-bold text-lg"> How do I book a ride?</p>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 font-bold">
                Booking a ride is easy! Simply download our app, sign up or log
                in, enter your destination, and choose your ride. Confirm the
                booking, and your driver will pick you up.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              {" "}
              <p className="font-bold text-lg">Is my ride safe?</p>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 font-bold">
                Absolutely! We prioritize your safety. All our drivers are
                screened, and rides are tracked in real-time. You can share your
                ride details with loved ones for added security.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              {" "}
              <p className="font-bold text-lg">
                {" "}
                What types of vehicles are available?
              </p>
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 font-bold">
                We offer a variety of vehicles to suit your needs, from standard
                to premium cars. You can select the vehicle class that fits your
                preferences and budget.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      {/* img */}
      <div className="w-full">
        <Lottie className="w-full" loop animationData={faqImg} />
      </div>
    </div>
  );
};

export default Faq;
