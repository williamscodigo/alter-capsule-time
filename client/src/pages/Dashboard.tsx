import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { DashboardLayout, MainContent } from "../components/layout/DashboardLayout";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import CapsuleList from "../components/common/CapsuleList";
import Auth from "../utils/auth";
import { QUERY_SHARED_CAPSULES } from "../utils/queries";

export default function Dashboard() {
  const [cachedCapsules, setCachedCapsules] = useState(() => {
    // Check if shared capsules exist in local storage
    const cached = localStorage.getItem("sharedCapsules");
    return cached ? JSON.parse(cached) : [];
  });

  const { loading, data, error } = Auth.loggedIn()
    ? useQuery(QUERY_SHARED_CAPSULES)
    : { loading: false, data: null };

  useEffect(() => {
    if (data?.sharedCapsules && data.sharedCapsules.length > 0) {
      // Update local storage with fetched data
      localStorage.setItem("sharedCapsules", JSON.stringify(data.sharedCapsules));
      setCachedCapsules(data.sharedCapsules); // Update local state
    }
  }, [data]);

  if (error) {
    console.error(error);
    return <div>Error loading capsules.</div>;
  }

  // Filter and sort capsules by unlockDate
  const processCapsules = (capsules: any[]) => {
    const now = new Date();
    return capsules
      .filter((capsule) => new Date(capsule.unlockDate) <= now) // Only unlocked capsules
      .sort((a, b) => new Date(b.unlockDate).getTime() - new Date(a.unlockDate).getTime()); // Sort by unlockDate descending
  };

  // Use either the fetched capsules or cached data
  const capsules = data?.sharedCapsules || cachedCapsules;

  // Apply filtering and sorting
  const filteredCapsules = processCapsules(capsules);

  return (
    <DashboardLayout>
      <Header />
      <MainContent>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CapsuleList capsules={filteredCapsules} title="Public Capsules" />
        )}
      </MainContent>
      <Footer />
    </DashboardLayout>
  );
}
