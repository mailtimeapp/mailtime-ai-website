import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import JoinWhitelistButton from "./JoinWhitelistButton";
import { LeapFrog } from "@uiball/loaders";

const url =
  "https://measurable.us16.list-manage.com/subscribe/post?u=aa0074d4037132f0277a203b7&amp;id=fe1856052d&amp;f_id=000e76e0f0";

const CustomForm = ({ status, message, onValidated }) => {
  let emailInputElement;
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  // check if email param exists in query
  const router = useRouter();
  useEffect(() => {
    if (router.query.email) {
      setEmail(router.query.email.toString());
    } else {
      setEmail("");
    }
  }, [router.query]);

  useEffect(() => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email]);

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const submit = () =>
    emailInputElement &&
    isValid &&
    onValidated({
      EMAIL: emailInputElement.value,
    });

  return (
    <section
      id="join-whitelist"
      className="w-full mx-auto flex flex-col justify-center px-[3.5rem] lg:px-0 items-center mt-[4.8rem] mb-48 lg:mb-72"
    >
      {status === "sending" && (
        <div className="mb-[0.8rem] lg:mb-0 lg:mr-[2.4rem]">
          <LeapFrog size={40} speed={2} color="#0000ff" />
        </div>
      )}

      {status === "success" && (
        <div
          className="font-sans lg:font-inter font-bold text-[1.8rem] lg:text-[2.4rem] leading-[2.3rem] lg:leading-[2.9rem] text-ai-blue mb-[0.8rem] lg:mb-0 lg:mr-[2.4rem]"
          dangerouslySetInnerHTML={{
            __html: message?.toString() || "Thank you for signing up.",
          }}
        />
      )}

      <div className="flex flex-row">
        <div className="flex flex-col items-center ">
          {(status === null || status === "error") && (
            <div className="mb-[0.8rem] lg:mb-0 lg:mr-[2.4rem]">
              <input
                aria-label="Your email"
                ref={(node) => (emailInputElement = node)}
                type="email"
                placeholder="Your email"
                value={email}
                onChange={handleEmailChange}
                className="w-full lg:min-w-[40rem] border border-ai-blue p-[1.6rem] rounded-[1.2rem] text-[1.4rem] lg:text-[2.1rem] leading-[1.8rem] lg:leading-[2.8rem] font-medium text-ai-blue placeholder:text-[1.4rem] lg:placeholder:text-[2.1rem] placeholder:leading-[1.8rem] lg:placeholder:leading-[2.8rem] placeholder:font-medium placeholder:text-ai-blue focus:outline-ai-blue invalid:border-ai-red invalid:text-ai-red invalid:focus:outline-ai-red"
              />
            </div>
          )}
          {status === "error" && (
            <div
              className="text-ai-red text-[1.6rem] mt-2"
              dangerouslySetInnerHTML={{
                __html:
                  message?.toString() ||
                  "Something went wrong. Please try again later.",
              }}
            />
          )}
        </div>

        <JoinWhitelistButton
          onClick={submit}
          isEnabled={isValid && status !== "success"}
        />
      </div>

      <a
        href="#!"
        className="font-inter font-medium text-[1.4rem] lg:text-[2.1rem] leading-[1.8rem] lg:leading-[2.8rem] text-ai-blue hover:text-ai-blue underline mt-[1.6rem]"
      >
        Already a MailTime user
      </a>
    </section>
  );
};

export default function MailchimpSignupForm() {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}
