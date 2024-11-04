import Ping from "@/components/Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

const NumberOfViews = ({ totalViews }: { totalViews: number }) => {
  const view = totalViews < 2 ? "View" : "View(s)";

  return `${view}: ${totalViews}`;
};
const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">{<Ping />}</div>

      <p className="view-text">
        <span className="font-black">
          <NumberOfViews totalViews={totalViews} />
        </span>
      </p>
    </div>
  );
};

export default View;
