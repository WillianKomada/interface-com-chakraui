import Router from "next/router";

export default function Dashboard() {
  function handleNavigation() {
    Router.push("/");
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleNavigation}>Click me!</button>
    </div>
  );
}
