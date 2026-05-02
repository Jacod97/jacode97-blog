import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './PathfindingTimeline.module.css';

/* ─── Timeline Data (6 chips) ─── */
const timelineData = [
  { id: 'U1', year: '2015–2022', title: '동아대학교', desc: '토목공학과' },
  { id: 'U2', year: '2023–2024', title: '삼보기술단', desc: '도로사업본부' },
  { id: 'U3', year: '2024–2025', title: 'Wanted PotenUP', desc: 'AI Agent 개발' },
  { id: 'U4', year: '2025', title: 'WisePlus', desc: 'R&D팀 인턴' },
  { id: 'U5', year: '2025–', title: 'SLZ Inc.', desc: 'AI BIM 팀' },
  { id: 'U6', year: '2026–', title: '서강대 대학원', desc: 'AI 석사' },
];

/* ─── SVG Trace Paths (PCB 90° routing, 3×2 snake) ─── */
/*
  viewBox: 0 0 1000 600
  Row 1 (top  8%): y  48–146, center  97   |  Left x: 50–290,  Right x: 550–790
  Row 2 (top 36%): y 216–314, center 265   |
  Row 3 (top 64%): y 384–482, center 433   |
  Snake: U1(L)→U2(R) → U3(R)→U4(L) → U5(L)→U6(R)
*/
const TRACE_PATHS = [
  'M 290 97  H 380 V 75  H 475 V 97  H 550',   // U1 → U2
  'M 760 146 V 178 H 790 V 195 H 760 V 216',   // U2 → U3
  'M 550 265 H 475 V 285 H 380 V 265 H 290',   // U3 → U4
  'M 170 314 V 345 H 140 V 362 H 170 V 384',   // U4 → U5
  'M 290 433 H 380 V 413 H 475 V 433 H 550',   // U5 → U6
];

const CHIP_COUNT = 6;

/* ─── Decorative Via Holes ─── */
const VIA_HOLES = [
  { x: 420, y: 45 },  { x: 510, y: 50 },
  { x: 155, y: 190 }, { x: 900, y: 180 },
  { x: 492, y: 195 }, { x: 468, y: 360 },
  { x: 100, y: 370 }, { x: 345, y: 550 },
  { x: 705, y: 540 }, { x: 942, y: 100 },
  { x: 58, y: 55 },   { x: 610, y: 555 },
  { x: 870, y: 360 }, { x: 400, y: 530 },
];

/* ─── SMD Components ─── */
const SMD_COMPONENTS = [
  { x: 378, y: 55, v: false },  { x: 558, y: 55, v: true },
  { x: 418, y: 360, v: false }, { x: 905, y: 140, v: true },
  { x: 98, y: 210, v: false },  { x: 648, y: 550, v: true },
  { x: 348, y: 200, v: false }, { x: 882, y: 310, v: true },
  { x: 920, y: 460, v: true },  { x: 80, y: 520, v: false },
];

/* ─── Silkscreen Labels ─── */
const SILK_LABELS = [
  { x: 4.2, y: 93, text: 'GND' },
  { x: 91, y: 93, text: 'VCC' },
  { x: 44, y: 3, text: 'DATA' },
  { x: 84, y: 33, text: 'CLK' },
  { x: 4.5, y: 3, text: 'REV 1.0' },
  { x: 82, y: 3, text: 'PCB-2025' },
];

/* ─── Test Points ─── */
const TEST_POINTS = [
  { x: 500, y: 97 },
  { x: 812, y: 190 },
  { x: 168, y: 190 },
  { x: 500, y: 433 },
  { x: 812, y: 370 },
];

const PIN_COUNT = 5;

/* ─── Component ─── */
const PathfindingTimeline = () => {
  const sectionRef = useRef(null);
  const traceRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const [activeChips, setActiveChips] = useState(Array(CHIP_COUNT).fill(false));
  const [showPulses, setShowPulses] = useState(Array(CHIP_COUNT - 1).fill(false));

  /* IntersectionObserver */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Initialize stroke-dashoffset (traces hidden) */
  useEffect(() => {
    traceRefs.current.forEach((pathEl) => {
      if (pathEl) {
        const len = pathEl.getTotalLength();
        pathEl.style.strokeDasharray = len;
        pathEl.style.strokeDashoffset = len;
      }
    });
  }, []);

  /* Animation sequence on visibility */
  useEffect(() => {
    if (!isVisible) return;
    const timers = [];

    const activate = (chipIdx, delay) => {
      timers.push(setTimeout(() => {
        setActiveChips(prev => { const n = [...prev]; n[chipIdx] = true; return n; });
        if (chipIdx > 0) {
          setShowPulses(prev => { const n = [...prev]; n[chipIdx - 1] = true; return n; });
        }
      }, delay));
    };

    const drawTrace = (traceIdx, delay, duration = 0.7) => {
      timers.push(setTimeout(() => {
        const el = traceRefs.current[traceIdx];
        if (el) {
          el.style.transition = `stroke-dashoffset ${duration}s ease-in-out`;
          el.style.strokeDashoffset = '0';
        }
      }, delay));
    };

    activate(0, 0);          // U1
    drawTrace(0, 300);       // U1→U2
    activate(1, 1000);       // U2
    drawTrace(1, 1200, 0.5); // U2→U3
    activate(2, 1700);       // U3
    drawTrace(2, 1900);      // U3→U4
    activate(3, 2600);       // U4
    drawTrace(3, 2800, 0.5); // U4→U5
    activate(4, 3300);       // U5
    drawTrace(4, 3500);      // U5→U6
    activate(5, 4200);       // U6

    return () => timers.forEach(clearTimeout);
  }, [isVisible]);

  return (
    <section id="timeline" ref={sectionRef} className={styles.timelineSection}>
      {/* Section Label */}
      <div className={styles.sectionLabel}>
        <span className={styles.labelLine} />
        <span>02 / TIMELINE</span>
        <span className={styles.labelLine} />
      </div>

      {/* PCB Board */}
      <div className={styles.board}>

        {/* ── SVG Layer ── */}
        <svg
          className={styles.traceSvg}
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="traceGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Via Holes */}
          {VIA_HOLES.map((v, i) => (
            <g key={`via-${i}`}>
              <circle cx={v.x} cy={v.y} r={8} fill="none" stroke="#1a4a2a" strokeWidth={3} />
              <circle cx={v.x} cy={v.y} r={3} fill="#071210" stroke="#1a4a2a" strokeWidth={1} />
            </g>
          ))}

          {/* SMD Components */}
          {SMD_COMPONENTS.map((s, i) => (
            <rect
              key={`smd-${i}`}
              x={s.x - (s.v ? 4 : 12)}
              y={s.y - (s.v ? 12 : 4)}
              width={s.v ? 8 : 24}
              height={s.v ? 24 : 8}
              rx={1}
              fill="#0f1f18"
              stroke="#1a4a2a"
              strokeWidth={0.8}
            />
          ))}

          {/* Test Points */}
          {TEST_POINTS.map((t, i) => (
            <circle key={`tp-${i}`} cx={t.x} cy={t.y} r={6} fill="none" stroke="#2a5a3a" strokeWidth={2} />
          ))}

          {/* Copper Traces */}
          {TRACE_PATHS.map((d, i) => (
            <path
              key={`trace-${i}`}
              ref={(el) => { traceRefs.current[i] = el; }}
              d={d}
              fill="none"
              stroke="rgba(0,255,136,0.5)"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#traceGlow)"
            />
          ))}

          {/* Current Pulses */}
          {TRACE_PATHS.map((d, i) =>
            showPulses[i] && (
              <circle key={`pulse-${i}`} r={5} fill="#00ff88" opacity={0.9} filter="url(#pulseGlow)">
                <animateMotion dur={`${1.6 + i * 0.15}s`} repeatCount="indefinite" path={d} />
              </circle>
            ),
          )}

          {/* Decorative stubs */}
          <path d="M 420 45 V 70" fill="none" stroke="rgba(0,255,136,0.2)" strokeWidth={1.5} />
          <path d="M 510 50 V 72" fill="none" stroke="rgba(0,255,136,0.2)" strokeWidth={1.5} />
          <path d="M 900 180 H 940" fill="none" stroke="rgba(0,255,136,0.2)" strokeWidth={1.5} />
          <path d="M 100 370 H 60" fill="none" stroke="rgba(0,255,136,0.2)" strokeWidth={1.5} />
          <path d="M 345 550 V 575" fill="none" stroke="rgba(0,255,136,0.2)" strokeWidth={1.5} />
          <path d="M 705 540 H 740" fill="none" stroke="rgba(0,255,136,0.2)" strokeWidth={1.5} />
          <path d="M 870 360 H 910" fill="none" stroke="rgba(0,255,136,0.2)" strokeWidth={1.5} />
        </svg>

        {/* ── Silkscreen Labels ── */}
        {SILK_LABELS.map((l, i) => (
          <span
            key={`silk-${i}`}
            className={styles.silkLabel}
            style={{ left: `${l.x}%`, top: `${l.y}%` }}
          >
            {l.text}
          </span>
        ))}

        {/* ── IC Chips ── */}
        {timelineData.map((chip, i) => (
          <div
            key={chip.id}
            className={`${styles.chip} ${styles[`chipPos${i}`]} ${activeChips[i] ? styles.chipActive : ''}`}
          >
            <div className={styles.chipLabel}>{chip.id}</div>
            <div className={styles.pinsLeft}>
              {Array.from({ length: PIN_COUNT }, (_, j) => (
                <div key={j} className={styles.pin} />
              ))}
            </div>
            <div className={styles.chipBody}>
              <div className={styles.chipNotch} />
              <div className={styles.chipLed} />
              <div className={styles.chipYear}>{chip.year}</div>
              <div className={styles.chipTitle}>{chip.title}</div>
              <div className={styles.chipDesc}>{chip.desc}</div>
            </div>
            <div className={styles.pinsRight}>
              {Array.from({ length: PIN_COUNT }, (_, j) => (
                <div key={j} className={styles.pin} />
              ))}
            </div>
          </div>
        ))}

        {/* ── Learn More Button ── */}
        <Link to="/timeline" className={styles.learnMoreBtn}>
          Learn More →
        </Link>

        {/* ── Mobile Traces (visible only ≤768px) ── */}
        {timelineData.slice(0, -1).map((_, i) => (
          <div
            key={`mtrace-${i}`}
            className={`${styles.mobileTrace} ${activeChips[i] ? styles.mobileTraceActive : ''}`}
          >
            <div className={styles.mobileTraceLine} />
            {showPulses[i] && <div className={styles.mobilePulse} />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PathfindingTimeline;
