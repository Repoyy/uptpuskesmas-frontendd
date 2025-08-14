"use client";
import React, { useState } from "react";

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: "LISTIA ROSA",
    email: "melpeters@gmail.com",
    password: "************"
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div style={{ minHeight: "100vh", background: "#fff" }}>
      <div style={{
        width: "100vw",
        height: 180,
        background: "#7fdbffff",
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        position: "relative",
        display: "flex",
        justifyContent: "center"
      }}>
        <div style={{
          position: "absolute",
          top: 100,
          left: "50%",
          transform: "translateX(-50%)",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "#fff",
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          border: "3px solid #7fdbffff"
        }}>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div style={{ marginTop: 120, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <form style={{ width: 400, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label style={{ fontWeight: 600, marginBottom: 2 }}>Name</label>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: "1px solid #e8eafc", fontSize: 15 }}
                readOnly
              />
              <span style={{ cursor: "pointer" }}>
                <svg width="20" height="20" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label style={{ fontWeight: 600, marginBottom: 2 }}>Email</label>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: "1px solid #e8eafc", fontSize: 15 }}
                readOnly
              />
              <span style={{ cursor: "pointer" }}>
                <svg width="20" height="20" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
              </span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label style={{ fontWeight: 600, marginBottom: 2 }}>Password</label>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: "1px solid #e8eafc", fontSize: 15 }}
                readOnly
              />
              <span style={{ cursor: "pointer" }}>
                <svg width="20" height="20" fill="none" stroke="#888" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
              </span>
            </div>
          </div>
          {/* Tanggal Lahir dihapus sesuai permintaan */}
        </form>
      </div>
    </div>
  );
}
