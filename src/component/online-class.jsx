import React from "react";
import Link from "next/link";
import FaqAccordion from "./FaqAccordion";
import { RelatedServiceLinks, SectionJumpLinks } from "./ContentNavigation";

function OnlineClass() {
  return (
   <div>




<section className="inner-banner">
    <div className="main-banner-bg-shape">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
    </div>
    <div className="inner-banner-bg-aliment-wp">
        <div className="bg-aliment-1 rotate-animation">
            <img src="assets/images/aliment-01.svg" width="30" height="30" alt=""/>
        </div>
        <div className="bg-aliment-2 animate-this">
            <img src="assets/images/aliment-02.svg" width="26" height="22" alt=""/>
        </div>
        <div className="bg-aliment-3 zoom-fade-animation">
            <img src="assets/images/aliment-03.svg" width="44" height="44" alt=""/>
        </div>
        <div className="bg-aliment-4 rotate-animation">
            <img src="assets/images/aliment-01.svg" width="30" height="30" alt=""/>
        </div>
        <div className="bg-aliment-5 animate-this">
            <img src="assets/images/aliment-04.svg" width="26" height="22" alt=""/>
        </div>
        <div className="bg-aliment-6 zoom-fade-animation">
            <img src="assets/images/aliment-03.svg" width="44" height="44" alt=""/>
        </div>
        <div className="bg-aliment-7 rotate-animation">
            <img src="assets/images/aliment-05.svg" width="30" height="30" alt=""/>
        </div>
        <div className="bg-aliment-8 animate-this">
            <img src="assets/images/aliment-06.svg" width="19" height="16" alt=""/>
        </div>
        <div className="bg-aliment-9 zoom-fade-animation">
            <img src="assets/images/aliment-03.svg" width="29" height="29" alt=""/>
        </div>
        <div className="bg-aliment-10 rotate-animation">
            <img src="assets/images/aliment-09.svg" width="30" height="30" alt=""/>
        </div>
        <div className="bg-aliment-11 animate-this">
            <img src="assets/images/aliment-08.svg" width="34" height="34" alt=""/>
        </div>
        <div className="bg-aliment-12 animate-this">
            <img src="assets/images/aliment-10.svg" width="26" height="22" alt=""/>
        </div>
        <div className="bg-aliment-13 rotate-animation">
            <img src="assets/images/aliment-11.svg" width="30" height="30" alt=""/>
        </div>
        <div className="bg-aliment-14 animate-this">
            <img src="assets/images/aliment-07.svg" width="38" height="32" alt=""/>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="banner-content text-center">
                    <h1 className="h1-title">Online Class Help by PhD Experts</h1>
                    <div className="banner-breadcrum">
                        <ul>
                            <li><Link href="/" title="Home">Home</Link></li>
                            <li><i className="fa-solid fa-angle-right"></i></li>
                            <li>Online Class</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<SectionJumpLinks sections={[
    { id: "overview", label: "Overview" },
    { id: "service-details", label: "Class support" },
    { id: "testimonials", label: "Testimonials" },
    { id: "results", label: "Results" },
    { id: "faqs", label: "FAQs" },
]} />

<section id="overview" className="about-sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="about-image-content wow left-animation" data-wow-duration="0.8s" data-wow-delay="0.2s">
                    <div className="about-image-box-wp">
                        <div className="about-image-box-bg">
                            <div className="about-image-bg-shape"></div>
                        </div>
                        <div className="about-image">
                            <img src="assets/images/uni-std.png" width="444" height="557" alt="Student holding notebooks and a pen"/>
                        </div>
                        <div className="about-image-icon-wp">
                            <div className="about-image-icon top-icon">
                                <img src="assets/images/ribbon-tag-1-icon.png" width="56" height="56"
                                    alt=""/>
                            </div>
                            <div className="about-image-icon bottom-icon">
                                <img src="assets/images/academic-cap-1.png" width="56" height="56"
                                    alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="students-endroll-box move-element-animation-2">
                        <div className="students-endroll-title">
                            <h5 className="h5-title">Students Got Success</h5>
                        </div>
                        <div className="students-endroll-image">
                            <img src="assets/images/graph-image.svg" width="217" height="80" alt=""/>
                        </div>
                        <div className="students-endroll-text">
                            <p>97% Than Last Month</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 align-self-center">
                <div className="about-content wow right-animation" data-wow-duration="0.8s" data-wow-delay="0.2s">
                    <div className="sec-title">
                        <span className="sub-title">Pay Someone Qualified to Take Your Online Class</span>
                        <h2 className="h2-title">Online Class Help by PhD Experts</h2>
                    </div>
                    <div className="about-text">
                        <p>Need help with your online class? Whether you need someone to take your online class or provide reliable tutoring support, our PhD experts are ready to help you succeed. We handle coursework, quizzes, assignments, attendance, and exams with privacy-first support.</p>
                    </div>
                    <div className="about-feature-info">
                        <div className="about-feature-box">
                            <div className="about-feature-icon">
                                <img src="assets/images/learn-icon.svg" width="25" height="25"
                                    alt=""/>
                            </div>
                            <div className="about-feature-text">
                                <h4 className="h4-title">Top Class Help</h4>
                                <p>Guaranteed Results</p>
                            </div>
                        </div>
                        <div className="about-feature-box">
                            <div className="about-feature-icon">
                                <img src="assets/images/users-icon.svg" width="29" height="20"
                                    alt=""/>
                            </div>
                            <div className="about-feature-text">
                                <h4 className="h4-title">Pro Experts</h4>
                                <p>We Do It For You</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-10 mx-auto">
                <div className="about-counter-row wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.2s"
                    id="about_counter">
                    <div className="about-counter-box-wp">
                        <div className="about-counter-box">
                            <h3 className="h3-title"><span className="counting" data-count="15000">0</span>+</h3>
                            <div className="about-counter-text">
                                <p>Successfully Exams</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-counter-box-wp">
                        <div className="about-counter-box">
                            <h3 className="h3-title"><span className="counting" data-count="6000">0</span>+</h3>
                            <div className="about-counter-text">
                                <p>Trusted Students</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-counter-box-wp">
                        <div className="about-counter-box">
                            <h3 className="h3-title"><span className="counting" data-count="90">0</span>+</h3>
                            <div className="about-counter-text">
                                <p>Satisfaction Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-counter-box-wp">
                        <div className="about-counter-box">
                            <h3 className="h3-title"><span className="counting" data-count="9000">0</span>+</h3>
                            <div className="about-counter-text">
                                <p>Students Community</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>







<section id="service-details" className="our-features">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="our-features-content wow left-animation" data-wow-duration="0.8s" data-wow-delay="0.2s">
                    <div className="sec-title">
                        <span className="sub-title">Get the top results</span>
                        <h2 className="h2-title">Pay Alumni Of Top Ranking Universities</h2>

                    </div>
                    <div className="our-features-info">
                        <div className="our-features-info-box">
                            <div className="our-features-icon">
                                <img src="assets/images/our-features-icon-1.svg" width="40" height="39"
                                    alt=""/>
                            </div>
                            <div className="our-features-info-text">
                                <h4 className="h4-title">Class Stress</h4>
                                <p>Worried about your online class or attendance issues? We’ve got you covered.</p>
                            </div>
                        </div>
                        <div className="our-features-info-box">
                            <div className="our-features-icon">
                                <img src="assets/images/our-features-icon-2.svg" width="40" height="39"
                                    alt=""/>
                            </div>
                            <div className="our-features-info-text">
                                <h4 className="h4-title">Share Details</h4>
                                <p>Share your class details and academic goals with our expert team.</p>
                            </div>
                        </div>
                        <div className="our-features-info-box">
                            <div className="our-features-icon">
                                <img src="assets/images/our-features-icon-3.svg" width="40" height="36"
                                    alt=""/>
                            </div>
                            <div className="our-features-info-text">
                                <h4 className="h4-title">Experts Handle It</h4>
                                <p>Our professionals from top universities handle your classes, assignments, and exams.
                                </p>
                            </div>
                        </div>
                        <div className="our-features-info-box">
                            <div className="our-features-icon">
                                <img src="assets/images/our-features-icon-4.svg" width="40" height="31"
                                    alt=""/>
                            </div>
                            <div className="our-features-info-text">
                                <h4 className="h4-title">Relax & Score</h4>
                                <p>Sit back, relax, and enjoy top grades without the stress.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 align-self-center">
                <div className="our-features-image-wp wow right-animation" data-wow-duration="0.8s" data-wow-delay="0.2s">
                    <div className="our-features-image">
                    <img src="assets/images/our-features-image.png" width="510" height="693" alt="Student holding notebooks and waving"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<section id="testimonials" className="testimonial-sec sec-space-bottom">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="sec-title text-center">
                    <span className="sub-title">Testimonial</span>
                    <h2 className="h2-title">See What Our Students Says</h2>
                </div>
            </div>
        </div>
    </div>
    <div className="testimonial-slider-wp wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.2s">
        <div className="container-fluid">
            <div className="swiper testimonial-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <span className="quote-icon"><img width="33" height="24" src="assets/images/quote-icon.svg"
                                    alt=""/></span>
                            <div className="client-image-title-wp">

                                <div className="client-info">
                                    <h4 className="h4-title">Henry Lucas</h4>
                                    <span className="client-profession">Our Student</span>
                                    <div className="star-group">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="client-review-text">
                                <p>“I was too busy with work, and this service saved my grades. Thank you!”</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <span className="quote-icon"><img width="33" height="24" src="assets/images/quote-icon.svg"
                                    alt=""/></span>
                            <div className="client-image-title-wp">

                                <div className="client-info">
                                    <h4 className="h4-title">Daniel Wilson</h4>
                                    <span className="client-profession">Our Student</span>
                                    <div className="star-group">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="client-review-text">
                                <p>“I’m really happy with the quality of work. My homework was always perfect”</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <span className="quote-icon"><img width="33" height="24" src="assets/images/quote-icon.svg"
                                    alt=""/></span>
                            <div className="client-image-title-wp">

                                <div className="client-info">
                                    <h4 className="h4-title">Jack Benjamin</h4>
                                    <span className="client-profession">Our Student</span>
                                    <div className="star-group">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="client-review-text">
                                <p>“Honestly, the best help I’ve ever used for online studies”</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <span className="quote-icon"><img width="33" height="24" src="assets/images/quote-icon.svg"
                                    alt=""/></span>
                            <div className="client-image-title-wp">

                                <div className="client-info">
                                    <h4 className="h4-title">Saman Willow</h4>
                                    <span className="client-profession">Our Student</span>
                                    <div className="star-group">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="client-review-text">
                                <p>“I had multiple assignments due. Class Takers Pro took care of everything smoothly”
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <span className="quote-icon"><img width="33" height="24" src="assets/images/quote-icon.svg"
                                    alt=""/></span>
                            <div className="client-image-title-wp">

                                <div className="client-info">
                                    <h4 className="h4-title">Samuel John</h4>
                                    <span className="client-profession">Our Student</span>
                                    <div className="star-group">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="client-review-text">
                                <p>“They handled my online exams so well, I actually relaxed for once”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="swiper testimonial-slider-2">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <span className="quote-icon"><img width="33" height="24" src="assets/images/quote-icon.svg"
                                    alt=""/></span>
                            <div className="client-image-title-wp">

                                <div className="client-info">
                                    <h4 className="h4-title">Ryan Mitchell</h4>
                                    <span className="client-profession">Our Student</span>
                                    <div className="star-group">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="client-review-text">
                                <p>“Perfect service! They managed my class deadlines like real pros”</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <span className="quote-icon"><img width="33" height="24" src="assets/images/quote-icon.svg"
                                    alt=""/></span>
                            <div className="client-image-title-wp">

                                <div className="client-info">
                                    <h4 className="h4-title">Hannah Rhodes</h4>
                                    <span className="client-profession">Our Student</span>
                                    <div className="star-group">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="client-review-text">
                                <p>“Class Takers Pro helped me complete my entire semester without stress”</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <span className="quote-icon"><img width="33" height="24" src="assets/images/quote-icon.svg"
                                    alt=""/></span>
                            <div className="client-image-title-wp">

                                <div className="client-info">
                                    <h4 className="h4-title">Michael Torres</h4>
                                    <span className="client-profession">Our Student</span>
                                    <div className="star-group">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="client-review-text">
                                <p>“Honestly, best decision I made for my online course”</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <span className="quote-icon"><img width="33" height="24" src="assets/images/quote-icon.svg"
                                    alt=""/></span>
                            <div className="client-image-title-wp">

                                <div className="client-info">
                                    <h4 className="h4-title">Ava Bennett</h4>
                                    <span className="client-profession">Our Student</span>
                                    <div className="star-group">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="client-review-text">
                                <p>“They submitted all my assignments on time, and scored great too!”</p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="testimonial-box">
                            <span className="quote-icon"><img width="33" height="24" src="assets/images/quote-icon.svg"
                                    alt=""/></span>
                            <div className="client-image-title-wp">

                                <div className="client-info">
                                    <h4 className="h4-title">Aria Scott</h4>
                                    <span className="client-profession">Our Student</span>
                                    <div className="star-group">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="client-review-text">
                                <p>“Trustworthy and professional. I’ve used them twice already”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>





<section id="results" className="best-instructor-sec">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="sec-title text-center">
                    <span className="sub-title">Our Success Stories</span>
                    <h2 className="h2-title">Results</h2>
                </div>
            </div>
        </div>
        <div className="professional-instructor-slider-wp wow fadeup-animation" data-wow-duration="0.8s"
            data-wow-delay="0.2s">
            <div className="swiper professional-instructor-slider">
                <div className="swiper-wrapper">


                    <div className="swiper-slide">
                        <div className="instructor-box">
                            <div className="instructor-image-box">
                                <img src="assets/images/CTR-1.png" width="416" height="100"
                                    alt="GED Ready Reasoning Through Language Arts score report showing a score of 200"/>
                            </div>

                        </div>
                    </div>


                    <div className="swiper-slide">
                        <div className="instructor-box">
                            <div className="instructor-image-box">
                                <img src="assets/images/CTR-2.png" width="416" height="100"
                                    alt="GED Ready Science score report showing a score of 198"/>
                            </div>
                        </div>
                    </div>


                    <div className="swiper-slide">
                        <div className="instructor-box">
                            <div className="instructor-image-box">
                                <img src="assets/images/CTR-3.png" width="416" height="100"
                                    alt="ATI TEAS Version 7 individual performance profile"/>
                            </div>

                        </div>
                    </div>


                    <div className="swiper-slide">
                        <div className="instructor-box">
                            <div className="instructor-image-box">
                                <img src="assets/images/CTR-4.png" width="416" height="100"
                                    alt="Graduate celebrating in a cap and gown"/>
                            </div>

                        </div>
                    </div>




                    <div className="swiper-slide">
                        <div className="instructor-box">
                            <div className="instructor-image-box">
                                <img src="assets/images/CTR-5.png" width="416" height="100"
                                    alt="GED Ready Science score report showing a score of 198"/>
                            </div>

                        </div>
                    </div>


                    <div className="swiper-slide">
                        <div className="instructor-box">
                            <div className="instructor-image-box">
                                <img src="assets/images/CTR-6.png" width="416" height="100"
                                    alt="Academic performance report showing reading, math, science, and language arts scores"/>
                            </div>

                        </div>
                    </div>




                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </div>
</section>

<FaqAccordion
    sectionId="faqs"
    title="Common Questions About Our Online Class Help Service"
    items={[
        {
            question: "Can you legally do my online class?",
            answer: "We provide academic support and expert assistance for coursework, assignments, quizzes, and exams while keeping your information protected and confidential.",
        },
        {
            question: "How much does it cost to pay someone for online class help?",
            answer: "Pricing depends on course complexity, number of tasks, deadlines, and required support level. We offer custom quotes based on your exact needs.",
        },
        {
            question: "How confidential is your online class help service?",
            answer: "Your privacy matters. We keep your identity, academic information, and communication secure throughout the process.",
        },
    ]}
/>

<RelatedServiceLinks
    title="Explore related academic support"
    items={[
        { href: "/online-exams", label: "Online exam help" },
        { href: "/online-assignment", label: "Online assignment help" },
        { href: "/online-course", label: "Online course help" },
    ]}
/>

  
</div>




   
  );
}

export default OnlineClass;
