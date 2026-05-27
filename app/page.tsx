export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Developer Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate Changelogs from{' '}
          <span className="text-[#58a6ff]">Git Commits</span>{' '}Automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub or GitLab repo. Our AI analyzes every commit and produces polished, customer-facing release notes — categorized by features, fixes, and breaking changes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started — $12/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[['GitHub & GitLab', 'Native OAuth integration'],['AI Categorization', 'Features, fixes, breaking changes'],['One Click Export', 'Markdown, HTML, or JSON']].map(([title, desc]) => (
            <div key={title} className="p-4 rounded-xl bg-[#161b22] border border-[#30363d]">
              <p className="text-white font-semibold text-sm mb-1">{title}</p>
              <p className="text-[#8b949e] text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {['Unlimited repos','AI-powered changelog generation','GitHub & GitLab OAuth','Markdown / HTML / JSON export','Priority support'].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            ['How does the AI categorize commits?','We send your commit messages to OpenAI GPT-4o which classifies each change as a feature, bug fix, breaking change, or internal update — then groups them into a clean changelog.'],
            ['Which Git providers are supported?','GitHub and GitLab are fully supported via OAuth. You grant read-only access to the repos you choose — we never write to your repositories.'],
            ['Can I customize the changelog format?','Yes. You can edit the AI prompt template, choose output format (Markdown, HTML, JSON), and filter which commit types appear in the public changelog.']
          ].map(([q, a]) => (
            <div key={q as string} className="rounded-xl bg-[#161b22] border border-[#30363d] p-5">
              <p className="text-white font-semibold mb-2 text-sm">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} ChangelogAI. All rights reserved.
      </footer>
    </main>
  )
}
