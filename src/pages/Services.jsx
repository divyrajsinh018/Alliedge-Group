import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "We specialize in providing top-notch web development services to help businesses establish a strong online presence and reach their target audience effectively.",
  },
  {
    title: "App Development",
    description:
      "Transforming ideas into reality through our premier mobile application development services. Our dedicated team of experienced developers specializes in crafting dynamic and user-centric mobile applications that seamlessly blend innovation with functionality.",
  },
  {
    title: "Software Development",
    description:
      "Our software development services are designed to provide tailored solutions that meet the specific needs of our clients, utilizing the latest technologies and best practices to deliver high-quality, efficient and reliable software products.",
  },
  {
    title: "E-commerce development",
    description:
      "Our e-commerce development services provide businesses with customized and user-friendly online stores that are tailored to meet their specific requirements and to deliver an exceptional shopping experience to their customers.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Our artificial intelligence services utilize cutting-edge technologies and advanced algorithms to help businesses harness the power of data, automate processes, gain valuable insights, and enhance decision-making capabilities, driving growth and competitive advantage.",
  },
  {
    title: "Digital Marketing",
    description:
      "Leverage the power of social media platforms to build brand awareness, engage with your audience, and drive conversions. Our social media experts curate compelling content and implement targeted strategies to enhance your online presence.",
  },
  {
    title: "Social Media Marketing",
    description:
      "We help businesses increase their social media presence by developing and executing effective marketing strategies that target the right audience, increase engagement, and generate measurable results.",
  },
  {
    title: "Cloud Computing",
    description:
      "Our Cloud Computing services provide an infrastructure that enables businesses to securely store and access their data, applications and services from anywhere, at any time, with ease and flexibility.",
  },
  {
    title: "Mobile App Integration",
    description:
      "Well-versed in a wide range of APIs, we guarantee seamless integration with back-end systems and third-party software.",
  },
  {
    title: "Hardware Design and Development",
    description:
      "Elevate your vision with our hardware development and design expertise. From conceptualization to prototyping, we craft innovative solutions tailored to your needs.",
  },
];

const Services = () => {
  return (
    <div className="pt-28 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, 9).map((service, idx) => (
          <div
            key={idx}
            className="group bg-white border rounded-xl p-12 shadow-md h-[250px] text-left hover:bg-blue-900 hover:text-white transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Last Centered Card */}
      <div className="mt-10 mb-20" >
        <div className="group bg-white border rounded-xl p-12 shadow-md h-[250px] text-left hover:bg-blue-900 hover:text-white transition-all duration-300 w-full sm:w-1/2 lg:w-1/3">
          <h3 className="text-lg font-semibold mb-3">{services[9].title}</h3>
          <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {services[9].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
