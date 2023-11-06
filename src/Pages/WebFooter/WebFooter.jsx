import { Footer } from "flowbite-react";
import logo from "../../assets/icons/logo2.png";

import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
const WebFooter = () => {
  return (
    <div>
      <Footer container className="bg-[#080411]">
        <div className="w-full">
          <div className=" w-full items-center flex md:justify-evenly ">
            <div>
              <Footer.Brand
                className="h-28"
                src={logo}
                alt=" Logo"
                name="Flowbite"
              />
            </div>
            <div className="grid grid-cols-2  gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div className="">
                <Footer.Title className="text-[#e93f58]" title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link className="text-white">Drive Whey</Footer.Link>
                  <Footer.Link className="text-white">Ride Share</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className="text-[#e93f58]" title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link className="text-white">Github</Footer.Link>
                  <Footer.Link className="text-white">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className="text-[#e93f58]" title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link className="text-white">
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link className="text-white">
                    Terms &amp; Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider className="lg:w-[900px]" />
          <div className="w-full items-center flex justify-evenly">
            <Footer.Copyright
              className="font-bold md:text-lg text-[#e93f58] "
              by="Drive Whey"
              year={2022}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon className="text-white" href="#" icon={BsFacebook} />
              <Footer.Icon className="text-white" href="#" icon={BsInstagram} />
              <Footer.Icon className="text-white" href="#" icon={BsTwitter} />
              <Footer.Icon className="text-white" href="#" icon={BsGithub} />
              <Footer.Icon className="text-white" href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default WebFooter;
