import { Arrowright, PlanningIcon } from "../assets/icons";
import Navbar from "../components/common/Navbar";
import greenFigure from "../assets/images/green-field.png";
import discover from "../assets/images/discover.png";
import funding from "../assets/images/funding.png";
import marketing from "../assets/images/marketing.png";
import Newsletter from "../components/common/Newsletter";
import Footer from "../components/common/Footer";

export default function Home() {
  const featureData = [
    {
      title: "Transaction Excellence",
      description:
        "Over five decades of expertise structuring investment-grade deals across Africa's most challenging markets",
    },
    {
      title: "Climate Finance Innovation",
      description:
        "Pioneering green bonds, carbon credit monetization, and ESG-linked financial instruments",
    },
    {
      title: "Market Transformation",
      description:
        "Building the infrastructure and governance frameworks for tomorrow's sustainable capital markets",
    },
  ];

  const secureData = [
    {
      icon: PlanningIcon,
      title: "Personalized Financial Planning",
      description: "Tailored strategies to meet your individual needs.",
    },
    {
      title: "Exclusive Investment Opportunities",
      description: "Access to unique and profitable ventures.",
    },
    {
      title: "Ongoing Support",
      description: "Regular portfolio reviews and expert guidance.",
    },
  ];

  return (
    <div>
      <div className="h-[100vh] bg-black text-white">
        <Navbar />
        <div className="pt-[200px] flex justify-between items-center max-w-[1116px] m-auto mb-[80px]">
          <div className="flex items-start flex-col justify-start">
            <p className="font-primary text-[40px] font-[400] max-w-[548px] leading-[102%] spacing-[-2%]">
              Strategic Advisory Powering Africa's Sustainable Future
            </p>
            <p className="mt-[24px] font-secondary text-[15px] font-[400] text-[#E0E0E0] leading-[156%] mb-[40px] max-w-[401px]">
              Mobilising capital, structuring complex transactions, and
              accelerating the energy transition across power, renewables, and
              climate finance markets.
            </p>
            <button className="px-[20px] py-[18px] border border-[#678E07] rounded-[20px] bg-[#1F1F1F] font-[600] text-[14px] font-secondary flex items-center gap-[16px]">
              Schedule Consultation <Arrowright />
            </button>
          </div>
          <div>
            <figure>
              <img src={greenFigure} className="w-[434px] h-[488px]" alt="" />
            </figure>
          </div>
        </div>
      </div>
      <hr className="border border-[#282828]" />
      <div className="bg-black text-white">
        <div className="max-w-[1231px] m-auto flex justify-between items-center divide-x divide-[#282828]">
          {featureData.map((item, index) => (
            <div
              key={index}
              className={`flex-1 py-[52px] text-start ${index === 0
                ? "pr-4"
                : index === featureData.length - 1
                  ? "pl-4"
                  : "px-4"
                }`}
            >
              <p className="font-primary font-[400] text-[20px] leading-[140%] text-[#FFFFFF]">
                {item.title}
              </p>
              {item.description && (
                <p className="text-[#E0E0E0] font-[400] text-[14px] font-secondary mt-[8px] max-w-[321px] leading-[148%]">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[100px]">
        <div className="flex items-center flex-col justify-center ">
          <p className="font-primary font-[400] text-[40px] leading-[102%] space-[-2px] text-center mb-[16px]">
            Discover Our Legacy and Values
          </p>
          <p className="text-center max-w-[600px] font-secondary text-[#3D3D3D] leading-[156%] capitalize">
            Founded in 2011, Barton Heyman has established itself as a leader in
            financial and advisory services, committed to integrity, client
            focus, and innovation. Our mission is to empower clients with
            sustainable financial solutions.
          </p>
        </div>
        <div className="mt-[48px] flex items-center justify-center mb-[128px]">
          <figure>
            <img
              src={discover}
              className="max-w-[890px] max-h-[580px]"
              alt=""
            />
          </figure>
        </div>
        <hr className="border border-[#E1E1E1]" />
        <div className="my-[64px] flex items-start justify-between max-w-[1114px] m-auto">
          <div className="w-[50%]">
            <p className="font-primary font-[400] text-[32px] text-[#0C0C0C] leading-[112%] text-start max-w-[463px] space-[-2%]">
              Expert Investment Management Strategies Tailored to Your Financial
              Goals
            </p>
          </div>
          <div className="w-[50%]  capitalize">
            <p className="text-[#3D3D3D] leading-[156%] font-[400] text-[16px] font-secondary">
              Expert Investment Management Strategies Tailored to Your Financial
              Goals At Barton Heyman, we understand that every investor has
              unique objectives. Our investment management services are designed
              to provide customized strategies that align with your specific
              financial goals and risk tolerance. We leverage our expertise to
              optimize portfolio performance.
            </p>
            <p className="text-[#3D3D3D] leading-[156%] font-[400] text-[16px] font-secondary mt-6">
               Benefit from our expert analysis and market insights for informed
              decisions. We manage risk effectively through diversification and
              diligent monitoring.
            </p>
          </div>
        </div>
      </div>
      <div className="py-[64px]   bg-black text-white">
        <div className="max-w-[1116px] m-auto">
          <p className="font-[400] text-[32px] font-primary leading-[112%] test-start max-w-[546px] letter-[-2%] mb-[24px]">
            Strategic Advisory for Renewable Energy Projects in EMEA, UK, and US
          </p>
          <p className="font-[400] text-[16px] font-secondary text-[#E0E0E0] leading-[156%] max-w-[1001px] mb-[48px]">
            Barton Heyman provides clients with seamless access to global stock
            exchanges, ensuring efficient trade execution and competitive
            pricing. We leverage advanced technology to enhance trading
            experiences, offering real-time market data and dedicated support
            from experienced brokerage professionals.
          </p>

          <div className="flex items-center justify-between gap-[20px]">
            <div className="relative w-[50%]">
              <img src={funding} alt="" className="max-w-[548px] max-h-[480]" />
              <div className="absolute top-0 left-0 w-full h-full p-[24px]">
                <p
                  className="py-[6px] px-[12px] bg-white rounded-[8px] font-primary font-[600] text-[15px] text-[#0C0C0C] mb-[15px]"
                  style={{ width: "fit-content", height: "fit-content" }}
                >
                  Funding
                </p>
                <p className="font-secondary font-[400] text-[16px] text-white max-w-[332px]">
                  Expert guidance on funding opportunities for renewable
                  projects.
                </p>
              </div>
            </div>
            <div className="relative w-[50%]">
              <img
                src={marketing}
                alt=""
                className="max-w-[548px] max-h-[480]"
              />
              <div className="absolute top-0 left-0 w-full h-full p-[24px]">
                <p
                  className="py-[6px] px-[12px] bg-white rounded-[8px] font-primary font-[600] text-[15px] text-[#0C0C0C] mb-[15px]"
                  style={{ width: "fit-content", height: "fit-content" }}
                >
                  Market
                </p>
                <p className="font-secondary font-[400] text-[16px] text-white max-w-[332px]">
                  In-depth knowledge of the renewable energy sector.
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="mt-[120px] mb-[80px]">
          <p className="font-[400] text-[40px] leading-[112%] text-white text-center font-primary  max-w-[620px] m-auto letter-[-2%] mb-[24px]">
            Secure Your Future with Strategic Wealth Management
          </p>
          <p className="font-[400] text-[15px] font-secondary text-[#E0E0E0] text-center max-w-[620px] m-auto leading-[156%]">
            At Barton Heyman, we understand that wealth management is more than
            just investments; it’s about securing your future. Our personalized
            approach ensures your financial strategies align with your unique
            goals and aspirations. We provide comprehensive solutions to help
            you grow and protect your assets.
          </p>
        </div>
        <hr className="border border-[#282828]" />
        <div className="max-w-[1231px] m-auto flex justify-between items-center divide-x divide-[#282828]">
          {secureData.map((item, index) => (
            <div
              key={index}
              className={`flex-1 py-[52px] text-start ${index === 0
                ? "pr-4"
                : index === secureData.length - 1
                  ? "pl-4"
                  : "px-4"
                }`}>
              <div className="h-[48px] w-[48px] rounded-full bg-[#3091CA] mb-[24px] flex items-center justify-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_11_123)">
                    <path
                      d="M24.0369 15.699V16.8236C23.4984 23.0548 16.251 26.2505 11.3162 22.1899C7.49133 19.0426 7.68196 13.0443 11.6298 10.0834C16.5187 6.41674 23.5308 9.60443 23.9937 15.6244L24.0374 15.6986L24.0369 15.699ZM16.9962 11.3408H15.5881V12.8874C13.7249 13.5101 13.7221 16.2061 15.589 16.8461C15.9764 16.979 16.5764 16.8954 16.83 17.2006C17.6155 18.1453 15.7303 19.0248 15.5881 17.6674H14.1799C14.1799 18.5318 14.7509 19.376 15.5881 19.6357V21.1823H16.9962V19.6357C18.8739 19.0234 18.8499 16.2489 16.9596 15.6657C16.5577 15.5418 16.0064 15.6338 15.736 15.2943C14.9922 14.3613 16.8671 13.5152 16.9967 14.8558H18.4048C18.3992 13.9885 17.8348 13.1457 16.9967 12.8874V11.3408H16.9962Z"
                      fill="white"
                    />
                    <path
                      d="M8.64109 0C8.94253 0.0760653 9.2853 0.06104 9.59754 0.0995422C11.9199 0.387369 16.5852 2.05799 15.4231 5.20108C14.2338 8.41789 8.21475 8.81324 5.39235 8.32774C3.30995 7.96948 0.522765 6.93649 0.00439443 4.63951C0.0222369 4.42963 -0.0200216 4.18782 0.00439443 3.98357C0.310534 1.42928 4.70072 0.0394412 6.88454 0.048832L6.9977 0H8.64062H8.64109Z"
                      fill="white"
                    />
                    <path
                      d="M0.00437579 7.40417C2.27366 9.42648 5.4637 9.98711 8.43166 9.93687L9.81445 9.7946C8.99369 10.6515 8.32084 11.6342 7.84332 12.7236C7.6372 12.848 5.752 12.6071 5.39233 12.5456C3.6109 12.2395 0.898847 11.2769 0.18327 9.45136L0.00390625 8.85693V7.40417H0.00437579Z"
                      fill="white"
                    />
                    <path
                      d="M0.00415039 15.8394C1.6743 17.3405 3.92245 18.033 6.13022 18.2758C6.55703 18.3227 6.99136 18.2988 7.41441 18.3763C7.60316 19.3623 8.05909 20.268 8.54694 21.1343C6.99511 21.2668 5.29397 21.0681 3.80647 20.5958C2.45233 20.1657 0.675591 19.2271 0.155811 17.8208L0.00461993 17.2926V15.8398L0.00415039 15.8394Z"
                      fill="white"
                    />
                    <path
                      d="M0.00437579 11.6221C1.79614 13.2331 4.23351 13.8989 6.59952 14.1055C6.71314 14.1153 7.36299 14.0792 7.3766 14.1801C7.21132 15.0783 7.04792 16.0062 7.1855 16.9175C5.90929 16.8762 4.60445 16.656 3.40618 16.2156C2.10462 15.7371 0.750003 14.9572 0.168714 13.6369L0.00390625 13.0753V11.6225L0.00437579 11.6221Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11_123">
                      <rect
                        width="24.0404"
                        height="24"
                        fill="white"
                        transform="translate(-0.00341797)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="font-primary font-[400] text-[20px] leading-[140%] text-[#FFFFFF]">
                {item.title}
              </p>
              {item.description && (
                <p className="text-[#E0E0E0] font-[400] text-[14px] font-secondary mt-[8px] max-w-[321px] leading-[148%]">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
