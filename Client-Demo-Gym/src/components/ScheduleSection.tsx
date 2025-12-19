const schedule = [
  {
    time: "06:00",
    monday: "Power Lift",
    tuesday: "HIIT Circuit",
    wednesday: "Power Lift",
    thursday: "HIIT Circuit",
    friday: "Power Lift",
    saturday: "Open Gym",
    sunday: "—",
  },
  {
    time: "08:00",
    monday: "Yoga Flow",
    tuesday: "Strength",
    wednesday: "Yoga Flow",
    thursday: "Strength",
    friday: "Yoga Flow",
    saturday: "Group HIIT",
    sunday: "Recovery",
  },
  {
    time: "12:00",
    monday: "Express Core",
    tuesday: "Express Core",
    wednesday: "Express Core",
    thursday: "Express Core",
    friday: "Express Core",
    saturday: "—",
    sunday: "—",
  },
  {
    time: "17:00",
    monday: "CrossFit",
    tuesday: "Boxing",
    wednesday: "CrossFit",
    thursday: "Boxing",
    friday: "CrossFit",
    saturday: "—",
    sunday: "—",
  },
  {
    time: "19:00",
    monday: "Strength",
    tuesday: "HIIT Circuit",
    wednesday: "Strength",
    thursday: "Group Class",
    friday: "Open Gym",
    saturday: "—",
    sunday: "—",
  },
];

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

export const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-32 px-6 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-medium">Weekly Schedule</span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mt-4 mb-6">
            Class Timetable
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto">
            Find the perfect session that fits your schedule.
          </p>
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-left text-xs uppercase tracking-[0.2em] text-foreground/50 font-medium">
                  Time
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="py-4 px-4 text-left text-xs uppercase tracking-[0.2em] text-foreground/50 font-medium"
                  >
                    {day.slice(0, 3)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, index) => (
                <tr
                  key={row.time}
                  className="border-b border-border/50 hover:bg-card/50 transition-colors duration-300"
                >
                  <td className="py-6 px-4">
                    <span className="font-display text-lg text-gold">{row.time}</span>
                  </td>
                  {days.map((day) => {
                    const className = row[day as keyof typeof row];
                    return (
                      <td key={day} className="py-6 px-4">
                        <span
                          className={`text-sm ${
                            className === "—"
                              ? "text-foreground/20"
                              : "text-foreground/70"
                          }`}
                        >
                          {className}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Holiday Notice */}
        <div className="mt-12 text-center">
          <div className="inline-block glass-card px-8 py-4">
            <p className="text-sm text-foreground/70">
              <span className="text-gold">Holiday Hours:</span> Dec 24-26 & Dec 31-Jan 1 — Modified schedule. Check app for details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
