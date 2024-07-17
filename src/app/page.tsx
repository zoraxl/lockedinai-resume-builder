// import { Hero } from "home/Hero";
// import { Steps } from "home/Steps";
// import { Features } from "home/Features";
// import { Testimonials } from "home/Testimonials";
// import { QuestionsAndAnswers } from "home/QuestionsAndAnswers";
import ImportResume from "resume-import/page";
// import { LandingPageWrapper } from "components/LandingPageWrapper";

export default function Home() {
  return (
    <main className="bg-dot mx-auto max-w-screen-2xl px-8 pb-32 text-gray-900 lg:px-12">
      {/* <Hero />
      <Steps />
      <Features />
      <Testimonials />
      <QuestionsAndAnswers /> */}
      <ImportResume />
      {/* <LandingPageWrapper /> */}
    </main>
  );
}
