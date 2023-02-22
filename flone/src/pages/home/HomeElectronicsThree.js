import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTen from "../../wrappers/hero-slider/HeroSliderTen";
import BannerTwentyEight from "../../wrappers/banner/BannerTwentyEight";
import BannerTwentyNine from "../../wrappers/banner/BannerTwentyNine";
import TestimonialTwo from "../../wrappers/testimonial/TestimonialTwo";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import ProductGridSixContainer from "../../wrappers/product/ProductGridSixContainer";
import TabProduct from "../../wrappers/product/TabProduct";

const HomeElectronicsThree = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>HMart - Online Shopping with AR Experience</title>
        <meta
          name="description"
          content="HMart - Online Shopping with AR Experience."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderTen />
        {/* banner */}
        <BannerTwentyEight spaceTopClass="pt-100" spaceBottomClass="pb-70" />
        {/* product tab */}
        <TabProduct category="electronics" spaceBottomClass="pb-70" />
        {/* banner */}
        <BannerTwentyNine spaceBottomClass="pb-70" />
        {/* product grid */}
        <ProductGridSixContainer spaceBottomClass="pb-70" />
        {/* testimonial */}
        <TestimonialTwo
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          bgColorClass="bg-gray-3"
          backgroundImage="/assets/img/bg/testimonial-bg.png"
        />
        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-95" spaceTopClass="pt-100" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeElectronicsThree;
