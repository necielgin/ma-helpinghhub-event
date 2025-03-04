export default async function EventsPage({
  searchParams,
}: {
  searchParams: { location?: string };
}) {
  const {location} = await searchParams;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Events in {location || "ALL EVENT"}</h1>
      {/* Fetch events based on the location query */}
    </div>
  );
}