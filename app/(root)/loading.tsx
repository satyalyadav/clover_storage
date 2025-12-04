const DashboardLoading = () => {
  return (
    <div className="dashboard-container animate-pulse">
      <section className="space-y-6">
        <div className="h-64 w-full rounded-2xl bg-dark-300" />

        <ul className="dashboard-summary-list">
          {Array.from({ length: 4 }).map((_, index) => (
            <li
              key={`summary-${index}`}
              className="dashboard-summary-card min-h-[210px] bg-dark-200/40"
            >
              <div className="space-y-4">
                <div className="flex justify-between gap-3">
                  <div className="summary-type-icon bg-dark-300" />
                  <div className="summary-type-size h-6 w-16 bg-dark-300" />
                </div>

                <div className="summary-type-title h-4 w-32 bg-dark-300" />
                <div className="h-[1px] bg-dark-400" />
                <div className="mx-auto h-4 w-24 bg-dark-300" />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="dashboard-recent-files space-y-4">
        <div className="h-8 w-48 bg-dark-300" />

        <ul className="flex flex-col gap-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <li
              key={`recent-${index}`}
              className="flex items-center justify-between rounded-2xl bg-dark-200/40 p-4"
            >
              <div className="flex items-center gap-4">
                <div className="recent-file-thumbnail bg-dark-300" />
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-dark-300" />
                  <div className="h-3 w-24 bg-dark-400" />
                </div>
              </div>

              <div className="h-6 w-6 rounded-full bg-dark-300" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DashboardLoading;

