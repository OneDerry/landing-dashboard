import { Linedata } from "../Data/Linedata";
import { Bardata } from "../Data/Bardata";
import { Areadata } from "../Data/Areadata";
import { Basedata } from "../Data/Basedata";

type Linedataprops = {
  title: string;
  children?: React.ReactNode;
};

export default function Linegraph() {
  return (
    <main>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-7 w-full">
        <GridItem title="Views Chart">
          <Linedata />
        </GridItem>

        <GridItem title="Bar Chart">
          <Bardata />
        </GridItem>

        <GridItem title="Line Chart">
          <Areadata />
        </GridItem>
      </div>
      <div className="mt-9 bg-white rounded-[20px]">
        <Basedata />
      </div>
    </main>
  );
}

function GridItem(props: Linedataprops) {
  return (
    <div className="flex flex-col justify-center items-center pr-4 bg-white rounded-[20px] h-[330px] w-[400px] pb-2">
      <h3 className="text-2xl font-semibold font-serif mb-1 mt-1">
        {props.title}
      </h3>
      {props.children}
    </div>
  );
}
