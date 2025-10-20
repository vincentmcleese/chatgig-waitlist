import { FreelancerGrid } from "@/components/sections/FreelancerGrid";
import { Footer } from "@/components/sections/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelancers - Chat Gig",
  description:
    "Browse verified Chat Gig freelancers ready to bring your projects to life. Find design and legal professionals.",
};

export default function FreelancersPage() {
  return (
    <>
      <FreelancerGrid />
      <Footer />
    </>
  );
}
