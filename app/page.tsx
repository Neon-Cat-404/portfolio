import ParticleJTT from "./components/ParticleJTT";
import InteractiveGlobe from "./components/InteractiveGlobe";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col justify-center px-6 md:px-12">
        <div className="mb-8 text-sm tracking-[0.3em] text-neutral-400">
          J Tharun Tej
        </div>

        <div className="grid grid-cols-1 items-center gap-0 md:grid-cols-[1.5fr_1fr] md:gap-0">
          <div style={{ width: '100%', height: '480px', position: 'relative' }}>
            <ParticleJTT
              text="JTT"
              fontWeight={800}
              fontSize={320}
              reveal="letter"
              dashLength={5}
              dashGap={2}
              specks={30}
              intro="assemble"
              introDuration={2}
              clickKick
              guides={false}
              fontFamily=""
              letterSpacing={0}
              accentColor="#008000"
              reach={200}
              softness={0.7}
              lineStyle="dashed"
              strokeWidth={1.5}
              speed={1}
              bounce={0.4}
              selection
              labels
              color="#48d426"
              align="center"
              draggable
              sweep
            />
          </div>

          <div className="min-w-0">
            <InteractiveGlobe />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between text-xs uppercase tracking-widest text-neutral-500">
          <span>TheGreenSign</span>
          <span>Scroll to explore ↓</span>
        </div>
      </section>
    </main>
  );
}