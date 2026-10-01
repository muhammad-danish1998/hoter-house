"use client";

export const dynamic = "force-dynamic";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { supabase } from "@/lib/supabase/client";
import {
  Phone,
  Clock,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  ArrowLeft,
  Calendar,
  MapPin,
  Flame,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface LeadItem {
  id: string;
  created_at: string;
  full_name: string;
  phone: string;
  email: string | null;
  service_type: string;
  urgency: "emergency" | "today" | "flexible";
  street_address: string;
  zip_code: string;
  issue_description: string;
  status: "new" | "contacted" | "scheduled" | "completed" | "archived";
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = React.useState<LeadItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [filterStatus, setFilterStatus] = React.useState<string>("all");

  const fetchLeads = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: fetchErr } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (fetchErr) throw fetchErr;
      setLeads((data as LeadItem[]) || []);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to load leads";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const updateStatus = async (id: string, newStatus: LeadItem["status"]) => {
    try {
      const { error: updateErr } = await supabase
        .from("leads")
        .update({ status: newStatus })
        .eq("id", id);

      if (updateErr) throw updateErr;

      setLeads((prev) =>
        prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
      );
    } catch (err: unknown) {
      alert("Failed to update status: " + (err instanceof Error ? err.message : "Error"));
    }
  };

  const filteredLeads = leads.filter((l) =>
    filterStatus === "all" ? true : l.status === filterStatus
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold">
                  <Flame className="w-4 h-4 text-sky-200" />
                </div>
                <h1 className="text-2xl font-black text-white">
                  Dispatch Leads Center
                </h1>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-1 pl-11">
              Internal incoming service calls for {siteConfig.name}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={fetchLeads}
              isLoading={loading}
              className="bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white text-xs"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh Leads</span>
            </Button>
          </div>
        </div>

        {/* Filter bar & Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
            <p className="text-xs text-slate-400 font-medium">Total Received Leads</p>
            <p className="text-2xl font-bold text-white mt-1">{leads.length}</p>
          </div>
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
            <p className="text-xs text-orange-400 font-medium">Emergency Calls</p>
            <p className="text-2xl font-bold text-orange-400 mt-1">
              {leads.filter((l) => l.urgency === "emergency").length}
            </p>
          </div>
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
            <p className="text-xs text-amber-400 font-medium">Pending Contact</p>
            <p className="text-2xl font-bold text-amber-400 mt-1">
              {leads.filter((l) => l.status === "new").length}
            </p>
          </div>
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4">
            <p className="text-xs text-emerald-400 font-medium">Completed / Scheduled</p>
            <p className="text-2xl font-bold text-emerald-400 mt-1">
              {leads.filter((l) => l.status === "scheduled" || l.status === "completed").length}
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs">
          <span className="text-slate-400 flex items-center gap-1 font-medium">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {["all", "new", "contacted", "scheduled", "completed", "archived"].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 rounded-lg capitalize font-medium transition-colors ${
                filterStatus === st
                  ? "bg-sky-600 text-white"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Error alert */}
        {error && (
          <div className="p-4 rounded-xl bg-red-950/60 border border-red-800 text-red-200 text-sm">
            {error}
          </div>
        )}

        {/* Leads Table */}
        <div className="bg-slate-800/90 border border-slate-700 rounded-2xl overflow-hidden shadow-xl">
          {loading && leads.length === 0 ? (
            <div className="py-20 text-center text-slate-400 text-sm">
              <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-sky-400" />
              Loading incoming leads...
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="py-20 text-center text-slate-400 text-sm">
              No service leads found matching this filter.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-900/90 text-xs font-bold uppercase text-slate-400 border-b border-slate-700">
                  <tr>
                    <th className="py-3.5 px-4">Urgency / Date</th>
                    <th className="py-3.5 px-4">Customer</th>
                    <th className="py-3.5 px-4">Service / Problem</th>
                    <th className="py-3.5 px-4">Address</th>
                    <th className="py-3.5 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-750/50 transition-colors">
                      {/* Urgency & Timestamp */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="space-y-1">
                          {lead.urgency === "emergency" ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-950 text-red-400 border border-red-800">
                              <AlertTriangle className="w-3 h-3" /> EMERGENCY
                            </span>
                          ) : lead.urgency === "today" ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-950 text-amber-400 border border-amber-800">
                              <Clock className="w-3 h-3" /> TODAY
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-700 text-slate-300">
                              <Calendar className="w-3 h-3" /> Flexible
                            </span>
                          )}
                          <p className="text-[11px] text-slate-500">
                            {new Date(lead.created_at).toLocaleString()}
                          </p>
                        </div>
                      </td>

                      {/* Customer info */}
                      <td className="py-4 px-4">
                        <div className="font-bold text-white text-base">
                          {lead.full_name}
                        </div>
                        <a
                          href={`tel:${lead.phone}`}
                          className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold text-xs mt-0.5"
                        >
                          <Phone className="w-3 h-3" /> {lead.phone}
                        </a>
                        {lead.email && (
                          <p className="text-[11px] text-slate-400">{lead.email}</p>
                        )}
                      </td>

                      {/* Service & Issue */}
                      <td className="py-4 px-4 max-w-xs">
                        <span className="inline-block font-semibold text-sky-400 text-xs bg-sky-950 px-2 py-0.5 rounded border border-sky-800 mb-1">
                          {lead.service_type}
                        </span>
                        <p className="text-xs text-slate-300 line-clamp-3">
                          {lead.issue_description}
                        </p>
                      </td>

                      {/* Address */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="flex items-start gap-1.5 text-xs">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-white font-medium">{lead.street_address}</p>
                            <p className="text-slate-400">{lead.zip_code}</p>
                          </div>
                        </div>
                      </td>

                      {/* Status Selector */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <select
                          value={lead.status}
                          onChange={(e) =>
                            updateStatus(lead.id, e.target.value as LeadItem["status"])
                          }
                          className="bg-slate-900 border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 font-medium text-slate-200 focus:outline-none focus:ring-1 focus:ring-sky-500"
                        >
                          <option value="new">🟡 New</option>
                          <option value="contacted">🔵 Contacted</option>
                          <option value="scheduled">🟢 Scheduled</option>
                          <option value="completed">✅ Completed</option>
                          <option value="archived">⚪ Archived</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
