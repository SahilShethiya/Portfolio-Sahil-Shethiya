import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  // plugins: [createPersistedState()],
  // Directly populating the state value since currently not doing in write/update or delete operations
  state: {
    userData: {
      profilePhoto: "sahil/Profile.jpeg",
      name: "Sahil Shethiya",
      position: "Software Engineer",
      email: "sahilvshethiya@gmail.com ",
      phone: "+1-(343)-333-5462",
      bio: `
      <p>As a seasoned software developer with a master's degree and three years of practical experience, I possess a wealth of expertise in creating eCommerce and SaaS web-based, batch, and streaming applications.  have a proven track record in managing the entire software development lifecycle and a talent for transforming intricate user req into cost-effective solutions. </p>
      `,
    },
    //Level out of 100
    userSkills: [
      {
        name: "Java",
        level: 90,
      },
      {
        name: "Spring",
        level: 100,
      },
      {
        name: "Scala",
        level: 80,
      },
      {
        name: "CI/CD",
        level: 79,
      },
      {
        name: "API's",
        level: 90,
      },
      {
        name: "TDD",
        level: 100,
      },
      {
        name: "REST",
        level: 90,
      },
    ],
    abSkills: [
      {
        name: "HTML",
        level: 90,
      },
      {
        name: "CSS",
        level: 100,
      },
      {
        name: "JavaScript",
        level: 70,
      },
      {
        name: "SQL",
        level: 95,
      },
    ],
    userExperience: [
      {
        companyLogo: "sahil/Kroger-logo.png",
        companyName: "Kroger",
        duration: "July 2021 - Present",
        position: "Software Engineer",
        description: `
        <ul class="sm:pl-6 list-disc">
      <li>Collaborated with Developers to Build a large-scale price delivery application for Kroger's POS system within a year, using the latest technologies such as Java8, Spring, REST, Azure, Databricks, Scala APIs, Spark, Apache Kafka, Delta Lake, and SQL databases. The application covered 2100 stores state-wide and drove billions of dollars in annual revenue.</li>
      <li>Designed and implemented CI/CD pipelines for multiple software projects, reducing deployment time by 50% and saving $20,000 operational cost annually. Azure DevOps, GitHub Actions, Harness (Slot, Blue-Green Deployment)</li>
      <li>Promoted a culture of quality and continues improvement by providing guidance, best practices and mentorship
to junior developer resulting in, improved code quality and reducing code smells by 30%.</li>
      <li>Employed the Test-Driven Development (TDD), Unit Testing, Integration testing to reduce code debt, enhanced
code quality and increase code coverage using Junit, SonarQube.</li>
      <li>Designed and Integrated Infrastructure as code using Terraform, allowing new services to be deployed on Azure
90% faster, improved System Scalability and integrated GHA pipelines to automate infrastructure changes.</li>
      <li>Participated in monthly System Design meetings and offered pertinent improvements on the system's
requirements while taking risk assessment, system scalability, and performance into consideration.</li>
      </ul>
      `,
      },
      {
        companyLogo: "sahil/Queens-logo.png",
        companyName: "Queen's University",
        duration: "SEP 2019 - DEC 2020",
        position: "Graduate Teaching Assistant",
        description: `
        <ul class="sm:pl-6 list-disc">
        <li>Lead the TA staff to guarantee correct work distribution to deliver the course on schedule.</li>
        <li>TA Courses: JAVA Programming, Object Oriented Programming, Operating Systems.</li>
        </ul>
     `,
      },
      {
        companyLogo: "sahil/Softvan-logo.png",
        companyName: "Softvan",
        duration: "Jan 2018 - Jan 2019",
        position: "Software Engineer",
        description: `
        <ul class="sm:pl-6 list-disc">
        <li>Produced and Consumed multiple RESTful APIs for various microservices using Java and Spring Framework
to enable seamless integration with external applications.</li>
        <li>Designed various multithreaded Java application which improved Resource utilization and consistency.</li>
        <li>Designing and implementing API documentation using Swagger UI, Postman, Confluence which increased
documentation from 20% to 80% allowing internal and external vendors to consume the APIs easily.</li>
        <li>Integrated AWS ELB and ALB Services to distribute traffic across multiple instances with auto-scaling ability.</li>
        <li>Create website layout/user interface by using standard HTML/CSS practices</li>
        <li>Integrate data from various back-end services and databases</li>
        <li>Gather and refine specifications and requirements based on technical needs</li>
        <li>Cooperate with web designers to match visual design intent</li>
        <li>Utilized Kubernetes, Jenkins for deploying containerized applications which reduced deployment time by 50%.</li>
        </ul>
      `,
      },
    ],
    userBlogs: [
      {
        title: `Microservice communication — Technology choices`,
        blogBanner: "sahil/Medium-blog-3.webp",
        description: `
          <p>There are whole hosts of technology is available but I want to focus on the most popular and interesting choices. Some of the options we’ll be looking at today are gRPC, REST, GraphQL.</p>
          `,
        link: `https://medium.com/@sahilvshethiya/microservice-communication-technology-choices-330d30f49b4a`,
      },
      {
        title: `Microservices communication styles and Patterns`,
        blogBanner: "sahil/Medium-blog-2.webp",
        description: `
          <p>Let’s start with basics on how multiple microservices can be communicate and what are different points we need to take into account based on our use case and set communication between sets of microservices internally within teams and externally as well. To kick things of there are mainly two types of communication styles : Synchronous blocking and Asynchronous non-blocking and the rest of communication styles falls between this two.</p>
         `,
        link: `https://medium.com/@sahilvshethiya/microservices-communication-styles-and-patterns-1728926e4542`,
      },
      {
        title: `Things to keep in mind while breaking Monolith System into Micro services.`,
        blogBanner: "sahil/Medium-blog-1.webp",
        description: `
          <p>First things first, monolith systems are never the enemy. Breaking the monolith system is a conscious effort made by the team to reduce the bottlenecks and increase the system scalability, ability to release into production frequently without disturbing other module and to loosely couple different module with high cohesion.</p>`,
        link: `https://medium.com/@sahilvshethiya/things-to-keep-in-mind-while-breaking-monolith-system-into-micro-services-2b20c4374218`,
      },
    ],
    userCertifications: [
      {
        title: "AWS Solution Architect Associate",
        photo: "sahil/AWS-SAA.png",
        description: "",
      },
      {
        title: "Azure Fundamentals",
        photo: "sahil/AZURE-AZ900.png",
        description:
            "",
      },
    ],

    userSocialFooter: [
      {
        title: "Linkedin",
        logo: "sahil/linkedin-logo.png",
        link: "https://www.linkedin.com/in/sahilshethiya/",
      },
      {
        title: "Github",
        logo: "sahil/github-logo.png",
        link: "https://github.com/sahilshethiya",
      },
      {
        title: "Instagram",
        logo: "sahil/instagram-logo.png",
        link: "",
      },
      {
        title: "Medium",
        logo: "sahil/medium-logo.png",
        link: "https://medium.com/@sahilvshethiya",
      },
      {
        title: "Facebook",
        logo: "sahil/facebook-logo.png",
        link: "https://www.facebook.com/imsahil98/",
      },
    ],
  },
  modules: {},
});

export default store;
