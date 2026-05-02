import { useRef, useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styles from './RoadTimeline.module.css';

/* ─── Timeline Data (6 milestones) ─── */
const timelineData = [
  { id: 'U1', year: '2015–2022', title: '동아대학교', desc: '토목공학과', current: false },
  { id: 'U2', year: '2023–2024', title: '(주)삼보기술단', desc: '도로사업본부', current: false },
  { id: 'U3', year: '2024–2025', title: 'Wanted PotenUP', desc: 'AI Agent 개발', current: false },
  { id: 'U4', year: '2025', title: 'WisePlus', desc: 'R&D팀 인턴', current: false },
  { id: 'U5', year: '2025–현재', title: 'SLZ Inc.', desc: 'AI BIM 팀', current: true },
  { id: 'U6', year: '2026–현재', title: '서강대학교', desc: 'AI융합대학원', current: true },
];

/* ─── SVG Line Segments (viewBox 0 0 1000 400) ─── */
const LINE_SEGMENTS = [
  'M 80 200 L 270 200',   // Seg 0: U1→U2
  'M 270 200 L 460 200',  // Seg 1: U2→U3
  'M 460 200 L 650 200',  // Seg 2: U3→U4
  'M 650 200 L 900 100',  // Seg 3: U4→U5 (fork top)
  'M 650 200 L 900 300',  // Seg 4: U4→U6 (fork bottom)
];

/* ─── Node Positions (%) ─── */
const NODE_POSITIONS = [
  { left: '8%', top: '50%' },
  { left: '27%', top: '50%' },
  { left: '46%', top: '50%' },
  { left: '65%', top: '50%' },
  { left: '90%', top: '25%' },
  { left: '90%', top: '75%' },
];

/* ─── Traveling Dot Positions (matches node positions for U1–U4) ─── */
const DOT_STOPS = [
  { left: '8%', top: '50%' },
  { left: '27%', top: '50%' },
  { left: '46%', top: '50%' },
  { left: '65%', top: '50%' },
];

const SEG_COUNT = 5;
const NODE_COUNT = 6;

/* ─── Pulse path for looping light (main trunk + fork top) ─── */
const PULSE_PATH_TOP =
  'M 80 200 L 270 200 L 460 200 L 650 200 L 900 100';
const PULSE_PATH_BOTTOM =
  'M 80 200 L 270 200 L 460 200 L 650 200 L 900 300';

/* ─── Component ─── */
const RoadTimeline = () => {
  const sectionRef = useRef(null);
  const lineRefs = useRef([]);

  const [isVisible, setIsVisible] = useState(false);
  const [activeNodes, setActiveNodes] = useState(Array(NODE_COUNT).fill(false));
  const [drawnSegments, setDrawnSegments] = useState(Array(SEG_COUNT).fill(false));
  const [dotPosition, setDotPosition] = useState(0); // 0~3 (U1~U4 index)
  const [showDot, setShowDot] = useState(false);
  const [showForkDots, setShowForkDots] = useState(false);
  const [forkArrived, setForkArrived] = useState(false);
  const [showPulse, setShowPulse] = useState(false);

  /* IntersectionObserver */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Initialize stroke-dashoffset (lines hidden) */
  useEffect(() => {
    lineRefs.current.forEach((el) => {
      if (el) {
        const len = el.getTotalLength();
        el.style.strokeDasharray = len;
        el.style.strokeDashoffset = len;
      }
    });
  }, []);

  /* Animation sequence */
  useEffect(() => {
    if (!isVisible) return;
    const timers = [];

    const activateNode = (idx, delay) => {
      timers.push(setTimeout(() => {
        setActiveNodes((prev) => { const n = [...prev]; n[idx] = true; return n; });
      }, delay));
    };

    const drawLine = (segIdx, delay, durationMs) => {
      const durationS = durationMs / 1000;
      timers.push(setTimeout(() => {
        const el = lineRefs.current[segIdx];
        if (el) {
          el.style.transition = `stroke-dashoffset ${durationS}s ease-in-out`;
          el.style.strokeDashoffset = '0';
        }
      }, delay));
      timers.push(setTimeout(() => {
        setDrawnSegments((prev) => { const n = [...prev]; n[segIdx] = true; return n; });
      }, delay + durationMs));
    };

    /*  ms   | Action
     *  -----|--------
     *  0    | U1 active
     *  200  | travelingDot appears at U1
     *  400  | Seg 0 draw (600ms) + dot moves to U2 (600ms)
     *  1000 | U2 active
     *  1200 | Seg 1 draw + dot moves to U3
     *  1800 | U3 active
     *  2000 | Seg 2 draw + dot moves to U4
     *  2600 | U4 active, travelingDot disappears
     *  2800 | Seg 3+4 draw (800ms) + fork dots appear, move to U5/U6
     *  3600 | U5+U6 active
     *  4000 | pulse loop starts
     */

    // U1 active
    activateNode(0, 0);

    // Show traveling dot at U1
    timers.push(setTimeout(() => {
      setDotPosition(0);
      setShowDot(true);
    }, 200));

    // Seg 0 + move dot to U2
    drawLine(0, 400, 600);
    timers.push(setTimeout(() => setDotPosition(1), 400));
    activateNode(1, 1000);

    // Seg 1 + move dot to U3
    drawLine(1, 1200, 600);
    timers.push(setTimeout(() => setDotPosition(2), 1200));
    activateNode(2, 1800);

    // Seg 2 + move dot to U4
    drawLine(2, 2000, 600);
    timers.push(setTimeout(() => setDotPosition(3), 2000));
    activateNode(3, 2600);

    // Hide traveling dot, show fork dots
    timers.push(setTimeout(() => setShowDot(false), 2600));

    // Fork: Seg 3+4 draw + fork dots move
    drawLine(3, 2800, 800);
    drawLine(4, 2800, 800);
    timers.push(setTimeout(() => setShowForkDots(true), 2800));

    // Fork dots arrive
    timers.push(setTimeout(() => setForkArrived(true), 2850)); // slight delay for transition trigger

    // U5 + U6 active
    activateNode(4, 3600);
    activateNode(5, 3600);

    // Hide fork dots, start pulse
    timers.push(setTimeout(() => {
      setShowForkDots(false);
      setShowPulse(true);
    }, 4000));

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

      <div className={styles.trackContainer}>
        {/* ── SVG Line Layer ── */}
        <svg
          className={styles.roadSvg}
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background lines (always visible, dim) */}
          {LINE_SEGMENTS.map((d, i) => (
            <path
              key={`bg-${i}`}
              d={d}
              fill="none"
              stroke="rgba(100, 150, 255, 0.15)"
              strokeWidth={3}
              strokeLinecap="round"
            />
          ))}

          {/* Animated drawn lines */}
          {LINE_SEGMENTS.map((d, i) => (
            <path
              key={`line-${i}`}
              ref={(el) => { lineRefs.current[i] = el; }}
              d={d}
              fill="none"
              stroke="rgba(100, 150, 255, 0.5)"
              strokeWidth={3}
              strokeLinecap="round"
            />
          ))}

          {/* Pulse lights (looping after all drawn) */}
          {showPulse && (
            <>
              <circle r={6} fill="#fff" opacity={0.9} filter="url(#pulseGlow)">
                <animateMotion dur="4s" repeatCount="indefinite" path={PULSE_PATH_TOP} />
              </circle>
              <circle r={6} fill="#fff" opacity={0.9} filter="url(#pulseGlow)">
                <animateMotion dur="4s" repeatCount="indefinite" path={PULSE_PATH_BOTTOM} />
              </circle>
            </>
          )}
        </svg>

        {/* ── HTML Nodes ── */}
        {timelineData.map((item, i) => (
          <div
            key={item.id}
            className={`${styles.node} ${activeNodes[i] ? styles.nodeActive : ''} ${item.current ? styles.nodeCurrent : ''}`}
            style={{ left: NODE_POSITIONS[i].left, top: NODE_POSITIONS[i].top }}
            data-pos={i < 4 ? 'main' : i === 4 ? 'forkTop' : 'forkBottom'}
          >
            <div className={styles.dot} />
            <div className={styles.card}>
              <div className={styles.cardId}>{item.id}</div>
              <div className={styles.cardYear}>{item.year}</div>
              <div className={styles.cardTitle}>{item.title}</div>
              <div className={styles.cardDesc}>{item.desc}</div>
            </div>
          </div>
        ))}

        {/* ── Traveling Dot (U1→U4) ── */}
        {showDot && (
          <div
            className={styles.travelingDot}
            style={{
              left: DOT_STOPS[dotPosition].left,
              top: DOT_STOPS[dotPosition].top,
            }}
          />
        )}

        {/* ── Fork Dots (U4→U5, U4→U6) ── */}
        {showForkDots && (
          <>
            <div
              className={styles.forkDot}
              style={{
                left: forkArrived ? '90%' : '65%',
                top: forkArrived ? '25%' : '50%',
              }}
            />
            <div
              className={styles.forkDot}
              style={{
                left: forkArrived ? '90%' : '65%',
                top: forkArrived ? '75%' : '50%',
              }}
            />
          </>
        )}

        {/* ── Learn More Button ── */}
        <Link to="/timeline" className={styles.learnMoreBtn}>
          Learn More →
        </Link>
      </div>

      {/* ── Mobile Timeline (≤768px) ── */}
      <div className={styles.mobileTimeline}>
        {/* U1 ~ U4 (sequential) */}
        {timelineData.slice(0, 4).map((item, i) => (
          <Fragment key={item.id}>
            <div className={`${styles.mobileCard} ${activeNodes[i] ? styles.mobileCardActive : ''}`}>
              <div className={styles.mobileCardHeader}>
                <span className={styles.mobileId}>{item.id}</span>
                <span className={styles.mobileYear}>{item.year}</span>
              </div>
              <div className={styles.mobileTitle}>{item.title}</div>
              <div className={styles.mobileDesc}>{item.desc}</div>
            </div>
            {i < 3 && (
              <div className={`${styles.mobileConnector} ${activeNodes[i] ? styles.mobileConnectorActive : ''}`} />
            )}
          </Fragment>
        ))}

        {/* Fork group (U5 + U6 parallel) */}
        <div className={styles.mobileForkGroup}>
          <div className={styles.mobileForkLabel}>// PARALLEL</div>
          {timelineData.slice(4).map((item, i) => (
            <div
              key={item.id}
              className={`${styles.mobileCard} ${styles.mobileForkCard} ${activeNodes[i + 4] ? styles.mobileCardActive : ''}`}
            >
              <div className={styles.mobileCardHeader}>
                <span className={styles.mobileId}>{item.id}</span>
                <span className={styles.mobileYear}>{item.year}</span>
              </div>
              <div className={styles.mobileTitle}>{item.title}</div>
              <div className={styles.mobileDesc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadTimeline;
