import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Hero from "./Hero";
import { DASHBOARD_URL } from "../../config";

function ProductsPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageUrl="Media/Images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo={DASHBOARD_URL}
        learnMore="https://zerodha.com/products/kite"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/kite-by-zerodha/id1449453802"
      />
      <RightSection
        imageUrl="Media/Images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="https://console.zerodha.com"
      />
      <LeftSection
        imageUrl="Media/Images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="https://coin.zerodha.com"
        learnMore="https://zerodha.com/products/coin"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://apps.apple.com/in/app/coin-by-zerodha/id1392892554"
      />
      <RightSection
        imageUrl="Media/Images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="https://kite.trade"
      />
      <LeftSection
        imageUrl="Media/Images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="https://zerodha.com/varsity/"
        learnMore="https://zerodha.com/varsity/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474205126"
      />
      <p className="text-center mt-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="https://zerodha.tech" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#387ed1" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <Universe />
    </div>
  );
}

export default ProductsPage;
