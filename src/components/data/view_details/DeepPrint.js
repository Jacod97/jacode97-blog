import React, { useEffect } from "react";
import deepprint1 from "../../../assets/deepprint1.png";

export default function DeepPrint({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

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
        {/* Close button */}
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36px",
            height: "36px"
          }}
        >
          ✖
        </button>

        <h2>
          Children Drawings Using Object Detection and Natural Language Processing Models Psychological Analysis Assistance System
        </h2>
        <p>
          <b>Period:</b> Feb 2025 – Mar 2025
        </p>
        <p>
          <b>Keywords:</b> #ComputerVision, #LLM, #RAG, #Rule-based
        </p>

        <h3>01. Introduction</h3>
        <p>
          The House-Tree-Person (HTP) test is a representative projective technique used to analyze
          the psychological state and personality traits of an individual through drawings. However,
          the traditional analysis process depends heavily on the expertise and subjectivity of trained
          professionals, which limits both speed and consistency. In particular, the quantitative
          measurement and interpretation of visual elements such as shape, size, position, and
          proportion require significant time and human resources.<br />
          To address these limitations, this project developed DeepPrint, an AI-based auxiliary system
          for HTP test analysis. The system utilizes the YOLOv11 object detection model to
          automatically identify “house,” “tree,” and “person” (with gender distinction) and converts
          detection results into JSON format for analysis. Subsequently, rule-based logic is combined
          with Google’s Gemini large language model (LLM) to interpret the detected visual information
          in psychological terms, thereby realizing a multimodal analytical framework.<br />
          This approach not only recognizes objects but also enables deeper psychological interpretation
          through the integration of visual information with a language model. The process reduces
          subjective variation and delivers standardized results more quickly. In the future, the system
          aims to expand beyond the HTP test to other projective assessments such as the Kinetic Family
          Drawing (KFD) and the Bender Gestalt Test (BGT), ultimately evolving into an AI-based
          psychological evaluation platform capable of processing both visual and linguistic data.
        </p>

        <h3>02. Procedure</h3>
        <p>
          In this process, each team member applied different object detection and LLM models; the
          description below presents the models and procedures that I personally implemented.
        </p>
        <ol>
          <li>
            <b>Data Collection</b>
            <p>
              For this project, a dataset of 56,000 HTP drawings (house, tree, person) was collected
              from 7,000 children aged 7–13. The dataset was provided in JPG format with bounding box
              labels (JSON) for the main objects (house, tree, female, male).<br />
              The dataset was originally divided into Train (11,200 samples) and Validation (1,400
              samples). Since test data were not separately provided due to policy, the dataset was
              restructured into Train (9,800 samples), Validation (1,400 samples), and Test (1,400
              samples).<br />
              [Table 1] shows the distribution of samples by class.
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
                  <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Class</th>
                  <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Quantity</th>
                  <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Proportion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>House</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>14,000</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>25%</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Tree</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>14,000</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>25%</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Female Person</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>14,000</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>25%</td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Male Person</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>14,000</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>25%</td>
                </tr>
              </tbody>
            </table>
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
              [Table 1] Distribution of HTP dataset by class
            </p>
          </li>

          <li>
            <b>Object Detection Model Training</b>
            <p>
              In this project, YOLOv11 was trained as the dedicated object detection model for HTP
              drawings. The dataset was reconstructed into Train (9,800), Validation (1,400), and Test
              (1,400) sets, and reorganized into the required <code>data.yaml</code> format with
              images, labels, and JSON directories. Preprocessing included correcting mismatches
              between images and labels, removing corrupted files, and eliminating duplicates to ensure
              training stability.<br />
              The model was trained for 50 epochs to enable sufficient learning, with image resolution
              standardized at 640 pixels to balance computational efficiency and recognition accuracy.
              Batch size was set to 8 images per step to optimize memory and speed. Data augmentation
              techniques were applied to enhance robustness to varying drawing styles.<br />
              Performance was evaluated using the mAP50 metric, and the model was optimized to reliably
              detect “house,” “tree,” “female person,” and “male person” within HTP drawings.
            </p>
          </li>

          <li>
            <b>Rule-Based Scoring System</b>
            <p>
              The object information detected by YOLOv11 was converted into JSON format and used to
              perform psychological interpretation through rule-based analysis logic. This logic extends
              beyond merely confirming object presence, quantifying visual elements such as size,
              position, proportion, and arrangement, and mapping them to psychological meanings.<br />
              Interpretation rules were designed with reference to HTP guidelines and clinical expertise,
              codifying how variations in object size, shape, and placement reflect psychological
              implications. For example, omission of certain features, abnormal proportions, deliberate
              concealment, or exaggerated emphasis were each used as cues for inferring mental states.<br />
              [Table 2] provides selected examples of interpretation rules.
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
                  <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Expression</th>
                  <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Eyes not drawn</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Severe anxiety in emotional exchange, possible thought disorder
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Only one eye drawn</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Ambivalent emotions of approach and avoidance in relationships
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Eyes covered with hair/hat
                  </td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Social anxiety, inhibited emotional expression, hostility toward others
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Eyes too large</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Excessive sensitivity in emotional exchange
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>Eyes too small</td>
                  <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Withdrawal and avoidance tendencies in social interaction
                  </td>
                </tr>
              </tbody>
            </table>
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
              [Table 2] Examples of psychological interpretation rules
            </p>
          </li>

          <li>
            <b>Multimodal System Implementation</b>
            <p>
              Based on YOLOv11 object detection outputs, rule-based logic was applied, and the results
              were integrated for psychological interpretation, forming a multimodal analytical structure.<br />
              The HTP drawings were automatically processed to detect “house,” “tree,” “female person,”
              and “male person,” extracting features such as location, size, and proportion. These data
              were converted into standardized JSON format, to which predefined psychological rules were
              applied, generating scores for each evaluation item. The scored data were then input into
              an LLM, which synthesized interpretations by combining score patterns and item meanings
              into psychologically contextualized statements.<br />
              As illustrated in [Figure 1], this pipeline connects visual analysis, quantitative scoring,
              and language-model-based interpretation in sequential stages. This design standardizes
              analysis, improves speed and consistency, and reduces expert subjectivity.
            </p>
            <img
              src={deepprint1}
              alt="Figure 1"
              style={{ maxWidth: "auto", height: "200px", display: "block", margin: "1rem auto" }}
            />
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
              [Figure 1] System Architecture
            </p>
          </li>
        </ol>

        <h3>03. Conclusion</h3>
        <p>
          This project implemented an AI-based auxiliary system that integrates object detection,
          rule-based analysis, and LLM interpretation in order to automate and standardize the
          traditional HTP test analysis. YOLOv11 was employed to detect major objects, rule-based
          scoring logic was applied for quantitative evaluation, and Gemini LLM was used to
          interpret the results in psychological terms, completing a multimodal analytical framework.<br />
          This approach reduced subjectivity, enabled large-scale data to be analyzed consistently
          and quickly, and combined structural quantitative information with in-depth interpretation,
          thereby producing more reliable results than either method alone. Future work aims to
          extend the system to other projective tests such as KFD and BGT, and to adopt a modular
          architecture that allows flexible adaptation of detection models and scoring rules. In
          addition, applying feedback loops to the LLM-based interpretation process will help
          continuously improve interpretation quality.<br />
          The system has the potential to enhance efficiency in clinical, educational, and research
          contexts, while supporting expert decision-making through standardized results.
        </p>
        <p>
          <b>DEMO Video:</b>{" "}
          <a
            href="https://www.youtube.com/watch?v=xcK26iobhLY&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
          >
            Youtube Link
          </a>
        </p>
      </div>
    </div>
  );
}
