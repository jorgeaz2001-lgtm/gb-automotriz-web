import styles from "@/components/sections/TeamGrid.module.css";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

type TeamGridProps = {
  members: TeamMember[];
};

// Genera un color basado en el nombre
function getColorFromName(name: string): string {
  const colors = [
    "#2f5f98", "#7cb3e1", "#332d59", "#1f2f41", "#4f5560"
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

// Obtiene las iniciales del nombre
function getInitials(name: string): string {
  return name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {members.map((member) => {
          const bgColor = getColorFromName(member.name);
          return (
            <article key={member.name} className={styles.card}>
              <div 
                className={styles.avatar} 
                style={{ backgroundColor: bgColor }}
                aria-hidden="true"
              >
                <span className={styles.initials}>{getInitials(member.name)}</span>
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
