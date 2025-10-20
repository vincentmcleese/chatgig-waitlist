"use client";

import { useState, useEffect } from "react";
import { FreelancerCard } from "@/components/FreelancerCard";
import { FreelancersHero } from "@/components/sections/FreelancersHero";

interface Freelancer {
  mainImage: string | null;
  title: string;
  sellerDisplayName: string;
  sellerCountry: string;
  sellerRatingScore: number;
  sellerRatingCount: number;
  price: number;
  duration: number;
  category: string;
}

export function FreelancerGrid() {
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/freelancers")
      .then((res) => res.json())
      .then((data) => {
        setFreelancers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching freelancers:", error);
        setLoading(false);
      });
  }, []);

  const filteredFreelancers =
    activeFilter === "All"
      ? freelancers
      : freelancers.filter((f) => f.category === activeFilter);

  const filters = ["All", "Design", "Legal"];

  return (
    <div className="min-h-screen bg-white">
      <FreelancersHero />

      {/* Grid Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Filter Tabs */}
          <div className="mb-12">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <h2 className="text-2xl font-bold text-[var(--color-text-heading)]">
                Browse Freelancers
              </h2>
              <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
                      activeFilter === filter
                        ? "bg-[var(--color-ghostteam-green)] text-white shadow-sm"
                        : "text-[var(--color-text-default)] hover:text-[var(--color-ghostteam-green)]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-[var(--color-ghostteam-green)] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              {/* Results Count */}
              <div className="mb-8 text-center">
                <p className="text-sm text-[var(--color-text-muted)]">
                  Showing <span className="font-semibold text-[var(--color-text-default)]">{filteredFreelancers.length}</span> freelancers
                  {activeFilter !== "All" && (
                    <span> in <span className="font-semibold text-[var(--color-ghostteam-green)]">{activeFilter}</span></span>
                  )}
                </p>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredFreelancers.map((freelancer, index) => (
                  <FreelancerCard
                    key={`${freelancer.sellerDisplayName}-${index}`}
                    {...freelancer}
                  />
                ))}
              </div>

              {/* Empty State */}
              {filteredFreelancers.length === 0 && (
                <div className="text-center py-20">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <p className="text-[var(--color-text-muted)]">
                    No freelancers found in this category
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
