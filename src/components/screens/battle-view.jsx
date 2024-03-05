
export default function BattleView({ handleImageLoad }) {
  const goGitBook = () => {
    const newPageURL = 'https://cryptoshowdawn.gitbook.io/untitled/';
    window.open(newPageURL, '_blank');
  }
  return (
    <div className='relative flex justify-center w-full h-full' >
      <img src="assets/images/back.jpg" alt="" className="w-full " onLoad={handleImageLoad} />
      <div className="absolute flex justify-between w-4/4 top-1/3 h-1/2">
        <img src="assets/images/characters/idle/1.gif" alt="" className="" onLoad={handleImageLoad} />
        <img src="assets/images/whitepaper.png" alt="" className="p-7 animate-whitepaper-bounce cursor-pointer" onClick={goGitBook} onLoad={handleImageLoad} />
        <img src="assets/images/characters/idle/5.gif" alt="" className=" -scale-x-100" onLoad={handleImageLoad} />
      </div>
    </div>
  )
}
