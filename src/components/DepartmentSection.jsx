import TeamMember from "./TeamMember";

const DepartmentSection = ({ department, members }) => {
  return (
    <section style={{ marginBottom: "36px" }}>
      <h2 style={{
        color: "#1e293b",
        fontSize: "22px",
        marginBottom: "16px",
      }}
      >
        {department} ({members.length}{" "})
        {members.length === 1 ? "member" : "members"}
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "16px",
        alignItems: "stretch",
      }}>{members.map((member) => (
        <TeamMember 
            key={member.name}
            name={member.name}
            role={member.role}
            department={member.department}
            isRemote={member.isRemote}
        />
      ))}
      </div>
    </section>
  );
};

export default DepartmentSection;
