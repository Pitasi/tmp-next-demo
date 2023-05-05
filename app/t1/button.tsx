"use client";

export function Button({
  onClick,
  children,
}: {
  onClick: () => Promise<void>;
  children: string;
}) {
  return <button onClick={async () => await onClick()}>{children}</button>;
}
