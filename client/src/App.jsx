import { useState } from "react";
import Carousel from "./components/Carousel";
import ServiceCard from "./components/ServicesCard";
import StatsSection from "./components/StatsSelection";
import axios from "axios";

function App() {
  const services = [
    {
      number: "01",
      title: "Video Editing",
      description:
        "Transforming Footage into Stunning Visual Stories! Our expert video editing team brings your raw footage to life. We create polished, professional videos that capture your brand's essence and message, ensuring every frame engages your audience.",
    },
    {
      number: "02",
      title: "Video Marketing",
      description:
        "Strategic Video Campaigns That Drive Results Leverage the power of video marketing with our tailored campaigns. We craft engaging video content that not only tells your brand story but also drives engagement, conversion, and growth across platforms.",
    },
    {
      number: "03",
      title: "Content Creation",
      description:
        "Engaging Content That Resonates Our content creation services focus on delivering high-quality, relatable content tailored to your audience. From scripting to storyboarding, we ensure your message is clear and impactful. ",
    },
    {
      number: "04",
      title: "Commercial Ads",
      description:
        "Creative Ads That Capture Attention Our commercial ad services blend creativity with strategy to produce ads that stand out. We design campaigns that not only attract attention but also convert viewers into customers.",
    },
    // {
    //   number: "05",
    //   title: "Commercial Music & Background Music",
    //   description:
    //     "Enhancing Your Videos with Custom Music We understand the importance of sound in storytelling. Our team creates or sources background music that complements your videos, enhancing the overall emotional impact and engagement.",
    // },
  ];

  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const number = "917099015766"; // Replace with your phone number
  const defaultMessage = encodeURIComponent(
    "Hello! I want to know more about your services."
  );
  const whatsappLink = `https://wa.me/${number}?text=${defaultMessage}`;

  const handleButtonClick = () => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      window.location.href = `tel:${`+` + number}`;
    } else {
      setShowDialog(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(number).then(() => {
      alert("Phone number copied to clipboard!");
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/contact", formData);
      alert(response.data.message)
    } catch (error) {
      console.log("Error submitting the form:", error);
      alert("An error occured. Please try again.");
    }
  };



  return (
    <div className="font-montserrat">
      <div className="bg-custom-gradient min-h-full px-6 sm:px-8 md:px-10 lg:px-14 relative pb-20">
        {/* NAVBAR */}
        <div className="w-full flex items-center justify-between pt-4 md:pt-5 lg:pt-0">
          <img
            src="/logo.png"
            alt=""
            className="w-12 sm:w-10 md:w-14 lg:w-[5%] h-full"
          />
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl sm: font-bold tracking-wider">
            ADIFYME
          </h1>
          <button
            className="text-zinc-500 text-lg sm:text-xl md:text-2xl cursor-pointer hover:text-white"
            onClick={handleButtonClick}
          >
            CALL NOW
          </button>

          {/* Dialog Box */}
          {showDialog && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              onClick={() => setShowDialog(false)} // Close dialog on backdrop click
            >
              <div
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                onClick={(e) => e.stopPropagation()} // Prevent closing on dialog click
              >
                <p className="text-lg font-semibold mb-4">
                  Phone Number: {phoneNumber}
                </p>
                <button
                  onClick={copyToClipboard}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                >
                  Copy Number
                </button>
                <button
                  onClick={() => setShowDialog(false)}
                  className="ml-4 bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="w-full bg-zinc-600 h-[1px] absolute top-[63px] sm:top-[80px] md:top-[90px] left-0 sm:left-0 md:left-0 lg:left-0" />

        {/* HERO */}
        <div className="flex flex-col items-center justify-center mt-10 sm:mt-20 md:mt-32">
          <h1 className="text-white text-7xl mt-20 sm:text-6xl md:text-8xl lg:text-[10rem] capitalize font-bold text-center">
            We Make Your <br className="hidden sm:block" /> Brand Go Viral
          </h1>
        </div>

        <div className="relative flex justify-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <img
            src="/1.png"
            alt=""
            className="w-50 sm:w-60 md:w-[28rem] lg:w-[40%] -bottom-20 sm:-bottom-28 md:bottom-[-7rem] lg:-bottom-36 left-auto sm:left-[15rem] md:left-[12rem] lg:left-[36rem] absolute"
          />
        </div>

        <div className="border-[2px] sm:border-[3px] mx-auto mt-20 sm:mt-24 md:mt-32 border-white w-fit rounded-full px-8 sm:px-12 md:px-14 py-2 sm:py-3">
          <h1 className="capitalize text-white text-lg sm:text-2xl md:text-3xl font-[200] text-center">
            video marketing and creative ad agency
          </h1>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="w-full h-[100vh] pb-20 sm:py-24 md:py-32 lg:py-40 px-8 sm:px-12 md:px-24 lg:px-52 flex justify-center flex-col bg-[#ffe9cc]">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl uppercase font-extrabold leading-tight z-50">
            video marketing & <br />{" "}
            <span className="text-orange-500">creative ad agency</span>
          </h1>
          <h1 className="font-semibold pr-0 sm:pr-0 md:pr-80 lg:pr-0 text-xl sm:text-2xl md:text-3xl lg:text-[3em]/[1.5em] mt-10 sm:mt-12 md:mt-16 lg:mt-20 z-50">
            Transforming brands into stories
            <br />
            through{" "}
            <span className="text-orange-500 font-bold">
              engaging content
            </span>{" "}
            that
            <br />
            connects and converts
          </h1>
        </div>

        <div className="absolute bottom-[2em] md:bottom-[2em] lg:bottom-[1em] right-[-16em] md:right-[-19em] lg:right-[5em]">
          <img
            src="/2.png"
            alt=""
            className="w-[44%] sm:w-[60%] md:w-[50%] lg:w-[80%]"
          />
        </div>

        <div className="absolute top-0 right-[-30em] sm:right-[-25em] md:right-[-53em]">
          <img
            src="/Orange-Particle.png"
            alt=""
            className="w-[50%] sm:w-[40%] md:w-[50%]"
          />
        </div>

        <div className="absolute top-16 sm:top-20 md:top-24 -left-[5rem] sm:-left-[7rem] md:-left-[10rem] lg:-left-[10rem] opacity-80">
          <img
            src="/pngegg.png"
            alt=""
            className="w-[10rem] sm:w-[15rem] md:w-[50%]"
          />
        </div>
      </div>

      <div className="w-full min-h-screen bg-custom-gradient">
        <h1 className="text-white text-6xl sm:text-8xl md:text-[7.5rem] py-6 sm:py-0 md:py-10 lg:py-10 pl-8 sm:pl-0 md:pl-10 lg:pl-36 font-bold">
          Our Services
        </h1>

        {/* Service Cards */}
        <div className="px-4 md:px-20">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Contact Section */}
        <div className="w-full flex flex-col md:flex-col lg:flex-row items-center justify-between px-4 md:px-20 py-10 md:py-20 space-y-8 md:space-y-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-zinc-50 font-semibold text-center py-0 md:py-10">
            If you have any questions,
            <br className="hidden md:block" />
            feel free to email us or send
            <br className="hidden md:block" />a direct message.
          </h1>
          <div className="border-4 md:border-6 rounded-full px-6 py-2 md:px-12 md:py-3 cursor-pointer">
            <a
              href={
                "https://mail.google.com/mail/?view=cm&fs=1&to=contact@adifyme.online" ||
                "mailto:contact@adifyme.online"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-3xl md:text-3xl text-white text-center"
              // onClick={(e) => handleEmailClick(e)}
            >
              contact@adifyme.online
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="w-full h-full bg-custom-gradient flex items-center flex-col pb-0 sm:pb-0 md:pb-20">
          <h1 className="text-white text-[4rem] md:text-[6rem] lg:text-[8.5rem] px-4 md:pl-10 lg:pl-20 pt-6 lg:pt-20 font-bold text-center lg:text-left">
            Video Editing
          </h1>
          <h1 className="text-zinc-500 text-[3rem] md:text-[4rem] lg:text-[5.5rem] px-4 md:pl-10 lg:pl-20 font-bold z-50 text-center lg:text-left">
            OUR WORK SPEAKS FOR ITSELF
          </h1>
          <Carousel />
          <h1 className="text-white text-[4rem] md:text-[5rem] lg:text-[8.5rem] px-4 md:pl-10 lg:pl-20 pt-0 sm:pt-0 md:pt-16 z-50 font-bold uppercase text-center lg:text-left">
            Commercial Ads
          </h1>
          <Carousel />
        </div>
        <div className="flex justify-center lg:justify-start">
          <img
            src="/VE.png"
            alt=""
            className="w-[60%] md:w-[40%] lg:w-[30%] absolute top-10 md:top-20 opacity-30 -rotate-12"
          />
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="/ads.png"
            alt=""
            className="w-[30%] md:w-[20%] lg:w-[15%] absolute bottom-[27rem] md:bottom-[34rem] lg:bottom-[28rem] right-4 md:right-10 lg:right-14 -rotate-12"
          />
        </div>
      </div>

      <div className="w-full h-full bg-[#ffe9cc] px-4 sm:px-8 md:px-16 lg:px-20 flex items-center flex-col">
        <h1 className="text-black font-bold z-50 text-5xl sm:text-6xl md:text-[5.5rem]/[7rem] lg:text-[8.5rem]/[8rem] pt-20 md:pt-28 text-center">
          Start Your Journey{" "}
          <span className="text-orange-500 italic">Today</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center md:justify-between w-full mt-12 md:mt-28 text-zinc-700 px-4 md:px-0 space-y-8 md:space-y-0">
          <h1 className="w-full md:w-auto text-xl sm:text-2xl text-center md:text-left">
            WHY US
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl md:w-[80%] pr-0 md:pr-14 text-center md:text-left">
            In a digital landscape flooded with content, standing out is
            crucial. Our team combines creativity, strategy, and a deep
            understanding of audience behavior to create compelling videos and
            ads that cut through the noise and leave a lasting impact.
          </p>
        </div>

        <StatsSection />

        <div className="border-[1px] border-zinc-400 w-full mt-8 md:mt-12" />

        <div className="px-4 md:px-10 py-3 flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0">
          <h1 className="text-zinc-700 text-xl sm:text-2xl md:text-3xl text-center md:text-left hidden md:block lg:block">
            ADIFYME
          </h1>
          <h1 className="text-zinc-700 text-2xl sm:text-2xl md:text-3xl text-center md:text-right">
            www.adifyme.com
          </h1>
        </div>
      </div>

      <div className="w-full h-full bg-custom-gradient flex flex-col items-center justify-between py-10 md:py-20 gap-6 md:gap-10">
        <img src="/logo.png" alt="Logo" className="z-50 w-24 md:w-32 lg:w-48" />

        <h1 className="z-50 text-center text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
          Join Our Happy <br />
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 italic">
            Clients
          </span>{" "}
          - Get Started <br />
          Now{" "}
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400">
            !
          </span>
        </h1>

        <div className="bg-orange-600 z-50 border-2 text-white px-10 md:px-16 lg:px-20 py-3 md:py-4 lg:py-6 rounded-full text-2xl md:text-3xl lg:text-5xl">
          Call Now: +91 7099015766
        </div>

        <div className="border-t-[1px] border-zinc-500 w-full my-10" />

        <div className="flex items-center justify-center flex-col ">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold uppercase pb-10">
            Contact Us
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label className="font-semibold">
              Name
            </label>
            <input
              type="text"
              placeholder="First"
              className="bg-transparent border-2 px-3 py-2 rounded-lg md:w-[70vw]"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last"
              className="bg-transparent border-2 px-3 py-2 rounded-lg"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <label className="font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-2 px-3 py-2 rounded-lg"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label className="font-semibold">
              Message
            </label>
            <textarea
              placeholder="Write Your Message"
              cols="30"
              rows="10"
              className="bg-transparent border-2 px-3 py-2 rounded-lg"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button className="bg-[#ffe9cc] py-2 mt-4 text-2xl font-bold rounded-lg">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Floating Whatsapp Icon */}
      <div className="fixed bottom-10 right-4 z-50">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <img
            src="/whatsapp-icon.png"
            alt="WhatsApp"
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 shadow-2xl rounded-[2rem] border"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
