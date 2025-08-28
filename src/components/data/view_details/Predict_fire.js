import React from "react";

export default function PredictFire({ onClose }) {
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

        <h2>머신러닝을 활용한 산불 발생 예측 모델 개발</h2>
        <p>기간: 2025.01 ~ 2025.02</p>
        <p>키워드: #SpatialData, #DataMining, #MachineLearning</p>

        <h3>01. 서론</h3>

        <h3>02. 수행 과정</h3>

        {/* 표 1 */}
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
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                항목 유형
              </th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                변수명
              </th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                처리 기준
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                (예시) 강수량
              </td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                rain
              </td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                결측치를 0으로 대체
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
          [표 1] 결측치 처리 방법
        </p>

        {/* 표 2 */}
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
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                하이퍼파라미터
              </th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                설명
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                C
              </td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                규제 강도 (값이 작을수록 규제가 강해짐)
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
          [표 2] 하이퍼파라미터 정의
        </p>

        {/* 표 3 */}
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
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                모델
              </th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                하이퍼파라미터
              </th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                값 범위
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                LogisticRegression
              </td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>C</td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                [0.01, 0.1, 1, 10, 100]
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
          [표 3] 하이퍼파라미터 설정 값
        </p>

        {/* 표 4 */}
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
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                모델
              </th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                Accuracy
              </th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                ROC-AUC
              </th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                Precision
              </th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                Recall
              </th>
              <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                PR-AUC
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                LogisticRegression
              </td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                0.72
              </td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                0.83
              </td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                0.02
              </td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                0.78
              </td>
              <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                0.04
              </td>
            </tr>
          </tbody>
        </table>
        <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
          [표 4] 모델 성능 지표 비교
        </p>

        <h3>03. 결론</h3>
      </div>
    </div>
  );
}
