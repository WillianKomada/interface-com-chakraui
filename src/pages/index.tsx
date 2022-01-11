import Router from "next/router";

export default function Home() {
  function handleNavigation() {
    Router.push("/dashboard");
  }
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleNavigation}>Click me!</button>
    </div>
  );
}
