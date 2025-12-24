"use client";

import { HiArrowUpRight, HiCursorArrowRays, HiPaintBrush, HiCheckCircle, HiCodeBracket, HiChartBar } from "react-icons/hi2";

export default function WorkflowSection() {
  return (
    <section className="py-24 md:py-32 bg-gray-50/50 border-b border-gray-200 bg-grid">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
              Everything you need.<br />
              <span className="text-gray-400">Nothing you don&apos;t.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We stripped away the agency bloat. No account managers, no jargon.
              Just direct access to senior engineers and world-class designers.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
          >
            View Methodology
            <HiArrowUpRight />
          </a>
        </div>

        {/* 3-Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Design */}
          <div className="bg-white rounded-3xl p-2 border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-500 group">
            <div className="h-64 bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-100 mb-6">
              {/* Custom UI: Color Palette Selection */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-48 rotate-[-6deg] group-hover:rotate-0 transition-transform duration-500">
                  <div className="flex gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-purple-500"></div>
                      <div className="text-[10px] text-gray-400">Primary.500</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-purple-400"></div>
                      <div className="text-[10px] text-gray-400">Primary.400</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-purple-300"></div>
                      <div className="text-[10px] text-gray-400">Primary.300</div>
                    </div>
                  </div>
                </div>
                {/* Cursor */}
                <div className="absolute bottom-10 right-10 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <HiCursorArrowRays className="text-gray-900 text-2xl drop-shadow-md" />
                  <span className="bg-gray-900 text-white text-[10px] px-2 py-0.5 rounded-full ml-2">
                    You
                  </span>
                </div>
              </div>
            </div>
            <div className="px-4 pb-6">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <HiPaintBrush className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                World-Class Design
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Aesthetic isn&apos;t just decoration. We create emotionally resonant
                visual systems that build trust instantly.
              </p>
            </div>
          </div>

          {/* Feature 2: Development */}
          <div className="bg-white rounded-3xl p-2 border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-500 group">
            <div className="h-64 bg-[#0F0F11] rounded-2xl overflow-hidden relative border border-gray-800 mb-6 flex flex-col">
              {/* Custom UI: Code Editor */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="p-4 font-mono text-[10px] text-gray-400 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="flex">
                  <span className="text-purple-400 mr-2">const</span>
                  <span className="text-yellow-200">Payment</span> = () =&gt; {"{"}
                </div>
                <div className="flex pl-4">
                  <span className="text-purple-400 mr-2">return</span> (
                </div>
                <div className="flex pl-8 text-blue-300">
                  <span className="text-gray-500">&lt;</span>StripeProvider&gt;
                </div>
                <div className="flex pl-12 text-white">...secure_txn</div>
                <div className="flex pl-8 text-blue-300">
                  <span className="text-gray-500">&lt;/</span>StripeProvider&gt;
                </div>
                <div className="flex pl-4">)</div>
                <div className="flex">{"}"}</div>

                {/* Success Toast Animation */}
                  <div className="mt-6 bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-2 rounded flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <HiCheckCircle />
                    <span>Compiled successfully in 4ms</span>
                  </div>
              </div>
            </div>
            <div className="px-4 pb-6">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <HiCodeBracket className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                Modern Engineering
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Built on Next.js and Tailwind. Clean, accessible, and type-safe
                code that scales with your business.
              </p>
            </div>
          </div>

          {/* Feature 3: Growth */}
          <div className="bg-white rounded-3xl p-2 border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-500 group">
            <div className="h-64 bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-100 mb-6 flex items-center justify-center">
              {/* Custom UI: Revenue Card */}
              <div className="w-48 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 transform scale-95 group-hover:scale-100 transition-all duration-500">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                      MRR
                    </div>
                    <div className="text-xl font-bold text-gray-900">$12,450</div>
                  </div>
                    <div className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center">
                      <HiArrowUpRight />
                      12%
                    </div>
                </div>
                <div className="flex items-end gap-1 h-12">
                  <div className="flex-1 bg-gray-100 rounded-t h-1/3"></div>
                  <div className="flex-1 bg-gray-100 rounded-t h-2/3"></div>
                  <div className="flex-1 bg-gray-100 rounded-t h-1/2"></div>
                  <div className="flex-1 bg-gray-900 rounded-t h-full"></div>
                  <div className="flex-1 bg-gray-100 rounded-t h-3/4"></div>
                </div>
              </div>
              {/* Blurred Element behind */}
              <div className="absolute w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <div className="px-4 pb-6">
              <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                <HiChartBar className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                Growth & Data
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We implement advanced tracking and SEO foundations to ensure
                your product actually converts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

