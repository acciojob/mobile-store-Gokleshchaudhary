import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/admin">Admin Panel</Link>
      </nav>
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
}
