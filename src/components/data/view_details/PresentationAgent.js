import React from "react";

export default function PresentationAgent({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1100,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "12px",
          width: "70%",
          maxHeight: "90vh",
          overflowY: "auto",
          textAlign: "left",
          position: "relative",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: "absolute",
            right: "1rem",
            top: "1rem",
            border: "none",
            background: "transparent",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
        >
          ✖
        </button>

        <h2>Automated Presentation Generation System Using a Multimodal VLM-LLM-TTS Pipeline</h2>
        <p><b>Period:</b> Mar 2025 – Apr 2025</p>
        <p><b>Keywords:</b> #LangChain, #RAG, #Multimodal, #TTS</p>

        <h3>01 서론</h3>
        <p>
          현대 사회에서는 면접, 강연, 발표 등 다양한 상황에서 자신의 생각과 성과를 타인에게 전달하는 능력이 
          중요한 평가 요소로 자리 잡고 있습니다. 그러나 발표자는 자료 구성, 대본 작성, 전달 방식까지 모든 과정을 직접 
          준비해야 하므로 상당한 시간과 노력이 필요하며, 이 과정에서 심리적 부담과 피로가 누적될 수 있습니다.
        </p>
        <p>
          본 프로젝트는 이러한 부담을 줄이고 발표자가 콘텐츠와 메시지에 집중할 수 있는 환경을 제공하기 위해 기획되었으며, 
          발표 자료 내 텍스트·이미지를 분석하고, 이미지 중요도 판별 → 설명 텍스트 변환 → LLM 대본 작성 → TTS 음성 변환까지 
          자동화하는 파이프라인을 구축하였습니다. 또한 발표 중 실시간 Q&A를 지원하는 챗봇 기능을 추가하여 효율성과 품질을 동시에 향상시키는 것을 목표로 합니다.
        </p>

        <h3>02 수행 과정</h3>
        <ol>
          <li>
            <b>발표 대본 자동 생성 파이프라인 구축</b><br/>
            FastAPI로 PDF를 업로드 받아 PyMuPDF로 텍스트·이미지를 추출하고, 
            Vision-Language Model(VLM)으로 핵심 시각자료 여부를 판별했습니다. 
            중요 시각자료는 자연어 설명으로 변환해 LLM 입력에 포함시켰습니다.<br/>
            프롬프트를 페이지별 핵심 요소 단위로 분할하여 반복 문장을 줄이고, 
            맥락 유지와 가독성을 향상시켰습니다.<br/>
            <div>[그림 1 자리: 이미지 해석 로직]</div>
            <div>[그림 2 자리: 발표 대본 생성 UI 예시]</div>
          </li>
          <li>
            <b>TTS를 활용한 발표 대본 음성 생성</b><br/>
            발표 대본에서 벡터 유사도로 추출한 핵심 키워드에 
            SSML 태그를 적용해 억양·속도·음높이를 조정, 청중 몰입도를 높였습니다.<br/>
            <div>[그림 3 자리: 시스템 아키텍처]</div>
          </li>
          <li>
            <b>시스템 아키텍처</b><br/>
            상단은 PDF 기반 발표 자동화 파이프라인, 
            하단은 VectorDB 기반 실시간 Q&A 챗봇 구조를 보여줍니다.
          </li>
        </ol>

        <h3>03 결론</h3>
        <p>
          본 프로젝트는 PDF 발표 자료 기반으로 발표 대본 작성부터 음성 변환, 
          발표 자료 완성까지 전 과정을 자동화했습니다. 
          VLM을 통해 시각자료의 중요도를 판별하고 LLM 프롬프트 구조를 개선해 맥락과 가독성을 강화했으며, 
          SSML 태그를 활용한 TTS로 청중 몰입도를 향상시켰습니다. 
          또한 발표 중 VectorDB 기반 Q&A 챗봇을 통해 실시간 질문 대응이 가능하도록 설계되었습니다.
        </p>
        <p>
          다만 LLM 토큰 한계, 외부 API 의존성 문제가 남아 있어, 향후에는 로컬 모델 도입과 파인튜닝을 통해 
          보안성과 안정성을 강화하고, 청중 반응을 실시간으로 반영하는 인터랙티브 발표 지원 시스템으로 확장할 계획입니다.
        </p>

        <p><b>DEMO 영상:</b> <a href="https://www.youtube.com/watch?v=sj9HZPMtha8" target="_blank" rel="noreferrer">Youtube Link</a></p>
      </div>
    </div>
  );
}
