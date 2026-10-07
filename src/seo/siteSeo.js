export const siteUrl = "https://classtakerspro.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Class Takers Pro",
  url: siteUrl,
  logo: `${siteUrl}/assets/images/logo-class.png`,
  description: "Online academic support service for online classes, exams, coursework, and assignments.",
  telephone: "+1-608-765-5189",
  email: "support@classtakerspro.com",
  areaServed: "US",
  foundingDate: "2020",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-608-765-5189",
      contactType: "customer support",
      availableLanguage: ["en"],
      areaServed: "US",
    },
  ],
};

export const buildFAQSchema = (faqs, url) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url,
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    "@id": `${url}#${item.id}`,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const buildServiceSchema = ({ name, description, url }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url,
  provider: {
    "@type": "Organization",
    name: "Class Takers Pro",
  },
  areaServed: "US",
  priceRange: "$$",
});

export const homeTestimonials = [
  {
    author: "Henry Lucas",
    reviewBody: "I was too busy with work, and this service saved my grades. Thank you!",
  },
  {
    author: "Daniel Wilson",
    reviewBody: "I’m really happy with the quality of work. My homework was always perfect",
  },
  {
    author: "Jack Benjamin",
    reviewBody: "Honestly, the best help I’ve ever used for online studies",
  },
  {
    author: "Saman Willow",
    reviewBody: "I had multiple assignments due. Class Takers Pro took care of everything smoothly",
  },
  {
    author: "Samuel John",
    reviewBody: "They handled my online exams so well, I actually relaxed for once",
  },
  {
    author: "Ryan Mitchell",
    reviewBody: "Perfect service! They managed my class deadlines like real pros",
  },
  {
    author: "Hannah Rhodes",
    reviewBody: "Class Takers Pro helped me complete my entire semester without stress",
  },
  {
    author: "Michael Torres",
    reviewBody: "Honestly, best decision I made for my online course",
  },
  {
    author: "Ava Bennett",
    reviewBody: "They submitted all my assignments on time, and scored great too!",
  },
  {
    author: "Aria Scott",
    reviewBody: "Trustworthy and professional. I’ve used them twice already",
  },
];

export const buildTestimonialSchema = (testimonials, url) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Class Takers Pro student testimonials",
  url,
  itemListElement: testimonials.map((testimonial, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.author,
      },
      reviewBody: testimonial.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
        worstRating: 1,
      },
      itemReviewed: {
        "@type": "Organization",
        name: "Class Takers Pro",
        url: "https://classtakerspro.com",
      },
    },
  })),
});

export const buildBreadcrumbSchema = (items, url) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url ? `${url}${item.url}` : `${url}`,
  })),
});

export const pageMetadata = {
  home: {
    title: "Online Class Help by PhD Experts | Class Takers Pro",
    description:
      "Expert help for online classes, exams, and assignments. PhD tutors handle 70+ subjects with guaranteed grades and confidential support.",
    keywords: [
      "online class help",
      "hire someone to take my class",
      "online exam help",
      "PhD tutors",
      "academic support service",
    ],
    canonical: "/",
  },
  onlineClass: {
    title: "Pay Someone to Take My Online Class | Expert PhD Tutors",
    description:
      "Need someone to take your online class? Our PhD experts handle coursework, quizzes, attendance, and exams with confidential, affordable support.",
    keywords: [
      "pay someone to take my class",
      "online class help",
      "do my online class",
      "online class tutor",
      "professional class taker",
    ],
    canonical: "/online-class",
  },
  onlineExams: {
    title: "Online Exam Help | Pay Someone to Take My Exam | Guaranteed Grades",
    description:
      "Hire a PhD expert to take your online exam or proctored test. We handle all exam types with confidential support and guaranteed results.",
    keywords: [
      "pay someone to take my exam",
      "online exam help",
      "take my online test",
      "proctored exam help",
      "NCLEX help",
      "GED help",
      "HESI exam help",
    ],
    canonical: "/online-exams",
  },
  onlineCourse: {
    title: "Online Course Help | Complete My Online Course | PhD Experts",
    description:
      "Need help completing an online course? Get expert tutoring, assignment support, and full coursework assistance from certified PhD specialists.",
    keywords: [
      "complete my online course",
      "online course help",
      "coursework assistance",
      "PhD online tutor",
      "take my online course",
    ],
    canonical: "/online-course",
  },
  onlineAssignment: {
    title: "Online Assignment Help | Do My Assignment | Expert Writers",
    description:
      "Professional online assignment help from PhD experts. We write, complete, and submit assignments for all subjects with guaranteed quality.",
    keywords: [
      "do my assignment",
      "online assignment help",
      "pay someone to do my assignment",
      "assignment writer",
      "homework help online",
    ],
    canonical: "/online-assignment",
  },
  contact: {
    title: "Contact Class Takers Pro - Get Free Quote for Academic Help",
    description:
      "Get in touch with our academic support team. Free consultation for assignments, exams, or online class help. 24/7 availability.",
    keywords: [
      "contact class takers pro",
      "academic help support",
      "free quote academic services",
      "online class support",
    ],
    canonical: "/contact",
  },
  privacyPolicy: {
    title: "Privacy Policy & Refund Policy | Class Takers Pro",
    description:
      "Read our privacy policy, refund policy, and revision policy. Your data is confidential and your satisfaction is protected.",
    keywords: [
      "privacy policy",
      "refund policy",
      "revision policy",
      "confidential academic help",
    ],
    canonical: "/privacy-policy",
  },
  terms: {
    title: "Terms & Conditions | Class Takers Pro",
    description:
      "Review the terms and conditions for our online academic support, revisions, and service policies.",
    keywords: [
      "terms and conditions",
      "academic support policy",
      "class takers pro terms",
      "service agreement",
    ],
    canonical: "/terms-and-condition",
  },
};

export const homeFaqs = [
  {
    id: "q1",
    question: "Can I hire someone to take my online class?",
    answer:
      "Yes. Class Takers Pro connects students with verified PhD experts who manage coursework, quizzes, assignments, and exams with complete confidentiality.",
  },
  {
    id: "q2",
    question: "How does your online exam help work?",
    answer:
      "Share your exam details, timing, and requirements. We match you with a qualified expert who handles the exam under your instructions and ensures secure, reliable results.",
  },
  {
    id: "q3",
    question: "Are your PhD tutors verified and qualified?",
    answer:
      "Absolutely. Our team includes certified academic professionals with advanced degrees and subject-specific expertise across more than 70 disciplines.",
  },
];

export const onlineClassFaqs = [
  {
    id: "class-legal",
    question: "Can you legally do my online class?",
    answer:
      "We provide academic support and expert assistance, including tutoring, coursework help, and exam support, while keeping your information confidential and secure.",
  },
  {
    id: "class-cost",
    question: "How much does it cost to pay someone for online class help?",
    answer:
      "Pricing depends on course complexity, subject, deadline, and required support level. We provide transparent quotes tailored to your academic needs.",
  },
  {
    id: "class-private",
    question: "How confidential is your online class help service?",
    answer:
      "Your privacy is a priority. We protect your identity, academic information, and communication through strict confidentiality standards.",
  },
];

export const onlineExamFaqs = [
  {
    id: "exam-possible",
    question: "Can you take my online exam for me?",
    answer:
      "Yes. Our team has experience with regular online exams, proctored tests, NCLEX, GED, TEAS, and HESI assessments with a focus on confidentiality.",
  },
  {
    id: "exam-security",
    question: "How does proctored exam help work?",
    answer:
      "We assess the test setup, exam format, and your timeline before assigning a specialist to handle the process while maintaining a secure and discreet workflow.",
  },
  {
    id: "exam-guaranteed",
    question: "Do you offer guaranteed passing results?",
    answer:
      "We focus on delivering expert support with high-quality execution and realistic expectations, and we remain transparent about timelines and requirements.",
  },
];

export const onlineAssignmentFaqs = [
  {
    id: "assignment-cost",
    question: "How much does it cost to have someone do my assignment?",
    answer:
      "Costs are based on assignment type, level of study, deadline, and complexity. We provide fast pricing after reviewing your task details.",
  },
  {
    id: "assignment-guidance",
    question: "How can assignment help support my studies?",
    answer:
      "Get expert guidance with research, structure, and feedback tailored to your assignment brief. Our support helps you understand the requirements, strengthen your work, and stay on track with deadlines.",
  },
  {
    id: "assignment-speed",
    question: "How quickly can you complete my assignment?",
    answer:
      "We handle urgent projects as well. Turnaround depends on deadline and the scope of work, but the team is ready for fast delivery when required.",
  },
];

export const onlineCourseFaqs = [
  {
    id: "course-subjects",
    question: "What subjects can you help with?",
    answer:
      "We support online coursework across subjects including business, engineering, computer science, healthcare, humanities, and social sciences. Share your course details so we can confirm the right subject support.",
  },
  {
    id: "course-process",
    question: "How does online course help work?",
    answer:
      "Tell us about your course, assignments, schedule, and goals. We review the requirements and explain the available tutoring and coursework support before work begins.",
  },
  {
    id: "course-timeline",
    question: "How long does online course support take?",
    answer:
      "Timing depends on the course workload, subject, and deadlines. We review your schedule first and confirm a realistic plan for the support you need.",
  },
];
