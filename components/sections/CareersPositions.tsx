"use client";

import { useState } from "react";
import { JobPosition } from "@/types";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ApplicationModal } from "./ApplicationModal";
import { MapPin, Briefcase, Clock } from "lucide-react";

interface CareersPositionsProps {
  positions: JobPosition[];
}

export function CareersPositions({ positions }: CareersPositionsProps) {
  const [filter, setFilter] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  // Extract all unique departments
  const allDepartments = Array.from(
    new Set(positions.map((job) => job.department))
  ).sort();
  
  const categories = ["All", ...allDepartments];

  const filteredPositions =
    filter === "All"
      ? positions
      : positions.filter((p) => p.department === filter);

  return (
    <div id="positions" className="w-full scroll-mt-24">
      {/* Filter Bar */}
      <FadeIn direction="up" delay={0.1} className="flex flex-wrap gap-3 justify-center mb-16">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            className={filter === category ? "bg-violet-600 hover:bg-violet-700" : ""}
            onClick={() => setFilter(category)}
          >
            {category}
          </Button>
        ))}
      </FadeIn>

      {/* Positions List */}
      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {filteredPositions.map((job, index) => (
          <FadeIn key={job.id} delay={0.05 * index} direction="up">
            <div className="group flex flex-col md:flex-row justify-between p-8 rounded-3xl bg-card border hover:shadow-xl transition-all hover:border-violet-500/30">
              
              <div className="flex-1 mb-6 md:mb-0 md:mr-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-violet-100 dark:bg-violet-900/30 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-300">
                    {job.department}
                  </span>
                  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
                    {job.type}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-violet-600 transition-colors">
                  {job.title}
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-violet-600/70" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2 text-violet-600/70" />
                    {job.experience}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-start md:justify-end">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 shadow-md shadow-violet-600/20"
                  onClick={() => setSelectedJob(job)}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      
      {filteredPositions.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No open positions in this department right now. Check back later!
        </div>
      )}

      {/* Application Modal */}
      <ApplicationModal 
        job={selectedJob} 
        isOpen={!!selectedJob} 
        onClose={() => setSelectedJob(null)} 
      />
    </div>
  );
}
