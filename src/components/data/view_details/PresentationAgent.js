import React, { useEffect } from "react";
import presentation1 from "../../../assets/presentation1.png";
import presentation2 from "../../../assets/presentation2.png";
import presentation3 from "../../../assets/presentation3.png";

export default function PresentationAgent({ onClose }) {
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36px",
            height: "36px"
          }}
        >
          ✖
        </button>

        <h2>Automated Presentation Generation System Using a Multimodal VLM-LLM-TTS Pipeline</h2>
        <p>
          <b>Period:</b> Mar 2025 – Apr 2025
        </p>
        <p>
          <b>Keywords:</b> #LangChain, #RAG, #Multimodal, #TTS
        </p>

        <h3>01. Introduction</h3>
        <p>
          This study proposes the Presentation Agent, which originates from the
          recognition that in modern society, the ability to effectively deliver one’s
          ideas and achievements in diverse contexts such as interviews, lectures, and
          presentations has become an evaluation factor as important as actual
          professional competence. Nevertheless, there are frequent cases in which
          individuals with outstanding capabilities are undervalued due to fear of or
          psychological burden associated with presentations. To overcome this
          limitation, the Presentation Agent aims to minimize unnecessary burdens
          on presenters and to support them in concentrating on the delivery of content
          and messages.<br />
          To achieve this, the Presentation Agent automatically analyzes the text
          and images contained in presentation materials, identifies key visual
          elements, and, when necessary, converts the content of images into explanatory
          text. A Vision-Language Model (VLM) is employed to assess the importance of
          images, and explanations are generated only for significant visuals and
          incorporated into the presentation script, thereby ensuring that visual
          materials are also considered in script generation. Subsequently, a Large
          Language Model (LLM) processes both the textual content and image descriptions
          to compose scripts that reflect logical flow and contextual coherence, while
          Text-to-Speech (TTS) technology transforms them into natural and
          listener-friendly speech, producing highly complete presentation materials.<br />
          The Presentation Agent integrates the entire process—from VLM-based
          image importance assessment and description generation, to LLM-based script
          composition, and TTS-based speech synthesis—into a single pipeline. In
          addition, a real-time Q&amp;A chatbot, built upon the presentation materials,
          is incorporated to enable immediate responses to audience questions. Through
          this approach, the system seeks to reduce the time required for presentation
          preparation while simultaneously enhancing both efficiency and quality.
        </p>

        <h3>02. Implementation</h3>
        <p>
          Since this implementation process focuses on the functions I developed,
          descriptions of processes such as the Q&amp;A chatbot implementation and
          the UI implementation using Streamlit have been omitted.
        </p>
        <ol>
          <li>
            <b>Automated Script Generation Pipeline</b>
            <p>
              The system constructed a pipeline that automatically generates
              presentation scripts from PDF presentation materials. To achieve this,
              PDF files uploaded by users were received through FastAPI, and PyMuPDF
              was utilized to extract text and image data from each page. The extracted
              images were processed using a Vision-Language Model (VLM) to determine
              whether they represented essential visual elements for the presentation,
              such as charts, graphs, and tables, or were merely decorative images.<br />
              However, at the initial stage, decorative images and key visuals were
              often confused, resulting in unnecessary image descriptions being
              included in the script. To address this problem, as illustrated in
              [Figure 1], multiple criteria such as whether the image was a chart and
              the proportion of the page it occupied were applied to evaluate
              importance. Only images judged as essential were converted into natural
              language descriptions and combined with the text of the page to be
              provided as input to the LLM.
            </p>

            <img
              src={presentation1}
              alt="Interpretation Logic"
              style={{ maxWidth: "300px", height: "auto", display: "block", margin: "1rem auto" }}
            />
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
              [Figure 1] Image Interpretation Logic
            </p>     

            <p>
              During the script generation process, it was observed that the LLM
              frequently repeated identical greetings or produced monotonous sentences.
              To resolve this, the prompt structure was improved from a single input to
              a segmented form based on page-specific key elements. Specifically, the
              previous page summary, the current page text, and the descriptions of key
              images were provided as independent input segments, guiding the model to
              generate contextually appropriate explanations without unnecessary
              greetings. This segmented prompt design improved both the logical
              coherence and readability of the scripts and was shown in actual testing
              to significantly reduce the occurrence of repetitive sentences.<br />
              [Figure 2] presents the user interface for script generation, which
              allows users to directly modify the generated scripts and play the
              corresponding speech. Through this interface, users can review and edit
              the automatically generated scripts and then produce final presentation
              audio based on the revised content.
            </p>

            <img
              src={presentation2}
              alt="Script Generation UI"
              style={{ maxWidth: "450px", height: "auto", display: "block", margin: "1rem auto" }}
            />
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
              [Figure 2] Script Generation UI
            </p>
          </li>

          <li>
            <b>TTS-based Voice Generation</b>
            <p>
              In this stage, a method was implemented to emphasize intonation and
              stress on important words so that users could easily grasp key points in
              the presentation and maintain a higher level of listening engagement. To
              this end, vector similarity analysis was applied to the generated
              presentation scripts to automatically extract core keywords, and SSML
              (Speech Synthesis Markup Language) tags were applied to those keywords
              to adjust intonation, speed, and pitch during speech synthesis. This
              approach enhanced the effectiveness of delivery and helped the audience
              more clearly recognize critical information. Issues encountered in the
              SSML application process and their corresponding solutions can be found
              through the reference link provided below.
            </p>
          </li>

          <li>
            <b>System Architecture</b>
            <p>
              [Figure 3] illustrates the overall architecture of the system. The upper
              section, referred to as the presentation automation architecture,
              demonstrates the workflow in which text and images are extracted from a
              user-uploaded PDF, an LLM generates the presentation script based on the
              extracted data, and the script is subsequently converted into speech and
              inserted into the presentation slides (PPT), thereby completing the
              materials automatically. In this process, textual data are directly
              utilized for script generation, while image data are analyzed by the VLM
              and transformed into descriptive text that is incorporated into the
              script. The generated script and synthesized speech are combined to
              provide the presenter with final presentation materials ready for
              immediate use.<br />

              The lower section, referred to as the chatbot architecture, stores the
              entire presentation content in a VectorDB and provides real-time answers
              to audience questions raised during the presentation. When a query is
              received, relevant content is retrieved from the VectorDB, and if
              necessary, web search results are merged before the LLM generates a
              final answer that is delivered to the user. This enables presenters to
              respond quickly and accurately to audience inquiries.
            </p>
            <img
              src={presentation3}
              alt="System Architecture"
              style={{ maxWidth: "600px", height: "auto", display: "block", margin: "1rem auto" }}
            />
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
              [Figure 3] System Architecture
            </p>
          </li>
        </ol>

        <h3>03. Conclusion</h3>
        <p>
          This project developed a multimodal VLM-LLM-TTS pipeline that automates the
          entire process of presentation preparation, from script writing to speech
          synthesis and the final completion of presentation materials. The VLM assessed
          the importance of images within the presentation materials and transformed key
          visuals into text, thereby enhancing the delivery of visual information in the
          script. Furthermore, by segmenting prompts during the LLM-based script
          generation process, unnecessary repetition of greetings was reduced, while
          contextual consistency and readability were improved. At the TTS stage, SSML
          tags were applied to key terms to assign intonation and emphasis, increasing
          audience engagement and allowing critical points to be easily understood.<br />

          The system was designed not only to shorten preparation time prior to
          presentations but also to enable real-time responses to audience questions
          through a VectorDB-based Q&amp;A chatbot during the presentation. This allowed
          presenters to focus on content organization and audience interaction, thereby
          achieving a more efficient and professional presentation environment.<br />

          Nevertheless, limitations remain in terms of token overflow. Although partially
          addressed, lengthy presentation materials with numerous slides still pose
          challenges. In particular, during the script generation process that requires
          maintaining global context, the LLM may approach its token limit, leading to
          potential omission of slides or abnormal outputs. While strategies such as
          slide-level segmentation and summarization were employed to mitigate these
          issues, further token optimization is required for processing long documents.<br />

          Moreover, the current system depends on external APIs such as GPT and Google
          Cloud, which introduces constraints regarding security and independence.
          Service quality may also be affected by the reliability or usage limitations of
          these APIs. In actual prototype demonstrations, performance degradation was
          observed when the GPT model’s image transformation functionality failed,
          underscoring the need for alternatives to ensure system consistency.<br />

          Future work will involve transitioning away from external API-based
          architectures toward locally operable models to enhance security and stability.
          Additionally, fine-tuned LLM and TTS models tailored to presentation script
          generation and speech synthesis will be introduced to improve the precision of
          user-specific results. Beyond this, new features will be developed to capture
          and analyze real-time audience feedback during presentations, expanding the
          system into an interactive support platform that maximizes both presentation
          quality and audience engagement.
        </p>
        <p>
          <b>DEMO Video:</b>{" "}
          <a
            href="https://www.youtube.com/watch?v=sj9HZPMtha8"
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
