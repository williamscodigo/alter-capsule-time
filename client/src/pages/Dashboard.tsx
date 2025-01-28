import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { DashboardLayout, MainContent } from "../components/DashboardLayout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CapsuleList from "../components/CapsuleList";
import Auth from "../utils/auth";
import { QUERY_SHARED_CAPSULES } from "../utils/queries";

export default function Dashboard() {
  const [cachedCapsules, setCachedCapsules] = useState(() => {
    // Check if shared capsules exist in local storage
    const cached = localStorage.getItem("sharedCapsules");
    return cached ? JSON.parse(cached) : [];
  });

  const { loading, data, error } = Auth.loggedIn()
    ? useQuery(QUERY_SHARED_CAPSULES, {
        skip: cachedCapsules.length > 0, // Skip query if we already have cached data
      })
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

  const capsules = cachedCapsules;

  return (
    <DashboardLayout>
      <Header />
      <MainContent>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <CapsuleList capsules={capsules} title="Public Capsules" />
        )}
      </MainContent>
      <Footer />
    </DashboardLayout>
  );
}
