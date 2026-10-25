import React, { useState } from 'react';
import { Sliders, X, CheckCircle, AlertTriangle, Copy, RefreshCw } from 'lucide-react';
import { useBusinessDetails } from '../context/BusinessDetailsContext';

export const AdminPreviewDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { details, updateDetail, resetToDefault, isModified, exportAsTxt } = useBusinessDetails();

  const handleCopy = () => {
    navigator.clipboard.writeText(exportAsTxt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#172A3A] text-white text-xs font-bold shadow-lg hover:bg-[#172A3A]/90 active:scale-95 transition-all border border-white/10"
          title="Open Business Details Config & Placeholder Inspector"
        >
          <Sliders className="w-3.5 h-3.5 text-[#FFC83D]" />
          <span>Config & Placeholders</span>
          {details.meta.unresolvedCount > 0 && (
            <span className="w-2 h-2 rounded-full bg-amber-400" />
          )}
        </button>
      </div>

      {/* Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-[#FFF4F1]/60">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#FFC83D] flex items-center justify-center text-[#172A3A]">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#172A3A]">
                    Business Details Configuration
                  </h3>
                  <p className="text-xs text-[#687786]">
                    Synced with <code className="bg-white/80 px-1 py-0.5 rounded text-[11px] font-mono">business_details.txt</code>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="Close config modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Status Strip */}
            <div className="px-5 py-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                {details.meta.unresolvedCount === 0 ? (
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    All placeholders resolved!
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-amber-700 font-semibold">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    {details.meta.unresolvedCount} placeholder(s) pending
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                {isModified && (
                  <button
                    onClick={resetToDefault}
                    className="flex items-center gap-1 text-slate-600 hover:text-slate-900 font-medium"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Reset to file
                  </button>
                )}
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FFC83D] text-[#172A3A] font-bold hover:brightness-95 transition-all text-xs"
                >
                  <Copy className="w-3 h-3" />
                  {copied ? 'Copied TXT!' : 'Copy business_details.txt'}
                </button>
              </div>
            </div>

            {/* Editable Form Controls */}
            <div className="p-5 overflow-y-auto space-y-5 text-xs sm:text-sm">
              {/* Identity Section */}
              <div className="space-y-3">
                <h4 className="font-bold text-[#172A3A] text-xs uppercase tracking-wider text-slate-500">
                  Preschool Identity
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Preschool Name
                    </label>
                    <input
                      type="text"
                      value={details.identity.name}
                      onChange={(e) => updateDetail('identity.name', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FFC83D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Tagline
                    </label>
                    <input
                      type="text"
                      value={details.identity.tagline}
                      onChange={(e) => updateDetail('identity.tagline', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FFC83D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Principal Name
                    </label>
                    <input
                      type="text"
                      value={details.identity.principalName}
                      onChange={(e) => updateDetail('identity.principalName', e.target.value)}
                      placeholder="e.g. Mrs. Sharma"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FFC83D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      School Type
                    </label>
                    <input
                      type="text"
                      value={details.identity.schoolType}
                      onChange={(e) => updateDetail('identity.schoolType', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FFC83D]"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <h4 className="font-bold text-[#172A3A] text-xs uppercase tracking-wider text-slate-500">
                  Contact & Calling Numbers
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Principal Phone (opens dialer)
                    </label>
                    <input
                      type="text"
                      value={details.contact.phone}
                      onChange={(e) => updateDetail('contact.phone', e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FFC83D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      WhatsApp Number (for wa.me chat)
                    </label>
                    <input
                      type="text"
                      value={details.contact.whatsapp}
                      onChange={(e) => updateDetail('contact.whatsapp', e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FFC83D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={details.contact.email}
                      onChange={(e) => updateDetail('contact.email', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FFC83D]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">
                      Operating Hours Summary
                    </label>
                    <input
                      type="text"
                      value={details.hours.opening + ' - ' + details.hours.closing}
                      onChange={(e) => updateDetail('hours.opening', e.target.value)}
                      placeholder="e.g. 8:30 AM - 6:30 PM"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FFC83D]"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-3">
                <h4 className="font-bold text-[#172A3A] text-xs uppercase tracking-wider text-slate-500">
                  Address & Location
                </h4>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Full Formatted Address
                  </label>
                  <input
                    type="text"
                    value={details.address.formattedFull}
                    onChange={(e) => updateDetail('address.formattedFull', e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#FFC83D]"
                  />
                </div>
              </div>

              {/* Build Instructions Box */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 text-slate-600">
                <div className="font-bold text-slate-800">
                  💡 How the build process updates the website:
                </div>
                <p>
                  1. Edit <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-800">business_details.txt</code> in the project root.
                </p>
                <p>
                  2. Run <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-800">npm run build</code> or <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-800">node scripts/build-site.mjs</code>.
                </p>
                <p>
                  3. The script validates all placeholders, generates clean links, and outputs the production build to <code className="bg-white px-1 py-0.5 rounded font-mono text-slate-800">dist/</code>.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 flex items-center justify-end gap-3 bg-slate-50">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
