export default function Capitalize({ str }: any) {
  return (
    <>
      {str[0]}
      {str.slice(1).toLowerCase()}
    </>
  );
}
