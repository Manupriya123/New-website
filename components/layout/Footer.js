import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
      <>
        <footer className="footer">
          <div className="footer-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 width-20">
                  <div className="mb-10">
                    {" "}
                    <img
                      alt="Ecom"
                      src="	https://ik.imagekit.io/9wtikbbcz/psymate-logo-%20footer.svg"
                    />
                  </div>
                  <p className="font-md mb-20 color-grey-400">
                    PSYMATE exists to integrate the best of psychiatry,
                    psychology, health-tech, eastern wisdom and most importantly
                    an unending passion for treating patients under a seamlessly
                    delightful mental health care platform.We create holistic,
                    customized, integrated plans and provide state-of-the-art
                    treatments focused towards a single-minded goal - patient
                    care at any cost.
                  </p>

                  <h6 className="color-brand-1">Follow Us</h6>
                  <div className="mt-15">
                    <Link
                      className="icon-socials icon-facebook"
                      href="https://www.facebook.com/psymatehealthcr"
                    />
                    <Link
                      className="icon-socials icon-instagram"
                      href="https://www.instagram.com/psymatehealthcare/"
                    />
                    <Link
                      className="icon-socials icon-twitter"
                      href="https://twitter.com/psymatehealthcr"
                    />
                    <Link
                      className="icon-socials icon-linkedin"
                      href="https://www.linkedin.com/in/psymate-healthcare-851377202/?original_referer=https%3A%2F%2Fwww.psymate.org%2F"
                    />
                    <Link className="icon-socials icon-youtube" href="#" />
                  </div>
                </div>
                <div className="col-lg-3 width-16 mb-30">
                  <h5 className="mb-10 color-brand-1">About Us</h5>
                  <ul className="menu-footer">
                    <li>
                      <Link href="/about">Mission &amp; Vision</Link>
                    </li>
                    <li>
                      <Link href="/team">Our Team</Link>
                    </li>
                    <li>
                      <Link href="/career">Careers</Link>
                    </li>
                    <li>
                      <Link href="#">Press &amp; Media</Link>
                    </li>
                    <li>
                      <Link href="#">Advertising</Link>
                    </li>
                    <li>
                      <Link href="#">Testimonials</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 width-16 mb-30">
                  <h5 className="mb-10 color-brand-1">Ressources</h5>
                  <ul className="menu-footer">
                    <li>
                      <Link href="#">Project managemen</Link>
                    </li>
                    <li>
                      <Link href="#">Solutions</Link>
                    </li>
                    <li>
                      <Link href="#">Customers</Link>
                    </li>
                    <li>
                      <Link href="#">News &amp; Events</Link>
                    </li>
                    <li>
                      <Link href="#">Careers</Link>
                    </li>
                    <li>
                      <Link href="#">Support</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 width-16 mb-30">
                  <h5 className="mb-10 color-brand-1">We offer</h5>
                  <ul className="menu-footer">
                    <li>
                      <Link href="#">Project software</Link>
                    </li>
                    <li>
                      <Link href="#">Resource software</Link>
                    </li>
                    <li>
                      <Link href="#">Workflow automation</Link>
                    </li>
                    <li>
                      <Link href="#">Gantt chart makers</Link>
                    </li>
                    <li>
                      <Link href="#">Project dashboards</Link>
                    </li>
                    <li>
                      <Link href="#">Task software</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 width-23">
                  <h5 className="mb-10 color-brand-1">App &amp; Payment</h5>
                  <div>
                    <p className="font-sm color-grey-400">
                      Download our Apps and get extra 15% Discount on your first
                      Order…!
                    </p>
                    <div className="mt-20">
                      <Link className="mr-10" href="#">
                        <img
                          src="assets/imgs/template/appstore.png"
                          alt="iori"
                        />
                      </Link>
                      <Link href="#">
                        <img
                          src="assets/imgs/template/google-play.png"
                          alt="iori"
                        />
                      </Link>
                    </div>
                    <p className="font-sm color-grey-400 mt-20 mb-10">
                      Secured Payment Gateways
                    </p>
                    <img
                      src="assets/imgs/template/payment-method.png"
                      alt="iori"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-2">
            <div className="container">
              <div className="footer-bottom">
                <div className="row">
                  <div className="col-lg-6 col-md-12 text-center text-lg-start">
                    <ul className="menu-bottom">
                      <li>
                        <Link
                          className="font-sm color-grey-300"
                          href="/term-conditions"
                        >
                          Privacy policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="font-sm color-grey-300"
                          href="/term-conditions"
                        >
                          Cookies
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="font-sm color-grey-300"
                          href="/term-conditions"
                        >
                          Terms of service
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-12 text-center text-lg-end">
                    <span className="color-grey-300 font-md">
                      ©Iori Official 2022. All right reversed.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
};

export default Footer;