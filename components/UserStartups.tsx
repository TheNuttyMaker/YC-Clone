import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import StartupCard, { StartupTypeCard } from "./StartupCard";

const UserStartups = async ({ id }: { id: string }) => {
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

  if (startups.length < 1) {
    return <p className="no-result">No posts yet</p>;
  }
  return startups.map((startup: StartupTypeCard) => (
    <StartupCard key={startup._id} post={startup}></StartupCard>
  ));
};

export default UserStartups;
