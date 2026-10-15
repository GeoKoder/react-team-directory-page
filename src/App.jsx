import DepartmentSection from "./components/DepartmentSection";

const team = [
  {
    id: 1,
    name: "Akinyi Odhiambo",
    role: "Frontend Developer",
    department: "Engineering",
    isRemote: false,
  },
  {
    id: 2,
    name: "Brian Kimani",
    role: "Backend Developer",
    department: "Engineering",
    isRemote: true,
  },
  {
    id: 3,
    name: "Fatuma Hassan",
    role: "UI/UX Designer",
    department: "Design",
    isRemote: false,
  },
  {
    id: 4,
    name: "David Mutua",
    role: "Product Manager",
    department: "Product",
    isRemote: false,
  },
  {
    id: 5,
    name: "Esther Wambui",
    role: "QA Engineer",
    department: "Engineering",
    isRemote: true,
  },
  {
    id: 6,
    name: "Felix Omondi",
    role: "Graphic Designer",
    department: "Design",
    isRemote: false,
  },
  {
    id: 7,
    name: "Grace Njeri",
    role: "Data Analyst",
    department: "Product",
    isRemote: true,
  },
  {
    id: 8,
    name: "Hassan Ali",
    role: "DevOps Engineer",
    department: "Engineering",
    isRemote: false,
  },
];

const App = () => {
  const departments = [...new Set(team.map((member) => member.department))];

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "32px 20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <header style={{ marginBottom: "32px" }}>
        <h1 style={{ color: "#0f172a", fontSize: "32px", margin: "0 0 8px" }}>
          Our Team
        </h1>

        <p style={{ margin: 0, color: "#64748b" }}>
          Meet the people behind our work.
        </p>
      </header>

      {departments.map((department) => {
        const members = team.filter(
          (member) => member.department === department,
        );

        return (
          <DepartmentSection
            key={department}
            department={department}
            members={members}
          />
        );
      })}
    </main>
  );
};

export default App;
