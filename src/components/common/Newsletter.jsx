import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Arrowright } from "../../assets/icons";
import axios from "axios";
import { BASE_URL } from "../../utils/variables";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    const isValidEmail = email.includes("@") && email.includes(".");

    if (!isValidEmail) {
      setError(true);
      setSuccess(false);
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}subscribers/subscribe`, {
        email: email.trim(),
      });
      console.log("res", res);

      setError(false);
      setSuccess(true);
      setEmail("");
    } catch (e) {
      console.error("Subscription error:", e);
      setError(true);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="bg-[#191919] py-13 px-8">
        <div className=" max-w-[1416px] mx-auto">
          <h2 className="text-sm font-secondary mb-1 text-gray-400 ">
            Sign Up For Our Newsletter
          </h2>

          <div className="mb-8">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-transparent border-b px-2 ${
                error ? "border-b-[#FF2020]" : "border-b-gray-600"
              } text-gray-400 lg:text-3xl py-4  focus:outline-none focus:border-gray-400 placeholder-gray-500 font-primary text-white`}
            />
            {error && (
              <p className="font-secondary font-[400] text-[15px] mt-[13px] text-[#FF2020]">
                Invalid email format, please try again
              </p>
            )}
          </div>

          {success ? (
            <div
              className="border border-[#678E07] bg-[#678E07] text-white px-6 py-3 rounded-full font-secondary text-sm mb-6  "
              style={{ width: "fit-content" }}
            >
              You have subscribed to the Newsletter!
            </div>
          ) : (
            <button
              onClick={handleSubscribe}
              className="px-[20px] py-[18px] border border-[#678E07] hover:bg-[#2E2E2E] hover:cursor-pointer transition-colors rounded-[20px] bg-[#1F1F1F] font-[600] text-[14px] font-secondary flex items-center gap-[16px] mb-6 text-white"
            >
              {loading ? "Subscribing..." : "Subscribe To Newsletter"}

              <Arrowright />
            </button>
          )}

          <h2 className="text-gray-400 text-sm font-secondary text-[10px]">
            By Subscribing You Agree To Our TOS And Privacy Policy
          </h2>
        </div>
      </div>
    </div>
  );
}
