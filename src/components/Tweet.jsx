const Tweet = ({ img, user, userName, tweet, date }) => {
  return (
    <>
      <div className="p-4 rounded-xl border border-[#c7d8eb] shadow-lg">
        <div className="flex items-center gap-4">
          <img src={img} alt={user} />
          <div>
            <p className="font-bold">{user}</p>
            <p className="text-gray-500">{userName}</p>
          </div>
        </div>
        <p className="tweet mt-2">{tweet}</p>
        <p>{date}</p>
      </div>
    </>
  );
};

export default Tweet;
