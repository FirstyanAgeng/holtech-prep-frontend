import React, { useEffect, useState } from "react";

type RouteMap = Record<string, React.FC>;

export function RouterProvider({
  routes,
  defaultPath = "/",
}: {
  routes: RouteMap;
  defaultPath?: string;
}) {
  const [path, setPath] = useState(window.location.pathname || defaultPath);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const Page =
    routes[path] || routes[defaultPath] || (() => <div>Not found</div>);
  return <Page />;
}

export function Link({
  to,
  children,
  ...rest
}: { to: string; children: React.ReactNode } & any) {
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", to);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a href={to} onClick={onClick} {...rest}>
      {children}
    </a>
  );
}
