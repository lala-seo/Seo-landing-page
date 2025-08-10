import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Newsletter from "../components/common/Newsletter";
import Seo from "../components/common/Seo";
import { SEO_CONFIG } from "../config/seoConfig";

export default function Contact() {
  return (
    <div>
      <Seo {...SEO_CONFIG.CONTACT} ogImage="/og-about.jpg" />

      <Navbar />

      {/* Hero Section with Contact Form */}
      <section className="pt-[170px] pb-[60px] lg:px-4 md:px-8 bg-black text-white lg:relative  lg:h-[400px] h-[420px]">
        <div className="absolute lg:left-0 lg:right-0 max-w-[1416px] mx-auto flex flex-col lg:flex-row gap-12 items-start">
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
          <div className=" lg:mt-0 mt-[350px] md:mt-[400px] flex-1 lg:w-[700px] px-4 lg:px-0">
            <div className="bg-white rounded-lg lg:shadow-md py-[36px] lg:px-4 text-[#181717]">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] font-secondary font-[400]">
                  {/* First Name */}
                  <div>
                    <label className="mb-[9px] block">First name*</label>
                    <input
                      type="text"
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="mb-[9px] block">Last name*</label>
                    <input
                      type="text"
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="mb-[9px] block">Organization*</label>
                    <input
                      type="text"
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                    />
                  </div>

                  {/* Position */}
                  <div>
                    <label className="mb-[9px] block">Position/Title</label>
                    <input
                      type="text"
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-[9px] block">Email Address*</label>
                    <input
                      type="email"
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                    />
                  </div>

                  {/* Advisory Need */}
                  <div>
                    <label className="mb-[9px] block">
                      Specific Advisory Need*
                    </label>
                    <input
                      type="text"
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                    />
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label className="mb-[9px] block">Message*</label>
                    <textarea className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1] h-[120px]" />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="mb-[9px] block">File Upload</label>
                    <input
                      type="file"
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
                      className="w-full py-[16.5px] px-[13px] rounded border border-[#E5E3E1]"
                    />
                  </div>
                </div>

                <div className="mt-[25px]">
                  <button className="text-white font-[600] text-[14px] bg-black rounded-[20px] w-full h-[48px] mb-4">
                    Submit Inquiry
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
      <div className="bg-white py-20 px-4 lg:px-0 md:px-8 max-w-[1416px] mx-auto lg:mb-40 md:mb-20 mb-10">
        <p className="font-[400] text-[24px] font-primary mb-6 tracking-[-0.02em]">
          Contact Information
        </p>

        <div className="mb-[24px] font-[400] capitalize text-[15px] font-secondary space-y-2">
          <p>
            <b>Headquarters:</b>4th Floor, The Rock Tower, The Rock Drive,
            Lekki, Lagos, Nigeria
          </p>
          <p>
            <b>Phone:</b> +234 708 167 5736
          </p>
          <p>
            <b>General Inquiries:</b> info@bartonheyman.com
          </p>
        </div>

        <div className="font-[400] capitalize text-[15px] font-secondary">
          <b>Office Locations</b>
          <p className="text-[#282828] max-w-[433px] leading-[156%]">
            Map with pins showing office locations across Africa, with popup
            details
          </p>
        </div>
      </div>

      <div className="lg:mt-0 mt-[1200px]">
        {/* Newsletter & Footer */}
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
