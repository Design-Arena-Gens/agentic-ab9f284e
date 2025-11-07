export default function Home() {
  const stats = [
    { label: "Years in High-Impact Delivery", value: "10+" },
    { label: "Automation & AI Deployments", value: "120+" },
    { label: "Apps & Platforms Delivered", value: "65" },
    { label: "Enterprise Networks Optimized", value: "40" },
  ];

  const pillars = [
    {
      title: "Intelligent Infrastructure",
      summary:
        "Designing robust cloud and on-prem networks that self-monitor, self-scale, and never miss a beat.",
      points: [
        "Zero-downtime hybrid network architecture",
        "Automated monitoring dashboards & alerting",
        "Layered security with adaptive policies",
      ],
      accent: "bg-gradient-to-br from-cyan-400/70 to-royal-blue/60",
    },
    {
      title: "Full-Stack Systems Engineering",
      summary:
        "Crafting modular, API-driven web platforms tuned for performance, observability, and rapid iteration.",
      points: [
        "Type-safe frontends with real-time UX",
        "Service mesh friendly backend services",
        "CI/CD pipelines hardened for scale",
      ],
      accent: "bg-gradient-to-br from-royal-blue/70 to-cyan-400/60",
    },
    {
      title: "Automation & AI Integration",
      summary:
        "Embedding AI agents and RPA flows that eliminate friction across ops, finance, and customer pathways.",
      points: [
        "Process mining & workflow refactoring",
        "LLM-powered assistants & copilots",
        "Secure data orchestration & governance",
      ],
      accent: "bg-gradient-to-br from-cyan-400/70 via-royal-blue/60 to-cyan-300/60",
    },
  ];

  const solutions = [
    {
      name: "Unified Operations Command",
      context: "Enterprise retail · Azure + Next.js · 2024",
      description:
        "Real-time observability portal with edge analytics, automated failover playbooks, and predictive maintenance insights.",
      outcomes: [
        "Reduced incident response time by 63%",
        "Live SLA dashboard spans 140+ stores",
        "Self-healing automations triggered from AI anomaly detection",
      ],
    },
    {
      name: "FinOps Automation Fabric",
      context: "Fintech · AWS + Kubernetes · 2023",
      description:
        "Microservice ecosystem with event-driven billing, compliance guardrails, and CFO-ready financial intelligence.",
      outcomes: [
        "Consolidated 27 legacy services into 7 modular domains",
        "Brought monthly closing cycle down from 9 days to 36 hours",
        "Realized 32% infra cost savings via automated optimizations",
      ],
    },
    {
      name: "AI-Powered Support Mesh",
      context: "Telecom · GCP + LangChain · 2022",
      description:
        "Context-aware support assistant layered over legacy CRM, translating natural language into orchestrated workflows.",
      outcomes: [
        "Cuts ticket handling time by 48%",
        "Learns from 60k+ interactions with safe data masking",
        "Routes high-risk signals directly to escalation pods",
      ],
    },
  ];

  const engagements = [
    "Enterprise infrastructure modernization & zero-downtime migrations",
    "API-first platforms with observability by design",
    "Process automation blueprints with measurable ROI",
    "AI augmentation tailored to operations, support, and analytics teams",
    "Rapid deployment squads for mission-critical launches",
  ];

  const process = [
    {
      title: "Discovery & Systems Mapping",
      detail:
        "Audit current architecture, latency risks, and automation maturity. Model the digital nervous system around business objectives.",
    },
    {
      title: "Blueprint & Rapid Prototyping",
      detail:
        "Translate strategy into layered architecture, data flows, and prototype modules to validate integration paths early.",
    },
    {
      title: "Iterative Build & Automation",
      detail:
        "Deliver modular increments with continuous testing, instrumented observability, and progressive rollout sequencing.",
    },
    {
      title: "Stabilize, Train, & Evolve",
      detail:
        "Operationalize with runbooks, training, and AI copilots. Monitor impact metrics and tune systems for ongoing growth.",
    },
  ];

  const techFocus = [
    "Next.js 14 · React Server Components",
    "TypeScript · Node.js · Python",
    "Azure · AWS · GCP hybrid networks",
    "Kubernetes · Docker · Terraform",
    "Event-driven microservices (RabbitMQ, Kafka)",
    "CI/CD with GitHub Actions & ArgoCD",
    "LangChain · OpenAI · Retrieval-Augmented AI",
    "Power Platform · Selenium · Playwright automations",
  ];

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[rgba(62,232,255,0.04)]" />
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-10 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-soft">
            <span className="font-display text-lg font-semibold text-cyan-300">
              MK
            </span>
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.2em] text-slate-400">
              Murad Khan
            </p>
            <p className="text-xs text-slate-500">
              IT Solutions Architect · Karachi
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-cyan-200" href="#expertise">
            Expertise
          </a>
          <a className="transition hover:text-cyan-200" href="#solutions">
            Solutions
          </a>
          <a className="transition hover:text-cyan-200" href="#engage">
            Engagements
          </a>
          <a className="transition hover:text-cyan-200" href="#process">
            Process
          </a>
          <a className="transition hover:text-cyan-200" href="#contact">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-cyan-400/60 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 shadow-glow-cyan transition hover:bg-cyan-400/20 md:block"
        >
          Partner with Murad
        </a>
      </header>

      <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-16 pt-4 md:flex-row md:items-start lg:px-12 lg:pb-24">
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[420px] max-w-5xl rounded-3xl bg-gradient-to-br from-cyan-500/10 via-cyan-400/5 to-blue-500/5 blur-3xl" />
        <div className="flex-1 space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            Karachi · Pakistan · Global Delivery
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Murad Khan — Building Smarter Systems for the Digital Age.
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            IT solutions expert and developer specializing in modern web systems,
            enterprise networking, automation engineering, and AI augmentation on
            demand. I build resilient digital ecosystems that scale, self-heal,
            and drive measurable outcomes.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#solutions"
              className="group inline-flex items-center gap-3 rounded-full border border-cyan-300/60 bg-cyan-300/10 px-6 py-3 font-semibold text-cyan-200 transition hover:bg-cyan-300/20"
            >
              Explore Signature Work
              <span className="text-xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
            >
              Request a Strategy Session
            </a>
          </div>
          <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-soft sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <span className="font-display text-3xl font-semibold text-cyan-100">
                  {stat.value}
                </span>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex w-full max-w-md flex-col gap-6 rounded-[30px] border border-white/10 bg-white/[0.04] p-8 text-sm text-slate-300 shadow-glass-panel backdrop-blur-soft">
          <div className="absolute -left-16 top-12 hidden h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl md:block" />
          <div className="absolute -right-28 bottom-16 hidden h-40 w-40 rounded-full bg-blue-500/25 blur-[120px] md:block" />
          <div className="relative space-y-4">
            <p className="font-display text-sm uppercase tracking-[0.25em] text-cyan-100">
              Operating Framework
            </p>
            <p className="text-base leading-relaxed text-slate-200">
              &ldquo;My approach blends infrastructure rigor with human-centric
              design. Every system is instrumented, automated, and ready to
              evolve.&rdquo;
            </p>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
            <p className="font-display text-sm uppercase tracking-[0.25em] text-slate-400">
              Core Disciplines
            </p>
            <ul className="mt-4 space-y-3 text-base text-slate-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-cyan-300" />
                <span>Full-stack web & automation architecture</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-cyan-300" />
                <span>Cloud-native DevOps with observability-first pipelines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-cyan-300" />
                <span>AI-driven augmentation across business workflows</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <p className="font-display text-sm uppercase tracking-[0.25em] text-slate-400">
              Strategic Partners
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                Azure
              </span>
              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                AWS
              </span>
              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                Cisco
              </span>
              <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                GCP
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="expertise"
        className="relative mx-auto mt-8 w-full max-w-6xl space-y-12 px-6 pb-16 lg:px-12"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="font-display text-xs uppercase tracking-[0.35em] text-cyan-200">
              Expertise Pillars
            </p>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Architecting end-to-end ecosystems with future-ready resilience.
            </h2>
          </div>
          <p className="max-w-lg text-sm text-slate-400">
            Every engagement combines systems thinking with automated safeguards.
            Result: platforms that are responsive, auditable, and tuned for
            high-stakes operations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-night-soft/80 p-8 backdrop-blur-soft transition hover:-translate-y-1 hover:border-cyan-300/60"
            >
              <div
                className={`pointer-events-none absolute -inset-px opacity-15 blur-2xl ${pillar.accent}`}
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 shadow-glow-cyan">
                <span className="font-display text-lg">◆</span>
              </div>
              <h3 className="relative mt-6 font-display text-2xl text-white">
                {pillar.title}
              </h3>
              <p className="relative mt-4 text-sm text-slate-300">
                {pillar.summary}
              </p>
              <ul className="relative mt-6 space-y-3 text-sm text-slate-400">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 size-2 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="solutions"
        className="relative mx-auto w-full max-w-6xl space-y-12 px-6 pb-16 lg:px-12"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="font-display text-xs uppercase tracking-[0.35em] text-cyan-200">
              Flagship Solutions
            </p>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Systems engineered for uptime, intelligence, and measurable impact.
            </h2>
          </div>
          <p className="max-w-lg text-sm text-slate-400">
            Recent programs blending full-stack builds, automation, and AI to
            modernize core business workflows across industries.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {solutions.map((solution) => (
            <article
              key={solution.name}
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-glass-panel backdrop-blur-soft transition hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-glow-cyan"
            >
              <div className="pointer-events-none absolute -top-32 right-0 size-72 rounded-full bg-cyan-400/20 blur-[120px]" />
              <div className="relative space-y-4">
                <p className="font-display text-sm uppercase tracking-[0.3em] text-slate-400">
                  {solution.context}
                </p>
                <h3 className="font-display text-2xl text-white">
                  {solution.name}
                </h3>
                <p className="text-sm text-slate-300">
                  {solution.description}
                </p>
              </div>
              <ul className="relative mt-6 space-y-3 text-sm text-slate-400">
                {solution.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span className="mt-1 size-2 rounded-full bg-cyan-300" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="engage"
        className="relative mx-auto w-full max-w-6xl space-y-12 px-6 pb-16 lg:px-12"
      >
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 shadow-glass-panel backdrop-blur-soft lg:p-14">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="lg:w-2/5">
              <p className="font-display text-xs uppercase tracking-[0.35em] text-cyan-200">
                On-Demand Engagements
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white">
                Partner with a builder who bridges infrastructure rigour with
                product velocity.
              </h2>
              <p className="mt-4 text-sm text-slate-300">
                From rapid-fire prototypes to enterprise hardening, I architect
                and deliver systems that adapt to evolving requirements without
                sacrificing resilience.
              </p>
            </div>
            <div className="grid flex-1 gap-4 sm:grid-cols-2">
              {engagements.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-night-soft/70 p-6 text-sm text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 shadow-inner shadow-black/40 backdrop-blur-soft">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
            <div className="lg:w-1/3">
              <p className="font-display text-xs uppercase tracking-[0.35em] text-cyan-200">
                Tooling & Focus
              </p>
              <h3 className="mt-3 font-display text-2xl text-white">
                Specialists tools for mission-critical delivery.
              </h3>
              <p className="mt-3 text-sm text-slate-400">
                Selecting each stack to optimize resilience, latency, and
                maintainability while enabling data-informed growth.
              </p>
            </div>
            <div className="grid flex-1 gap-4 sm:grid-cols-2">
              {techFocus.map((tech) => (
                <div
                  key={tech}
                  className="rounded-2xl border border-cyan-300/20 bg-cyan-300/5 px-5 py-4 text-sm text-cyan-200 shadow-glow-cyan"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="relative mx-auto w-full max-w-6xl space-y-12 px-6 pb-16 lg:px-12"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="font-display text-xs uppercase tracking-[0.35em] text-cyan-200">
              Delivery Playbook
            </p>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Built to de-risk transformation and accelerate outcomes.
            </h2>
          </div>
          <p className="max-w-lg text-sm text-slate-400">
            Each step tightens feedback loops, embeds automation, and ensures
            stakeholders stay aligned on progress and performance.
          </p>
        </div>

        <div className="relative grid gap-8 lg:grid-cols-4">
          <div className="pointer-events-none absolute inset-0 rounded-[34px] border border-white/5" />
          {process.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-[28px] border border-white/10 bg-night-soft/80 p-8 backdrop-blur-soft"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xs uppercase tracking-[0.3em] text-slate-500">
                  Phase {index + 1}
                </span>
                <span className="size-9 rounded-full border border-cyan-300/60 bg-cyan-300/10 text-center font-display text-sm text-cyan-200">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-sm text-slate-300">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative mx-auto mb-20 w-full max-w-5xl overflow-hidden rounded-[36px] border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-transparent px-8 py-14 text-center shadow-glow-cyan backdrop-blur-[26px] sm:px-16"
      >
        <div className="pointer-events-none absolute -top-28 right-1/2 size-96 translate-x-1/2 rounded-full bg-cyan-400/25 blur-[160px]" />
        <h2 className="font-display text-4xl font-semibold text-white">
          Ready to orchestrate your next system breakthrough?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-100">
          Send an email to{" "}
          <a
            className="text-cyan-100 underline decoration-cyan-300/60 decoration-2 underline-offset-4 transition hover:text-white"
            href="mailto:hello@murad.systems"
          >
            hello@murad.systems
          </a>{" "}
          or connect on{" "}
          <a
            className="text-cyan-100 underline decoration-cyan-300/60 decoration-2 underline-offset-4 transition hover:text-white"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          to schedule a 30-minute strategy session.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-slate-200">
          <span className="rounded-full border border-white/20 px-6 py-3">
            Karachi
          </span>
          <span className="rounded-full border border-white/20 px-6 py-3">
            Remote-first
          </span>
          <span className="rounded-full border border-white/20 px-6 py-3">
            Global Delivery
          </span>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-6 pb-12 text-xs text-slate-500 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p>© {new Date().getFullYear()} Murad Khan. All rights reserved.</p>
          <p className="uppercase tracking-[0.3em] text-slate-600">
            Karachi · Remote · Worldwide
          </p>
        </div>
      </footer>
    </main>
  );
}
