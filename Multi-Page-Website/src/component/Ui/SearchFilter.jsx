export const SearchFilter = ({
    search,
    setSearch,
    filter,
    setFilter,
    sortOrder,
    setSortOrder,
}) => {
    return (
        <section className="search-filter-section">
            <div className="search-filter-wrapper">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search country by name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="search-input"
                        aria-label="Search countries"
                    />
                </div>

                <div className="sort-buttons">
                    <button
                        type="button"
                        onClick={() => setSortOrder(sortOrder === "asc" ? null : "asc")}
                        className={`sort-btn ${sortOrder === "asc" ? "active" : ""}`}
                        title="Sort Ascending"
                    >
                        Sort (A-Z)
                    </button>
                    <button
                        type="button"
                        onClick={() => setSortOrder(sortOrder === "desc" ? null : "desc")}
                        className={`sort-btn ${sortOrder === "desc" ? "active" : ""}`}
                        title="Sort Descending"
                    >
                        Sort (Z-A)
                    </button>
                </div>

                <div className="filter-dropdown">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="region-select"
                        aria-label="Filter countries by region"
                    >
                        <option value="all">All Regions</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>
        </section>
    );
};
