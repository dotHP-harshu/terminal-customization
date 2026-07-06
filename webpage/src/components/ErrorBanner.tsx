type ErrorBannerProps = {
  message: string;
};

export default function ErrorBanner({ message }: ErrorBannerProps) {
  return (
    <div style={styles.container}>
      <div style={styles.icon}>⚠</div>

      <div style={styles.content}>
        <div style={styles.title}>Something went wrong</div>
        <div style={styles.message}>{message}</div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    padding: "12px 14px",
    borderRadius: "12px",
    border: "1px solid #f5c2c7",
    background: "#fff5f5",
    color: "#842029",
    marginBottom: "12px",
  },

  icon: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "#dc3545",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: 700,
    flexShrink: 0,
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    flex: 1,
  },

  title: {
    fontSize: "13px",
    fontWeight: 600,
  },

  message: {
    fontSize: "12px",
    lineHeight: 1.5,
    color: "#6c1b22",
  },
};