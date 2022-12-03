import Card from "./Card";

function Carousel({data}) {
  return (
    <>
      <div className="Carousel">
        {data.map((res, i) => {
          return <Card data={res} key={i} />;
        })}
      </div>
    </>
  );
}
export default Carousel;


