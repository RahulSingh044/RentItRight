import renterExploreDummy from "../../data/renterExploreDummy";

import { useEffect, useState } from "react";

import ExploreSearchBar from "../../components/renter_ui/explore/ExploreSearchBar";
import ExploreFilters from "../../components/renter_ui/explore/ExploreFilters";
import ExploreGrid from "../../components/renter_ui/explore/ExploreGrid";
import ExploreLoadMore from "../../components/renter_ui/explore/ExploreLoadMore";
import ExploreEmptyState from "../../components/renter_ui/explore/ExploreEmptyState";

const RenterExplore = () => {
  const [rentals, setRentals] = useState([]);
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);


   useEffect(() => {
    // TEMP: load dummy data
    setRentals(renterExploreDummy);
  }, []);
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-20 py-8 pt-25">
      <ExploreSearchBar value={search} onChange={setSearch} />

      <ExploreFilters filters={filters} onChange={setFilters} />

      {rentals.length === 0 && !loading ? (
        <ExploreEmptyState />
      ) : (
        <ExploreGrid rentals={rentals} />
      )}

      <ExploreLoadMore
        loading={loading}
        onLoadMore={() => setPage((p) => p + 1)}
      />
    </div>
  );
};

export default RenterExplore;
