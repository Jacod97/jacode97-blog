import React from "react";

export default function DeepPrint({ onClose }) {
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
        {/* 닫기 버튼 */}
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

        <h2>DeepPrint: 아동 그림 심리 분석 보조 시스템</h2>
        <p>기간: 2025.02 ~ 2025.03</p>
        <p>키워드: #ComputerVision, #LLM, #RAG, #Rule-based</p>

        <h3>01. 서론</h3>
        <p>
          HTP(집-나무-사람) 검사는 피검자의 심리 상태와 성격 특성을 그림을 통해
          분석하는 대표적인 투사 검사 기법이다. 그러나 전통적인 분석 과정은
          숙련된 전문가의 경험과 주관에 크게 의존하며, 분석 속도와 일관성 면에서
          한계가 존재한다. 특히, 그림 속 객체의 형태·크기·위치·비율 등 다양한
          시각적 요소를 정량적으로 측정하고 해석하는 과정은 많은 시간과 인적
          자원이 필요하다.
        </p>
        <p>
          이러한 한계를 극복하기 위해 본 프로젝트 DeepPrint는 AI 기반 HTP 검사
          보조 시스템을 개발하였다. YOLOv11 객체 감지 모델을 통해 ‘집’, ‘나무’,
          ‘사람(성별 구분)’을 자동 탐지하고, 감지 결과를 JSON 형식으로 변환하여
          분석에 활용하였다. 이후 룰 기반 분석 로직과 Gemini LLM을 결합하여
          시각 정보를 해석하는 멀티모달 구조를 구현하였다. 이를 통해 단순 객체
          인식을 넘어, 시각 정보와 언어 모델을 결합한 심층적 심리 해석이
          가능해졌으며, 전문가 의존성을 줄이고 분석 결과의 속도와 표준화를
          지원할 수 있게 되었다.
        </p>

        <h3>02. 수행 과정</h3>
        <h4>1. 데이터 수집</h4>
        <p>
          본 프로젝트에서는 7~13세 아동 7,000명으로부터 수집한 HTP 그림
          56,000건(JPG)과 각 그림 내 주요 객체(집, 나무, 여자, 남자)에 대한
          바운딩 박스 라벨(JSON)을 구축하였다. 데이터는 학습, 검증, 테스트
          세트로 재구성하였다.
        </p>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "1rem 0",
            fontSize: "0.9rem",
          }}
        >
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>클래스</th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>수량</th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>비율</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>집</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>14,000건</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>25%</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>나무</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>14,000건</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>25%</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>여자사람</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>14,000건</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>25%</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>남자사람</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>14,000건</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>25%</td>
            </tr>
          </tbody>
        </table>
        <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
          [표 1] HTP 데이터셋 클래스별 분포
        </p>

        <h4>2. 객체 감지 모델 학습</h4>
        <p>
          YOLOv11 모델을 학습 데이터에 맞추어 HTP 전용 객체 감지 모델로 학습하였다.
          데이터 전처리 단계에서 라벨 오류, 손상 파일, 중복 라벨 등을 수정하였으며,
          이미지 크기를 640px로 통일하였다. 학습은 50 epoch, batch size 8로 수행되었고,
          데이터 증강 기법을 병행하여 다양한 그림 스타일에 대응할 수 있도록 하였다.
          모델 성능 평가는 mAP50 지표를 사용하였다.
        </p>

        <h4>3. 룰 기반 채점 시스템</h4>
        <p>
          YOLOv11 모델의 감지 결과를 JSON 형식으로 변환한 뒤, 룰 기반 분석 로직을
          적용하였다. 채점 규칙은 HTP 검사 해석 지침과 임상 전문가의 경험을 참고하여
          설계되었으며, 객체의 크기·위치·비율·배치 순서를 정량화하여 심리적 의미와
          매핑하였다.
        </p>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "1rem 0",
            fontSize: "0.9rem",
          }}
        >
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>표현</th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>해석</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>눈을 그리지 않음</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                타인과 감정을 교류하는 데 극심한 불안감을 느낌, 사고장애 가능성
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>한쪽 눈만 그림</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                감정 교류에서 접근과 회피의 양가 감정
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                머리카락/모자로 눈을 가림
              </td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                사회적 불안, 감정 표현 위축, 타인에 대한 적개심
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>눈이 너무 큼</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                감정 교류에서 과도한 예민함
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>눈이 너무 작음</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                사회적 상호작용에서 위축, 회피 경향
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
          [표 2] 심리 해석 규칙 예시
        </p>

        <h4>4. 멀티모달 시스템 구현</h4>
        <p>
          감지된 시각 정보를 JSON 구조로 정규화하고, 룰 기반 채점 결과와 결합하여
          최종적으로 Gemini LLM에 입력하였다. 이를 통해 정량적 채점 결과와 심리학적
          맥락을 종합한 해석 문장을 생성하는 멀티모달 분석 파이프라인을 완성하였다.
        </p>

        <h3>03. 결론</h3>
        <p>
          본 프로젝트는 HTP 그림 해석을 자동화·표준화하기 위해 객체 감지·룰 기반 분석·LLM
          해석을 통합한 AI 보조 시스템을 구축하였다. YOLOv11 모델은 주요 객체를 정확히 감지하였고,
          룰 기반 로직은 이를 정량적으로 평가했으며, Gemini LLM은 심리학적 맥락을 반영한 해석을
          제공하였다. 이 과정은 전문가 주관을 줄이고, 분석 속도와 일관성을 향상시켰다.
        </p>
        <p>
          향후 본 시스템은 HTP뿐만 아니라 KFD(가족화 검사), BGT(벤더 형태 검사) 등
          다양한 투사 검사로 확장 가능하다. 또한 모듈형 구조를 통해 감지 모델과 해석 규칙을
          유연하게 변경할 수 있으며, LLM 해석 과정에 피드백 루프를 적용하여 지속적으로 품질을
          개선할 수 있다. 본 시스템은 임상, 교육, 연구 환경에서 전문가의 의사결정을 지원하는
          도구로 활용될 수 있을 것으로 기대된다.
        </p>
      </div>
    </div>
  );
}
