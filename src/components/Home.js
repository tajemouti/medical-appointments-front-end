import NavigationBar from './NavigationBar';

function Home() {
  return (
    <>
      <div className='flex flex-row w-[100dvw]'>
        <div className='flex w-[15%] bg-slate-400'>
          <NavigationBar />
        </div>
        <div className='flex w-[85%] bg-slate-950'>
          <h1>home component</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
