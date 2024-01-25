type Props = { str: string };

export default function CapitalizeConsecutive({ str }: Props) {
  return (
    <>
      {str
        .split("_")
        .slice(1)
        .map((elem: string) => `${elem[0]}${elem.slice(1).toLowerCase()}`)
        .join(" ")}
    </>
  );
}
