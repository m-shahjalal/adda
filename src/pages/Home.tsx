
import { TopNav } from "../components/TopNav";



const Home = () => {
  return (
    <div>
      <TopNav />
      <div className="flex w-full h-screen gap-2 p-2 mx-auto mt-16">
        <div className="flex flex-col w-1/4 h-full p-3 bg-slate-200">
        
        </div>
        <div className="flex flex-col w-2/4 h-screen p-2 bg-slate-300">
       
        
        </div>
        <div className="flex flex-col w-1/4 h-full p-2 bg-slate-200">
      
        </div>
      </div>
    </div>
  );
};
export default Home;
