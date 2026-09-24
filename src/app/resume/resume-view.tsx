"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Printer, Download, ExternalLink, Phone, Mail, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const RESUME_PATH = "/Savvani_Venkata_Jaswanth_Resume.pdf";

export default function ResumeView() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex min-h-screen flex-col font-sans bg-background text-foreground">
      {/* Print & theme styles to ensure the resume is crisp and legible */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .resume-sheet {
              background-color: #ffffff !important;
              color: #18181b !important;
            }
            .resume-sheet h1,
            .resume-sheet h2,
            .resume-sheet h3,
            .resume-sheet p,
            .resume-sheet span,
            .resume-sheet li,
            .resume-sheet div {
              color: #18181b !important;
            }
            .resume-sheet a {
              color: #2563eb !important;
            }
            .resume-sheet .border-b {
              border-color: #52525b !important;
            }
            @media print {
              body { background: white !important; color: black !important; }
              header, .no-print, nav, footer { display: none !important; }
              .resume-sheet {
                box-shadow: none !important;
                border: none !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
                max-width: 100% !important;
              }
            }
            @media (max-width: 767px) {
              header { display: none !important; }
            }
          `,
        }}
      />

      {/* Top bar: back (left) + download & print/save (right) */}
      <div className="no-print mx-auto w-full max-w-4xl shrink-0 px-4 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 flex flex-wrap items-center justify-between gap-3"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <div className="flex flex-wrap items-center gap-2.5">
            <Button asChild className="flex items-center gap-2 shadow-sm">
              <a
                href={RESUME_PATH}
                download="Savvani_Venkata_Jaswanth_Resume.pdf"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2"
            >
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                Open PDF
              </a>
            </Button>
            <Button
              variant="outline"
              onClick={handlePrint}
              className="flex items-center gap-2"
            >
              <Printer className="h-4 w-4" />
              Print / Save
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Native Web Resume Sheet */}
      <div className="mx-auto flex w-full max-w-4xl flex-1 items-start justify-center px-3 pb-16 md:px-4 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="resume-sheet w-full rounded-2xl bg-white text-zinc-900 shadow-2xl border border-zinc-200 p-5 sm:p-10 md:p-14 font-serif selection:bg-orange-100 break-words"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          {/* Header */}
          <header className="text-center pb-4 border-b border-zinc-400">
            <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wide uppercase font-normal text-zinc-950">
              SAVVANI VENKATA JASWANTH
            </h1>
            <div className="mt-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-zinc-700">
              <span className="inline-flex items-center gap-1">
                <Phone className="h-3.5 w-3.5 text-zinc-800 shrink-0" />
                <a href="tel:+916304702907" className="hover:underline">
                  +91-6304702907
                </a>
              </span>
              <span className="text-zinc-400 hidden sm:inline">|</span>
              <span className="inline-flex items-center gap-1">
                <Mail className="h-3.5 w-3.5 text-zinc-800 shrink-0" />
                <a href="mailto:savanijaswanth20@gmail.com" className="hover:underline break-all">
                  savanijaswanth20@gmail.com
                </a>
              </span>
              <span className="text-zinc-400 hidden sm:inline">|</span>
              <span className="inline-flex items-center gap-1">
                <Linkedin className="h-3.5 w-3.5 text-zinc-800 shrink-0" />
                <a
                  href="https://www.linkedin.com/in/savvani-venkata-jaswanth"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline break-all"
                >
                  LinkedIn: savvani-venkata-jaswanth
                </a>
              </span>
            </div>
            <div className="mt-1 flex items-center justify-center gap-1 text-xs sm:text-sm text-zinc-700">
              <MapPin className="h-3.5 w-3.5 text-red-600 shrink-0" />
              <span>Bangalore, Andhra Pradesh, India</span>
            </div>
          </header>

          {/* Summary */}
          <section className="mt-5 pb-3 border-b border-zinc-400">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950">
              Summary
            </h2>
            <p className="mt-1.5 text-xs sm:text-[13.5px] leading-relaxed text-zinc-800 text-justify">
              AI Developer &amp; Python Engineer specializing in deploying generative AI applications, prompt engineering,
              and autonomous agent systems. Proven capability in Retrieval-Augmented Generation (RAG) paradigms, semantic search
              databases, and cloud-backed microservices.
            </p>
          </section>

          {/* Technical Skills */}
          <section className="mt-4 pb-3 border-b border-zinc-400">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950">
              Technical Skills
            </h2>
            <div className="mt-2 space-y-1 text-xs sm:text-[13.5px] leading-snug text-zinc-800">
              <p>
                <span className="font-bold">Programming Languages:</span> Python, JavaScript, HTML, CSS, SQL
              </p>
              <p>
                <span className="font-bold">Frameworks &amp; Libraries:</span> React.js
              </p>
              <p>
                <span className="font-bold">AI Tools &amp; Platforms:</span> Google Antigravity IDE, Google AI Studio, Claude AI
              </p>
              <p>
                <span className="font-bold">Database:</span> Firebase
              </p>
              <p>
                <span className="font-bold">Cloud &amp; Deployment:</span> AWS (Amazon Web Services), Cloudflare, Domain Registration &amp; DNS Management
              </p>
              <p>
                <span className="font-bold">Other Skills:</span> SEO (Search Engine Optimization), Full-Stack Development
              </p>
            </div>
          </section>

          {/* Projects */}
          <section className="mt-4 pb-3 border-b border-zinc-400">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950">
              Projects
            </h2>
            <div className="mt-2.5 space-y-4 text-xs sm:text-[13.5px] leading-relaxed text-zinc-800">
              {/* Project 1 */}
              <div>
                <h3 className="font-bold text-zinc-950">
                  School ERP Management System <span className="font-normal text-zinc-700">(React, FastAPI, Supabase, Firebase)</span>
                </h3>
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-zinc-800 pl-1">
                  <li>Designed and developed a modern School ERP platform for managing students, attendance, fees, examinations, and academic records.</li>
                  <li>Integrated secure authentication, real-time database operations, and role-based access for administrators, teachers, and students.</li>
                  <li>Built responsive dashboards with clean UI/UX for efficient school administration.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <h3 className="font-bold text-zinc-950">
                  AI Portfolio Website <span className="font-normal text-zinc-700">(React, Tailwind CSS, Firebase, Gemini API)</span>
                </h3>
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-zinc-800 pl-1">
                  <li>Created a personal portfolio showcasing projects, certifications, hackathons, and technical achievements.</li>
                  <li>Added an AI assistant that answers visitor questions about skills, experience, and projects in real time.</li>
                  <li>Optimized performance, responsiveness, and SEO for faster loading and better user engagement.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <h3 className="font-bold text-zinc-950">
                  Algonex – Intern Management Website
                </h3>
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-zinc-800 pl-1">
                  <li>Developed a full-stack intern management platform using React.js for the frontend and Python for the backend, accelerated with the Google Antigravity IDE.</li>
                  <li>Registered and configured a custom domain, implemented SEO best practices to improve search visibility.</li>
                  <li>Deployed the application on AWS Cloud with Cloudflare for content delivery, security, and performance optimization.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="mt-4 pb-3 border-b border-zinc-400">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950">
              Achievements
            </h2>
            <ul className="mt-2 list-disc list-inside space-y-1 text-xs sm:text-[13.5px] leading-relaxed text-zinc-800 pl-1">
              <li>
                Participated in Microsoft Global Fabric Days 2026, gaining hands-on exposure to Microsoft Fabric, data engineering, and AI-powered analytics.
              </li>
              <li>
                Actively participated in AI, Python, and UI/UX hackathons, collaborating to build innovative, real-world solutions under time constraints.
              </li>
            </ul>
          </section>

          {/* Experience */}
          <section className="mt-4 pb-3 border-b border-zinc-400">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950">
              Experience
            </h2>
            <div className="mt-2 text-xs sm:text-[13.5px] text-zinc-800">
              <div className="flex items-center justify-between font-bold text-zinc-950">
                <span>Python AI Developer</span>
                <span className="font-normal text-zinc-600">Jan 2026 – Present</span>
              </div>
              <div className="italic text-zinc-700">Algonex IT Solutions</div>
              <ul className="mt-1.5 list-disc list-inside space-y-1 text-zinc-800 pl-1 leading-relaxed">
                <li>Applied theoretical knowledge to build industry-ready projects, strengthening practical skills in Python and AI-assisted development.</li>
                <li>Developed industry-relevant technical skills through real-world project execution as part of the internship program.</li>
                <li>Contributed to the development of the Algonex Intern Management full-stack web application.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mt-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-950">
              Education
            </h2>
            <div className="mt-2 text-xs sm:text-[13.5px] text-zinc-800">
              <div className="flex items-center justify-between font-bold text-zinc-950">
                <span>B.Com (Computer Applications)</span>
                <span className="font-normal text-zinc-600">2026 Passout</span>
              </div>
              <div className="text-zinc-700">Emeralds Degree College</div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
