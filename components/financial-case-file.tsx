import { Paperclip } from "@phosphor-icons/react/dist/ssr/Paperclip";

function CashFlowChart() {
  return (
    <svg
      className="cash-flow-chart"
      viewBox="0 0 520 190"
      role="img"
      aria-label="Schematic cash-flow chart rising and falling across the model"
    >
      <g className="chart-grid" aria-hidden="true">
        {[35, 70, 105, 140].map((y) => (
          <line key={y} x1="0" x2="520" y1={y} y2={y} />
        ))}
        {[65, 130, 195, 260, 325, 390, 455].map((x) => (
          <line key={x} x1={x} x2={x} y1="0" y2="165" />
        ))}
      </g>
      <path
        className="chart-area"
        d="M0 140 C45 120 52 95 90 112 C125 127 142 70 182 88 C220 104 246 42 281 66 C322 94 338 36 372 57 C414 82 438 25 520 43 L520 165 L0 165 Z"
      />
      <path
        className="chart-line"
        d="M0 140 C45 120 52 95 90 112 C125 127 142 70 182 88 C220 104 246 42 281 66 C322 94 338 36 372 57 C414 82 438 25 520 43"
      />
      <path
        className="chart-guide"
        d="M0 146 C68 138 118 132 182 120 C265 105 332 96 405 80 C450 70 486 62 520 53"
      />
    </svg>
  );
}

export function FinancialCaseFile({ projectName }: { projectName: string }) {
  return (
    <figure className="case-file" aria-labelledby="case-file-title">
      <div className="case-file-back" aria-hidden="true" />
      <Paperclip className="case-clip case-clip-one" weight="thin" aria-hidden="true" />
      <Paperclip className="case-clip case-clip-two" weight="thin" aria-hidden="true" />

      <div className="case-sheet">
        <figcaption className="case-label" id="case-file-title">
          {projectName} / personal finance
        </figcaption>
        <div className="app-window">
          <div className="app-toolbar" aria-hidden="true">
            <span />
            <span />
            <span />
            <i />
          </div>
          <div className="app-model">
            <section className="model-chart" aria-label="Cash-flow model view">
              <div className="model-heading">
                <span>Cash flow</span>
                <span>Model view</span>
              </div>
              <CashFlowChart />
            </section>
            <section className="model-side" aria-label="Allocation model view">
              <div className="model-heading">
                <span>Allocation</span>
                <span>Scenario</span>
              </div>
              <div className="allocation-ring" aria-hidden="true" />
              <div className="allocation-lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </section>
            <section className="model-table" aria-label="Account model rows">
              <div className="model-heading">
                <span>Accounts</span>
                <span>Working set</span>
              </div>
              {[0, 1, 2, 3].map((row) => (
                <div className="model-row" key={row} aria-hidden="true">
                  <i />
                  <span />
                  <span />
                  <b />
                </div>
              ))}
            </section>
            <section className="model-notes" aria-label="Model notes">
              <div className="model-heading">
                <span>Notes</span>
              </div>
              <p>Make assumptions visible.</p>
              <p>Keep decisions legible.</p>
            </section>
          </div>
        </div>
      </div>

      <span className="case-annotation annotation-price" aria-hidden="true">
        price view
      </span>
      <span className="case-annotation annotation-orders" aria-hidden="true">
        decision context
      </span>
      <span className="proof-circle" aria-hidden="true" />
    </figure>
  );
}
