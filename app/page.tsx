import CoverParticles from "@/components/coverParticles";
import TransitionPage from "@/components/transitionPage";
import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <main>
      <TransitionPage></TransitionPage>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction/>
      </div>
    </main>
  );
}
