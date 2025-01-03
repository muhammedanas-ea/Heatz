import { Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full  px-4 md:px-6 ">
      <div className="pt-20 pb-14 grid  grid-cols-1 lg:grid-cols-6 gap-7 border-b border-b-white max-w-6xl mx-auto">
        <div className="lg:col-span-3">
          <h1 className="font-bold text-3xl md:text-4xl sub-font text-[#00ff9d]">
            HEATZ
          </h1>
          <p className="mt-6 text-xs max-w-lg text-gray-500">
            Heatz is a registered brand of Ashtegroup. It is registered in
            different contries including Saudi Arabia and UAE, Especialy in the
            middle esat. Heatz is well known for its variety and quality of
            products launched in every seasons.
          </p>
          <form className="flex flex-col space-y-4 mt-10">
            <div className="relative max-w-sm border-b border-b-gray-500">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black text-xs w-full text-gray-500 py-2 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <Send color="#fcf7f7" className="text-xs" />
              </button>
            </div>
            <label className="flex items-start space-x-2">
              <input type="checkbox" className="mt-1" />
              <span className="text-xs max-w-sm text-gray-400">
                I confirm acceptance of the Privacy Policy and consent to its
                terms, including the use of cookies.
              </span>
            </label>
          </form>
        </div>
        <div>
          <h1 className="font-medium text-sm text-white">Mob Acc</h1>
          <ul className="mt-5 flex flex-col gap-3 text-xs text-gray-500">
            <li>Earphones</li>
            <li>Cables</li>
            <li>Adapters</li>
            <li>Power Bank</li>
            <li>Batteries</li>
            <li>Car Charger</li>
            <li>Holders</li>
            <li>Speakers</li>
            <li>Smartwatches</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-sm text-white">Com Acc</h1>
          <ul className="mt-5 flex flex-col gap-3 text-xs text-gray-500">
            <li>Earphones</li>
            <li>Cables</li>
            <li>Adapters</li>
            <li>Power Bank</li>
            <li>Batteries</li>
            <li>Car Charger</li>
            <li>Holders</li>
            <li>Speakers</li>
            <li>Smartwatches</li>
          </ul>
        </div>
        <div>
          <h1 className="font-medium text-sm text-white">Help</h1>
          <ul className="mt-5 flex flex-col gap-3 text-xs text-gray-500">
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
            <li>Payment Methods</li>
            <li>Track Your Order</li>
            <li>About Us</li>
            <li>Delivery Policy</li>
            <li>Cancellation Policy</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto  px-4 md:px-6 pt-5 pb-10">
        <h1 className="text-xs text-gray-400 text-center">
          Copyright © 2024 Heatz - All right reserved. | Developed by{" "}
          <span className="text-white">AdAgency (Technologies.)</span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
