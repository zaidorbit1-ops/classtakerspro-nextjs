import React  from "react";
import Link from "next/link";
import FaqAccordion from "./FaqAccordion";
import { RelatedServiceLinks, SectionJumpLinks } from "./ContentNavigation";

function Index() {
    return (
<div>


    <section className="main-banner">
        <div className="main-banner-bg-shape">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
        </div>
        <div className="main-banner-bg-aliment-wp">
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
            <div className="bg-aliment-9 animate-this">
                <img src="assets/images/aliment-07.svg" width="38" height="32" alt=""/>
            </div>
            <div className="bg-aliment-10 zoom-fade-animation">
                <img src="assets/images/aliment-03.svg" width="29" height="29" alt=""/>
            </div>
            <div className="bg-aliment-11 zoom-fade-animation">
                <img src="assets/images/aliment-03.svg" width="29" height="29" alt=""/>
            </div>
            <div className="bg-aliment-12 animate-this">
                <img src="assets/images/aliment-08.svg" width="34" height="34" alt=""/>
            </div>
            <div className="bg-aliment-13 zoom-fade-animation">
                <img src="assets/images/aliment-03.svg" width="44" height="44" alt=""/>
            </div>
            <div className="bg-aliment-14 rotate-animation">
                <img src="assets/images/aliment-09.svg" width="30" height="30" alt=""/>
            </div>
            <div className="bg-aliment-15 zoom-fade-animation">
                <img src="assets/images/aliment-03.svg" width="58" height="58" alt=""/>
            </div>
            <div className="bg-aliment-16 animate-this">
                <img src="assets/images/aliment-10.svg" width="26" height="22" alt=""/>
            </div>
            <div className="bg-aliment-17 rotate-animation">
                <img src="assets/images/aliment-11.svg" width="30" height="30" alt=""/>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="banner-content">
                        <span className="sub-title wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.2s">10,000+ students got expert online class help from PhD tutors</span>
                        <h1 className="h1-title wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.3s">Online Academic Support for All Levels by PhD Experts</h1>
                        <div className="banner-description-wp wow fadeup-animation" data-wow-duration="0.8s"
                            data-wow-delay="0.4s">
                            <div className="banner-description-text">
                                <p>Need online class help, online exam help, or assignment support? We help students hire someone to take their class with confidential, expert academic support.</p>
                            </div>
                            <div className="students-list">
                                <ul>
                                    <li>
                                        <div className="students-image">
                                            <img src="assets/images/student-01.jpg" width="60" height="60"
                                                alt="Student success story from Class Takers Pro"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="students-image">
                                            <img src="assets/images/student-02.jpg" width="60" height="60"
                                                alt="Happy student receiving online class help"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="students-image">
                                            <img src="assets/images/student-03.jpg" width="60" height="60"
                                                alt="Successful learner supported by PhD tutors"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="students-image">
                                            <div className="students-counter-box" id="students_Passed_counter">
                                                <h5 className="h5-title"><span className="counting" data-count="25">0</span>k
                                                </h5>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="students-list-text">
                                    <p>Students Have Passed</p>
                                </div>
                            </div>
                        </div>
                        <div className="banner-btn wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.5s">
                            <Link href="/contact" className="sec-btn" title="Hire PhD Tutor - Get Free Quote"><span>Hire PhD Tutor - Get Free Quote</span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner-image-content wow fadeup-animation" data-wow-duration="0.8s"
                        data-wow-delay="0.4s">
                        <div className="banner-image-shape">
                            <img src="assets/images/arrow-aliment.svg" className="move-element-animation-1" width="123"
                                height="142" alt=""/>
                        </div>
                        <div className="banner-image-box">
                            <div className="banner-image">
                                <img src="assets/images/banner-img.png" width="510" height="697" alt="Professional academic tutor helping student with online class assignment at desk"/>
                            </div>
                        </div>
                        <div className="congra-box move-element-animation-2">
                            <div className="congra-icon">
                                <img src="assets/images/note-icon.svg" width="24" height="30" alt=""/>
                            </div>
                            <div className="congra-text">
                                <h5 className="h5-title">Class Takers Pro</h5>
                                <p>Guided thousands to success</p>
                            </div>
                        </div>
                        <div className="certification-box-wp">
                            <div className="certification-icon">
                                <img src="assets/images/right-big-icon.svg" width="30" height="15" alt=""/>
                            </div>
                            <div className="certification-box">
                                <div className="certification-text">
                                    <p>certification guaranty100%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <SectionJumpLinks sections={[
        { id: "services", label: "Services" },
        { id: "subjects", label: "Subjects" },
        { id: "about", label: "About us" },
        { id: "why-choose-us", label: "Why choose us" },
        { id: "testimonials", label: "Testimonials" },
        { id: "faqs", label: "FAQs" },
    ]} />

  
    <div className="main-partners">
        <div className="container-fluid">
            <div className="swiper partners-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide partners-slide">
                        <img src="assets/images/logo1.png" width="144" height="43" alt=""/>
                    </div>
                    <div className="swiper-slide partners-slide">
                        <img src="assets/images/logo2.png" width="150" height="26" alt="Yale University logo"/>
                    </div>
                    <div className="swiper-slide partners-slide">
                        <img src="assets/images/logo3.png" width="150" height="30" alt="Harvard University logo"/>
                    </div>
                    <div className="swiper-slide partners-slide">
                        <img src="assets/images/logo4.png" width="150" height="52" alt="Stanford University logo"/>
                    </div>
                    <div className="swiper-slide partners-slide">
                        <img src="assets/images/logo5.png" width="150" height="19" alt="University of Pennsylvania logo"/>
                    </div>
                    <div className="swiper-slide partners-slide">
                        <img src="assets/images/logo6.png" width="150" height="34" alt="New York University logo"/>
                    </div>
                    <div className="swiper-slide partners-slide">
                        <img src="assets/images/logo7.png" width="150" height="44" alt="University of Chicago logo"/>
                    </div>
                    <div className="swiper-slide partners-slide">
                        <img src="assets/images/logo8.png" width="150" height="41" alt="Caltech logo"/>
                    </div>
                    <div className="swiper-slide partners-slide">
                        <img src="assets/images/logo9.png" width="150" height="52" alt="Boston University logo"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
   


 <section id="subjects" className="top-category-list-sec sec-space">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="sec-title text-center">
                        <span className="sub-title"></span>
                        <h2 className="h2-title">Expert Help in 70+ Subjects</h2>
                    </div>
                </div>
            </div>
            <div className="row top-category-list-row">
                <div className="col-xl-4 col-md-6">
                    <div className="category-list-box wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.3s">
                        <div className="category-list-icon">
                            <img src="assets/images/category-icon-1.svg" className="category-icon" width="50" height="55"
                                alt=""/>
                            <img src="assets/images/category-hover-icon-1.svg" className="category-icon hover-icon"
                                width="50" height="55" alt=""/>
                        </div>
                        <div className="category-list-text">
                            <a href="/online-class" title="Design & Learn Art">
                                <h4 className="h4-title">Computer Science</h4>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="category-list-box wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.4s">
                        <div className="category-list-icon">
                            <img src="assets/images/category-icon-2.svg" className="category-icon" width="50" height="50"
                                alt=""/>
                            <img src="assets/images/category-hover-icon-2.svg" className="category-icon hover-icon"
                                width="50" height="50" alt=""/>
                        </div>
                        <div className="category-list-text">
                            <a href="/online-class" title="Learn Data Science">
                                <h4 className="h4-title">Engineering</h4>
                            </a>
                      
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="category-list-box wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.5s">
                        <div className="category-list-icon">
                            <img src="assets/images/category-icon-3.svg" className="category-icon" width="51" height="49"
                                alt=""/>
                            <img src="assets/images/category-hover-icon-3.svg" className="category-icon hover-icon"
                                width="51" height="49" alt=""/>
                        </div>
                        <div className="category-list-text">
                            <a href="/online-class" title="Business Strategy">
                                <h4 className="h4-title">Education</h4>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="category-list-box wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.6s">
                        <div className="category-list-icon">
                            <img src="assets/images/category-icon-4.svg" className="category-icon" width="50" height="50"
                                alt=""/>
                            <img src="assets/images/category-hover-icon-4.svg" className="category-icon hover-icon"
                                width="50" height="50" alt=""/>
                        </div>
                        <div className="category-list-text">
                            <a href="/online-class" title="Learn Marketing">
                                <h4 className="h4-title">Psychology</h4>
                            </a>
                        
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="category-list-box wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.7s">
                        <div className="category-list-icon">
                            <img src="assets/images/category-icon-5.svg" className="category-icon" width="50" height="50"
                                alt=""/>
                            <img src="assets/images/category-hover-icon-5.svg" className="category-icon hover-icon"
                                width="50" height="50" alt=""/>
                        </div>
                        <div className="category-list-text">
                            <a href="/online-class" title="Learn Lifestyle">
                                <h4 className="h4-title">Chemistry</h4>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="category-list-box wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.8s">
                        <div className="category-list-icon">
                            <img src="/assets/images/Bio.svg" className="category-icon" width="50" height="50"
                                alt=""/>
                            <img src="assets/images/bio-white.svg" className="category-icon hover-icon"
                                width="50" height="50" alt=""/>
                        </div>
                        <div className="category-list-text">
                            <a href="/online-class" title="Learn Finance">
                                <h4 className="h4-title">Biology</h4>
                            </a>
                           
                        </div>
                    </div>
                </div>
                 <div className="col-xl-4 col-md-6">
                    <div className="category-list-box wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.8s">
                        <div className="category-list-icon">
                            <img src="assets/images/physics.svg" className="category-icon" width="50" height="50"
                                alt=""/>
                            <img src="assets/images/physics-white.svg" className="category-icon hover-icon"
                                width="50" height="50" alt=""/>
                        </div>
                        <div className="category-list-text">
                            <a href="/online-class" title="Learn Finance">
                                <h4 className="h4-title">Physics</h4>
                            </a>
                           
                        </div>
                    </div>
                </div>
                 <div className="col-xl-4 col-md-6">
                    <div className="category-list-box wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.8s">
                        <div className="category-list-icon">
                            <img src="assets/images/category-icon-6.svg" className="category-icon" width="50" height="50"
                                alt=""/>
                            <img src="assets/images/category-hover-icon-6.svg" className="category-icon hover-icon"
                                width="50" height="50" alt=""/>
                        </div>
                        <div className="category-list-text">
                            <a href="/online-class" title="Learn Finance">
                                <h4 className="h4-title">Social Sciences</h4>
                            </a>
                            
                        </div>
                    </div>
                </div>
                 <div className="col-xl-4 col-md-6">
                    <div className="category-list-box wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.8s">
                        <div className="category-list-icon">
                            <img src="assets/images/Maths.svg" className="category-icon" width="50" height="50"
                                alt=""/>
                            <img src="assets/images/Maths-white.svg" className="category-icon hover-icon"
                                width="50" height="50" alt=""/>
                        </div>
                        <div className="category-list-text">
                            <a href="/online-class" title="Learn Finance">
                                <h4 className="h4-title">Maths</h4>
                            </a>
                            
                        </div>
                    </div>
                </div>
                 <div className="col-xl-4 col-md-6">
                    <div className="category-list-box wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.8s">
                        <div className="category-list-icon">
                            <img src="assets/images/algebra.svg" className="category-icon" width="50" height="50"
                                alt=""/>
                            <img src="assets/images/algebra-white.svg" className="category-icon hover-icon"
                                width="50" height="50" alt=""/>
                        </div>
                        <div className="category-list-text">
                            <a href="/online-class" title="Learn Finance">
                                <h4 className="h4-title">Algebra</h4>
                            </a>
                          
                        </div>
                    </div>
                </div>
                 <div className="col-xl-4 col-md-6">
                    <div className="category-list-box wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.8s">
                        <div className="category-list-icon">
                            <img src="assets/images/International.svg" className="category-icon" width="50" height="50"
                                alt=""/>
                            <img src="assets/images/International-white.svg" className="category-icon hover-icon"
                                width="50" height="50" alt=""/>
                        </div>
                        <div className="category-list-text">
                            <a href="/online-class" title="Learn Finance">
                                <h4 className="h4-title">International Relation</h4>
                            </a>
                           
                        </div>
                    </div>
                </div>
                 <div className="col-xl-4 col-md-6">
                    <div className="category-list-box wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.8s">
                        <div className="category-list-icon">
                            <img src="assets/images/finance.svg" className="category-icon" width="50" height="50"
                                alt=""/>
                            <img src="assets/images/finance-white.svg" className="category-icon hover-icon"
                                width="50" height="50" alt=""/>
                        </div>
                        <div className="category-list-text">
                            <a href="/online-class" title="Learn Finance">
                                <h4 className="h4-title">Finance</h4>
                            </a>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
  </section>
 


    <section id="services" className="top-course-sec sec-space-top sec-bg">
        <div className="container">
            <div className="top-course-title">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="sec-title">
                            <span className="sub-title"></span>
                            <h2 className="h2-title">Services We Offer</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="grid wow fadeup-animation" data-wow-duration="0.8s" data-wow-delay="0.4s">
                <div className="grid-item" data-type="computer-science">
                    <div className="common-post-card">
                        <div className="post-image-box-wp">
                            <div className="post-image">
                                <img src="assets/images/course-image-1.jpg" width="356" height="230" alt="Students studying together around a laptop"/>
                            </div>
                            <div className="post-tag">
                                <span>Class Help</span>
                            </div>
                        </div>
                        <div className="common-post-content">
                            <div className="post-lessons-info">
                                <ul>
                                   
                                    
                                </ul>
                            </div>
                            <div className="post-content-title">
                                <Link href="/online-class" title="Online class help">
                                     <h4 className="h4-title">Online Class Help</h4>
                                    <p style={{ color: 'black' }}>The best method for finishing your online eductaion is this one. Simply pay your fees and allow our professionals to assist you during your classes. Our PhD specialists cover everything from mathematics to physics and chemistry. Get the grades you want by getting support in more than 70 subjects.</p>

                                </Link>
                            </div>
                            <div className="course-price">
                                
                            </div>
                            <div className="post-author-review-info">
                                <div className="post-author-info">
                                    
                                    <div className="post-author-name">
                                    </div>
                                </div>
                                <div className="post-review-info">
                                   
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item" data-type="computer-science">
                    <div className="common-post-card">
                        <div className="post-image-box-wp">
                            <div className="post-image">
                                <img src="assets/images/course-image-2.jpg" width="356" height="230" alt="ATI proctored assessment score report"/>
                            </div>
                            <div className="post-tag">
                                <span> Exam Help</span>
                            </div>
                        </div>
                        <div className="common-post-content">
                            <div className="post-lessons-info">
                                <ul>
                                    
                                    
                                </ul>
                            </div>
                            <div className="post-content-title">
                                <Link href="/online-exams" title="Online exam help">
                                    <h4 className="h4-title">Online Exam Help</h4>
                                    <p style={{ color: 'black' }}>Are you sick of repeatedly failing the same subjects? Our PhD specialists are here to assist you with your online exams, so don't worry. While you sit back and relax, why not let the experts handle it? Simply provide the test information, pay, and let us handle the rest. Class Takers Pro  is dedicated to assisting you in achieving your learning objectives.</p>

                                </Link>
                            </div>
                            <div className="course-price">
                                
                            </div>
                            <div className="post-author-review-info">
                                <div className="post-author-info">
                                    
                                    <div className="post-author-name">

                                    </div>
                                </div>
                                <div className="post-review-info">
                                   
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item" data-type="data-science">
                    <div className="common-post-card">
                        <div className="post-image-box-wp">
                            <div className="post-image">
                                <img src="assets/images/course-image-3.jpg" width="356" height="230" alt="Student using a tablet while classmates study nearby"/>
                            </div>
                            <div className="post-tag">
                                <span>Homework Help</span>
                            </div>
                        </div>
                        <div className="common-post-content">
                            <div className="post-lessons-info">
                                <ul>
                                    
                                </ul>
                            </div>
                            <div className="post-content-title">
                                <Link href="/online-assignment" title="Online assignment help">
                                    <h4 className="h4-title">Online Homework Help</h4>
                                    <p style={{ color: 'black' }}>Yes, you heard correctly. Our experts are here to assist you with your assignments. Simply register, submit your assignment, pay, and let our experts take care of the rest. Expert help is only a click away with support available in more than 70 subjects, including computer science, chemistry, physics, engineering, and more.</p>

                                </Link>
                            </div>
                            <div className="course-price">
                                
                            </div>
                            <div className="post-author-review-info">
                                <div className="post-author-info">
                                    
                                    <div className="post-author-name">

                                    </div>
                                </div>
                                <div className="post-review-info">
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item" data-type="data-science">
                    <div className="common-post-card">
                        <div className="post-image-box-wp">
                            <div className="post-image">
                                <img src="assets/images/course-image-4.jpg" width="356" height="230" alt="Student studying at a library desk"/>
                            </div>
                            <div className="post-tag">
                                <span> Course Help</span>
                            </div>
                        </div>
                        <div className="common-post-content">
                            <div className="post-lessons-info">
                                <ul>
                                    
                                </ul>
                            </div>
                            <div className="post-content-title">
                                <Link href="/online-course" title="Online course help">
                                    <h4 className="h4-title">Online Course Help</h4>
                                    <p style={{ color: 'black' }}>Concerned about your academic performance? Do you need a helping hand? You can get help for your online class here. Our professionals from top colleges are prepared to take on your duties. Take a seat back, relax, and get the grade you want.</p>

                                </Link>
                            </div>
                           
                            <div className="post-author-review-info">
                                <div className="post-author-info">
                                    
                                    <div className="post-author-name">

                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item" data-type="engineering">
                    <div className="common-post-card">
                        <div className="post-image-box-wp">
                            <div className="post-image">
                                <img src="assets/images/course-image-5.jpg" width="356" height="230" alt="Students working together in a classroom"/>
                            </div>
                            <div className="post-tag">
                                <span>Assignment Help</span>
                            </div>
                        </div>
                        <div className="common-post-content">
                            <div className="post-lessons-info">
                                <ul>
                                    
                                </ul>
                            </div>
                            <div className="post-content-title">
                                <Link href="/online-assignment" title="Online assignment help">
                                    <h4 className="h4-title">Online Assignment Help</h4>
                                    <p style={{ color: 'black' }}>Managing your personal and professional lives can be challenging. Do you want to do well on your test? Let our professionals handle it for you. Don't worry. Simply pay the price, work with an expert, and receive the necessary online test results.</p>

                                </Link>
                            </div>
                            
                            <div className="post-author-review-info">
                                <div className="post-author-info">
                                    
                                    <div className="post-author-name">

                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item" data-type="engineering">
                    <div className="common-post-card">
                        <div className="post-image-box-wp">
                            <div className="post-image">
                                <img src="assets/images/course-image-6.jpg" width="356" height="230" alt="Study group collaborating around a laptop"/>
                            </div>
                            <div className="post-tag">
                                <span> Test Help</span>
                            </div>
                        </div>
                        <div className="common-post-content">
                            <div className="post-lessons-info">
                                <ul>
                                   
                                </ul>
                            </div>
                            <div className="post-content-title">
                                <Link href="/online-exams" title="Online test and exam help">
                                    <h4 className="h4-title">Online Test Help</h4>
                                    <p style={{ color: 'black' }}>Balancing work and personal life can be tough. Want to achieve top marks on your exam? Let our experts take care of it for you. No stress. just pay the fee, hire a professional, and get the results you need on your online test.</p>

                                </Link>
                            </div>
                           
                            <div className="post-author-review-info">
                                <div className="post-author-info">
                                    
                                    <div className="post-author-name">

                                    </div>
                                </div>
                                <div className="post-review-info">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section id="about" className="about-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about-image-content wow left-animation" data-wow-duration="0.8s" data-wow-delay="0.2s">
                        <div className="about-image-box-wp">
                            <div className="about-image-box-bg">
                                <div className="about-image-bg-shape"></div>
                            </div>
                            <div className="about-image">
                                <img src="assets/images/about-us-image.png" width="444" height="557"
                                        alt="Student reading an open book"/>
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
                                <p>100% Than Last Month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center">
                    <div className="about-content wow right-animation" data-wow-duration="0.8s" data-wow-delay="0.2s">
                        <div className="sec-title">
                           
                            <h2 className="h2-title">Experts from Top Universities in USA</h2>
                        </div>
                        <div className="about-text">
                            <p>Are you anxious about your tests, quizzes, or assignments? Why not hire a Ph.D. expert to handle all of your academic problems and get the grade you desire as you spend time relaxing?</p>
                        </div>
                        <div className="about-feature-info">
                            
                          
                        </div>
                        <div className="about-content-btn">
                            <Link href="/contact" className="sec-btn" title="Read More"><span>Get A Free Quote</span></Link>
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
    
    

   

    
    <section id="why-choose-us" className="our-skills-sec sec-space">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="our-skills-content wow left-animation" data-wow-duration="0.8s" data-wow-delay="0.2s">
                        <div className="sec-title">
                            <span className="sub-title">Our Skills</span>
                            <h2 className="h2-title">Top Results in Online Exams & Classes</h2>
                        </div>
                        <div className="our-skills-text">
                            <p>We’ve helped thousands of students complete their online classes, exams, and assignments with top grades and full confidentiality. Reliable support, expert tutors, and guaranteed results.</p>
                        </div>
                        <div className="our-skills-feature-info">
                            <div className="our-skills-feature-box">
                                <div className="our-skills-feature-icon-title">
                                    <div className="our-skills-feature-icon">
                                        <img src="assets/images/circle-check-icon.svg" width="20" height="20"
                                            alt=""/>
                                    </div>
                                    <h4 className="h4-title">Expert Tutors</h4>
                                </div>
                                <div className="our-skills-feature-text">
                                    <p>Qualified professionals handle your classes, quizzes, and exams securely.</p>
                                </div>
                            </div>
                            <div className="our-skills-feature-box">
                                <div className="our-skills-feature-icon-title">
                                    <div className="our-skills-feature-icon">
                                        <img src="assets/images/circle-check-icon.svg" width="20" height="20"
                                            alt=""/>
                                    </div>
                                    <h4 className="h4-title">Guaranteed Grades</h4>
                                </div>
                                <div className="our-skills-feature-text">
                                    <p>Consistent A & B results for our students.</p>
                                </div>
                            </div>
                            <div className="our-skills-feature-box">
                                <div className="our-skills-feature-icon-title">
                                    <div className="our-skills-feature-icon">
                                        <img src="assets/images/circle-check-icon.svg" width="20" height="20"
                                            alt=""/>
                                    </div>
                                    <h4 className="h4-title">Confidential & Secure</h4>
                                </div>
                                <div className="our-skills-feature-text">
                                    <p>Your privacy and data are fully protected.</p>
                                </div>
                            </div>
                            <div className="our-skills-feature-box">
                                <div className="our-skills-feature-icon-title">
                                    <div className="our-skills-feature-icon">
                                        <img src="assets/images/circle-check-icon.svg" width="20" height="20"
                                            alt=""/>
                                    </div>
                                    <h4 className="h4-title">24/7 Assistance</h4>
                                </div>
                                <div className="our-skills-feature-text">
                                    <p>We’re available around the clock for urgent tasks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center">
                    <div className="skill-counter-box-wp wow right-animation" data-wow-duration="0.8s"
                        data-wow-delay="0.2s">
                        <div className="skill-counter-box" id="progress_bar">
                            <div className="skill-progress-one">
                                <div className="skill-bar-box-one">
                                    <h4 className="h4-title">Class Completion Rate</h4>
                                    <div className="skill-bar-percent-one">
                                        <h4 className="h4-title counting" data-count="95">0</h4>
                                        <span className="h4-title">%</span>
                                    </div>
                                    <div className="skill-bar skill-bar-one" data-width="99%">
                                        <div className="skill-bar-inner skill-bar-inner-one"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-progress-one">
                                <div className="skill-bar-box-one">
                                    <h4 className="h4-title">Exam Success</h4>
                                    <div className="skill-bar-percent-one">
                                        <h4 className="h4-title counting" data-count="98">0</h4>
                                        <span className="h4-title">%</span>
                                    </div>
                                    <div className="skill-bar skill-bar-one" data-width="98%">
                                        <div className="skill-bar-inner skill-bar-inner-one"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-progress-one">
                                <div className="skill-bar-box-one">
                                    <h4 className="h4-title">Assignment Accuracy</h4>
                                    <div className="skill-bar-percent-one">
                                        <h4 className="h4-title counting" data-count="94">0</h4>
                                        <span className="h4-title">%</span>
                                    </div>
                                    <div className="skill-bar skill-bar-one" data-width="94%">
                                        <div className="skill-bar-inner skill-bar-inner-one"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-progress-one">
                                <div className="skill-bar-box-one">
                                    <h4 className="h4-title">Student Satisfaction</h4>
                                    <div className="skill-bar-percent-one">
                                        <h4 className="h4-title counting" data-count="99">0</h4>
                                        <span className="h4-title">%</span>
                                    </div>
                                    <div className="skill-bar skill-bar-one" data-width="99%">
                                        <div className="skill-bar-inner skill-bar-inner-one"></div>
                                    </div>
                                </div>
                            </div>
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
                                    <p>“I had multiple assignments due. Class Takers Pro took care of everything smoothly”</p>
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

    <section className="sec-space" style={{ background: '#f7f9fc' }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <div className="sec-title">
                        <span className="sub-title">Why Choose Our Online Class Help Service?</span>
                        <h2 className="h2-title">Trusted academic support for online classes, exams, and assignments</h2>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div className="about-feature-box" style={{ height: '100%' }}>
                                <div className="about-feature-text">
                                    <h4 className="h4-title">Expert PhD Tutors</h4>
                                    <p>We connect you with verified specialists for online class help, exam support, and assignment writing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-feature-box" style={{ height: '100%' }}>
                                <div className="about-feature-text">
                                    <h4 className="h4-title">Confidential Process</h4>
                                    <p>Your data, coursework, and communication stay protected throughout the support process.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-feature-box" style={{ height: '100%' }}>
                                <div className="about-feature-text">
                                    <h4 className="h4-title">Guaranteed Results</h4>
                                    <p>We focus on quality, timely delivery, and academic guidance that helps you succeed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <FaqAccordion
        sectionId="faqs"
        title="Common Questions About Our Academic Help Service"
        items={[
            {
                question: "Can I hire someone to take my online class?",
                answer: "Yes. We help students with online class support, including attendance, coursework, quizzes, assignments, and exams through experts with relevant academic backgrounds.",
            },
            {
                question: "How does your online exam help work?",
                answer: "Share your exam requirements, deadline, and platform details. Our team assigns a qualified specialist and outlines the best support approach for your situation.",
            },
            {
                question: "Are your PhD tutors verified and qualified?",
                answer: "Every expert is vetted for subject expertise, academic quality, and reliability so students receive trusted support in their online classes and assessments.",
            },
        ]}
    />
    <RelatedServiceLinks
        title="Explore our academic support services"
        items={[
            { href: "/online-class", label: "Online class help" },
            { href: "/online-exams", label: "Online exam help" },
            { href: "/online-assignment", label: "Online assignment help" },
            { href: "/online-course", label: "Online course help" },
        ]}
    />
 




        </div>
   
    )
}

export default Index
