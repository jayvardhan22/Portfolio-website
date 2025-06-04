import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border p-4 shadow">{children}</div>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);
