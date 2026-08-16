import Image from "next/image";

const navigation = ["Overview", "Analysis", "Vaulty", "Markets"] as const;
const accounts = [
  ["Current account", "€3,200"],
  ["Savings", "€42,480"],
  ["Investment", "€21,300"],
] as const;
const transactions = [
  ["Salary", "+€3,200.00", "Income"],
  ["Monoprix", "−€45.32", "Groceries"],
  ["Transport", "−€18.40", "Mobility"],
] as const;

function SavyyMark() {
  return (
    <div className="flex items-center gap-2 font-sans text-sm font-bold text-white">
      <Image
        src="/savyy/logo.svg"
        width={22}
        height={22}
        alt=""
        aria-hidden="true"
      />
      <span>Savyy</span>
    </div>
  );
}

function WealthRing() {
  return (
    <svg
      className="size-24 -rotate-90"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <circle
        cx="50"
        cy="50"
        r="37"
        fill="none"
        stroke="#252a35"
        strokeWidth="13"
      />
      <circle
        cx="50"
        cy="50"
        r="37"
        fill="none"
        stroke="#06b6a8"
        strokeDasharray="104 129"
        strokeWidth="13"
      />
      <circle
        cx="50"
        cy="50"
        r="37"
        fill="none"
        stroke="#7d82ff"
        strokeDasharray="72 161"
        strokeDashoffset="-106"
        strokeWidth="13"
      />
      <circle
        cx="50"
        cy="50"
        r="37"
        fill="none"
        stroke="#4598d8"
        strokeDasharray="38 195"
        strokeDashoffset="-180"
        strokeWidth="13"
      />
    </svg>
  );
}

export function SavyyProductSpecimen() {
  return (
    <figure className="relative m-0 min-h-[31rem] overflow-hidden bg-[#090d14] [--specimen-accent:#8ab4ff] [--specimen-muted:#a9b1c1] min-[641px]:min-h-[38rem] min-[901px]:min-h-0">
      <figcaption className="absolute top-5 right-6 left-6 z-20 flex items-center justify-between gap-6 font-mono text-[0.6875rem] tracking-[0.07em] text-[var(--specimen-accent)] uppercase min-[641px]:top-7 min-[641px]:right-10 min-[641px]:left-10">
        <span>Savyy</span>
        <span>Web + mobile</span>
      </figcaption>

      <div className="absolute top-[4.15rem] right-[clamp(1.2rem,3.5vw,3.5rem)] left-[clamp(1.2rem,3.5vw,3.5rem)] min-h-[27rem] overflow-hidden border border-[#3a4355] bg-[#0f131b] shadow-[8px_12px_28px_rgba(0,0,0,0.28)] min-[641px]:top-[3.8rem] min-[641px]:min-h-[32.5rem] min-[901px]:right-40 min-[901px]:left-[2.7rem]">
        <div
          className="flex h-9 items-center gap-1.5 border-b border-[#2b3240] px-4"
          aria-hidden="true"
        >
          <span className="size-2 rounded-full bg-[#ff8a78]" />
          <span className="size-2 rounded-full bg-[#efd06c]" />
          <span className="size-2 rounded-full bg-[#8fcb8b]" />
          <span className="ml-auto font-mono [font-size:var(--type-diagram)] tracking-[0.08em] text-[#8c95a8] uppercase">
            Demo data
          </span>
        </div>

        <div className="grid min-h-[26rem] grid-cols-[7.25rem_minmax(0,1fr)] min-[641px]:grid-cols-[9.25rem_minmax(0,1fr)]">
          <aside
            className="border-r border-[#2b3240] px-3 py-5"
            aria-label="Savyy demonstration navigation"
          >
            <SavyyMark />
            <ul className="mt-7 space-y-1.5 p-0 text-[0.64rem] text-[#a9b1c1]">
              {navigation.map((item, index) => (
                <li
                  className={
                    index === 0
                      ? "border border-[#343b51] bg-[#1b2030] px-2.5 py-2 text-white"
                      : "px-2.5 py-2"
                  }
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 font-mono [font-size:var(--type-diagram)] tracking-[0.08em] text-[var(--specimen-muted)] uppercase">
              Accounts
            </p>
            <dl className="mt-2 space-y-2 [font-size:var(--type-diagram)] text-[#a9b1c1]">
              {accounts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd className="m-0 text-[var(--specimen-muted)]">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="p-4 pb-28 min-[641px]:p-6 min-[641px]:pb-10">
            <div className="grid gap-3 border border-[#2b3240] bg-[#121722] p-4 min-[641px]:grid-cols-[1.2fr_0.8fr] min-[641px]:items-end">
              <div>
                <p className="m-0 [font-size:var(--type-diagram)] text-[#8c95a8]">
                  Total balance
                </p>
                <strong className="mt-1 block font-sans text-[clamp(1.35rem,2.2vw,2.15rem)] leading-none font-semibold text-white">
                  €110,130.64
                </strong>
              </div>
              <dl className="m-0 grid grid-cols-3 gap-2 [font-size:var(--type-diagram)]">
                <div>
                  <dt className="text-[#8c95a8]">Income</dt>
                  <dd className="m-0 mt-1 text-white">€3,200</dd>
                </div>
                <div>
                  <dt className="text-[#8c95a8]">Expenses</dt>
                  <dd className="m-0 mt-1 text-white">−€1,200</dd>
                </div>
                <div>
                  <dt className="text-[#8c95a8]">Monthly</dt>
                  <dd className="m-0 mt-1 text-[#b9e84b]">+€2,000</dd>
                </div>
              </dl>
            </div>

            <div className="mt-3 grid gap-3 min-[641px]:grid-cols-[1.2fr_0.8fr]">
              <section
                className="border border-[#2b3240] bg-[#121722] p-4"
                aria-label="Balance evolution demonstration"
              >
                <div className="flex items-center justify-between [font-size:var(--type-diagram)] text-[#8c95a8]">
                  <span>Balance evolution</span>
                  <span>Last 30 days</span>
                </div>
                <svg
                  className="mt-5 h-20 w-full"
                  viewBox="0 0 420 90"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 72H420M0 45H420M0 18H420"
                    stroke="#272e3a"
                    strokeWidth="1"
                  />
                  <path
                    d="M0 76C30 71 40 57 68 60C96 63 104 42 138 46C171 51 180 28 214 35C250 43 262 17 298 25C335 34 351 13 380 18C397 21 408 14 420 11"
                    fill="none"
                    stroke="#818cf8"
                    strokeWidth="2.25"
                  />
                </svg>
              </section>

              <section
                className="grid place-items-center border border-[#2b3240] bg-[#121722] p-3"
                aria-label="Wealth distribution demonstration"
              >
                <div className="relative grid place-items-center">
                  <WealthRing />
                  <span className="absolute text-center [font-size:var(--type-diagram)] leading-tight text-white">
                    €110,131
                    <small className="block text-[var(--specimen-muted)]">
                      total
                    </small>
                  </span>
                </div>
              </section>
            </div>

            <section
              className="mt-3 hidden border border-[#2b3240] bg-[#121722] min-[641px]:block"
              aria-label="Recent transactions demonstration"
            >
              <h3 className="m-0 border-b border-[#2b3240] px-4 py-2 font-sans text-[0.62rem] font-medium text-white">
                Recent transactions
              </h3>
              <ul className="m-0 grid list-none grid-cols-3 divide-x divide-[#2b3240] p-0">
                {transactions.map(([name, amount, category]) => (
                  <li
                    className="px-3 py-2 [font-size:var(--type-diagram)] text-[#8c95a8]"
                    key={name}
                  >
                    <span className="block text-white">{name}</span>
                    <span>{category}</span>
                    <strong className="mt-1 block font-normal text-[#c7cfdd]">
                      {amount}
                    </strong>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      <div className="absolute top-[5.3rem] right-[7%] z-10 hidden aspect-[9/16] h-[29rem] rotate-[4deg] overflow-hidden border border-[var(--specimen-accent)]/55 bg-[#1f3b62] shadow-[10px_18px_34px_rgba(0,0,0,0.5)] min-[641px]:block">
        <Image
          className="object-cover"
          src="/savyy/play-analysis.png"
          fill
          sizes="261px"
          alt="Official Savyy mobile store artwork showing analysis, alerts, reports, exports, billing, and support"
        />
      </div>
      <div className="absolute right-[22%] bottom-24 z-20 hidden aspect-[9/16] h-[26.5rem] rotate-[-5deg] overflow-hidden border border-[var(--specimen-accent)]/70 bg-[#1f3b62] shadow-[10px_20px_38px_rgba(0,0,0,0.56)] min-[901px]:block min-[1181px]:right-[24%]">
        <Image
          className="object-cover"
          src="/savyy/play-overview.png"
          fill
          sizes="239px"
          alt="Official Savyy mobile store artwork showing balances, cash flow, and wealth distribution"
          fetchPriority="high"
        />
      </div>
    </figure>
  );
}
