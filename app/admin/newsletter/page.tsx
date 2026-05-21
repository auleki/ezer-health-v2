"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Download, Trash2, Plus, Pencil, Check, X, RefreshCw, Lock, Users, Mail, Calendar, ArrowLeft } from "lucide-react";

interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
  source: string;
}

export default function NewsletterAdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Partial<Subscriber>>({});
  const [addingNew, setAddingNew] = useState(false);
  const [newEntry, setNewEntry] = useState({ email: "", source: "admin-portal" });
  const [searchQuery, setSearchQuery] = useState("");

  const fetchSubscribers = useCallback(async (pwd: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/newsletter/admin", {
        headers: { Authorization: `Bearer ${pwd}` },
      });
      if (res.status === 401) {
        setAuthError("Incorrect password.");
        setIsAuthenticated(false);
        return;
      }
      const data = await res.json();
      setSubscribers(data.subscribers || []);
    } catch {
      setError("Failed to load subscribers.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    const res = await fetch("/api/newsletter/admin", {
      headers: { Authorization: `Bearer ${password}` },
    });
    if (res.status === 401) {
      setAuthError("Incorrect password. Please try again.");
      return;
    }
    const data = await res.json();
    setSubscribers(data.subscribers || []);
    setIsAuthenticated(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Remove this subscriber?")) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/newsletter/admin?id=${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${password}` },
      });
      const data = await res.json();
      setSubscribers(data.subscribers || []);
      flash("Subscriber removed.");
    } catch {
      setError("Delete failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveEdit = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter/admin", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ id, ...editValues }),
      });
      const data = await res.json();
      setSubscribers(data.subscribers || []);
      setEditingId(null);
      flash("Changes saved.");
    } catch {
      setError("Save failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddNew = async () => {
    if (!newEntry.email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter/admin", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify(newEntry),
      });
      const data = await res.json();
      setSubscribers(data.subscribers || []);
      setAddingNew(false);
      setNewEntry({ email: "", source: "admin-portal" });
      flash("Subscriber added.");
    } catch {
      setError("Add failed.");
    } finally {
      setLoading(false);
    }
  };

  const exportCSV = () => {
    const header = "ID,Email,Subscribed At,Source\n";
    const rows = subscribers
      .map((s) => `"${s.id}","${s.email}","${s.subscribedAt}","${s.source}"`)
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `newsletter-subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const flash = (msg: string) => {
    setSuccess(msg);
    setTimeout(() => setSuccess(""), 3000);
  };

  const filtered = subscribers.filter(
    (s) =>
      s.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.source.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center space-y-3">
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-6 h-6 text-zinc-400" />
            </div>
            <h1 className="text-2xl font-serif text-white">Admin Portal</h1>
            <p className="text-xs text-zinc-500 uppercase tracking-widest">Ezerhealthcare · Protected Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Admin Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-white/5 border border-white/10 text-white px-4 py-3.5 rounded-sm text-sm focus:outline-none focus:border-white/30 placeholder:text-zinc-700 transition-colors"
                required
              />
            </div>
            {authError && (
              <p className="text-red-400 text-xs font-medium">{authError}</p>
            )}
            <button
              type="submit"
              className="w-full bg-white text-black py-3.5 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-100 transition-all"
            >
              Access Portal
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
              <ArrowLeft className="w-3 h-3" />
              Back to Main Site
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <div className="border-b border-white/5 px-8 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Link href="/" className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
                <ArrowLeft className="w-3 h-3" />
                Main Site
              </Link>
            </div>
            <h1 className="text-xl font-serif text-white">Admin Portal</h1>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">Ezerhealthcare · Newsletter Subscribers</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchSubscribers(password)}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-sm text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-white/20 transition-all"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={exportCSV}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-100 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8 space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Users, label: "Total Subscribers", value: subscribers.length },
            { icon: Mail, label: "Sources", value: [...new Set(subscribers.map((s) => s.source))].length },
            {
              icon: Calendar,
              label: "Latest Signup",
              value: subscribers.length
                ? new Date(
                    Math.max(...subscribers.map((s) => new Date(s.subscribedAt).getTime()))
                  ).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
                : "—",
            },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white/[0.03] border border-white/5 rounded-sm p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 rounded-sm flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-zinc-500" />
              </div>
              <div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">{label}</div>
                <div className="text-xl font-serif text-white">{value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Alerts */}
        {success && (
          <div className="flex items-center gap-2 px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-sm text-emerald-400 text-xs font-medium">
            <Check className="w-4 h-4" /> {success}
          </div>
        )}
        {error && (
          <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-sm text-red-400 text-xs font-medium">
            <X className="w-4 h-4" /> {error}
          </div>
        )}

        {/* Toolbar */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search by email or source..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-white/5 border border-white/10 text-white px-4 py-2.5 rounded-sm text-sm focus:outline-none focus:border-white/30 placeholder:text-zinc-700 transition-colors"
          />
          <button
            onClick={() => setAddingNew(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-sm text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white hover:border-white/20 transition-all whitespace-nowrap"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Subscriber
          </button>
        </div>

        {/* Table */}
        <div className="bg-white/[0.02] border border-white/5 rounded-sm overflow-hidden">
          {/* Add new row */}
          {addingNew && (
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5 bg-white/[0.04]">
              <input
                type="email"
                placeholder="email@example.com"
                value={newEntry.email}
                onChange={(e) => setNewEntry({ ...newEntry, email: e.target.value })}
                className="flex-1 bg-white/5 border border-white/10 text-white px-3 py-2 rounded-sm text-sm focus:outline-none focus:border-white/30 placeholder:text-zinc-700"
              />
              <input
                type="text"
                placeholder="source"
                value={newEntry.source}
                onChange={(e) => setNewEntry({ ...newEntry, source: e.target.value })}
                className="w-48 bg-white/5 border border-white/10 text-white px-3 py-2 rounded-sm text-sm focus:outline-none focus:border-white/30 placeholder:text-zinc-700"
              />
              <button onClick={handleAddNew} className="p-2 text-emerald-400 hover:text-emerald-300 transition-colors">
                <Check className="w-4 h-4" />
              </button>
              <button onClick={() => setAddingNew(false)} className="p-2 text-zinc-500 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Column Headers */}
          <div className="grid grid-cols-[2fr_1.5fr_1fr_auto] gap-4 px-6 py-3 border-b border-white/5">
            {["Email", "Subscribed At", "Source", ""].map((h) => (
              <div key={h} className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">{h}</div>
            ))}
          </div>

          {/* Rows */}
          {filtered.length === 0 && (
            <div className="px-6 py-16 text-center text-zinc-600 text-sm">
              {searchQuery ? "No results match your search." : "No subscribers yet."}
            </div>
          )}

          {filtered.map((sub) => (
            <div
              key={sub.id}
              className="grid grid-cols-[2fr_1.5fr_1fr_auto] gap-4 items-center px-6 py-4 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors"
            >
              {editingId === sub.id ? (
                <>
                  <input
                    type="email"
                    value={editValues.email ?? sub.email}
                    onChange={(e) => setEditValues({ ...editValues, email: e.target.value })}
                    className="bg-white/5 border border-white/20 text-white px-3 py-1.5 rounded-sm text-sm focus:outline-none"
                  />
                  <input
                    type="text"
                    value={editValues.subscribedAt ?? sub.subscribedAt}
                    onChange={(e) => setEditValues({ ...editValues, subscribedAt: e.target.value })}
                    className="bg-white/5 border border-white/20 text-white px-3 py-1.5 rounded-sm text-sm focus:outline-none"
                  />
                  <input
                    type="text"
                    value={editValues.source ?? sub.source}
                    onChange={(e) => setEditValues({ ...editValues, source: e.target.value })}
                    className="bg-white/5 border border-white/20 text-white px-3 py-1.5 rounded-sm text-sm focus:outline-none"
                  />
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleSaveEdit(sub.id)} className="p-1.5 text-emerald-400 hover:text-emerald-300 transition-colors">
                      <Check className="w-4 h-4" />
                    </button>
                    <button onClick={() => setEditingId(null)} className="p-1.5 text-zinc-600 hover:text-white transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span className="text-sm text-white font-medium truncate">{sub.email}</span>
                  <span className="text-xs text-zinc-500">
                    {new Date(sub.subscribedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-600 bg-white/5 px-2 py-1 rounded-sm w-fit">
                    {sub.source}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => { setEditingId(sub.id); setEditValues({}); }}
                      className="p-1.5 text-zinc-600 hover:text-white transition-colors"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(sub.id)}
                      className="p-1.5 text-zinc-600 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <p className="text-[10px] text-zinc-700 text-center">
          {filtered.length} of {subscribers.length} subscribers · Data stored in <code className="text-zinc-600">data/newsletter-subscribers.json</code>
        </p>
      </div>
    </div>
  );
}
