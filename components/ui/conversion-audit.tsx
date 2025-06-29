"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Download, Mail } from "lucide-react";

interface AuditPoint {
  id: string;
  question: string;
  description: string;
  weight: number;
}

const auditPoints: AuditPoint[] = [
  {
    id: "headline",
    question: "Does your headline immediately tell visitors what they'll get and why they need it?",
    description: "73% of visitors decide in 8 seconds. Clear headlines keep them engaged.",
    weight: 15
  },
  {
    id: "cta",
    question: "Can visitors easily find your main call-to-action without scrolling?",
    description: "Visible CTAs are crucial for conversion - every second counts.",
    weight: 12
  },
  {
    id: "social-proof",
    question: "Do you show specific results your clients achieved (not just generic testimonials)?",
    description: "Specific success stories convert much better than vague praise.",
    weight: 10
  },
  {
    id: "benefits",
    question: "Do you focus on outcomes visitors will achieve (not just features)?",
    description: "Benefits sell better than features - people buy results, not products.",
    weight: 10
  },
  {
    id: "mobile",
    question: "Does your mobile site look professional and load quickly?",
    description: "68% of traffic is mobile. Mobile experience directly impacts conversions.",
    weight: 12
  },
  {
    id: "loading",
    question: "Does your site load in under 3 seconds on mobile?",
    description: "Slow sites lose visitors fast. Speed is critical for conversions.",
    weight: 8
  },
  {
    id: "objections",
    question: "Do you address common concerns before visitors think of them?",
    description: "Answering objections upfront builds trust and reduces hesitation.",
    weight: 8
  },
  {
    id: "urgency",
    question: "Do you give visitors a reason to act now (not later)?",
    description: "Without urgency, visitors often leave with good intentions but never return.",
    weight: 7
  },
  {
    id: "contact",
    question: "Can visitors easily contact you from any page?",
    description: "Easy contact options build trust and reduce friction.",
    weight: 8
  },
  {
    id: "trust",
    question: "Do you display trust signals (guarantees, certifications, security badges)?",
    description: "Trust signals are essential for conversion, especially for new visitors.",
    weight: 10
  }
];

export function ConversionAudit() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);

  const handleAnswer = (id: string, answer: boolean) => {
    setAnswers(prev => ({ ...prev, [id]: answer }));
  };

  const calculateScore = () => {
    const totalPossible = auditPoints.reduce((sum, point) => sum + point.weight, 0);
    const achieved = auditPoints.reduce((sum, point) => {
      return sum + (answers[point.id] ? point.weight : 0);
    }, 0);
    return Math.round((achieved / totalPossible) * 100);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-kiiro-yellow";
    return "text-red-400";
  };

  const getScoreMessage = (score: number) => {
    if (score >= 80) return "🎉 EXCELLENT: Your site has strong conversion fundamentals! We can show you advanced optimizations to push it even further.";
    if (score >= 60) return "⚡ GOOD FOUNDATION: You're on the right track, but there are clear opportunities to significantly boost conversions.";
    if (score >= 40) return "🔧 NEEDS ATTENTION: Several key areas need work to unlock your website's conversion potential.";
    return "🚨 MAJOR OPPORTUNITY: Your website is leaving serious money on the table. Let's fix the fundamentals and transform your results.";
  };

  const allQuestionsAnswered = auditPoints.every(point => answers[point.id] !== undefined);

  const handleViewResults = () => {
    if (allQuestionsAnswered) {
      setShowResults(true);
    }
  };

  const handleGetReport = () => {
    setShowEmailForm(true);
  };

  return (
    <section className="py-24 bg-charcoal-black" id="audit">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="px-4 py-1.5 rounded-full bg-red-500/20 text-red-400 text-sm font-medium mb-6 border border-red-500/30 inline-block">
              ⚠️ FREE Website Conversion Audit
            </div>
            <h2 className="text-4xl font-bold md:text-5xl mb-6 text-off-white">
              Is Your Website <span className="text-red-400">Bleeding Money</span> Every Day?
            </h2>
            <p className="text-xl text-off-white/80 max-w-3xl mx-auto mb-6">
              <span className="text-red-400 font-semibold">73% of websites fail to convert visitors</span> because of simple, fixable issues.
              Find out what&apos;s costing you customers with our <span className="text-kiiro-yellow">free 2-minute audit.</span>
            </p>
            
            {/* Value Proposition */}
            <div className="bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-kiiro-yellow font-medium">
                                 💰 What&apos;s a professional website worth to your business?
              </p>
              <p className="text-off-white/80 text-sm mt-1">
                                 Stop losing credibility while prospects can&apos;t find answers to their questions or reasons to choose you over competitors
              </p>
            </div>
          </div>

          <div className="bg-charcoal-gray/95 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-off-white/70">Progress</span>
                <span className="text-sm text-kiiro-yellow font-medium">
                  {Object.keys(answers).length} / {auditPoints.length}
                </span>
              </div>
              <div className="w-full bg-deep-gray/50 rounded-full h-2">
                <div 
                  className="bg-kiiro-yellow h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(Object.keys(answers).length / auditPoints.length) * 100}%` }}
                />
              </div>
            </div>
            
            <div className="space-y-6">
              {auditPoints.map((point, index) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="border-b border-white/10 pb-6 last:border-b-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-kiiro-yellow/10 border border-kiiro-yellow/20 flex items-center justify-center text-kiiro-yellow text-sm font-medium">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-off-white font-medium mb-2">{point.question}</h3>
                      <p className="text-off-white/60 text-sm mb-4">{point.description}</p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleAnswer(point.id, true)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            answers[point.id] === true
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-deep-gray/50 text-off-white/70 border border-white/10 hover:bg-green-500/10"
                          }`}
                        >
                          <CheckCircle className="w-4 h-4" />
                          Yes
                        </button>
                        <button
                          onClick={() => handleAnswer(point.id, false)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            answers[point.id] === false
                              ? "bg-red-500/20 text-red-400 border border-red-500/30"
                              : "bg-deep-gray/50 text-off-white/70 border border-white/10 hover:bg-red-500/10"
                          }`}
                        >
                          <XCircle className="w-4 h-4" />
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {allQuestionsAnswered && !showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center"
              >
                <button
                  onClick={handleViewResults}
                  className="px-8 py-4 bg-kiiro-yellow text-charcoal-black font-bold rounded-lg hover:bg-kiiro-yellow/90 transition-colors shadow-lg hover:scale-105"
                >
                  🎯 SEE MY CONVERSION SCORE
                </button>
              </motion.div>
            )}

            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-deep-gray/50 rounded-lg border border-white/10"
              >
                <div className="text-center mb-6">
                  <div className={`text-4xl font-bold mb-2 ${getScoreColor(calculateScore())}`}>
                    {calculateScore()}%
                  </div>
                  <p className="text-off-white/80">{getScoreMessage(calculateScore())}</p>
                </div>

                {!showEmailForm ? (
                  <div className="text-center">
                    <div className="bg-kiiro-yellow/10 border border-kiiro-yellow/20 rounded-lg p-4 mb-4">
                      <p className="text-kiiro-yellow font-semibold mb-2">
                        📋 Get Your Personalized Action Plan
                      </p>
                      <p className="text-off-white/80 text-sm">
                        Get your personalized <span className="text-kiiro-yellow font-medium">Conversion Improvement Blueprint</span> with specific recommendations,
                        priority order, and implementation steps. <span className="text-kiiro-yellow">Completely free.</span>
                      </p>
                    </div>
                    <button
                      onClick={handleGetReport}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-kiiro-yellow text-charcoal-black font-bold rounded-lg hover:scale-105 transition-all shadow-lg"
                    >
                      <Download className="w-5 h-5" />
                      Get My Free Blueprint
                    </button>
                    <p className="text-xs text-off-white/50 mt-2">⚡ Delivered to your inbox instantly</p>
                  </div>
                ) : (
                  <div className="max-w-md mx-auto">
                    <div className="flex gap-2">
                      <div className="flex-grow">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 bg-charcoal-black/50 border border-white/20 rounded-lg text-off-white placeholder:text-off-white/40 focus:outline-none focus:border-kiiro-yellow"
                        />
                      </div>
                      <button
                        className="px-6 py-3 bg-kiiro-yellow text-charcoal-black font-medium rounded-lg hover:bg-kiiro-yellow/90 transition-colors flex items-center gap-2"
                        onClick={() => {
                          // Here you would handle the email submission
                          alert("Report sent! Check your email in 5 minutes.");
                        }}
                      >
                        <Mail className="w-4 h-4" />
                        Send Report
                      </button>
                    </div>
                    <p className="text-xs text-off-white/40 mt-2 text-center">
                      📈 BONUS: Includes our $297 &quot;5-Minute Conversion Fixes&quot; checklist + 67% of people see results in 24 hours
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 