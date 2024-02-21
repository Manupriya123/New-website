import Link from "next/link";
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Team from "../components/slider/Team";
import ModalVideo from "react-modal-video";
import Head from "next/head";
import Tab from "../components/elements/Tab";

const HomePage8 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Psymate | About Us</title>
      </Head>

      <Layout>
        <section className="section banner-8">
          <div className="asset-1 shape-1" />
          <div className="asset-2 shape-2" />
          <div className="asset-3 shape-3" />
          <div className="asset-4 shape-1" />
          <div className="asset-5 shape-2" />
          <div className="box-banner-home8">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-10 m-auto">
                  <div className="text-center">
                    {" "}
                    <span className="font-md color-grey-400">
                      Think. Creative. Solve
                    </span>
                    <h1 className="color-brand-1 mb-25 mt-10">
                      Innovative Solution for your Mental Wellbeing
                    </h1>
                    <p className="font-md color-grey-500 mb-25">
                      Collaborate, plan projects and manage resources with
                      powerful features that your whole team
                      <br className="d-none d-lg-block" />
                      can use. The latest news, tips and advice to help you run
                      your business with less fuss.
                    </p>
                    <div className="text-center">
                      {" "}
                      <Link
                        target="_blank"
                        href="https://apps.apple.com/in/app/psymate/id6443472769"
                      >
                        <img
                          className="mr-10"
                          src="/assets/imgs/template/appstore.png"
                          alt="iori"
                        />
                      </Link>
                      <Link
                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=com.psymatehealthcare"
                      >
                        <img
                          src="/assets/imgs/template/google-play.png"
                          alt="iori"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-80">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-7-center">
                  <Team />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section pt-90 banner-about">
          <div className="container text-center">
            <h4 className="color-grey-400 mb-15">Who we are</h4>

            <p className="font-md color-grey-400 mb-30">
              PSYMATE exists to integrate the best of psychiatry, psychology,
              health-tech, eastern wisdom and most importantly an unending
              passion for treating patients under a seamlessly delightful mental
              health care platform.We create holistic, customized, integrated
              plans and provide state-of-the-art treatments focused towards a
              single-minded goal - patient care at any cost.
            </p>
          </div>
        </section>

        <section className="section mt-90 pb-50 bg-core-value">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="item-core mb-30">
                  {/* <div className="item-image">
                    <img src="assets/imgs/page/about/img1.png" alt="iori" />
                  </div> */}
                  <div className="item-desc">
                    <h4 className="color-brand-1">Our Vision</h4>
                    <p className="font-md color-grey-400 mb-15">
                      Psymate envisions a world where mental well-being is
                      universally embraced, merging science with tradition.
                      Beyond accessibility, our vision is an empathetic mental
                      health journey, creating a global community where everyone
                      feels genuinely understood and supported.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item-core mb-30">
                  {/* <div className="item-image">
                    <img src="assets/imgs/page/about/img2.png" alt="iori" />
                  </div> */}
                  <div className="item-desc">
                    <h4 className="color-brand-1">Our Mission</h4>

                    <p className="font-md color-grey-400 mb-15">
                      Deliver technologically advanced, universally accessible
                      mental health care globally, with a focus on India. We're
                      dedicated to solving mental health issues for those
                      outside mainstream healthcare access, ensuring safety,
                      inclusivity, and effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row box-list-core-value">
              <div className="col-lg-4 mb-70">
                <div className="box-core-value">
                  <div className="shape-left shape-1" />
                  <h3 className="color-brand-1 mb-15">Core values</h3>
                  <p className="font-md color-grey-400">
                    We break down barriers so teams can focus on what matters –
                    working together to create products their customers love.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <ul className="list-core-value">
                  <li>
                    {" "}
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">Dynamic Innovation </h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Elevate mental wellness with our patient-centric
                        approach, prioritizing individual needs and fostering a
                        compassionate environment at the core of our mental
                        healthcare organization.
                      </p>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">
                      Evidance based Treatment
                    </h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Experience a paradigm shift in mental wellness as our
                        innovative solutions redefine the landscape, providing
                        tailored care and support for a resilient and thriving
                        community. Embrace the future of mental healthcare with
                        us.
                      </p>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">Latest Technology</h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Revolutionize mental healthcare with cutting-edge
                        technology for enhanced patient care and well-being.
                        Explore the latest advancements tailored for mental
                        health organizations, prioritizing patient-centric
                        solutions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="list-core-value">
                  <li>
                    {" "}
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">
                      World Class Equipments
                    </h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Experience world-class mental healthcare with
                        cutting-edge equipment at our organization, ensuring
                        optimal patient care and well-being. Our commitment to
                        utilizing state-of-the-art equipment sets the standard
                        for excellence in mental health treatment, prioritizing
                        the holistic care of our patients
                      </p>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">
                      Safe, Comfortable , Non Judgemental{" "}
                    </h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Discover a safe haven at our Mental Healthcare
                        Organization, where compassionate professionals provide
                        non-judgmental support, ensuring your journey to
                        wellness is secure and comfortable.
                      </p>
                    </div>
                  </li>
                  {/* <li>
                    {" "}
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">Stronger united</h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        We’ve created a positive and inclusive culture that
                        fosters open, honest, and meaningful relationships.
                      </p>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section mt-50 pt-50 pb-90">
          <div className="container">
            <div className="bg-back-1 box-cover-video">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <img
                    className="d-block"
                    src="/assets/imgs/sir.png"
                    alt="iori"
                  />
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="box-info-video">
                    <h3 className=" mt-10 mb-15">Founder's Note</h3>
                    <p className="font-md color-white">
                      Psymate is a passion project and a labour of love; it's a
                      platform that is enabling unprecedented convergence of
                      world class, evidence-based Psychiatry and Psychology
                      services for the treatment of mental health disorders with
                      a personalised and integrative treatment approach, powered
                      by cutting edge technology and a deep commitment for
                      treating people.We are revolutionizing & democratizing
                      mental healthcare for every single person who needs help.
                    </p>
                    <h3 className=" mt-10 mb-15 font-md">
                      Dr Samant Darshi
                      <p>MBBS, MD, cTMS</p>
                      <p>Consultant Psychiatrist & Psychotherapis</p>
                      <p>Neuromodulation Expert & De-addiction Specialist</p>
                    </h3>
                    <div className="box-button-video">
                      <a
                        className="btn btn-play font-sm-bold popup-youtube hover-up"
                        onClick={() => setOpen(true)}
                      >
                        Play Video
                      </a>
                      <ModalVideo
                        channel="youtube"
                        autoplay
                        isOpen={isOpen}
                        videoId="sVPYIRF9RCQ"
                        onClose={() => setOpen(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section mt-50 overflow-hidden">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-center mb-30">
                <div className="box-phones">
                  <div className="box-phones-inner">
                    <div className="img-phone-1">
                      <img
                        src="/assets/imgs/page/homepage8/phone1.png"
                        alt="iori"
                      />
                    </div>
                    <div className="img-phone-2">
                      <img
                        src="/assets/imgs/page/homepage8/phone2.png"
                        alt="iori"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-30">
                <div className="box-our-app">
                  <span className="title-line line-48">Why using our app</span>
                  <h3 className="color-brand-1 mb-20 mt-15">
                    Our app is great for individuals, startups and enterprises.
                    It have never been easier to manage your finances
                  </h3>
                  <p className="font-sm color-grey-500 mb-40">
                    Eos eveniet nesciunt et accusamus suscipit est magnam
                    consequatur aut quisquam perferendis a reprehenderit quis
                    aut voluptatem repellat est beatae reiciendis? Cum omnis
                    corrupti cum incidunt veritatis vel libero provident aut
                    reiciendis animi ut quod quaerat et velit animi et omnis
                    illo. Sit quae harum eos incidunt sequi eum iste fugit ex
                    omnis aliquam a explicabo quam.
                  </p>
                  <div className="box-item-comment">
                    <div className="image-comment">
                      {" "}
                      <img
                        src="/assets/imgs/page/homepage8/author.png"
                        alt="iori"
                      />
                    </div>
                    <div className="info-comment">
                      <p className="font-lg-bold color-grey-500 comment-quote mb-15">
                        Et corporis quia est iusto delectus ea consequuntur
                        sapiente in quia totam ut internos architecto. Eos
                        deleniti dolore eos enim totam et eaque nisi.
                      </p>
                      <span className="font-md-bold color-brand-1">
                        Albert Flores
                      </span>
                      <p className="font-xs color-grey-500">Bank of America</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-100" />
        <div className="section">
          <div className="container">
            <div className="box-radius-logo">
              <div className="text-center">
                <p className="font-lg color-brand-1">
                  We've also been Featured
                </p>
              </div>
              <div className="mt-30">
                <ul className="list-partners">
                  <li>
                    <img
                      src="https://ik.imagekit.io/9wtikbbcz/image%2018%201.png?updatedAt=1706940577597"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="https://ik.imagekit.io/9wtikbbcz/image%2017%201.png?updatedAt=1706940577698"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="	https://ik.imagekit.io/9wtikbbcz/image%2025%201.png?updatedAt=1706940577659"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="	https://ik.imagekit.io/9wtikbbcz/image%2026%201.png?updatedAt=1706940577699"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="	https://ik.imagekit.io/9wtikbbcz/image%2023%201.png?updatedAt=1706940577559"
                      alt="iori"
                    />
                  </li>
                  <li>
                    <img
                      src="https://ik.imagekit.io/9wtikbbcz/image%2019%201.png?updatedAt=1706940577704"
                      alt="iori"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className="section mt-150">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <span className="title-line line-48">Why using our app</span>
                <h3 className="color-brand-1 mb-20 mt-15">
                  Our app is great for individuals, startups and enterprises. It
                  have never been easier to manage your finances
                </h3>
                <div className="row">
                  <div className="col-lg-9">
                    <p className="font-sm color-grey-500">
                      Eos eveniet nesciunt et accusamus suscipit est magnam
                      consequatur aut quisquam perferendis a reprehenderit quis
                      aut voluptatem repellat est beatae reiciendis? Cum omnis
                      corrupti cum incidunt veritatis vel libero provident aut
                      reiciendis animi ut quod quaerat et velit animi et omnis
                      illo. Sit quae harum eos incidunt sequi eum iste fugit ex
                      omnis aliquam a explicabo quam.
                    </p>
                  </div>
                </div>
                <div className="mt-35">
                  <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-6 col-6 mb-20">
                      <h2 className="color-brand-1">469k</h2>
                      <p className="font-lg color-brand-1">Social followers</p>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-6 col-6 mb-20">
                      <h2 className="color-brand-1">25k+</h2>
                      <p className="font-lg color-brand-1">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <div className="box-charts">
                  <div className="box-chart-1 text-end">
                    <div className="box-number-2 bg-brand-2">
                      <h2 className="color-brand-1">756+</h2>
                      <p className="font-lg color-brand-1">Project Done</p>
                    </div>
                  </div>
                  <div className="box-chart-2">
                    <div className="item-chart-inner">
                      <img
                        src="/assets/imgs/page/homepage8/chart1.png"
                        alt="iori"
                      />
                    </div>
                  </div>
                </div>
                <div className="box-charts">
                  <div className="box-chart-1">
                    <div className="item-chart-inner">
                      <img
                        src="/assets/imgs/page/homepage8/chart2.png"
                        alt="iori"
                      />
                    </div>
                  </div>
                  <div className="box-chart-2">
                    <div className="item-chart-inner">
                      <img
                        src="/assets/imgs/page/homepage8/chart3.png"
                        alt="iori"
                      />
                    </div>
                  </div>
                </div>
                <div className="box-charts">
                  <div className="box-reviews">
                    <div className="item-chart-inner">
                      <div className="row">
                        <div className="col-lg-6 mb-20">
                          <div className="card-comment">
                            <div className="card-image">
                              {" "}
                              <img
                                src="/assets/imgs/page/homepage8/author1.png"
                                alt="iori"
                              />
                            </div>
                            <div className="card-info">
                              <div className="card-title">
                                <span className="font-md-bold color-brand-1 title-comment">
                                  Bessie Cooper
                                </span>
                                <div className="rating">
                                  {" "}
                                  <img
                                    src="/assets/imgs/template/icons/star.svg"
                                    alt="iori"
                                  />
                                  <img
                                    src="/assets/imgs/template/icons/star.svg"
                                    alt="iori"
                                  />
                                  <img
                                    src="/assets/imgs/template/icons/star.svg"
                                    alt="iori"
                                  />
                                  <img
                                    src="/assets/imgs/template/icons/star.svg"
                                    alt="iori"
                                  />
                                  <img
                                    src="/assets/imgs/template/icons/star.svg"
                                    alt="iori"
                                  />
                                </div>
                              </div>
                              <p className="font-xs color-grey-500">
                                Duis justo nulla, pulvinar at dolor dapibus,
                                finibus cursus massa
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-20">
                          <div className="card-comment">
                            <div className="card-image">
                              {" "}
                              <img
                                src="/assets/imgs/page/homepage8/author2.png"
                                alt="iori"
                              />
                            </div>
                            <div className="card-info">
                              <div className="card-title">
                                <span className="font-md-bold color-brand-1 title-comment">
                                  Albert Flores
                                </span>
                                <div className="rating">
                                  {" "}
                                  <img src="" alt="iori" />
                                  <img
                                    src="/assets/imgs/template/icons/star.svg"
                                    alt="iori"
                                  />
                                  <img
                                    src="/assets/imgs/template/icons/star.svg"
                                    alt="iori"
                                  />
                                  <img
                                    src="/assets/imgs/template/icons/star.svg"
                                    alt="iori"
                                  />
                                  <img
                                    src="/assets/imgs/template/icons/star.svg"
                                    alt="iori"
                                  />
                                </div>
                              </div>
                              <p className="font-xs color-grey-500">
                                Vivamus hendrerit molestie mi, a volutpat ipsum
                                vol
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom mt-90" />
        </section>

        <section className="section mt-90">
          <div className="container">
            <div className="text-center">
              <h2 className="color-brand-1 mb-20">
                Everything will become One
              </h2>
              <p className="font-lg color-grey-500">
                {" "}
                <Link className="font-lg-bold color-brand-1" href="#">
                  Iori Platform{" "}
                </Link>
                lets you take control of your money, balance your{" "}
                <br className="d-none d-lg-block" />
                income and expenses, and understand where your money goes.
              </p>
            </div>
            <div className="row mt-75 align-items-center">
              <div className="col-lg-4 mb-30">
                <div className="card-become">
                  <div className="card-title text-end">
                    <h6 className="color-brand-1 mb-15">
                      {" "}
                      <span>Total control</span>
                      <img
                        className="ml-15"
                        src="/assets/imgs/page/homepage8/icon1.png"
                        alt="iori"
                      />
                    </h6>
                  </div>
                  <div className="card-desc">
                    <p className="text-end color-grey-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada felis eget finibus placerat. Aliquam sit
                      amet vestibulum felis, sit amet porta neque
                    </p>
                  </div>
                </div>
                <div className="card-become">
                  <div className="card-title text-end">
                    <h6 className="color-brand-1 mb-15">
                      {" "}
                      <span>Rapid experimentation</span>
                      <img
                        className="ml-15"
                        src="/assets/imgs/page/homepage8/icon2.png"
                        alt="iori"
                      />
                    </h6>
                  </div>
                  <div className="card-desc">
                    <p className="text-end color-grey-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada felis eget finibus placerat. Aliquam sit
                      amet vestibulum felis, sit amet porta neque
                    </p>
                  </div>
                </div>
                <div className="card-become">
                  <div className="card-title text-end">
                    <h6 className="color-brand-1 mb-15">
                      {" "}
                      <span>Secure transfer</span>
                      <img
                        className="ml-15"
                        src="/assets/imgs/page/homepage8/icon3.png"
                        alt="iori"
                      />
                    </h6>
                  </div>
                  <div className="card-desc">
                    <p className="text-end color-grey-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada felis eget finibus placerat. Aliquam sit
                      amet vestibulum felis, sit amet porta neque
                    </p>
                  </div>
                </div>
                <div className="card-become">
                  <div className="card-title text-end">
                    <h6 className="color-brand-1 mb-15">
                      {" "}
                      <span>Activity statistics</span>
                      <img
                        className="ml-15"
                        src="/assets/imgs/page/homepage8/icon4.png"
                        alt="iori"
                      />
                    </h6>
                  </div>
                  <div className="card-desc">
                    <p className="text-end color-grey-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada felis eget finibus placerat. Aliquam sit
                      amet vestibulum felis, sit amet porta neque
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-30 text-center">
                <img
                  src="/assets/imgs/page/homepage6/Mobileapp.png"
                  alt="iori"
                />
              </div>
              <div className="col-lg-4 mb-30">
                <div className="card-become">
                  <div className="card-title text-start">
                    <h6 className="color-brand-1 mb-15">
                      {" "}
                      <img
                        className="mr-15"
                        src="/assets/imgs/page/homepage8/icon5.png"
                        alt="iori"
                      />
                      <span>Track your spending</span>
                    </h6>
                  </div>
                  <div className="card-desc">
                    <p className="text-start color-grey-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada felis eget finibus placerat. Aliquam sit
                      amet vestibulum felis, sit amet porta neque
                    </p>
                  </div>
                </div>
                <div className="card-become">
                  <div className="card-title text-start">
                    <h6 className="color-brand-1 mb-15">
                      {" "}
                      <img
                        className="mr-15"
                        src="/assets/imgs/page/homepage8/icon6.png"
                        alt="iori"
                      />
                      <span>Fast Response</span>
                    </h6>
                  </div>
                  <div className="card-desc">
                    <p className="text-start color-grey-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada felis eget finibus placerat. Aliquam sit
                      amet vestibulum felis, sit amet porta neque
                    </p>
                  </div>
                </div>
                <div className="card-become">
                  <div className="card-title text-start">
                    <h6 className="color-brand-1 mb-15">
                      {" "}
                      <img
                        className="mr-15"
                        src="/assets/imgs/page/homepage8/icon7.png"
                        alt="iori"
                      />
                      <span>AI automation</span>
                    </h6>
                  </div>
                  <div className="card-desc">
                    <p className="text-start color-grey-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada felis eget finibus placerat. Aliquam sit
                      amet vestibulum felis, sit amet porta neque
                    </p>
                  </div>
                </div>
                <div className="card-become">
                  <div className="card-title text-start">
                    <h6 className="color-brand-1 mb-15">
                      {" "}
                      <img
                        className="mr-15"
                        src="/assets/imgs/page/homepage8/icon8.png"
                        alt="iori"
                      />
                      <span>Budget that works</span>
                    </h6>
                  </div>
                  <div className="card-desc">
                    <p className="text-start color-grey-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus malesuada felis eget finibus placerat. Aliquam sit
                      amet vestibulum felis, sit amet porta neque
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom mt-100" />
        </section>

        <section className="section mt-50 mb-50 bg-brand-3 pt-100 pb-100 bg-explore">
          <div className="container">
            <div className="text-center">
              <h2 className="color-brand-2 mb-60 mt-15">Psymate Times</h2>
            </div>
            <div className="mt-30 mb-60">
              <Tab />
            </div>
          </div>
        </section>
        <div className="mt-50" />
      </Layout>
    </>
  );
};

export default HomePage8;
