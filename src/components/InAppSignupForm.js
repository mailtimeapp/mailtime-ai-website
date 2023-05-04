import { useState } from "react";
import JoinWhitelistButton from "./JoinWhitelistButton";
import { LeapFrog } from "@uiball/loaders";

export default function InAppSignupForm({ email, registered }) {
  // status: "notSubmited" | "sending" | "success" | "error"
  const [status, setStatus] = useState("notSubmited");

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("sending");

    fetch(
      `https://public.staging.svc.sync.email//mtapp/api/v1/ai/whitelist/join?email=${email}`,
      {
        method: "POST",
      }
    ).then((response) => {
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    });
  };
  return (
    <section
      id="join-whitelist"
      className={`w-full mx-auto flex flex-col lg:flex-row justify-center px-[3.5rem] lg:px-0 items-center ${
        registered ? "my-[2rem]" : "mt-[4.8rem] mb-48 lg:mb-72"
      }`}
    >
      <div className="flex flex-col items-center">
        {((status === "notSubmited" && !registered) || status === "error") && (
          <div
            className={`flex flex-row ${
              status === "error" ? "items-center" : "items-baseline"
            }`}
          >
            <div>
              <p className="font-inter text-[1.4rem] lg:text-[1.8rem] font-medium lg:font-normal leading-[2.6rem] text-ai-blue mb-[0.9rem] lg:mb-0">
                You are signed in as {email}
              </p>
              {status === "error" && (
                <p className="text-ai-red text-[1.6rem] mt-2">
                  Something went wrong. Please try again later.
                </p>
              )}
            </div>

            <span className="hidden lg:inline font-inter font-bold text-[2.4rem] leading-[2.9rem] text-ai-blue ml-6 mr-10">
              &gt;&gt;&gt;
            </span>
          </div>
        )}
        {status === "sending" && (
          <div className="mb-[0.8rem] lg:mb-0 lg:mr-[2.4rem]">
            <LeapFrog size={40} speed={2} color="#0000ff" />
          </div>
        )}
        {status === "success" && (
          <div className="font-sans lg:font-inter font-bold text-[1.8rem] lg:text-[2.4rem] leading-[2.3rem] lg:leading-[2.9rem] text-ai-blue mb-[0.8rem] lg:mb-0 lg:mr-[2.4rem] text-center lg:text-left">
            Thank you for signing up. <br />
            We&apos;ll be in touch with more information soon, stay tuned!
          </div>
        )}
      </div>

      {!registered && (
        <form method="post" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            hidden
            value={email}
            readOnly
          />
          <JoinWhitelistButton
            isEnabled={
              status === "notSubmited" || status === "error" || registered
            }
          />
        </form>
      )}

      {registered && (
        <div className="font-inter text-[1.4rem] lg:text-[1.8rem] font-medium lg:font-normal leading-[2.6rem] text-ai-blue bg-white border-ai-blue border-2 p-[1.2rem] text-center rounded-2xl">
          You have signed up the whitelist for {email}
        </div>
      )}
    </section>
  );
}
