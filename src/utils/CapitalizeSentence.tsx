export default function CapitalizeSentence({ str }: any) {
  return (
    <>
      {str
        .split(" ")
        .map((elem: string) => `${elem[0]}${elem.slice(1).toLowerCase()}`)
        .join(" ")}
      {" > "}
      <br />
    </>
  );
}
