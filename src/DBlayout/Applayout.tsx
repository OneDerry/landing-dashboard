import Sidenav from "./Sidenav";
import Topnav from "./Topnav";

type ApplayoutProps = {
  children: React.ReactNode;
};
export default function Applayout(props: ApplayoutProps) {
  return (
    <main className="flex">
      <aside className="w-[15%] bg-white fixed">
        <Sidenav />
      </aside>
      <section className="w-full bg-[beige]">
        <div>
          <Topnav />
        </div>
        <div className="p-4 mt-8">{props.children}</div>
      </section>
    </main>
  );
}
