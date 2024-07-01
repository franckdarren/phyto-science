import data from "../../data/temoignages";

export default function Temoignages({ params }) {
    const temoignage = data.filter((temoignage) => temoignage.id === parseInt(params.id));
    console.log(temoignage)
    return (
        <div className="">
            <h1 className="text-black">{temoignage[0].titre}</h1>
            <div dangerouslySetInnerHTML={{ __html: temoignage[0].description }} />
        </div>
    );
}
