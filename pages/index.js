import Link from "next/link";
import Head from "next/head";
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Offer from "../components/slider/Offer";
import Knowledgebase from "../components/slider/Knowledgebase";
import Accordion from "../components/elements/Accordion";
import Tab from "../components/elements/Tab";
import Team from "../components/slider/Team";
import Testimonial2 from "../components/slider/Testimonial2";

const HomePage6 = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  return (
    <>
      <Head>
        <title>Psymate</title>
      </Head>

      <Layout>
        <section className="section banner-6">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-6 d-none d-xl-block">
                <div className="box-banner-6">
                  <div className="img-testimonials-1 shape-1">
                    <img
                      src="assets/imgs/page/homepage6/calenderr.png"
                      alt="iori"
                    />
                  </div>
                  <div className="img-testimonials-2 shape-2">
                    <img
                      src="assets/imgs/page/homepage6//Patientss.png"
                      alt="iori"
                    />
                  </div>
                  <img
                    className="img-main"
                    src="assets/imgs/page/homepage6/brain.png"
                    alt="iori"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="box-banner-right-home6">
                  <span className="title-line line-48">
                    Think. Creative. Solve
                  </span>
                  <h1 className="color-brand-1 mb-20 mt-5">
                    Innovative Solution for your Mental Wellbeing
                  </h1>
                  <div className="row">
                    <div className="col-lg-10">
                      <p className="font-md color-grey-500 mb-30">
                        Collaborate, plan projects and manage resources with
                        powerful features that your whole team can use. The
                        latest news, tips and advice to help you run your
                        business with less fuss.
                      </p>
                    </div>
                  </div>

                  <div className="box-button mt-20">
                    <Link className="btn btn-brand-2 hover-up mr-20" href="#">
                      Book Appointment
                    </Link>
                    <Link className="btn btn-brand-3 hover-up mr-20" href="#">
                      Order Medicine
                    </Link>
                    <Link className="btn btn-brand-2 hover-up mr-20" href="#">
                      Book Assessment
                    </Link>

                    {/* <Link
                      className="btn btn-default mb-15 pl-10 font-sm-bold hover-up"
                      href="#"
                    >
                      Learn More
                      <svg
                        className="w-6 h-6 icon-16 ml-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="section mt-55">
          <div className="container">
            <ul className="lists-logo">
              <li>
                <img src="assets/imgs/page/homepage1/placed.png" alt="iori" />
              </li>
              <li>
                <img src="assets/imgs/page/homepage1/cuebiq.png" alt="iori" />
              </li>
              <li>
                <img src="assets/imgs/page/homepage1/factual.png" alt="iori" />
              </li>
              <li>
                <img src="assets/imgs/page/homepage1/placeiq.png" alt="iori" />
              </li>
              <li>
                <img src="assets/imgs/page/homepage1/airmeet.png" alt="iori" />
              </li>
              <li>
                <img src="assets/imgs/page/homepage1/spen.png" alt="iori" />
              </li>
            </ul>
          </div>
        </div> */}

        <section className="section mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="color-brand-1 mb-20">
                  Diverse Offerings – One Holistic Platform
                </h2>
                <p className="font-lg color-gray-500">
                  What makes us different from others? We give holistic
                  solutions
                  <br className="d-none d-lg-block" />
                  with strategy, design &amp; technology.
                </p>
              </div>
            </div>
            <div className="mt-50">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                  <Offer />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="color-brand-1 mb-20">
                  Revolutionizing Mental Healthcare: Serving the Entire
                  Ecosystem
                </h2>
              </div>
            </div>
            <div className="mt-50">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card-offer card-offer-2 hover-up">
                    <div className="card-info">
                      <h4 className="color-brand-1 mb-15">Individuals</h4>
                      <p className="font-sm color-grey-500 mb-15">
                        Free educational content and an online connection
                        platform to match individuals with practitioners who can
                        help
                      </p>
                    </div>
                    <div className="card-image-bottom mt-50">
                      {" "}
                      <img
                        className="w-100 bd-rd16"
                        src="assets/imgs/page/homepage6/individual.png"
                        alt="iori"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-offer card-offer-2 hover-up">
                    <div className="card-image-bottom mb-35">
                      {" "}
                      <img
                        className="w-100 bd-rd16"
                        src="assets/imgs/page/homepage6/organisation.png"
                        alt="iori"
                      />
                    </div>
                    <div className="card-info">
                      <h4 className="color-brand-1 mb-15">Organisations</h4>
                      <p className="font-sm color-grey-500 mb-15">
                        Educational mental health content for employees and a
                        customized connection platform to promote in-network
                        practitioners
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card-offer card-offer-2 hover-up">
                    <div className="card-info">
                      <h4 className="color-brand-1 mb-15">
                        Mental Health Experts
                      </h4>
                      <p className="font-sm color-grey-500 mb-15">
                        Learning paths in various specialized competencies
                        including symptoms, interventions, communities, and
                        ages; shareable companion tools; and inclusion in a
                        verified education and connection platform used by
                        individuals seeking care
                      </p>
                    </div>
                    <div className="card-image-bottom mt-50">
                      {" "}
                      <img
                        className="w-100 bd-rd16"
                        src="assets/imgs/page/homepage6/M H E.png"
                        alt="iori"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section mt-50">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-30">
                {" "}
                <h2 className="color-brand-1 mt-10 mb-15">
                  Passion for Healing Meets Power of Technology{" "}
                </h2>
                <p className="font-md color-grey-400">
                  PSYMATE exists to integrate the best of psychiatry,
                  psychology, health-tech, eastern wisdom and most importantly
                  an unending passion for treating patients under a seamlessly
                  delightful mental health care platform.We create holistic,
                  customized, integrated plans and provide state-of-the-art
                  treatments focused towards a single-minded goal - patient care
                  at any cost.
                </p>
                <div className="mt-40 text-start">
                  {" "}
                  <Link className="btn btn-brand-4 hover-up" href="#">
                    Download App{" "}
                  </Link>
                  <Link
                    href="#"
                    className="btn btn-default font-sm-bold hover-up"
                  >
                    Learn More
                    <svg
                      className="w-6 h-6 icon-16 ml-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 text-center position-relative mb-30">
                <img src="/assets/imgs/page/homepage6/psymate.gif" alt="iori" />
              </div>
            </div>
          </div>
        </section>

        <section className="section mt-50">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-8">
                <h2 className="color-brand-1 mb-20">
                  {" "}
                  No Matter What your Mental Health Problem is At Psymate We'll
                  Take Care Of You{" "}
                </h2>
                <p className="font-md color-grey-400">
                  Stress, Anxiety Disorders, Depression,Bipolar Disorder, OCD,
                  PTSD, Panic Disorder, ADSD, Schizophrenia, Substance Used
                  Disorders
                </p>
              </div>
              <div className="col-lg-4 col-md-4 text-md-end text-start">
                <Link href="#" className="btn btn-default font-sm-bold pl-0">
                  View All
                  <svg
                    className="w-6 h-6 icon-16 ml-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="row mt-55">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card-blog-grid card-blog-grid-2 hover-up">
                  <div className="card-image">
                    <Link href="/blog-detail">
                      <img
                        src="	https://psymate-file-uploads.s3.ap-south-1.amazonaws.com/disorders/Mask+group.png"
                        alt="iori"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="/blog-detail">
                      <h6 className="color-brand-1">Obsessive Disorder</h6>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card-blog-grid card-blog-grid-2 hover-up">
                  <div className="card-image">
                    <Link href="/blog-detail">
                      <img
                        src="	https://psymate-file-uploads.s3.ap-south-1.amazonaws.com/disorders/Mask+group+(3).png"
                        alt="iori"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="/blog-detail">
                      <h6 className="color-brand-1">
                        Social Anxiety Disorders{" "}
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card-blog-grid card-blog-grid-2 hover-up">
                  <div className="card-image">
                    <Link href="/blog-detail">
                      <img
                        src="https://psymate-file-uploads.s3.ap-south-1.amazonaws.com/disorders/Mask+group+(5).png"
                        alt="iori"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="/blog-detail">
                      <h6 className="color-brand-1">Bipolar Disorder </h6>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card-blog-grid card-blog-grid-2 hover-up">
                  <div className="card-image">
                    <Link href="/blog-detail">
                      <img
                        src="https://psymate-file-uploads.s3.ap-south-1.amazonaws.com/disorders/Group+29979+(2).png"
                        alt="iori"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="/blog-detail">
                      <h6 className="color-brand-1">
                        Major Depressive Disorder{" "}
                      </h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section mt-100">
          <div className="container">
            <div className="row align-items-center mt-50">
              <div className="col-lg-4 col-md-12 col-sm-12 mb-30">
                {" "}
                <h2 className="color-brand-1 mt-10 mb-20">
                  It might seem there is no why out but trust us, there is.
                </h2>
                <p> It's just the matter of getting the right help</p>
                <div className="mt-45">
                  <Link className="btn btn-brand-4 hover-up" href="#">
                    Download App{" "}
                  </Link>
                  <Link
                    className="btn btn-default font-sm-bold hover-up"
                    href="#"
                  >
                    Learn More
                    <svg
                      className="w-6 h-6 icon-16 ml-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-offer-style-2 card-left bg-white">
                  <div className="card-offer hover-up">
                    <div className="card-image">
                      <img
                        src="assets/imgs/treatment/neuromodulation.png"
                        alt="iori"
                      />
                    </div>
                    <div className="card-info">
                      <h4 className="color-brand-1 mb-15">RTMS</h4>
                      <p className="font-md color-grey-500 mb-15">
                        Repetitive transcranial magnetic stimulation (rTMS) is a
                        non-invasive and relatively painless technique widely
                        employed for studying various cognitive functions and
                        exploring the brain-behavior relationship. It has proven
                        valuable in both normal individuals and those with
                        neuropsychiatric disorders.
                      </p>
                      <div className="box-button-offer">
                        <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                          Learn More
                          <svg
                            className="w-6 h-6 icon-16 ml-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-offer-style-2 card-left bg-grey-60">
                  <div className="card-offer hover-up">
                    <div className="card-image">
                      <img
                        src="assets/imgs/treatment/psychotherapy.png"
                        alt="iori"
                      />
                    </div>
                    <div className="card-info">
                      <h4 className="color-brand-1 mb-15">Psychotherapy</h4>
                      <p className="font-md color-grey-500 mb-15">
                        Psychotherapy (also called talk therapy) refers to a
                        variety of treatments that aim to help a person identify
                        and change troubling emotions, thoughts, and behaviors.
                      </p>
                      <div className="box-button-offer">
                        <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                          Learn More
                          <svg
                            className="w-6 h-6 icon-16 ml-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                <div className="card-small">
                  <div className="card-image">
                    <Link href="#">
                      <div className="box-image">
                        <img
                          src="assets/imgs/page/homepage3/certification.png"
                          alt="iori"
                        />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <h6 className="color-brand-1 icon-up">Medication</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                <div className="card-small">
                  <div className="card-image">
                    <Link href="#">
                      <div className="box-image">
                        <img
                          src="assets/imgs/treatment/discussion.png"
                          alt="iori"
                        />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <h6 className="color-brand-1 icon-up">Counselling</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                <div className="card-small">
                  <div className="card-image">
                    <Link href="#">
                      <div className="box-image">
                        <img
                          src="assets/imgs/treatment/nutrition.png"
                          alt="iori"
                        />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <h6 className="color-brand-1 icon-up">Nutrition</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                <div className="card-small">
                  <div className="card-image">
                    <Link href="#">
                      <div className="box-image">
                        <img
                          src="assets/imgs/treatment/art therapy.png"
                          alt="iori"
                        />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <h6 className="color-brand-1 icon-up">Art Based Therapy</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                <div className="card-small">
                  <div className="card-image">
                    <Link href="#">
                      <div className="box-image">
                        <img src="assets/imgs/treatment/YOGA.png" alt="iori" />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <h6 className="color-brand-1 icon-up">Yoga</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                <div className="card-small">
                  <div className="card-image">
                    <Link href="#">
                      <div className="box-image">
                        <img
                          src="assets/imgs/treatment/wellness.png"
                          alt="iori"
                        />
                      </div>
                    </Link>
                  </div>
                  <div>
                    <h6 className="color-brand-1 icon-up">Wellness</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section mt-90">
          <div className="row align-items-start">
            <div className="col-lg-6">
              <h2 className="color-brand-1 mb-50">Our Mental Health Experts</h2>
            </div>
          </div>
          <div className="mt-80">
            <div className="box-swiper">
              <div className="swiper-container swiper-group-7-center">
                <Team />
              </div>
            </div>
          </div>
        </section>

        <section className="section mt-40 pt-50 pb-15 bg-grey-80">
          <div className="container">
            <h2 className="color-brand-1 mb-50 text-center">Our Centers</h2>

            <div className="box-swiper">
              <div className="swiper-container swiper-group-3">
                <Knowledgebase />
              </div>
            </div>
          </div>
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

        <section className="section mt-50 bg-7 bg-plan pt-110 pb-110">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-8">
                <h2 className="color-brand-1 mb-20">
                  Psymate Signature Assessments
                </h2>
                <p className="font-lg color-gray-500">
                  Discover our multi-dimensional assessments meticulously
                  developed using advanced deep tech for in-depth analysis,
                  ensuring personalized and effective care.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 text-md-end text-start">
                <Link className="btn btn-default font-sm-bold pl-0" href="#">
                  Compare plans
                  <svg
                    className="w-6 h-6 icon-16 ml-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="row mt-50">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card-plan hover-up">
                  <div className="card-image-plan">
                    <div className="icon-plan">
                      <img
                        src="/assets/imgs/page/homepage1/free.svg"
                        alt="iori"
                      />
                    </div>
                    <div className="info-plan">
                      <h4 className="color-brand-1">Focused</h4>
                      <p className="font-md color-grey-400">
                        Protect for testing
                      </p>
                    </div>
                  </div>
                  <div className="box-day-trial">
                    <span className="font-lg-bold color-brand-1">FREE</span>
                    <span className="font-md color-grey-500">
                      - 30 days trial
                    </span>
                    <br />
                    <span className="font-xs color-grey-500">
                      No Credit card required
                    </span>
                  </div>
                  <div className="mt-30 mb-30">
                    <ul className="list-ticks list-ticks-2">
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Brand Awareness Ads
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Retargeting Ads
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Contextual, Demographic
                      </li>
                      <li className="mutted">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Facebook Advertising
                      </li>
                      <li className="mutted">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Global Certificates
                      </li>
                      <li className="mutted">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Snapchat Advertising
                      </li>
                      <li className="mutted">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        TikTok Advertising
                      </li>
                      <li className="mutted">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Advanced List Building
                      </li>
                    </ul>
                  </div>
                  <div className="mt-20">
                    <Link className="btn btn-brand-1-full hover-up" href="#">
                      Try for free
                      <svg
                        className="w-6 h-6 icon-16 ml-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card-plan hover-up">
                  <div className="card-image-plan">
                    <div className="icon-plan bg-1">
                      <img
                        src="/assets/imgs/page/homepage1/standard.svg"
                        alt="iori"
                      />
                    </div>
                    <div className="info-plan">
                      <h4 className="color-brand-1">Detailed</h4>
                      <p className="font-md color-grey-400">Advanced project</p>
                    </div>
                  </div>
                  <div className="box-day-trial">
                    <span className="font-lg-bold color-brand-1">$29</span>
                    <span className="font-md color-grey-500">
                      - user / month
                      <br />
                    </span>
                    <span className="font-xs color-grey-500">
                      Billed annually
                    </span>
                  </div>
                  <div className="mt-30 mb-30">
                    <ul className="list-ticks list-ticks-2">
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Brand Awareness Ads
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Retargeting Ads
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Contextual, Demographic
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Facebook Advertising
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Global Certificates
                      </li>
                      <li className="mutted">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Snapchat Advertising
                      </li>
                      <li className="mutted">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        TikTok Advertising
                      </li>
                      <li className="mutted">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Advanced List Building
                      </li>
                    </ul>
                  </div>
                  <div className="mt-20">
                    <Link className="btn btn-brand-1-full hover-up" href="#">
                      Get Started
                      <svg
                        className="w-6 h-6 icon-16 ml-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card-plan card-plan-2 hover-up">
                  <div className="card-image-plan">
                    <div className="icon-plan bg-2">
                      <img
                        src="/assets/imgs/page/homepage1/business.svg"
                        alt="iori"
                      />
                    </div>
                    <div className="info-plan">
                      <h4 className="color-brand-1">Advance</h4>
                      <p className="font-md color-grey-400">
                        Protect for testing
                      </p>
                    </div>
                  </div>
                  <div className="box-day-trial">
                    <span className="font-lg-bold color-brand-1">$99</span>
                    <span className="font-md color-grey-500">
                      - user / month
                    </span>
                    <br />
                    <span className="font-xs color-grey-500">One-time pay</span>
                  </div>
                  <div className="mt-30 mb-30">
                    <ul className="list-ticks list-ticks-2">
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Brand Awareness Ads
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Retargeting Ads
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Contextual, Demographic
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Facebook Advertising
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Global Certificates
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Snapchat Advertising
                      </li>
                      <li className="mutted">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        TikTok Advertising
                      </li>
                      <li className="mutted">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Advanced List Building
                      </li>
                    </ul>
                  </div>
                  <div className="mt-20">
                    <Link className="btn btn-brand-1-full hover-up" href="#">
                      Get Started
                      <svg
                        className="w-6 h-6 icon-16 ml-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card-plan hover-up">
                  <div className="card-image-plan">
                    <div className="icon-plan bg-3">
                      <img
                        src="/assets/imgs/page/homepage2/creation.png"
                        alt="iori"
                      />
                    </div>
                    <div className="info-plan">
                      <h4 className="color-brand-1">Comprehensive</h4>
                      <p className="font-md color-grey-400">
                        Protect for testing
                      </p>
                    </div>
                  </div>
                  <div className="box-day-trial">
                    <span className="font-lg-bold color-brand-1">$299</span>
                    <span className="font-md color-grey-500">
                      - user / month
                    </span>
                    <br />
                    <span className="font-xs color-grey-500">One-time pay</span>
                  </div>
                  <div className="mt-30 mb-30">
                    <ul className="list-ticks list-ticks-2">
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Brand Awareness Ads
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Retargeting Ads
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Contextual, Demographic
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Facebook Advertising
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Global Certificates
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Snapchat Advertising
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        TikTok Advertising
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Advanced List Building
                      </li>
                    </ul>
                  </div>
                  <div className="mt-20">
                    <Link className="btn btn-brand-1-full hover-up" href="#">
                      Get Started
                      <svg
                        className="w-6 h-6 icon-16 ml-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

        <section className="section mt-50 bg-grey-60">
          <div className="container">
            <div className="pt-120 pb-120">
              <h2 className="color-brand-1">
                What our loving users are <br className="d-none d-lg-block" />
                saying about us
              </h2>
              <div className="mt-50">
                <div className="box-swiper">
                  <div className="swiper-container swiper-group-2">
                    <Testimonial2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section pt-80 mb-30">
          <div className="container">
            <div className="text-center">
              <h2 className="color-brand-1 mb-20">
                Frequently asked questions
              </h2>
              <p className="font-lg color-gray-500">
                Feeling inquisitive? Have a read through some of our FAQs or
                <br className="d-none d-lg-block" /> contact our supporters for
                help
              </p>
            </div>
            <div className="row mt-50 mb-50">
              <div className="col-xl-2 col-lg-2" />
              <div className="col-xl-8 col-lg-8 position-relative">
                <div className="box-author-1">
                  <img src="assets/imgs/page/homepage6/author.png" alt="iori" />
                </div>
                <div className="box-author-2">
                  <img
                    src="assets/imgs/page/homepage6/author2.png"
                    alt="iori"
                  />
                </div>
                <div className="box-author-3">
                  <img
                    src="assets/imgs/page/homepage6/author3.png"
                    alt="iori"
                  />
                </div>
                <Accordion />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-50" />
      </Layout>
    </>
  );
};

export default HomePage6;
