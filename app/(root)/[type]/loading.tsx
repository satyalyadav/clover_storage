const FilesPageLoading = () => {
  return (
    <div className="page-container animate-pulse">
      <section className="w-full space-y-4">
        <div className="h-10 w-40 bg-dark-300" />

        <div className="total-size-section rounded-2xl bg-dark-200/40 p-4">
          <div className="body-1 space-y-2">
            <div className="h-4 w-28 bg-dark-300" />
            <div className="h-6 w-16 bg-dark-300" />
          </div>

          <div className="sort-container gap-4">
            <div className="hidden h-4 w-24 bg-dark-300 text-light-200 sm:block" />
            <div className="h-10 w-40 rounded-full bg-dark-300" />
          </div>
        </div>
      </section>

      <section className="file-list">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={`file-card-${index}`} className="card min-h-[220px] bg-dark-200/40">
            <div className="h-40 w-full rounded-xl bg-dark-300" />
            <div className="space-y-2 pt-4">
              <div className="h-4 w-32 bg-dark-300" />
              <div className="h-3 w-20 bg-dark-400" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FilesPageLoading;

