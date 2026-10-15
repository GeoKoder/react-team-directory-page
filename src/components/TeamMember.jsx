export const Card = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 6px rgba(15, 23, 42, 0.05)",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};

const TeamMember = ({ name, role, department, isRemote }) => {
  const badgeStyle = {
    display: "inline-block",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 600,
    backgroundColor: isRemote ? "#dcfce7" : "#e0e7ff",
    color: isRemote ? "#166534" : "#3730a3",
  };

  return (
    <Card>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3
            style={{
              margin: "0 0 8px",
              color: "#1e293b",
              fontSize: "18px",
            }}
          >
            {name}
          </h3>

          <p
            style={{
              margin: "0 0 8px",
              color: "#475569",
              fontSize: "14px",
            }}
          >
            {role}
          </p>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "13px",
            }}
          >
            {department}
          </p>
        </div>

        <span style={badgeStyle}>
            {isRemote ? "Remote" : "On-site"}
        </span>
      </div>
    </Card>
  );
};

export default TeamMember;
