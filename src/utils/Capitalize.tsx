export default function Capitalize({ str }: any) {
  return (
    <>
      {str?.[0]?.toUpperCase()}
      {str?.slice(1)?.toLowerCase()}
    </>
  );
}
