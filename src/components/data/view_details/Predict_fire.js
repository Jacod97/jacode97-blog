import React from "react";
import fire1 from "../../../assets/fire1.png"; // [Figure 1]
import fire2 from "../../../assets/fire2.png"; // [Figure 2]
import fire21 from "../../../assets/fire2-1.png"; // [Figure 2]
import fire3 from "../../../assets/fire3.png"; // [Figure 3]
import fire4 from "../../../assets/fire4.png"; // [Figure 4]
import fire5 from "../../../assets/fire5.png"; // [Figure 5]
import fire6 from "../../../assets/fire6.png"; // [Figure 6]

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

        <h2>Development of a wildfire prediction model using machine learning</h2>
        <p>
          <b>Period:</b> Jan 2025 – Feb 2025
        </p>
        <p>
          <b>Keywords:</b> #SpatialData, #DataMining, #MachineLearning
        </p>

        <h3>01. Introduction</h3>
        <p>
          Climate change has led to persistent hot and dry weather, increasing the frequency and scale of wildfires worldwide. In Korea, the risk of wildfires increases during the dry and windy spring season, and extensive damage often occurs due to a combination of anthropogenic factors and meteorological conditions. According to wildfire statistics for the past 10 years, an average of over 500 wildfires occurred annually, with a particularly high number occurring between February and April.<br />
          References have analyzed the correlation between meteorological and socioeconomic factors related to wildfire occurrence and developed predictive models. In particular, research on wildfire occurrence prediction using machine learning techniques has considered data nonlinearity and complexity and applied the Simple Multi-Order Oversampling (SMOTE) technique to address imbalanced data, suggesting a method to improve prediction performance.<br />
          This study complements these existing studies and approaches them from a new perspective. Considering the severe hierarchical imbalance in wildfire occurrence data, PR-AUC was selected as the primary performance evaluation metric. Furthermore, instead of the single oversampling technique used in previous studies, we applied a combined oversampling and undersampling approach to mitigate data imbalance and improve model generalization performance. To achieve this, we integrated meteorological, population/land, and socioeconomic data, which are key factors influencing wildfire occurrence. After systematic preprocessing, including missing value handling and scaling, we applied algorithms such as logistic regression, random forests, XGBoost, and LGBMClassifier.<br />
          The results of this study can serve as basic data for early identification of the likelihood of wildfire occurrence at the administrative district level, supporting efficient resource allocation and rapid initial response by disaster response agencies. Furthermore, we expect that the system can be expanded to create a more precise wildfire prediction system by incorporating various external factors.
        </p>
        <h3>02. Implementation</h3>
        <p>
          In the present study, all procedures, with the exception of data collection, were carried out independently by each participant. 
          Data collection was conducted through the allocation of specific items to each participant.
        </p>
        <ol>
          <li>
            <b>Data Collection</b>
            <p>
                Past wildfire occurrence data were collected to analyze the factors influencing 
                wildfire outbreaks, and the results were visualized using the Matplotlib library, 
                as shown in [Figure 1].
            </p>
            <img
            src={fire1}
            alt="Figure 1"
            style={{ maxWidth: "400px", height: "auto", display: "block", margin: "1rem auto" }}
            />
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
            [Figure 1] Factors influencing wildfire occurrence
            </p>
            <p>
                Among the factors influencing past wildfire occurrences, the top three were selected, 
                and each team member was assigned one factor for data collection. For wildfires caused 
                by human activities such as negligent behavior of hikers, it was difficult to obtain 
                direct behavioral data of hikers; therefore, regional population data and land area 
                data were used as proxy indicators. For other factors, meteorological data were collected, 
                and in the case of agricultural residue burning, farmland and cemetery density data were 
                collected and incorporated into the analysis.
            </p>
          </li>

          <li>            
            <b>Data Analysis</b>
            <p>
                [Figure 2] presents a visualization of wildfire occurrence history data in the form of a heatmap, 
                focusing on intuitively illustrating its temporal and spatial distribution. The patterns of wildfire occurrence 
                by year–month and year–region can be clearly observed, showing a concentration during specific periods and in certain regions.
            </p>
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                margin: "1rem 0"
            }}
            >
            <img
                src={fire2}
                alt="Figure 2"
                style={{ maxWidth: "45%", height: "auto" }}
            />
            <img
                src={fire21}
                alt="Figure 2-1"
                style={{ maxWidth: "45%", height: "auto" }}
            />
            </div>
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
            [Figure 2] Wildfire history heatmap (year/month and region)
            </p>

            <p>
                [Figure 3] visualizes the number of wildfire occurrences by month and region in the form of bar charts, based on the same dataset presented in [Figure 2].
            </p>
            <img
            src={fire3}
            alt="Figure 3"
            style={{ maxWidth: "500px", height: "auto", display: "block", margin: "1rem auto" }}
            />
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
            [Figure 3] Wildfire history bar chart (year/month and region)
            </p>
          </li>

          <li>            
            <b>Data Preprocessing</b>
            <p>
                To construct a wildfire prediction model, we performed a preprocessing procedure that integrated and refined the collected datasets. 
                Specifically, wildfire occurrence data, population data, meteorological data, and land-use data were merged by date and administrative district (si–gun–gu level). 
                The integrated dataframe was then grouped by date and administrative district to conduct statistical analyses, such as calculating daily averages or regional totals. 
                In addition, the latitude and longitude of each district were used to map weather data from the nearest meteorological station.<br />
                In handling missing values, different imputation methods were applied according to the characteristics of each variable. 
                Precipitation values were replaced with zero, while land-use information (e.g., total area, farmland area, cemetery area) was interpolated using the previous year’s values for the same region. 
                Meteorological variables such as temperature, humidity, and wind speed were replaced with the monthly averages of the corresponding region, thereby preserving both seasonal and regional characteristics. 
                Through this preprocessing procedure, data completeness was ensured and potential errors during model training were minimized.
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
                <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Item Type
                </th>
                <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Variable Name
                </th>
                <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Processing Rule
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    (Example) Precipitation
                </td>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    rain
                </td>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Missing values replaced with 0
                </td>
                </tr>
            </tbody>
            </table>
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
            [Table 1] Missing value handling
            </p>
            <p>
                To address the issue of class imbalance, we initially applied oversampling using SMOTE; 
                however, the problem of an excessively large number of true negatives relative to true positives persisted. 
                To improve this, we constructed a pipeline that combined both oversampling and undersampling techniques, thereby achieving a more balanced class distribution.<br />
                In addition, to prevent performance distortion caused by differences in the scale of variables, population and land area data were converted into density values, 
                and derived features such as farmland area ratio, cemetery area ratio, and population density were generated. 
                Subsequently, StandardScaler was applied to standardize all features to a mean of zero and a variance of one, thereby enhancing the stability of model training and improving predictive performance.
            </p>
          </li>

          <li>            
            <b>Model Train</b>     
            <p>
                To improve model performance, hyperparameter tuning was conducted using GridSearchCV for Logistic Regression, Random Forest, XGBoost, and LGBMClassifier. For each model, key hyperparameters were defined, and various combinations of values were tested to identify the configuration that achieved the best performance.<br />
                The definitions and roles of the hyperparameters are summarized in [Table 2], and the search ranges of the hyperparameters used in the actual experiments for each model are presented in [Table 3]. Through this process, parameter combinations suitable for the characteristics of each model were selected to maximize predictive performance.
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
                <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Hyperparameter
                </th>
                <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Description
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    C
                </td>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Regularization strength (smaller values → stronger regularization)
                </td>
                </tr>
            </tbody>
            </table>
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
            [Table 2] Definition of hyperparameters
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
                <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Model
                </th>
                <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Hyperparameter
                </th>
                <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Value Range
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    LogisticRegression
                </td>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    C
                </td>
                <td style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    [0.01, 0.1, 1, 10, 100]
                </td>
                </tr>
            </tbody>
            </table>
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
            [Table 3] Hyperparameter search space
            </p>
          </li>

          <li>            
            <b>Model Evaluate</b>   
            <p>
                As an initial performance evaluation metric, ROC-AUC, which is widely used in binary classification, was applied. However, due to the severe class imbalance in the wildfire occurrence data, the number of true positives (TP, wildfire occurrence predictions) was extremely small compared to the number of true negatives (TN, non-occurrence predictions). As a result, the ROC-AUC tended to overestimate the actual performance, making it difficult to ensure the reliability of the model using this metric alone.<br />
                To address this limitation, PR-AUC was adopted as the primary evaluation metric, as it more accurately reflects the predictive power for the positive class (wildfire occurrence) under class imbalance. Since PR-AUC is based on the relationship between precision and recall, it is more suitable for rare event prediction.<br />
                [Figure 4] visualizes the prediction results of four models: Logistic Regression, Random Forest, XGBoost, and LGBMClassifier. Each confusion matrix represents the relationship between the actual and predicted values, divided into TN (top-left), FP (top-right), FN (bottom-left), and TP (bottom-right). As shown in the figure, all models exhibited a very high proportion of TN and a significantly low proportion of TP. In particular, XGBoost and LGBMClassifier showed extremely few TPs, indicating a pronounced inability to detect actual wildfire occurrences. This outcome reflects the severe class imbalance of the wildfire dataset, which caused the models to produce excessively biased predictions toward the majority class (non-occurrence).
            </p>
            {/* Figure 4 */}
            <img
            src={fire4}
            alt="Figure 4"
            style={{ maxWidth: "550px", height: "auto", display: "block", margin: "1rem auto" }}
            />
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
            [Figure 4] Confusion matrices of classification models
            </p>
            <p>
                [Table 4] presents the comparison of Accuracy, ROC-AUC, Precision, Recall, and PR-AUC across the models. Although most models achieved high Accuracy, the low PR-AUC and Recall values indicate that their actual predictive performance for wildfire occurrence was limited.
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
                <th style={{ border: "1px solid #ccc", padding: "0.5rem" }}>
                    Model
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
            [Table 4] Model performance comparison
            </p>

            <p>
                [Figure 5] illustrates the ROC curves of each model, allowing a visual examination of the relationship between the True Positive Rate (TPR) and the False Positive Rate (FPR), while [Figure 6] presents the Precision-Recall curves, providing an intuitive understanding of model performance for the positive class under class imbalance.<br />
                These results demonstrate that ROC-AUC alone is insufficient for adequately evaluating predictive performance in rare-event scenarios, thereby underscoring the necessity of complementary metrics such as PR-AUC. Furthermore, although this study attempted to mitigate the imbalance problem by combining oversampling and undersampling techniques, the characteristics of the dataset revealed inherent limitations in improving wildfire detection performance.
            </p>
            {/* Figure 5 */}
            <img
            src={fire5}
            alt="Figure 5"
            style={{ maxWidth: "550px", height: "auto", display: "block", margin: "1rem auto" }}
            />
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
            [Figure 5] ROC curves of models
            </p>

            {/* Figure 6 */}
            <img
            src={fire6}
            alt="Figure 6"
            style={{ maxWidth: "550px", height: "auto", display: "block", margin: "1rem auto" }}
            />
            <p style={{ textAlign: "center", fontSize: "0.9rem", color: "gray" }}>
            [Figure 6] Precision–Recall curves of models
            </p>        
          </li>
        </ol>

        <h3>03. Conclusion</h3>
        <p>
            This project aimed to complement existing wildfire prediction studies by addressing the challenges of data imbalance and the limitations of conventional evaluation metrics. Instead of relying on Accuracy and ROC-AUC, which were primarily used in previous research, PR-AUC was adopted as the main evaluation metric, as it more accurately reflects predictive power for the positive class (wildfire occurrence) under imbalanced conditions. In addition, beyond a single oversampling approach, a combined oversampling and undersampling method was applied to mitigate data imbalance.<br />
            For model training, Logistic Regression, Random Forest, XGBoost, and LGBMClassifier were employed, and hyperparameter optimization was conducted using GridSearchCV. The evaluation results showed that, although most models achieved high Accuracy, their predictive performance for wildfire occurrence was limited due to low PR-AUC and Recall values. This limitation was attributed mainly to the sparsity of the dataset and the lack of complex influencing factors (e.g., meteorological, social, and geographical).<br />
            Future research should incorporate a wider variety of data sources, including hiker logs, illegal burning reports, and real-time meteorological observations, in addition to meteorological, land-use, and population activity data, to expand predictive variables. Moreover, data augmentation methods such as GAN-based techniques and ensemble strategies like Stacking Classifiers will be introduced to improve model robustness and detection rates.<br />
            The findings of this study can serve as fundamental data for the early identification of wildfire occurrence risk at the administrative district level, supporting resource allocation and initial response strategies by disaster management agencies. In the long term, this approach is expected to contribute to wildfire damage reduction and the advancement of disaster management systems.
        </p>
      </div>
    </div>
  );
}
