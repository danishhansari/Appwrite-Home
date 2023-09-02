import Card from "./Card";
const cardDate = [
  {
    img: "./database.png",
    title: "Database",
    paragraph:
      "Store, query and manage access to your app data in real-time with a robust and scalable database",
  },
  {
    img: "./users.png",
    title: "Authentication",
    paragraph:
      "Effortless user logins and management with a suite of authentication methods and OAuth providers",
  },
  {
    img: "./storage.png",
    title: "Storage",
    paragraph:
      "Store and serve media and files with built in compression and encryption",
  },
  {
    img: "./function.png",
    title: "Function",
    paragraph:
      "Extend Appwrite’s functionality using your favourite language with serverless functions that scale on demand ",
  },
  {
    img: "./security-privacy.png",
    title: "Security & Privacy",
    paragraph:
      "Built-in SSL certificates, encryption, abuse control, audit logs, RBAC and more to ensure security, privacy and peace of mind ",
  },
  {
    img: "./realtime.png",
    title: "Realtime",
    paragraph:
      "A Realtime database. Realtime Storage. Realtime everything. Subscribe and listen to any event in Appwrite",
  },
];

const CardGrid = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 max-w-[1100px] mx-auto px-4 ">
        {cardDate.map((card, index) => (
        <div key={index}>
          <Card
            key={index}
            title={card.title}
            paragraph={card.paragraph}
            img={card.img}
            />
        </div>
        ))}
      </div>
    </>
  );
};

export default CardGrid;
