import NavigationBar from './NavigationBar';

function Home() {
  return (
    <>
      <div className='flex flex-row w-[100dvw]'>
        <div className='flex w-[15%]'>
          <NavigationBar />
        </div>
        <div className='flex w-[85%] bg-white'>
          <h1>home component</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
