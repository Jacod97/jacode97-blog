import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './ProjectDetail.module.css';

const projectDetails = [
  {
    slug: 'routi-ai-mlops',
    name: 'ROUTI-AI-MLOps',
    tech: 'PyTorch, MLFlow, Optuna, Docker, PostgreSQL, MinIO, Grafana',
    category: 'Professional',
    confidential: true,
    period: '2025.09 – 2026.02',
    role: 'AI Engineer',
    org: 'SLZ Inc.',
    abstract:
      'ROUTI-AI는 산업시설의 MEP(기계·전기·배관) 설계를 AI 추론과 알고리즘으로 자동화하는 솔루션입니다. 반도체 공장, 조선소 등 초고난도 시설에서는 최대 40개의 MEP 공종이 얽히며, 공종 간 간섭(Clash)이 공기 지연의 주원인이 됩니다. 본 프로젝트에서는 이 솔루션의 핵심인 3D CNN 모델의 학습-평가-배포 생애주기를 체계적으로 관리하기 위한 MLOps 파이프라인 프로토타입을 설계·구축했습니다. 실험 추적(MLFlow), 하이퍼파라미터 최적화(Optuna), 모델 아티팩트 저장(MinIO), 학습 모니터링(Grafana)을 Docker 기반으로 통합하여 반복 가능한 학습 환경을 구성했습니다.',
  },
  {
    slug: 'routi-ai-auto-routing',
    name: 'ROUTI-AI-Auto Routing',
    tech: 'A* Algorithm, Reinforcement Learning, Python',
    category: 'Professional',
    confidential: true,
    period: '2025.09 – 현재',
    role: 'AI Engineer',
    org: 'SLZ Inc.',
    abstract:
      'ROUTI-AI의 핵심 기능인 MEP 배관 자동 라우팅 모듈을 개발하는 프로젝트입니다. 두 개의 연결 지점이 주어지면 주변 구조물 및 타 공종과의 간섭을 회피하면서 최단 경로의 파이프라인을 자동 생성합니다. A* 알고리즘으로 3D 공간에서 초기 경로를 탐색하고, 강화학습(RL) 에이전트를 통해 파이프 간 충돌을 해소하는 접근 방식을 취하고 있습니다. 산업시설에서 MEP가 차지하는 비중은 20~70%에 달하며, 자동 최적 설계를 통해 재료비 절감과 공기 단축에 기여합니다.',
  },
  {
    slug: 'building-component-ai',
    name: '건축부재 자율인식 AI',
    tech: 'PyTorch, OpenCV, Darknet, YOLOv4-tiny, Cosmos, Unreal Engine, MQTT',
    category: 'Professional',
    confidential: true,
    period: '2025.05 – 2025.07',
    role: 'AI R&D 인턴',
    org: 'SLZ Inc.',
    abstract:
      '공사 현장의 진척률을 정량적으로 파악하기 위해, 드론 및 태블릿 카메라로 촬영한 영상에서 건축부재를 자율 인식하는 객체 탐지 AI를 개발한 프로젝트입니다. 원본 데이터 수집 → 학습 데이터 생성 → 모델 학습 → 평가 → 결과 분석의 사이클을 반복 수행하며 성능을 개선했습니다. 드론 카메라의 비표준 해상도에 대응하기 위해 크롭 및 레터박싱 등 다양한 전처리 방식을 실험했고, 라벨링 데이터 재검수를 통한 학습 데이터 품질 향상만으로도 유의미한 성능 개선을 확인했습니다. 또한 Unreal Engine과 생성형 모델 Cosmos를 활용하여 합성 이미지 데이터를 생성하고 이를 학습에 활용하는 시도도 진행했습니다.',
  },
  {
    slug: 'presentation-agent',
    name: 'Presentation Agent',
    tech: 'LangChain, FAISS, RAG, TTS',
    category: 'Personal',
    confidential: false,
    period: '2025.03 – 2025.04',
    role: '개인 프로젝트',
    org: 'Personal',
    abstract:
      'PPT·PDF 등 발표자료를 입력받아 페이지별 대본을 자동 생성하고, TTS 엔진과 연동하여 에이전트가 발표를 대신 수행하는 시스템입니다. 사람이 발표자료를 준비하면 에이전트가 내용을 분석하고 발표까지 수행하는 구조입니다. 또한 기존 발표에서는 발표 중 말을 끊기 어렵고, 이해될 때까지 반복 질문하기 부담스러운 점에 착안하여 실시간 질의응답 챗봇 시스템을 함께 구축했습니다. 발표 에이전트가 프레젠테이션을 진행하는 동안, 별도의 에이전트가 청중의 질문에 실시간으로 응답하여 발표와 Q&A가 동시에 이루어지는 환경을 구현했습니다.',
  },
  {
    slug: 'dacon-construction-safety',
    name: 'DACON 건설공사 사고 예방',
    tech: 'LangChain, ChromaDB, Ollama, Gemma3',
    category: 'Personal',
    confidential: false,
    period: '2025.02 – 2025.03',
    role: '개인 참가',
    org: 'DACON 공모전',
    abstract:
      'DACON 공모전에 참가하여 건설공사 현장의 사고를 예방하고 대응책을 자동으로 생성하는 AI 시스템을 개발했습니다. 로컬 LLM(Gemma3)과 RAG를 결합하여 건설 안전 관련 문서로부터 맥락에 맞는 대응책을 생성합니다.',
  },
  {
    slug: 'deepprint',
    name: 'DeepPrint',
    tech: 'YOLOv11, Gemini, Rule-based, RAG',
    category: 'Personal',
    confidential: false,
    period: '2025.02 – 2025.03',
    role: '개인 프로젝트',
    org: 'Personal',
    abstract:
      'HTP(집-나무-사람) 그림검사를 AI로 자동화하는 심리분석 보조 시스템입니다. YOLOv11 객체 탐지, 규칙 기반 점수화, Gemini LLM 심리 해석을 결합한 멀티모달 프레임워크로, 전문가의 주관적 판단에 의존하던 기존 HTP 분석을 정량화·표준화하여 대규모 데이터에 대해서도 일관된 결과를 빠르게 산출합니다.',
  },
  {
    slug: 'wildfire-prediction',
    name: '산불 발생 예측 모델',
    tech: 'Scikit-learn, XGBoost, LightGBM, SMOTE',
    category: 'Research',
    confidential: false,
    period: '2025.01 – 2025.02',
    role: '연구 참여',
    org: 'Research',
    abstract:
      '기상·인구·토지 데이터를 통합하여 앙상블 학습으로 산불 발생을 예측하는 모델을 개발했습니다. 산불 발생 데이터의 극심한 클래스 불균형에 대응하기 위해 오버샘플링(SMOTE)과 언더샘플링을 결합하고, 기존 연구에서 주로 사용된 ROC-AUC 대신 PR-AUC를 주요 평가 지표로 채택하여 양성 클래스(산불 발생)에 대한 예측력을 보다 정확히 반영하고자 했습니다.',
  },
];

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08 },
  }),
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectDetails.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  const { confidential } = project;

  return (
    <div className={styles.page}>
      <nav className={styles.topNav}>
        <Link to="/" className={styles.backBtn}>← Back</Link>
        <h1 className={styles.pageTitle}>{project.name}</h1>
      </nav>

      <div className={styles.scrollArea}>
        <div className={styles.content}>
          {/* ── Header ── */}
          <motion.div
            className={styles.header}
            variants={fade}
            initial="hidden"
            animate="visible"
          >
            <h2 className={styles.projectName}>{project.name}</h2>
            <div className={styles.metaRow}>
              <span className={styles.metaItem}>{project.period}</span>
              <span className={styles.metaDivider}>·</span>
              <span className={styles.metaItem}>{project.org}</span>
              <span className={styles.metaDivider}>·</span>
              <span className={styles.metaItem}>{project.role}</span>
            </div>
            <div className={styles.tagRow}>
              <span className={styles.categoryTag}>{project.category}</span>
              {confidential && (
                <span className={styles.confidentialTag}>대외비</span>
              )}
            </div>
          </motion.div>

          {/* ── Confidential Notice ── */}
          {confidential && (
            <motion.div
              className={styles.confidentialNotice}
              variants={fade}
              custom={1}
              initial="hidden"
              animate="visible"
            >
              <span className={styles.lockIcon}>🔒</span>
              <div>
                <strong>대외비 프로젝트</strong>
                <p>이 프로젝트는 보안 사유로 상세 기능 및 성과를 공개할 수 없습니다.</p>
              </div>
            </motion.div>
          )}

          {/* ── Abstract ── */}
          <motion.section
            className={styles.section}
            variants={fade}
            custom={2}
            initial="hidden"
            animate="visible"
          >
            <h3 className={styles.sectionTitle}>Abstract</h3>
            <p className={styles.overview}>{project.abstract}</p>
          </motion.section>

          {/* ── Workflow: Presentation Agent ── */}
          {project.slug === 'presentation-agent' && (
            <motion.section
              className={styles.section}
              variants={fade}
              custom={3}
              initial="hidden"
              animate="visible"
            >
              <h3 className={styles.sectionTitle}>Workflow</h3>

              <h4 className={styles.subSectionTitle}>
                1. 발표 대본 생성 파이프라인 구축
              </h4>
              <p className={styles.overview}>
                본 시스템은 PDF 발표 자료로부터 자동으로 발표 대본을 생성하는 파이프라인을
                구축하였습니다. FastAPI를 통해 사용자가 업로드한 PDF 파일을 수신하고,
                PyMuPDF 라이브러리를 활용하여 각 페이지의 텍스트와 이미지 데이터를
                추출하였습니다. 추출된 이미지는 Vision-Language Model(VLM)을 적용하여
                차트·그래프·도표와 같은 핵심 시각자료인지, 또는 단순 장식 이미지인지를
                판별하였습니다. 그러나 초기 단계에서는 장식 이미지와 핵심 시각자료가
                혼동되어 불필요한 이미지 설명이 대본에 포함되는 문제가 발생하였습니다.
                이를 개선하기 위해 이미지 리사이징 및 압축을 수행하고, 모델에 전달하기
                전 이미지 특징을 추출하여 알고리즘 기반으로 사전 선별하였습니다. 이미지의
                차트 여부, 페이지 내 차지 비율 등 복합적인 기준을 적용하여 중요도를
                판별하였으며, 중요 시각자료로 판정된 경우에만 이미지 내용을 자연어 설명으로
                변환하고 해당 페이지의 텍스트와 결합하여 LLM 입력으로 제공하였습니다.
              </p>

              <div className={styles.figureWrap}>
                <div className={styles.frameTall}>
                  <img src={`${import.meta.env.BASE_URL}assets/images/presentation1.png`} alt="이미지 중요도 판별 로직" />
                </div>
                <p className={styles.figureCaption}>[Figure 1] 이미지 중요도 판별 로직</p>
              </div>

              <p className={styles.overview}>
                대본 생성 과정에서는 LLM이 동일한 인사말을 반복하거나 문장이 단조롭게
                구성되는 문제가 확인되었습니다. 이를 해결하기 위해 프롬프트를 단일 입력에서
                페이지별 핵심 요소로 분할하는 구조로 개선하였습니다. 구체적으로, 이전
                페이지 요약, 현재 페이지 텍스트, 중요 이미지 설명을 각각 독립된 입력
                영역으로 제공함으로써, 모델이 불필요한 인사말을 하지 않고 맥락에 맞는
                설명을 생성하도록 유도하였습니다. 이러한 프롬프트 분할 방식은 대본의
                논리적 연결성과 가독성을 높였으며, 실제 테스트에서도 반복 문장 발생 빈도를
                현저히 줄이는 효과를 보였습니다.
              </p>

              <div className={styles.figureWrap}>
                <div className={styles.frameSquare}>
                  <img src={`${import.meta.env.BASE_URL}assets/images/presentation2.png`} alt="대본 생성 UI" />
                </div>
                <p className={styles.figureCaption}>[Figure 2] 대본 생성 UI</p>
              </div>

              <h4 className={styles.subSectionTitle}>
                2. TTS 엔진 파이프라인 구축
              </h4>
              <p className={styles.overview}>
                기본 TTS는 모든 문장을 일정한 톤으로 읽어 국어책 낭독처럼
                부자연스러운 발표가 생성되는 문제가 있었습니다. 이를 해결하기 위해
                사용자가 입력한 키워드와 대본 내 단어 간 cosine similarity 기반
                임베딩 유사도를 계산하여 핵심 강조 단어를 자동 추출하고,
                SSML(Speech Synthesis Markup Language) 태그를 적용하여 해당 단어의
                음높이, 속도, 볼륨을 조절하였습니다. 이를 통해 발표자가 직접
                강조하는 것과 유사한 억양과 강세를 TTS 음성에 구현할 수
                있었습니다.
              </p>

              <h4 className={styles.subSectionTitle}>
                3. 시스템 아키텍처
              </h4>
              <p className={styles.overview}>
                상단의 발표 자동화 아키텍처는 사용자가 업로드한 PDF에서 텍스트와 이미지를
                추출하고, LLM이 대본을 생성한 뒤 TTS로 음성을 합성하여 PPT에 삽입하는
                워크플로우입니다. 하단의 챗봇 아키텍처는 발표 전체 내용을 VectorDB에
                저장하고, 발표 중 청중의 질문에 실시간으로 답변을 생성합니다.
              </p>
              <div className={styles.figureWrap}>
                <div className={styles.frameWide}>
                  <img src={`${import.meta.env.BASE_URL}assets/images/presentation3.png`} alt="시스템 아키텍처" />
                </div>
                <p className={styles.figureCaption}>[Figure 3] System Architecture</p>
              </div>
            </motion.section>
          )}

          {/* ── Workflow: DACON 건설공사 ── */}
          {project.slug === 'dacon-construction-safety' && (
            <motion.section
              className={styles.section}
              variants={fade}
              custom={3}
              initial="hidden"
              animate="visible"
            >
              <h3 className={styles.sectionTitle}>Workflow</h3>

              <h4 className={styles.subSectionTitle}>
                1. 결측치 처리
              </h4>
              <p className={styles.overview}>
                결측치를 단순 제거하는 대신, 사고 ID별로 도메인 지식에 기반한 수동 보정을
                수행했습니다. 공종(construction_type), 사고 객체(accident_object),
                작업 공정(work_process) 등 핵심 필드에 대해 사고 ID마다 의미 있는 값을
                사전 정의하고, 해당 ID가 존재하면 직접 할당하여 각 사고 기록의 맥락적
                정합성을 확보했습니다. 매핑 값이 없는 경우에는 "기타"로 대체하였고,
                인적 사고, 물적 사고, 사고 원인 필드에는 일반적인 결측치 처리(기본값 할당)를
                적용하여 텍스트 모델 입력 시 오류를 방지했습니다.
              </p>

              <h4 className={styles.subSectionTitle}>
                2. 사고 보고서 전처리 및 메타데이터 분류
              </h4>
              <p className={styles.overview}>
                사고 보고서를 파일명 기반으로 공종, 작업 유형, 사고 유형, 사고 객체 등으로
                자동 분류하는 메타데이터 사전을 구축했습니다. 동적 키워드 필터를 도입하여
                맥락에 맞는 질의에 대한 검색 정확도를 향상시켰습니다.
              </p>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>메타데이터 필드</th>
                    <th>분류</th>
                    <th>키워드 예시</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>construction_type</td>
                    <td>건축</td>
                    <td>건물, 건설현장, 시공사</td>
                  </tr>
                  <tr>
                    <td>construction_type</td>
                    <td>토목</td>
                    <td>교량, 터널, 도로, 철도</td>
                  </tr>
                  <tr>
                    <td>construction_type</td>
                    <td>조경</td>
                    <td>조경, 수목, 식재</td>
                  </tr>
                  <tr>
                    <td>construction_type</td>
                    <td>설비</td>
                    <td>설비, 플랜트, 기계</td>
                  </tr>
                  <tr>
                    <td>construction_type</td>
                    <td>기타</td>
                    <td>상기 분류에 미포함</td>
                  </tr>
                </tbody>
              </table>

              <h4 className={styles.subSectionTitle}>
                3. RAG 기반 검색 시스템 구축
              </h4>
              <p className={styles.overview}>
                FAISS 벡터 스토어와 GPU 가속 임베딩(ko-sbert-sts)을 결합하여
                사고 보고서를 벡터화하고, 질의와 유사한 섹션을 검색하는 RAG 파이프라인을
                구축했습니다. 검색된 문맥은 Ollama 기반 Gemma3(27B) 모델에 전달되어
                구조화된 대응책을 생성합니다. 동적 필터를 통해 질의에 포함된 키워드로
                공종·작업 유형을 자동 식별하고, 해당 메타데이터와 일치하는 섹션만
                우선 검색하여 응답 정확도를 높였습니다.
              </p>

              <h4 className={styles.subSectionTitle}>
                4. 회고 — 우승팀 분석
              </h4>
              <p className={styles.overview}>
                우승팀은 사고 원인(cause_of_accident) 컬럼을 문장 단위로 임베딩하여
                코사인 유사도로 관련 사고를 검색하고, 검색된 문장을 직접 참조·조합하여
                응답을 생성했습니다. 평균·중앙값 기준으로 응답 길이를 표준화하고, 복합
                피처 대신 문장 수준 임베딩에 집중하여 직관적인 유사도 매칭을 달성했습니다.
              </p>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>비교 항목</th>
                    <th>우승팀</th>
                    <th>본 프로젝트</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>임베딩 기준</td>
                    <td>사고 원인 (문장 단위)</td>
                    <td>공종·사고 객체·작업 공정·사고 원인 (복합)</td>
                  </tr>
                  <tr>
                    <td>유사도 계산</td>
                    <td>코사인 유사도</td>
                    <td>벡터 검색 (RAG)</td>
                  </tr>
                  <tr>
                    <td>응답 방식</td>
                    <td>참조 문장 조합</td>
                    <td>LLM 생성 또는 검색 기반</td>
                  </tr>
                  <tr>
                    <td>평가 전략</td>
                    <td>Jaccard 유사도 최적화</td>
                    <td>의미적으로 풍부한 응답 생성</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.overview}>
                본 프로젝트의 생성형 접근은 의미적으로 풍부하고 자연스러운 응답을
                산출했으나, Jaccard 유사도 같은 정량 평가에서는 검색 기반 방법 대비
                낮은 점수를 받는 경우가 있었습니다. 이 경험을 통해 평가 지표와 실무
                맥락에 따라 생성형과 검색형을 유연하게 결합하는 하이브리드 전략의
                필요성을 확인했습니다.
              </p>
            </motion.section>
          )}

          {/* ── Workflow: DeepPrint ── */}
          {project.slug === 'deepprint' && (
            <motion.section
              className={styles.section}
              variants={fade}
              custom={3}
              initial="hidden"
              animate="visible"
            >
              <h3 className={styles.sectionTitle}>Workflow</h3>

              <h4 className={styles.subSectionTitle}>
                1. 데이터 수집
              </h4>
              <p className={styles.overview}>
                7~13세 아동 7,000명으로부터 수집된 56,000장의 HTP(집-나무-사람)
                그림 데이터셋을 활용했습니다. 데이터는 JPG 이미지와 바운딩 박스
                레이블(JSON)로 구성되었으며, 원본 Train(11,200장)과
                Validation(1,400장)을 Train(9,800장), Validation(1,400장),
                Test(1,400장)으로 재구성했습니다.
              </p>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>클래스</th>
                    <th>수량</th>
                    <th>비율</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>집 (House)</td><td>14,000</td><td>25%</td></tr>
                  <tr><td>나무 (Tree)</td><td>14,000</td><td>25%</td></tr>
                  <tr><td>여성 인물 (Female)</td><td>14,000</td><td>25%</td></tr>
                  <tr><td>남성 인물 (Male)</td><td>14,000</td><td>25%</td></tr>
                </tbody>
              </table>
              <p className={styles.figureCaption}>[Table 1] HTP 데이터셋 클래스별 분포</p>

              <h4 className={styles.subSectionTitle}>
                2. YOLOv11 객체 탐지
              </h4>
              <p className={styles.overview}>
                YOLOv11을 HTP 그림 전용 객체 탐지 모델로 학습시켰습니다.
                이미지-레이블 불일치 보정, 손상 파일 제거, 중복 제거 등 전처리를 수행한 뒤
                50 에폭, 640px 해상도, 배치 크기 8로 학습했습니다. 다양한 그림 스타일에
                대한 강건성을 위해 데이터 증강을 적용했으며, mAP50 지표를 기준으로
                "집", "나무", "여성 인물", "남성 인물" 4개 클래스의 탐지 성능을
                최적화했습니다.
              </p>

              <h4 className={styles.subSectionTitle}>
                3. 규칙 기반 점수화
              </h4>
              <p className={styles.overview}>
                YOLOv11이 탐지한 객체 정보를 JSON으로 변환하고, 크기·위치·비율·배치 등
                시각적 요소를 정량화하여 심리학적 의미에 매핑하는 규칙 기반 분석 로직을
                적용했습니다. HTP 지침서와 임상 전문 지식을 참고하여 해석 규칙을
                설계했습니다.
              </p>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>표현</th>
                    <th>심리 해석</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>눈 미표현</td><td>정서 교류에 대한 심한 불안, 사고 장애 가능성</td></tr>
                  <tr><td>한쪽 눈만 표현</td><td>대인관계에서 접근과 회피의 양가적 감정</td></tr>
                  <tr><td>머리카락/모자로 눈 가림</td><td>사회적 불안, 억제된 감정 표현, 타인에 대한 적대감</td></tr>
                  <tr><td>눈 과대 표현</td><td>정서 교류에서의 과민 반응</td></tr>
                  <tr><td>눈 과소 표현</td><td>사회적 상호작용에서의 위축 및 회피 경향</td></tr>
                </tbody>
              </table>
              <p className={styles.figureCaption}>[Table 2] 심리 해석 규칙 예시</p>

              <h4 className={styles.subSectionTitle}>
                4. 멀티모달 시스템
              </h4>
              <p className={styles.overview}>
                YOLOv11 객체 탐지 결과에 규칙 기반 로직을 적용하고, 그 결과를 통합하여
                심리 해석을 수행하는 멀티모달 분석 구조를 구현했습니다. HTP 그림에서
                자동으로 "집", "나무", "여성 인물", "남성 인물"을 탐지하고 위치·크기·비율
                등 특징을 추출한 뒤, 표준화된 JSON 형식으로 변환하여 사전 정의된 심리
                규칙을 적용합니다. 점수화된 데이터는 LLM에 입력되어 점수 패턴과 항목
                의미를 결합한 심리학적 맥락의 해석문을 생성합니다.
              </p>
              <div className={styles.figureWrap}>
                <div className={styles.frameBanner}>
                  <img src={`${import.meta.env.BASE_URL}assets/images/deepprint1.png`} alt="DeepPrint 시스템 아키텍처" />
                </div>
                <p className={styles.figureCaption}>[Figure 1] System Architecture</p>
              </div>

              <p className={styles.overview}>
                <strong>데모 영상: </strong>
                <a
                  className={styles.demoLink}
                  href="https://www.youtube.com/watch?v=xcK26iobhLY&feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube Link
                </a>
              </p>
            </motion.section>
          )}

          {/* ── Workflow: 산불 예측 ── */}
          {project.slug === 'wildfire-prediction' && (
            <motion.section
              className={styles.section}
              variants={fade}
              custom={3}
              initial="hidden"
              animate="visible"
            >
              <h3 className={styles.sectionTitle}>Workflow</h3>

              <h4 className={styles.subSectionTitle}>
                1. 데이터 수집
              </h4>
              <p className={styles.overview}>
                과거 산불 발생 데이터를 수집하여 산불 발생에 영향을 미치는 요인을
                분석하고, Matplotlib을 활용해 시각화했습니다. 영향 요인 중 상위 3개를
                선정하여 팀원별로 데이터를 분담 수집하였으며, 등산객 부주의와 같은
                인적 요인은 직접 행동 데이터 확보가 어려워 지역 인구 데이터와 토지
                면적 데이터를 대리 지표로 활용했습니다.
              </p>
              <div className={styles.figureWrap}>
                <div className={styles.frameSquare}>
                  <img src={`${import.meta.env.BASE_URL}assets/images/fire1.png`} alt="산불 발생 영향 요인" />
                </div>
                <p className={styles.figureCaption}>[Figure 1] 산불 발생 영향 요인</p>
              </div>

              <h4 className={styles.subSectionTitle}>
                2. 데이터 분석
              </h4>
              <p className={styles.overview}>
                산불 발생 이력 데이터를 히트맵으로 시각화하여 시간적·공간적 분포를
                직관적으로 파악했습니다. 연도-월별, 연도-지역별 산불 발생 패턴을 관찰한
                결과 특정 기간(2~4월)과 특정 지역에 집중되는 양상을 확인할 수 있었습니다.
              </p>
              <div className={styles.figureRow}>
                <div className={styles.figureWrap}>
                  <div className={styles.frameRowWide}>
                    <img src={`${import.meta.env.BASE_URL}assets/images/fire2.png`} alt="산불 이력 히트맵 (연도/월)" />
                  </div>
                </div>
                <div className={styles.figureWrap}>
                  <div className={styles.frameRowWide}>
                    <img src={`${import.meta.env.BASE_URL}assets/images/fire2-1.png`} alt="산불 이력 히트맵 (지역)" />
                  </div>
                </div>
              </div>
              <p className={styles.figureCaption} style={{ textAlign: 'center' }}>
                [Figure 2] 산불 이력 히트맵 (연도/월 및 지역)
              </p>

              <p className={styles.overview}>
                동일 데이터를 바 차트로 시각화하여 월별·지역별 산불 발생 건수를
                비교했습니다.
              </p>
              <div className={styles.figureWrap}>
                <div className={styles.frameWide}>
                  <img src={`${import.meta.env.BASE_URL}assets/images/fire3.png`} alt="산불 이력 바 차트" />
                </div>
                <p className={styles.figureCaption}>[Figure 3] 산불 이력 바 차트 (월별/지역별)</p>
              </div>

              <h4 className={styles.subSectionTitle}>
                3. 데이터 전처리
              </h4>
              <p className={styles.overview}>
                산불 예측 모델 구축을 위해 산불 발생 데이터, 인구 데이터, 기상 데이터,
                토지이용 데이터를 날짜와 행정구역(시·군·구) 기준으로 병합했습니다.
                결측치는 변수 특성에 따라 차별적인 대체 방법을 적용하여 데이터 완전성을
                확보하고 모델 학습 시 발생할 수 있는 오류를 최소화했습니다.
              </p>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>항목 유형</th>
                    <th>변수명</th>
                    <th>처리 규칙</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>강수량</td>
                    <td>rain</td>
                    <td>결측값을 0으로 대체</td>
                  </tr>
                  <tr>
                    <td>토지이용</td>
                    <td>total_area, field_area, paddy_area, cemetery_area</td>
                    <td>동일 지역 전년도 값으로 대체</td>
                  </tr>
                  <tr>
                    <td>기온</td>
                    <td>tempAvg, tempMin, tempMax</td>
                    <td>해당 지역 월 평균으로 대체</td>
                  </tr>
                  <tr>
                    <td>습도</td>
                    <td>humMin, humAvg</td>
                    <td>해당 지역 월 평균으로 대체</td>
                  </tr>
                  <tr>
                    <td>풍속</td>
                    <td>windMax, windAvg</td>
                    <td>해당 지역 월 평균으로 대체</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.figureCaption}>[Table 1] 결측치 처리 방법</p>

              <p className={styles.overview}>
                클래스 불균형 문제에 대응하기 위해 초기에는 SMOTE를 적용했으나
                True Negative 대비 True Positive 비율이 여전히 극단적이었습니다.
                이를 개선하기 위해 오버샘플링과 언더샘플링을 결합한 파이프라인을
                구성하여 보다 균형 잡힌 클래스 분포를 달성했습니다. 또한 변수 스케일
                차이로 인한 성능 왜곡을 방지하기 위해 인구·토지 데이터를 밀도 값으로
                변환하고, 농지 면적 비율·묘지 면적 비율·인구 밀도 등 파생 피처를
                생성한 뒤 StandardScaler를 적용했습니다.
              </p>

              <h4 className={styles.subSectionTitle}>
                4. 모델 학습
              </h4>
              <p className={styles.overview}>
                Logistic Regression, Random Forest, XGBoost, LGBMClassifier 4개 모델에
                대해 GridSearchCV를 활용한 하이퍼파라미터 튜닝을 수행했습니다.
              </p>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>하이퍼파라미터</th>
                    <th>설명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>C</td><td>정규화 강도 (값이 작을수록 강한 정규화)</td></tr>
                  <tr><td>n_estimators</td><td>트리 수</td></tr>
                  <tr><td>max_depth</td><td>최대 트리 깊이</td></tr>
                  <tr><td>min_samples_leaf</td><td>리프 노드 최소 샘플 수</td></tr>
                  <tr><td>num_leaves</td><td>트리당 리프 수</td></tr>
                  <tr><td>learning_rate</td><td>학습률</td></tr>
                </tbody>
              </table>
              <p className={styles.figureCaption}>[Table 2] 하이퍼파라미터 정의</p>

              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>모델</th>
                    <th>하이퍼파라미터</th>
                    <th>탐색 범위</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>LogisticRegression</td>
                    <td>C</td>
                    <td>[0.01, 0.1, 1, 10, 100]</td>
                  </tr>
                  <tr>
                    <td>RandomForest</td>
                    <td>n_estimators, max_depth, min_samples_leaf</td>
                    <td>[100,300,500], [None,10,20,30], [2,5,10]</td>
                  </tr>
                  <tr>
                    <td>XGBClassifier</td>
                    <td>n_estimators, num_leaves, learning_rate</td>
                    <td>[100,300,500], [31,63,127], [0.01,0.1,0.2]</td>
                  </tr>
                  <tr>
                    <td>LGBMClassifier</td>
                    <td>n_estimators, max_depth, min_samples_leaf</td>
                    <td>[100,300,500], [None,10,20,30], [2,5,10]</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.figureCaption}>[Table 3] 하이퍼파라미터 탐색 범위</p>

              <h4 className={styles.subSectionTitle}>
                5. 모델 평가
              </h4>
              <p className={styles.overview}>
                초기 평가 지표로 ROC-AUC를 적용했으나, 산불 발생 데이터의 극심한 클래스
                불균형으로 인해 True Positive 수가 True Negative에 비해 극히 적어
                ROC-AUC가 실제 성능을 과대 평가하는 경향이 있었습니다. 이에 양성
                클래스(산불 발생)에 대한 예측력을 보다 정확히 반영하는 PR-AUC를 주요
                평가 지표로 채택했습니다.
              </p>
              <div className={styles.figureWrap}>
                <div className={styles.frameSquare}>
                  <img src={`${import.meta.env.BASE_URL}assets/images/fire4.png`} alt="혼동행렬" />
                </div>
                <p className={styles.figureCaption}>[Figure 4] 분류 모델별 혼동행렬</p>
              </div>

              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>모델</th>
                    <th>Accuracy</th>
                    <th>ROC-AUC</th>
                    <th>Precision</th>
                    <th>Recall</th>
                    <th>PR-AUC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>LogisticRegression</td>
                    <td>0.72</td><td>0.83</td><td>0.02</td><td>0.78</td><td>0.04</td>
                  </tr>
                  <tr>
                    <td>RandomForest</td>
                    <td>0.99</td><td>0.80</td><td>0.08</td><td>0.03</td><td>0.03</td>
                  </tr>
                  <tr>
                    <td>XGBClassifier</td>
                    <td>0.99</td><td>0.81</td><td>0.11</td><td>0.01</td><td>0.04</td>
                  </tr>
                  <tr>
                    <td>LGBMClassifier</td>
                    <td>0.99</td><td>0.82</td><td>0.03</td><td>0.002</td><td>0.04</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.figureCaption}>[Table 4] 모델 성능 비교</p>

              <p className={styles.overview}>
                대부분의 모델이 높은 Accuracy를 달성했으나, 낮은 PR-AUC와 Recall 값은
                실제 산불 발생에 대한 예측 성능이 제한적임을 보여줍니다. 이는 데이터셋의
                희소성과 복합적 영향 요인의 부족에 기인합니다.
              </p>

              <div className={styles.figureRow}>
                <div className={styles.figureWrap}>
                  <div className={styles.frameRowSquare}>
                    <img src={`${import.meta.env.BASE_URL}assets/images/fire5.png`} alt="ROC 커브" />
                  </div>
                  <p className={styles.figureCaption}>[Figure 5] ROC Curves</p>
                </div>
                <div className={styles.figureWrap}>
                  <div className={styles.frameRowSquare}>
                    <img src={`${import.meta.env.BASE_URL}assets/images/fire6.png`} alt="PR 커브" />
                  </div>
                  <p className={styles.figureCaption}>[Figure 6] Precision–Recall Curves</p>
                </div>
              </div>

              <p className={styles.overview}>
                이러한 결과는 희귀 이벤트 시나리오에서 ROC-AUC만으로는 예측 성능을
                적절히 평가할 수 없으며, PR-AUC 등 보완적 지표의 필요성을 입증합니다.
                오버샘플링과 언더샘플링의 결합으로 불균형 완화를 시도했으나,
                데이터셋 특성상 산불 탐지 성능 개선에는 본질적 한계가 존재했습니다.
              </p>
            </motion.section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
