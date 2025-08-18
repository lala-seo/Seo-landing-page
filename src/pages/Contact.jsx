import { useState } from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Newsletter from "../components/common/Newsletter";
import Seo from "../components/common/Seo";
import { SEO_CONFIG } from "../config/seoConfig";
import {
  BASE_URL,
  VITE_COUDINARY_NAME,
  VITE_UPLOAD_PRESET,
} from "../utils/variables";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeadquartersMap from "../components/Map";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  const preSelectedNeed = location.state?.advisoryNeed || "";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    title: "",
    email: "",
    advise: preSelectedNeed,
    message: "",
    survey: "",
    file: null,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.organization.trim())
      newErrors.organization = "Organization is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.advise.trim())
      newErrors.advise = "Specific advisory need is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", VITE_UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${VITE_COUDINARY_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) throw new Error("Cloudinary upload failed");

    const data = await res.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);

      let fileUrl = "";
      if (formData.file) {
        fileUrl = await uploadToCloudinary(formData.file);
      }

      const contactData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        organization: formData.organization,
        title: formData.title,
        email: formData.email,
        advise: formData.advise,
        message: formData.message,
        survey: formData.survey,
        file: fileUrl,
      };

      const res = await axios.post(`${BASE_URL}contacts/`, contactData, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Inquiry submitted successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        organization: "",
        title: "",
        email: "",
        advise: "",
        message: "",
        survey: "",
        file: null,
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Seo {...SEO_CONFIG.CONTACT} ogImage="/og-about.jpg" />

      <Navbar />

      {/* Hero Section with Contact Form */}
      <section className="pt-[170px] pb-[60px] md:px-8 bg-black text-white lg:relative  lg:h-[400px] h-[420px]  ">
        <div className="absolute lg:left-0 lg:right-0 max-w-[1416px] mx-auto flex flex-col lg:flex-row gap-12 items-start lg:px-[48px] md:px-8  ">
          {/* Left Text Block */}
          <div className="flex-1  md:px-8 lg:px-0 px-4">
            <p className="font-primary text-[28px] md:text-[40px] font-[400] leading-[120%] text-white mb-6 tracking-[-0.02em]">
              Partner With Africa's Leading Transaction Advisors
            </p>
            <p className="font-secondary text-[15px] text-[#E0E0E0] leading-[156%] max-w-[450px] mb-8">
              Whether you're developing renewable energy assets, structuring
              green bonds, or seeking carbon market access, our team is ready to
              unlock value for your organisation.
            </p>
          </div>

          {/* Contact Form */}
          <div className=" lg:mt-0 mt-[611px] md:mt-[400px] flex-1 lg:w-[700px] px-4 lg:px-0">
            <div className="bg-white rounded-lg lg:shadow-md py-[36px] lg:px-4 text-[#181717]">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] font-secondary font-[400]">
                  {/* First Name */}
                  <div>
                    <label className="mb-[9px] block">First name*</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                      placeholder="First name"
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs">{errors.firstName}</p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="mb-[9px] block">Last name*</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                      placeholder="Last name"
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs">{errors.lastName}</p>
                    )}
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="mb-[9px] block">Organization*</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                      placeholder="Organization"
                      onChange={handleChange}
                    />
                    {errors.organization && (
                      <p className="text-red-500 text-xs">
                        {errors.organization}
                      </p>
                    )}
                  </div>

                  {/* Position */}
                  <div>
                    <label className="mb-[9px] block">Position/Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      placeholder="Position/Title"
                      onChange={handleChange}
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-[9px] block">Email Address*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="Email Address"
                      onChange={handleChange}
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs">{errors.email}</p>
                    )}
                  </div>

                  {/* Advisory Need */}
                  <div>
                    <label className="mb-[9px] block">
                      Specific Advisory Need*
                    </label>
                    <select
                      name="advise"
                      value={formData.advise}
                      onChange={handleChange}
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                      required
                    >
                      <option value="">Select Advisory Need</option>
                      <option value="Schedule Strategic Consultation">
                        Schedule Strategic Consultation
                      </option>
                      <option value="Request Strategy Session">
                        Request Strategy Session
                      </option>
                      <option value="Discuss Capital Markets solutions with us">
                        Discuss Capital Markets solutions with us
                      </option>
                      <option value="Discuss Power and Renewable Energy with Us">
                        Discuss Power and Renewable Energy with Us
                      </option>
                      <option value="Discuss Your Renewable Energy Project">
                        Discuss Your Renewable Energy Project
                      </option>
                      <option value="Discuss Your Technology Project">
                        Discuss Your Technology Project
                      </option>
                      {/* Add more options here if needed */}
                    </select>
                    {errors.advise && (
                      <p className="text-red-500 text-xs">{errors.advise}</p>
                    )}
                    {/* <input
                      type="text"
                      name="advise"
                      value={formData.advise}
                      placeholder="Specific Advisory Need"
                      onChange={handleChange}
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                    />
                    {errors.advise && (
                      <p className="text-red-500 text-xs">{errors.advise}</p>
                    )} */}
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label className="mb-[9px] block">Message*</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      placeholder="Message"
                      onChange={handleChange}
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1] h-[120px]"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs">{errors.message}</p>
                    )}
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="mb-[9px] block">File Upload</label>
                    <input
                      name="file"
                      type="file"
                      onChange={handleChange}
                      className="w-full py-[10px] h-[54px] px-[13px] rounded border border-[#E5E3E1]"
                    />
                  </div>

                  {/* Source */}
                  <div>
                    <label className="mb-[9px] block">
                      How did you hear about us?
                    </label>
                    <input
                      type="text"
                      name="survey"
                      value={formData.survey}
                      placeholder="How did you hear about us?"
                      onChange={handleChange}
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                    />
                  </div>
                </div>

                <div className="mt-[25px]">
                  <button
                    type="submit"
                    className="text-white font-[600] text-[14px] bg-black rounded-[20px] w-full h-[48px] mb-4"
                    disabled={loading}
                  >
                    {loading ? "Sending... " : "Submit Inquiry"}
                  </button>
                  <p className="font-[400] text-[13px] text-[#181717] font-secondary">
                    We care about the protection of your data. Read our Privacy
                    Notice
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <div className="bg-white py-20 px-4 lg:px-0 md:px-8 max-w-[1416px] mx-auto lg:mb-40 md:mb-20 mb-10  lg:px-[48px] md:px-8  ">
        <p className="font-[400] text-[24px] font-primary mb-6 tracking-[-0.02em]">
          Contact Information
        </p>

        <div className="mb-[24px] font-[400]  text-[15px] font-secondary space-y-2">
          <p className="capitalize">
            <b>Headquarters:</b>4th Floor, The Rock Tower, The Rock Drive,
            Lekki, Lagos, Nigeria
          </p>
          <p className="capitalize">
            <b>Phone:</b> +234 708 167 5736
          </p>
          <p>
            <b>General Inquiries:</b> info@bartonheyman.com
          </p>
        </div>

        <div className="font-[400] capitalize text-[15px] font-secondary">
          <b>Office Locations</b>

          <div className="lg:max-w-[50%]">
            <HeadquartersMap />
          </div>
          {/* <p className="text-[#282828] max-w-[433px] leading-[156%]">
            Map with pins showing office locations across Africa, with popup
            details
          </p> */}
        </div>
      </div>

      <div className="lg:mt-0 mt-[1200px] ">
        {/* Newsletter & Footer */}
        <Newsletter />
        <Footer />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
