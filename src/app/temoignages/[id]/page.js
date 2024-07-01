import data from "../../data/temoignages";

export default function Temoignages({ params }) {
    const temoignage = data.find((temoignage) => temoignage.id === parseInt(params.id));
    return (
        <div className="">
            <h1 className="text-black">{temoignage.titre}</h1>
            <div dangerouslySetInnerHTML={{ __html: temoignage.description }} />
        </div>
    );
}
