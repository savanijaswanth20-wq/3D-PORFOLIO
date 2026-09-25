"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="min-h-screen py-20 px-4 md:px-8 max-w-5xl mx-auto flex flex-col justify-center">
      <SectionHeader
        id="about"
        title="About Me"
        desc="A glimpse into my background, experience, and education."
        className="mb-12 mt-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card className="bg-white/80 dark:bg-black/75 backdrop-blur-md border border-border shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-6 sm:p-10 md:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
              
              {/* Profile Photo */}
              <div className="flex flex-col items-center shrink-0">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl ring-4 ring-yellow-400/40">
                  <Image
                    src="/assets/jaswanth.jpg"
                    alt="Savvani Venkata Jaswanth"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Information */}
              <div className="flex-1 space-y-8 w-full text-left">
                {/* Header */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground font-display">
                    Savvani Venkata Jaswanth
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-muted-foreground mt-1">
                    Python Backend Developer
                  </p>
                </div>

                <div className="border-t border-border/80" />

                {/* Hands-on Experience */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    <span>Hands-On Experience</span>
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-semibold text-foreground">
                      Python Backend Developer
                    </h4>
                    <p className="text-base font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                      Algonex IT Solutions
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Built Python/FastAPI APIs, integrated databases and authentication, and supported product development.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <Badge variant="secondary" className="px-3 py-1 font-mono text-xs rounded-full">
                      Python
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1 font-mono text-xs rounded-full">
                      FastAPI
                    </Badge>
                    <Badge variant="secondary" className="px-3 py-1 font-mono text-xs rounded-full">
                      Authentication
                    </Badge>
                  </div>
                </div>

                <div className="border-t border-border/80" />

                {/* Education */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <GraduationCap className="w-4 h-4" />
                    <span>Education · 2026</span>
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-semibold text-foreground">
                      B.Com (Computer Applications)
                    </h4>
                    <p className="text-base font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                      Emeralds Degree College
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    A foundation in business, strengthened through hands-on software projects.
                  </p>
                </div>

              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionWrapper>
  );
};

export default AboutSection;
