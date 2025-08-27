import ChatBox from './ChatBox';
import TabSection from './TabSection';

export default function MainLayout() {
  return (
    <section style={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      padding: "2rem",
      gap: "2rem"
    }}>
      {/* 왼쪽: 챗봇 */}
      <div style={{
        flex: 1,
        background: "#f9f9f9",
        borderRadius: "10px",
        padding: "1rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        minHeight: "400px"
      }}>
        <ChatBox />
      </div>

      {/* 오른쪽: 탭 */}
      <div style={{
        flex: 1,
        background: "white",
        borderRadius: "10px",
        padding: "1rem",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        minHeight: "400px"
      }}>
        <TabSection />
      </div>
    </section>
  );
}
