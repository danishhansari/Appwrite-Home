import Tweet from "./Tweet"
const tweetData = [
    {img:'./avatar1.png', user: 'Apoorv Dwivedi',userName:'@Apoorvdwt', tweet:"I enjoyed working with @appwrite and their support team is way too good with really fast responses. While working on the project, I even got 2 PRs merged for bugs I spotted and the contribution lifecycle was incredibly fast from opening an issue to getting the PR merged 100 💯", date:'Feb 01, 2023' },
    {img:'./avatar2.png', user: 'Arnav Gupta',userName:'@championswimmer', tweet:"Just checked out Appwrite and it seems like a strong contender for the assemble-over-build future.", date:'Feb 10, 2023' },
    {img:'./avatar3.png', user: 'WebDeveloperMentor',userName:'@MentorWebDev', tweet:"Appwrite is an excellent platform. Best choice if you want to self-host it. ", date:'Feb 01, 2023' },
    {img:'./avatar7.png', user: 'Gilbert Gonzalez',userName:'@ggsotillo', tweet:"We reduced 80% time-to-market of our Apps using Appwrite. ", date:'Sep 21, 2022' },
    {img:'./avatar5.png', user: 'Kap.ts',userName:'@Kaperskyguru', tweet:" Backend Engineers, you will agree with me that building the AUTH process for you app everytime is a pain. We all suffers it everytime on each new API development. Here's my secret, I allow @appwrite handle my Auth process while I focus on the real business logic.", date:'Feb 23, 2023' },
    {img:'./avatar6.png', user: 'Ravi Sojitra',userName:'@ravisojitra', tweet:"This is promising, have been using it since its stable release. It's been great experience so far, never looked back at firebase. :) Keep growing.", date:'Sep 21, 2022' }
]

const TweetGrid = () => {
  return (
    <>
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
       {tweetData.map((elem, index) => (
        <div className="h-auto max-w-full" key={index}>
          <Tweet
            key={index}
            img={elem.img}
            tweet={elem.tweet}
            user={elem.user}
            userName={elem.userName}
            date={elem.date}
            />
            </div>
             ))}
   </div>
    </>
  )
}

export default TweetGrid;