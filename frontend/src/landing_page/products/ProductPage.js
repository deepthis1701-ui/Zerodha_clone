import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function PricingPage() {
  return (
    <>
      <Hero />

      {/* Kite */}
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="http://localhost:3000/"
        learnMore=" "
        googlePlay=" "
        appStore=" "
      />

      {/* Console */}
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
        learnMore=""
      />

      {/* Coin */}
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=" "
        learnMore=" "
        googlePlay=" "
        appStore=" "
      />

      {/* Kite Connect API */}
      <RightSection
        imageURL="media/images/Kite_ Connect_ API.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo=" "
        learnMore=" "
      />

      {/* Varsity */}
      <LeftSection
        imageURL="media/images/Varsity_mobile.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=" "
        learnMore=" "
        googlePlay=" "
        appStore=" "
      />

      <p className="text-center">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>

      <Universe />
    </>
  );
}

export default PricingPage;